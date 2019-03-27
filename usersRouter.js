const express = require('express');

const db = require('./data/helpers/userdb.js');

const router = express.Router();

// endpoints 
// get all users
router.get('/', (req, res) => {
	db
		.get()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => res.status(500).json({ error: err }));
});

// get users by id
router.get('/:id', (req, res) => {
	const id = req.params.id;

	db
		.getById(id)
		.then((user) => {
			if (!user) {
				res.status(404).json({ error: 'User not found' });
			} else {
				res.status(200).json(user);
			}
		})
		.catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
