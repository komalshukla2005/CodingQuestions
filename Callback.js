// function preparedFood(foodDelivered){
//     setTimeout(() => {
//         console.log("Food is being prepared");
//         setTimeout(() => {
//             console.log("Food is ready");
//             foodDelivered(eatingFood);
//         }, 2000); 
//     }, 10000); 
// }

// function deliveredFood(eatingFoodCallback){
//     setTimeout(() => {
//         console.log("Food is delivered to your table");
//         eatingFoodCallback();
//     }, 5000);
// }

// function eatingFood(){
//     setTimeout(() => {
//         console.log("Eating Food");
//         payment();
//     }, 2000);
// }

// function payment(){
//     setTimeout(() => {
//         console.log("Payment");
//         leaveHotel();
//     }, 2000);
// }

// function leaveHotel(){
//     console.log("Leave the Hotel");
// }

// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);
// }

// visitingHotel();

// write callBackFunction function for AtM card;
// function firstProcess(giveMe) {
//     setTimeout(() => {
//         console.log("please wait some time after that you will be able to enter your pin");
//         giveMe()
//     }, 5000);
// }

// function enterPin(giveMe) {
//     setTimeout(() => {
//         console.log("Please Enter your Pin");
//         giveMe();
//     }, 2000);
// }

// function withDrawMoney(giveMe) {
//     setTimeout(() => {
//         console.log("Now your money is withdrawing");
//         giveMe();
//     }, 5000);
// }

// function collectYourCash(giveMe) {
//     setTimeout(() => {
//         console.log("Here is your cash please collect your cash");
//         giveMe();
//     }, 1000);
// }

// function leaveAtm() {
//     console.log("Now you can leave the atm because your all process has completed");
// }

// function atmMoney() {
//     console.log('Entering to the ATM');
//     console.log("Please Insert Your card");

//     firstProcess(() => {
//         enterPin(() => {
//             withDrawMoney(() => {
//                 collectYourCash(() => {
//                     leaveAtm();
//                 });
//             });
//         });
//     });
// }

// atmMoney();

function firstProcess() {
    setTimeout(() => {
        console.log("please wait some time after that you will be able to enter your pin");
        enterPin();
    }, 5000);
}

function enterPin() {
    setTimeout(() => {
        console.log("Please Enter your Pin");
        withDrawMoney(); 
    }, 2000);
}

function withDrawMoney() {
    setTimeout(() => {
        console.log("Now your money is withdrawing");
        collectYourCash(); 
    }, 5000);
}

function collectYourCash() {
    setTimeout(() => {
        console.log("Here is your cash please collect your cash");
        leaveAtm(); 
    }, 1000);
}
function leaveAtm() {
    console.log("Now you can leave the atm because your all process has completed");
}
function atmMoney() {
    console.log('Entering to the ATM');
    console.log("Please Insert Your card");
    firstProcess();
}
atmMoney();
