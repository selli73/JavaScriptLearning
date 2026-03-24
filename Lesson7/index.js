const path = require("node:path");
const http = require("node:http");
const fs = require("node:fs/promises");

const PORT = 3000;

const sendFile = async (filename,  responce, statusCode) => {
    // Чтобы вызвать index.html и вернуть пользователю мы 
    const fullPath = path.join(__dirname, "public", `${filename}.html`); // грубо говоря мы через запятые пишем "/"  и что хранится после этого "/",
    // а функция join делает за нас и ставит путь как к нему обратиться.
    const page = await fs.readFile(fullPath, "utf-8");  // читает файл
    responce.statusCode = statusCode;
    // Возвращаем запрос пользователю
    responce.end(page);
}

// __dirname - глобальная переменная, в которой хранится директория испольняющего файла, то есть нашего index.js
const server = http.createServer(async (request, response) => {
    // есть 3 вида header: текстовый header, json header и html header.
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    let filePath;

    if (request.url === "/") {
        // Главная страница
        await sendFile("index", response, 200);
    } else if (request.url === "/about") {
        await sendFile("about", response, 200);
    } else {
        await sendFile("404", response, 404);
    }
});

server.listen(PORT);

console.log(`Сервер был запущен по адресу http://localhost:${PORT}`);