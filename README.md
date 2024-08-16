This monorepo contains a backend service built with Express and a frontend application built with Next.js. The backend exposes a single GET endpoint that returns student data. The frontend fetches this data and displays it in a table.

## Project Structure

- **`frontend`**: The Next.js frontend application.
- **`backend`**: The Express backend service.
- **`grading`**: A library to calculate and add grades to student data.

## Getting Started

Ensure you have the following installed:

- Node.js (v18 or later)
- npm or yarn
- NX CLI

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Sharathkumar967/nxMonorepo.git
   cd nx-monorepo
    2. Install Dependencies:
       Navigate to the root of the monorepo and install dependencies:
       bash
       Copy code
       npm install
    3. Run the Backend Service:
       Open a terminal and run:
       bash
       Copy code
       npx nx serve backend
       This starts the Express backend service at http://localhost:3001.
    4. Run the Frontend Application:
       Open another terminal and run:
       bash
       Copy code
       npx nx dev frontend
       This starts the Next.js frontend application at http://localhost:3000.

   API Endpoint
    • Endpoint: GET /api/students
    • Description: Returns an array of student objects with student_id, student_name, percentage_score, and grade.
   Frontend Usage
   The frontend fetches data from the backend and displays it in a table format. The data is fetched using the getStudents function and shown in the HomePage component.
   ```

  <!-- Library Usage -->
The grading library contains a function to calculate and add grades to student data. This function is used in the backend service to process data before returning it.
