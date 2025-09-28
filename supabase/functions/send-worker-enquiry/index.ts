import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WorkerEnquiryRequest {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  address: string;
  workType: string;
  requirements: string;
  preferredDate: string;
  preferredTime: string;
  urgency: string;
  submittedAt: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const workerEnquiry: WorkerEnquiryRequest = await req.json();
    
    console.log("Received worker enquiry:", workerEnquiry);

    // Send notification email to admin using direct API call
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Perfect Home\'s Interiors & Solutions <onboarding@resend.dev>',
        to: ['tharaneetharanss@gmail.com'],
        subject: `Workers Request - ${workerEnquiry.workType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              🔧 Workers Request - Perfect Home's Interiors & Solutions
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #007bff; margin-top: 0;">Customer Information</h3>
              <p><strong>Name:</strong> ${workerEnquiry.name}</p>
              <p><strong>Email:</strong> ${workerEnquiry.email}</p>
              <p><strong>Phone:</strong> ${workerEnquiry.phone}</p>
              <p><strong>WhatsApp:</strong> ${workerEnquiry.whatsapp}</p>
            </div>

            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">Location & Schedule</h3>
              <p><strong>City/Area:</strong> ${workerEnquiry.location}</p>
              <p><strong>Complete Address:</strong> ${workerEnquiry.address}</p>
              <p><strong>Preferred Date:</strong> ${workerEnquiry.preferredDate}</p>
              <p><strong>Preferred Time:</strong> ${workerEnquiry.preferredTime || 'Not specified'}</p>
              <p><strong>Urgency:</strong> ${workerEnquiry.urgency || 'Normal'}</p>
            </div>

            <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0c5460; margin-top: 0;">Work Details</h3>
              <p><strong>Type of Work:</strong> ${workerEnquiry.workType}</p>
              <p><strong>Requirements:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${workerEnquiry.requirements.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="background-color: #e2e3e5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #6c757d;">
                <strong>Submitted:</strong> ${new Date(workerEnquiry.submittedAt).toLocaleString()}
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; margin: 0;">Perfect Home's Interiors & Solutions</p>
            </div>
          </div>
        `,
      }),
    });

    console.log("Admin notification email sent:", adminEmailResponse.ok);

    // Send confirmation email to customer
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Perfect Home\'s Interiors & Solutions <onboarding@resend.dev>',
        to: [workerEnquiry.email],
        subject: 'Thank You for Your Worker Request - Perfect Home\'s Interiors & Solutions',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #28a745; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
              ✅ Worker Request Confirmed - Perfect Home's Interiors & Solutions
            </h2>
            
            <p>Dear ${workerEnquiry.name},</p>
            
            <p>Thank you for requesting our worker services! We have received your request and our team will contact you soon to arrange the service.</p>

            <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #155724; margin-top: 0;">Your Request Details</h3>
              <p><strong>Work Type:</strong> ${workerEnquiry.workType}</p>
              <p><strong>Location:</strong> ${workerEnquiry.location}</p>
              <p><strong>Preferred Date:</strong> ${workerEnquiry.preferredDate}</p>
              <p><strong>Contact Number:</strong> ${workerEnquiry.whatsapp}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">What happens next?</h3>
              <ul style="color: #6c757d;">
                <li>Our team will review your requirements</li>
                <li>We'll contact you within 24 hours to confirm details</li>
                <li>Our skilled workers will arrive at your location on the scheduled date</li>
                <li>High-quality work guaranteed with professional service</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6c757d;">For any questions, contact us:</p>
              <p style="color: #007bff; font-weight: bold;">WhatsApp: +91 8870086023 | +91 9944864216</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; margin: 0;">Best regards,<br>Perfect Home's Interiors & Solutions Team</p>
            </div>
          </div>
        `,
      }),
    });

    console.log("Customer confirmation email sent:", customerEmailResponse.ok);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Worker enquiry submitted successfully'
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
    console.error("Error in send-worker-enquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);