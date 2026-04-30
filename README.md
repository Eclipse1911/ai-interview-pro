# AI Interview Pro

Master your next interview with AI-driven simulations and feedback.

## Project Architecture

This is a full-stack application with a **React (Vite)** frontend and a **Node.js (Express)** backend.

- **Frontend**: Handles the UI, state management, and user interactions.
- **Backend**: Manages AI logic, API keys, and handles communication with Google's Gemini API.

## Setup Instructions

### 1. Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Create a `.env` file in the `server` folder:
   ```env
   GEMINI_API_KEY=your_actual_key_here
   PORT=5000
   ```
3. Install dependencies and start the server:
   ```bash
   npm install
   npm run dev
   ```

### 2. Frontend Setup

1. In the root directory, create/update the `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
2. Install dependencies and start the frontend:
   ```bash
   npm install
   npm run dev
   ```

## Key Features

- **Real-time AI Interviewer**: Dynamic question generation based on your role and level.
- **Support for Multiple Roles**: SDE, Frontend, Backend, Data Science, Product Management, and more.
- **Interview Types**: Technical, Behavioral, System Design, Case Studies, etc.
- **Deep Analysis**: Get instant feedback on your performance.
- **Premium UI**: Modern, responsive design with dark mode support.
