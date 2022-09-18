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
    })

    const index = data.findIndex(person => person.name === "Haku");
    console.log(index)
    console.log(data[index].name)
    console.log(data[index].id)
    console.log(data[index].age)
    console.log(data[index].eye_color)
    console.log(data[index].hair_color)

 })  // end of 2nd .then

.catch((error) => console.log(error))


}  // end of fetch call

getPeople()  //calling the getPeople function that contains the fetch call




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

// const selectAPerson = document.querySelector('.selectAPerson')
// let url = `https://ghibliapi.herokuapp.com/people`

// selectAPerson.addEventListener('change', () => {
//     const thisSelection = `${selectAPerson.value}`
//     console.log("this selection = ", thisSelection)


// })
// selectAPerson.addEventListener('change', () => {
//     const thisSelection = `${selectAPerson.name}`
//     const thisID = thisSelection
//     console.log("this selection = ", thisSelection)
//     // fetch(`${url}/${thisID}`)
    // .then((response) => response.json())
    // .then((data2) => {
    //     console.log(data2)
    //     // function getNameInfo(data2) {
    //     //     return data2.find(({name}) => name === `${thisSelection}`)
    //     //   }
          
    // })

    // .catch((error) => console.log(error))
// })
// function findPinkElephantsByTimestreet(songs) {
//     return exampleSongData.find(({title}) => title === "Pink Elephants")
//   }
  



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



            // const addInfoSection = document.querySelector('.addInfo_section')
            //     const pInfo1 = document.createElement('p')
            //     pInfo1.textContent = data[index].age
            //     addInfoSection.append(pInfo1)
            //     const pInfo2 = document.createElement('p')
            //     pInfo2.textContent = data[index].eye_color
            //     addInfoSection.append(pInfo2)
            //     const pInfo3 = document.createElement('p')
            //     pInfo1.textContent = data[index].hair_color
            //     addInfoSection.append(pInfo3)
                
            
            //  return ((url) => fetch(url/thisIndex))
            //  .then((response) => response.json())
            //  .then((data2) => {
            //   console.log("data2 = ", data2)
        // })


  
 