const URL = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []

			//Your data structures, A.K.A Entities
		},
		actions: {
			// displaying contacts
			loadContact() {
				fetch(URL + "agenda/downtown-pt-xvii")
					.then(resp => resp.json())
					.then(data => {
						console.log("getcontacts:", data),
							setStore({
								contacts: data
							});
					})
					.catch(e => console.error(e));
			},
			// deleting contacts
			deleteContact(id) {
				fetch(URL + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("response:", data);
						getActions().loadContact();
					})
					.catch(e => console.error(e));
			},
			// adding contacts
			addingContact: (fullName, address, email, phone) => {
				let contactInfo = {
					full_name: fullName,
					agenda_slug: "downtown-pt-xvii",
					email: email,
					address: address,
					phone: phone
				};

				fetch(URL, {
					method: "POST",
					body: JSON.stringify(contactInfo),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("response:", data);
						getActions().loadContact();
					})
					.catch(e => console.error(e));
			},
			// update contact
			updateContact: (id, fullName, address, email, phone) => {
				let contactInfo = {
					full_name: fullName,
					agenda_slug: "downtown-pt-xvii",
					email: email,
					address: address,
					phone: phone
				};
				fetch(URL + id, {
					method: "PUT",
					body: JSON.stringify(contactInfo),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("response:", data);
						getActions().loadContact();
					})
					.catch(e => console.error(e));
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
