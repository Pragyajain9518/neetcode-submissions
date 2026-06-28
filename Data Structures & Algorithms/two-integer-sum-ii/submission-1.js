class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        
let map = new Map ()
        for (let i=0; i < numbers.length; i++){

             let numberValue = target - numbers[i] //2 

             if (map.has(numberValue)){

               return [map.get(numberValue)+1, i+1]

             }

       map.set(numbers[i], i)

        }
       

    }
}
