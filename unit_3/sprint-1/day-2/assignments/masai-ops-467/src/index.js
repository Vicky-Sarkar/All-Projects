function studentData(firstName, lastName, age, marksArray, ...hobbies) {

  let obj = {}
  obj.fullName = `${firstName} ${lastName}`
  obj.age = age;
  obj.hobbies = hobbies;
  obj.getInfo = function () {
    return `${firstName} ${lastName}'s age is ${age}.`
  }

  obj.getResult = function () {
    let markTotal = 0;
    for (let mark of marksArray) {
      markTotal += mark;
    }
    //console.log(markTotal)
    let numberOfItem = marksArray.length;
    let avg = markTotal / numberOfItem

    return (avg < 50) ? "Result: FAIL" : "Result: PASS"
  }
  return obj

}










//let data = studentData('Vivek', 'Agarwal', 38, [50, 60, 70], 'Singing', 'Coding', 'Meditating');

export {
  studentData
}