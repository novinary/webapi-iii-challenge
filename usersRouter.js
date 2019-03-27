const express = require('express');

const db = require('./data/helpers/userdb.js');

const router = express.Router();

const server = express();

// custom middleware
function isUsernameCaps(req, res, next) {
    const userName = req.body.name;

    if (userName[0] !== userName[0].toUpperCase()) {
        return res.status(400).json({
            errorMessage: 'First letter of name must be uppercase.'
        });
    } else {
        next();
    }
}

server.use(isUsernameCaps);


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

// get posts by post id for a specific user 
router.get('/:id/posts', (req, res) => {
    const id = req.params.id;

    db
        .getUserPosts(id)
        .then((user) => {
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// post/insert a new user
router.post('/', isUsernameCaps, (req, res) => {
    const { name } = req.body;
    const newUser = { name };
    db
        .insert(newUser)
        .then((result) => res.status(201).json(result))
        .catch((err) => res.status(500).json({ error: err }));
});

// delete a new user
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db
        .remove(id)
        .then((user) => {
            if (user) {
                res.json(id);
            } else {
                res.status(404).json({ error: 'This user id does not exist' });
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// put/update a user
router.put('/:id', isUsernameCaps, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.update(id, changes).then((updated) => {
        if (!updated) {
            res.status(400).json({ message: 'The specified user id does not exist' });
        } else {
            res.status(200).json(id);
        }
    });
});


module.exports = router;
