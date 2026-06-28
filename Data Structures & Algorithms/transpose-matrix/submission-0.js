class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {

        let row = matrix.length
        let cols = matrix[0].length


let arr = Array.from({ length: cols }, () => Array(row).fill(0));
    for (let i = 0; i < matrix.length; i++){

        for (let j= 0; j < matrix[i].length; j++){
            arr[j][i] = matrix[i][j]
        }

       
    }
           return arr
    }
}
