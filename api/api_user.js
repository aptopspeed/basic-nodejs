const express = require('express');
const router = express.Router()

router.get("/getUser", (req, res) => {

    return res.json({test: "ok"})
})

router.get("/deleteUser", (req, res) => {

    return res.json({"delete": "delete complete"})
})



module.exports = router;