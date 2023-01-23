"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_server_1 = __importDefault(require("json-server"));
const path_1 = __importDefault(require("path"));
const server = json_server_1.default.create();
const router = json_server_1.default.router(path_1.default.join(__dirname, "../data/db.json"));
const middlewares = json_server_1.default.defaults();
const port = 8000;
server.use(middlewares);
server.use(json_server_1.default.bodyParser);
server.post('/blogs/', (req, res, next) => {
    req.body.date = new Date().toJSON();
    next();
});
server.use(router);
server.listen(port, () => {
    console.log(`[server]: App backend is listening on port ${port}`);
});
