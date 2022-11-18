import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CityClass{
	
	constructor(){}
	
	
	getCustomers() {
		const url = `${API_URL}/api/cities/`;
		return axios.get(url).then(response => response.data);
	}  
	getCustomersByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}
	getCity(pk) {
		const url = `${API_URL}/api/cities/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteCity(city){
		const url = `${API_URL}/api/cities/${cities.pk}`;
		return axios.delete(url);
	}
	createCity(city){
		const url = `${API_URL}/api/cities/`;
		return axios.post(url,city);
	}
	updateCity(city){
		const url = `${API_URL}/api/cities/${city.pk}`;
		return axios.put(url,city);
	}
}