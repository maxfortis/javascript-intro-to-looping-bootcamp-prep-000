function forLoop(array){
  for (var i = 1; i <=25; i++){
    if (i === 1) {
      array.push("I am " +i+ " strange loop.")}
    else {
      array.push("I am " + i + "strange loops.")

    }

    }
    return array;
  }
  var n =10;
  function whileLoop(n){
   while (n > 0){
    console.log(--n);

}
return 'done';
}
var array = [];
function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5}

  do { array.shift();
  }
  while (array.length > 0 && maybeTrue());



}
