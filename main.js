// [Studio Ghibli API](https://ghibliapi.herokuapp.com)
// const Base_url = https://ghibliapi.herokuapp.com/
// const fetchPeople = () => {}




const getPeople = (paramName) => {
    let url = 'https://ghibliapi.herokuapp.com/people'
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
    selectAPerson.append(option)
    }

    selectAPerson.addEventListener('change', () => {
        const thisSelection = `${selectAPerson.value}`
        console.log("this selection = ", thisSelection)

        
    })

    // const addInfoSection = document.querySelector('.addInfo_section')
    // let pInfo1 = document.createElement('p')
    // pInfo1.textContent = 
    // let pInfo2 = document.createElement('p')
    // let pInfo3 = document.createElement('p')
    // addInfoSection

    


    // const selectedPerson = data.find(person => person.name === paramName);


    })


.catch((error) => console.log(error))

}

getPeople()
 //Populate the option values in the Select drop down list
//  const selectAPerson = document.querySelector('.selectAPerson')
 
// let thisOption = document.querySelector('.this_option')
// selectAPerson.addEventListener('change', () => {
//     const thisSelection = `${selectAPerson.value}`
//     console.log("this selection = ", thisSelection)
// })

// const shoutOutForm = document.querySelector('.shoutout_Form')

// shoutOutForm.addEventListener(('submit'), (event) => {
//     event.preventDefault()
//     const namePick = event.target.shoutout.value
//     console.log("namePick = ", namePick)
// })





//NOTES

//Example of a fetch call inside of an anonymous function
// const funcName = (param) => {
    // let url = ('api url')
   // fetch statement
   // }
//calls function
//funcName()

// An `h4` with the person's name in the info section of the page. (e.g. Name: Isis)
// A `p` with the person's age. (e.g. Age: 22)
// A `p` with person's eye color. (e.g. Eyes: green)
// A `p` with the persons hair color (e.g Hair Color: brown)

// let thisName = ""
// function getName(value){
// thisName = value
// console.log(thisName)
// }

    // let name = data[0].name
    // console.log("name data", name)
    // console.log(fetchPeople())

