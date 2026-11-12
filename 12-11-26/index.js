import express from 'express';

const app = express();
const port = 3000;
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hjgonwqfojanfo')
});

app.get('/books', (req, res) => {
    res.send('knihntiefbkjewfke')
});

app.get('/movies', (req, res) => {
    res.send('movigga')
});



app.listen(port, () => {
    console.log('test')
});