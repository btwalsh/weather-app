# Weather Tracker

A beautiful single-page weather app that shows current conditions and a 7-day forecast for any US zip code. No build step, no API keys required.

## Features

- Current temperature, feels-like, humidity, wind speed, and UV index
- 7-day forecast with daily highs and lows
- Dynamic gradient backgrounds that shift based on weather conditions
- Auto-refreshes every 15 minutes
- Remembers your last searched zip code
- Fully responsive

## APIs Used

- **[Open-Meteo](https://open-meteo.com/)** — free weather data, no API key needed
- **[Zippopotam.us](https://zippopotam.us/)** — free zip code geocoding, no key needed

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo
4. Under **Source**, select **Deploy from a branch**, branch `main`, folder `/ (root)`
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Run Locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
