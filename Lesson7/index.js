const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs/promises");

const PORT = 3000;

const sendFile = async (filename, response, statusCode) => {
    // формируем путь к файлу
    try {
        const fullPath = path.join(__dirname, "public", `${filename}`);
        const page = await fs.readFile(fullPath, "utf-8"); // Читает файл
        response.statusCode = statusCode;
        // возвращаем запрос пользователю
        response.end(page);
    }
    catch (err) {
        console.log(err.message);
    }
}

const server = http.createServer(async (request, response) => {
    
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    
    if (request.url === "/") {
        // Главная страница
        await sendFile("index.html", response, 200);
    } else if (request.url === "/rules") {
        await sendFile("rules.html", response, 200);
    } else if (request.url === "/style") {
        response.setHeader("Content-Type", "text/css; charset=utf-8");
        await sendFile("style.css", response, 200);
    }
    else {
        await sendFile("404.html", response, 404);
    }

});

server.listen(PORT);
console.log(`Сервер был запущен по адресу http://localhost:${PORT}`);