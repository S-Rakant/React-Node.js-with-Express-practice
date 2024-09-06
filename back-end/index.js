const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors')

app.use(cors());
app.listen(PORT, console.log('サーバが起動しました'));

const lists = [
    {name: 'tokyo', maxTemp: '38', minTemp: '30', humidity: '56'},
    {name: 'gifu', maxTemp: '23', minTemp: '14', humidity: '20'}
] 

app.get('/api/getWheatherInfo/:place', (request, response) => {
    const res = lists.filter((list) => list.name === request.params.place);
    console.log(res);
    response.send(res);
})