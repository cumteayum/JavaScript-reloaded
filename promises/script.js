function func() {
  return new Promise(function(resolve, reject) {
    let error = false;
    if(!error){
      console.log("resolved");
      resolve();
    }else{
      console.log("rejected");
      reject();
    }
  });
}

func().then(() => console.log("I got called resolving")).catch(()=>console.log("I got called rejecting"));
