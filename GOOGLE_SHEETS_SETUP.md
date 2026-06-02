## Google Sheets Setup Guide

### Step 1: Create Google Sheets
Create two Google Sheets with these headers:

**Sheet 1: "Student Inquiries"**
- Column A: Timestamp
- Column B: Name
- Column C: Email
- Column D: Phone
- Column E: Course Interest
- Column F: Preferred Batch

**Sheet 2: "Partnership Inquiries"**
- Column A: Timestamp
- Column B: Company Name
- Column C: Contact Person Name
- Column D: Work Email
- Column E: Phone

### Step 2: Set Up Google API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select existing)
3. Enable Google Sheets API:
   - Go to APIs & Services > Library
   - Search for "Google Sheets API"
   - Click Enable
4. Create Service Account:
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > Service Account
   - Fill in the details and create
   - Go to the service account you just created
   - Go to Keys tab > Add Key > Create new JSON key
   - Download and save the JSON file
5. Share your Google Sheets with the service account email (found in the JSON file under "client_email")

### Step 3: Environment Variables

Add these to your `.env.local` file:
```
GOOGLE_SHEETS_API_KEY=<content of your JSON key file>
STUDENT_INQUIRIES_SHEET_ID=<your student sheet ID from URL>
PARTNERSHIP_INQUIRIES_SHEET_ID=<your partnership sheet ID from URL>
```

The Sheet ID is found in the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
