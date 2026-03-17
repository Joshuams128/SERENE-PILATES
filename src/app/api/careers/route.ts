import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const discipline = formData.get('discipline') as string;
    const certifications = formData.get('certifications') as string;
    const experience = formData.get('experience') as string;
    const teachingStyle = formData.get('teachingStyle') as string;
    const socialLink = formData.get('socialLink') as string;
    const availability = formData.get('availability') as string;
    const resume = formData.get('resume') as File | null;

    // Validate required fields
    if (!fullName || !email || !phone || !discipline || !certifications || !experience || !teachingStyle || !availability) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    if (resume && resume.size > 0) {
      // Limit file size to 5MB
      if (resume.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Resume file must be under 5MB' },
          { status: 400 }
        );
      }

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(resume.type)) {
        return NextResponse.json(
          { error: 'Resume must be a PDF or Word document' },
          { status: 400 }
        );
      }

      const bytes = await resume.arrayBuffer();
      attachments.push({
        filename: resume.name,
        content: Buffer.from(bytes),
      });
    }

    await resend.emails.send({
      from: 'Serene Pilates <noreply@serenepilates.ca>',
      to: ['concierge@serenepilates.ca'],
      replyTo: email,
      subject: `Instructor Application: ${fullName} — ${discipline}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #606C37;">New Instructor Application</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Discipline:</strong> ${discipline}</p>
            <p style="margin: 10px 0;"><strong>Certifications:</strong> ${certifications}</p>
            <p style="margin: 10px 0;"><strong>Years of Experience:</strong> ${experience}</p>
            <p style="margin: 10px 0;"><strong>Availability:</strong> ${availability}</p>
            <p style="margin: 10px 0;"><strong>Instagram / Website:</strong> ${socialLink || 'Not provided'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #283517;">Teaching Style:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${teachingStyle}</p>
          </div>
          
          ${resume && resume.size > 0 ? '<p style="color: #606C37;"><strong>Resume attached.</strong></p>' : '<p style="color: #888;">No resume attached.</p>'}
          
          <hr style="border: 1px solid #e0e0e0; margin: 30px 0;" />
          
          <p style="color: #888; font-size: 12px;">
            This application was submitted from the Serene Pilates careers page.
          </p>
        </div>
      `,
      attachments,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending career application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
