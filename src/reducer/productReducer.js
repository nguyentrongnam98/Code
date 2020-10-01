
const initialState = [
    {
        id:1,
        name:"Iphone 6 plus",
        price:400,
        status:true
    },
    {
        id:2,
        name:"Iphone 7 plus",
        price:500,
        status:false
    },
    {
        id:3,
        name:"Iphone 8 plus",
        price:600,
        status:true
    }
];

const productReducer = (state=initialState,action)=>{
  switch(action.type){
      default: 
         return [...state];
  }
}

export default productReducer;