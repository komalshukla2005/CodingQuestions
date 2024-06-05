// // make a ATM  function by using the callback and after that convert   it in a promise function 
// // conditions
// // 1 Entering to the ATM 2 Insert your card 3 wait for some time  4 Enter your pin 5 withdraw money 6 collect cash 7 leave ATM
// let firstProcess = function () {
//   return new Promise(function (resolve, reject) {
//       let val = true; // Assuming this is just a placeholder
//       setTimeout(() => {
//           if (val) {
//               resolve("Please wait for some minutes ............");
//           } else {
//               reject("First go to the ATM");
//           }
//       }, 5000)
//   });
// };

// let Pin = function () {
//   return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//           let value = true; 
//           if (value) {
//               resolve("Enter your Pin .........")
//           } else {
//               reject("first complete first process")
//           }
//       }, 2000)
//   })
// }
// let withDrawMoney=function(){
//   return new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       let value=false;
//       if(value){
//         resolve("Now your money is withdrawing .....")
//       }
//       else{
//         reject("ops please enter correct pin")
//       }
//     },5000)
//   })
// }

// let collectYourMoney=function(){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve("collect your money and enjoy your day..")
//     },4000)
//   })
// }
// let leave=function(){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve("now i am leaving the ATM because my work has finished ..........")
//     },3000)
//   })
// }
// let atmMoney = function () {
//   return new Promise(function (resolve, reject) {
//       let atm = true; // Assuming this is just a placeholder
//       if (atm) {
//           resolve([
//               "Welcome to the ATM",
//               "Entering to the ATM",
//               "Please insert your card.........."
//           ]);
//       } else {
//           reject("The ATM is not Open due to some issue.......");
//       }
//   });
// };

// atmMoney()
//   .then((ans) => {
//       ans.forEach(element => {
//           console.log(element);
//       });
//       return firstProcess().then((message) => {
//           console.log(message); 
//           return Pin().then((massage)=>{
//             console.log(massage)
//             return withDrawMoney().then((massage)=>{
//               console.log(massage)
//               return collectYourMoney().then((massage)=>{
//                 console.log(massage)
//                 return leave()
//               })
//             })
//           });
//       });
//   })
//   .then((message) => {
//       console.log(message); 
//   })
//   .catch((error) => {
//       console.log("Error occurred: ", error);
//   });



//  PRATICES
// write a code for several people they doing there work one by one of a company work
let frontedDeveloper=function(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
    let value=true;
    if(value){
      resolve("hey i am komal , i am making the structure of the website")
    }else{
      reject("there is no one who is working on this project")
    }
  },2000)
  })
}
let leader=function(){
  return new Promise(function(resolve){
    setTimeout(()=>{
      resolve("I am leader of this team and i am headling the whole team")
    },3000)
  })
}
let dealFirst=function(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      let complete=true;
      if(complete){
        resolve("the first part of  deal has done")
      }else{
        reject("the deal has rejected because you people doing not good...")
      }
    },5000)
  })
}
let menegaer=function(){
  return new Promise(function(resolve){
    setTimeout(()=>{
      resolve("i will manage this team because deal is very important")
    },2000)
  })
}
let graphikdesigner=function(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      let design=true;
      if(design){
        resolve("there is no any mistake by my side..")
      }else{
        reject("there is mistake by my side..")
      }
    },3000)
  })
}
let beckondDeveloper=function(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      let value=true;
      if(value){
        resolve("hey i can solve this problem ")
      }else{
        reject("not sure i will try ")
      }
    },2000)
  })
}
let final=function(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      let value=false;
      if(value){
        resolve("hey this deal has completed only by your success")
      }else{
        reject("ops this deal is not completed because you people are unable to solve the problem")
      }
    },6000)
  })
}
let task=function(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      let value=true;
      if(value){
        resolve("The task has sended on your email please do it...")
      }else{
        reject("the task has not sended yet please wait for some time")
      }
    },4000)
  })
}
task()
.then((asn)=>{
  console.log(asn)
  return frontedDeveloper().then((asn)=>{
    console.log(asn)
     return leader().then((asn)=>{
      console.log(asn)
      return dealFirst().then((asn)=>{
        console.log(asn)
        return menegaer().then((asn)=>{
          console.log(asn);
          return beckondDeveloper().then((asn)=>{
            console.log(asn)
            return final()
          })
        })
      })
     })
  })
})
.catch((error)=>{
  console.log("the error is that :",error)
})