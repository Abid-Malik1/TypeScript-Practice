function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
var inputScore = prompt('Enter the student\'s score:');
var studentScore = parseFloat(inputScore || '0');
if (!isNaN(studentScore)) {
    var studentGrade = calculateGrade(studentScore);
    alert("Student scored ".concat(studentScore, ", which is a grade: ").concat(studentGrade));
}
else {
    alert('Invalid input. Please enter a valid numeric score.');
}
