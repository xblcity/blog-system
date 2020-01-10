"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("../controller/test"));
exports.AppRoutes = [
    {
        path: '/api/test',
        method: 'get',
        action: test_1.default.test
    },
    // 注册
    {
        path: '/api/register',
        method: 'post',
        action: test_1.default.register
    },
    // 登录
    {
        path: '/api/login',
        method: 'post',
        action: test_1.default.login
    }
];
