# Lymbuu’ Client — browser-build Android project

This project is designed for a phone-only workflow using GitHub in the browser. No AndroidIDE is required.

## Build on your phone
1. Create a GitHub account or sign in.
2. Create a new repository named `Lymbuu-Client`.
3. Upload every file/folder from this project, including `.github/workflows/android.yml`.
4. Open **Actions** → **Build Lymbuu Client APK** → **Run workflow**.
5. Wait for the green check.
6. Open the workflow run → **Artifacts** → download `Lymbuu-Client-debug-apk`.
7. Extract the downloaded artifact and install `app-debug.apk`.

The app is a launcher-style Android wrapper around the included Lymbuu web UI. It does not modify or inject into Minecraft's game engine.
