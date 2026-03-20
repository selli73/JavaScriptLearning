// task 1. Функция ожидания

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

console.log("Начало загрузки");
await sleep(1000);
console.log("Конец загрузки");

// task 2. 

const cookDinner = async () => {
    
    try {
        const isGasOn = false;
        if (isGasOn === false) {
            throw new Error("Газа нету, приготовить ужин не получиться!");
        }    
        console.log("Включаю плиту...");
        await sleep(2000);
        console.log("Режу овощи...");
        await sleep(3000);
        console.log("Варю овощи...");
        await sleep(4000);
        console.log("Ужин готов...");
    }
    catch (error) {
        console.log("Ошибка: " + error.message);
    }
    
};

cookDinner();

