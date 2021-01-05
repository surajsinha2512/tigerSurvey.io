import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button} from 'reactstrap';

import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function SingleSelect(){
  const [options,setOptions]=useState(["",""]);
  const [Question,setQuestion]=useState("");

  const disabledButtonAddAndPublish=()=>   
  Question.trim()==='' || options.find((opt)=>opt.trim()==='')!==undefined;
  const setOptionInArray=(value,optionIdx)=>{
    options[optionIdx]=value;
    setOptions([...options]);
};

    return (
    <div className="question-container">
      <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>?</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Your Question" onChange={(e)=>{setQuestion(e.target.value)}} value={Question}/>
        </InputGroup>
      <p className="inputFieldText" > Options</p>
      <InputGroup className="inputField">
      <Input placeholder="Option 1" value={options[0]} onChange={e=>{
        setOptionInArray(e.target.value,0)
        console.log(options[0]+" "+options[1])
      }} />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
        </InputGroup>
        <InputGroup className="inputField">
        <Input placeholder="Option 2" value={options[1]} onChange={e=>{
        setOptionInArray(e.target.value,1)
      }}/>
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
        </InputGroup>
        <div className="question-single-select">
        <Link to="/create"><Button className="question-main-btn" style={{backgroundColor:"#af5f46"}} disabled={disabledButtonAddAndPublish()}>Add Question</Button>{' '}</Link>
        <Link to="/take"><Button className="question-main-btn" style={{backgroundColor:"#af5f46"}} disabled={disabledButtonAddAndPublish()}>Publish</Button>{' '}</Link>
        </div>
    </div>
    );
}
export default SingleSelect;