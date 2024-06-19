const express = require("express");
const router = express.Router();

const dbms = require("../instances/ms_instance");

router.get("/getInvoice", async (req,res)=> {
    try {
        let result = await dbms.query(`
            SELECT TOP(100) * FROM Invoice
            `)
        return res.json({result})
    } catch (error) {
        return res.json({error: error})
        
    }
})

router.delete("/deleteInvoice/:id", async(req,res)=> {
    try {
        let result = await dbms.query(`
            DELETE FROM Invoice
            Where InvoiceId = ${id}
            `)
        return res.json({result})
    } catch (error) {
        return res.json({error:error})
    }
})

module.exports = router;
