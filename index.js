const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');



app.use(express.json());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('server started: 5500'));
