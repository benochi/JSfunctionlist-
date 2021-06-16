function randomArray(arr, num) {  //return a random array from an array of any length, the length of the new array === num
    let randomArr =[];

    for ( let i = 0; i < num; i++) {
        let tempArr = arr[Math.floor(Math.random()*arr.length)];
        randomArr.push(tempArr);
    }
    return randomArr;
}
