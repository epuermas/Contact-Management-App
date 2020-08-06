import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const AddContact = props => {
	let testContact =
		typeof props.location.state !== "undefined" && typeof props.location.state.contact !== "undefined"
			? props.location.state.contact
			: null;
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState(testContact !== null ? testContact.full_name : "");
	const [address, setAddress] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [contact, setContact] = useState(testContact !== null ? props.location.state.contact : null);

	const handleSubmit = e => {
		e.preventDefault();
		if (testContact !== null) {
			// editing contact - use update fetch (PUT)
		} else {
			// adding contact - use add fetch (POST)
			actions.addingContact(fullName, address, email, phone);
		}
	};

	return (
		<div className="container">
			<form onSubmit={e => handleSubmit(e)}>
				<h1 className="text-center mt-5">{contact !== null ? "Edit" : "Add a new"} contact</h1>
				<div className="form-group">
					<label>Full Name</label>
					<input
						onChange={e => setFullName(e.target.value)}
						value={fullName}
						type="text"
						className="form-control"
						placeholder="Full Name"
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
						className="form-control"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						onChange={e => setPhone(e.target.value)}
						type="phone"
						className="form-control"
						placeholder="Enter phone"
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						onChange={e => setAddress(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Enter address"
					/>
				</div>
				<button type="submit" className="btn btn-primary form-control">
					save
				</button>
				<Link className="mt-3 w-100 text-center" to="/">
					or get back to contacts
				</Link>
			</form>
		</div>
	);
};

AddContact.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
		state: PropTypes.object.isRequired
	}).isRequired
};

export default withRouter(AddContact);
