import {Button} from 'reactstrap';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MultiSelect from './multi-select';
import Singleselect from './single-select';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CreateSurvey() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownText,setDropdownText]=useState("Select Question Type")
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
      <>
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret style={{background:" #af5f46"}}>
       {dropdownText}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>setDropdownText("Multi select Question")} >Multi Select Question</DropdownItem>
        <DropdownItem onClick={()=>setDropdownText("single select Question")} >Single Select Question</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      {dropdownText==="Multi select Question"?<MultiSelect/>:null}
      {dropdownText==="single select Question"?<Singleselect/>:null}
    </>
  );  
      

}

export default CreateSurvey;
