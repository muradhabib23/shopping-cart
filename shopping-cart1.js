//Targeting the elements by their ids
const plus1= document.getElementById('plus-button1')
const minus1= document.getElementById('minus-button1')
const plus2= document.getElementById('plus-button2')
const minus2= document.getElementById('minus-button2')
const input1= document.getElementById('input1')
const input2= document.getElementById('input2')
const phonePrice= document.getElementById('phone-price')
const casePrice= document.getElementById('case-price')
const subTotal= document.getElementById('subtotal')
const total= document.getElementById('total')
const tax = document.getElementById('tax')


const price1=parseInt(phonePrice.innerText)
const price2=parseInt(casePrice.innerText)

// First rendering
renderData()

// Effects of button pressing
plus1.addEventListener('click', (e) => {
    plusButton(input1)
})

minus1.addEventListener('click', (e) => {
    minusButton(input1)
})

plus2.addEventListener('click', (e) => {
    plusButton(input2)
})

minus2.addEventListener('click', (e) => {
    minusButton(input2)
})

// Effects of writing values 
input1.addEventListener('input', (e) => {
    e.preventDefault()
    renderData()
})
input2.addEventListener('input', (e) => {
    e.preventDefault()
    renderData()
})

// Effects for the cross button
document.querySelector('#remove-1').addEventListener('click', (e)=>{
   e.target.parentElement.parentElement.parentElement.parentElement.innerHTML=''
   input1.value=0
    renderData()
})
document.querySelector('#remove-2').addEventListener('click', (e)=>{
    e.target.parentElement.parentElement.parentElement.parentElement.innerHTML=''
    input2.value=0
     renderData()
 })