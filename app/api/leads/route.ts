import { NextRequest, NextResponse } from "next/server"

const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Add timestamp
    const leadData = {
      ...data,
      timestamp: new Date().toISOString(),
    }

    // Send to Google Sheets via Apps Script
    if (GOOGLE_SHEETS_URL) {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      })

      if (!response.ok) {
        console.error("[v0] Google Sheets webhook error:", response.status)
      }
    } else {
      // Log the lead data if no webhook URL is configured
      console.log("[v0] Lead received (no webhook configured):", leadData)
    }

    return NextResponse.json({ success: true, message: "Lead submitted successfully" })
  } catch (error) {
    console.error("[v0] Error processing lead:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit lead" },
      { status: 500 }
    )
  }
}
