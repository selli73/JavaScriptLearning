// ДЗ. Конвертер валют


// Задание 1. Конвертер валют
const usdToRub = (usd) => {
    return usd * 90;
};

console.log(usdToRub(1000));

const euroToRub = (euro) => {
    return euro * 100;
};

console.log(euroToRub(800));

// Задание 2. Фильтр 'для взрослых' (с массивом)

const ages = [10, 18, 55, 3, 20];

const chechAccess = (age) => {
    if (age > 17) {
        return "Доступ разрешен";
    }
    return "Доступ запрещен";
}

for (age of ages) {
    console.log(chechAccess(age));
}
