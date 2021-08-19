const inputField = document.querySelectorAll(".input-field");
const showBtn = document.querySelector("#show-btn");
const result = document.querySelector("#output");

showBtn.addEventListener('click', calculateProfitAndLoss)


function calculateProfitAndLoss() {
    var intialPrice = Number(inputField[0].value);
    var stockQuantity = Number(inputField[1].value);
    var currentPrice = Number(inputField[2].value);
    var profit = ((currentPrice - intialPrice) * stockQuantity).toFixed(2);
    var profitPercentage = ((profit / intialPrice) * 100).toFixed(2);
    var loss = ((intialPrice - currentPrice) * stockQuantity).toFixed(2);
    var lossPercentage = ((loss / intialPrice) * 100).toFixed(2);

    if (intialPrice == "" || stockQuantity == "" || currentPrice == "") {
        result.innerText = "Please fill all the fields"
        return false;
    }
    if (stockQuantity < 0) {
        result.innerText = "Stock quantity should be greater than 0"
        return false;
    }


    if (currentPrice > intialPrice) {
        result.style.backgroundColor = 'green';
        result.style.padding = '20px';
        document.body.style.backgroundImage = "url('/happy.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        result.innerText = `😊Congrats! The Profit is ${profit} Rs. the Profit percentage is ${profitPercentage}%`;


    } else if (currentPrice < intialPrice) {
        result.innerText = `☹️Oh! The Loss is ${loss} Rs. the Loss percentage is ${lossPercentage}%`;
        result.style.backgroundColor = 'red';
        result.style.padding = '20px';
        document.body.style.backgroundImage = "url('/sad.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    } else {
        (currentPrice === intialPrice)
        result.innerText = ("😐no pain no gain");
    }
}
