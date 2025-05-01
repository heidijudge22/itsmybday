#!/bin/bash

# This script will push your birthday party website to GitHub using a personal access token
# Replace YOUR_TOKEN with your actual token

cd ~/birthday_party_website

# Configure Git to use the token
git remote set-url origin https://YOUR_TOKEN@github.com/heidijudge22/itsmybday.git

# Push to GitHub
echo "Pushing to GitHub repository..."
git push -u origin main

# Reset the URL to not contain the token (for security)
git remote set-url origin https://github.com/heidijudge22/itsmybday.git

echo "Done! Your website should now be on GitHub at https://github.com/heidijudge22/itsmybday"
echo "You can view your site at https://heidijudge22.github.io/itsmybday if you enable GitHub Pages"