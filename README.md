# 📉 PractoTrade — Sentiment-Driven Stock Price Predictor (Frontend)

The frontend of the **PractoTrade** application allows users to view sentiment-driven stock predictions, interact with community polls, and get insights into the latest stock trends using a sleek and responsive interface.

---

## 🚀 Overview

**PractoTrade's Frontend** is built with **Next.js** and offers a polished, production-ready user experience for interacting with the sentiment-driven stock price prediction system. It serves as the interface to display the predictions, historical stock data, and sentiment analytics in an intuitive and user-friendly way.

This frontend integrates seamlessly with the backend to present:
- **Predicted next-day closing prices** of both International and Indian blue-chip stocks.
- **Sentiment scores** derived from real-time news and social media.
- **Interactive daily community polls** to collect market sentiment.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (React-based framework)
- **UI Framework**: ShadCN (Beautiful, production-ready UI components)
- **API Integration**: Fetching data from the backend API with the help of Axios to display stock predictions and sentiment analysis
- **State Management**: React-query for handling application state
- **Styling**: TailwindCSS for responsive and customizable UI components

---

## 🔁 Workflow

### 1. **Data Fetching and Display**
- The frontend interacts with the backend API to fetch:
  - **Predicted stock prices**: Displayed alongside sentiment scores for each stock.
  - **Historical data**: Including OHLC (Open, High, Low, Close) values for the past 7 days.
  - **Sentiment analysis**: Both news and Reddit sentiment scores for each stock.

### 2. **User Interaction**
- **Community Polling**: Users can vote on the daily sentiment for each company.
- **Stock Trend Display**: Interactive charts to visualize historical data, predictions, and sentiment trends.

### 3. **Responsive UI**
- The frontend is designed to be mobile-friendly, allowing users to check stock predictions on any device.

---

## 📊 Core Pages & Components

### **1. Home Page**:
- Displays a list of companies with their predicted next-day closing price.
- Shows sentiment scores derived from recent news and Reddit posts.

### **2. Company Details Page**:
- Shows detailed charts of the company's past 7 days' OHLC data.
- Displays sentiment breakdown and prediction for the next day's closing price.
- Allows users to vote on the company's sentiment through a daily poll.

### **3. News Page**:
- Users can read news and articles, (powered by google news) to get more in-depth information foe each stocks
- All news are provided in a card format so that users can click on them and get redirected to the individual news pages.

---

## 🧑‍💻 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RaunakDiesFromCode/PractoTrade-app.git
cd PractoTrade
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the frontend in development mode.

---

## 🔗 API Integration

The frontend communicates with the backend API to fetch the necessary data. To interact with the backend, make sure the following API endpoints are available:

- **GET `/api/stocks/{company_id}/predictions/`**: Fetch predicted next-day stock closing prices and sentiment scores.
- **POST `/api/stocks/{company_id}/vote/`**: Submit daily sentiment vote from the user for a specific company.

---

## 📦 Build and Deploy

To build and deploy the app to production:

### 1. Build the Project

```bash
npm run build
```

### 2. Start the Production Server

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## ✨ Features

- 🔁 **Real-Time Sentiment and Prediction Display**: See up-to-date stock predictions and sentiment.
- 📊 **Interactive Charts**: View historical stock data and predictions in a dynamic, user-friendly chart.
- 🗳️ **Community Polling System**: Cast votes on daily sentiment for each company.
- 📈 **Stock Trend Tracking**: Monitor trends for selected companies over time.
- 📱 **Mobile-Friendly UI**: Improve for mobile with a Progressive Web App (PWA) approach.

---

## 🚣 Future Scope

- 📊 **Real-Time Data Visualization**: Enhance with live data streaming of stock prices and sentiment analysis.
- 🧠 **Enhanced User Analytics**: Show how user voting patterns influence prediction results.
- 🛠️ **Improved Polling UI**: Better design for interacting with the polling system.

---

## 📄 License

This project is open-source under the **MIT License**.

---

## 🔗 Contributing

PRs, Issues, and Feature Requests are welcome!\
Just fork the repo, branch out, and submit a pull request 🙌

---

> 💡 *Made with ❤️ for innovation at Hackathons — PractoTrade is not financial advice*
