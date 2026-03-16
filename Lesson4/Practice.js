// В нашем облаке файлы хранятся в байтах. Каждый файл исчесляется в байтах. А уже в байты переводим в другую систему счисления.

// ПРИМЕР 1. Нам нужна функция, которая превращает байты в мегабайты.

const formatSize = (bytes) => {
    if (bytes < 1024) {
        return `${bytes} B`;
    } 

    // если все таки байтов больше чем 1024 или равно
    const megabytes = (bytes / 1024 / 1024).toFixed(2); // переводим в мегабайты

    return `${megabytes} MB`;
};

const filesSize = [500, 5000000, 500000];

for (const fileSize of filesSize) {
    console.log(formatSize(fileSize)); 
}



// ПРИМЕР 2. Конвертер валют

// const usdToRub = (usd) => {
//     return usd * 80;
// };

// или 

const usdToRub = (usd) => {
    const odd = (a, b) => a * b;
    
    if (usd > 300) {
        return odd(usd, 85);
    } else if (usd > 1000) {
        return odd(usd, 90);
    }
    
    // логика
    return odd(usd, 80);
};

console.log(usdToRub(1001));


// Проверить возвраст человека внутри функции,
// если наш возвраст больше 18, то вернуть строку,
// что человек совершеннолетний, иначе вернуть строку,
// что человек еще маленький

const chechAgeToPeople = (age) => {
    if (age > 17) {
        return "Вы совершеннолетний.";
    }
    return "Вы еще маленький";
}

console.log(chechAgeToPeople(18));