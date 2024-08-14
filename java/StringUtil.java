public class StringUtil {

//Q8. Given a string, the task is check whether given string is palindrome or not.
public static boolean isPalindrome(String word){
 char[] charArray = word.toCharArray();
  int left = 0, right = charArray.length -1;

  while(left < right){
    if(charArray[left] != charArray[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

  public static void main(String[] args){
    if(isPalindrome("madam")){
      System.out.println("The string is a palindrome !!!");
    } else {
      System.out.println("The string is not a palindrome !!!");
    }

  }
}