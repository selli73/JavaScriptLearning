const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { error } = require("node:console");

const PORT = 3000;

const MIME_TYPES = {
    ".html": "text/html", // ключ - это расширение, значение ключа - это тип
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".json": "application/json",
    ".mp4": "video/mp4"
};

const server = http.createServer((request, response) => {
    console.log(`Запрос ${request.url}`);

    let url;

    if (request.url === "/") {
        url = "index.html";
    } else {
        url = request.url;
    }

    // Формируем путь к файлу на диске.
    const filePath = path.join(__dirname, "public", url);

    // определяем расширение файла
    const extname = path.extname(filePath);
    console.log(`Расширение файла ${extname}`);

    // Формируем заголовок
    const contentType = MIME_TYPES[extname] || 'text/plain';
    response.setHeader("Content-Type", contentType);

    // Теперь создаем поток для чтения файлов
    const fileStream = fs.createReadStream(filePath);
    // теперь создаем трубу и отправляем пользователю
    fileStream.pipe(response);

    fileStream.on("error", (error) => {
        response.statusCode = 404;
        response.end();
    });
});

server.listen(PORT);
console.log(`Сервер был запущен на адресе http://localhost:${PORT}`);