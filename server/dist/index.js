"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const typeorm_1 = require("typeorm");
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const routes_1 = require("./routes");
const authHandler_1 = __importDefault(require("./middlewares/authHandler"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
typeorm_1.createConnection()
    .then(() => {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    routes_1.AppRoutes.forEach(route => router[route.method](route.path, route.action));
    app.use(koa2_cors_1.default())
        .use(koa_bodyparser_1.default())
        .use(authHandler_1.default)
        .use(errorHandler_1.default)
        .use(router.routes())
        .use(router.allowedMethods());
    app.listen(process.env.NODE_ENV === 'prod' ? 3000 : 3001);
})
    .catch(error => console.log('TypeORM 链接失败: ', error));
