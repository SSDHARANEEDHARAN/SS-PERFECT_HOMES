import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, service, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { firstName, lastName, email, phone, service });

    // Send email to shop owner using direct API call
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Contact <onboarding@resend.dev>",
        to: ["tharaneetharanss@gmail.com"],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #1e40af, #3b82f6); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #1e40af; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">Perfect Home's Interiors & Solutions</h1>
            <p style="color: #e0e7ff; margin: 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
            <h2 style="color: #ffffff; margin: 15px 0 0 0; font-size: 20px;">🚨 NEW CONTACT FORM SUBMISSION</h2>
          </div>

          <div style="background-color: #f8fafc; border: 2px solid #1e40af; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-bottom: 20px; font-size: 18px; display: flex; align-items: center;">
              👤 COMPLETE CUSTOMER INFORMATION
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 35%;">Full Name:</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #6b7280;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Email Address:</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #6b7280;"><a href="mailto:${email}" style="color: #1e40af;">${email}</a></td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #6b7280;"><a href="tel:${phone}" style="color: #1e40af;">${phone}</a></td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Service Interest:</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #6b7280;">${service || 'Not specified'}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Submission Time:</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #6b7280;">${new Date().toLocaleString()}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Contact ID:</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #6b7280;">${Date.now().toString(36).toUpperCase()}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f0f9ff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              💬 PROJECT DESCRIPTION
            </h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
              <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background-color: #f0fdf4; border: 2px solid #16a34a; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #15803d; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              ⚡ IMMEDIATE ACTION REQUIRED
            </h3>
            <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Response Timeline:</strong> Within 24 hours</li>
              <li><strong>Primary Contact:</strong> ${phone} (WhatsApp preferred)</li>
              <li><strong>Email Contact:</strong> ${email}</li>
              <li><strong>Service Required:</strong> ${service || 'General Inquiry'}</li>
              <li><strong>Follow-up Required:</strong> Project consultation, detailed quote</li>
            </ul>
          </div>

          <div style="text-align: center; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 8px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <span style="color: #1e40af; font-weight: bold; font-size: 20px;">SS</span>
            </div>
            <p style="color: #374151; margin: 0; font-size: 14px; font-weight: 600;">Perfect Home's Interiors & Solutions</p>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Contact: +91 8870086023 | +91 9944864216</p>
          </div>
        `,
      }),
    });

    console.log("Email sent successfully to shop owner:", emailResponse);

    // Send confirmation email to customer
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Perfect Home's!",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #1e40af, #3b82f6); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #1e40af; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">Perfect Home's Interiors & Solutions</h1>
            <p style="color: #e0e7ff; margin: 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
            <h2 style="color: #ffffff; margin: 15px 0 0 0; font-size: 20px;">Thank You, ${firstName}!</h2>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #0284c7;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #0369a1; margin-bottom: 10px; font-size: 18px;">✅ Your Message Has Been Received!</h3>
            </div>
            <p style="color: #374151; line-height: 1.6; margin-bottom: 15px;">
              We have received your message and will get back to you within 24 hours. Our team is excited to help you transform your space with our professional interior solutions!
            </p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <h3 style="color: #374151; margin-bottom: 15px; font-size: 16px;">📋 Your Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 35%;">Name:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${phone}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Service Interest:</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; color: #6b7280;">${service || 'General Inquiry'}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f0fdf4; border: 2px solid #16a34a; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #15803d; margin-bottom: 15px; font-size: 16px;">🚀 What happens next?</h3>
            <ul style="color: #374151; line-height: 1.6; padding-left: 20px; margin: 0;">
              <li>Our expert team will review your project details</li>
              <li>We'll contact you within 24 hours to discuss your needs</li>
              <li>Schedule a free consultation at your convenience</li>
              <li>Provide you with a customized solution and detailed quote</li>
              <li>Begin transforming your space with professional craftsmanship</li>
            </ul>
          </div>

          <div style="text-align: center; background-color: #fef2f2; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-bottom: 15px; font-size: 16px;">📞 Need Immediate Assistance?</h3>
            <p style="color: #374151; margin-bottom: 15px;">Feel free to call or WhatsApp us directly:</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="color: #dc2626; font-size: 18px; font-weight: bold; margin: 0;">
                📱 +91 8870086023 | +91 9944864216
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Available Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</p>
            </div>
          </div>

          <div style="text-align: center; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 8px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <span style="color: #1e40af; font-weight: bold; font-size: 20px;">SS</span>
            </div>
            <p style="color: #374151; margin: 0; font-size: 14px; font-weight: 600;">Best regards,</p>
            <p style="color: #374151; margin: 5px 0; font-size: 16px; font-weight: bold;">The Perfect Home's Team</p>
            <p style="color: #6b7280; margin: 0; font-size: 12px;">Professional Interiors & Smart Solutions</p>
          </div>
        `,
      }),
    });

    console.log("Confirmation email sent to customer:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);