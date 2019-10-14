import React, {useState} from "react";
import {Route, Link} from "react-router-dom"

import styled from 'styled-components'
//can't use a Link in styled-components, have to wrap it
const StyledNavie = styled.div`
    color: white;
    backgroundColor: #323232;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`


function Navie(props) {
    let id = useState([]);
    id = props.match.params.id;

    const simplify = props.match.params;
    console.log(simplify)

    return(
  
       <StyledNavie>
            <Link to={`/https://www.apple.com/${id}`}>
       {simplify.title}</Link>
       </StyledNavie>
    )
}


export default Navie