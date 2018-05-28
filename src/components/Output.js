import React from "react";

const Output = props => (
	<div className="msg_style">
	 { 
	 	props.msg && <p>{ props.msg }</p>  
	 }
	</div>
);

export default Output;