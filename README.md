# 🎬 Movie App — React Native + Expo

A **beautiful movie browsing app** built using **React Native** and **Expo**, inspired by TMDB’s layout and API.

> 📽️ *Inspired by [this tutorial](https://www.youtube.com/watch?v=f8Z9JyB2EIE) on building a Movie App with React Native.*

---

## 🚀 Features

- 📡 Fetches data from **TMDB API**
- 🧭 Smooth navigation with **React Navigation**
- 🎨 Clean UI with scrollable movie carousels
- 📱 Cross-platform with **Expo**
- 💡 Lightweight and fast

---

## 📁 Folder Structure

movie-app/
├── app/
│ ├── components/ # Reusable components (e.g., MovieCard)
│ ├── screens/ # Home, MovieDetail
│ ├── config/ # API config, colors
│ └── navigation/ # Navigation setup
├── assets/ # Images, logos, fonts
├── App.js # App entry point
├── app.json # Expo configuration
└── package.json # Project metadata

---

## 🧰 Tech Stack

- ⚛️ **React Native**
- 🌍 **Expo**
- 🔀 **React Navigation**
- 🎥 **TMDB API**
- 💻 **WebStorm IDE**

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-app.git
cd movie-app

npm install

npx expo start
 
```


---

## 🔑 Setup TMDB API Key

This app requires a free TMDB API key.

### 1. Get your API key
Sign up and get your API key from [TMDB](https://www.themoviedb.org/documentation/api).

### 2. Create a config file
Inside your project, create the following file: /app/config/api.js

### 3. Add the following code:

```js
export const TMDB_API_KEY = 'your_tmdb_api_key_here';
```
---
## 📷 Screenshots

(Add screenshots here to preview your UI in action — you can drag and drop images into this section once uploaded)

---

## 📌 Roadmap

- [ ] Add search functionality 🔍
- [ ] Filter by genre 🎭
- [ ] Show cast & trailers 🎬
- [ ] Save favorites locally ❤️
- [ ] Dark mode support 🌙

---

## 🤝 Contributing

Pull requests are welcome! If you have ideas to improve the app, feel free to fork the repo and submit a PR.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Connect

- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com