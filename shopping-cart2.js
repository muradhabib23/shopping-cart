// Plus button
function plusButton(inp){
    let value= parseInt(inp.value)
    value+=1
    inp.value=value
    renderData()
}

// Minus button
function minusButton(inp){
    let value= parseInt(inp.value)
    value-=1
    inp.value=value
    renderData()
}

// Get and Set Phone Price
function getSetPhonePrice(input){
       const price= price1*parseInt(input1.value)
       if(price){
        phonePrice.innerText=price
        return price
    }
    else{
        phonePrice.innerText=0
        input1.value=0
        return 0
    }
}

// Get and Set Case Price
function getSetCasePrice(){
        const price= price2*parseInt(input2.value)
        if(price){
            casePrice.innerText=price
            return price
        }
        else{
            casePrice.innerText=0
            input2.value=0
            return 0
        }
}

// Get the string form of the number with comma
function getString(value){
if(value>999){
    var valueS=''+value
    valueS=valueS.split('')
    var len=valueS.length
    if(valueS.includes('.')){
       for(var i=len; i>0; i--){
           if((valueS[i]==='.' || valueS[i]===',')&& valueS[i-4]){
               valueS.splice(i-3, 0,',')
           }
       }     

    }else if(!valueS.includes('.')){
        valueS.splice(len-3,0,',')
        for(var i=len; i>0; i--){
            if(valueS[i]===',' && valueS[i-4]){
                valueS.splice(i-3, 0,',')
            }
        } 
    }
    return valueS.join('')
}else{
    return value
}
}


// Calculating the tax
function getTax(subtotal){
    if(subtotal>2000){
        return subtotal*0.02   // 2% tax if total is more than $2000
    }else{
        return 0
    }
}
// Disabling Minus Button at the edge
function disabledButton(){

    if(input2.value==='0'){
        minus2.setAttribute('disabled','')
    }else{
        minus2.removeAttribute('disabled')
    }

    if(input1.value==='0'){
        minus1.setAttribute('disabled','')
    }else{
        minus1.removeAttribute('disabled')
    }
}

// Render all Information
function renderData(){
    const phonePrice= getSetPhonePrice()
    const casePrice= getSetCasePrice()
    disabledButton()
    const subtotal= phonePrice+casePrice
    subTotal.innerText= getString(subtotal)
    const Tax= getTax(subtotal)
    tax.innerText=Tax.toFixed(2)
    total.innerText= getString(subtotal+Tax)

}