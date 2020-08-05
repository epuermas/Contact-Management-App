import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState();
	const [address, setAddress] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<div className="form-group">
					<label>Full Name</label>
					<input
						onChange={e => setFullName(e.target.value)}
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
				<button
					onClick={() => actions.addingContact(fullName, address, email, phone)}
					className="btn btn-primary form-control">
					save
				</button>
				<Link className="mt-3 w-100 text-center" to="/">
					or get back to contacts
				</Link>
			</div>
		</div>
	);
};
