const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs/promises");
const PORT = 3000;

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        // Главная страница
    }
});