//DuplicateArrays

let cities =['Agra' , 'Delhi' , 'Nellai' , 'Chennai' , 'Madurai' , 'Nellai' , 'Coutrallam' , 'Coimbatore' , 'Chennai'];
let newcities =[...new Set(cities)];
newcities.forEach(data=>console.log(data));  //In these Arrow function and ForEach method are used.