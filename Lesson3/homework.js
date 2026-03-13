// Домашняя работа

const pinCodes = ["1111", "5678", "1234", "9999"];
const myPin = "1234";

for (pinCode of pinCodes) {
    if (pinCode === myPin) {
        console.log(`Пин-код найден! Ваш пин-код = ${pinCode}`);
        break;
    }
    console.log("Неверный пин-код");
}