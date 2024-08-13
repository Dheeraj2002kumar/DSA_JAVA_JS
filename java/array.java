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

//Q3. Find Minimum value in Array
public static int findMinimum(int[] arr){
  // edge
  if(arr == null || arr.length == 0){
    throw new IllegalArgumentException("Invalid input");
  }

  int min = arr[0];  // min will hold the minimum of array
  for(int i=1; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}


//Q4. Given an array of integers, return second maximum value. The secondd maximum value exists.
public static int findSecondMax(int[] arr){ 
  // edge
  if(arr == null || arr.length < 2){
    throw new IllegalArgumentException("Invalid input");
    }

    int max = Integer.MIN_VALUE;
    int secondMax = Integer.MIN_VALUE;
    for(int i=0; i<arr.length; i++){
      if(arr[i] > max){
        secondMax = max;
        max = arr[i];
        }
        else if(arr[i] > secondMax && arr[i] != max){
          secondMax = arr[i];
          }
    }
    return secondMax;
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
    // int[] arr = {2, 11, 5, 10, 7, 8};
    // printArray(arr);
    // reverseArray(arr, 0, arr.length-1);
    // printArray(arr);

    //Q3. Find Minimum value in Array
    // int[] arr = {5, 9, 3, 15, 1, 2};
    // System.out.println(findMinimum(arr)); // 1


    //Q4. Given an array of integers, return second maximum value. 
    int[] array = {13, 34, 2, 34, 33, 1};
    printArray(array);
    int secMax = findSecondMax(array);
    System.out.println("Second Max: " + secMax);  // 33  


  }
}


