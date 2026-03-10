(() => {
  "use strict";

  // ── SVG Weather Icons ───────────────────────────────────────

  const ICONS = {
    sun: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="12" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
      <g stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round">
        <line x1="32" y1="6" x2="32" y2="14"/>
        <line x1="32" y1="50" x2="32" y2="58"/>
        <line x1="6" y1="32" x2="14" y2="32"/>
        <line x1="50" y1="32" x2="58" y2="32"/>
        <line x1="13.6" y1="13.6" x2="19.3" y2="19.3"/>
        <line x1="44.7" y1="44.7" x2="50.4" y2="50.4"/>
        <line x1="13.6" y1="50.4" x2="19.3" y2="44.7"/>
        <line x1="44.7" y1="19.3" x2="50.4" y2="13.6"/>
      </g>
    </svg>`,

    partlyCloudy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="22" r="9" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5"/>
      <g stroke="#fbbf24" stroke-width="2" stroke-linecap="round">
        <line x1="24" y1="6" x2="24" y2="10"/>
        <line x1="10" y1="22" x2="6" y2="22"/>
        <line x1="12.1" y1="10.1" x2="14.9" y2="12.9"/>
        <line x1="35.9" y1="10.1" x2="33.1" y2="12.9"/>
      </g>
      <path d="M20 44h28a10 10 0 0 0-2-19.8A14 14 0 0 0 20 30v0a8 8 0 0 0 0 14z" fill="rgba(255,255,255,0.85)" stroke="#cbd5e1" stroke-width="1.5"/>
    </svg>`,

    cloud: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 44h32a12 12 0 0 0-2.4-23.7A16 16 0 0 0 16 30v0a10 10 0 0 0 0 14z" fill="rgba(255,255,255,0.8)" stroke="#94a3b8" stroke-width="2"/>
    </svg>`,

    fog: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 32h32a10 10 0 0 0-2-19.8A13 13 0 0 0 16 22v0a8 8 0 0 0 0 10z" fill="rgba(255,255,255,0.6)" stroke="#94a3b8" stroke-width="1.5"/>
      <g stroke="#94a3b8" stroke-width="2" stroke-linecap="round" opacity="0.7">
        <line x1="12" y1="40" x2="52" y2="40"/>
        <line x1="16" y1="46" x2="48" y2="46"/>
        <line x1="20" y1="52" x2="44" y2="52"/>
      </g>
    </svg>`,

    drizzle: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 36h32a10 10 0 0 0-2-19.8A13 13 0 0 0 16 24v0a8 8 0 0 0 0 12z" fill="rgba(255,255,255,0.75)" stroke="#94a3b8" stroke-width="1.5"/>
      <g stroke="#60a5fa" stroke-width="2" stroke-linecap="round">
        <line x1="22" y1="42" x2="20" y2="48"/>
        <line x1="32" y1="42" x2="30" y2="48"/>
        <line x1="42" y1="42" x2="40" y2="48"/>
      </g>
    </svg>`,

    rain: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 34h36a11 11 0 0 0-2.2-21.7A15 15 0 0 0 14 22v0a9 9 0 0 0 0 12z" fill="rgba(255,255,255,0.7)" stroke="#94a3b8" stroke-width="1.5"/>
      <g stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round">
        <line x1="20" y1="40" x2="16" y2="52"/>
        <line x1="30" y1="40" x2="26" y2="52"/>
        <line x1="40" y1="40" x2="36" y2="52"/>
        <line x1="48" y1="40" x2="44" y2="50"/>
      </g>
    </svg>`,

    snow: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 34h32a10 10 0 0 0-2-19.8A13 13 0 0 0 16 22v0a8 8 0 0 0 0 12z" fill="rgba(255,255,255,0.8)" stroke="#94a3b8" stroke-width="1.5"/>
      <g fill="#bfdbfe">
        <circle cx="20" cy="44" r="2.5"/>
        <circle cx="32" cy="42" r="2.5"/>
        <circle cx="44" cy="44" r="2.5"/>
        <circle cx="26" cy="52" r="2"/>
        <circle cx="38" cy="52" r="2"/>
      </g>
    </svg>`,

    thunder: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 32h36a11 11 0 0 0-2.2-21.7A15 15 0 0 0 14 20v0a9 9 0 0 0 0 12z" fill="rgba(255,255,255,0.65)" stroke="#94a3b8" stroke-width="1.5"/>
      <polygon points="30,34 24,46 30,46 26,58 40,42 33,42 38,34" fill="#facc15" stroke="#eab308" stroke-width="1"/>
    </svg>`,
  };

  // ── Small inline SVGs for UI elements ───────────────────────

  const UI_ICONS = {
    raindrop: `<svg class="precip-icon" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    checkCircle: `<svg class="precip-icon" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    alertTriangle: `<svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  };

  // ── WMO Weather Code Mapping ────────────────────────────────

  function weatherMeta(code) {
    if (code === 0) return { label: "Clear sky", icon: ICONS.sun, theme: "clear" };
    if (code === 1) return { label: "Mainly clear", icon: ICONS.sun, theme: "clear" };
    if (code === 2) return { label: "Partly cloudy", icon: ICONS.partlyCloudy, theme: "partly-cloudy" };
    if (code === 3) return { label: "Overcast", icon: ICONS.cloud, theme: "cloudy" };
    if (code >= 45 && code <= 48) return { label: "Foggy", icon: ICONS.fog, theme: "fog" };
    if (code >= 51 && code <= 55) return { label: "Drizzle", icon: ICONS.drizzle, theme: "rain" };
    if (code >= 56 && code <= 57) return { label: "Freezing drizzle", icon: ICONS.drizzle, theme: "rain" };
    if (code >= 61 && code <= 65) return { label: "Rain", icon: ICONS.rain, theme: "rain" };
    if (code >= 66 && code <= 67) return { label: "Freezing rain", icon: ICONS.rain, theme: "rain" };
    if (code >= 71 && code <= 77) return { label: "Snow", icon: ICONS.snow, theme: "snow" };
    if (code >= 80 && code <= 82) return { label: "Rain showers", icon: ICONS.rain, theme: "rain" };
    if (code >= 85 && code <= 86) return { label: "Snow showers", icon: ICONS.snow, theme: "snow" };
    if (code >= 95 && code <= 99) return { label: "Thunderstorm", icon: ICONS.thunder, theme: "thunder" };
    return { label: "Unknown", icon: ICONS.cloud, theme: "cloudy" };
  }

  // ── DOM References ──────────────────────────────────────────

  const $ = (sel) => document.querySelector(sel);
  const app = $("#app");
  const form = $("#search-form");
  const zipInput = $("#zip-input");
  const loadingEl = $("#loading");
  const errorEl = $("#error");
  const weatherEl = $("#weather");

  const locationName = $("#location-name");
  const currentDate = $("#current-date");
  const currentIcon = $("#current-icon");
  const currentTemp = $("#current-temp");
  const currentCondition = $("#current-condition");
  const feelsLike = $("#feels-like");
  const humidity = $("#humidity");
  const wind = $("#wind");
  const uvIndex = $("#uv-index");
  const sunrise = $("#sunrise");
  const sunset = $("#sunset");
  const alertsEl = $("#alerts");
  const precipSection = $("#precip-section");
  const precipBanner = $("#precip-banner");
  const hourlyCards = $("#hourly-cards");
  const forecastCards = $("#forecast-cards");
  const lastUpdated = $("#last-updated");
  const refreshBtn = $("#refresh-btn");

  // ── State ───────────────────────────────────────────────────

  let currentZip = "";
  let refreshTimer = null;
  let loadingInterval = null;
  const REFRESH_MS = 15 * 60 * 1000;

  const LOADING_SCENES = [
    { emoji: "🔭",  msg: "Scanning the skies" },
    { emoji: "🌤️",  msg: "Peeking through clouds" },
    { emoji: "🌡️",  msg: "Reading the thermometer" },
    { emoji: "💨",  msg: "Checking the wind" },
    { emoji: "🌧️",  msg: "Counting raindrops" },
    { emoji: "🧭",  msg: "Consulting the compass" },
    { emoji: "🌈",  msg: "Chasing rainbows" },
    { emoji: "⛅",  msg: "Decoding cloud shapes" },
    { emoji: "🌊",  msg: "Measuring the breeze" },
    { emoji: "🦎",  msg: "Asking a local lizard" },
    { emoji: "🐸",  msg: "Frog says rain's coming" },
    { emoji: "☕",  msg: "Brewing your forecast" },
    { emoji: "🛰️",  msg: "Pinging satellites" },
    { emoji: "🌀",  msg: "Unraveling weather patterns" },
    { emoji: "🧊",  msg: "Measuring dewpoint" },
  ];

  const loadingEmoji = $("#loading-emoji");
  const loadingMsg = $("#loading-msg");

  // ── API Helpers ─────────────────────────────────────────────

  async function geocodeZip(zip) {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!res.ok) throw new Error("Invalid zip code. Please enter a valid 5-digit US zip code.");
    const data = await res.json();
    const place = data.places[0];
    return {
      city: place["place name"],
      state: place["state abbreviation"],
      lat: parseFloat(place.latitude),
      lng: parseFloat(place.longitude),
    };
  }

  async function fetchWeather(lat, lng) {
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lng,
      current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index",
      daily: "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset",
      hourly: "temperature_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m,wind_gusts_10m",
      temperature_unit: "fahrenheit",
      wind_speed_unit: "mph",
      timezone: "auto",
    });
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!res.ok) throw new Error("Could not fetch weather data. Please try again.");
    return res.json();
  }

  async function fetchAlerts(lat, lng) {
    try {
      const res = await fetch(
        `https://api.weather.gov/alerts/active?point=${lat},${lng}`,
        { headers: { "User-Agent": "WeatherTracker/1.0 (github-pages-app)" } }
      );
      if (!res.ok) return [];
      const data = await res.json();
      return (data.features || []).map((f) => ({
        event: f.properties.event,
        severity: (f.properties.severity || "unknown").toLowerCase(),
        headline: f.properties.headline,
        sender: f.properties.senderName,
      }));
    } catch {
      return [];
    }
  }

  // ── Time Helpers ────────────────────────────────────────────

  function fmtTime(isoStr) {
    const d = new Date(isoStr);
    return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }

  function fmtHour(isoStr) {
    const d = new Date(isoStr);
    return d.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
  }

  function currentHourIndex(hourlyTimes) {
    const now = new Date();
    for (let i = hourlyTimes.length - 1; i >= 0; i--) {
      if (new Date(hourlyTimes[i]) <= now) return i;
    }
    return 0;
  }

  // ── Precipitation Analysis ──────────────────────────────────

  function findNextPrecip(hourly) {
    const nowIdx = currentHourIndex(hourly.time);
    for (let i = nowIdx; i < hourly.time.length; i++) {
      if (hourly.precipitation_probability[i] >= 30) {
        return {
          time: hourly.time[i],
          probability: hourly.precipitation_probability[i],
          amount: hourly.precipitation[i],
          code: hourly.weather_code[i],
        };
      }
    }
    return null;
  }

  // ── Rendering ───────────────────────────────────────────────

  function setTheme(themeKey) {
    const themes = ["clear", "partly-cloudy", "cloudy", "fog", "rain", "snow", "thunder", "night"];
    themes.forEach((t) => app.classList.remove(`theme-${t}`));
    app.classList.add(`theme-${themeKey}`);
  }

  function formatDay(dateStr) {
    return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", { weekday: "short" });
  }

  function renderAlerts(alerts) {
    if (!alerts.length) {
      alertsEl.classList.add("hidden");
      return;
    }
    alertsEl.innerHTML = alerts.map((a) => `
      <div class="alert-item severity-${a.severity}">
        ${UI_ICONS.alertTriangle}
        <div>
          <span class="alert-title">${a.event}</span>
          ${a.sender ? `<span class="alert-sender"> &mdash; ${a.sender}</span>` : ""}
        </div>
      </div>
    `).join("");
    alertsEl.classList.remove("hidden");
  }

  function renderPrecip(hourly) {
    const next = findNextPrecip(hourly);
    if (!next) {
      precipBanner.className = "precip-banner precip-clear";
      precipBanner.innerHTML = `
        ${UI_ICONS.checkCircle}
        <span class="precip-text"><strong>No rain expected</strong> in the next 7 days</span>
      `;
    } else {
      const nowIdx = currentHourIndex(hourly.time);
      const precipIdx = hourly.time.indexOf(next.time);
      const hoursAway = precipIdx - nowIdx;
      const meta = weatherMeta(next.code);
      let timeLabel;
      if (hoursAway <= 0) {
        timeLabel = "right now";
      } else if (hoursAway === 1) {
        timeLabel = "in about 1 hour";
      } else {
        timeLabel = `in about ${hoursAway} hours`;
      }
      precipBanner.className = "precip-banner";
      precipBanner.innerHTML = `
        ${UI_ICONS.raindrop}
        <span class="precip-text">
          <strong>${meta.label} expected ${timeLabel}</strong>
          &nbsp;&middot;&nbsp; ${next.probability}% chance at ${fmtHour(next.time)}
        </span>
      `;
    }
    precipSection.classList.remove("hidden");
  }

  function renderHourly(hourly) {
    const nowIdx = currentHourIndex(hourly.time);
    const maxCards = Math.min(nowIdx + 24, hourly.time.length);
    hourlyCards.innerHTML = "";
    for (let i = nowIdx; i < maxCards; i++) {
      const meta = weatherMeta(hourly.weather_code[i]);
      const isNow = i === nowIdx;
      const precip = hourly.precipitation_probability[i];
      const gusts = hourly.wind_gusts_10m[i];
      const card = document.createElement("div");
      card.className = "hour-card" + (isNow ? " hour-now" : "");
      card.innerHTML = `
        <span class="hour-time">${isNow ? "Now" : fmtHour(hourly.time[i])}</span>
        <span class="hour-icon">${meta.icon}</span>
        <span class="hour-temp">${Math.round(hourly.temperature_2m[i])}°</span>
        ${precip > 0 ? `<span class="hour-precip">${precip}%</span>` : ""}
        ${gusts >= 25 ? `<span class="hour-wind">${Math.round(gusts)} mph</span>` : ""}
      `;
      hourlyCards.appendChild(card);
    }
  }

  function renderWeather(location, data, alerts) {
    const cur = data.current;
    const daily = data.daily;
    const meta = weatherMeta(cur.weather_code);

    setTheme(meta.theme);

    locationName.textContent = `${location.city}, ${location.state}`;
    currentDate.textContent = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    currentIcon.innerHTML = meta.icon;
    currentTemp.textContent = `${Math.round(cur.temperature_2m)}°F`;
    currentCondition.textContent = meta.label;

    feelsLike.textContent = `${Math.round(cur.apparent_temperature)}°F`;
    humidity.textContent = `${cur.relative_humidity_2m}%`;
    wind.textContent = `${Math.round(cur.wind_speed_10m)} mph`;
    uvIndex.textContent = cur.uv_index.toFixed(1);

    sunrise.textContent = fmtTime(daily.sunrise[0]);
    sunset.textContent = fmtTime(daily.sunset[0]);

    renderAlerts(alerts);
    renderPrecip(data.hourly);
    renderHourly(data.hourly);

    forecastCards.innerHTML = "";
    for (let i = 0; i < daily.time.length; i++) {
      const dayMeta = weatherMeta(daily.weather_code[i]);
      const card = document.createElement("div");
      card.className = "day-card";
      card.innerHTML = `
        <span class="day-name">${i === 0 ? "Today" : formatDay(daily.time[i])}</span>
        <span class="day-icon">${dayMeta.icon}</span>
        <span class="day-temps">
          <span class="day-hi">${Math.round(daily.temperature_2m_max[i])}°</span>
          <span class="day-lo">${Math.round(daily.temperature_2m_min[i])}°</span>
        </span>
      `;
      forecastCards.appendChild(card);
    }

    lastUpdated.textContent = `Updated ${new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })}`;
  }

  // ── UI State Helpers ────────────────────────────────────────

  function startLoadingAnimation() {
    let idx = Math.floor(Math.random() * LOADING_SCENES.length);
    const show = () => {
      const scene = LOADING_SCENES[idx];
      loadingEmoji.textContent = scene.emoji;
      loadingMsg.textContent = scene.msg;
      loadingEmoji.style.animation = "none";
      loadingMsg.style.animation = "none";
      void loadingEmoji.offsetWidth;
      loadingEmoji.style.animation = "";
      loadingMsg.style.animation = "";
      idx = (idx + 1) % LOADING_SCENES.length;
    };
    show();
    loadingInterval = setInterval(show, 2000);
  }

  function stopLoadingAnimation() {
    if (loadingInterval) {
      clearInterval(loadingInterval);
      loadingInterval = null;
    }
  }

  function showLoading() {
    loadingEl.classList.remove("hidden");
    errorEl.classList.add("hidden");
    weatherEl.classList.add("hidden");
    startLoadingAnimation();
  }

  function showError(msg) {
    stopLoadingAnimation();
    loadingEl.classList.add("hidden");
    errorEl.classList.remove("hidden");
    errorEl.textContent = msg;
    weatherEl.classList.add("hidden");
  }

  function showWeather() {
    stopLoadingAnimation();
    loadingEl.classList.add("hidden");
    errorEl.classList.add("hidden");
    weatherEl.classList.remove("hidden");
  }

  // ── Main Flow ───────────────────────────────────────────────

  async function loadWeather(zip) {
    showLoading();
    try {
      const location = await geocodeZip(zip);
      const [weather, alerts] = await Promise.all([
        fetchWeather(location.lat, location.lng),
        fetchAlerts(location.lat, location.lng),
      ]);
      renderWeather(location, weather, alerts);
      showWeather();
      currentZip = zip;
      localStorage.setItem("weatherZip", zip);
      startAutoRefresh();
    } catch (err) {
      showError(err.message || "Something went wrong. Please try again.");
    }
  }

  function startAutoRefresh() {
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = setInterval(() => {
      if (currentZip) loadWeather(currentZip);
    }, REFRESH_MS);
  }

  // ── Event Listeners ─────────────────────────────────────────

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const zip = zipInput.value.trim();
    if (/^\d{5}$/.test(zip)) {
      loadWeather(zip);
      zipInput.blur();
    } else {
      showError("Please enter a valid 5-digit zip code.");
    }
  });

  refreshBtn.addEventListener("click", () => {
    if (currentZip) loadWeather(currentZip);
  });

  // ── Init ────────────────────────────────────────────────────

  const saved = localStorage.getItem("weatherZip");
  if (saved && /^\d{5}$/.test(saved)) {
    zipInput.value = saved;
    loadWeather(saved);
  }
})();
