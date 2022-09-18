// [Studio Ghibli API](https://ghibliapi.herokuapp.com)
// const Base_url = https://ghibliapi.herokuapp.com/
// const fetchPeople = () => {}




const getPeople = (paramName) => {
    let url = `https://ghibliapi.herokuapp.com/people`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)


    //Populate the option values in the Select drop down list
    const selectAPerson = document.querySelector('.selectAPerson')
    for(oneData of data){
        let option = document.createElement('option')
        option.textContent = oneData.name
        option.value = oneData.name
        option.id = oneData.id
    selectAPerson.append(option)
    }

   //captures selected value (name) and then extract name, id, age, eye color and hair color values from data (array of objects)
    selectAPerson.addEventListener('change', () => {

        if(document.querySelector(".err1")){
            document.querySelector(".err1").remove() 
        }
        const thisSelection = `${selectAPerson.value}`
        //console.log("this selection = ", thisSelection)


        const index = data.findIndex(person => person.name === thisSelection);
        // console.log(index)
        // console.log(data[index].name)
        // console.log(data[index].id)
        console.log("age =", data[index].age)
        // console.log(data[index].eye_color)
        // console.log(data[index].hair_color)
        
        //select div for person info and create 1 h4 tag for header,and 3 p tagsf or each data item
        const addInfo = document.querySelector('#info')  //div in html doc
        const headerInfo = document.createElement('h4')  //header with selected name
        const pInfo1 = document.createElement('p')   //p tag for age
        const pInfo2 = document.createElement('p')   //p tag for eye color
        const pInfo3 = document.createElement('p')   //p tag for hair color

        //add the data values to the h4 tag and 3 p tags
        headerInfo.textContent = data[index].name
        pInfo1.textContent = data[index].age
        //console.log("pInfo1= ", pInfo1)
        //addInfo.append(pInfo1)
        pInfo2.textContent = data[index].eye_color
        // addInfo.append(pInfo2)
        pInfo3.textContent = data[index].hair_color
        // addInfo.append(pInfo3)
        addInfo.innerHTML = ""
        addInfo.append(headerInfo, pInfo1, pInfo2, pInfo3)

  

    })  //end of event listener that is listening for changes in the Select element 


        //***   add event listener to shoutOutForm ****
        const shoutOutForm = document.querySelector('.shoutout_Form') //form for shoutout

        shoutOutForm.addEventListener(('submit'), (event) => {
        event.preventDefault()
        if(document.querySelector(".err2")){
            document.querySelector(".err2").remove() 
        }
        const thisShoutOut = event.target.shoutout.value
        const addPersonSection = document.querySelector('.addPerson_section')
        const shoutOutSection= document.querySelector('.shoutOuts_section')
        
        
        if(selectAPerson.value === "") {
            let msgNoneSelected = document.createElement('p')
            msgNoneSelected.innerHTML = "Please Select a Person"
            msgNoneSelected.setAttribute("style","font-size: 13px; color: red")
            msgNoneSelected.classList.add('err1')
            addPersonSection.append(msgNoneSelected)

        }
        if(thisShoutOut === "") {
            let msgNothingEntered = document.createElement('p')
            msgNothingEntered.innerHTML = `Please add a shoutout for ${selectAPerson.value}`
            msgNothingEntered.setAttribute ("style","font-size: 13px; color: red")
            addPersonSection.append(msgNothingEntered)
            msgNothingEntered.classList.add('err2')
        } else {
        
              //Select shoutOutForm, create Li element, assign value of selected name to variable goodName
        //Create strong element, and textNote to apply to goodName
        const shoutList = document.querySelector('.shoutList') //ul for shoutout line items in html doc
        let shoutLi = document.createElement('li')   //li tag for shoutout text
       
        let goodName = selectAPerson.value + ": "
        // const strongName = document.createElement('strong')
        // const strongTextNode = document.createTextNode(goodName);
        // strongName.appendChild(strongTextNode)
        // shoutList.appendChild(strongName)

           //console.log("thisShoutOut = ", thisShoutOut)
        // let goodName = data[index].name
        shoutLi.innerHTML = `<strong>${goodName}</strong> ${thisShoutOut}`
        // console.log ('goodName = ', goodName)
        shoutList.append(shoutLi)
        }

        

        // resetButton.setAttribute("id", "#reset-shoutouts");
        // resetButton.type = "submit"
        // resetButton.innerText = "Remove Shoutouts";
        // <resetButton.innerHTML = `<input type="reset" value="Reset"/>`
        // <input type="submit" value="Submit"></input>
  
     })
    const addPersonSection = document.querySelector('.addPerson_section')
     const shoutList = document.querySelector('.shoutList') 
     const resetButton = document.createElement('button')

     resetButton.setAttribute('id', 'reset-shoutouts')
     resetButton.type = "submit"
     resetButton.innerText = "Remove Shoutouts";
     resetButton.style.marginLeft = "34em"
     addPersonSection.append(resetButton)
     
     resetButton.addEventListener(('click'), (event) => {
        shoutList.remove()
       
    })
    

 })  // end of 2nd .then promise statement

.catch((error) => console.log(error))


}  // end of fetch call

getPeople()  //calling the getPeople function that contains the fetch call



  
 