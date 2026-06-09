function outed(meet, boss){
  let members = 0;
  let value = 0;
  for (const key in meet){
    members += 1;
    key === boss ? value += meet[key] * 2 : value += meet[key];
  }
  const average = value / members;
  return average <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

//OR

/*
function outed(meet, boss){
  let totalScore = 0;

  for (const [name, score] of Object.entries(meet)) {
    total += name === boss ? score * 2 : score;
  }

  return totalScore / Object.keys(meet).length <= 5
    ? 'Get Out Now!'
    : 'Nice Work Champ!';
}
*/
