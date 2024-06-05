// // Callback Function
// function goToMarket(){
//     setTimeout(()=>{
//         console.log("i am going to the market to take rice")
//         reachedMarketGoToShope()
//     },7000)
// }
// function reachedMarketGoToShope(){
//     setTimeout(()=>{
//         console.log("give me rice and take money")
//         returnHome()
//     },3000)
// }
// function returnHome(){
//     setTimeout(()=>{
//         console.log("i came back to home")
//     makingRice()
//     },5000)
// }
// function makingRice(){
//     setTimeout(()=>{
//         console.log("i am cooking the rice")
//     readyRice()
//     },3000)
// }
// function readyRice(){
//     setTimeout(()=>{
//         console.log("the rice is ready please take it...")
//         goOutSide()
//     },2000)
// }
// function goOutSide(){
//     setTimeout(()=>{
//         console.log("i ate rice now i am going outside")
//     },1000)
// }
// function makeRice(){
//     console.log("I am ready to make this ....")
//     goToMarket()
// }
// makeRice()


// // callback hell 
// function takeDress(element){
//     setTimeout(()=>{
//         console.log('ops my dress is not clean')
//         element()
//     },8000)
// }
// function takeYourSisterDress(element){
//     setTimeout(()=>{
//         console.log("sister please give me your dress only for today")
//         element()
//     },2000)
// }
// function wearDress(element){
//     setTimeout(()=>{
//         console.log("i weared the  dress and i am ready for party")
//         element()
//     },4000)
// }
// function reach(element){
//     setTimeout(()=>{
//         console.log("enjoy the party and take whatever you want")
//         element()
//     },2000)
// }
// function dance(element){
//     setTimeout(()=>{
//         console.log("let's dance ..")
//         element()
//     },5000)
// }
// function goBack(element){
//     setTimeout(()=>{
//         console.log("party closed go back your home")
//         element()
//     },3000)
// }
// function reachHome(){
//     setTimeout(()=>{
//         console.log("mom open the door i am come back ")
//     },2000)
// }
// function goingToTheParty(){
//     console.log("i am going to the party..")
//     takeDress(()=>{
//         takeYourSisterDress(()=>{
//             wearDress(()=>{
//                 reach(()=>{
//                     dance(()=>{
//                         goBack(()=>{
//                             reachHome(()=>{

//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }

// goingToTheParty()


// promise
let sad=function(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            let bus=true;
            if(bus){
                reslove("i am going to the mumbai")
            }else{
                reject("i am not going to the mumbai")
            }
        },3000)
    })
}
let happy=function(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            let dear=true;
            if(dear){
                reslove("hello")
            }else{
                reject("hey")
            }
            sad()
            .then(print=>{
                console.log(print)
            })
            .catch(print=>{
                console.log(print)
            })
        },6000)
    })
}
let gift=function(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            let my=false;
            if(my){
                reslove("i am good")
            }else{
                reject("i am not good now ......")
            }
            happy()
            .then(massage=>{
                console.log(massage);  
                      })
            .catch(error=>{
                console.log(error)
            })
        },8000)
    })
}
gift()
.then((ans)=>{
    console.log(ans)
})
.catch((ans)=>{
    console.log(ans)

})

// Promise chaining
// make a function for going to trip for many countries 
// let goToGoa=function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let value=true;
//             if(value){
//                 resolve("let's go to goa beech")
//             }else{
//                 reject("no we can't go there ...")
//             }
//         },4000)
//     })
// }
// let goToBangalore=function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let value=true;
//             if(value){
//                 resolve("after mumbai chalo ab bangalore chale")
//             }else{
//                 reject("stay in")
//             }
//         },2000)
//     })
// }
// let goToDelhi = function() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let value = true;
//             if (value) {
//                 resolve("We are going to Delhi.");
//             } else {
//                 reject("We are not going to Delhi because we don't have money.");
//             }
//         }, 6000);
//     });
// };

// let goToMumbai = function() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{

        
//         let value = true;
//         if (value) {
//             resolve("We are going to Mumbai.");
//         } else {
//             reject("We are not going to Mumbai.");
//         }
//     },4000)
//     });
// };

// let trip = function() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let sir =false;
//             if (sir) {
//                 resolve("I am giving you permission.");
//             } else {
//                 reject("I am not giving you permission.");
//             }
//         }, 9000);
//     });
// };

// trip()
//     .then((massage) => {
//         console.log(massage);
//         return goToDelhi();
//     })
//     .then((massage) => {
//         console.log(massage);
//         return goToMumbai();
//     })
//     .then((massage) => {
//         console.log(massage);
//         return goToBangalore()
//     })
//     .then((massage) => {
//         console.log(massage);
//         return goToGoa()
//     })
//     .then((massage) => {
//         console.log(massage);
//     })
//     .catch((massage) => {
//         console.log(massage);
//     });
