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
        const thisSelection = `${selectAPerson.value}`
        console.log("this selection = ", thisSelection)
  

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

        const shoutOutForm = document.querySelector('.shoutout_Form') //ul for shoutout
        const shoutList = document.querySelector('.shoutList') //ul for shoutout line items in html doc
        let goodName =data[index].name + ": "
        let shoutLi = document.createElement('li')   //li tag for shoutout text
        const strongName = document.createElement('strong')
        const strongTextNode = document.createTextNode(goodName);
        
        shoutOutForm.addEventListener(('submit'), (event) => {
        event.preventDefault()
        const thisShoutOut = event.target.shoutout.value
        //console.log("thisShoutOut = ", thisShoutOut)
        // let goodName = data[index].name
        strongName.appendChild(strongTextNode)
        // console.log ('goodName = ', goodName)
        shoutList.appendChild(strongName)

    //     var x = document.createElement("STRONG");
    //     var t = document.createTextNode("Some strong text");
    //     x.appendChild(t);
    //     document.body.appendChild(x);
    //   
        shoutLi.textContent = thisShoutOut
        shoutList.append(shoutLi)
        })


    })  //end of event listener that is listening for changes in the Select element           

 })  // end of 2nd .then promise statement

.catch((error) => console.log(error))


}  // end of fetch call

getPeople()  //calling the getPeople function that contains the fetch call



  
 