import React from 'react';

const Box = ({value , onClick}) =>{

    const symbol = value ? `squares ${value}` : `squares` ; 



return (
    <button className={symbol} onClick={onClick}>{value}</button>
)
}
export default Box;