import React from 'react';
import * as Algorithms from'../Algorithms/Algorithms.js';
import './AlgorithmVisualizer.css';

export default class AlgorithmVisualizer extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            array: [],

        };

        }

componentDidMount(){
    this.resetArray();

}

resetArray(){
    const array = [];
    for (let i = 0; i < 310; i++){
        array.push(randomIntInterval(5, 675));
    }
    this.setState({array});

}

mergeSort(){
const animations = Algorithms.MergeSort(this.state.array);



for(let i = 0; i < animations.length; i++){
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;

    if(isColorChange){
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? 'red' : 'blueviolet';

        setTimeout (() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;

        }, i * 5)
    } else{
        setTimeout(() => {

            const [barOneIndex, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            barOneStyle.height = `${newHeight}px`;

        }, i * 3)
    }
}

}




bubbleSort(){
    
    const animations = Algorithms.bubbleSort(this.state.array);
    
    for(let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
    
        if(isColorChange){
            const [barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            const color = i % 3 === 0 ? 'red' : 'blueviolet';
    
            setTimeout (() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
    
            }, i * 5)
        } else{
            setTimeout(() => {
    
                const [barOneIndex, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                barOneStyle.height = `${newHeight}px`;
    
            }, i * 3)
        }
    }
}
quickSort(){
    const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
    const sortedArray = Algorithms.quick_sort(this.state.array);

    console.log(arraysMatch(javaScriptSortedArray, sortedArray));
}
selectionSort(){
    const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
    const sortedArray = Algorithms.SelectionSort(this.state.array);

    console.log(arraysMatch(javaScriptSortedArray, sortedArray));
}

insertionSort(){
    const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);
    const sortedArray = Algorithms.InsertionSort(this.state.array);

    console.log(arraysMatch(javaScriptSortedArray, sortedArray));
}

testAlgos(){

    for(let i = 0; i < 100; i++){
        this.resetArray();
        this.bubbleSort();
        this.quickSort();
        this.insertionSort();
        this.selectionSort();
        this.mergeSort();


    }
}

// itterating through array and mapping values to the div with the array-bar class
render(){
    const{array} = this.state;


    return(
        <div className = "array-container">
        {array.map((value, index) =>(

       <div 
       className = "array-bar" 
       key = {index}
       style = {{height: `${value}px`}}
       >
       
       </div>
       ))}
        
        <button onClick = {() =>this.resetArray()}>Get new array</button>
        <button onClick = {() =>this.testAlgos()}>test Algos</button>
        <button onClick = {() =>this.mergeSort()}>Merge Sort</button>
        <button onClick = {() =>this.bubbleSort()}>Bubble Sort</button>
        <button onClick = {() =>this.quickSort()}>Quick Sort</button>
        <button onClick = {() =>this.selectionSort()}>Selection Sort</button>
        <button onClick = {() =>this.insertionSort()}>Insertion Sort</button>
        </div>
    );
}

}


//making the values between 5 and 1000 so the bars can be visible
function randomIntInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

    
}


function arraysMatch(array1, array2){
    if (array1.length !==  array2.length){
        return false;

    }
    for (let i = 0 ; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;

        }
        return true;

    }







}
