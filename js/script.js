let form = document.querySelector('#form')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let address = document.getElementById('address')
let pinCode = document.getElementById('pinCode')
let gender = document.formSpec.gender
let food = formSpec.querySelectorAll('input[type="checkbox"]')
let state = document.getElementById('state')
let country = document.getElementById('country')
var title = document.getElementById('title');
// let submit = document.getElementById('submit')

let allDetails = []

function validateInput(){
    let firstNameVal = firstName.value.trim()
    let lastNameVal = lastName.value.trim()
    let addressVal = address.value.trim()
    let pinCodeVal = pinCode.value.trim()
    let genderVal = gender.value
    let stateVal = state.value.trim()
    let countryVal = country.value.trim()
    if(firstNameVal ===''){
        alert('First name is not valid')
        firstName.focus()
    }else if(lastNameVal ===''){
        alert('Last name is not valid')
        lastName.focus()
    }else if(addressVal ===''){
        alert('Address is not valid')
        address.focus()
    }else if(pinCodeVal ===''){
        alert('Pincode is not valid')
        pinCode.focus()
    }else if(genderVal ===''){
        alert('Gender is not valid')
    }else if(stateVal ===''){
        alert('State is not valid')
        state.focus()
    }else if(countryVal ===''){
        alert('Country is not valid')
        country.focus()
    }else{
        foodValidate()
    }

    let obj= {
        firstName : firstNameVal,
        lastName : lastNameVal,
        address : addressVal,
        pinCode : pinCodeVal,
        gender : genderVal,
        food : [selectedItems.join(', ')],
        state : stateVal,
        country : countryVal,
    }
    allDetails.push(obj)
}

let selectedItems = [];

function foodValidate(){
 food.forEach(item => { 
            if (item.checked) {
                selectedItems.push(item.value);
            }
        });
        if (selectedItems.length <= 2) { 
            alert("Pick Minimum 3 Favourite Foods");
            selectedItems.length = 0
        }
    }

    let addDetailsToTable = (data=>{
        let tBody = document.querySelector('tbody')
      tBody.innerHTML = data.map((val, ind)=>
            
      `
      <tr>
          <td>${ind+1}</td>
          <td>${val.firstName}</td>
          <td>${val.lastName}</td>
          <td>${val.address}</td>
          <td>${val.pinCode}</td>
          <td>${val.gender}</td>
          <td>${val.food}</td>
          <td>${val.state}</td>
          <td>${val.country}</td>
         
      </tr>
      `
  ).join("")
    })
 
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(firstName.value && lastName.value && address.value && pinCode.value && gender.value && state.value && country.value){
            validateInput()
            addDetailsToTable(allDetails)
            form.reset() 
            selectedItems.length = 0
        }
    })