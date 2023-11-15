import React from "react";
import Button from "@mui/material/Button";
 
const myButton = (props) => {
   return (
      <Button variant={props.buttonVariant} 
          color={props.buttonColor}
      >
      {props.buttonText}
      </Button>
    )
   }
export default myButton;





  


