const vote = {};

function checkVoter(name: string) {
  if (vote[name]) {
    console.log('kick them out!');
  } else {
    vote[name] = true;
    console.log('let them vote!');
  }
}

checkVoter('tom');
checkVoter('mike');
checkVoter('mike');
