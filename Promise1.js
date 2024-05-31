// let promise=new Promise((resolve,reject)=>{
//     let gift=' not find';
//     setTimeout(()=>{
//     if(gift=='find'){
//         let saloni=true;
//         if(saloni){
//             resolve("she find gift and give us party")
//         }else{
//             reject("she will not give us party")
//         }


//     }else{
//         console.log("She will not give party because she don't find gift")
//     }
// },2000)
// })
// promise
// .then((ans)=>{
//     console.log(ans)
// })
// .catch((ans)=>{
//     console.log(ans)
// })

// function party() {
//     console.log("Saloni found the gift and will give us a party.");
// }

// function notParty() {
//     console.log("Saloni will not give us a party.");
// }

// let promise = new Promise((resolve, reject) => {
//     let gift = 'not find';
//     setTimeout(() => {
//         if (gift === 'find') {
//             let saloni = true;
//             if (saloni) {
//                 resolve("party");
//             } else {
//                 reject("notParty");
//             }
//         } else {
//             reject("notParty");
//         }
//     }, 2000); 
// });

// promise
//     .then((result) => {
//         if (result === 'party') {
//             party();
//         } else {
//             notParty();
//         }
//     })
//     .catch((result) => {
//         if (result === 'notParty') {
//             notParty();
        // }
    // });

    // let isParty = function (result) {
    //     return new Promise(function (resolve, reject) {
    //         if (result) {
    //             resolve("Party is on");
    //         } else {
    //             reject("Party is off because she didn't get any gift");
    //         }
    //     });
    //   };
      
    //   let gift = function () {
    //     return new Promise(function (resolve, reject) {
    //         let gotGift = true; 
    //         if (gotGift) {
    //             resolve("She got the gift");
    //         } else {
    //             reject("She didn't get any gift");
    //         }
    //     });
    //   };
      
    //   gift()
    //     .then((result) => {
    //         console.log(result);
    //         return isParty(true);
    //     })
    //     .then((result) => {
    //         console.log("Result:", result);
    //     })
    //     .catch((error) => {
    //         console.log("Error:", error);
    //         return isParty(false); 
    //     })
    //     .catch((error) => {
    //         console.log("Error:", error); 
    //     });
      