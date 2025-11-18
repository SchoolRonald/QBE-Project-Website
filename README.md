# Mines AI & Machine Learning Club — Site (Svelte)

This is a small Svelte + Vite scaffold for the Colorado School of Mines AI & ML Club. It contains three pages: Home, Upcoming Events, and Contact.

## Quick start

```bash
# from project root
npm install
npm run dev
```

Open http://localhost:5173

## Updating Content

### Events

To add, edit, or remove events, update `src/data/events.json`:

```json
{
  "Event Name": {
    "date": "2025-11-28",
    "start_time": "16:00",
    "end_time": "17:00",
    "location": "East Building 250",
    "description": "Event description here."
  }
}
```

- For TBD events, use `"date": "TBD"` and `"location": "TBD"`
- Times use 24-hour format (e.g., "16:00" for 4pm)
- Events automatically sort by date on the Events page

### Contact/Team Members

To update team members, edit `src/data/people.json`:

```json
{
  "leadership": [
    {
      "name": "Person Name",
      "role": "President",
      "email": "email@mines.edu"
    },

    ...
  ],
  "advisors": [
    {
      "name": "Dr. Name",
      "role": "Faculty Advisor",
      "url": "https://profile-url.com",
      "image": "/src/assets/photo.jpg"
    },

    ...
  ],
  "officers": [
    {
      "name": "Person Name",
      "role": "Officer Title"
    },

    ...
  ]
}
```

- `email`: Optional contact email
- `url`: Optional external profile link
- `image`: Optional profile photo that shold be placed in `src/assets` (if omitted, initials will be shown)

## Notes

- This is a simple single-page Svelte app using hash-based routing for ease of demo.
- The contact form is a demo (no backend). I can add a real backend (Netlify functions, Formspree, or your preferred endpoint) if you want.
- Logo and illustration are simple SVGs included in `src/assets`. We can replace them with specific images/logos you prefer.
