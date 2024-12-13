const form = document.querySelector('form')


// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)



form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const BMI = (weight / ((height*height)/1000)).toFixed(2)

    if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter valid height ${height}`;
}
else if(weight === '' || weight < 0 || isNaN(weight)){
   results.innerHTML = `Please enter valid weight ${weight}`;
}

else{
    const BMI = (weight / ((height*height)/1000)).toFixed(2)
  //Show the Result

  results.innerHTML = `<span>${BMI}</span>`
}


// ____________________________________________________

if(BMI < 18.6){
    results.innerHTML =  `Under Wight:${BMI}`;
}
else if(BMI > 18.6 && BMI < 24.9){
    results.innerHTML =  `Normal Range:${BMI}`;
}
else{
    results.innerHTML = `Over Weight:${BMI}`;
}

})