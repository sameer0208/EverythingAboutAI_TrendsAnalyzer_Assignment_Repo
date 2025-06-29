📊 WeChat Mini Program Trend Analyzer

A modern, interactive analytics dashboard for tracking WeChat Mini Program trends, usage statistics, competitor insights, business metrics, and more.
Built with React, Node.js, and a customizable API backend.

✨ Features
✅ Authentication & Localization

Simulated WeChat Login (mock user data)

Multi-language support (English / Chinese)

Language toggle with react-i18next

Ready for region-specific compliance

✅ Mini Program Analytics

Usage statistics tracking

Feature adoption rates

Performance metrics

User flow analysis

✅ Market Intelligence

Category trend analysis

Competitor tracking

Feature comparison matrix

Success pattern identification

✅ Business Insights

User retention analysis

Monetization tracking

Growth hack detection

Market opportunity alerts

QR code campaign tracking

✅ Beautiful Frontend

Responsive, modern UI with animated stock-like background

Clean, professional styles

✅ API Mock Server

Modular Express routes serving sample data

Easily extendable to connect PostgreSQL (future)


📚 Why We Use Mock WeChat APIs
⚠️ Important Note
This project does not integrate real WeChat authentication or data APIs because:

WeChat services are restricted or officially banned in India under government regulations.

Using actual WeChat API credentials requires:

A verified Mainland China business entity

Developer approval by Tencent

An ICP license for production usage

Attempting to call these services from India will typically fail due to:

Network-level blocking

Legal compliance restrictions

Instead, this project uses simulated (“mock”) API responses to demonstrate:

Frontend integration patterns

Data visualization and analysis workflows

Localization and multi-language handling

If you are deploying this project in a country where WeChat APIs are allowed, you can adapt it to connect to the real services by:

Replacing the mock API endpoints (/api/...) with:

Official WeChat API endpoints

OAuth flows for user authentication

Handling sensitive tokens securely (never store them in the frontend).

Following Tencent’s WeChat Mini Program compliance guidelines.




🛠️ Tech Stack
Frontend: React, Axios, react-i18next

Backend: Node.js (Express)

Styling: CSS with responsive design and canvas animations

Database: (Planned) PostgreSQL integration


🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/sameer0208/EverythingAboutAI_TrendsAnalyzer_Assignment_Repo.git
cd EverythingAboutAI_TrendsAnalyzer_Assignment_Repo

2️⃣ Install Dependencies

Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3️⃣ Run the Backend Server
cd backend
npm start
Runs on http://localhost:5000

4️⃣ Run the Frontend Development Server
cd ../frontend
npm start
Runs on http://localhost:3000

🧩 API Endpoints
The Express server provides the following mock endpoints:

| Endpoint            | Description               |
| ------------------- | ------------------------- |
| `/api/usage`        | Usage statistics data     |
| `/api/trends`       | Market trends data        |
| `/api/competitors`  | Competitor analysis data  |
| `/api/alerts`       | Alerts & notifications    |
| `/api/userflow`     | User flow analysis        |
| `/api/comparison`   | Feature comparison matrix |
| `/api/success`      | Success patterns          |
| `/api/retention`    | User retention data       |
| `/api/monetization` | Monetization metrics      |
| `/api/growth`       | Growth hacks              |
| `/api/qr`           | QR campaign performance   |


🖥️ Project Structure

/frontend
  /src
    App.js          # Main React component
    App.css         # Styling
    i18n.js         # Localization config

/backend
  server.js         # Express server entry
  /routes
    api.js          # All API routes
  db.js             # (Optional) DB config for PostgreSQL

🌍 Localization
Default language: English (en)

Toggle to Chinese (cn) using the Switch Language button

All section titles and buttons are translatable

🎨 Styling & Animations
Clean, minimal UI for professional presentation

Canvas-based animated background simulating stock graphs

Smooth transitions and hover effects


🗄️ PostgreSQL Integration (Optional)
The project currently uses mock data.
To use PostgreSQL:

Create tables matching your data models

Configure db.js with your credentials

Replace mock data in api.js with actual queries

Example connection:
const { Pool } = require('pg');
const pool = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'analytics',
  password: 'password',
  port: 5432,
});


🧑‍💻 Future Improvements
OAuth integration with real WeChat authentication

Persistent storage in PostgreSQL

Charts and visualizations with Chart.js or D3

Role-based access control


📷 Screenshots

![image](https://github.com/user-attachments/assets/6b03e8b0-f04d-4cdf-9342-44d94304ec4b)

![image](https://github.com/user-attachments/assets/e01aa573-14cd-4fe7-a2ed-e37145cc0679)

![image](https://github.com/user-attachments/assets/b5753411-921e-4a11-909c-a42727ce123a)


📬 Contact
Author: Sayyed Sameer Basir

If you have questions or need help:

✉️ Email: sayyedsameerbasir0208@gmail.com

🌐 Website: https://sameer0208.github.io/Sameer-Personal-Portfolio/

LinkedIn: https://www.linkedin.com/in/sayyed-sameer-basir-6b3195215/





