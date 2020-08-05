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
			addingContact() {
				fetch(URL + "downtown-pt-xvii", {
					method: "POST",
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
