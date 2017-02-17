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

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array){
  do{ array.shift();

  } while (array.length >= -1 && maybeTrue())

return array;

}
