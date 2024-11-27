//1st 

// function isPalindrome(){
//     let input=prompt("Enter a string:")
//     let checking=input.split("").reverse().join("")
//     if(input==checking){
//         console.log("The string " +input+ " reads the same forwards and backwards.")
//     }
//     else{
//         console.log("The string " +input+ " does not reads the same forwards and backwards.")
//     } 
// }
// isPalindrome()

//2nd 

// let input=10;
// for(i=0;i<input;i++){
//    if(i%1==0 && i%2!=0 && i%i==0 && i%3!=0){
//        console.log("These are prime number:" +i)
//    }
// }
// if(input<0 || input==1){
//     console.log("There is no prime number")
// }


//3rd 

// let input=[3, 6, 9, 12]
// all=[]
// adding=0
// for(let val of input ){
//     if(val%2==0){
//         all.push(val)
//           console.log("The numbers are even:" +val)
//         }
//         else if(val%2!=0){
//             console.log("The numbers are odd:" +val)
//         }
//     }
// all.forEach(x=>adding+=x)
// console.log("The even values are:" +all)
// console.log("After adding even numbers:" +adding)

//4th

// let input=[100, "zebra", 99, "lion", 1]
// all=[]
// result=[]
// for( let val of input){
//     if(typeof(val)=='string'){
//         all.push(val)
//     }
//     else{
//         result.push(val)
//     }
// }
// console.log("The sorted values: "+all.sort((x,y)=>x.localeCompare(y)))
// console.log("The sorted values: " +result.sort((a,b)=>a-b))




// object task

// store=[];
// marks_total=[];
// function adding(name,subject,marks){
//     unique=Math.floor(Math.random() * 1000)
//     if(typeof(marks)==='String'){
//         console.log("Invalid datatype")
//     }
//     if(subject.length!==marks.length){
//         console.log("Mismatch marks and subject length")
//     }
//     else{
//     store.push({unique,name,subject,marks})
//     marks_total.push(marks)
//     console.log("added succesfully")
//     }
// }
// adding("Anu",["Maths","science"],[90,90])
// adding("Priya",["Maths","science","social"],[90,50,77])
// adding("Hema",["Maths","science","English"],[80,90,55])
// adding("Deva",["Maths","science"],[90,90])
// adding("Mruthula",["Maths","science"],[90])
// function display(){
// console.log(store)
// }
// display()
// function update(subject_update,marks_update){
//     result=""
//     idToUpdate=prompt("Enter ID to update:")
//     for(i=0;i<store.length;i++){
//         if(store[i].unique==idToUpdate){
//             result=store[i].unique
//         if(typeof(marks_update)==='String'){
//         console.log("Invalid datatype")
//         }
//         if(subject_update.length!==marks_update.length){
//             console.log("Mismatch marks and subject length")
//         }
//         else{
//         store[i].subject=subject_update
//         store[i].marks=marks_update
//         console.log("Updated succesfully")
//         console.log(store)
//         }
//         }
//     }
//     if(result!=idToUpdate){
//         console.log("Not match with the ID")
//     }
// }
// update(["History"],[97])
// function deletion(){
//     check_id=""
//     idToDelete=prompt("Enter a ID to delete:")
//     for(j=0;j<store.length;j++){
//         if(store[j].unique==idToDelete){
//             check_id=store[j].unique
//             store.splice(j,1)
//         }
//     }
//     if(check_id==idToDelete){
            
//             console.log("Deleted successfully:" +idToUpdate)
//             console.log(store)
//     }
//     else{
//         console.log("Not match with the id:" +idToUpdate)
//     }
// }
// deletion()




