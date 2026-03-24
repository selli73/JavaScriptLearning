// Задание 1. Личная визитка

const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    if (request.url === "/") {
        response.statusCode = 200;
        response.write("Булат. Мои контакты bulat73");
        response.end();
    } else if (request.url === "/contact") {
        response.statusCode = 200;
        response.write("Мой email для свзи: aabulath@yandex.ru");
        response.end();
    } else if (request.url === "/api/info") {
        response.setHeader("Content-Type", "application/json");
        objectPC = {
            servenName : "MyPC",
            version : "1.0.0",
            status : "working"
        };
        console.log(objectPC);
        response.write(JSON.stringify(objectPC));  // JSON.stringify() - метод для преобразования объекта в строку
        response.end();
    }
    else {
        response.statusCode = 404;
        response.write("Страница не найдена");
        response.end();
    }
});

server.listen(PORT);
console.log("Сервер был успешно запущен");