const vndUsd = 23208;

const usdVnd = 1 / vndUsd;


function vndToUsd(amountVnd) {
    console.log("VND to USD", (amountVnd / vndUsd).toFixed(2))
}
function usdToVnd(amountUsd) {
    console.log("USD to VND", (amountUsd / usdVnd).toFixed(2))
}
let currency (prompt"select currency");
if (currency === "vnd") {
    let amountVnd = prompt("Amount of VND?");
    if (isNaN(amountVnd)) {
        alert("insert valid number")
    }
    else if (amountVnd < 0) {
        alert("insert positive number");
    }
    else {
        vndToUsd(amountVnd)
    }
}

else if (currency === "usd") {
    let amountUsd = prompt("Amount of USD?");
    if (isNaN(amountUsd)) {
        if (amounUsd > 0)
            alert("Only positive numbers are accepted");
        else alert ("Please input a number");
    }

    else {
        usdToVnd(amountUsd)
    }
}

else {
    alert("Please choose one of the supported currencies: VND | USD");
    prompt("Choose one of the following input currencies: VND | USD")
}



// const start = prompt("select currency on hand")
// const end = prompt("select currency to exchange to")
// const currency = start.toLowerCase()+ "-" + end.toLowerCase()
// let amount = prompt ("amount")
// if (amount>0){
//     switch (currency) {
//         case "vnd-usd" :
//             console.log("VND to USD", (amount / vndUsd).toFixed(2))
//             break;
//         case "usd-vnd":
//             console.log("USD to VND", (amount / usdVnd).toFixed(2))
//             break;
//         default:
//             console.log("enter an pr...")
//     }
// } else {
//     console.log("enter a number")
// }



