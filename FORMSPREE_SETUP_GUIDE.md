# Setting Up Formspree for Your RSVP Form

This guide will walk you through the process of setting up Formspree to collect responses from your birthday party RSVP form.

## Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io/)
2. Click "Sign Up" and create an account (you can use your Google account or email)
3. Verify your email if required

## Step 2: Create a New Form

1. Once logged in, click "New Form"
2. Give your form a name (e.g., "30th Birthday RSVP")
3. Choose the Free plan (allows up to 50 submissions per month)
4. Click "Create Form"

## Step 3: Get Your Form Endpoint

1. After creating the form, you'll see your unique form endpoint
2. It will look something like: `https://formspree.io/f/xrgdopbz`
3. Copy this endpoint code (the part after the last slash - e.g., `xrgdopbz`)

## Step 4: Update Your Website

1. Open the file `/Users/hjudge/birthday_party_website/index.html`
2. Find this line:
   ```html
   <form id="rsvp-form" action="https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_CODE" method="POST">
   ```
3. Replace `REPLACE_WITH_YOUR_FORMSPREE_CODE` with the endpoint code you copied in Step 3
4. Save the file

## Step 5: Configure Email Notifications

The form is already configured to:
- Send a copy of each submission to heidijudge22@gmail.com
- Redirect users to the "thanks.html" page after submission
- Use a custom subject line for email notifications

## Step 6: Test Your Form

1. Open your website in a browser
2. Fill out and submit the RSVP form
3. You should be redirected to the thank you page
4. Check your email (both the primary Formspree email and heidijudge22@gmail.com) to confirm you received the submission

## Step 7: Access Your Submissions

1. Log in to your Formspree account
2. Go to your form dashboard
3. You'll see all submissions listed there
4. You can export them as CSV if needed

## Additional Formspree Features

- **Spam Filtering**: Formspree automatically filters spam submissions
- **Email Notifications**: You'll receive an email for each submission
- **Form Analytics**: Basic analytics about your form submissions
- **Custom Redirects**: The form is set to redirect to your thanks.html page
- **Email Templates**: You can customize the email notification template in your Formspree settings

## Connecting to Google Sheets (Optional)

If you still want to connect your form to Google Sheets:

1. In your Formspree dashboard, go to your form settings
2. Look for "Integrations" or "Plugins"
3. Connect to Google Sheets (may require a paid plan)

## Need More Than 50 Submissions?

The free Formspree plan allows up to 50 submissions per month. If you need more:
1. Upgrade to a paid plan on Formspree
2. Or consider implementing one of the other options in the FORM_COLLECTION_OPTIONS.md file