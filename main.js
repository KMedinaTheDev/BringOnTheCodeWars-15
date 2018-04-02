

function goodVsEvil(good, evil){
  let goodArmy = good.split(' ');
  let evilArmy = evil.split(' ');
  let powerGood = goodArmy[0]*1+goodArmy[1]*2+goodArmy[2]*3+goodArmy[3]*3+goodArmy[4]*4+goodArmy[5]*10;
  let powerEvil = evilArmy[0]*1+evilArmy[1]*2+evilArmy[2]*2+evilArmy[3]*2+evilArmy[4]*3+evilArmy[5]*5+evilArmy[6]*10;
  if(powerEvil>powerGood){
  	return 'Battle Result: Evil eradicates all trace of Good';
  } else if(powerEvil<powerGood){
  	return 'Battle Result: Good triumphs over Evil';
  } else {
  	return 'Battle Result: No victor on this battle field';
  }
}

// w/ pseudo:

function goodVsEvil(good, evil){
  // split the given parameter into an array of strings
  // each variable hold the string containing the count
  let goodArmy = good.split(' ');
  let evilArmy = evil.split(' ');
  //needs variable that hold the total worth of each side, starting at the array postion of 0
  // each race has an associated worth, multiply by the associated worth to hold the army's worth
  let powerGood = goodArmy[0]*1+goodArmy[1]*2+goodArmy[2]*3+goodArmy[3]*3+goodArmy[4]*4+goodArmy[5]*10;
  let powerEvil = evilArmy[0]*1+evilArmy[1]*2+evilArmy[2]*2+evilArmy[3]*2+evilArmy[4]*3+evilArmy[5]*5+evilArmy[6]*10;
  // check which army has the most worth and declare the winner, or a tie
  if(powerEvil>powerGood){
      // if evil wins
  	return 'Battle Result: Evil eradicates all trace of Good';
    // if good wins
  } else if(powerEvil<powerGood){
  	return 'Battle Result: Good triumphs over Evil';
    // if the worths are equal
  } else {
  	return 'Battle Result: No victor on this battle field';
  }
}
