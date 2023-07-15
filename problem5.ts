function meanMedian(arrayInput:number[]) {
    // your code here
    let jumlah:number = 0
    let median:number = 0
    for(let i:number = 0; i< arrayInput.length;i++){
        jumlah += arrayInput[i]
    }

    if(arrayInput.length%2 === 0){
        const middleIndex:number = Math.floor(arrayInput.length / 2);
        const result:number[] = arrayInput.slice(middleIndex - 1, middleIndex + 1);
        median = (result[0] + result[1]) / middleIndex 
    }else{
        const middleIndex:number = Math.floor(arrayInput.length / 2);
        median = arrayInput[middleIndex]
    }
   
    return `${jumlah/arrayInput.length} ${median}`
  }
  
  
  console.log(meanMedian([1, 2, 3, 4]))          // 2.5 2.5
  console.log(meanMedian([1, 2, 3, 4, 5]))       // 3 3
  console.log(meanMedian([7, 8, 9, 13, 15]))     // 10.4 9
  console.log(meanMedian([10, 20, 30, 40, 50]))  // 30 30
  console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30