import React from "react";

const DataVerification = props => (
	<form onSubmit={props.getData}>
		<input type="text" name="DataSource" placeholder="Data Source..."/>
		<input type="text" name="SmartContract" placeholder="Contract..."/>
		<button>Verify Data</button>
	</form>
);

export default DataVerification;