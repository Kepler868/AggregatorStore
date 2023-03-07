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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Rating = void 0;
var react_1 = require("react");
var Rating_module_css_1 = require("./Rating.module.css");
var classnames_1 = require("classnames");
var star_svg_1 = require("./star.svg");
exports.Rating = function (_a) {
    var _b = _a.isEditable, isEditable = _b === void 0 ? false : _b, rating = _a.rating, setRating = _a.setRating, className = _a.className, props = __rest(_a, ["isEditable", "rating", "setRating", "className"]);
    var _c = react_1.useState(new Array(5).fill(react_1["default"].createElement(react_1["default"].Fragment, null))), ratingArray = _c[0], setRatingArray = _c[1];
    var constructRating = function (currentRating) {
        var updatedArray = ratingArray.map(function (star, i) {
            var _a;
            return (react_1["default"].createElement("span", { className: classnames_1["default"](Rating_module_css_1["default"].star, (_a = {}, _a[Rating_module_css_1["default"].filled] = i < currentRating, _a[Rating_module_css_1["default"].editable] = isEditable, _a)), key: i, onMouseEnter: function () { return changeDisplay(i + 1); }, onMouseLeave: function () { return changeDisplay(rating); }, onClick: function () { return changeStar(i + 1); } },
                react_1["default"].createElement(star_svg_1["default"], { tabIndex: isEditable ? 0 : -1, onKeyDown: function (e) { return isEditable && handleSpace(i + 1, e); } })));
        });
        setRatingArray(updatedArray);
    };
    var handleSpace = function (i, e) {
        if (e.code != "Space" || !setRating) {
            return;
        }
        setRating(i);
    };
    var changeDisplay = function (i) {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };
    var changeStar = function (i) {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };
    react_1.useEffect(function () {
        constructRating(rating);
    }, [rating]);
    return (react_1["default"].createElement("div", __assign({}, props), ratingArray.map(function (s, i) { return (react_1["default"].createElement("span", { key: i }, s)); })));
};
