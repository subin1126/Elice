import React from 'react';

const Student = ({ student }) => {
  const score = student.score >= 80 ? 'PASS' : 'FAIL';

  return (
    <div>
      {student.name} 학생은 {student.subject} 수업을 수강중입니다.
      <br />
      현재 점수는 {student.score}점으로 {score}입니다.
    </div>
  );
};

export default Student;
