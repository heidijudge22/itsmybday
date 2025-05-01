# Collecting RSVP Form Responses

There are several ways to collect responses from your RSVP form. Here are three options, from simplest to most complex:

## Option 1: Email Notifications (Simplest)

1. **Set up Formspree**:
   - Go to [formspree.io](https://formspree.io/)
   - Create a free account
   - Create a new form
   - Copy the form endpoint URL (looks like `https://formspree.io/f/xrgdopbz`)

2. **Update your HTML**:
   - Open `index.html`
   - Find the form tag and add the Formspree action:
   ```html
   <form id="rsvp-form" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
   ```
   - Replace `YOUR_ENDPOINT` with your actual Formspree endpoint

3. **How it works**:
   - When someone submits the form, you'll receive an email with their response
   - Responses are also stored in your Formspree dashboard

## Option 2: Google Forms (Moderate)

1. **Create a Google Form**:
   - Go to [forms.google.com](https://forms.google.com/)
   - Create a new form with the same fields as your RSVP form
   - In the "Responses" tab, click the Google Sheets icon to create a linked spreadsheet

2. **Get Form Pre-filled Link**:
   - In your Google Form, click the three dots menu in the top right
   - Select "Get pre-filled link"
   - Fill out the form with placeholder values
   - Click "Get link" and copy the URL

3. **Update your JavaScript**:
   - Open `form-handler.js`
   - Look for the FormData section
   - Update the entry IDs with the ones from your Google Form
   - Uncomment the fetch request to the Google Form

4. **How it works**:
   - When someone submits your website form, JavaScript sends the data to your Google Form
   - Responses are collected in your Google Spreadsheet

## Option 3: Google Apps Script (Advanced)

For this option, follow the instructions in the `GOOGLE_APPS_SCRIPT_GUIDE.md` file.

## Current Implementation

The current implementation simulates a successful form submission but doesn't actually store the data anywhere. It's meant to be a placeholder until you choose one of the options above.

When someone submits the form:
1. They see a success message and modal
2. The form data is logged to the browser console
3. No data is actually stored or sent anywhere

## Testing the Current Implementation

1. Open your website in a browser
2. Fill out the RSVP form and submit it
3. You should see a success message and modal
4. Open your browser's developer console (F12 or right-click > Inspect > Console) to see the form data

## Next Steps

Choose one of the options above based on your technical comfort level and needs:
- Option 1 (Formspree): Simplest, but limited to 50 submissions per month on free plan
- Option 2 (Google Forms): Good balance of simplicity and functionality
- Option 3 (Google Apps Script): Most flexible, but requires more technical setup