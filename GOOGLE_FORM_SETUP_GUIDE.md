# How to Connect Your RSVP Form to Google Sheets

This guide will walk you through setting up a Google Form that saves responses directly to your Google Spreadsheet, and then integrating it with your birthday party website.

## Step 1: Create a Google Form Connected to Your Spreadsheet

1. Go to [Google Forms](https://forms.google.com)
2. Click the "+" button to create a new form
3. Name your form (e.g., "30th Birthday Party RSVP")
4. Add the following questions:
   - **Name** (Short answer, Required)
   - **Email** (Short answer, Required)
   - **Will you be attending?** (Multiple choice: "Yes, I'll be there!" / "Sorry, I can't make it", Required)
   - **Number of guests (including yourself)** (Dropdown: 1, 2, Required)
   - **Message (optional)** (Paragraph)

5. Customize the form's appearance:
   - Click the paint palette icon at the top
   - Choose a theme or customize colors to match your website (greens and blues)

6. Connect the form to your spreadsheet:
   - Click on the "Responses" tab at the top
   - Click the three dots menu (⋮) in the top right
   - Select "Select response destination"
   - Choose "Existing spreadsheet"
   - Select your spreadsheet: "https://docs.google.com/spreadsheets/d/19S_ejHnrbsSjMVLaZxrc02-EGIeJzPPZ9EgDXE033lA/edit"
   - Click "Select"

## Step 2: Get Your Google Form URL

1. Click the "Send" button in the top right
2. In the popup window, click the link icon (chain symbol)
3. Copy the form URL
4. Click "Copy link" to copy it to your clipboard

## Step 3: Choose How to Integrate with Your Website

You have two options for integration:

### Option 1: Embed the Form Directly in Your Website

1. Open the file `google_form_version.html` in a text editor
2. Find this line:
   ```html
   <iframe id="google-form" src="YOUR_GOOGLE_FORM_URL_HERE?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   ```
3. Replace `YOUR_GOOGLE_FORM_URL_HERE` with your actual Google Form URL
4. Save the file
5. Delete or comment out the "Option 2" section if you don't want to use it

### Option 2: Link to the Google Form

1. Open the file `google_form_version.html` in a text editor
2. Find this line:
   ```html
   <a href="YOUR_GOOGLE_FORM_URL_HERE" class="btn" target="_blank">Click Here to RSVP</a>
   ```
3. Replace `YOUR_GOOGLE_FORM_URL_HERE` with your actual Google Form URL
4. Save the file
5. Delete or comment out the "Option 1" section if you don't want to use it

## Step 4: Rename and Use the File

1. After deciding which option you prefer, rename the file:
   ```
   mv /Users/hjudge/birthday_party_website/google_form_version.html /Users/hjudge/birthday_party_website/index.html
   ```
   (This will replace your existing index.html file, so make a backup if needed)

## Step 5: Test Your Form

1. Open your website in a browser
2. Fill out and submit the form
3. Check your Google Spreadsheet to confirm the response was recorded

## Additional Tips

1. **Customize Form Appearance**: 
   - You can further customize the Google Form appearance to match your website's Y2K theme
   - Use similar colors (lime green, silver, cyan)

2. **Form Confirmation Message**:
   - In Google Forms, click the gear icon (⚙️) at the top
   - Go to the "Presentation" tab
   - Customize the confirmation message users see after submitting

3. **Form Settings**:
   - In the same settings menu, you can control whether users can:
     - Submit multiple responses
     - Edit after submitting
     - See summary charts and text responses

4. **Notification Settings**:
   - In Google Forms, click the three dots menu (⋮)
   - Select "Get email notifications for new responses" to be notified when someone RSVPs