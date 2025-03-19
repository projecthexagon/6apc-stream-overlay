const socket = new ReconnectingWebSocket('ws://' + location.host + '/websocket/v2');

socket.onopen = () => { console.log('Successfully Connected'); };
socket.onclose = event => { console.log('Socket Closed Connection: ', event); socket.send('Client Closed!'); };
socket.onerror = error => { console.log('Socket Error: ', error); };

let mappool;
(async () => {
	let stage = await $.getJSON('../_data/beatmaps.json');
	mappool = stage.beatmaps;
})();


const cache = {
    
}

socket.onmessage = async event => {
	let data = JSON.parse(event.data);
}
