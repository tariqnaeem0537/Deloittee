import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
const inputField = (props) => {
    return (
        <div>     
            <FormControl>
            <TextField
            id="standard-name"
            name={props.name}
            value={props.value}
            onChange={event => props.handleChange(event)}
            margin="normal"
            />  
            </FormControl> 
        </div>
    )
  }

  export default inputField;
