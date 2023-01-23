import jsonServer from 'json-server';
import path from 'path';
import fs from 'fs';
import IAuthor from './IAuthor';
import { isArrayBufferView } from 'util/types';

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
    const newAuthor: string = req.body.author;

    if (!newAuthor) {
        res.statusMessage = "Author is empty";
        res.sendStatus(400);
        return;
    }

    try {
        fs.readFile(dbPath, (err, data) => {
            if (err) throw err;
    
            const db = JSON.parse(data.toString());
            const authors: Array<IAuthor> = db.authors;
    
            if (typeof authors === "undefined"
            || !Array.isArray(authors)
            || !("author" in authors[0]))
                throw Error ("authors not read");
    
            if (authors.find((author) => {
                return author.author === newAuthor;
            })) {
                res.statusMessage = "Author already exists";
                res.sendStatus(400);
            }
            else {
                next();
            }
        });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

server.use(router);
server.listen(port, () => {
    console.log(`[server]: App backend is listening on port ${port}`);
});
