/*
const arr = [];
arr.push("Test", 50, true);

arr.forEach((value, index) => {
    console.log(value, index);
})

const fun = function(arg){
    return 0;
}

function sum(a){
    return function(b){
        return a + b;
    }
}

(sum(1))(2);
*/

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2

  if(array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
array = [7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(array));