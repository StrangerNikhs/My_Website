const express = require('express');

const app = express();
let port = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const empCollection = require('../model/model.js');
const template_path = path.join(__dirname, "template/views");
require('./src/database/mongoose');
app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/empdata', async (req, res) => {
    try {
        const email=req.body.email;
    
        if (email === email) {
            const empData = new empCollection({
                name: req.body.name,
                email: req.body.email,
                number: req.body.number,
                subject: req.body.subject,
                massege: req.body.massege,
            });
    
            const postData = await empData.save();
            res.redirect('/');
        }
        else {
            res.send('password are not matching');
        }
    } catch (error) {
        res.send(error);
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
