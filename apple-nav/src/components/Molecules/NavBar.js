import React, {useState} from "react";
import {Route, Link} from "react-router-dom"
import styled from 'styled-components'

import {navigationTabs} from "../../data"

import Navie from "../Atoms/Navie"



const StyledNavBar = styled.div`
    color: white;
    backgroundColor: #323232;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%
`


function NavBar() {

    const [savedList] = useState( [navigationTabs] );

    console.log(savedList)

    return(
  
        <StyledNavBar>
           { savedList.map(item => <Route  path="/https://www.apple.com/:id" render={props => <Navie {...props}/>}/>)}
        
        </StyledNavBar>
    )
}


export default NavBar

//this one is the issue, problem with the return - maybe I can't create multiple routes in this way? issue with referring to item but then using props maybe (brain is kinda burn out on the issue right now, stand up time)