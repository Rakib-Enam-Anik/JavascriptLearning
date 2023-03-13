async function hello(){
    return "Hello";
}
console.log(hello());


const status = false;
console.log('Task 1');

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(status){
            resolve('Task 2');
        }else{
            reject('failed');
        }
    }, 2000);
    
});

promise
    .then(function(value){
    console.log(value);
})
.catch(function(err){
console.log(err);
});
console.log('Task 3');

function enroll(){
    console.log('Course enrollment is in Progress.');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }else{
                reject('Payment failed!');
            }
        }, 2000);
    });
    return promise;
}
function Progress(){
    console.log('Course on progress');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve();
            }
            else
            {
                reject('You could not get enough marks to get the certificate');
            }

        }, 3000);
    });
    return promise;

}
function getCertificae(){
    console.log('Preparing your certificate!');
    const promise = new Promise(function(){
        setTimeout(function(){
            console.log("Congrats! You got the Certificate");
        }, 1000);
});
}

//enroll()
//.then(progress)
//.then(getCertificae)
//.then(function(value){
  //  console.log(value);
//})
//.catch(function(err){
//    console.log(err);
//})

async function course(){
    try{
   await enroll();
    await Progress();
   await  getCertificate();

    
    console.log(message);
    }
    catch(err){
        console.log(err);    }

}
coursw();