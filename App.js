import React,{useState} from 'react';
import './App.css';
import List from './List';

function App() {
  let [items,setitem]=useState('');
  let [list,editlist]=useState([]);
  const add=(event)=>{
   editlist((previousValues)=>[...previousValues,items]);
     setitem('');
  }
  const deleteitems=(id)=>{
    console.log('deleted');
    editlist((olditems)=>{
      return olditems.filter((arrelem,index)=>{
        return index!==id;
      });
    })
  }
  return (
   <>
    <div className='main_div'>
     <div className='Center_div'>
      <br/>
      <h1 >ToDo List</h1><br/>
      <input type='text' placeholder='Add items' value={items} onChange={(event)=>setitem(event.target.value)}   />
      <button type='submit' onClick={add}>+</button>
       {list.map((val,index)=>(<List data={val} key={index} id={index} onSelect={deleteitems} />))}
     </div>
    </div>
   </>
  )
}

export default App;
