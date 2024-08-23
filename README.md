# Node.js chat
A very simple chat interface using node.js

# What does it do

A very simple chat program

Users can input a name and a message

This information is stored in HTML form in chat.log

The index.html file will grab the chat.log file and display it as HTML

# To do

Add limits to inputs (unlimited message length is dangerous!)

Save only the last 100 messages (when a user submits a message, delete the 101th message)

# Instructions
## Make sure node.js is installed
![image](https://github.com/user-attachments/assets/54204f75-24b5-425b-b3a1-c1014c386f50)

## Modify main.js and message.js

The main.js is attached to the index.html file and handles all the client side code

If the user presses submit, it submit  data to our node.js server (write to chat.log file)

Every second, it will use a GET request to grab data from our node.js server (read from chat.log file)

## Configuration

Change the port in message.js

Change the URL in main.js (The url should be to the node server)

## Installation

Move all files to a www folder

Make sure node is running on the same system as the web server (technically not necessary if the node server has port forwarding setup)

## Running the server

Change directory to /js/

Run node message.js

Open your index.html file 

# Some considerations

CORS policy is * (should be just the domain of the server but * is foolproof)

Make sure your port is usable!

# Troubleshooting

## CORS error

![image](https://github.com/user-attachments/assets/b9a86828-763b-4fcd-a1ee-3afbe2ebda7e)

This means node.js is not running (most likely)

## CORS error / HTTPS 

![image](https://github.com/user-attachments/assets/6d3623a2-ebad-4d10-8491-ac5a239d1252)

You are loading with HTTPS in URL but this project only supports HTTP so change your URL to HTTP only

If you want to implement https then modify main.js to use https instead of http

You will also need to add your certificates

  const https = require('https');
  const options = {
    key: fs.readFileSync('/path/to/cert.key'),
    cert: fs.readFileSync('/path/to/cert.crt')
  };

## Permissions

Another common issue: index.html does not have 644 permissions (chmod to fix this)
