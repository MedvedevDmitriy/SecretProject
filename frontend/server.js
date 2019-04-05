const WebSocket = require('ws');
const axios = require('axios');

axios.get('https://localhost:3000')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });

const server = new WebSocket.Server({port: 3000});

server.on('connection', ws => {
    ws.send(JSON.stringify({
        text: 'Добро Пожаловать',
        author: 'server',
        datetime: new Date().getTime(),
    }));

    ws.on('message', message => {
        if (message.includes('exit')) {
            ws.close();
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    const clientMessage = JSON.parse(message);
                    const serverMessage = {
                        text: `${clientMessage.author} покинул нас...`,
                        author: 'server',
                        datetime: new Date().getTime(),
                    };
                    client.send(JSON.stringify(serverMessage));
                }
            });
        } else {
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            })
        }
    })
});
