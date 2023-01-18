import React from 'react';

function Header(props) {
    return (<>
        <h1>Noughts and Crosses</h1>
        <button className='reset' onClick={props.reset}>Reset</button>
    </>
    )
}

export default Header;