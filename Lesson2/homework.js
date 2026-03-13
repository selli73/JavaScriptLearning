let totalPrice = 5000; // сумма покупки
let accountBalance = 4500;  // сколько денег на счету
let vip = true;

if (totalPrice === 0)
{
    console.log("Сумма покупки не может быть равна нулю");
} else if (vip === true) {
    totalPrice = totalPrice - (totalPrice * 10) / 100;
    console.log(`Ваша сумма покупки изменилась из-за того что вы vip клиент и сумму составляет: ${totalPrice}`);
} else {
    console.log(`Ваша сумма покупки ${totalPrice}`);
}
if (accountBalance >= totalPrice)
{
    console.log("Вы успешно оплатили покупку");
}
else {
    console.log("Недостаточно средств");
}