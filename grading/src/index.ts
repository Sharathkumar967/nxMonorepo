// export * from './lib/grading';

export function calculateGrades(
  students: {
    student_id: number;
    student_name: string;
    percentage_score: number;
  }[]
): {
  student_id: number;
  student_name: string;
  percentage_score: number;
  grade: string;
}[] {
  return students.map((student) => ({
    ...student,
    grade: getGrade(student.percentage_score),
  }));
}

function getGrade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}


