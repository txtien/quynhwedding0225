#!/bin/bash

TARGET_DIR="/var/www/wedding"
SCRIPT_NAME="script.sh"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Error: Please run as root"
    exit 1
fi

# Create target directory if it doesn't exist
if [ ! -d "$TARGET_DIR" ]; then
    mkdir -p "$TARGET_DIR"
    if [ $? -ne 0 ]; then
        echo "Error: Failed to create target directory $TARGET_DIR"
        exit 1
    fi
    echo "Created target directory $TARGET_DIR"
fi

# Check if target directory is writable
if [ ! -w "$TARGET_DIR" ]; then
    echo "Error: Target directory $TARGET_DIR is not writable"
    exit 1
fi

# Copy files
for file in *; do
    if [ "$file" != "$SCRIPT_NAME" ] && [ -f "$file" ]; then
        cp "$file" "$TARGET_DIR/"
        if [ $? -eq 0 ]; then
            echo "Copied $file to $TARGET_DIR"
        else
            echo "Error: Failed to copy $file"
            exit 1
        fi
    fi
done

# Change ownership
chown -R caddy:caddy "$TARGET_DIR"
if [ $? -eq 0 ]; then
    echo "Changed ownership of $TARGET_DIR to caddy"
else
    echo "Error: Failed to change ownership of $TARGET_DIR"
    exit 1
fi

echo "Operation completed successfully"