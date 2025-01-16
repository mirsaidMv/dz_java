function phoneNumber(hidePhone){
    let parts = hidePhone.split(' ');
    let lastPart = parts[parts.length - 1];
    let lastPartHide = lastPart.slice(0, -2) + 'xx';
    parts[parts.length - 1] = lastPartHide;
    return parts.join(' ');
}
let phone = "+996 123 123 123";
console.log(phoneNumber(phone));

function getMean(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let amount = arr.reduce((acc, num) => acc + num, 0);
    let mean = amount / arr.length;

    return mean;
}

console.log(getMean([4, 5, 6, 7]));
console.log(getMean([0, 0, 0, 4]));

function truncate(string, length){
    if (string.length <= length){
        return string;
    }
    return string.slice(0, length);
}
console.log(truncate("text text text text", 4));
console.log(truncate("Hello, HTML, CSS, JavaScript", 5));
console.log(truncate("test", 20));




function currencyFormat(amount, currency) {
    let symbol;

    switch(currency) {
        case "USD":
            symbol = "$";
            break;
        case "EUR":
            symbol = "€";
            break;
        case "RUB":
            symbol = "₽";
            break;
        default:
            symbol = "";
            break;
    }
    return symbol + amount;
}


console.log(currencyFormat(100, "USD"));
console.log(currencyFormat(1500, "EUR"));
console.log(currencyFormat(4800, "RUB"));




