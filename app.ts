import * as express from 'express';

const app:express.Express = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/students',(req,res)=>{
  res.send("hii stutendt")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 