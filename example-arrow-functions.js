// var names = ['Nene','Nena','Andrew'];
//
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// names.forEach((name)=> {
//   console.log('Arrow func ', name);
//   console.log('someting else');
// });
//
// names.forEach((name)=>console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('George'));
//
// var person = {
//   name: 'George',
//   greet: function(){
//     names.forEach((name)=>{
//       console.log(this.name + 'says hi to '+ name);
//     });
//   }
// };

//person.greet();

function add(a,b){
  return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return a+b;
}

var addExpression = (a,b)=> a+b;

console.log(addExpression(3,-2));
