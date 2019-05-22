import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
const buttonCtrl = (props) => {
    return (
        <div>     
            <FormControl>
            <Button variant="contained" onClick={event => { props.submit(event) }}>{props.text}</Button>
            </FormControl> 
        </div>
    )
  }

  export default buttonCtrl;
