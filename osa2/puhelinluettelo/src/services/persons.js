import axios from 'axios';

const url = process.env.NODE_ENV === 'development' ? 
	'http://localhost:3001/api/persons' : '/api/persons';

const getAll = () => axios.get(url);

const create = person => axios.post(url, person);

const update = (person, id) => axios.put(`${url}/${id}`, person);

const deletePerson = id => axios.delete(`${url}/${id}`)

export default {
	getAll, 
	create,
	update,
	deletePerson
}