
//-------------> Task 1 <--------------//

let value1=10; //assign the value 
let value2=5;  //assign the value 
value1+=value2; // value1 and value2 to plus and assign in value1 variable

value2--; // value2 is decreament from 5 to 4

let value3=value1*value2; //value1 and value2 in maltiplay operation and asign in new value3
value1/=2;  // value1 divided by 2 and assign in again
value3%=value1 // value 

console.log('final vlues', value1, value2, value2) // thier print the final result


//-------------> Task 2 <--------------//

  let object=[200,100,3,43,2]
  console.log('array:',object)
function Sorting(array){
    array.sort((x,y)=>x-y)
    console.log('Sorted array:',array)
    
}

function push_inArray(array, item){
    array.push(item)
    console.log('Push element:',array)
    
}

function pop_fromArray(array){
    array.pop()
    console.log('pop element:',array)
    
}

function Searching_inArray(array, searchvValue){
    if( array.includes(searchvValue)){
        return array.indexOf(searchvValue)
    } else{
       return console.log('not found')
    }
   
     
}
Sorting(object)
push_inArray(object, 3)
pop_fromArray(object)

searchvalue=Searching_inArray(object, 3)
console.log('Search value index:',searchvalue)


//-------------> Task 3 <--------------//
let mousechange=document.getElementsByClassName('hi')
let box=document.getElementById('box')

mousechange[0].addEventListener('mouseover', function(){
box.style.backgroundColor='black'
box.style.color='white'
mousechange[1].innerText='Mouseover events'
mousechange[1].style.color='green'


})

mousechange[0].addEventListener('mouseout', function(){
box.style.backgroundColor='white'
box.style.color='black'
mousechange[1].innerText='Mouseout events'
mousechange[1].style.color='red'
})

//-------------> Task 4 <--------------//

// let form = document.getElementById('form');

function check(event) {

    // event.preventDefault();  

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value; 

   
    if (name === '' || age === '') {
        alert('Fill the fields');
        return;  
    }

   
    age = parseInt(age);


    if (isNaN(age)) {
        alert('Enter a valid number');
        return;  
    }

    alert('Form submitted successfully');
}
