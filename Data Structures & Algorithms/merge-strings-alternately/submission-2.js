class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

    let listData = ""
    let i = 0;
    let j= 0;

    while (i < word1.length || j < word2.length){
      if (i < word1.length){
            listData += word1[i]
            i++
    }
    if  (j < word2.length){
        listData += word2[j]
        j++
    }
    }
    return listData
}
}