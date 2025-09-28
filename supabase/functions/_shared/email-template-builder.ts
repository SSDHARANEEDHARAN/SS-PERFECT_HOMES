// Email Template Builder for Perfect Home's Interiors & Solutions
// This utility helps build professional HTML email templates with dynamic content

interface EnquiryData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address?: string;
  serviceType: string;
  productName?: string;
  productImage?: string;
  message?: string;
  enquiryId: string;
  enquiryDate: string;
  followupActions?: string;
}

// Read HTML template file content
async function readTemplate(templatePath: string): Promise<string> {
  try {
    const response = await fetch(new URL(templatePath, import.meta.url));
    return await response.text();
  } catch (error) {
    console.error(`Failed to read template: ${templatePath}`, error);
    throw new Error(`Template not found: ${templatePath}`);
  }
}

// Build Admin Notification Email
export async function buildAdminNotificationEmail(data: EnquiryData): Promise<string> {
  const template = await readTemplate('./email-templates/admin-notification.html');
  
  // Product section (if product data available)
  let productSection = '';
  if (data.productName || data.productImage) {
    productSection = `
      <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Product Information</h3>
        ${data.productImage ? `
          <div style="text-align: center;">
            <img src="${data.productImage}" alt="${data.productName || 'Product'}" style="max-width: 280px; width: 100%; height: auto; border-radius: 6px; margin-bottom: 16px; border: 1px solid #e2e8f0;" />
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px;">
              <h4 style="color: #1e293b; margin: 0 0 4px 0; font-size: 16px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">${data.productName || 'Product'}</h4>
              <p style="color: #64748b; margin: 0; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">Perfect Home's Interiors & Solutions</p>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
  
  // Product name row (if product available)
  const productNameRow = data.productName ? `
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #334155; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc;">Product/Service</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #f1f5f9; color: #475569; font-family: 'Segoe UI', Arial, sans-serif;">${data.productName}</td>
    </tr>
  ` : '';
  
  // Address row (if address provided)
  const addressRow = data.address ? `
    <tr>
      <td style="padding: 18px 20px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #334155; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc;">Project Address</td>
      <td style="padding: 18px 20px; border-bottom: 1px solid #f1f5f9; color: #475569; font-family: 'Segoe UI', Arial, sans-serif;">${data.address}</td>
    </tr>
  ` : '';
  
  // Customer message section (if message provided)
  let customerMessageSection = '';
  if (data.message) {
    customerMessageSection = `
      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h3 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
          Client Message
        </h3>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 3px solid #1e40af;">
          <p style="color: #374151; font-style: italic; line-height: 1.6; margin: 0; font-family: 'Segoe UI', Arial, sans-serif;">"${data.message}"</p>
        </div>
      </div>
    `;
  }
  
  // Replace template variables
  return template
    .replace(/{{PRODUCT_SECTION}}/g, productSection)
    .replace(/{{SERVICE_TYPE}}/g, data.serviceType)
    .replace(/{{PRODUCT_NAME_ROW}}/g, productNameRow)
    .replace(/{{CUSTOMER_NAME}}/g, data.customerName)
    .replace(/{{CUSTOMER_EMAIL}}/g, data.customerEmail)
    .replace(/{{CUSTOMER_PHONE}}/g, data.customerPhone)
    .replace(/{{ADDRESS_ROW}}/g, addressRow)
    .replace(/{{ENQUIRY_DATE}}/g, data.enquiryDate)
    .replace(/{{ENQUIRY_ID}}/g, data.enquiryId)
    .replace(/{{CUSTOMER_MESSAGE_SECTION}}/g, customerMessageSection)
    .replace(/{{FOLLOWUP_ACTIONS}}/g, data.followupActions || 'Product demonstration, quote preparation, consultation');
}

// Build Customer Confirmation Email
export async function buildCustomerConfirmationEmail(data: EnquiryData): Promise<string> {
  const template = await readTemplate('./email-templates/customer-confirmation.html');
  
  // Product section (if product data available)
  let productSection = '';
  if (data.productName || data.productImage) {
    productSection = `
      <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Your Selected Service</h3>
        ${data.productImage ? `
          <div style="text-align: center;">
            <img src="${data.productImage}" alt="${data.productName || 'Product'}" style="max-width: 240px; width: 100%; height: auto; border-radius: 6px; margin-bottom: 16px; border: 1px solid #e2e8f0;" />
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px;">
              <h4 style="color: #1e293b; margin: 0 0 4px 0; font-size: 16px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">${data.productName || 'Product'}</h4>
              <p style="color: #64748b; margin: 0; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">Perfect Home's Interiors & Solutions</p>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
  
  // Product name row (if product available)
  const productNameRow = data.productName ? `
    <tr>
      <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #334155; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc;">Service/Product</td>
      <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9; color: #475569; font-family: 'Segoe UI', Arial, sans-serif;">${data.productName}</td>
    </tr>
  ` : '';
  
  // Address row (if address provided)
  const addressRow = data.address ? `
    <tr>
      <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #334155; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc;">Project Address</td>
      <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9; color: #475569; font-family: 'Segoe UI', Arial, sans-serif;">${data.address}</td>
    </tr>
  ` : '';
  
  // Replace template variables
  return template
    .replace(/{{CUSTOMER_NAME}}/g, data.customerName)
    .replace(/{{SERVICE_TYPE}}/g, data.serviceType)
    .replace(/{{PRODUCT_SECTION}}/g, productSection)
    .replace(/{{PRODUCT_NAME_ROW}}/g, productNameRow)
    .replace(/{{CUSTOMER_PHONE}}/g, data.customerPhone)
    .replace(/{{ADDRESS_ROW}}/g, addressRow)
    .replace(/{{ENQUIRY_ID}}/g, data.enquiryId);
}

// Generate unique enquiry ID
export function generateEnquiryId(): string {
  return `ENQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
}

// Format date for display
export function formatEnquiryDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}