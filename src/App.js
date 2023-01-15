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
    // loops all items in arr
    const item = arr.find(function(item){
      if(item.id == itemId){
        return true;
      }else{
        return false;
      }
    })
    setSelectedCodeBlock(item)
  }

  // returns a CodeBlock component
  if(selectedCodeBlock.id !== 0){
    return (
      <div className="App">
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
  

 
}

export default App;
