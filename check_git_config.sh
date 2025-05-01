#!/bin/bash

# This script helps diagnose Git configuration issues

echo "===== GIT CONFIGURATION CHECK ====="
echo ""

echo "Checking Git version:"
git --version
echo ""

echo "Checking Git configuration:"
git config --list
echo ""

echo "Checking repository remote URLs:"
cd ~/birthday_party_website
git remote -v
echo ""

echo "Checking repository status:"
git status
echo ""

echo "Checking if repository exists on GitHub:"
curl -s -o /dev/null -w "%{http_code}" https://github.com/heidijudge22/itsmybday
echo " (200 = exists, 404 = does not exist)"
echo ""

echo "===== TROUBLESHOOTING TIPS ====="
echo ""
echo "1. If using command line, make sure you're using a personal access token, not your password"
echo "2. Create a token at: https://github.com/settings/tokens"
echo "3. Consider using GitHub Desktop instead: https://desktop.github.com/"
echo "4. Try the export_website.sh script to manually upload your files"
echo ""
echo "For more detailed instructions, see GITHUB_PUBLISHING_GUIDE.md"