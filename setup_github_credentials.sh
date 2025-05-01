#!/bin/bash

# This script will set up credential caching for GitHub
# It will prompt you for your personal access token

cd ~/birthday_party_website

# Set up credential caching
git config --global credential.helper osxkeychain

# Instructions for the user
echo "===== GitHub Personal Access Token Setup ====="
echo "When prompted for your password, paste your Personal Access Token instead."
echo "Your username is your GitHub username (heidijudge22)."
echo ""
echo "Press Enter to continue..."
read

# Try pushing to trigger the credential prompt
git push -u origin main

echo ""
echo "If the push was successful, your credentials are now saved in the macOS keychain."
echo "You won't need to enter them again on this computer."
echo ""
echo "Your website should now be on GitHub at https://github.com/heidijudge22/itsmybday"
echo "You can view your site at https://heidijudge22.github.io/itsmybday if you enable GitHub Pages"