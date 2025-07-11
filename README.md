# 🎬 Movie App - React Native + Expo

A **beautiful movie browsing app** built with **React Native** and **Expo**. This project demonstrates how to fetch and display data from The Movie Database (TMDB) API, implement smooth navigation, and create a responsive, cross-platform user interface.

Inspired by [this tutorial](https://www.youtube.com/watch?v=f8Z9JyB2EIE) on building a Movie App with React Native.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Configuration](#-configuration)
- [Available Scripts](#-available-scripts)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📽️ Features

- **Fetch Movies from TMDB API**  
  Retrieve popular, top rated, upcoming, and trending movies in real time.
- **Movie Details Screen**  
  View full movie details including title, poster, overview, release date, rating, and trailers.
- **Smooth Navigation**  
  Implement stack and tab navigation with `react-navigation` for a seamless user experience.
- **Search Functionality**  
  Search for movies by title with autocomplete suggestions.
- **Responsive Carousels**  
  Display movies in horizontal carousels for each category with lazy loading of images.
- **Local Favorites**  
  Save favorite movies locally using AsyncStorage and view them offline.
- **Cross Platform**  
  Build once and run on both iOS and Android with Expo.
- **Theming**  
  Light and dark mode support based on device settings.

---

## 🧰 Tech Stack

- **React Native** (0.71+)  
- **Expo** (SDK 48)+  
- **React Navigation** (v6)  
- **TMDB API**  
- **AsyncStorage**  
- **Axios** for HTTP requests  
- **TypeScript** (optional)  

---

## 🔧 Prerequisites

- **Node.js** (>= 16.x)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- A free TMDB API key  

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the Expo server**
   ```bash
   npx expo start
   ```
4. **Run on device or emulator**
   - Press **i** to open in iOS simulator (macOS only)
   - Press **a** to open on Android emulator
   - Scan QR code with Expo Go on your physical device

---

## 📁 Folder Structure

```
movie-app/
├── app/
│   ├── components/      # Reusable UI components (MovieCard, Header, Loader)
│   ├── screens/         # Screen components (HomeScreen, DetailScreen, SearchScreen)
│   ├── navigation/      # Navigation containers and stacks
│   └── config/          # API keys, base URLs, theme settings
├── assets/              # Static assets (images, fonts)
├── App.js               # App entry point
├── app.json             # Expo configuration
├── package.json         # Project metadata and scripts
└── README.md            # This file
```  
Each folder is organized by feature and responsibility to keep the codebase modular and maintainable.

---

## 🔑 Configuration

To connect to TMDB API, create a config file in `/app/config/api.js`:

```js
export const TMDB_API_KEY = 'YOUR_TMDB_API_KEY_HERE';
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
```

Make sure to restart the Expo server after adding your API key.

---

## ⚙️ Available Scripts

- `npm start`  
  Start Expo development server.
- `npm run android`  
  Build and install on Android device/emulator.
- `npm run ios`  
  Build and install on iOS simulator (macOS only).
- `npm run web`  
  Run in web browser with Expo for Web.
- `npm run lint`  
  Run ESLint checks.
- `npm run build`  
  Create production build for standalone apps.

---

## 🚩 Usage

1. Launch the app and browse the curated lists of movies.  
2. Tap on a movie poster to see full details, trailers, and cast.  
3. Use the search tab to look up titles instantly.  
4. Mark movies as favorites and access them offline.  
5. Toggle between light and dark themes in your device settings.

---

## 📷 Screenshots

_Add screenshots here to showcase the UI. Drag and drop images into this section after uploading._

---

## 📌 Roadmap

- [ ] Filter by genre and release year  
- [ ] Display movie cast and crew  
- [ ] Integrate watchlist syncing with cloud storage  
- [ ] Add trailers and video playback support  
- [ ] Push notifications for new releases

---

## 🤝 Contributing

Contributions are welcome. Follow these steps:
1. Fork the repo  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Make your changes and commit (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request

Please follow the existing code style and write clear commit messages.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---
