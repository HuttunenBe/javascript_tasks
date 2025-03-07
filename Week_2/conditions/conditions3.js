
const getGrade = (score) => {
    if (score >= 90){ 
        return 'Grade A!';
     } else if (score >= 80 && score <= 89){
        return 'Grade B';
     } else {
        return 'Grade C';
    }
};
     
console.log (getGrade (70));
console.log (getGrade (90));
