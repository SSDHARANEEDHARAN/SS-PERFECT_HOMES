import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  requirements?: string;
  dimensions?: string;
  selectedImage: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
  submittedAt: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Processing door quote request...');
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const quoteData: QuoteRequest = await req.json();
    console.log('Received quote data:', quoteData);

    // Validate required fields
    if (!quoteData.name || !quoteData.email || !quoteData.phone || !quoteData.address) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Create unique quote ID
    const quoteId = `DOOR-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    console.log('Generated quote ID:', quoteId);

    // Send email notification using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Door Quotes <onboarding@resend.dev>",
        to: ['tharaneetharanss@gmail.com'],
        subject: `🚪 Door Quote Request - ${quoteData.selectedImage.title} - ${quoteData.name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #dc2626, #b91c1c); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #dc2626; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">🚨 NEW DOOR QUOTE REQUEST!</h1>
            <h2 style="color: #fef2f2; margin: 0; font-size: 18px;">Perfect Home's Interiors & Solutions</h2>
            <p style="color: #fecaca; margin: 5px 0 0 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 18px;">🚪 DOOR PRODUCT QUOTE</h3>
            </div>
            <div style="text-align: center;">
              <img src="${quoteData.selectedImage.imageUrl}" alt="${quoteData.selectedImage.title}" style="max-width: 300px; width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
              <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h4 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">${quoteData.selectedImage.title}</h4>
                <p style="color: #64748b; margin: 0; font-size: 14px;">${quoteData.selectedImage.description}</p>
                <p style="color: #64748b; margin: 5px 0 0 0; font-size: 12px;">Perfect Home's Interiors & Solutions</p>
              </div>
            </div>
          </div>

          <div style="background-color: #fef2f2; border: 2px solid #dc2626; border-radius: 12px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-bottom: 20px; font-size: 18px; display: flex; align-items: center;">
              📋 COMPLETE CUSTOMER DETAILS
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151; width: 35%;">Quote ID:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteId}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Customer Name:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteData.name}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Email Address:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;"><a href="mailto:${quoteData.email}" style="color: #dc2626;">${quoteData.email}</a></td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;"><a href="tel:${quoteData.phone}" style="color: #dc2626;">${quoteData.phone}</a></td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Installation Address:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${quoteData.address}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 12px; border: 1px solid #fee2e2; font-weight: bold; color: #374151;">Submitted:</td>
                <td style="padding: 12px; border: 1px solid #fee2e2; color: #6b7280;">${new Date(quoteData.submittedAt).toLocaleString()}</td>
              </tr>
            </table>
          </div>

          ${quoteData.dimensions ? `
          <div style="background-color: #f0f9ff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              📐 DIMENSIONS & SPECIFICATIONS
            </h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
              <p style="color: #374151; line-height: 1.6; margin: 0;">${quoteData.dimensions}</p>
            </div>
          </div>
          ` : ''}

          ${quoteData.requirements ? `
          <div style="background-color: #f0f9ff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              💬 ADDITIONAL REQUIREMENTS
            </h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #0284c7;">
              <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${quoteData.requirements}</p>
            </div>
          </div>
          ` : ''}

          <div style="background-color: #f0fdf4; border: 2px solid #16a34a; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #15803d; margin-bottom: 15px; font-size: 16px; display: flex; align-items: center;">
              ⚡ IMMEDIATE ACTION REQUIRED
            </h3>
            <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Quote Timeline:</strong> Within 24 hours</li>
              <li><strong>Primary Contact:</strong> ${quoteData.phone} (WhatsApp preferred)</li>
              <li><strong>Email Contact:</strong> ${quoteData.email}</li>
              <li><strong>Product:</strong> ${quoteData.selectedImage.title}</li>
              <li><strong>Follow-up Required:</strong> Site visit, measurement, detailed quote, installation timeline</li>
            </ul>
          </div>

          <div style="text-align: center; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
            <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 8px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <span style="color: #dc2626; font-weight: bold; font-size: 20px;">SS</span>
            </div>
            <p style="color: #374151; margin: 0; font-size: 14px; font-weight: 600;">Perfect Home's Interiors & Solutions</p>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">Contact: +91 8870086023 | +91 9944864216</p>
          </div>
        </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error('Failed to send email:', emailError);
      // Don't fail the request if email fails, just log it
    } else {
      console.log('Email sent successfully');
    }

    // Send confirmation email to customer
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Door Quotes <onboarding@resend.dev>",
        to: [quoteData.email],
        subject: `Door Quote Request Received - ${quoteData.selectedImage.title} - Perfect Home's`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #16a34a, #15803d); border-radius: 12px;">
            <div style="background-color: #ffffff; width: 80px; height: 80px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span style="color: #16a34a; font-weight: bold; font-size: 28px;">SS</span>
            </div>
            <h1 style="color: #ffffff; margin-bottom: 5px; font-size: 24px;">Perfect Home's Interiors & Solutions</h1>
            <p style="color: #dcfce7; margin: 0; font-size: 14px;">Professional Interiors & Smart Solutions</p>
            <h2 style="color: #ffffff; margin: 15px 0 0 0; font-size: 20px;">✅ Door Quote Request Received!</h2>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #16a34a;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #15803d; margin-bottom: 10px; font-size: 18px;">Dear ${quoteData.name}!</h3>
            </div>
            <p style="color: #374151; line-height: 1.6; margin-bottom: 15px;">
              Thank you for your interest in our <strong>${quoteData.selectedImage.title}</strong>! We have received your quote request and our expert team will contact you within 24 hours with a detailed quote including pricing, installation details, and delivery timeline.
            </p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <div style="text-align: center; margin-bottom: 15px;">
              <h3 style="color: #374151; margin-bottom: 15px; font-size: 16px;">🚪 Your Selected Door:</h3>
            </div>
            <div style="text-align: center;">
              <img src="${quoteData.selectedImage.imageUrl}" alt="${quoteData.selectedImage.title}" style="max-width: 250px; width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
              <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <h4 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">${quoteData.selectedImage.title}</h4>
                <p style="color: #64748b; margin: 0; font-size: 14px;">${quoteData.selectedImage.description}</p>
                <p style="color: #64748b; margin: 5px 0 0 0; font-size: 12px; font-weight: 600;">Quote Reference: ${quoteId}</p>
              </div>
            </div>
          </div>

          <div style="background-color: #fef3c7; border: 2px solid #f59e0b; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin-bottom: 15px; font-size: 16px;">🚀 What's Included in Your Door Quote:</h3>
            <ul style="color: #374151; line-height: 1.6; padding-left: 20px; margin: 0;">
              <li>Professional installation by certified technicians</li>
              <li>2-year comprehensive warranty on product and installation</li>
              <li>Free maintenance and servicing for 6 months</li>
              <li>Custom sizing and adjustments to fit your space perfectly</li>
              <li>Premium quality hardware, locks, and fittings</li>
              <li>Free site measurement and technical consultation</li>
              <li>Quality assurance and post-installation support</li>
            </ul>
          </div>

          <div style="background-color: #e0f2fe; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 16px;">📋 Your Quote Request Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #ffffff;">
                <td style="padding: 10px; border: 1px solid #bae6fd; font-weight: bold; color: #374151; width: 35%;">Quote Reference:</td>
                <td style="padding: 10px; border: 1px solid #bae6fd; color: #6b7280;">${quoteId}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 10px; border: 1px solid #bae6fd; font-weight: bold; color: #374151;">Installation Address:</td>
                <td style="padding: 10px; border: 1px solid #bae6fd; color: #6b7280;">${quoteData.address}</td>
              </tr>
              <tr style="background-color: #ffffff;">
                <td style="padding: 10px; border: 1px solid #bae6fd; font-weight: bold; color: #374151;">Contact Number:</td>
                <td style="padding: 10px; border: 1px solid #bae6fd; color: #6b7280;">${quoteData.phone}</td>
              </tr>
              <tr style="background-color: #fefefe;">
                <td style="padding: 10px; border: 1px solid #bae6fd; font-weight: bold; color: #374151;">Submitted:</td>
                <td style="padding: 10px; border: 1px solid #bae6fd; color: #6b7280;">${new Date(quoteData.submittedAt).toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; background-color: #fef2f2; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h3 style="color: #dc2626; margin-bottom: 15px; font-size: 16px;">📞 Need Immediate Assistance?</h3>
            <p style="color: #374151; margin-bottom: 15px;">For urgent queries about your door quote, feel free to call or WhatsApp us directly:</p>
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
        </div>
        `,
      }),
    });

    if (!confirmationResponse.ok) {
      console.error('Failed to send confirmation email');
    } else {
      console.log('Confirmation email sent successfully');
    }

    console.log('Quote processing completed successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request processed successfully',
        quoteId 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error processing door quote:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process quote request',
        details: (error as Error).message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});