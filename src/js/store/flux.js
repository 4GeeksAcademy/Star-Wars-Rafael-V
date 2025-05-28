const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],
			planetas:[],
			planeta:{},
			personaje:{},
			vehiculos:[],
			vehiculo:{}
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerPersonajes: async () => {
				try {
					const response = await fetch ("https://swapi.tech/api/people")
					const data = await response.json()
					console.log(data.results)
					setStore({personajes:data.results})
				} catch (error) {
					console.log(error)
				}
			},

			obtenerInfoPersonaje: async (id) => {
				try {
					const response = await fetch ("https://swapi.tech/api/people/"+id)
					const data = await response.json()
					console.log(data)
					setStore({personaje:data.result.properties})
				} catch (error) {
					console.log(error)
				}
			},


			obtenerPlanetas: async () => {
				try {
					const response = await fetch ("https://swapi.tech/api/planets")
					const data = await response.json()
					console.log(data.results)
					setStore({planetas:data.results})
				} catch (error) {
					console.log(error)
				}
			},

			obtenerInfoPlaneta: async (id) => {
				try {
					const response = await fetch ("https://swapi.tech/api/planets/"+id)
					const data = await response.json()
					console.log(data)
					setStore({planeta:data})
				} catch (error) {
					console.log(error)
				}
			},

			obtenerVehiculos: async () => {
				try {
					const response = await fetch ("https://swapi.tech/api/vehicles")
					const data = await response.json()
					console.log(data.results)
					setStore({vehiculos:data.results})
				} catch (error) {
					console.log(error)
				}
			},

			obtenerInfoVehiculo: async (id) => {
				try {
					const response = await fetch ("https://swapi.tech/api/vehicles/"+id)
					const data = await response.json()
					console.log(data)
					setStore({vehiculo:data})
				} catch (error) {
					console.log(error)
				}
			}
			
			
		}
	};
};

export default getState;
