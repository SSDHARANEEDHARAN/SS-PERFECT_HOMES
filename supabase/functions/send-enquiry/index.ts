import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EnquiryRequest {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message?: string;
  enquiryType: string;
  enquiryDescription: string;
  productImage?: string;
  productName?: string;
  submittedAt: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      phone,
      address,
      message,
      enquiryType,
      enquiryDescription,
      productImage,
      productName,
      submittedAt,
    }: EnquiryRequest = await req.json();

    console.log("Received enquiry:", {
      name,
      email,
      phone,
      enquiryType,
      submittedAt,
    });

    // Send confirmation email to customer using direct API call
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Interiors & Solutions <onboarding@resend.dev>",
        to: [email],
        subject: "Thank You for Your Enquiry - Perfect Home's Interiors & Solutions",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #2563eb, #1d4ed8); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #2563eb; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">Perfect Home's Interiors & Solutions</h1>
            <p style="color: #e0e7ff; margin: 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
            <h2 style="color: #ffffff; margin: 15px 0 0 0; font-size: 20px;">Thank You for Your Enquiry!</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #374151; margin-bottom: 15px;">Dear ${name},</p>
            <p style="color: #374151; margin-bottom: 15px;">
              Thank you for your interest in our <strong>${enquiryType}</strong>. We have received your enquiry and our team will contact you soon with detailed information.
            </p>
          </div>

          <div style="background-color: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Your Enquiry Details:</h3>
            <ul style="color: #6b7280; margin: 0; padding-left: 20px;">
              <li><strong>Service:</strong> ${enquiryType}</li>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              ${address ? `<li><strong>Address:</strong> ${address}</li>` : ''}
              ${message ? `<li><strong>Message:</strong> ${message}</li>` : ''}
              <li><strong>Submitted:</strong> ${new Date(submittedAt).toLocaleDateString()}</li>
            </ul>
          </div>

          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #1e40af; margin: 0;">
              <strong>What happens next?</strong><br>
              Our team will review your requirements and contact you within 24 hours to discuss your project in detail and provide a personalized quote.
            </p>
          </div>

          <div style="text-align: center; color: #6b7280; font-size: 14px;">
            <p>Best regards,<br><strong>Perfect Home's Interiors & Solutions Team</strong></p>
            <p>Contact us: +91 8870086023 | +91 9944864216</p>
          </div>
        </div>
        `,
      }),
    });

    console.log("Customer email sent:", customerEmailResponse);

    // Send notification email to admin using direct API call
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Interiors & Solutions <onboarding@resend.dev>",
        to: ["tharaneetharanss@gmail.com"],
        subject: `Enquiry of Product: ${productName || enquiryType} - ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #dc2626; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">🚨 NEW ENQUIRY ALERT!</h1>
            <h2 style="color: #fef2f2; margin: 0; font-size: 18px;">Perfect Home's Interiors & Solutions</h2>
            <p style="color: #fecaca; margin: 5px 0 0 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
          </div>
          
          ${productImage ? `
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 18px;">📦 PRODUCT ENQUIRY</h3>
            </div>
            <div style="text-align: center;">
              <img src="${productImage}" alt="${productName}" style="max-width: 300px; width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
              <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h4 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">${productName}</h4>
                <p style="color: #64748b; margin: 0; font-size: 14px;">Perfect Home's Interiors & Solutions</p>
              </div>
            </div>
          </div>
          ` : `
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #0284c7;">
            <div style="text-align: center;">
              <h3 style="color: #0369a1; margin-bottom: 10px; font-size: 18px;">💼 SERVICE ENQUIRY</h3>
              <p style="color: #0284c7; margin: 0; font-size: 16px; font-weight: 600;">${enquiryType}</p>
            </div>
          </div>
          `}
          
          <div style="background-color: #fef2f2; border: 2px solid #dc2626; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-bottom: 20px; font-size: 18px; display: flex; align-items: center;">
              📋 COMPLETE ENQUIRY DETAILS
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151; width: 35%;">Service Type:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${enquiryType}</td>
              </tr>
              ${productName ? `
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Product Name:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${productName}</td>
              </tr>
              ` : ''}
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Customer Name:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${name}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Email Address:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td>
              </tr>
              ${address ? `
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Address:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${address}</td>
              </tr>
              ` : ''}
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Enquiry Date:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${new Date(submittedAt).toLocaleString()}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Enquiry ID:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${Date.now().toString(36).toUpperCase()}</td>
              </tr>
            </table>
          </div>

          ${message ? `
          <div style="background-color: #f0f9ff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              💬 CUSTOMER MESSAGE
            </h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
              <p style="color: #374151; font-style: italic; line-height: 1.6; margin: 0;">"${message}"</p>
            </div>
          </div>
          ` : ''}

          <div style="background-color: #f0fdf4; border: 2px solid #16a34a; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #15803d; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              ⚡ IMMEDIATE ACTION REQUIRED
            </h3>
            <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Contact Timeline:</strong> Within 24 hours</li>
              <li><strong>Primary Contact:</strong> ${phone} (WhatsApp preferred)</li>
              <li><strong>Email Contact:</strong> ${email}</li>
              <li><strong>Follow-up Required:</strong> Product demonstration, quote preparation</li>
            </ul>
          </div>

          <div style="text-align: center; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 8px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <span style="color: #2563eb; font-weight: bold; font-size: 20px;">SS</span>
            </div>
            <p style="color: #374151; margin: 0; font-size: 14px; font-weight: 600;">Perfect Home's Interiors & Solutions</p>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Contact: +91 8870086023 | +91 9944864216</p>
          </div>
        </div>
        `,
      }),
    });

    console.log("Admin email sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Enquiry submitted successfully",
        customerEmailId: customerEmailResponse.ok,
        adminEmailId: adminEmailResponse.ok,
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
    console.error("Error in send-enquiry function:", error);
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