import express from 'express'
var files_routes = express.Router()

///////////////////////////////////

files_routes.get('/', (request, response) => {
  response.sendFile('index.html', { root: '../build' })
});

files_routes.get('/about', (request, response) => {
    response.sendFile('index2.html', { root: '../build' })
});

files_routes.get('/test', (request, response) => {
  response.sendFile('index3.html', { root: '../build' })
});

files_routes.get('/widget_pix.js', (request, response) => {
  response.sendFile('index.js', { root: '../my-widget/widget' })
});

files_routes.get('/widget_pix.css', (request, response) => {
  response.sendFile('index.css', { root: '../my-widget/widget' })
});

export default files_routes
