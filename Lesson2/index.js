const fileSize = 5001;
const isPremium = true;
const a = 0.1;
const b = 0.2;

let status = "Загружаем файл";


// isAdmin === true (isAdmin), isAdmin === false (!isAdmin)

if (fileSize === 0)
{
    console.log("Файл пуст");
} else if (fileSize > 5000 && (isPremium && fileSize > 40000))
{
    console.log("Слишком тяжелый");
} else
{
    console.log(a + b === 0.3);
    console.log("Загрука..."); 
    status = "Файл был загружен"; 
}


// ДЗ создаем переменные T
