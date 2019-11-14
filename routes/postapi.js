const express = require("express");

const router = express.Router();
router.use(express.json());
const Post = require('../models/PostModel');

router.get('/post', async (req,res) => {
    try {
        const data = await Post.find();
        res.json(data);
    } catch( err) {
        res.json({message: err});
    }
});

router.get('/post/:id', async (req,res) => {
    try {
        const data = await Post.findById(req.params.id);
        res.json(data);
    } catch( err) {
        res.json({message: err});
    }
});

router.post('/post', async (req, res) => {
    console.log(req.body);
    const emp = new Post({
            name: req.body.name,
            address: req.body.address,
            age: req.body.age,
            salary: req.body.salary
    });
    try {
        const data = await emp.save();
        res.json(data);
    } catch( err ) {
        res.json({ message: err });
    }

});



module.exports = router;