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
  
      const age = Number(details[i].substring(11, 13));
        //    let data = details[i].split().join()
        //         let newData = data[11]+data[12]

                if (age > 60){

                    count ++
                }

            }
return count
    }
}
