// Example Usage: How to implement the Professional Email Templates
// in your Supabase Edge Functions

import { 
  buildAdminNotificationEmail, 
  buildCustomerConfirmationEmail, 
  generateEnquiryId, 
  formatEnquiryDate 
} from './email-template-builder.ts';

// Example implementation in send-enquiry function
export async function exampleEnquiryFunction(req: Request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse incoming request data
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
    } = await req.json();

    // Generate unique enquiry ID and format date
    const enquiryId = generateEnquiryId();
    const enquiryDate = formatEnquiryDate(submittedAt);

    // Prepare data for email templates
    const emailData = {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      address: address,
      serviceType: enquiryType,
      productName: productName,
      productImage: productImage,
      message: message,
      enquiryId: enquiryId,
      enquiryDate: enquiryDate,
      followupActions: 'Product demonstration, detailed quote preparation, site consultation'
    };

    // Build professional HTML emails
    const adminEmailHtml = await buildAdminNotificationEmail(emailData);
    const customerEmailHtml = await buildCustomerConfirmationEmail(emailData);

    // Send admin notification email
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's Alerts <onboarding@resend.dev>",
        to: ["tharaneetharanss@gmail.com"],
        subject: `🚨 New Enquiry from ${name} – ${productName || enquiryType}`,
        html: adminEmailHtml,
      }),
    });

    // Send customer confirmation email
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Perfect Home's <onboarding@resend.dev>",
        to: [email],
        subject: "Thank You for Your Enquiry – Perfect Home's Interiors & Solutions",
        html: customerEmailHtml,
      }),
    });

    console.log("Admin email sent:", adminEmailResponse.ok);
    console.log("Customer email sent:", customerEmailResponse.ok);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Enquiry submitted successfully",
        enquiryId: enquiryId,
        adminEmailSent: adminEmailResponse.ok,
        customerEmailSent: customerEmailResponse.ok,
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
    console.error("Error in enquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
}

// Example implementation for different enquiry types

// 1. Contact Form Implementation
export async function contactFormExample(formData: any) {
  const emailData = {
    customerName: `${formData.firstName} ${formData.lastName}`,
    customerEmail: formData.email,
    customerPhone: formData.phone,
    address: '', // Contact form might not have address
    serviceType: formData.service || 'General Inquiry',
    productName: '', // Contact form doesn't have specific product
    productImage: '',
    message: formData.message,
    enquiryId: generateEnquiryId(),
    enquiryDate: formatEnquiryDate(new Date()),
    followupActions: 'Initial consultation, service discussion, project assessment'
  };

  const adminHtml = await buildAdminNotificationEmail(emailData);
  const customerHtml = await buildCustomerConfirmationEmail(emailData);
  
  // Use adminHtml and customerHtml in your email sending logic
}

// 2. Product Enquiry Implementation (with product image)
export async function productEnquiryExample(formData: any) {
  const emailData = {
    customerName: formData.name,
    customerEmail: formData.email,
    customerPhone: formData.phone,
    address: formData.address,
    serviceType: formData.enquiryType,
    productName: formData.productName,
    productImage: formData.productImage, // Product image URL
    message: formData.message,
    enquiryId: generateEnquiryId(),
    enquiryDate: formatEnquiryDate(formData.submittedAt),
    followupActions: 'Product demonstration, pricing discussion, installation planning'
  };

  const adminHtml = await buildAdminNotificationEmail(emailData);
  const customerHtml = await buildCustomerConfirmationEmail(emailData);
  
  // Use in your email sending logic
}

// 3. Quote Request Implementation
export async function quoteRequestExample(formData: any) {
  const emailData = {
    customerName: formData.name,
    customerEmail: formData.email,
    customerPhone: formData.phone,
    address: formData.address,
    serviceType: formData.title,
    productName: '', // Quote requests might not have specific product
    productImage: '',
    message: `Requirements: ${formData.requirements}\nDimensions: ${formData.dimensions}\nBudget: ${formData.budget}`,
    enquiryId: generateEnquiryId(),
    enquiryDate: formatEnquiryDate(formData.submittedAt),
    followupActions: 'Detailed quote preparation, site visit scheduling, project planning'
  };

  const adminHtml = await buildAdminNotificationEmail(emailData);
  const customerHtml = await buildCustomerConfirmationEmail(emailData);
  
  // Use in your email sending logic
}

// 4. Door Quote Implementation (with door image)
export async function doorQuoteExample(formData: any) {
  const emailData = {
    customerName: formData.name,
    customerEmail: formData.email,
    customerPhone: formData.phone,
    address: formData.address,
    serviceType: 'Door Installation & Supply',
    productName: formData.selectedImage.title,
    productImage: formData.selectedImage.imageUrl,
    message: `Requirements: ${formData.requirements || 'Not specified'}\nDimensions: ${formData.dimensions || 'To be measured'}`,
    enquiryId: generateEnquiryId(),
    enquiryDate: formatEnquiryDate(formData.submittedAt),
    followupActions: 'Door measurement, detailed quote with specifications, installation scheduling'
  };

  const adminHtml = await buildAdminNotificationEmail(emailData);
  const customerHtml = await buildCustomerConfirmationEmail(emailData);
  
  // Use in your email sending logic
}

/*
EMAIL TEMPLATE FEATURES:

✅ ADMIN NOTIFICATION TEMPLATE:
- Professional red gradient header with SS logo
- Complete enquiry details in structured table
- Product section with image (if applicable)
- Customer message highlighted box
- Immediate action required section
- Clickable phone/email links
- Professional footer

✅ CUSTOMER CONFIRMATION TEMPLATE:
- Professional blue gradient header with SS logo
- Personalized thank you message
- Enquiry confirmation details
- Product/service section (if applicable)
- "What happens next" section
- Contact information with phone numbers
- Professional footer

✅ RESPONSIVE DESIGN:
- Works on mobile and desktop
- Inline CSS for email client compatibility
- Professional typography and spacing
- Consistent branding across templates

✅ DYNAMIC CONTENT:
- Conditional sections (product, address, message)
- Template variables for easy customization
- Automatic enquiry ID generation
- Formatted date display

HOW TO USE:
1. Import the template builder functions
2. Prepare your data object with customer/enquiry information
3. Call buildAdminNotificationEmail() and buildCustomerConfirmationEmail()
4. Use the returned HTML in your email sending logic
5. Send emails with appropriate subjects and recipients
*/