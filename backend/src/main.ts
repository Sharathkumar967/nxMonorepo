import express, { Request, Response } from 'express';
import cors from 'cors';
import { calculateGrades } from '@nx-monorepo/grading';

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/students', (req: Request, res: Response) => {
  const students = [
    { student_id: 1, student_name: 'Gowri Manohari', percentage_score: 85 },
    { student_id: 2, student_name: 'Sharath kumar', percentage_score: 78 },
    { student_id: 3, student_name: 'Rishit Sinha', percentage_score: 92 },
  ];

  const studentsWithGrades = calculateGrades(students);

  res.json(studentsWithGrades);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
