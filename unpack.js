var optirx = require('optirx');
var udp = require('dgram');


var optitrackConn = udp.createSocket({type: 'udp4', reuseAddr: true});
optitrackConn.on('listening', function () {
    var address = optitrackConn.address();
    console.log('\noptitrackConn listening on ' + address.address + ":" + address.port);
    //optitrackConn.setBroadcast(true);
    optitrackConn.setMulticastTTL(128); 
    optitrackConn.addMembership('239.255.42.99', '192.168.1.2');
});

optitrackConn.bind({
	address: '192.168.1.2',
	port: 1511
});

optitrackConn.on('error', function(error) {
	console.log("error");
	console.log("Error: " + error);
	optitrackConn.close()
});

optitrackConn.on('close', function(){
	console.log('optitrackConn server closed.');
});


optitrackConn.on('message', function(message, info){
	//console.log(info);
	unpackedData = optirx.unpack(message);

});