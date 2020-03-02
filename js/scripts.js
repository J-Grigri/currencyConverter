
const vndUsd = 23208;
const usdVnd = 1 / vndUsd;
const vndEur = 25836;
const eurVnd = 1 / vndEur;
const vndKrw = 19.5;
const krwVnd = 1 / vndKrw;
const vndIdr = 1.63
const IdrVnd = 1 / vndIdr;

const start = prompt("select currency on hand");
const end = prompt("select currency to exchange to");
const currency = start.toLowerCase() + "-" + end.toLowerCase();

let amount = prompt("amount");
if (amount > 0) {
    switch (currency) {
        case "vnd-usd":
            console.log((amount / vndUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD', }))
            break;
        case "usd-vnd":
            console.log((amount / usdVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
            break;
        case "vnd-eur":
            console.log((amount / vndEur).toLocaleString('de-DE', { style: 'currency', currency: 'EUR', }))
            break;
        case "eur-vnd":
            console.log((amount / eurVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
            break;
        case "vnd-krw":
            console.log((amount / vndKrw).toLocaleString('kr-KR', { style: 'currency', currency: 'KRW', }))
            break;
        case "krw-vnd":
            console.log((amount / krwVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
            break;
        case "vnd-idr":
            console.log((amount / vndIdr).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', }))
            break;
        case "idr-vnd":
            console.log((amount / IdrVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
            break;

        default:
            console.log("Insert positive number")
    }
} else {
    console.log("enter a number")
}



