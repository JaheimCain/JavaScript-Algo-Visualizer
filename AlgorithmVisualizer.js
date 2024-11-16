
//Linear Search loops through the array to find the target in O(n) time
function linear_search(array, target){{
    
    for(let i = 0; i < array.length; i++ ){
        if(array[i] = target){
            return i;

        }
    }
}
}

//Binary Search loops through array to find a value in O(log(n)) time
function binary_search(array, target) {
    let i = 0;
    let r = array.length -1;


    while (l < r){
        m = (l+r)/2;
        m_val = array[m];
//less than case
        if (m_val < target) l = m + 1;
//greater than case
         if (m_val > target) r = m_val - 1;
//target was found
        else{
            return m;

        }
    }
//if the target was not in the array
    return -1;

}


//Interpolation Search O(log(log(n))) average case and O(n) worst case
function interpolationSearch(array, target){
    let high=array.length;
    let low = 0;
  //while target is in the array searchable area continue
    while(target >= array[low] && target <= array[high] && low<=high){
  
      //formula to calculate were our target is most likely at
      let probe =(high-low)*(value-array[low])/ (array[high]-array[low]);
  
      //checking to see if probe is our target value
      if(array[probe]==value){
        return probe;
      }else if(array[probe]<value){
        low =probe+1;
      }else{
        high=probe-1;
      }
    }
  }

//Selection Sort  O(n^2) uses the minimus value to swap with array[i]
function selection_sort(array){
for (let i = 0; i < array.length; i++){
    let min = i;
    for (let j = i + 1; j < array.length; j++){
        if (array[min] > array[j]){
            min = j;

        }
    }
    let temp = array[i];
    array[i] = array[min];
        array[min] = temp;

    
}
}

// Insertion Sort O (n^2) checks all values to the left of the index and switches them if larger
function insertion_sort (array){
    for (let i = 1; i < array.length; i++) {
		let temp = array[i];
		let j = i-1;
		while(j >= 0 && array[j] > temp) {
			array[j+1] = array[j];
			j--;
			array[j+1] = temp;
			
		}
		
				
	}
}

//Quick Sort recursive O(n*log(n)) uses pivot and compares the values befor the pivot breaking at it after each step
function quick_sort(array, start, end){
if (end <= start) return; //base case

let pivot = partition(array, start, end)
quick_sort(array, start, pivot -1);
quick_sort(array, pivot + 1, end);


    }

    function partition(array, start, end){
       
       let pivot = array[end];
       let i = start - 1;


       for (let j = start; j <= end - 1; j++){
        if (array[j] < pivot){
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
       }
       i++;
       let temp = array[i];
            array[i] = array[end];
            array[end] = temp;

        return i;


    }


//HashMap is a powerful data structure used to store items in a key value pair ( best case a look up on a hashmap is O(1) but can loop through like an array)
    function HashMap(map_instance, key, value){
        map_instance.set(key,value);

    }

    function HashMap(key, value){

        const map_instance = new Map();
        map_instance.set(key,value);


    }


    function HashMapDel(map_instance, key){
        map_instance.delete(key);


    }
    function HashMapCall(map_instance, key){
        map_instance.get(key);


    }

    //bubble sort O(n^2) adjacent elements are compared and swapped if not in order
function bubbleSort(array, n){
    let temp = 0;
  
    for (let  i = 0; i < n -1; i++ ){
      for (let j = 0; j < n - i; j++){
        if (array[j] > array[j + 1]){
  
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
  
        }
      }
    }
  }

  //MergeSort recursion O(n * log(n)) A divide and conquer algorithm used for sorting uses a helper merge method
function MergeSort(array){
    //base case if array cannot be /2
    if (array.length<2){
      return array;
    }
    //finding the  middle of the array and diving it ito two
    const mid = Math.floor(array.length/2);
    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid);
    //passing created arrays into helper function
    return merge(MergeSort(leftArray), MergeSort(rightArray))
  }
  function merge(leftArray, rightArray){
    //temporary array
    const sortedArray = [];
    //while our array is not empty we check for which array has the smallest element
    while(leftArray.length && rightArray.length){
      if(leftArray[0] <= rightArray[0]){
        sortedArray.push(leftArray.shift())
      }else{
        sortedArray.push(rightArray.shift())
      }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
  }