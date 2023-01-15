import './Lobby.css'

function Lobby(props) { 
    return (
        <div>
            <h3>Choose code block</h3>
            <ul>
                {props.items.map((item) => {
                    return <li className='lobby-item' key={item.id} onClick={() => props.handleClick(item.id)}>{item.code}</li>
                })}
            </ul>
        </div>
    );
}


export default Lobby;