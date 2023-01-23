"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_server_1 = __importDefault(require("json-server"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dbPath = path_1.default.join(__dirname, "../data/db.json");
const server = json_server_1.default.create();
const router = json_server_1.default.router(dbPath);
const middlewares = json_server_1.default.defaults();
const port = 8000;
server.use(middlewares);
server.use(json_server_1.default.bodyParser);
server.post('/blogs/', (req, res, next) => {
    req.body.date = new Date().toJSON();
    next();
});
server.post('/authors/', (req, res, next) => {
    const newAuthor = req.body.author;
    if (!newAuthor) {
        res.statusMessage = "Author is empty";
        res.sendStatus(400);
        return;
    }
    try {
        fs_1.default.readFile(dbPath, (err, data) => {
            if (err)
                throw err;
            const db = JSON.parse(data.toString());
            const authors = db.authors;
            if (typeof authors === "undefined"
                || !Array.isArray(authors)
                || !("author" in authors[0]))
                throw Error("authors not read");
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
