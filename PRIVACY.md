# Privacy Policy

**Last Updated: December 2024**

## Our Commitment to Privacy

The Cultural-Assimilation-Manual is built with privacy as a core principle. We believe cultural guidance should be accessible without compromising your personal information.

## What We DON'T Do

- ❌ **No Advertising**: This is a completely ad-free platform
- ❌ **No Tracking**: We don't use analytics, tracking pixels, or third-party trackers
- ❌ **No Cookies**: We don't use cookies (except essential local storage)
- ❌ **No Personal Data Collection**: We don't collect, store, or transmit any personal information
- ❌ **No User Accounts**: You don't need to create an account or provide any personal details
- ❌ **No Server-Side Storage**: Your data never leaves your device

## What We DO

- ✅ **Local Storage Only**: Quiz scores and preferences are stored locally on your device using browser local storage
- ✅ **Privacy-Friendly**: All data remains on your device and is never transmitted to our servers
- ✅ **Open Source**: Our code is publicly available on GitHub for full transparency
- ✅ **GDPR Compliant**: We don't collect personal data, so there's nothing to share or sell

## Local Storage Usage

We use browser local storage to enhance your experience by:

1. **Saving Quiz Scores**: Your quiz results are stored locally so you can track your progress
2. **Remembering Role Preference**: If you select a role profile (student, professional, etc.), we remember your choice
3. **Progress Tracking**: Your cultural competency scoreboard is maintained locally

### Important Notes About Local Storage

- This data is stored **only on your device**
- We cannot access this data - it never leaves your browser
- You can clear this data anytime through your browser settings
- Clearing browser data will reset your scores and preferences

## Third-Party Services

We use the following third-party libraries loaded from CDNs:

- **TensorFlow.js**: For hand-tracking features (optional functionality)
- **HandPose Model**: For gesture-based interactions (optional functionality)

These libraries are loaded from unpkg.com. We do not control their privacy practices, but they are loaded only for functionality, not tracking.

## Data Security

Since we don't collect or transmit data, there's no risk of your information being:
- Hacked or breached
- Sold to third parties
- Used for advertising
- Shared with governments or law enforcement (there's nothing to share)

## Your Rights

Because we don't collect personal data, you already have complete control:

- **Right to Access**: All your data is on your device in local storage
- **Right to Delete**: Clear your browser's local storage to delete all data
- **Right to Export**: Use browser developer tools to export your local storage data
- **Right to Portability**: Your data is in standard JSON format

## Children's Privacy

Our platform is designed for users of all ages. Since we don't collect any personal information, there are no special considerations for children's privacy beyond general internet safety.

## Changes to This Policy

We will update this policy if our privacy practices change. The "Last Updated" date will be modified accordingly.

## Open Source Verification

You can verify all our privacy claims by reviewing our source code at:
https://github.com/gilbertbouic/The-Cultural-User-Manual

## Contact

For questions about this privacy policy or our practices, please open an issue on our GitHub repository.

## Technical Details

### What Local Storage Contains

Your browser's local storage for this site may contain:
```json
{
  "culturalScores": {
    "quizzes": { /* quiz names and scores */ },
    "scenarios": { /* scenario completions */ },
    "overall": /* calculated average score */
  },
  "selectedRole": "/* your chosen role profile */"
}
```

### How to Clear Your Data

**Chrome/Edge:**
1. Open Developer Tools (F12)
2. Go to Application tab
3. Expand Local Storage
4. Right-click on the site and select "Clear"

**Firefox:**
1. Open Developer Tools (F12)
2. Go to Storage tab
3. Expand Local Storage
4. Right-click and select "Delete All"

**Safari:**
1. Open Web Inspector
2. Go to Storage tab
3. Select Local Storage
4. Delete entries

Alternatively, use the "Reset All Scores" button in the scoreboard section of the app.

---

**Summary**: We don't collect your data. We don't track you. We don't show ads. Your privacy is completely protected.
