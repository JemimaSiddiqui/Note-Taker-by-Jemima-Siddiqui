const path = require('path');
const router = require('express').Router();

// route for notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// route for index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// export the router 
module.exports = router;