"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.withLayout = void 0;
var react_1 = require("react");
var Layout_module_css_1 = require("./Layout.module.css");
var Header_1 = require("./Header/Header");
var Sidebar_1 = require("./Sidebar/Sidebar");
var Footer_1 = require("./Footer/Footer");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: Layout_module_css_1["default"].wrapper },
        react_1["default"].createElement(Header_1.Header, { className: Layout_module_css_1["default"].header }),
        react_1["default"].createElement(Sidebar_1.Sidebar, { className: Layout_module_css_1["default"].sidebar }),
        react_1["default"].createElement("div", { className: Layout_module_css_1["default"].body }, children),
        react_1["default"].createElement(Footer_1.Footer, { className: Layout_module_css_1["default"].footer })));
};
exports.withLayout = function (Component) {
    return function withLayoutComponent(props) {
        return (react_1["default"].createElement(Layout, null,
            react_1["default"].createElement(Component, __assign({}, props))));
    };
};
