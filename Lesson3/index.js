// git config --global user.email "test@gmail.com"
// git config --global user.name "TestName"
// 1. git init
// 2. git add .
// 3. git commit -m "init"
// 4. git push


// Создаем массив
const files = ["cat.jpg", "dog.png", "Virus.exe", "document.pdf"];
// Чтобы в файл загрузить новые данные используем метод push()
// push() - добавляет новый элемент в конец массива
//files.push("music.mp3");


//console.log(files.length);

// Циклы

// 1. Цикл while
// let fuel = 100;  // топливо

// while (fuel > 0) 
// {
//     console.log("Едем " + "Топливо осталось: " + fuel);
//     fuel -= 10; // fuel = fuel - 10
// }

// console.log("Приехали");

// 2. Цикл for

// for (СТАРТ; ФИНИШ; ШАГ)
// Это тоже самое i = i + 1, что и i++

// УСТАРЕЛ
// for (let i = 0; i <= files.length - 1; i++){
//     console.log(files[i]);
// }

// Вот этот перебор СОВРЕМЕННЫЙ
// ключевое слово "of" придумали исключительно с массивами
// for (const Объект of Массив)
// const Объект - он константный, потому что мы его не будем изменять
// for (const file of files) {
//     console.log(file);
// }

// ДВА ВИДА ПРЕРЫВАНИЯ:
// 1) break - досрочный
// 2) пропускаем элемент нашего массива

for (const file of files) {
    if (file === "cat.jpg") {
        console.log("Пропускаем данную картинку");
        continue; // это значит, что мы пропускаем нашу итерацию (не идем дальше)
    }

    if (file === "Virus.exe") {
        console.log("АЛАРМ! Вирус найден!");
        break;  // сразу выходим с цикла
    }

    console.log("Файл проверен " + file);
}

