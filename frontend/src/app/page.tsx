'use client'; // This line tells Next.js that this component should be treated as a Client Component

import { useEffect, useState } from 'react';

interface Student {
  student_id: number;
  student_name: string;
  percentage_score: number;
  grade: string;
}

const HomePage = () => {
  const [students, setStudents] = useState<Student[]>([]);

  // Function to fetch students
  const getStudents = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/students');
      const data: Student[] = await response.json();
      setStudents(data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Percentage Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.student_name}</td>
              <td>{student.percentage_score}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
