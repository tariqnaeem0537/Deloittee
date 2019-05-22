import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';





const selection = (props) => {
    
    return (
            <div>
                <FormControl>
                    <InputLabel htmlFor={props.name}>{props.name}</InputLabel>
                    <Select
                        value={props.value}
                        name={props.name}
                        onChange={event => props.handleChange(event)}>
                        <MenuItem value={"Any"}>Any</MenuItem>
                        {props.items.map(item => {
                        return (<MenuItem value={item}>{item}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
            </div>
    )
  }

  export default selection;
