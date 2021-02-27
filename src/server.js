const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');

var app = express();
const location = path.join(__dirname, '../dist/');
const staticFileMiddleware = express.static(location);

app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);
app.use(cors({ origin: "http://localhost:8081" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render(location+'/index.html');
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})