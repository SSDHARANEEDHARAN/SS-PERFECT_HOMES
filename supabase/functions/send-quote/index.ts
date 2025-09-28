import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  requirements: string;
  dimensions: string;
  budget: string;
  title: string;
  description: string;
  submittedAt: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteRequest: QuoteRequest = await req.json();
    
    console.log("Received quote request:", quoteRequest);

    // Send notification email to admin using direct API call
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Quotes <onboarding@resend.dev>",
        to: ['tharaneetharanss@gmail.com'],
        subject: `New Quote Request - ${quoteRequest.title}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #dc2626; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">🚨 NEW QUOTE REQUEST!</h1>
            <h2 style="color: #fef2f2; margin: 0; font-size: 18px;">Perfect Home's Interiors & Solutions</h2>
            <p style="color: #fecaca; margin: 5px 0 0 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #0284c7;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #0369a1; margin-bottom: 10px; font-size: 18px;">💼 SERVICE QUOTE REQUEST</h3>
              <p style="color: #0284c7; margin: 0; font-size: 16px; font-weight: 600;">${quoteRequest.title}</p>
            </div>
          </div>

          <div style="background-color: #fef2f2; border: 2px solid #dc2626; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-bottom: 20px; font-size: 18px; display: flex; align-items: center;">
              📋 COMPLETE QUOTE REQUEST DETAILS
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151; width: 35%;">Service Type:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteRequest.title}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Customer Name:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteRequest.name}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Email Address:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;"><a href="mailto:${quoteRequest.email}" style="color: #dc2626;">${quoteRequest.email}</a></td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;"><a href="tel:${quoteRequest.phone}" style="color: #dc2626;">${quoteRequest.phone}</a></td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Project Address:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteRequest.address}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Budget Range:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteRequest.budget || 'Not specified'}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Submitted:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${new Date(quoteRequest.submittedAt).toLocaleString()}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Quote ID:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${Date.now().toString(36).toUpperCase()}</td>
              </tr>
            </table>
          </div>

          ${quoteRequest.dimensions ? `
          <div style="background-color: #f0f9ff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              📐 DIMENSIONS & SPECIFICATIONS
            </h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
              <p style="color: #374151; line-height: 1.6; margin: 0;">${quoteRequest.dimensions}</p>
            </div>
          </div>
          ` : ''}

          <div style="background-color: #f0f9ff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              💬 PROJECT REQUIREMENTS
            </h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
              <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${quoteRequest.requirements}</p>
            </div>
          </div>

          <div style="background-color: #f0fdf4; border: 2px solid #16a34a; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #15803d; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              ⚡ IMMEDIATE ACTION REQUIRED
            </h3>
            <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Prepare Quote Timeline:</strong> Within 24-48 hours</li>
              <li><strong>Primary Contact:</strong> ${quoteRequest.phone} (WhatsApp preferred)</li>
              <li><strong>Email Contact:</strong> ${quoteRequest.email}</li>
              <li><strong>Service Required:</strong> ${quoteRequest.title}</li>
              <li><strong>Follow-up Required:</strong> Detailed quote, project consultation</li>
            </ul>
          </div>

          <div style="text-align: center; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 8px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <span style="color: #dc2626; font-weight: bold; font-size: 20px;">SS</span>
            </div>
            <p style="color: #374151; margin: 0; font-size: 14px; font-weight: 600;">Perfect Home's Interiors & Solutions</p>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Contact: +91 8870086023 | +91 9944864216</p>
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
        from: "Perfect Home's Quotes <onboarding@resend.dev>",
        to: [quoteRequest.email],
        subject: 'Quote Request Received - Perfect Home\'s Interiors & Solutions',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #16a34a, #15803d); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #16a34a; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">Perfect Home's Interiors & Solutions</h1>
            <p style="color: #dcfce7; margin: 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
            <h2 style="color: #ffffff; margin: 15px 0 0 0; font-size: 20px;">✅ Quote Request Received!</h2>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #16a34a;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #15803d; margin-bottom: 10px; font-size: 18px;">Dear ${quoteRequest.name}!</h3>
            </div>
            <p style="color: #374151; line-height: 1.6; margin-bottom: 15px;">
              Thank you for requesting a quote for <strong>${quoteRequest.title}</strong>! We have received your request and our expert team will prepare a detailed, customized quote for your project.
            </p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <h3 style="color: #374151; margin-bottom: 15px; font-size: 16px;">📋 Your Quote Request Summary:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 35%;">Service:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${quoteRequest.title}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Project Address:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${quoteRequest.address}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Contact Number:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${quoteRequest.phone}</td>
              </tr>
              ${quoteRequest.budget ? `
              <tr style="background-color: #fefefe;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Budget Range:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${quoteRequest.budget}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background-color: #fef3c7; border: 2px solid #f59e0b; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin-bottom: 15px; font-size: 16px;">🚀 What happens next?</h3>
            <ul style="color: #374151; line-height: 1.6; padding-left: 20px; margin: 0;">
              <li>Our expert team will review your detailed requirements</li>
              <li>We'll prepare a comprehensive quote with pricing breakdown</li>
              <li>You'll receive the detailed quote within 24-48 hours</li>
              <li>Our team may contact you for additional specifications if needed</li>
              <li>Schedule a free consultation to discuss your project in detail</li>
            </ul>
          </div>

          <div style="text-align: center; background-color: #fef2f2; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-bottom: 15px; font-size: 16px;">📞 Need Immediate Assistance?</h3>
            <p style="color: #374151; margin-bottom: 15px;">For urgent queries, feel free to call or WhatsApp us directly:</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="color: #dc2626; font-size: 18px; font-weight: bold; margin: 0;">
                📱 +91 8870086023 | +91 9944864216
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Available Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</p>
            </div>
          </div>

          <div style="text-align: center; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 8px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <span style="color: #16a34a; font-weight: bold; font-size: 20px;">SS</span>
            </div>
            <p style="color: #374151; margin: 0; font-size: 14px; font-weight: 600;">Best regards,</p>
            <p style="color: #374151; margin: 5px 0; font-size: 16px; font-weight: bold;">The Perfect Home's Team</p>
            <p style="color: #6b7280; margin: 0; font-size: 12px;">Professional Interiors & Smart Solutions</p>
          </div>
        `,
      }),
    });

    console.log("Customer confirmation email sent:", customerEmailResponse.ok);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request submitted successfully'
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
    console.error("Error in send-quote function:", error);
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