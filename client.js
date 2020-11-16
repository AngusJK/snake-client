const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: AJK \n');
    //conn.write('Move: up');
    //setTimeout(() => { conn.write('Move: right'); }, 500 );
    //setTimeout(() => { conn.write('Move: up'); }, 1000 );
    //setTimeout(() => { conn.write('Move: right'); }, 1500 );
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {
  connect
}