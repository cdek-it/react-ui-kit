#!/bin/bash

# Define the source SCSS file and the destination directory
SRC_FILE="src/themes/theme-light/_fonts.scss"
DEST_DIR="src/themes/theme-light/fonts"

# Create the destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Extract all font file paths from the SCSS file and copy them to the destination directory
grep -o "url(./fonts/[^)]*)" "$SRC_FILE" | sed 's/url(\.\/fonts\///;s/)//' | while read -r font_file; do
  cp "src/themes/theme-light/fonts/$font_file" "$DEST_DIR"
done

echo "All font files have been copied to $DEST_DIR"
