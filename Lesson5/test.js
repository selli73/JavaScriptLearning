
// ИСТОЧНИК https://www.youtube.com/watch?v=C7TgmKZRNF4



// Задача: Разрабатываем frontend для маркетплейса ozon или wildberries. Нам нужно получить имя автора первого отзыва
// на первый размещенный товар этого продавца.
// Нам нужно последовательно выполнить несколько запросов к серверу зависящих друг от друга.

// параметры: url - ссылка, onSuccess - callback функция, которая будет вызвана, где-то внутри makeRequest

// Это callback hell - ад коллбеков
const makeRequest = (url, onSuccess) => {
    // выполняется запрос к серверу

}

const sellerId = 154;  // id продавца на площадке

makeRequest(`api/sellers/${sallerId}`, (seller) => { // это колбек функция, которая будет вызвана когда будет успешно ответит на запрос
    // на основе полученных данных о продвце
    // Надо получить данные о его первом размещенном товаре
    const firstProductId = seller.productIds[0];
    makeRequest(`api/products/${firstProductId}`, (product) => {
        const firstReviewId = product.reviewsIds[0];

        makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
            const authorName = review.author.name;
        });

    });

}
); // сервер вернет при успещном запросе объект с данными о продавце


// Чтобы избежать callback hell, в JavaScript существует промисы






/*
 Promise - специальный объект-надстройка для работы с асинхронным кодом. Асинхронные функции возвращают объект Promise в качестве результата
 Promise имеет 3 состояния:
    * pending - ожидание, исходное состояние
    * fulfilled - выполнено успешно, получаем результат
    * rejected - выполнено с ошибкой

 Promise может изменить свое состояние ровно раз из исходного pendiing в fulfilled или rejected. 
 */

 /*
    * Основные методы Promise:
        * then() - обрабатывает fulfilled состояние
        * catch() - обрабатывает rejected состояние
 */


// new Promise() - создание объекта, а сам Promise это класс. Круглые скобки это конструктор. В констуктор нужно передать функцию-испольнитель
// этой асинхронной операции. Задача этой функции выполнить задачу и перевести состояние промиса в состояние fulfilled или rejected
 const promise = new Promise((resolve, reject) =>  {
    console.log('Начало, состояние pending...');


    setTimeout(() => {
        if (Math.random > 0.5) {
            resolve("Ура, состояние resolved"); // эта функции меняют состояния объекта Promise
        } else{
            reject("Увы, состояние rejected"); // эта функции меняют состояния объекта Promise
        }
    }, 2000)
 });

 promise
    .then( (successData) => {console.log("Успех! Получены данные: " + successData);})  // в обеих функция мы получим доступ к каким-то данным в then эти данные назовем как successData
    .catch( (errorData) => {console.log("Ошибка. Получены данные: " + errorData);})  // в обеих функция мы получим доступ к каким-то данным в catch эти данные назовем как errorData
    .finally(() => { console.log("Код, выполняющийся в самом конце, независимо от результата");  });
    


// Перепишем callback hell на синтаксис Promise

const makeRequestPr = (url, onSuccess) => {
    return new Promise((resolve) => {
        resolve("Ура, состояние resolve");
    });
}

makeRequestPr(`/api/sellers/${sallerId}`)
    .then( (seller) => {
        const firstProductId = seller.productIds[0];

        return makeRequestPr(`api/products/${firstProductId}`);
    })
    .then((product) => {
        const firstReviewId = product.reviewsIds[0];

        return makeRequestPr(`api/reviews/${firstReviewId}`);
    })
    .then((review) => {
        const authorName = review.author.name;
    })
    .catch((error) => {
        console.log(error);
    });





// Для работы с асинхронными функциями, которые возвращают Promise есть альтернативный синтаксис
// с помощью ключевых слов async и await

const getSomething = async () => {
    return 'Привет';
}

getSomething().then((something) => {
    console.log(something);
});

// есть еще ключевое слово await, оно предназначено для того, чтобы заставить JavaScript код дождаться выполнение промиса
// а уже затем продолжить работу

const getSomething2 = async (something) => {
    return new Promise((resolve) => { 
        // функция исполнитель, у которой есть доступ к функции resolve, переводящее состояние promise из pending в resolve
        setTimeout(() => {
            resolve("Привет!");
        }, 3000);
    }
);
}

getSomething2()
    .then((something) => {
        console.log(something);
    });





// А теперь сделаем метод асинхронным

const makeRequestAsync = async (url, onSuccess) => {
    return new Promise((resolve) => {
        resolve("Ура, состояние resolve");
    });
}

try {
const sellerA = await makeRequestAsync(`api/sellors/${sellerId}`); 
const firstProductIdA = sellerA.productIds[0];

const product = await makeRequestAsync(`/api/products/${firstProductIdA}`);
const firstReviewId = product.reviewIds[0];

const review = await makeRequestAsync(`/api/reviews/${firstReviewId}`);
const authorName = review.author.name;
}
catch (error) {
    console.log(error);   
}