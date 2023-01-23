import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../data/db.json"));
const middlewares = jsonServer.defaults();
const port = 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/blogs/', (req,res,next) => {
    req.body.date = new Date().toJSON();

    next();
});

server.use(router);
server.listen(port, () => {
    console.log(`[server]: App backend is listening on port ${port}`);
});