# Learning Management System (LMS) — Frontend

A simplified Learning Management System (LMS) developed as part of the **DataPollex Ltd. Industrial Training Recruitment Process**.

The application provides a student interface for browsing courses and watching lectures, along with an admin dashboard for managing courses and lectures.

## Live Demo

- **Frontend:** [Live Demo](https://learning-management-systems-kohl.vercel.app/)
- **Backend:** [Backend API](https://learning-management-system-server-ten.vercel.app/)

## Features

### Student Panel
- Browse all available courses.
- View course details, including title, description, price, and thumbnail.
- View lectures associated with a selected course.
- Open individual lectures and watch videos through embedded video URLs.
- Responsive interface for desktop and mobile devices.

### Admin Dashboard
- Secure admin login.
- View dashboard statistics, including total courses and lectures.
- Create, read, update, and delete courses.
- Add lectures to selected courses.
- View lectures associated with their respective courses.
- Edit and delete existing lectures.
- Protected management routes for authenticated admins.

### User Interface
- Responsive and consistent design.
- Loading, empty, and error states.
- Dynamic data fetching from the backend API.
- Form validation and user feedback.

## Technology Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** HeroUI
- **API Integration:** Fetch API
- **Authentication:** Better Auth
- **Notifications:** React Toastify

## Installation and Setup

### Prerequisites

- Node.js (LTS recommended)
- npm
- Backend server running

### 1. Clone the Repository

```bash
git clone https://github.com/Eva-004/learning-management-system
```

### 2. Navigate to the Project Directory

```bash
cd learning-management-system
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

Replace the URL with your deployed backend URL when using the production environment.

### 5. Start the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```text
src/
├── app/
│   ├── admin/
│   ├── courses/
│   ├── dashboard/
│   ├── login/
│   └── ...
├── components/
│   ├── dashboard/
│   ├── homePage/
│   └── shared/
├── lib/
│   ├── api.ts
│   ├── auth-client.ts
│   └── ...
└── ...
```

## API Integration

The frontend communicates with the backend through RESTful APIs.

All course and lecture information is dynamically retrieved from the database through backend API endpoints.

Admin operations such as creating, updating, and deleting courses and lectures are performed through API requests.

## Deployment

The frontend  deployed using Vercel.

Configure the production environment variables in the Vercel project settings before deployment.

## Project Information

**Project:** Learning Management System (LMS)  
**Organization:** DataPollex Ltd.  
**Project Type:** Industrial Training Recruitment Task  
**Development:** Full-Stack Web Application
