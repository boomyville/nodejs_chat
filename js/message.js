const http = require('http');
const fs = require('fs');

//Change port to something that is unused
const port = 12345;

http.createServer(function(req, res) {
    console.log(`Request received: ${req.method} ${req.url}`);
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET',
      'Access-Control-Max-Age': 2592000,
      'Content-type': 'text/html'
    };
  
    if (req.method === 'GET') {
      fs.readFile('../data/chat.log', function(err, data) {
        if (err) {
          console.error('Error reading file:', err);
          res.writeHead(500, headers);
          res.end('Error reading file');
        } else {
          const html = `
            <html>
              <body>
                <h1>Chat Log</h1>
                <pre>${data.toString()}</pre>
              </body>
            </html>
          `;
          res.writeHead(200, headers);
          res.end(html);
        }
      });
    } else if (req.method === 'POST') {
      if (req.url === '/post') {
        let data = '';
        req.on('data', (chunk) => {
          data += chunk;
        });
        req.on('end', () => {
          console.log('Received POST data:', data);
          fs.appendFile('../data/chat.log', data, function(err) {
            if (err) {
              console.error('Error writing file:', err);
              res.writeHead(500, headers);
              res.end('Error writing file');
            } else {
              console.log('Updated!');
              res.writeHead(200, headers);
              res.end('Data received successfully');
            }
          });
        });
      } else {
        res.writeHead(404, headers);
        res.end('Not found');
      }
    } else {
      res.writeHead(200, headers);
      res.end('Only accepting GET or POST');
    }
  }).listen(port, function(err) {
    if (err) {
      console.error('Error starting server:', err);
    } else {
      console.log('Server listening on port ' + port);
    }
  });
