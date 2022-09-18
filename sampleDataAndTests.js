const data = [
    {id: '267649ac-fb1b-11eb-9a03-0242ac130003', 
     name: 'Haku', 
     gender: 'Male', 
     age: '12', 
     eye_color: 'Green',
    hair_color: 'Green'},
    {id: 'fe93adf2-2f3a-4ec4-9f68-5422f1b87c01', 
     name: 'Pazu', 
     gender: 'Male', 
     age: '13', 
     eye_color: 'Black',
    hair_color: 'Orange'},
    {id: '598f7048-74ff-41e0-92ef-87dc1ad980a9', 
     name: 'Lusheeta Toel Ul Laputa', 
     gender: 'Female', 
     age: '13', 
     eye_color: 'Black',
    hair_color: 'Yellow'},
    {id: '3bc0b41e-3569-4d20-ae73-2da329bf0786', 
     name: 'Captain Dola', 
     gender: 'Female', 
     age: '60', 
     eye_color: 'Black',
    hair_color: 'Blue'},
    {id: 'abe886e7-30c8-4c19-aaa5-d666e60d14de', 
     name: 'Romska Palo Ul Laputa', 
     gender: 'Male', 
     age: '33', 
     eye_color: 'Black',
    hair_color: 'Brown'} 
    ]
    
    
//this works - tested in replit
// const index = data.findIndex(person => person.name === "Haku");
// console.log(index)
// console.log(data[index].id) 

// this also works - tested in replit
// const index = data((obj) => obj.name).indexOf(“Haku)
// console.log(index)
    
    
// const index = data.findIndex(person => person.name === "Haku");
// console.log(index)
// console.log(data[index].id)
    
  

    //extracts more data
const index = data.findIndex(person => person.name === "Haku");
console.log(index)
console.log(data[index].name)
console.log(data[index].id)
console.log(data[index].age)
console.log(data[index].eye_color)
console.log(data[index].hair_color)