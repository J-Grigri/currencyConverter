
let input = document.getElementById('amount');
let convertButton = document.getElementById('convertButton')
let resultArea = document.getElementById('result')
let radioIn = document.getElementsByName("currency")
let radioOut = document.getElementsByName("currency1")
let inputCurrency
let outputCurrency

function log(){
    for(let i = 0; i < radioIn.length; i++){ // Loop for input currency
        if(radioIn[i].checked){
            inputCurrency = radioIn[i].value
            break;
        }
    }
    console.log(inputCurrency)
    for(let i = 0; i <radioOut.length; i++){ // Loop for output currency
        if(radioOut[i].checked){
            outputCurrency = radioOut[i].value 
            console.log(outputCurrency)
            break;
        }
    }
}

function convert(){
    log()
    let usd_conversion_rate = currencyRatio[inputCurrency.toLowerCase()]['usd']
    console.log('output', outputCurrency.toLowerCase())
    let final_conversion_rate = currencyRatio['usd'][outputCurrency.toLowerCase()]
    console.log('input_user', input.value)
    let convert_to_usd = input.value * usd_conversion_rate
    let convert_to_final_currency = (convert_to_usd * final_conversion_rate).toLocaleString("fi-FI")
    resultArea.innerHTML = `result is this ${convert_to_final_currency}`
// every input is first converted to USD and then to the output currency. This way only the USD exchange needs to be kept up to date and the rest will be calculated

    console.log(usd_conversion_rate, final_conversion_rate, convert_to_usd, convert_to_final_currency)
}
const currencyRatio = {
    usd: {
        usd: 1,
        vnd: 23235,
        eur: 0.9,
        krw: 1193
    },
    vnd: {
        usd: 0.000043
    },
    eur: {
        usd: 1.11
    },
    krw: {
        usd: 0.00084
    }
}

// console.log("ratio", currencyRatio['usd']['vnd'])


// convertButton.addEventListener('click', calculation)
// function calculation(){
//     let amount = input.value;
//     let result = amount * conversion;
//     resultArea.innerHTML=`result is: ${result}`;
// }


// const start = "USD"
// const end = "VND"
// const currencyPair = start.toLowerCase() + "-" + end.toLowerCase();


// if (amount > 0) {
//     switch (currencyPair) {
//         case "vnd-usd":
//             console.log((amount / vndUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD', }))
//             break;
//         case "usd-vnd":
//             console.log((amount / usdVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
//             break;
//         case "vnd-eur":
//             console.log((amount / vndEur).toLocaleString('de-DE', { style: 'currency', currency: 'EUR', }))
//             break;
//         case "eur-vnd":
//             console.log((amount / eurVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
//             break;
//         case "vnd-krw":
//             console.log((amount / vndKrw).toLocaleString('kr-KR', { style: 'currency', currency: 'KRW', }))
//             break;
//         case "krw-vnd":
//             console.log((amount / krwVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
//             break;
//         case "vnd-idr":
//             console.log((amount / vndIdr).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', }))
//             break;
//         case "idr-vnd":
//             console.log((amount / IdrVnd).toLocaleString('vn-VN', { style: 'currency', currency: 'VND', }))
//             break;

//         default:
//             console.log("Insert positive number");
//     }
// } else {
//     console.log("enter a number");
// }



