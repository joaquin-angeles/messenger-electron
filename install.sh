#!/bin/bash

# Get the current script's directory (where the script is located)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Define the AppImage and icon paths based on the script's location
APP_NAME="Messenger"
APP_PATH="$SCRIPT_DIR/Messenger_Electron-1.0.0.AppImage"
ICON_PATH="$SCRIPT_DIR/icons/512/icon.png"
DESKTOP_FILE="$HOME/.local/share/applications/messenger-electron.desktop"

# Create the .desktop file
cat <<EOL > "$DESKTOP_FILE"
[Desktop Entry]
Version=1.0
Name=$APP_NAME
Comment=Messenger Electron App
Exec=$APP_PATH
Icon=$ICON_PATH
Terminal=false
Type=Application
Categories=Utility;
EOL

# Make the .desktop file executable
chmod +x "$DESKTOP_FILE"

echo "Desktop shortcut for $APP_NAME has been created!"
