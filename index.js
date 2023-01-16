let name = {
  fristname: 'mahima',
  lastname: 'raj',
};

let name2 = {
  fristname: 'mahi',
  lastname: 'jar',
};

function printFullName(homeTown, state) {
  console.log(
    this.fristname + ' ' + this.lastname + ' ' + homeTown + ' ' + state
  );
}
//call
printFullName.call(name2, 'chittoor', 'AP');

//apply
printFullName.apply(name2, ['chittoor', 'AP']);
//bind
let printMyName = printFullName.apply(name2, 'chittoor', 'AP');
cosole.log(printMyName);
