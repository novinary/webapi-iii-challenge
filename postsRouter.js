const express = require('express');

const db = require('./data/helpers/postdb.js');

const router = express.Router();

// endpoints 
// get all posts
router.get('/', (req, res) => {
    db
        .get()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => res.status(500).json({ error: err }));
});


// get posts by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db
        .getById(id)
        .then((user) => {
            if (!user) {
                res.status(404).json({ error: 'Post not found' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// post/inser a new post
router.post('/', async (req, res) => {
    try {
        const post = await db.insert(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            message: 'Error adding the post'
        });
    }
});

// delete a new post
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db
        .remove(id)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ error: 'This post id does not exist' });
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// put/update a post
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    db
        .update(id, changes)
        .then((updated) => {
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({ error: 'The specified post id does not exist' });
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});




module.exports = router;
