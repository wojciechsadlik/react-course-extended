import jsonServer from 'json-server';
import path from 'path';
import fs from 'fs';

const dbPath = path.join(__dirname, "../data/db.json");
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();
const port = 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/blogs/', (req,res,next) => {
    req.body.date = new Date().toJSON();

    next();
});

server.post('/authors/', (req,res,next) => {
    const author = req.body.author;

    fs.readFile(dbPath, (err, data) => {
        if (err) throw err;

        const authors = JSON.parse(data.toString());
    });

    next();
});

server.use(router);
server.listen(port, () => {
    console.log(`[server]: App backend is listening on port ${port}`);
});
