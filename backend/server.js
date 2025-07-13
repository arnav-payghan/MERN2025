import express from "express";

const app = express();

app.get(("/api/notes/"), (req,res) => {
    res.send("You have 1 note(s).")    
})

app.listen(3000, () => {
    console.log("Server is running on PORT: 3000");
})