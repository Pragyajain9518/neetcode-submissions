class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    //15 length
    // 10 no phone
    countSeniors(details) {
let count = 0
            for (let i = 0; i < details.length;  i++){
  
           let data = details[i].split().join()
                let newData =    data[11]+data[12]

                if (newData > 60){

                    count ++
                }

            }
return count
    }
}
