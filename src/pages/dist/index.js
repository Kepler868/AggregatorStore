"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Home = exports.getStaticProps = void 0;
var components_1 = require("../components");
var react_1 = require("react");
var Layout_1 = require("../layout/Layout");
var axios_1 = require("axios");
exports.getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var firstCategory, menu;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                firstCategory = 0;
                return [4 /*yield*/, axios_1["default"].post(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", { firstCategory: firstCategory })];
            case 1:
                menu = (_a.sent()).data;
                return [2 /*return*/, {
                        props: {
                            menu: menu,
                            firstCategory: firstCategory
                        }
                    }];
        }
    });
}); };
exports["default"] = Layout_1.withLayout(Home);
function Home(_a) {
    var menu = _a.menu;
    var _b = react_1.useState(4), rating = _b[0], setRating = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(components_1.Htag, { tag: "h1" }, "TEXT"),
        React.createElement(components_1.Button, { appearance: "primary", arrow: "right" }, "\u041A\u043B\u0438\u043A"),
        React.createElement(components_1.Button, { appearance: "transparent", arrow: "down" }, "\u041A\u043B\u0438\u043A"),
        React.createElement(components_1.P, { size: "l" }, "\u0411\u043E\u043B\u044C\u0448\u043E\u0439"),
        React.createElement(components_1.P, { size: "m" }, "\u0421\u0440\u0435\u0434\u043D\u0438\u0439"),
        React.createElement(components_1.Tag, { size: "s" }, "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"),
        React.createElement(components_1.Tag, { size: "m", color: "red" }, "Mal"),
        React.createElement(components_1.Tag, { size: "m", color: "green" }, "Mal"),
        React.createElement(components_1.Tag, { color: "primary" }, "dfb"),
        React.createElement(components_1.Rating, { rating: rating, setRating: setRating, isEditable: true }),
        React.createElement("ul", null, menu.map(function (m) { return (React.createElement("li", { key: m._id.secondCategory }, m._id.secondCategory)); }))));
}
exports.Home = Home;
