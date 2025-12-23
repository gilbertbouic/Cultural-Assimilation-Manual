# Configuration Guide

This document provides instructions for configuring optional features of the Cultural-Assimilation-Manual.

## Google Form Integration

The landing page includes a placeholder for a Google Form to collect user feedback. To configure this:

### Steps:

1. **Create a Google Form**:
   - Go to [Google Forms](https://forms.google.com)
   - Create a new form for collecting user feedback
   - Add fields such as:
     - Name (optional)
     - Email (optional)
     - Feedback/Suggestions (required)
     - Experience level with the app
     - Country/Region of interest
     - Any other relevant questions

2. **Get the Form Link**:
   - Click "Send" in your Google Form
   - Click the link icon to get the shareable link
   - Copy the shortened URL (e.g., `https://forms.gle/xxxxxxxxxxxxx`)

3. **Update index.html**:
   - Open `index.html`
   - Find the feedback section (search for `id="feedback-form-btn"`)
   - Replace the `onclick` attribute with the proper href:
   
   **Before:**
   ```html
   <a href="#" id="feedback-form-btn" class="feedback-btn secondary" onclick="event.preventDefault(); alert('Google Form link not yet configured. Please visit GitHub Issues to share feedback.');">
   ```
   
   **After:**
   ```html
   <a href="https://forms.gle/YOUR_FORM_ID" id="feedback-form-btn" class="feedback-btn secondary" target="_blank">
   ```

4. **Update the note (optional)**:
   - You can also remove or update the note below the button:
   ```html
   <p class="feedback-note"><em>Note: Google Form link can be configured by updating the href attribute above</em></p>
   ```

### Testing:

After making the changes:
1. Serve the site locally: `python -m http.server 8000`
2. Open `http://localhost:8000` in your browser
3. Scroll to the feedback section
4. Click the "Fill Feedback Form" button to verify it opens your Google Form

## GitHub Pages Deployment

The site is ready for GitHub Pages deployment:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Select "/ (root)" as the folder
   - Click "Save"

2. **Access Your Site**:
   - Your site will be available at: `https://[username].github.io/The-Cultural-User-Manual/`
   - Wait a few minutes for the initial deployment

3. **Custom Domain (Optional)**:
   - If you have a custom domain, add it in the GitHub Pages settings
   - Update DNS records as instructed by GitHub

## Privacy Configuration

The application is designed to be privacy-friendly by default:
- No analytics tracking
- No cookies (except local storage for progress)
- No external data collection

If you want to add privacy-compliant analytics:
1. Consider privacy-focused alternatives like [Plausible](https://plausible.io/) or [Fathom](https://usefathom.com/)
2. Ensure GDPR compliance
3. Update the Privacy Policy accordingly

## Customization

### Updating Feature Status:

To update the "What's New & Coming Soon" section:

1. Open `index.html`
2. Find the `features-preview` section
3. Features marked with `.completed` show a green checkmark (✅)
4. Features marked with `.in-progress` show an orange indicator (🔄)

Example:
```html
<div class="feature-card completed">
    <div class="feature-icon">✅</div>
    <h4>Your Feature Name</h4>
    <p>Feature description</p>
</div>
```

### Adding New Features:

Add a new feature card to the features grid:
```html
<div class="feature-card in-progress">
    <div class="feature-icon">🔄</div>
    <h4>New Feature Name</h4>
    <p>Description of what's coming</p>
</div>
```

### Styling:

- Primary colors are defined in CSS variables in `styles.css`
- The gradient background can be customized in the header section
- All interactive elements have hover states for better UX

## Support

For issues or questions:
- Open an issue on [GitHub Issues](https://github.com/gilbertbouic/The-Cultural-User-Manual/issues)
- Check the main [README.md](README.md) for general documentation
- Review [PRIVACY.md](PRIVACY.md) for privacy-related information
