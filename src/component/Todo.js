import React, { useState } from 'react'

const Todo = () => {
    const[activity ,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
    function addActivity(){
        // setlistData(...listData,activity)
        // setActivity("")
        // console.log(listData) 
        setlistData((listData)=>{
          const updatelist=[...listData , activity] 
          console.log(updatelist)
          setActivity("")
          return updatelist
        })

    }

    function removeActivity(i){
        const updatedListData=listData.filter((elem,id)=>{
          return  i!=id;
        })
        setlistData(updatedListData)
    }

    function removeAll(){
      setlistData([])
    }
  return (
<>
<div className='heading'>
     <h1>Add your task list</h1>
     <input type="text" placeholder='add your activites' value={activity} onChange={(e)=>setActivity(e.target.value
        )}/>

        <button  onClick={addActivity}>add</button> 

        <p className='your-list'>here is  the list of your activities</p> 


        {listData!=[] && listData.map((data,i)=>{
            return (
              <>
              <p key={i}>
                 <div className='btn-div' >{data}
                 <button className='remove-btn' onClick={()=>removeActivity(i)}>remove(-)</button>
                 </div>
               
              </p>
              </>
            )
        })}

       {listData.length>=1 &&  <button className='remove-all-btn' onClick={removeAll}>removeAll</button> }
             
        </div>
</>
)
 
}
export default Todo
