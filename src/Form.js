import { useState } from 'react';

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h2>User {name} successfully registered!!</h2>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h2>Please enter all the fields</h2>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h2>User Registration</h2>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label"></label>
		<input onChange={handleName} className="input" placeholder="Name"
		value={name} type="text" />

		<label className="label"></label>
		<input onChange={handleEmail} className="input" placeholder="Email"
		value={email} type="email" />

		<label className="label"></label>
		<input onChange={handlePassword} className="input" placeholder="Password"
		value={password} type="password" />

		<button  className="btn" onClick={handleSubmit} type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
