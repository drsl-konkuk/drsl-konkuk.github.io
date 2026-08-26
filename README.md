# DRSL Complete GitHub Pages Website

This project recreates the complete navigation structure of the Disaster Resistant Structures Lab. (DRSL) Google Sites website as a standalone static GitHub Pages site.

## Included pages

- Introduction
- People
  - Professor
  - Lab Members
  - Alumni
- Courses
- Project
- Publication
- Contact Us

## Publish

1. Create a GitHub repository.
2. Upload everything in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

## Publication data

The publication page loads entries from:

`data/publications.json`

Add entries in this format:

```json
{
  "year": 2026,
  "text": "Author(s). Title. Journal, volume, pages."
}
```

No HTML edits are needed. The page automatically sorts entries by year and supports live search.

## Images

The introduction page currently references the two images used by the existing Google Sites page through Google-hosted URLs. For a permanent deployment, save copies of images that you have permission to use inside `assets/`, then replace the external URLs in `styles.css`.

Member portraits are intentionally represented by clean initial avatars so the repository has no dependency on inaccessible Google Sites image assets. Replace an avatar with your own `<img>` whenever you have the original photo file.

## Local preview

Because the publication JSON is loaded with `fetch`, preview through a local HTTP server rather than double-clicking `index.html`.

Example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.


## Header logo

The site header expects the logo at:

`assets/drsl-logo.png`

If your logo has a different filename, rename it to `drsl-logo.png` or update the `src` attribute in the HTML files.
