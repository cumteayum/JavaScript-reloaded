let fruits = ["Mango", "Oranges", "Lemon", "Cherry"];

function Iterator(values) {
  let nextIndex = 0;
  return{
    next: function() {
      if(nextIndex < values.length){
        return{
          value:values[nextIndex++],
          done:false
        }
      }else{
        return{
          done:true
        }
      }
    }
  }
}

let a = Iterator(fruits);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
