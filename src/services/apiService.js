import moment from 'moment'; //npm пакет для работы с датами/числами/временем

const apiUrl = 'https://dashboard.elering.ee/api'; //api url

// экспорт ассинхронную функцию, которая запрашивает текущую стоимость электро энергии
// запрос GET /nps/price/ee/current - endpoint
// await позволяет дожидатьсяответа с api
// fetch возвращает promise(обещание) и при правильном выполнении объект response
// каждый response имеет функцию .json() которая переводит JSON в JS объект 
export async function getCurrentPrice() {
    const country = 'EE';
    const response = await fetch(`${apiUrl}/nps/price/${country}/current`);
    return response.json();
};

export async function getPriceData() {
    // moment() - выдаёт moment object с текущим временем и датой
    // .utc() - конвертирует это в нулевой часовой пояс
    // substract - вычетает
    // .format() - проверащает moment object в string с удобным форматом чтения
    const start = moment().utc().subtract(10, 'hours').format();
    const end = moment().utc().add(30, 'hours').format();
    // URLSearchParams - превращает js объект в строчку для url
    const params = new URLSearchParams({start, end});
    const response = await fetch(`${apiUrl}/nps/price?${params}`);
    return response.json();
};