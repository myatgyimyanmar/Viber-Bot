```javascript
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
    let message = "";

    if (req.body.message && req.body.message.text) {
        message = req.body.message.text;
    }

    let reply = "မင်္ဂလာပါ 👋 MK Gaming Bot မှ ကြိုဆိုပါတယ်";

    if (message.toLowerCase() === "hi") {
        reply = "👋 Hello! ဘာကူညီရမလဲ?";
    } 
    else if (message.toLowerCase() === "game") {
        reply = "🎮 Game အကြောင်း ဘာသိချင်လဲ?";
    } 
    else if (message.toLowerCase() === "help") {
        reply = "📌 Admin ကို ဆက်သွယ်ပါ။";
    }

    res.json({
        text: reply
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Bot running on port " + PORT);
});
```