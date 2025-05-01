# How to Set Up Form Submissions for Your Birthday Website

This guide will help you set up Formspree to collect RSVP responses from your birthday party website.

## Setting Up Formspree

1. **Create a Formspree Account**
   - Go to [formspree.io](https://formspree.io/)
   - Sign up for a free account using your email

2. **Create a New Form**
   - After logging in, click on "New Form"
   - Give your form a name (e.g., "Birthday RSVP")
   - Select the free plan

3. **Get Your Form Endpoint**
   - After creating the form, you'll receive a unique endpoint URL
   - It will look something like: `https://formspree.io/f/xrgdopbz`

4. **Update Your HTML File**
   - Open your `index.html` file
   - Find the form tag: `<form id="rsvp-form" action="https://formspree.io/f/your-formspree-endpoint" method="POST">`
   - Replace `your-formspree-endpoint` with your actual endpoint from step 3

5. **Test Your Form**
   - Open your website in a browser
   - Fill out the form and submit it
   - Check your email to see if you received the submission
   - Also check your Formspree dashboard to see if the submission was recorded

## Form Submission Features

With the free Formspree plan, you get:
- Up to 50 submissions per month
- Email notifications for each submission
- Spam filtering
- Basic form analytics

## Additional Options

### Google Forms

If you prefer using Google Forms:
1. Create a form at [forms.google.com](https://forms.google.com/)
2. Design your RSVP questions
3. Get the form URL
4. In your website, you can either:
   - Link directly to the Google Form
   - Or embed it using an iframe

### Netlify Forms

If you plan to host your site on Netlify:
1. Add `data-netlify="true"` to your form tag
2. Add a hidden input: `<input type="hidden" name="form-name" value="rsvp-form">`
3. Deploy your site to Netlify
4. Submissions will be collected in your Netlify dashboard

## Customizing Thank You Messages

After setting up Formspree:
1. In your Formspree dashboard, go to your form settings
2. Look for "Success Page" or "After Submit"
3. You can customize the success message or redirect to a custom thank you page