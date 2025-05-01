#!/bin/bash

# This script creates a zip file of your website that you can manually upload to GitHub

# Set variables
WEBSITE_DIR=~/birthday_party_website
ZIP_FILE=~/Desktop/birthday_website.zip
EXCLUDE_FILE=/tmp/zip_exclude.txt

# Create exclude file
cat > $EXCLUDE_FILE << EOF
.git/*
.github/*
.DS_Store
*.log
node_modules/*
.vscode/*
.idea/*
*.tmp
test_confetti.js
syntax_check.js
push_to_github.sh
push_with_token.sh
setup_github_credentials.sh
*.zip
EOF

# Create zip file
echo "Creating zip file at $ZIP_FILE..."
cd $WEBSITE_DIR
zip -r $ZIP_FILE . -x@$EXCLUDE_FILE

# Clean up
rm $EXCLUDE_FILE

echo ""
echo "===== WEBSITE EXPORT COMPLETE ====="
echo ""
echo "Your website has been exported to: $ZIP_FILE"
echo ""
echo "To upload to GitHub:"
echo "1. Go to https://github.com/heidijudge22/itsmybday"
echo "2. Click 'Add file' > 'Upload files'"
echo "3. Drag and drop the zip file or click to select it"
echo "4. Click 'Commit changes'"
echo ""
echo "After uploading:"
echo "1. Go to Settings > Pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Select 'main' branch and '/root' folder"
echo "4. Click 'Save'"
echo ""
echo "Your website will be available at: https://heidijudge22.github.io/itsmybday/"