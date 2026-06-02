import { NextRequest, NextResponse } from 'next/server';

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

    // Get the appropriate script URL based on type
    const scriptUrl = type === 'partnership' 
      ? process.env.PARTNERSHIP_SCRIPT_URL 
      : process.env.STUDENT_SCRIPT_URL

    if (!scriptUrl) {
      console.error("[v0] Missing script URL for type:", type)
      return NextResponse.json(
        { success: false, error: "Configuration error" },
        { status: 500 }
      )
    }

    // Call the Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        payload: data,
      }),
    })

    if (!response.ok) {
      console.error("[v0] Apps Script error:", response.status)
      return NextResponse.json(
        { success: false, error: "Failed to submit lead" },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error('[v0] Error in /api/leads/submit:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}

