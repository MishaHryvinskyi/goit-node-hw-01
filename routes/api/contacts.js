const contacts = require("../../db/contacts.json");
const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.json(contacts);
});

router.get("/:id", (req, res) => {
    res.json(contacts[1]);
});

router.post("/", (req, res) => {
    res.json(contacts[1]);
});

router.put("/:id", (req, res) => {
    res.json(contacts[1]);
});

router.delete("/:id", (req, res) => {
    res.json(contacts[0]);
});

module.exports = router;