document.writeln(Math.floor(Math.random() * 6) + 1);

function rand(maxNum) {
  document.writeln(Math.floor(Math.random() * maxNum) + 1);
}

rand(9);

function rand(maxNum) {
  var dice = Math.floor(Math.random() * maxNum) + 1;
  document.writeln(dice);
}

rand(6);
