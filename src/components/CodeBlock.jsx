import {useEffect, useState, useRef} from 'react';
import {io} from 'socket.io-client';
import "./CodeBlock.css";
import Editor from "./Editor"

//import Highlight from 'react-highlight';
//import "highlight.js/styles/github.css";
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
    // when there is not state: [] then useEffect runs only once
    useEffect( ()=>{
        
        // login to server (gets the path for server)
        const s = io(`ws://localhost:${process.env.PORT}`);
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


        // <div> 
        //     <p>{props.codeBlock.code}</p>
        //     <div className='parentEdit'>
        //         <textarea disabled={isDisabled} style={{zIndex:textzIndex}} autoFocus id="codeEdit" cols="30" rows="10" onChange={onWrite} value={code}></textarea>

        //         <pre>
        //             <code  className="language-javascript code-block-text" onClick={onCodeWrite} ref={codeRef}>
        //             {code}
        //             </code>
        //         </pre>
        //     </div>
            
        // </div>
    );

}
export default CodeBlock;