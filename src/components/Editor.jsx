import { useEffect, useState } from 'react'
import './Editor.css';

function Editor(props) {
//   const [code, setCode] = useState("");
  const [inputZIndex, setInputZIndex] = useState(3);
  useEffect(() => {
    window.hljs.highlightAll();
  }, [props.code])

  const f1 = (event) => {
    setInputZIndex(4);
    event.stopPropagation();
  }
  return (
    <div className="Editor">

      <div className="edit-window">
        <div className="input-area">
          <textarea disabled={props.isDisabled} className="textarea" id="input" style={{zIndex:inputZIndex}} autoFocus onChange={(e) => props.onWrite(e.target.value)}></textarea>
          <pre>
            <code id="output" onClick={f1} className="javascript">
              {props.code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Editor;
