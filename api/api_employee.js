const express = require("express");
const router = express.Router();

const dbms = require("../instances/ms_instance");

router.get("/getEmployee", (req, res) => {

  res.json({});
});

router.get("/getEmpChinook", async(req, res) => {
    try {
        let result = await dbms.query(
            `SELECT *
            FROM Employee`);
        
        return res.json({result});
    } catch (error) {
        return res.json({error : error})
    }

});

router.delete("/deleteEmpChinook/:id", async(req,res) => {
    try {
        const {id} = req.params
        let result = await dbms.query(`
            DELETE FROM Employee
            WHERE EmployeeId = ${id}
        `)
        return res.json({result})
    } catch (error) {
        return res.json({error : error})
    }
})

router.post("/addNewEmployee", async(req,res)=> {
    const {lastName, firstName, email, city} = req.body
    try {
        let result = await dbms.query(`
            INSERT INTO Employee (LastName , FirstName , Email , City)
            Values('${lastName}', '${firstName}', '${email}', '${city}' )
        `)
    return res.json({result})
} catch (error) {
        return res.json({error:error})
        
    }
})

module.exports = router;
