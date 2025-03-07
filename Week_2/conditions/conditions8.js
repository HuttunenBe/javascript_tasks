const canVote= (age)=> {
    if (age <= 18)
    console.log ('Eligible to vote')
else console.log ('Not eligible to vote')
};

canVote(20)
canVote(11)