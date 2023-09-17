function calculateGrade(score: number): string {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

const inputScore = prompt('Enter the student\'s score:');
const studentScore = parseFloat(inputScore || '0');

if (!isNaN(studentScore)) {
  const studentGrade = calculateGrade(studentScore);
  alert(`Student scored ${studentScore}, which is a grade: ${studentGrade}`);
} else {
  alert('Invalid input. Please enter a valid numeric score.');
}
