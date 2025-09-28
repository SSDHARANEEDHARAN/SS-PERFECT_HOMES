import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DoorQuoteRequest {
  doorCategory: string;
  imageUrl: string;
  imageIndex: number;
  customerInfo?: {
    name?: string;
    email?: string;
    phone?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { doorCategory, imageUrl, imageIndex, customerInfo }: DoorQuoteRequest = await req.json();

    console.log("Door quote request received:", {
      doorCategory,
      imageIndex,
      customerInfo,
    });

    // Here you would typically:
    // 1. Save the quote request to database
    // 2. Send notification emails to admin
    // 3. Send confirmation to customer if email provided
    // 4. Generate quote ID for tracking

    const quoteId = `DOOR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Log the quote request for admin review
    console.log(`New door quote request:
      Quote ID: ${quoteId}
      Category: ${doorCategory}
      Image Index: ${imageIndex}
      Timestamp: ${new Date().toISOString()}
      Customer: ${customerInfo?.name || 'Anonymous'}
      Email: ${customerInfo?.email || 'Not provided'}
      Phone: ${customerInfo?.phone || 'Not provided'}
    `);

    return new Response(
      JSON.stringify({
        success: true,
        quoteId,
        message: `Quote request for ${doorCategory} (Image #${imageIndex}) has been submitted successfully`,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-door-quote function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message,
        message: "Failed to process quote request"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);