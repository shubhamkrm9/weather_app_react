Weather Finder App

A simple and responsive weather application built using React and Material UI that allows users to search for real-time weather information of any city.

---

##  Features

*  Search weather by city name
*  Displays temperature, humidity, and weather conditions
*  Real-time data fetched from a weather API
*  Clean and responsive UI using Material UI
*  Fast and smooth user experience

---

## 🛠️ Tech Stack

* **Frontend:** React
* **UI Library:** Material UI
* **API:** Weather API 
* **Build Tool:** Vite 

---

## 📂 Project Structure

```
weather_app_react/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/shubhamkrm9/weather_app_react.git
```

2. Navigate into the project:

```bash
cd weather_app_react
```

3. Install dependencies:

```bash
npm install
```

4. Add your API key:

Create a file:

```
config.js
```

Example:

```js
const API_KEY = "your_api_key_here";
export default API_KEY;
```

5. Run the app:

```bash
npm run dev
```

---

## 🔐 Environment Note

Make sure you **do not push your actual API key** to GitHub.
Instead, use a `config.example.js` file to show the structure.

---


##  Future Improvements

* Add location-based weather (GPS)
* Show 5-day or hourly forecast
* Improve error handling for invalid city names
* Add dark mode support

---

## Contributing

Feel free to fork the repository and submit pull requests if you want to improve the project.

---

##  License

This project is open source and available under the MIT License.

---

##  Author

Built as a learning project to practice React, API integration, and UI design.
