import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Lobby from './components/Lobby';
import CodeBlock from './components/CodeBlock';

function App() {
  const [selectedCodeBlock, setSelectedCodeBlock] = useState({id:0, code:""});
  const arr = [
    {id: 1, code: "Asyn case"},
    {id: 2, code: "flow control"},
    {id: 3, code: "function case"},
    {id: 4, code: "create case"},
  ]
  function handleClick(itemId){
    // find loops all items in arr
    const item = arr.find(function(item){
      if(item.id == itemId){
        return true;
      }else{
        return false;
      }
      // or return item.id == itemId;
    })
    // or const item = arr.find(item => item.id == itemId);
    setSelectedCodeBlock(item)
  }

  
  // returns a component
  if(selectedCodeBlock.id !== 0){
    return (
      <div className="App">
        {/* <h3>App main</h3> */}
        <CodeBlock codeBlock={selectedCodeBlock} />
      </div>
    )
  }else{
    return  (
      <div className="App">
        <Lobby items={arr} mode={"test"} handleClick={handleClick}/>
      </div>
    )
  }
  
  // return (
  //   <div className="App">
  //       <h3>App main</h3>

  //       {/* Lobby is a component and it gets parameters and functions*/}
  // //       {selectedCodeBlock.id !== 0 && <Lobby items={arr} mode={"test"} handleClick={handleClick}/>}
  //       {codeBlock.length > 0 && <CodeBlock codeBlock={codeBlock}/>}
  //   </div>
  // );
 
}

export default App;
