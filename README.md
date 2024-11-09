
# Lead Enrichment Preview Tool

This project is a simple full-stack application that allows users to log in with Google, input basic information about a business lead (such as company name and website URL), and retrieve enriched data for the lead using Clearbit's Company API. The project utilizes Firebase for authentication, React for the frontend, and Flask for the backend API.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

---

## Features
- **Google Authentication**: Users can log in with their Google accounts via Firebase Authentication.
- **Lead Capture Form**: Allows users to input company details, such as name and website URL.
- **Data Enrichment**: Retrieves enriched data for the lead using Clearbit's Company API.
- **Data Display**: Shows enriched data in a user-friendly format.
- **Error Handling**: Handles errors like invalid inputs or failed API calls.
- **Environment Security**: Sensitive data is stored in environment variables.

---

## Project Structure
```
lead-enrichment-tool/
├── backend/                      # Flask backend API
│   ├── app.py                    # Main API file with endpoint setup
│   ├── requirements.txt          # Backend dependencies
│   └── .env                      # Environment variables for API keys
├── frontend/                     # React frontend app
│   ├── public/                   # Static files
│   ├── src/                      # Source code for React app
│   │   ├── components/           # React components
│   │   │   ├── AuthButton.js     # Google Sign-In button
│   │   │   ├── LeadForm.js       # Form for lead details
│   │   │   └── LeadCard.js       # Display enriched data
│   │   ├── App.js                # Main app component
│   │   ├── firebase.js           # Firebase configuration and authentication
│   │   ├── api.js                # Axios setup for API calls
│   │   └── index.js              # Main entry point for React
│   ├── .env                      # Environment variables for Firebase
│   ├── package.json              # Frontend dependencies
└── README.md                     # Project documentation
```

---

## Frontend Setup

The frontend is built with React and handles user authentication, input form, and data display.

### Prerequisites
- Node.js and npm installed

### Steps

1. **Navigate to the frontend folder**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the `frontend` folder and add Firebase configuration:
   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. **Configure Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/), create a new project, and enable Google Sign-In under Authentication.

5. **Run the Frontend**:
   ```bash
   npm start
   ```

6. **Frontend Components**:
   - `AuthButton.js`: Handles Google login/logout.
   - `LeadForm.js`: Form for inputting company name and website URL.
   - `LeadCard.js`: Displays enriched lead data.
   - `api.js`: Configures Axios to communicate with the backend.

---

## Backend Setup

The backend is a Python Flask application that acts as a proxy for the Clearbit API, keeping API keys secure.

### Prerequisites
- Python 3 installed

### Steps

1. **Navigate to the backend folder**:
   ```bash
   cd backend
   ```

2. **Create a Virtual Environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment Variables**: Create a `.env` file in the `backend` folder and add your Clearbit API key:
   ```plaintext
   CLEARBIT_API_KEY=your_clearbit_api_key
   ```

5. **Run the Backend**:
   ```bash
   flask run
   ```
   - The backend will run on `http://127.0.0.1:5000`.

6. **Backend Endpoints**:
   - **`/api/enrich`**: Accepts `POST` requests with `company_name` and `website` as JSON payload. It retrieves data from the Clearbit API and returns it as JSON.

---

## Environment Variables

- **Frontend (`frontend/.env`)**:
  ```plaintext
  REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
  REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
  ```

- **Backend (`backend/.env`)**:
  ```plaintext
  CLEARBIT_API_KEY=your_clearbit_api_key
  ```

Replace `your_firebase_api_key`, `your_project.firebaseapp.com`, `your_firebase_project_id`, and `your_clearbit_api_key` with the actual values from Firebase and Clearbit.

---

## Usage

1. **Login with Google**: Click "Login with Google" to authenticate using Firebase.
2. **Enter Lead Data**: Input the company name and website URL in the form.
3. **Enrich Lead**: Click "Enrich Lead" to submit the form, which triggers an API call to the backend.
4. **View Enriched Data**: The enriched data will display in a card format if the API call is successful.
5. **Logout**: Click "Logout" to end the session.

---

## Error Handling

- **Invalid Input**: If fields are empty, the app will prompt the user to fill them.
- **API Failure**: Displays a console error if the backend fails to fetch data from Clearbit.

---

## Dependencies

### Frontend
- `firebase`: For Google Authentication
- `axios`: For making HTTP requests to the backend
- `react`: Core library for building user interfaces

### Backend
- `Flask`: Framework for creating the backend API
- `requests`: Library for making HTTP requests to the Clearbit API
- `python-dotenv`: To load environment variables from a `.env` file

---

## License

This project is open-source and available for personal and educational use.

