// const container=document.querySelector('.container')
// const seats=document.querySelectorAll('row.seat:not(.occupied)');
// const count= document.getElementById('count');
// const total= document.getElementById('total');
// const movieSelect=document.getElementById('movie');
// let tiketPrice = movieSelect.value

// //update total and count
// function updateSelectedCount(){
//     const selectedSeats=document.querySelectorAll('.row .seat.selected');
//     const selectedSeatsCount=selectedSeats.length;

//     count.innerText = selectedSeatsCount;
//     total.innerText = selectedSeatsCount * tiketPrice;
    
// }

// //movie select event
// movieSelect.addEventListener('change', (e) =>{
//     tiketPrice= e.target.value;
//     updateSelectedCount();
// })

// container.addEventListener('click', e => {
// if(e.target.classList.contains('seat') &&
// !e.target.classList.contains('occupied')){
//     console.log(e.target);
// }
// e.target.classList.toggle('selected')
// updateSelectedCount();
// });




const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat.selected');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');
let tiketPrice = movieSelect.value; 

//total and count
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount=selectedSeats.length

    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*tiketPrice
}


container.addEventListener('click', e=> {
   if( e.target.classList.contains('seat') &&
   !e.target.classList.contains('occupide')){
       console.log(e.target)
   }
   e.target.classList.toggle('selected')
   updateSelectedCount();
});