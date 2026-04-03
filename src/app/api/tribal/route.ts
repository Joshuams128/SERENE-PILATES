import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const promoCode = 'TRIBAL5';

    // Send promo code email to registrant
    await resend.emails.send({
      from: 'Serene Pilates <noreply@serenepilates.ca>',
      to: [email],
      subject: 'Your Exclusive Promo Code — 5 Complimentary Classes',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FEFAE0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #283517, #606C37); padding: 40px 30px; text-align: center;">
            <img src="https://www.serenepilates.ca/assets/images/Serene%20Pilates%20Logo%20-10.png" alt="Serene Pilates" style="height: 80px; margin: 0 auto 12px auto; display: block;" />
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

            <div style="background-color: #ffffff; border-radius: 12px; padding: 24px; margin: 0 0 32px 0;">
              <p style="color: #000000; font-size: 15px; font-weight: 400; margin: 0 0 16px 0;">How to redeem:</p>
              <ol style="color: #000000; font-size: 14px; line-height: 2; margin: 0; padding-left: 20px;">
                <li>Visit our <a href="https://www.serenepilates.ca/booking" style="color: #BC6C24; text-decoration: underline;">booking page</a> or download the <a href="https://apps.apple.com/au/app/serene-pilates/id6751634676" style="color: #BC6C24; text-decoration: underline;">Serene Pilates app</a></li>
                <li>Select the Serene x Tribal package and use your promo code at checkout</li>
                <li>Enjoy your 5 complimentary classes — please arrive 5–10 minutes early</li>
              </ol>
            </div>

            <div style="border-top: 1px solid #e0ddd5; padding-top: 24px; margin-top: 8px;">
              <p style="color: #606C37; font-size: 12px; line-height: 1.8; margin: 0;">
                <strong>Terms:</strong> Available for new clients only. Promo code required to redeem. Classes expire 12 months after activation. First class must be booked within 14 days of code redemption.
              </p>
            </div>
          </div>

          <div style="background-color: #283517; padding: 24px 30px; text-align: center;">
            <img src="https://www.serenepilates.ca/assets/images/Serene%20Pilates%20Logo%20-10.png" alt="Serene Pilates" style="height: 60px; margin: 0 auto 12px auto; display: block;" />
            <p style="color: #606C37; font-size: 12px; margin: 0 0 8px 0;">1275 Morningside Ave, Unit 30, Scarborough, ON M1B 3W1</p>
            <p style="color: #DDA05F; font-size: 13px; margin: 0 0 12px 0;">
              <a href="tel:6474782400" style="color: #DDA05F; text-decoration: none;">(647) 478-2400</a>
            </p>
            <p style="margin: 0;">
              <a href="https://www.instagram.com/serenepilatesstudios/" style="color: #FEFAE0; text-decoration: none; font-size: 13px; margin: 0 8px;">Instagram</a>
              <span style="color: #606C37;">&#183;</span>
              <a href="https://www.facebook.com/share/1LShwszRC7/" style="color: #FEFAE0; text-decoration: none; font-size: 13px; margin: 0 8px;">Facebook</a>
              <span style="color: #606C37;">&#183;</span>
              <a href="https://www.tiktok.com/@serenepilates" style="color: #FEFAE0; text-decoration: none; font-size: 13px; margin: 0 8px;">TikTok</a>
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to studio
    await resend.emails.send({
      from: 'Serene Pilates <noreply@serenepilates.ca>',
      to: ['concierge@serenepilates.ca'],
      replyTo: email,
      subject: `Tribal Campaign Registration: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #606C37;">New Tribal Campaign Registration</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
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
