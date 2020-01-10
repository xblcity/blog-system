"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var koa2_cors_1 = __importDefault(require("koa2-cors"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var typeorm_1 = require("typeorm");
var routers_1 = require("./routers");
typeorm_1.createConnection()
    .then(function () {
    var app = new koa_1.default();
    var router = new koa_router_1.default();
    // 注册路由
    routers_1.AppRoutes.forEach(function (route) { return router[route.method](route.path, route.action); });
    app.use(koa2_cors_1.default())
        .use(koa_bodyparser_1.default())
        .use(router.routes());
    app.listen(3002);
})
    .catch(function (error) { return console.log('TypeORM 连接失败', error); });
