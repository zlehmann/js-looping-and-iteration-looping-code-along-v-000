// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log('Welcome ' + names[i] + '!' + ' You are employee #' + (i + 1)+ '.');
  }
  return names;
}

function tailsNeverFails() {
  istails = Math.random() >= 0.5;
  count = 0;

  while (istails) {
    count ++;
  }
  console.log('You got ' + count + ' tails in a row!');
  return count;
}
