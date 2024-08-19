'use client'; // This line tells Next.js that this component should be treated as a Client Component

import { useEffect, useState } from 'react';
import './global.css';

import { TStudent } from '../interfaces';

const Page = () => {
  const [students, setStudents] = useState<TStudent[]>([]);

  // Function to fetch students
  const getStudents = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/students');
      const data: TStudent[] = await response.json();
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

export default Page;
