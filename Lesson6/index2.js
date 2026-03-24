const http = require("http");
const PORT = 3000;


// Метод createServer() возвращает объект http.Server.
const server = http.createServer( async (request, response) => {
    response.setHeader("Content-Type", "text/plain");

    if (request.url === "/") {
        response.statusCode = 200;
        response.write("Главная страница сайта");
        response.end();
    } else if (request.url === '/about') {
        response.statusCode = 200;
        response.write("Это стартовая страница нашего файлообменника");
        response.end();
    } else if (request.url === "/stats") { 
        const data = await fetch("https://gusic.xyz/stats");
        const jsonData = await data.json();

        response.setHeader("Content-Type", "application/json; charset=utf-8");
        response.statusCode = 200;
        response.write(JSON.stringify(jsonData));
        response.end();
    } 
    else {
        response.statusCode = 404;
        response.write("Такой страницы не существует!");
        response.end();
    }
});


// Но чтобы сервер мог прослушивать и обрабатывать входящие подключения, у объекта сервера необходимо вызвать метод listen().
// Данный метод может принимать различный набор параметров. 
// Но обычно в качестве первого параметра передается номер порта, по которому запускается сервер.
server.listen(PORT, () => console.log("Сервер был успешно запущен"));
