import React from 'react';

const emp = (props) =>{
    //console.log(props);
    return (
        <tr width="50%">
            <td>{props.children}</td>
            <td>{props.salary}</td>
            <td><button onClick={props.deleteEvent}>DELETE</button></td>
        </tr>
    )
};


export default emp;