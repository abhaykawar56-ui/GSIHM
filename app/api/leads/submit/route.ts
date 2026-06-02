import { NextRequest, NextResponse } from 'next/server';
import { appendToStudentSheet, appendToPartnershipSheet } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing type or data' },
        { status: 400 }
      );
    }

    if (type === 'student') {
      const { name, email, phone, courseInterest, preferredBatch } = data;

      if (!name || !email || !phone || !courseInterest) {
        return NextResponse.json(
          { error: 'Missing required fields for student inquiry' },
          { status: 400 }
        );
      }

      await appendToStudentSheet({
        name,
        email,
        phone,
        courseInterest,
        preferredBatch: preferredBatch || 'Not specified',
      });

      return NextResponse.json(
        { success: true, message: 'Student inquiry submitted successfully' },
        { status: 200 }
      );
    } else if (type === 'partnership') {
      const { companyName, contactPersonName, workEmail, phone } = data;

      if (!companyName || !contactPersonName || !workEmail || !phone) {
        return NextResponse.json(
          { error: 'Missing required fields for partnership inquiry' },
          { status: 400 }
        );
      }

      await appendToPartnershipSheet({
        companyName,
        contactPersonName,
        workEmail,
        phone,
      });

      return NextResponse.json(
        { success: true, message: 'Partnership inquiry submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid inquiry type' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('[v0] Error in /api/leads/submit:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
