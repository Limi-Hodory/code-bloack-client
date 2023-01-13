import './Lobby.css'
// JS func that returns JSX
// JSX is translated to JS code
function Lobby(props) { // props={items:[...], mode:"test"}
    return (
        <div>

            <h3>Choose code block</h3>
            <ul>
                {props.items.map((item) => {
                    return <li className='lobby-item' key={item.id} onClick={() => props.handleClick(item.id)}>{item.code}</li>
                })}
            </ul>

            {/* <ul>
                {props.items.map(function(item) {
                    return <li key={item.id} onC.lick={() => props.handleClick(item.id)}>{item.code}</li>
                })}
            </ul> */}
            {/*
            <hr />
            <div className="lobby-card-list">
                {props.items.map((item)=>{
                    return <div className='lobby-card' key={item.id} onClick={() => props.handleClick(item.id)}>{item.code}</div>
                })}
            </div>
            */}
        </div>
    );
}

// () => console.log("123");
// arr = [1,2,3,4]
// [2,4,6,8] 
/**
 * conat arr2 = [];
 * for(let i = 0; i < arr.length; i++){
 *  arr2.push(arr[i] * 2);
 * }
 * const arr2 = arr.map( function(val){
 *  return val * 2;
 *  }
 * )
 */
export default Lobby;