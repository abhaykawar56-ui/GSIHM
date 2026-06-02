# Google Apps Script Setup Guide

## Step 1: Create Google Sheets
1. Go to https://sheets.google.com
2. Create two new sheets:
   - "Student Inquiries"
   - "Partnership Inquiries"
3. Add headers to each sheet:
   - For Student Inquiries: Name | Email | Phone | Course Interest | Preferred Batch | Submitted At
   - For Partnership Inquiries: Company Name | Contact Person | Email | Phone | Submitted At

## Step 2: Create Google Apps Script
1. Go to https://script.google.com
2. Create a new project
3. Replace the code with the script below
4. Update the SHEET_IDS object with your sheet IDs
5. Deploy as web app (Deploy > New Deployment > Type: Web app)
6. Copy the deployment URL

## Step 3: Google Apps Script Code

```javascript
// Update these with your actual Sheet IDs
const SHEET_IDS = {
  student: "YOUR_STUDENT_SHEET_ID",
  partnership: "YOUR_PARTNERSHIP_SHEET_ID"
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { type, payload } = data;
    
    let sheetId = SHEET_IDS[type];
    if (!sheetId) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Invalid sheet type"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    const timestamp = new Date().toLocaleString();
    
    if (type === "student") {
      sheet.appendRow([
        payload.name,
        payload.email,
        payload.phone,
        payload.courseInterest,
        payload.preferredBatch,
        timestamp
      ]);
    } else if (type === "partnership") {
      sheet.appendRow([
        payload.companyName,
        payload.contactPersonName,
        payload.workEmail,
        payload.phone,
        timestamp
      ]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Lead submitted successfully"
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 4: Get Sheet IDs
1. Open each Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the SHEET_ID portion
4. Update the SHEET_IDS object in the script

## Step 5: Deploy Script
1. Click "Deploy" button in Apps Script editor
2. Select "New deployment"
3. Type: Select "Web app"
4. Execute as: Your account
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the deployment URL provided

## Step 6: Add Environment Variables
Add these to your Vercel project:
- `STUDENT_SCRIPT_URL`: Your deployed script URL for student submissions
- `PARTNERSHIP_SCRIPT_URL`: Your deployed script URL for partnership submissions

Or use the same URL for both and let the type parameter route it.
