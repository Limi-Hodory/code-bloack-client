import {useEffect, useState, useRef} from 'react';
import {io} from 'socket.io-client';
import "./CodeBlock.css";
import Editor from "./Editor"
import hljs from "highlight.js";

function CodeBlock(props){
    const [code, setCode] = useState(`const variable = 'raw';
        let h = 2;
        const obj = {a:1, name:"abc"};
    `);
    const [clientSocket, setClientSocket] = useState();
    const [isDisabled, setIsDisabled] = useState(false);   
    
    
    // useEffect ( function, [state1, state2..])
    // when  state change then useEffect runs
    useEffect( ()=>{
        
        // login to server 
        const s = io(`${process.env.REACT_APP_SERVER}`);
        s.on("clientwritecode", onRead)
        s.on("clientMode", onClientMode)
        s.emit("login", props.codeBlock.code);
        console.log('calling socketserver');
        setClientSocket(s);
    }, [])

    function onClientMode(message){
        console.log(message);
        if(message === "readonly"){
            setIsDisabled(true);
        }else if(message === "readwrite"){
            setIsDisabled(false);
        }
    }
    function onRead(data){
        setCode(data);
    }

    function onWrite(text){
        setCode(text);
        clientSocket.emit("writecode", text);
    }

    return(
        <div className="codeEditor-container"> 
            <h3>{props.codeBlock.code}</h3>
           <Editor code={code} onWrite={onWrite} isDisabled={isDisabled}/> 
        </div>
    );

}
export default CodeBlock;