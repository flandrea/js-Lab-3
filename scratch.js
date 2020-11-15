
const submissions = [
    {
        name: 'Jane',
        score: 95,
        date: new Date('2020-01-24'),
        passed: true,
    },
    {
        name: 'Joe',
        score: 77,
        date: new Date('2018-05-14'),
        passed: true,    
    },
    {
        name: 'Jack',
        score: 59,
        date: new Date('2019-07-05'),
        passed: false,    
    },
    {
        name: 'Jill',
        score: 88,
        date: new Date('2020-04-22'),
        passed: true,    
    },
];
function addSubmission (array, newName, newScore, newDate){
    let newPassed = '';
    if (newScore >= 60) {
        newPassed = true;
    }
    else {
        newPassed = false;
    }
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed,
    };
    array.push(newSubmission);
}
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}
function deleteSubmissionByName(array, name) {
    let index = array.findIndex(findName => findName === name);
    array.splice(index);
}
function editSubmission(array, index, score) {
    let newPassed = '';
    if (score >= 60) {
        newPassed = true;
    }
    else {
        newPassed = false;
    }
    array[index].score = score;
    array[index].passed = newPassed;
}
function findSubmissionsByName(array, name) {
    const found = array.find(x => x.name === name);
    return found;
}
// let foundByName = findSubmissionsByName(submissions,'Jack');
// console.log (foundByName);

function findLowestScore(array) {
    let min = 100;
    let lowestSubmissionObject = '';
    array.forEach(element => {
        if(element.score < min) {
            min = element.score;
            lowestSubmissionObject = element;
        }
    });
    // console.log(lowestSubmissionObject);
    return lowestSubmissionObject;
}
function findAverageScore(array) {
    let total = 0;
    let count = '';
    for (const element of array) {
        total = total + element.score;
        count++;
    }
    let averageScore = total / count;
    // console.log(averageScore);
    return averageScore;
}
function filterPassing(array) {
    const filterPassing = array.filter(x => x.score > 60);
    // console.log(filterPassing);
    return filterPassing;
}
function filter90AndAbove(array) {
    const filterAbove90 = array.filter(x => x.score > 90);
    // console.log(filterAbove90);
    return filterAbove90;
}


// console.log(submissions);
// addSubmission(submissions, 'Andrea', 55, new Date('2020-11-12'));
// console.log(submissions);
// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);
// deleteSubmissionByName(submissions, 'Jill');
// console.log(submissions);
// editSubmission(submissions, 1, 30);
// console.log(submissions);
// findSubmissionsByName(submissions,'Jack');
// findLowestScore(submissions);
// findAverageScore(submissions);
// filterPassing(submissions);
// filter90AndAbove(submissions);