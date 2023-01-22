"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_server_1 = __importDefault(require("json-server"));
const server = json_server_1.default.create();
const router = json_server_1.default.router("data/db.json");
const middlewares = json_server_1.default.defaults();
const port = 8000;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`[server]: App backend is listening on port ${port}`);
});
