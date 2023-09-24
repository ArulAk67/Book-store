import React, { useState } from "react";
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';
function Header(){
    const[val,setVal]=useState();
    return<div>
      <AppBar sx={{backgroundColor:"#1DAB94"}}position='sticky'>
        <Toolbar>
            <NavLink to="/" style={{color :"white"}}>
            <Typography>
                <MenuBookIcon/>
            </Typography>
            </NavLink>
            <Tabs 
               sx={{ml:"auto"}}
                textColor="inherit" 
                indicatorColor="secondary" 
                value={val} 
                onChange={(e,val) => setVal(val)}
            >
                <Tab LinkComponent={NavLink} to="/add" label='Add Book'/>
                <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                <Tab LinkComponent={NavLink} to="/about" label='About us'/>
            </Tabs>
        </Toolbar>
        
      </AppBar>
    </div>
};
export default Header;