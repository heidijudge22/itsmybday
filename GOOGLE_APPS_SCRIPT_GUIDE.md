# Setting Up Google Apps Script to Connect Your Form to Google Sheets

This guide will walk you through setting up a Google Apps Script that will receive data from your website's form and save it to your Google Spreadsheet.

## Step 1: Open Your Google Spreadsheet

1. Go to your Google Spreadsheet at:
   https://docs.google.com/spreadsheets/d/19S_ejHnrbsSjMVLaZxrc02-EGIeJzPPZ9EgDXE033lA/edit

2. Make sure your spreadsheet has the following column headers in the first row:
   - Timestamp
   - Name
   - Email
   - Attending
   - Guests
   - Message

## Step 2: Create a Google Apps Script

1. In your Google Spreadsheet, click on "Extensions" in the top menu
2. Select "Apps Script"
3. This will open a new tab with the Google Apps Script editor
4. Delete any code that's already in the editor
5. Copy and paste the following code:

```javascript
// Google Apps Script to receive form data and save to spreadsheet

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Prepare the data row
    const rowData = [
      data.timestamp,
      data.name,
      data.email,
      data.attending,
      data.guests,
      data.message
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data added to spreadsheet'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

6. Click on "Save" and name your project (e.g., "RSVP Form Handler")

## Step 3: Deploy as Web App

1. Click on "Deploy" in the top right corner
2. Select "New deployment"
3. Click the gear icon next to "Select type" and choose "Web app"
4. Fill in the following:
   - Description: "RSVP Form Handler"
   - Execute as: "Me" (your Google account)
   - Who has access: "Anyone" (this allows your form to submit data)
5. Click "Deploy"
6. You'll see a popup with your web app URL. **Copy this URL**
7. Click "Authorize access" if prompted and follow the authorization steps

## Step 4: Update Your Website Code

1. Open the file `/Users/hjudge/birthday_party_website/form-handler.js`
2. Find this line:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'` with the URL you copied in Step 3
4. Save the file

## Step 5: Test Your Form

1. Open your website in a browser
2. Fill out the RSVP form and submit it
3. Check your Google Spreadsheet to see if the data was added

## Troubleshooting

If your form submissions aren't appearing in your spreadsheet:

1. **Check the Console**: Open your browser's developer tools (F12 or right-click > Inspect) and look for any errors in the Console tab.

2. **CORS Issues**: If you see CORS-related errors, this is normal when using `mode: 'no-cors'`. The data is likely still being sent, but the browser can't confirm the response.

3. **Authorization**: Make sure you completed the authorization steps when deploying the web app.

4. **URL Format**: Ensure the script URL is correct and includes the full path with `/exec` at the end.

5. **Spreadsheet Structure**: Make sure your spreadsheet has the correct column headers.

## Security Note

This implementation allows anyone to submit data to your spreadsheet. For a public RSVP form, this is usually acceptable. If you need more security, you could add a simple secret key validation in your Google Apps Script.