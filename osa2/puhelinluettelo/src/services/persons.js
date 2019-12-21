import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = () => axios.get(url);

const create = person => axios.post(url, person);

const deletePerson = id => axios.delete(`${url}/${id}`)

export default {
	getAll, 
	create,
	deletePerson
}