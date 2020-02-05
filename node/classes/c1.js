
function c2f(c = 0){
    return (c*9/5)+32;
    }
   // let r = c2f (38);
   // console.log(r);
    function f2c (f = 0)
    {
        return (f-32)*5/9;
    }
    //let t = f2c(r);
    //console.log(t);
    
  //  function temp ( s ,callback){
  //      console.log (callback(s));
  //  }
  //  temp (28,c2f);
   // temp (82.4,f2c);
    
    
  //  const promiseExample = (num) => {
   //     return new Promise ((succes,fail)=>{
   //         if (num===0){throw "Zero (0) cannont be odd nor even"}
   //         if (num%2===0){
   //         succes();
   //     }
   //         else {
   //             fail();
    //        }
    //    });
  //  };
//promiseExample(0)
   // .then(
//()=>{
  //          console.log('Succes! number is even!');
  //      },
    //    ()=>{
    //        console.log('Fail! number is odd!');
    //    })
   ////     .catch(err=>{
    //        console.log('An error has occured',err);
    //    })
    module.exports={
c2f,
f2c
    };
