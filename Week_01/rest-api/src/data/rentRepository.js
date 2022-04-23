let rentList = [{
    movieId: 10002,
    duration: 10,
    person: "Hi Coders"
 },{
    movieId: 10004,
    duration: 7,
    person: "Hi me"
 },{
    movieId: 10006,
    duration: 5,
    person: "Hi you"
 }];

 const getRentList = () => {
    return rentList;
  };
  
  const createRentMovie=(pRent)=>{
    rentList.push(pMovie);
     return pRent;
  };

  export default {getRentList, createRentMovie}