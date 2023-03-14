<h1>OBJECTIVE</h1>

Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand. 

<h1>INSTRUCTIONS</h1>

Each time work only with the first i-1 element from of the array
Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

<hr>
In this implementation, we start iterating the array from index 1, and for each subsequent element, we compare it with the previous elements in the array (starting from index i-1) and insert it into the correct position in the sorted portion of the array. The j variable is used to keep track of the index of the last element that is smaller than the current element being sorted. The temp variable is used to temporarily store the value of the current element being sorted. Once the correct position of the current element is found, we insert it into the array by shifting the larger elements one position to the right.
