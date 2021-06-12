"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const gamesRoutes_1 = __importDefault(require("../gamesRoutes"));
class GamesController {
    index(req, res) {
        res.send('Games');
    }
}
exports.gamesController = new GamesController();
exports.default = gamesRoutes_1.default;
