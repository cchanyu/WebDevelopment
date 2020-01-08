// Student score, total possible score.
// 15/20 -> you got a C;
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (score, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers only');
    }
        let percent = (score / totalScore) * 100;
        let letterGrade = '';
    
        if (percent >= 90) {
            letterGrade = 'A';
        } else if (percent >= 80) {
            letterGrade = 'B';
        } else if (percent >= 70) {
            letterGrade = 'C';
        } else if (percent >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'F';
        }
    
        return `You got a ${letterGrade} (${percent}%)!`;
}

try {
    let result = gradeCalc(9, 20);
    console.log(result);
} catch (e) {
    console.log(e.message);
}