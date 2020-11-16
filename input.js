const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // register handleUserInput here
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === '\u0077') {
    console.log("up");
  }
  if (data === '\u0073') {
    console.log("down");
  }
  if (data === '\u0064') {
    console.log("right");
  }
  if (data === '\u0061') {
    console.log("left");
  }
};

module.exports = { setupInput };