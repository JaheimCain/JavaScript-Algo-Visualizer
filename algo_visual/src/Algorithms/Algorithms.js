
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
    let l = 0;
    let r = array.length -1;


    while (l < r){
        let m = (l+r)/2;
        let m_val = array[m];
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
      let probe =(high-low)*(target-array[low])/ (array[high]-array[low]);
  
      //checking to see if probe is our target value
      if(array[probe]===target){
        return probe;
      }else if(array[probe]<target){
        low =probe+1;
      }else{
        high=probe-1;
      }
    }
  }

//Selection Sort  O(n^2) uses the minimus value to swap with array[i]
export const SelectionSort = (array) =>{
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
return array;

}

// Insertion Sort O (n^2) checks all values to the left of the index and switches them if larger
export const InsertionSort = (array) =>{
    for (let i = 1; i < array.length; i++) {
		let temp = array[i];
		let j = i-1;
		while(j >= 0 && array[j] > temp) {
			array[j+1] = array[j];
			j--;
			array[j+1] = temp;
			
		}
		
				
	}
  return array;

}

//Quick Sort recursive O(n*log(n)) uses pivot and compares the values befor the pivot breaking at it after each step
export const quick_sort = (array) =>{
if (array.length <= 1) return array; //base case

const pivot = array[0];
const left = [];
const right = [];

for (let i = 1; i < array.length; i++){
  if (array[i] < pivot) { 
    left.push(array[i]);
  }
  else{
    right.push(array[i]);
  }
}

return[...quick_sort(left), pivot, ...quick_sort(right)];

}


//HashMap is a powerful data structure used to store items in a key value pair ( best case a look up on a hashmap is O(1) but can loop through like an array)
    function HashMap(map_instance, key, value){
        map_instance.set(key,value);

    }

    function HashMapNew (key, value){

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
    export const bubbleSort = (array) =>{
    let temp = 0;
    const n = array.length;

  
    for (let  i = 0; i < n -1; i++ ){
      for (let j = 0; j < n - i - 1; j++){
        if (array[j] > array[j + 1]){
  
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
  
        }
      }
    }

    return array;
  }

  //MergeSort recursion O(n * log(n)) A divide and conquer algorithm used for sorting uses a helper merge method
export function MergeSort(array) {

  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  mergeHelp(array, 0 , array.length - 1, auxArray, animations);
  return animations;

  }
  function mergeHelp(
    mainArray,
    start,
    end,
    auxArray,
    animations
  ){
   if (start === end )return;
   const mid = Math.floor((start + end) / 2);


   mergeHelp(auxArray, start, mid, mainArray, animations);
   mergeHelp(auxArray, mid + 1, end, mainArray, animations);
   merge(mainArray, start, mid, end, auxArray, animations)
  }

  function merge(
    mainArray,
    start,
    mid,
    end,
    auxArray,
    animations
  ){

    let k = start;
    let i = start;
    let j = mid + 1;
    
while (i <= mid && j <= end ){

  animations.push([i, j]);
  animations.push([i, j])
 
  if (auxArray[i] <= auxArray[j]){
   animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];

  }else{
    animations.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
  }
  

}

while ( i<= mid){
  animations.push([i, i]);
  animations.push([i, i]);

  animations.push([k, auxArray[i]]);
  mainArray[k++] = auxArray[i++];
}
while ( j<= end){
  animations.push([j, j]);
  animations.push([j, j]);

  animations.push([k, auxArray[j]]);

    mainArray[k++] = auxArray[j++];

}


  }