let teamMembers = ["John", "Emily", "Mike", "Sarah"];
for (let i = 0; i < teamMembers.length; i++) {
  console.log(teamMembers[i]);
}

teamMembers.shift();
console.log(teamMembers);

teamMembers.pop();
console.log(teamMembers);

teamMembers.unshift("Alex");
console.log(teamMembers);

teamMembers.push("Linda");
console.log(teamMembers);

const newArray = teamMembers.slice(2);
console.log(newArray);

console.log(teamMembers.indexOf("Mike"));
console.log(teamMembers.indexOf("Jake"));

let mikeIndex = teamMembers.indexOf("Mike");
if (mikeIndex !== -1) {
  teamMembers.splice(mikeIndex, 1, "Carol", "Bruce");
}
console.log(teamMembers);

let includeBob = teamMembers.concat("Bob");
console.log(includeBob);

let copyList = teamMembers.slice();
console.log(copyList);

const newMembers = ["Tina", "Dean"];
const newMembersList = newMembers.concat(teamMembers);
console.log(newMembers);
console.log(newMembersList);

let findingJohns = [];
for (let i = 0; i < teamMembers.length; i++) {
  if (teamMembers[i] === "John") {
    findingJohns.push(i);
  }
}
console.log(findingJohns);

let upperCaseTeam = teamMembers.map((member) => member.toUpperCase());
console.log(upperCaseTeam);

let sort = teamMembers.sort();
console.log(sort);

let reverse = teamMembers.reverse();
console.log(reverse);

let includesJohn = teamMembers.includes("John");
console.log(includesJohn);

let moreThanThree = teamMembers.every((member) => member.length > 3);
console.log(moreThanThree);
