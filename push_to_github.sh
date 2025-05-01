#!/bin/bash

# This script will push your birthday party website to GitHub
# You'll need to run this script and enter your GitHub credentials when prompted

cd ~/birthday_party_website

# Make sure your changes are committed
git status

# Push to GitHub
echo "Pushing to GitHub repository..."
git push -u origin main

echo "Done! Your website should now be on GitHub at https://github.com/heidijudge22/itsmybday"
echo "You can view your site at https://heidijudge22.github.io/itsmybday if you enable GitHub Pages"