import React,{useState} from 'react';
import Context from './Context';
// Provider sẽ chứa các dữ liệu chúng ta cần trong state của nó 
// và nó sẽ gói tất cả nội dung lại
const Provider = props=>{
    const [mission,setMission] = useState({
        name:'Nguyen Nam',
        age:22,
        agent:'007',
        accept:'Not accepted'
    })
    return(
        <div>
           <Context.Provider value={{
               data:mission,
               setInfor:()=>{
                 setMission({...mission,accept:'Success'})
               }
           }}>
             {props.children}
           </Context.Provider>
        </div>
    )
}
export default Provider;