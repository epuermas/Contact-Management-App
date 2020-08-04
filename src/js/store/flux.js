const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/my_awesome_agenda";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadContact() {
				fetch(URL)
					.then(resp => resp.json())
					.then(data => {
						console.log("getcontacts:", data),
							setStore({
								contacts: data
							});
					})
					.catch(e => console.error(e));
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
