

//1. The table with id="age-table".

const table = document.querySelector('#age-table');
table.style.backgroundColor = 'aquamarine';
console.log(table)

//2. All label elements inside that table (there should be 3 of them).
const childrentabel = table.querySelectorAll('label');
[...childrentabel].forEach(function(e){
    //e.style.transform = 'scale(0.5)';
    e.style.backgroundColor = 'red';
});
console.log(childrentabel);

// 3. The first td in that table (with the word “Age”). 
const td = table.querySelectorAll('td');
 [...td].forEach(function(e){
if (e.textContent == 'Age:'){
    e.style.backgroundColor = 'gray';
    // console.log(e);
}});
// or
//const td = table.firstElementChild.firstElementChild.firstElementChild;
// td.style.backgroundColor = 'gray';

// 4. The form with name="search". 
const formsearch =document.body.querySelectorAll('form');
console.log(formsearch);
[...formsearch].forEach(function(e){
if (e.getAttribute('name') == 'search'){
    e.style.backgroundColor = 'rgb(11, 224, 82)';
}});
//or
// const formsearch = document.body.firstElementChild
// console.log(formsearch);

// 5. The first input in that form.
const inputformsearch = document.body.firstElementChild.querySelectorAll('input');
console.log(inputformsearch);
[...inputformsearch].forEach(function(e,i){
if (i == 0){
    e.style.backgroundColor = 'rgb(255, 24, 182)';
}});
//or
// const inputformsearch = document.body.firstElementChild.firstElementChild.firstElementChild
// console.log(inputformsearch);

// 6. The last input in that form.
const input2formsearch = document.body.firstElementChild.lastElementChild;
input2formsearch.style.backgroundColor = 'rgb(205, 204, 202)';


