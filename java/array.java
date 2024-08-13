public class array{

  // print array
  public static void printArray(int[] arr){
    int n = arr.length;
    for (int i=0; i<n; i++){
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  // Q1. Given an array of integers, return an array with even integers removed.
  public static int[] removeEven(int[] arr){
    int oddCount = 0;
    for(int i = 0; i<arr.length; i++){
      if(arr[i]%2 != 0){
        oddCount++;
      }
    }
  
    int[] result = new int[oddCount];
    int idx = 0;
    for(int i=0; i<arr.length; i++){
      if(arr[i]%2 != 0){
        result[idx] = arr[i];
        idx++;
      }
    }
    return result;
  }

  // Q2. Given an array or string, the task is to reverse the  array or string
public static void reverseArray(int numbers[], int start, int end){
  while(start < end){
    int temp = numbers[start];
    numbers[start] = numbers[end];
    numbers[end] = temp;
    start++;
    end--;
  }
}

  public static void main(String[] args) {
    // array arrUtil = new array();
    // arrUtil.printArray(new int[] {5, 1, 2, 9, 10});

    // Q 1. remove even integers
    // int[] arr = {3, 2, 4, 7, 10, 6, 5};  //  3, 7, 5
    // printArray(arr);
    // int[] odd = removeEven(arr);
    // printArray(odd);

    // Q2. reverse the array or string
    int[] arr = {2, 11, 5, 10, 7, 8};
    printArray(arr);
    reverseArray(arr, 0, arr.length-1);
    printArray(arr);
  }
}


