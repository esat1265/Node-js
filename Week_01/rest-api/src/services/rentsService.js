import rentRepository from '../data/rentRepository.js'


const getRentList = () => {
    const list = rentRepository.getRentList();
    return list;
};

const addRent = (pRent)=>{
 const movie = rentRepository.createRent(pRent)
 return movie;
};


export default {getRentList, addRent}