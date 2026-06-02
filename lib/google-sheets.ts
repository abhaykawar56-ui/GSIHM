import { google } from 'googleapis';

interface StudentInquiry {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  preferredBatch: string;
}

interface PartnershipInquiry {
  companyName: string;
  contactPersonName: string;
  workEmail: string;
  phone: string;
}

type LeadData = StudentInquiry | PartnershipInquiry;

async function getAuthClient() {
  const credentials = JSON.parse(process.env.GOOGLE_SHEETS_API_KEY || '{}');
  
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return auth.getClient();
}

export async function appendToStudentSheet(data: StudentInquiry) {
  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.courseInterest,
        data.preferredBatch,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.STUDENT_INQUIRIES_SHEET_ID,
      range: 'Student Inquiries!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('[v0] Error appending to student sheet:', error);
    throw error;
  }
}

export async function appendToPartnershipSheet(data: PartnershipInquiry) {
  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp,
        data.companyName,
        data.contactPersonName,
        data.workEmail,
        data.phone,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.PARTNERSHIP_INQUIRIES_SHEET_ID,
      range: 'Partnership Inquiries!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('[v0] Error appending to partnership sheet:', error);
    throw error;
  }
}
