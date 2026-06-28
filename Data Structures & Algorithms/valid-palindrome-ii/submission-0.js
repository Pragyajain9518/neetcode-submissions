class Solution {
    validPalindrome(s) {
     let left = 0;
  let right = s.length - 1;

 function isPalindrome (l,r) {

  while (l < r) {
    
    while (l < r && !/[a-z0-9]/i.test(s[left])) l++;
    while (l < r && !/[a-z0-9]/i.test(s[right])) r--;

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
     return false;

    }

    l++;
    r--;
  }

  return true;
  }
   
    while (left < right) {
      while (left < right && !/[a-z0-9]/i.test(s[left])) left++;
      while (left < right && !/[a-z0-9]/i.test(s[right])) right--;

      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
   
        return (
          isPalindrome(left + 1, right) ||
          isPalindrome(left, right - 1)
        );
      }

      left++;
      right--;
    }

    return true;
}
}  
