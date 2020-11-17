let connection;

const setupInput = function(conn) {
  connection = conn;
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
    connection.write('Move: up');
  };
  if (data === '\u0073') {
    connection.write('Move: down');
  };
  if (data === '\u0064') {
    connection.write('Move: right');
  };
  if (data === '\u0061') {
    connection.write('Move: left');
  };
};

module.exports = { setupInput };