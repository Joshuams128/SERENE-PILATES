import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, email, phone } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const promoCode = 'TRIBAL5FREE';

    // Send promo code email to registrant
    await resend.emails.send({
      from: 'Serene Pilates <noreply@serenepilates.ca>',
      to: [email],
      subject: 'Your Exclusive Promo Code — 5 Complimentary Classes',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FEFAE0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #283517, #606C37); padding: 40px 30px; text-align: center;">
            <h1 style="color: #FEFAE0; font-size: 28px; font-weight: 300; margin: 0 0 8px 0; letter-spacing: -0.02em;">Serene Pilates</h1>
            <p style="color: #DDA05F; font-size: 14px; margin: 0; letter-spacing: 0.1em; text-transform: uppercase;">Exclusive Offer</p>
          </div>

          <div style="padding: 40px 30px;">
            <p style="color: #283517; font-size: 18px; font-weight: 300; line-height: 1.6; margin: 0 0 24px 0;">
              Hi ${firstName},
            </p>
            <p style="color: #606C37; font-size: 16px; font-weight: 300; line-height: 1.7; margin: 0 0 32px 0;">
              Thank you for registering. Here is your exclusive promo code for <strong>5 complimentary Pilates classes</strong> at Serene Pilates.
            </p>

            <div style="background: linear-gradient(135deg, #BC6C24, #DDA05F); border-radius: 16px; padding: 32px; text-align: center; margin: 0 0 32px 0;">
              <p style="color: #FEFAE0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 12px 0;">Your Promo Code</p>
              <p style="color: #FEFAE0; font-size: 36px; font-weight: 600; letter-spacing: 0.08em; margin: 0;">${promoCode}</p>
            </div>

            <div style="background-color: #f8f6f0; border-radius: 12px; padding: 24px; margin: 0 0 32px 0;">
              <p style="color: #283517; font-size: 15px; font-weight: 400; margin: 0 0 16px 0;">How to redeem:</p>
              <ol style="color: #606C37; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
                <li>Visit our booking page or call us at (647) 478-2400</li>
                <li>Provide your promo code when booking</li>
                <li>Enjoy your 5 complimentary classes</li>
              </ol>
            </div>

            <div style="border-top: 1px solid #e0ddd5; padding-top: 24px; margin-top: 8px;">
              <p style="color: #606C37; font-size: 12px; line-height: 1.8; margin: 0;">
                <strong>Terms:</strong> Available for new clients only. Promo code required to redeem. Classes expire 12 months after activation. First class must be booked within 14 days of code redemption.
              </p>
            </div>
          </div>

          <div style="background-color: #283517; padding: 24px 30px; text-align: center;">
            <p style="color: #FEFAE0; font-size: 13px; font-weight: 300; margin: 0 0 4px 0;">Serene Pilates</p>
            <p style="color: #606C37; font-size: 12px; margin: 0;">1275 Morningside Ave, Unit 30, Scarborough, ON M1B 3W1</p>
          </div>
        </div>
      `,
    });

    // Send notification email to studio
    await resend.emails.send({
      from: 'Serene Pilates <noreply@serenepilates.ca>',
      to: ['concierge@serenepilates.ca'],
      replyTo: email,
      subject: `Tribal Campaign Registration: ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #606C37;">New Tribal Campaign Registration</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>First Name:</strong> ${firstName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 10px 0;"><strong>Promo Code Sent:</strong> ${promoCode}</p>
          </div>

          <hr style="border: 1px solid #e0e0e0; margin: 30px 0;" />

          <p style="color: #888; font-size: 12px;">
            This registration was submitted from the Serene x Tribal campaign page.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing tribal registration:', error);
    return NextResponse.json(
      { error: 'Failed to process registration. Please try again later.' },
      { status: 500 }
    );
  }
}
