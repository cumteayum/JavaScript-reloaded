// Generator in JavaScript
function* myGenerator(){
  let i = 0;
  while(true){
    yield i++;
  }
}

const gen = myGenerator();
console.log(gen.next());