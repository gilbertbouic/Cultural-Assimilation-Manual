# Configuration Guide

This guide explains how to configure and customize the Cultural Assimilation Manual application.

## Customizing Content

All cultural content, quizzes, and scenarios are stored directly in `index.html`. To modify or add content, you can edit the HTML structure within that file.

- **Cultural Modules**: Content is organized by `section` tags (e.g., `<section id="about">`).
- **Quizzes**: Quiz questions can be added to the relevant sections.
- **Scenarios**: Scenarios and do's/don'ts cards can be added to the relevant sections.

## Styling and Themes

- **Main Styles**: Modify `styles.css` for general layout and typography.
- **Interactive Styles**: Modify `interactive-styles.css` to change the appearance of quizzes, flip cards, and other interactive elements.

## Local Development

For the best development experience, run a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

This prevents issues with browser security policies related to local file access.

## Deployment

This application is designed for easy deployment on static hosting platforms like GitHub Pages.

1.  **Enable GitHub Pages**: In your repository settings, go to the "Pages" section.
2.  **Select Source**: Choose the `main` branch and the `/(root)` folder as the source.
3.  **Deploy**: Your site will be live shortly.
