/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./decoder.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./decoder.ts":
/*!********************!*\
  !*** ./decoder.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
self.importScripts("three.min.js");
const index_worker_1 = __webpack_require__(/*! @here/harp-omv-datasource/index-worker */ "./node_modules/@here/harp-omv-datasource/index-worker.js");
index_worker_1.OmvTileDecoderService.start();


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/index-decoder.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/index-decoder.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/StyleSetEvaluator */ "./node_modules/@here/harp-datasource-protocol/lib/StyleSetEvaluator.js"));
__export(__webpack_require__(/*! ./lib/Extruder */ "./node_modules/@here/harp-datasource-protocol/lib/Extruder.js"));
__export(__webpack_require__(/*! ./lib/Outliner */ "./node_modules/@here/harp-datasource-protocol/lib/Outliner.js"));
__export(__webpack_require__(/*! ./lib/Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js"));


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/Techniques */ "./node_modules/@here/harp-datasource-protocol/lib/Techniques.js"));
__export(__webpack_require__(/*! ./lib/TechniqueParams */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js"));
__export(__webpack_require__(/*! ./lib/InterpolatedProperty */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedProperty.js"));
__export(__webpack_require__(/*! ./lib/InterpolatedPropertyDefs */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js"));
__export(__webpack_require__(/*! ./lib/WorkerServiceProtocol */ "./node_modules/@here/harp-datasource-protocol/lib/WorkerServiceProtocol.js"));
__export(__webpack_require__(/*! ./lib/WorkerTilerProtocol */ "./node_modules/@here/harp-datasource-protocol/lib/WorkerTilerProtocol.js"));
__export(__webpack_require__(/*! ./lib/WorkerDecoderProtocol */ "./node_modules/@here/harp-datasource-protocol/lib/WorkerDecoderProtocol.js"));
__export(__webpack_require__(/*! ./lib/DecodedTile */ "./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js"));
__export(__webpack_require__(/*! ./lib/TileInfo */ "./node_modules/@here/harp-datasource-protocol/lib/TileInfo.js"));
__export(__webpack_require__(/*! ./lib/ThemeVisitor */ "./node_modules/@here/harp-datasource-protocol/lib/ThemeVisitor.js"));


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js":
/*!************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/DecodedTile.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
/**
 * Returns an array with the data type specified as parameter.
 *
 * @param attr specifies which type of data is being stored in the array
 */
function getArrayConstructor(attr) {
    switch (attr) {
        case "float":
            return Float32Array;
        case "uint16":
            return Uint16Array;
        case "uint32":
            return Uint32Array;
    }
}
exports.getArrayConstructor = getArrayConstructor;
/**
 * Geometry types supported by [[Geometry]] objects.
 */
var GeometryType;
(function (GeometryType) {
    GeometryType[GeometryType["Unspecified"] = 0] = "Unspecified";
    GeometryType[GeometryType["Point"] = 1] = "Point";
    GeometryType[GeometryType["Line"] = 2] = "Line";
    GeometryType[GeometryType["SolidLine"] = 3] = "SolidLine";
    GeometryType[GeometryType["Text"] = 4] = "Text";
    GeometryType[GeometryType["TextPath"] = 5] = "TextPath";
    GeometryType[GeometryType["ExtrudedLine"] = 6] = "ExtrudedLine";
    GeometryType[GeometryType["Polygon"] = 7] = "Polygon";
    GeometryType[GeometryType["ExtrudedPolygon"] = 8] = "ExtrudedPolygon";
    GeometryType[GeometryType["Object3D"] = 9] = "Object3D";
    GeometryType[GeometryType["Other"] = 1000] = "Other";
})(GeometryType = exports.GeometryType || (exports.GeometryType = {}));
/**
 * Returns the projection object specified in the parameter.
 *
 * @param projectionName string describing projection to be used
 */
function getProjection(projectionName) {
    switch (projectionName) {
        case "mercator":
            return harp_geoutils_1.mercatorProjection;
        case "webMercator":
            return harp_geoutils_1.webMercatorProjection;
        case "sphere":
            return harp_geoutils_1.sphereProjection;
        case "normalizedEquirectangular":
            return harp_geoutils_1.normalizedEquirectangularProjection;
        case "equirectangular":
            return harp_geoutils_1.equirectangularProjection;
        default:
            throw new Error(`Unknown projection ${projectionName}`);
    } // switch
}
exports.getProjection = getProjection;
/**
 * String with the projection's name.
 *
 * @param projection `Projection` object containing the name of the projection to retrieve
 */
function getProjectionName(projection) {
    if (projection === harp_geoutils_1.mercatorProjection) {
        return "mercator";
    }
    else if (projection === harp_geoutils_1.webMercatorProjection) {
        return "webMercator";
    }
    else if (projection === harp_geoutils_1.sphereProjection) {
        return "sphere";
    }
    else if (projection === harp_geoutils_1.normalizedEquirectangularProjection) {
        return "normalizedEquirectangular";
    }
    else if (projection === harp_geoutils_1.equirectangularProjection) {
        return "equirectangular";
    }
    throw new Error("Unknown projection");
}
exports.getProjectionName = getProjectionName;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ExponentialInterpolant.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ExponentialInterpolant.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = __webpack_require__(/*! three */ "three");
class ExponentialInterpolant extends three_1.Interpolant {
    constructor() {
        super(...arguments);
        /**
         * Exponent value. Defaults to `2.0`.
         */
        this.exponent = 2.0;
    }
    // Note: We need to disable linting here as tslint thinks this function is never used, though it
    // indeed is called by ``Interpolant.evaluate(level)``.
    // tslint:disable-next-line
    interpolate_(i1, t0, t, t1) {
        const result = this.resultBuffer;
        // TODO: Remove when Interpolant types are fixed.
        const values = this.sampleValues;
        const stride = this.valueSize;
        const offset1 = i1 * stride;
        const offset0 = offset1 - stride;
        const weight1 = Math.pow((t - t0) / (t1 - t0), this.exponent);
        const weight0 = 1 - weight1;
        for (let i = 0; i !== stride; ++i) {
            result[i] = values[offset0 + i] * weight0 + values[offset1 + i] * weight1;
        }
        return result;
    }
}
exports.ExponentialInterpolant = ExponentialInterpolant;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Expr.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Abstract class defining a shape of a [[Theme]]'s expression
 */
class Expr {
    constructor(kind) {
        this.kind = kind;
    }
    /**
     * Returns a parsed expression.
     * @param code String which describes the type of expression to be parsed, for example "var".
     */
    static parse(code) {
        const parser = new Parser(code);
        const expr = parser.parse();
        return expr;
    }
}
exports.Expr = Expr;
/**
 * @hidden
 */
class Env {
    /**
     * Returns property in [[Env]] by name.
     *
     * @param name Name of property.
     */
    lookup(_name) {
        return undefined;
    }
    /**
     * Return an object containing all properties of this environment. (Here: empty object).
     */
    unmap() {
        return {};
    }
}
exports.Env = Env;
/**
 * Adds access to map specific environment properties.
 */
class MapEnv extends Env {
    constructor(entries, parent) {
        super();
        this.entries = entries;
        this.parent = parent;
    }
    /**
     * Returns property in [[Env]] by name.
     *
     * @param name Name of property.
     */
    lookup(name) {
        const value = this.entries[name];
        if (value !== undefined) {
            return value;
        }
        return this.parent ? this.parent.lookup(name) : undefined;
    }
    /**
     * Return an object containing all properties of this environment, takes care of the parent
     * object.
     */
    unmap() {
        const obj = this.parent ? this.parent.unmap() : {};
        for (const key in this.entries) {
            if (this.entries.hasOwnProperty(key)) {
                obj[key] = this.entries[key];
            }
        }
        return obj;
    }
}
exports.MapEnv = MapEnv;
/**
 * Var expression.
 */
class VarExpr extends Expr {
    constructor(name) {
        super("var");
        this.name = name;
    }
    evaluate(env) {
        const value = env.lookup(this.name);
        return value;
    }
}
/**
 * Number literal expression.
 */
class NumberLiteralExpr extends Expr {
    constructor(value) {
        super("number");
        this.value = value;
    }
    evaluate() {
        return this.value;
    }
}
/**
 * String literal expression.
 */
class StringLiteralExpr extends Expr {
    constructor(value) {
        super("string");
        this.value = value;
    }
    evaluate() {
        return this.value;
    }
}
/**
 * A has expression with an attribute, for example `has(ref)`.
 */
class HasAttributeExpr extends Expr {
    constructor(attribute) {
        super("has");
        this.attribute = attribute;
    }
    evaluate(env) {
        return env.lookup(this.attribute) !== undefined;
    }
}
/**
 * A contains expression.
 */
class ContainsExpr extends Expr {
    constructor(value, elements) {
        super("in");
        this.value = value;
        this.elements = elements;
    }
    evaluate(env) {
        const value = this.value.evaluate(env);
        for (const e of this.elements) {
            const element = e.evaluate(env);
            if (value === element) {
                return true;
            }
        }
        return false;
    }
}
/**
 * A `not` expression.
 */
class NotExpr extends Expr {
    constructor(expr) {
        super("!");
        this.expr = expr;
    }
    evaluate(env) {
        return !this.expr.evaluate(env);
    }
}
/**
 * A binary operator expression
 */
class BinaryExpr extends Expr {
    constructor(op, left, right) {
        super(op);
        this.op = op;
        this.left = left;
        this.right = right;
    }
    evaluate(env) {
        const left = this.left.evaluate(env);
        const right = this.right.evaluate(env);
        switch (this.op) {
            case "~=": {
                if (typeof left === "string" && typeof right === "string") {
                    return left.indexOf(right) !== -1;
                }
                return false;
            }
            case "^=": {
                if (typeof left === "string" && typeof right === "string") {
                    return left.startsWith(right);
                }
                return false;
            }
            case "$=": {
                if (typeof left === "string" && typeof right === "string") {
                    return left.endsWith(right);
                }
                return false;
            }
            case "==":
                return left === right;
            case "!=":
                return left !== right;
            case "<":
                return left !== undefined && right !== undefined ? left < right : undefined;
            case ">":
                return left !== undefined && right !== undefined ? left > right : undefined;
            case "<=":
                return left !== undefined && right !== undefined ? left <= right : undefined;
            case ">=":
                return left !== undefined && right !== undefined ? left >= right : undefined;
        }
        throw new Error(`invalid relational op ${this.op}`);
    }
}
/**
 * Logical expression.
 */
class LogicalExpr extends Expr {
    constructor(op, left, right) {
        super(op);
        this.op = op;
        this.left = left;
        this.right = right;
    }
    evaluate(env) {
        const value = this.left.evaluate(env);
        switch (this.op) {
            case "||":
                return value || this.right.evaluate(env);
            case "&&":
                return value && this.right.evaluate(env);
        } // switch
        throw new Error(`invalid logical op ${this.op}`);
    }
}
/**
 * Character value
 */
var Character;
(function (Character) {
    Character[Character["Tab"] = 9] = "Tab";
    Character[Character["Lf"] = 10] = "Lf";
    Character[Character["Cr"] = 13] = "Cr";
    Character[Character["Space"] = 32] = "Space";
    Character[Character["LParen"] = 40] = "LParen";
    Character[Character["RParen"] = 41] = "RParen";
    Character[Character["Comma"] = 44] = "Comma";
    Character[Character["Dot"] = 46] = "Dot";
    Character[Character["LBracket"] = 91] = "LBracket";
    Character[Character["Backslash"] = 92] = "Backslash";
    Character[Character["RBracket"] = 93] = "RBracket";
    Character[Character["_0"] = 48] = "_0";
    Character[Character["_9"] = 57] = "_9";
    Character[Character["_"] = 95] = "_";
    Character[Character["A"] = 64] = "A";
    Character[Character["Z"] = 90] = "Z";
    Character[Character["a"] = 97] = "a";
    Character[Character["z"] = 122] = "z";
    Character[Character["DoubleQuote"] = 34] = "DoubleQuote";
    Character[Character["SingleQuote"] = 39] = "SingleQuote";
    Character[Character["Exclaim"] = 33] = "Exclaim";
    Character[Character["Equal"] = 61] = "Equal";
    Character[Character["Caret"] = 94] = "Caret";
    Character[Character["Tilde"] = 126] = "Tilde";
    Character[Character["Dollar"] = 36] = "Dollar";
    Character[Character["Less"] = 60] = "Less";
    Character[Character["Greater"] = 62] = "Greater";
    Character[Character["Bar"] = 124] = "Bar";
    Character[Character["Amp"] = 38] = "Amp";
})(Character || (Character = {}));
/**
 * Check if a codepoint is a whitespace character.
 */
function isSpace(codepoint) {
    switch (codepoint) {
        case Character.Tab:
        case Character.Lf:
        case Character.Cr:
        case Character.Space:
            return true;
        default:
            return false;
    } // switch
}
/**
 * Check if codepoint is a digit character.
 */
function isNumber(codepoint) {
    return codepoint >= Character._0 && codepoint <= Character._9;
}
/**
 * Check if codepoint is a letter character.
 */
function isLetter(codepoint) {
    return ((codepoint >= Character.a && codepoint <= Character.z) ||
        (codepoint >= Character.A && codepoint <= Character.Z));
}
/**
 * Check if codepoint is either a digit or a letter character.
 */
function isLetterOrNumber(codepoint) {
    return isLetter(codepoint) || isNumber(codepoint);
}
/**
 * Check if codepoint is an identification character: underscore, dollar sign, dot or bracket.
 */
function isIdentChar(codepoint) {
    return (isLetterOrNumber(codepoint) ||
        codepoint === Character._ ||
        codepoint === Character.Dollar ||
        codepoint === Character.Dot ||
        codepoint === Character.LBracket ||
        codepoint === Character.RBracket);
}
/**
 * Tokens used in theme grammar.
 */
var Token;
(function (Token) {
    Token[Token["Eof"] = 0] = "Eof";
    Token[Token["Error"] = 1] = "Error";
    Token[Token["Identifier"] = 2] = "Identifier";
    Token[Token["Number"] = 3] = "Number";
    Token[Token["String"] = 4] = "String";
    Token[Token["Comma"] = 5] = "Comma";
    Token[Token["LParen"] = 6] = "LParen";
    Token[Token["RParen"] = 7] = "RParen";
    Token[Token["LBracket"] = 8] = "LBracket";
    Token[Token["RBracket"] = 9] = "RBracket";
    Token[Token["Exclaim"] = 10] = "Exclaim";
    Token[Token["TildeEqual"] = 11] = "TildeEqual";
    Token[Token["CaretEqual"] = 12] = "CaretEqual";
    Token[Token["DollarEqual"] = 13] = "DollarEqual";
    Token[Token["EqualEqual"] = 14] = "EqualEqual";
    Token[Token["ExclaimEqual"] = 15] = "ExclaimEqual";
    Token[Token["Less"] = 16] = "Less";
    Token[Token["Greater"] = 17] = "Greater";
    Token[Token["LessEqual"] = 18] = "LessEqual";
    Token[Token["GreaterEqual"] = 19] = "GreaterEqual";
    Token[Token["BarBar"] = 20] = "BarBar";
    Token[Token["AmpAmp"] = 21] = "AmpAmp";
})(Token || (Token = {}));
/**
 * Maps a token to its string name.
 */
function tokenSpell(token) {
    switch (token) {
        case Token.Eof:
            return "eof";
        case Token.Error:
            return "error";
        case Token.Identifier:
            return "identifier";
        case Token.Number:
            return "number";
        case Token.String:
            return "string";
        case Token.Comma:
            return ",";
        case Token.LParen:
            return "(";
        case Token.RParen:
            return ")";
        case Token.LBracket:
            return "[";
        case Token.RBracket:
            return "]";
        case Token.Exclaim:
            return "!";
        case Token.TildeEqual:
            return "~=";
        case Token.CaretEqual:
            return "^=";
        case Token.DollarEqual:
            return "$=";
        case Token.EqualEqual:
            return "==";
        case Token.ExclaimEqual:
            return "!=";
        case Token.Less:
            return "<";
        case Token.Greater:
            return ">";
        case Token.LessEqual:
            return "<=";
        case Token.GreaterEqual:
            return ">=";
        case Token.BarBar:
            return "||";
        case Token.AmpAmp:
            return "&&";
        default:
            throw new Error(`invalid token ${token}`);
    }
}
/**
 * Lexer class implementation.
 */
class Lexer {
    constructor(code) {
        this.code = code;
        this.m_token = Token.Error;
        this.m_index = 0;
        this.m_char = Character.Lf;
    }
    /**
     * Single lexer token.
     */
    token() {
        return this.m_token;
    }
    /**
     * Parsed text.
     */
    text() {
        return this.m_text || "";
    }
    /**
     * Go to the next token.
     */
    next() {
        this.m_token = this.yylex();
        if (this.m_token === Token.Error) {
            throw new Error(`unexpected character ${this.m_char}`);
        }
        return this.m_token;
    }
    yyinp() {
        this.m_char = this.code.codePointAt(this.m_index++) || 0;
    }
    yylex() {
        this.m_text = undefined;
        while (isSpace(this.m_char)) {
            this.yyinp();
        }
        if (this.m_char === 0) {
            return Token.Eof;
        }
        const ch = this.m_char;
        this.yyinp();
        switch (ch) {
            case Character.LParen:
                return Token.LParen;
            case Character.RParen:
                return Token.RParen;
            case Character.LBracket:
                return Token.LBracket;
            case Character.RBracket:
                return Token.RBracket;
            case Character.Comma:
                return Token.Comma;
            case Character.SingleQuote:
            case Character.DoubleQuote: {
                const start = this.m_index - 1;
                while (this.m_char && this.m_char !== ch) {
                    // ### TODO handle escape sequences
                    this.yyinp();
                }
                if (this.m_char !== ch) {
                    throw new Error("Unfinished string literal");
                }
                this.yyinp();
                this.m_text = this.code.substring(start, this.m_index - 2);
                return Token.String;
            }
            case Character.Exclaim:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.ExclaimEqual;
                }
                return Token.Exclaim;
            case Character.Caret:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.CaretEqual;
                }
                return Token.Error;
            case Character.Tilde:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.TildeEqual;
                }
                return Token.Error;
            case Character.Equal:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.EqualEqual;
                }
                return Token.Error;
            case Character.Less:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.LessEqual;
                }
                return Token.Less;
            case Character.Greater:
                if (this.m_char === Character.Equal) {
                    this.yyinp();
                    return Token.GreaterEqual;
                }
                return Token.Greater;
            case Character.Bar:
                if (this.m_char === Character.Bar) {
                    this.yyinp();
                    return Token.BarBar;
                }
                return Token.Error;
            case Character.Amp:
                if (this.m_char === Character.Amp) {
                    this.yyinp();
                    return Token.AmpAmp;
                }
                return Token.Error;
            default: {
                const start = this.m_index - 2;
                if (isLetter(ch) ||
                    ch === Character._ ||
                    (ch === Character.Dollar && isIdentChar(this.m_char))) {
                    while (isIdentChar(this.m_char)) {
                        this.yyinp();
                    }
                    this.m_text = this.code.substring(start, this.m_index - 1);
                    return Token.Identifier;
                }
                else if (isNumber(ch)) {
                    while (isNumber(this.m_char)) {
                        this.yyinp();
                    }
                    if (this.m_char === Character.Dot) {
                        this.yyinp();
                        while (isNumber(this.m_char)) {
                            this.yyinp();
                        }
                    }
                    this.m_text = this.code.substring(start, this.m_index - 1);
                    return Token.Number;
                }
                else if (ch === Character.Dollar) {
                    if (this.m_char === Character.Equal) {
                        this.yyinp();
                        return Token.DollarEqual;
                    }
                    return Token.Error;
                }
            }
        }
        return Token.Error;
    }
}
function getEqualityOp(token) {
    switch (token) {
        case Token.TildeEqual:
            return "~=";
        case Token.CaretEqual:
            return "^=";
        case Token.DollarEqual:
            return "$=";
        case Token.EqualEqual:
            return "==";
        case Token.ExclaimEqual:
            return "!=";
        default:
            return undefined;
    } // switch
}
function getRelationalOp(token) {
    switch (token) {
        case Token.Less:
            return "<";
        case Token.Greater:
            return ">";
        case Token.LessEqual:
            return "<=";
        case Token.GreaterEqual:
            return ">=";
        default:
            return undefined;
    } // switch
}
class Parser {
    constructor(code) {
        this.lex = new Lexer(code);
        this.lex.next();
    }
    parse() {
        return this.parseLogicalOr();
    }
    yyexpect(token) {
        if (this.lex.token() !== token) {
            throw new Error(`Syntax error: Expected token '${tokenSpell(token)}' but ` +
                `found '${tokenSpell(this.lex.token())}'`);
        }
        this.lex.next();
    }
    parsePrimary() {
        switch (this.lex.token()) {
            case Token.Identifier: {
                const text = this.lex.text();
                if (text !== "has") {
                    const expr = new VarExpr(text);
                    this.lex.next();
                    return expr;
                }
                this.lex.next(); // skip has
                this.yyexpect(Token.LParen);
                const attribute = this.lex.text();
                this.yyexpect(Token.Identifier);
                this.yyexpect(Token.RParen);
                return new HasAttributeExpr(attribute);
            }
            case Token.Number: {
                const expr = new NumberLiteralExpr(parseFloat(this.lex.text()));
                this.lex.next();
                return expr;
            }
            case Token.String: {
                const expr = new StringLiteralExpr(this.lex.text());
                this.lex.next();
                return expr;
            }
            case Token.LParen: {
                this.lex.next();
                const expr = this.parseLogicalOr();
                this.yyexpect(Token.RParen);
                return expr;
            }
        }
        throw new Error("Syntax error");
    }
    parseUnary() {
        if (this.lex.token() === Token.Exclaim) {
            this.lex.next();
            return new NotExpr(this.parseUnary());
        }
        return this.parsePrimary();
    }
    parseRelational() {
        let expr = this.parseUnary();
        while (true) {
            if (this.lex.token() === Token.Identifier && this.lex.text() === "in") {
                this.lex.next();
                this.yyexpect(Token.LBracket);
                const elements = [this.parsePrimary()];
                while (this.lex.token() === Token.Comma) {
                    this.lex.next();
                    elements.push(this.parsePrimary());
                }
                this.yyexpect(Token.RBracket);
                expr = new ContainsExpr(expr, elements);
            }
            else {
                const op = getRelationalOp(this.lex.token());
                if (op === undefined) {
                    break;
                }
                this.lex.next();
                const right = this.parseUnary();
                expr = new BinaryExpr(op, expr, right);
            }
        }
        return expr;
    }
    parseEquality() {
        let expr = this.parseRelational();
        while (true) {
            const op = getEqualityOp(this.lex.token());
            if (op === undefined) {
                break;
            }
            this.lex.next();
            const right = this.parseRelational();
            expr = new BinaryExpr(op, expr, right);
        }
        return expr;
    }
    parseLogicalAnd() {
        let expr = this.parseEquality();
        while (this.lex.token() === Token.AmpAmp) {
            this.lex.next();
            const right = this.parseEquality();
            expr = new LogicalExpr("&&", expr, right);
        }
        return expr;
    }
    parseLogicalOr() {
        let expr = this.parseLogicalAnd();
        while (this.lex.token() === Token.BarBar) {
            this.lex.next();
            const right = this.parseLogicalAnd();
            expr = new LogicalExpr("||", expr, right);
        }
        return expr;
    }
}
exports.Parser = Parser;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Extruder.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Extruder.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fills an index buffer with the indices for the extruded walls for a polygon contour.
 *
 * @param indexBuffer Index buffer to be filled.
 * @param vertexOffset Starting offset of the vertices composing the contour.
 * @param vertexStride Number of elements per contour vertex.
 * @param contour Vertices that compose the contour.
 * @param contourEdges Collection of booleans indicating if contour edges should be added.
 * @param boundaryWalls If `false`, walls in tile boundaries will not be created.
 *
 */
function addExtrudedWalls(indexBuffer, vertexOffset, vertexStride, contour, contourEdges, boundaryWalls) {
    // Infer the index buffer's position of the vertices that form the extruded-polygons' walls
    // by stepping through the contour segment by segment.
    const nSegments = contour.length / vertexStride;
    for (let i = 0; i < nSegments; ++i) {
        const vFootprint0 = vertexOffset + i * 2;
        const vRoof0 = vFootprint0 + 1;
        const vFootprint1 = vertexOffset + ((i + 1) % nSegments) * 2;
        const vRoof1 = vFootprint1 + 1;
        if (boundaryWalls !== false || contourEdges === undefined) {
            indexBuffer.push(vFootprint0, vRoof0, vRoof1, vRoof1, vFootprint1, vFootprint0);
        }
        else if (contourEdges[i]) {
            indexBuffer.push(vFootprint0, vRoof0, vRoof1, vRoof1, vFootprint1, vFootprint0);
        }
    }
}
exports.addExtrudedWalls = addExtrudedWalls;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/InterpolatedProperty.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const ExponentialInterpolant_1 = __webpack_require__(/*! ./ExponentialInterpolant */ "./node_modules/@here/harp-datasource-protocol/lib/ExponentialInterpolant.js");
const InterpolatedPropertyDefs_1 = __webpack_require__(/*! ./InterpolatedPropertyDefs */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js");
const interpolants = [
    three_1.DiscreteInterpolant,
    three_1.LinearInterpolant,
    three_1.CubicInterpolant,
    ExponentialInterpolant_1.ExponentialInterpolant
];
/**
 * Get the value of the specified property at the given zoom level. Handles [[InterpolatedProperty]]
 * instances as well as future interpolated values.
 *
 * @param property Property of a technique.
 * @param level Display level the property should be rendered at.
 */
function getPropertyValue(property, level) {
    if (!isInterpolatedProperty(property)) {
        if (isInterpolatedPropertyDefinition(property)) {
            throw new Error("Invalid property definition");
        }
        return property;
    }
    else {
        const nChannels = property.values.length / property.zoomLevels.length;
        const isMultiChannel = nChannels > 1;
        const interpolant = new interpolants[property.interpolationMode](property.zoomLevels, property.values, nChannels);
        if (property.interpolationMode === InterpolatedPropertyDefs_1.InterpolationMode.Exponential &&
            property.exponent !== undefined) {
            interpolant.exponent = property.exponent;
        }
        interpolant.evaluate(level);
        let result = isMultiChannel ? "#" : 0;
        for (const value of interpolant.resultBuffer) {
            // tslint:disable:no-bitwise
            const val = isMultiChannel
                ? ("0" + ((harp_geoutils_1.MathUtils.clamp(value, 0, 1) * 255) | 0).toString(16)).slice(-2)
                : value;
            result += val;
        }
        return result;
    }
}
exports.getPropertyValue = getPropertyValue;
/**
 * Checks if a property is interpolated.
 * @param p property to be checked
 */
function isInterpolatedPropertyDefinition(p) {
    if (p !== undefined &&
        p.values instanceof Array &&
        p.values.length > 0 &&
        p.values[0] !== undefined &&
        p.zoomLevels instanceof Array &&
        p.zoomLevels.length > 0 &&
        p.zoomLevels[0] !== undefined &&
        p.values.length === p.zoomLevels.length) {
        return true;
    }
    return false;
}
exports.isInterpolatedPropertyDefinition = isInterpolatedPropertyDefinition;
/**
 * Type guard to check if an object is an instance of `InterpolatedProperty`.
 */
function isInterpolatedProperty(p) {
    if (p !== undefined &&
        p.interpolationMode !== undefined &&
        p.zoomLevels !== undefined &&
        p.values !== undefined &&
        p.values.length > 0 &&
        (p.zoomLevels.length === p.values.length / 3 || p.zoomLevels.length === p.values.length)) {
        return true;
    }
    return false;
}
exports.isInterpolatedProperty = isInterpolatedProperty;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Interpolation mode used when computing a [[InterpolatedProperty]] value for a given zoom level.
 */
var InterpolationMode;
(function (InterpolationMode) {
    InterpolationMode[InterpolationMode["Discrete"] = 0] = "Discrete";
    InterpolationMode[InterpolationMode["Linear"] = 1] = "Linear";
    InterpolationMode[InterpolationMode["Cubic"] = 2] = "Cubic";
    InterpolationMode[InterpolationMode["Exponential"] = 3] = "Exponential";
})(InterpolationMode = exports.InterpolationMode || (exports.InterpolationMode = {}));


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Outliner.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Outliner.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = __webpack_require__(/*! three */ "three");
const currEdgeStart = new THREE.Vector2();
const currEdgeGoal = new THREE.Vector2();
const prevEdgeStart = new THREE.Vector2();
const prevEdgeGoal = new THREE.Vector2();
/**
 * Fills an index buffer with the indices for the edges of a polygon contour.
 *
 * @param indexBuffer Edge index buffer to be filled.
 * @param vertexOffset Starting offset of the vertices composing the contour.
 * @param vertexStride Number of elements per contour vertex.
 * @param polygonContour Vertices that compose the contour.
 * @param polygonContourEdges Collection of booleans indicating if contour edges should be added.
 */
function addPolygonEdges(indexBuffer, vertexOffset, vertexStride, polygonContour, polygonContourEdges, isExtruded, addFootprintEdges, wallEdgeSlope) {
    for (let i = 0; i < polygonContourEdges.length; ++i) {
        if (polygonContourEdges[i]) {
            if (isExtruded === true) {
                const vFootprint0 = vertexOffset + i * 2;
                const vRoof0 = vFootprint0 + 1;
                const vFootprint1 = vertexOffset + ((i + 1) % polygonContourEdges.length) * 2;
                const vRoof1 = vFootprint1 + 1;
                if (addFootprintEdges === true) {
                    indexBuffer.push(vFootprint0, vFootprint1);
                }
                indexBuffer.push(vRoof0, vRoof1);
                const prevEdgeIdx = (i === 0 ? polygonContourEdges.length : i) - 1;
                if (polygonContourEdges[prevEdgeIdx]) {
                    if (wallEdgeSlope !== undefined) {
                        const v0x = polygonContour[i * vertexStride];
                        const v0y = polygonContour[i * vertexStride + 1];
                        const v1x = polygonContour[((i + 1) % polygonContourEdges.length) * vertexStride];
                        const v1y = polygonContour[((i + 1) % polygonContourEdges.length) * vertexStride + 1];
                        currEdgeStart.set(v0x, v0y);
                        currEdgeGoal.set(v1x, v1y);
                        prevEdgeStart.set(polygonContour[prevEdgeIdx * vertexStride], polygonContour[prevEdgeIdx * vertexStride + 1]);
                        prevEdgeGoal.set(currEdgeStart.x, currEdgeStart.y);
                        if (prevEdgeGoal
                            .sub(prevEdgeStart)
                            .normalize()
                            .dot(currEdgeGoal.sub(currEdgeStart).normalize()) <= wallEdgeSlope) {
                            indexBuffer.push(vFootprint0, vRoof0);
                        }
                    }
                    else {
                        indexBuffer.push(vFootprint0, vRoof0);
                    }
                }
            }
            else {
                const vFoot0 = vertexOffset + i;
                const vRoof0 = vertexOffset + ((i + 1) % polygonContourEdges.length);
                indexBuffer.push(vFoot0, vRoof0);
            }
        }
    }
}
exports.addPolygonEdges = addPolygonEdges;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/StyleSetEvaluator.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/StyleSetEvaluator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const Expr_1 = __webpack_require__(/*! ./Expr */ "./node_modules/@here/harp-datasource-protocol/lib/Expr.js");
const InterpolatedProperty_1 = __webpack_require__(/*! ./InterpolatedProperty */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedProperty.js");
const InterpolatedPropertyDefs_1 = __webpack_require__(/*! ./InterpolatedPropertyDefs */ "./node_modules/@here/harp-datasource-protocol/lib/InterpolatedPropertyDefs.js");
exports.logger = harp_utils_1.LoggerManager.instance.create("StyleSetEvaluator");
/**
 * Combine data from datasource and apply the rules from a specified theme to show it on the map.
 */
class StyleSetEvaluator {
    constructor(styleSet) {
        this.m_renderOrderBiasGroups = new Map();
        this.m_techniques = [];
        let techniqueRenderOrder = 0;
        let styleSetIndex = 0;
        const cloneStyle = (style) => {
            return Object.assign({}, style, { styles: style.styles !== undefined
                    ? style.styles.map(subStyle => cloneStyle(subStyle))
                    : undefined });
        };
        this.styleSet = styleSet.map(style => cloneStyle(style));
        const computeDefaultRenderOrder = (style) => {
            if (style.renderOrderBiasGroup !== undefined) {
                const renderOrderBiasGroupOrder = style.renderOrderBiasGroup
                    ? this.m_renderOrderBiasGroups.get(style.renderOrderBiasGroup)
                    : undefined;
                if (style.renderOrderBiasRange !== undefined &&
                    renderOrderBiasGroupOrder === undefined) {
                    if (style.renderOrder !== undefined) {
                        exports.logger.warn("WARN: style.renderOrder will be overridden if " +
                            "renderOrderBiasGroup is set:", style);
                    }
                    const [minRange, maxRange] = style.renderOrderBiasRange;
                    style.renderOrder =
                        minRange < 0
                            ? techniqueRenderOrder + Math.abs(minRange)
                            : techniqueRenderOrder;
                    techniqueRenderOrder += Math.abs(minRange) + maxRange;
                    if (style.renderOrderBiasGroup) {
                        this.m_renderOrderBiasGroups.set(style.renderOrderBiasGroup, style.renderOrder);
                    }
                    techniqueRenderOrder++;
                }
                else if (renderOrderBiasGroupOrder) {
                    if (style.renderOrder !== undefined) {
                        exports.logger.warn("WARN: style.renderOrder will be overridden if " +
                            "renderOrderBiasGroup is set:", style);
                    }
                    style.renderOrder = renderOrderBiasGroupOrder;
                }
            }
            // search through child styles
            if (style.styles !== undefined) {
                for (const currStyle of style.styles) {
                    computeDefaultRenderOrder(currStyle);
                }
            }
            else {
                style._styleSetIndex = styleSetIndex++;
                if (style.technique !== undefined && style.renderOrder === undefined) {
                    style.renderOrder = techniqueRenderOrder++;
                }
            }
        };
        for (const style of this.styleSet) {
            computeDefaultRenderOrder(style);
        }
    }
    /**
     * Find all techniques that fit the current objects' environment.
     * *The techniques in the resulting array may not be modified* since they are being reused for
     * identical objects.
     *
     * @param env The objects environment, i.e. the attributes that are relevant for its
     * representation.
     */
    getMatchingTechniques(env) {
        const result = [];
        const styleStack = new Array();
        for (const currStyle of this.styleSet) {
            if (styleStack.length !== 0) {
                throw new Error("Internal error: style stack cleanup failed");
            }
            if (this.processStyle(env, styleStack, currStyle, result)) {
                break;
            }
        }
        return result;
    }
    /**
     * Get the (current) array of techniques that have been created during decoding.
     */
    get techniques() {
        return this.m_techniques;
    }
    /**
     * Shorten the style object for debug log. Remove special strings (starting with "_") as well
     * as the sub-styles of style groups.
     *
     * @param key Key in object
     * @param value value in object
     */
    cleanupStyle(key, value) {
        // Filtering out properties
        if (key === "styles") {
            return "[...]";
        }
        if (key.startsWith("_")) {
            return undefined;
        }
        return value;
    }
    /**
     * Process a style (and its sub-styles) hierarchically to look for the technique that fits the
     * current objects' environment. The attributes of the styles are assembled to create a unique
     * technique for every object.
     *
     * @param env The objects environment, i.e. the attributes that are relevant for its
     *            representation.
     * @param styleStack Stack of styles containing the hierarchy of styles up to this point.
     * @param style Current style (could also be top of stack).
     * @param result The array of resulting techniques. There may be more than one technique per
     *               object, resulting in multiple graphical objects for representation.
     * @returns `true` if style has been found and processing is finished. `false` if not found, or
     *          more than one technique should be applied.
     */
    processStyle(env, styleStack, style, result) {
        if (style.when !== undefined) {
            // optimization: Lazy evaluation of when-expression
            if (style._whenExpr === undefined) {
                style._whenExpr = Expr_1.Expr.parse(style.when);
            }
            if (!style._whenExpr.evaluate(env)) {
                return false;
            }
        }
        // search through sub-styles
        if (style.styles !== undefined) {
            if (style.debug) {
                exports.logger.log("\n======== style group =========\nenv:", JSON.stringify(env.unmap(), undefined, 2), "\nstyle group:", JSON.stringify(style, this.cleanupStyle, 2));
            }
            styleStack.push(style);
            for (const currStyle of style.styles) {
                if (this.processStyle(env, styleStack, currStyle, result)) {
                    styleStack.pop();
                    return true;
                }
            }
            styleStack.pop();
        }
        else {
            // we found a technique!
            if (style.technique !== undefined) {
                if (style.technique !== "none") {
                    // Check if we already assembled the technique for exactly this style. If we
                    // have, we return the preassembled technique object. Otherwise we assemble the
                    // technique from all parent styles' attributes and the current stales'
                    // attributes, and add it to the cached techniques.
                    if (style._index === undefined) {
                        const technique = this.createTechnique(style, styleStack);
                        result.push(technique);
                        if (style.debug) {
                            exports.logger.log("\n======== style w/ technique =========\nenv:", JSON.stringify(env.unmap(), undefined, 2), "\nstyle:", JSON.stringify(style, this.cleanupStyle, 2), "\ntechnique:", JSON.stringify(technique, this.cleanupStyle, 2));
                        }
                    }
                    else {
                        result.push(this.m_techniques[style._index]);
                    }
                }
                // stop processing if "final" is set
                return style.final === true;
            }
        }
        return false;
    }
    createTechnique(style, styleStack) {
        const technique = {};
        technique.name = style.technique;
        const addAttributes = (currStyle) => {
            if (currStyle.renderOrder !== undefined) {
                technique.renderOrder = currStyle.renderOrder;
            }
            if (currStyle.transient !== undefined) {
                technique.transient = currStyle.transient;
            }
            if (currStyle.renderOrderBiasProperty !== undefined) {
                technique.renderOrderBiasProperty = currStyle.renderOrderBiasProperty;
            }
            if (currStyle.labelProperty !== undefined) {
                technique.label = currStyle.labelProperty;
            }
            if (currStyle.renderOrderBiasRange !== undefined) {
                technique.renderOrderBiasRange = currStyle.renderOrderBiasRange;
            }
            if (currStyle.renderOrderBiasGroup !== undefined) {
                technique.renderOrderBiasGroup = currStyle.renderOrderBiasGroup;
            }
            if (currStyle.secondaryRenderOrder !== undefined) {
                technique.secondaryRenderOrder = currStyle.secondaryRenderOrder;
            }
            if (currStyle.attr !== undefined) {
                Object.getOwnPropertyNames(currStyle.attr).forEach(property => {
                    const prop = currStyle.attr[property];
                    if (InterpolatedProperty_1.isInterpolatedPropertyDefinition(prop)) {
                        switch (typeof prop.values[0]) {
                            default:
                            case "number":
                                technique[property] = createInterpolatedProperty(prop);
                                break;
                            case "boolean":
                                technique[property] = createInterpolatedProperty(prop);
                                break;
                            case "string":
                                technique[property] = createInterpolatedProperty(prop);
                                break;
                        }
                    }
                    else {
                        technique[property] = prop;
                    }
                });
            }
        };
        for (const currStyle of styleStack) {
            addAttributes(currStyle);
        }
        addAttributes(style);
        style._index = this.m_techniques.length;
        technique._index = style._index;
        technique._styleSetIndex = style._styleSetIndex;
        this.m_techniques.push(technique);
        return technique;
    }
}
exports.StyleSetEvaluator = StyleSetEvaluator;
function removeDuplicatePropertyValues(p) {
    for (let i = 0; i < p.values.length; ++i) {
        const firstIdx = p.zoomLevels.findIndex((a) => {
            return a === p.zoomLevels[i];
        });
        if (firstIdx !== i) {
            p.zoomLevels.splice(--i, 1);
            p.values.splice(--i, 1);
        }
    }
}
function createInterpolatedProperty(prop) {
    removeDuplicatePropertyValues(prop);
    const propKeys = new Float32Array(prop.zoomLevels);
    let propValues;
    switch (typeof prop.values[0]) {
        default:
        case "number":
            propValues = new Float32Array(prop.values);
            return {
                interpolationMode: prop.interpolation !== undefined
                    ? InterpolatedPropertyDefs_1.InterpolationMode[prop.interpolation]
                    : InterpolatedPropertyDefs_1.InterpolationMode.Discrete,
                zoomLevels: propKeys,
                values: propValues,
                exponent: prop.exponent
            };
        case "boolean":
            propValues = new Float32Array(prop.values.length);
            for (let i = 0; i < prop.values.length; ++i) {
                propValues[i] = prop.values[i] ? 1 : 0;
            }
            return {
                interpolationMode: InterpolatedPropertyDefs_1.InterpolationMode.Discrete,
                zoomLevels: propKeys,
                values: propValues,
                exponent: prop.exponent
            };
        case "string":
            propValues = new Float32Array(prop.values.length * 3);
            for (let i = 0; i < prop.values.length; ++i) {
                const value = +prop.values[i].replace("#", "0x");
                // tslint:disable:no-bitwise
                const channels = [
                    ((value >> 16) & 255) / 255,
                    ((value >> 8) & 255) / 255,
                    ((value >> 0) & 255) / 255
                ];
                // tslint:disable:bitwise
                for (let j = 0; j < prop.values.length * 3; ++j) {
                    propValues[i * 3 + j] = channels[j];
                }
            }
            return {
                interpolationMode: prop.interpolation !== undefined
                    ? InterpolatedPropertyDefs_1.InterpolationMode[prop.interpolation]
                    : InterpolatedPropertyDefs_1.InterpolationMode.Discrete,
                zoomLevels: propKeys,
                values: propValues,
                exponent: prop.exponent
            };
    }
}


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TextureCoordinateType;
(function (TextureCoordinateType) {
    /**
     * Texture coordinates are in tile space.
     * SW of the tile will have (0,0) and NE will have (1,1).
     */
    TextureCoordinateType["TileSpace"] = "tile-space";
    /**
     * Texture coordinates are in equirectangular space.
     * (u, v) = ( (longitude+180) / 360, (latitude+90) / 180).
     */
    TextureCoordinateType["EquirectangularSpace"] = "equirectangular-space";
})(TextureCoordinateType = exports.TextureCoordinateType || (exports.TextureCoordinateType = {}));
/**
 * Define the stacking option. Enum values for theme file are in "kebab-case".
 */
var PoiStackMode;
(function (PoiStackMode) {
    /**
     * Show in a stack.
     */
    PoiStackMode["Show"] = "show-in-stack";
    /**
     * Do not show in a stack.
     */
    PoiStackMode["Hide"] = "hide-in-stack";
    /**
     * Show category parent in the stack.
     */
    PoiStackMode["ShowParent"] = "show-parent";
})(PoiStackMode = exports.PoiStackMode || (exports.PoiStackMode = {}));
/**
 * Type guard to check if an object is an instance of `TextureBuffer`.
 */
function isTextureBuffer(object) {
    return object && object.buffer && typeof object.type === "string";
}
exports.isTextureBuffer = isTextureBuffer;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/Techniques.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/Techniques.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TechniqueParams_1 = __webpack_require__(/*! ./TechniqueParams */ "./node_modules/@here/harp-datasource-protocol/lib/TechniqueParams.js");
/**
 * Names of the supported texure properties.
 */
exports.TEXTURE_PROPERTY_KEYS = [
    "map",
    "normalMap",
    "displacementMap",
    "roughnessMap",
    "emissiveMap",
    "alphaMap",
    "metalnessMap",
    "bumpMap"
];
/**
 * Type guard to check if an object is an instance of [[CirclesTechnique]].
 */
function isCirclesTechnique(technique) {
    return technique.name === "circles";
}
exports.isCirclesTechnique = isCirclesTechnique;
/**
 * Type guard to check if an object is an instance of [[SquaresTechnique]].
 */
function isSquaresTechnique(technique) {
    return technique.name === "squares";
}
exports.isSquaresTechnique = isSquaresTechnique;
/**
 * Type guard to check if an object is an instance of [[PoiTechnique]].
 */
function isPoiTechnique(technique) {
    return technique.name === "labeled-icon";
}
exports.isPoiTechnique = isPoiTechnique;
/**
 * Type guard to check if an object is an instance of [[LineMarkerTechnique]].
 */
function isLineMarkerTechnique(technique) {
    return technique.name === "line-marker";
}
exports.isLineMarkerTechnique = isLineMarkerTechnique;
/**
 * Type guard to check if an object is an instance of [[DashedLineTechnique]].
 */
function isDashedLineTechnique(technique) {
    return technique.name === "dashed-line";
}
exports.isDashedLineTechnique = isDashedLineTechnique;
/**
 * Type guard to check if an object is an instance of [[LineTechnique]].
 */
function isLineTechnique(technique) {
    return technique.name === "line";
}
exports.isLineTechnique = isLineTechnique;
/**
 * Type guard to check if an object is an instance of [[SolidLineTechnique]].
 */
function isSolidLineTechnique(technique) {
    return technique.name === "solid-line";
}
exports.isSolidLineTechnique = isSolidLineTechnique;
/**
 * Type guard to check if an object is an instance of [[SegmentsTechnique]].
 */
function isSegmentsTechnique(technique) {
    return technique.name === "segments";
}
exports.isSegmentsTechnique = isSegmentsTechnique;
/**
 * Type guard to check if an object is an instance of [[BasicExtrudedLineTechnique]]
 * or [[StandardExtrudedLineTechnique]].
 */
function isExtrudedLineTechnique(technique) {
    return technique.name === "extruded-line";
}
exports.isExtrudedLineTechnique = isExtrudedLineTechnique;
/**
 * Type guard to check if an object is an instance of [[BasicExtrudedLineTechnique]].
 */
function isBasicExtrudedLineTechnique(technique) {
    return isExtrudedLineTechnique(technique) && technique.shading === "basic";
}
exports.isBasicExtrudedLineTechnique = isBasicExtrudedLineTechnique;
/**
 * Type guard to check if an object is an instance of [[StandardExtrudedLineTechnique]].
 */
function isStandardExtrudedLineTechnique(technique) {
    return isExtrudedLineTechnique(technique) && technique.shading === "standard";
}
exports.isStandardExtrudedLineTechnique = isStandardExtrudedLineTechnique;
/**
 * Type guard to check if an object is an instance of [[FillTechnique]].
 */
function isFillTechnique(technique) {
    return technique.name === "fill";
}
exports.isFillTechnique = isFillTechnique;
/**
 * Type guard to check if an object is an instance of [[ExtrudedPolygonTechnique]].
 */
function isExtrudedPolygonTechnique(technique) {
    return technique.name === "extruded-polygon";
}
exports.isExtrudedPolygonTechnique = isExtrudedPolygonTechnique;
/**
 * Type guard to check if an object is an instance of [[StandardTechnique]].
 */
function isStandardTechnique(technique) {
    return technique.name === "standard";
}
exports.isStandardTechnique = isStandardTechnique;
/**
 * Type guard to check if an object is an instance of [[TerrainTechnique]].
 */
function isTerrainTechnique(technique) {
    return technique.name === "terrain";
}
exports.isTerrainTechnique = isTerrainTechnique;
/**
 * Type guard to check if an object is an instance of [[TextTechnique]].
 */
function isTextTechnique(technique) {
    return technique.name === "text";
}
exports.isTextTechnique = isTextTechnique;
/**
 * Type guard to check if an object is an instance of [[ShaderTechnique]].
 */
function isShaderTechnique(technique) {
    return technique.name === "shader";
}
exports.isShaderTechnique = isShaderTechnique;
/**
 * Check if vertex normals should be generated for this technique (if no normals are in the data).
 * @param technique Technique to check.
 */
function needsVertexNormals(technique) {
    return (isStandardTechnique(technique) ||
        isTerrainTechnique(technique) ||
        isStandardExtrudedLineTechnique(technique));
}
exports.needsVertexNormals = needsVertexNormals;
/**
 * Get the texture coordinate type if the technique supports it.
 */
function textureCoordinateType(technique) {
    if (isStandardTechnique(technique)) {
        return technique.textureCoordinateType;
    }
    else if (isExtrudedPolygonTechnique(technique)) {
        return technique.textureCoordinateType;
    }
    else if (isTerrainTechnique(technique)) {
        return technique.textureCoordinateType;
    }
    else {
        return undefined;
    }
}
exports.textureCoordinateType = textureCoordinateType;
/**
 * Add all the buffers of the technique to the transfer list.
 */
function addBuffersToTransferList(technique, transferList) {
    if (isStandardTechnique(technique) ||
        isExtrudedPolygonTechnique(technique) ||
        isTerrainTechnique(technique)) {
        for (const texturePropertyKey of exports.TEXTURE_PROPERTY_KEYS) {
            const textureProperty = technique[texturePropertyKey];
            if (TechniqueParams_1.isTextureBuffer(textureProperty)) {
                if (textureProperty.buffer instanceof ArrayBuffer) {
                    transferList.push(textureProperty.buffer);
                }
            }
        }
    }
}
exports.addBuffersToTransferList = addBuffersToTransferList;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/ThemeVisitor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/ThemeVisitor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The ThemeVisitor visits every style in the theme in a depth-first fashion.
 */
class ThemeVisitor {
    constructor(theme) {
        this.theme = theme;
    }
    /**
     * Applies a function to every style in the theme.
     *
     * @param visitFunc Function to be called with `style` as an argument. Function should return
     *                  `true` to cancel visitation.
     * @returns `true` if function has finished prematurely.
     */
    visitStyles(visitFunc) {
        const visit = (style) => {
            if (visitFunc(style)) {
                return true;
            }
            if (style.styles !== undefined) {
                for (const currStyle of style.styles) {
                    if (visit(currStyle)) {
                        return true;
                    }
                }
            }
            return false;
        };
        if (this.theme.styles !== undefined) {
            for (const styleSetName in this.theme.styles) {
                if (this.theme.styles[styleSetName] !== undefined) {
                    for (const style of this.theme.styles[styleSetName]) {
                        if (visit(style)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}
exports.ThemeVisitor = ThemeVisitor;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/TileInfo.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/TileInfo.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
/**
 * Minimum estimated size of a JS object.
 */
const MINIMUM_OBJECT_SIZE_ESTIMATION = 100;
/**
 * Structure of arrays containing data for all features of this group. No methods, since the object
 * is being passed as part of ExtendedTileInfo across "process boundaries" to the web worker.
 *
 * Supporting methods in namespace [[ExtendedTileInfo]].
 */
class FeatureGroup {
    /**
     * Construct featureGroup.
     *
     * @param storeExtendedTags Pass `true` to create fields for more OMV tags (`layer`, `class`
     * and `type`).
     */
    constructor(storeExtendedTags, startSize = 5000) {
        /** featureIds */
        this.featureIds = new Array();
        /** number of features */
        this.numFeatures = 0;
        /** number of positions of elements (2 per point) */
        this.numPositions = 0;
        this.featureIds = new Array(startSize);
        this.featureIds.length = startSize;
        this.techniqueIndex = new Array(startSize);
        this.techniqueIndex.length = startSize;
        this.textIndex = new Array(startSize);
        this.textIndex.length = startSize;
        this.positionIndex = new Array(startSize);
        this.positionIndex.length = startSize;
        this.positions = new Array(10 * startSize);
        this.positions.length = 10 * startSize;
        if (storeExtendedTags) {
            this.layerIndex = new Array(startSize);
            this.layerIndex.length = startSize;
            this.classIndex = new Array(startSize);
            this.classIndex.length = startSize;
            this.typeIndex = new Array(startSize);
            this.typeIndex.length = startSize;
        }
    }
    /**
     * Compute size in bytes.
     */
    getNumBytes() {
        return ((this.featureIds.length +
            this.techniqueIndex.length +
            this.textIndex.length +
            this.positionIndex.length +
            this.positions.length +
            (this.layerIndex !== undefined ? this.layerIndex.length : 0) +
            (this.classIndex !== undefined ? this.classIndex.length : 0) +
            (this.typeIndex !== undefined ? this.typeIndex.length : 0)) *
            8);
    }
}
exports.FeatureGroup = FeatureGroup;
/**
 * Structure of arrays containing data for roads. No methods, since the object is being passed as
 * part of [[ExtendedTileInfo]] across "process boundaries" to the web worker.
 */
class LineFeatureGroup extends FeatureGroup {
    constructor() {
        super(...arguments);
        /**
         * An array of object defined by the user. Certain elements may be `undefined` (if this line
         * feature is not a road, or if the object for that feature is undefined).
         */
        this.userData = [];
    }
    getNumBytes() {
        return (super.getNumBytes() +
            ((this.segmentIds !== undefined ? this.segmentIds.length : 0) +
                (this.segmentStartOffsets !== undefined ? this.segmentStartOffsets.length : 0) +
                (this.segmentEndOffsets !== undefined ? this.segmentEndOffsets.length : 0)) *
                8);
    }
}
exports.LineFeatureGroup = LineFeatureGroup;
/**
 * Structure of arrays containing data for polygons. No methods, since the object is being passed as
 * part of ExtendedTileInfo across "process boundaries" to the web worker.
 *
 * Supporting methods in namespace [[ExtendedTileInfo]].
 *
 * Due to the complexity of the access, there are supporting classes to store and access data in
 * the feature groups. See [[ExtendedTileInfoWriter]] and [[ExtendedTileInfoPolygonAccessor]].
 */
class PolygonFeatureGroup extends FeatureGroup {
    constructor(storeExtendedTags, startSize = 5000) {
        super(storeExtendedTags, startSize);
        /**
         * Number of rings stored in all polygons in tis group. Used to keep size of the
         * arrays.
         */
        this.groupNumRings = 0;
        this.outerRingStartIndex = new Array(startSize);
        this.outerRingStartIndex.length = startSize;
        this.innerRingIsOuterContour = new Array(startSize);
        this.innerRingIsOuterContour.length = startSize;
        this.innerRingStartIndex = new Array(startSize);
        this.innerRingStartIndex.length = startSize;
    }
    getNumBytes() {
        return (super.getNumBytes() +
            ((this.outerRingStartIndex !== undefined ? this.outerRingStartIndex.length : 0) +
                (this.innerRingIsOuterContour !== undefined
                    ? this.innerRingIsOuterContour.length
                    : 0) +
                (this.innerRingStartIndex !== undefined ? this.innerRingStartIndex.length : 0)) *
                8);
    }
}
exports.PolygonFeatureGroup = PolygonFeatureGroup;
/**
 * Class to hold infos from [[OmvTile]]s. Optimized for fast serialization when being passed from
 * webworker to main thread. No methods, since the object is being passed across "process
 * boundaries" to the web worker.
 *
 * Supporting methods in namespace [[ExtendedTileInfo]].
 *
 * Due to the complexity of the access, there are supporting classes to store and access data in
 * the feature groups. See [[ExtendedTileInfoWriter]] and [[ExtendedTileInfoPolygonAccessor]].
 */
class ExtendedTileInfo {
    constructor(tileKey, storeExtendedTags) {
        this.tileKey = tileKey;
        /**
         * Catalog of strings. Addressed by every features stringIndex.
         */
        this.textCatalog = new Array();
        /**
         * Catalog of techniques. Addressed by every features featureIndex.
         */
        this.techniqueCatalog = new Array();
        /**
         * Used for performance diagnostics.
         */
        this.setupTime = 0;
        /**
         * Size in bytes.
         */
        this.numBytes = 0;
        this.pointGroup = new FeatureGroup(storeExtendedTags);
        this.lineGroup = new LineFeatureGroup(storeExtendedTags);
        this.polygonGroup = new PolygonFeatureGroup(storeExtendedTags);
        if (storeExtendedTags) {
            this.layerCatalog = new Array();
            this.classCatalog = new Array();
            this.typeCatalog = new Array();
        }
    }
    /**
     * Compute the memory footprint caused by objects owned by the `ExtendedTileInfo`.
     */
    getNumBytes() {
        let numBytes = MINIMUM_OBJECT_SIZE_ESTIMATION;
        for (const str of this.textCatalog) {
            numBytes += 2 * str.length;
        }
        numBytes += this.techniqueCatalog.length * MINIMUM_OBJECT_SIZE_ESTIMATION;
        numBytes += this.pointGroup.getNumBytes();
        numBytes += this.lineGroup.getNumBytes();
        numBytes += this.polygonGroup.getNumBytes();
        if (this.layerCatalog !== undefined) {
            for (const str of this.layerCatalog) {
                numBytes += 2 * str.length;
            }
            for (const str of this.classCatalog) {
                numBytes += 2 * str.length;
            }
            for (const str of this.typeCatalog) {
                numBytes += 2 * str.length;
            }
        }
        return numBytes;
    }
}
exports.ExtendedTileInfo = ExtendedTileInfo;
(function (ExtendedTileInfo) {
    function finishFeatureGroup(featureGroup) {
        featureGroup.featureIds.length = featureGroup.numFeatures;
        featureGroup.techniqueIndex.length = featureGroup.numFeatures;
        featureGroup.textIndex.length = featureGroup.numFeatures;
        featureGroup.positionIndex.length = featureGroup.numFeatures;
        featureGroup.positions.length = featureGroup.numPositions;
        if (featureGroup.layerIndex !== undefined) {
            featureGroup.layerIndex.length = featureGroup.numFeatures;
        }
        if (featureGroup.classIndex !== undefined) {
            featureGroup.classIndex.length = featureGroup.numFeatures;
        }
        if (featureGroup.typeIndex !== undefined) {
            featureGroup.typeIndex.length = featureGroup.numFeatures;
        }
    }
    function finishPolygonFeatureGroup(polygonGroup) {
        finishFeatureGroup(polygonGroup);
        polygonGroup.outerRingStartIndex.length = polygonGroup.numFeatures;
        polygonGroup.innerRingIsOuterContour.length = polygonGroup.groupNumRings;
        polygonGroup.innerRingStartIndex.length = polygonGroup.groupNumRings;
    }
    function finishLineFeatureGroup(lineGroup) {
        finishFeatureGroup(lineGroup);
        if (lineGroup.segmentIds !== undefined) {
            lineGroup.segmentIds.length = lineGroup.numFeatures;
            lineGroup.segmentStartOffsets.length = lineGroup.numFeatures;
            lineGroup.segmentEndOffsets.length = lineGroup.numFeatures;
        }
    }
    /**
     * Finalize the tile's features groups.
     */
    function finish(tileInfo) {
        finishFeatureGroup(tileInfo.pointGroup);
        finishLineFeatureGroup(tileInfo.lineGroup);
        finishPolygonFeatureGroup(tileInfo.polygonGroup);
        tileInfo.numBytes = tileInfo.getNumBytes();
    }
    ExtendedTileInfo.finish = finish;
    /**
     * Returns the number of features in this feature group.
     */
    function featureGroupSize(featureGroup) {
        return featureGroup.numFeatures;
    }
    ExtendedTileInfo.featureGroupSize = featureGroupSize;
    /**
     * Check if the feature group is finalized.
     */
    function featureGroupFinished(featureGroup) {
        return featureGroup.numPositions === featureGroup.positions.length;
    }
    ExtendedTileInfo.featureGroupFinished = featureGroupFinished;
    /**
     * Check if the tileInfo is finalized.
     */
    function tileInfoFinished(tileInfo) {
        return (featureGroupFinished(tileInfo.pointGroup) &&
            featureGroupFinished(tileInfo.lineGroup) &&
            featureGroupFinished(tileInfo.polygonGroup));
    }
    ExtendedTileInfo.tileInfoFinished = tileInfoFinished;
    /**
     * Determine the text string of the (OMV) feature. It implements the special handling required
     * to determine the text content of a feature from its tags, which are passed in as the `env`.
     *
     * @param env Environment containing the tags from the (OMV) feature.
     * @param useAbbreviation `true` to use the abbreviation if available.
     * @param useIsoCode `true` to use the tag "iso_code".
     * @param languages List of languages to use, for example: Specify "en" to use the tag "name_en"
     *                  as the text of the string. Order reflects priority.
     */
    function getFeatureName(env, useAbbreviation, useIsoCode, languages) {
        let name;
        if (useAbbreviation) {
            const abbreviation = env.lookup(`name:short`);
            if (typeof abbreviation === "string" && abbreviation.length > 0) {
                return abbreviation;
            }
        }
        if (useIsoCode) {
            const isoCode = env.lookup(`iso_code`);
            if (typeof isoCode === "string" && isoCode.length > 0) {
                return isoCode;
            }
        }
        if (languages !== undefined) {
            for (const lang of languages) {
                name = env.lookup(`name:${lang}`) || env.lookup(`name_${lang}`);
                if (typeof name === "string" && name.length > 0) {
                    return name;
                }
            }
        }
        name = env.lookup("name");
        if (typeof name === "string") {
            return name;
        }
        return undefined;
    }
    ExtendedTileInfo.getFeatureName = getFeatureName;
})(ExtendedTileInfo = exports.ExtendedTileInfo || (exports.ExtendedTileInfo = {}));
/**
 * Support class for [[ExtendedTileInfo]]. Assist in filling it with data.
 */
class ExtendedTileInfoWriter {
    /**
     * Create an [[ExtendedTileInfoWriter]] for an [[ExtendedTileInfo]]. Assist in filling the
     * [[ExtendedTileInfo]] with data.
     *
     * @param tileInfo [[ExtendedTileInfo]] to write data to.
     * @param storeExtendedTags Pass `true` if feature data like `layer`, `class`or `type` should
     *          be stored for every feature.
     */
    constructor(tileInfo, storeExtendedTags, languages) {
        this.tileInfo = tileInfo;
        this.storeExtendedTags = storeExtendedTags;
        this.languages = languages;
        /** Map to identify which techniques already have been added to the [[ExtendedTileInfo]]. */
        this.techniqueIndexMap = new Map();
        /** Map to identify which strings already have been added to the [[ExtendedTileInfo]]. */
        this.stringMap = new Map();
        /** Map to identify which `layer` names already have been added to the [[ExtendedTileInfo]]. */
        this.layerMap = new Map();
        /** Map to identify which `class` names already have been added to the [[ExtendedTileInfo]]. */
        this.classMap = new Map();
        /** Map to identify which `type` names already have been added to the [[ExtendedTileInfo]]. */
        this.typeMap = new Map();
    }
    /**
     * Adds a [[Technique]] to the catalog of techniques. Individual techniques have a `_index` file
     * which has been created in the [[StyleSetEvaluator]]. This index is required to identify a
     * technique. The `Map` is used to map techniques to already added techniques, or store the
     * technique as new, and add it to the map.
     *
     * @param technique The [[Technique]] to add.
     */
    addTechnique(technique) {
        let infoTileTechniqueIndex = this.techniqueIndexMap.get(technique._index);
        if (infoTileTechniqueIndex !== undefined) {
            return infoTileTechniqueIndex;
        }
        infoTileTechniqueIndex = this.tileInfo.techniqueCatalog.length;
        // add a new technique. Select the subset of features that should be stored (e.g., _index is
        // not)
        const storedTechnique = {};
        Object.getOwnPropertyNames(technique).forEach(property => {
            if (!property.startsWith("_")) {
                storedTechnique[property] = technique[property];
            }
        });
        // Keep the index to identify the original technique later.
        storedTechnique._index = technique._index;
        storedTechnique._styleSetIndex = technique._styleSetIndex;
        this.techniqueIndexMap.set(technique._index, infoTileTechniqueIndex);
        this.tileInfo.techniqueCatalog.push(storedTechnique);
        return infoTileTechniqueIndex;
    }
    /**
     * Add a feature.
     *
     * @param featureGroup The feature group to add to.
     * @param technique The technique to add.
     * @param env The `env` which is a mix of original OMV feature tags and fields added by the
     *      [[StyleSetEvaluator]]
     * @param featureId The featureId, a number unique for many features (but not all).
     * @param infoTileTechniqueIndex The previously computed index of the technique. Must have been
     *      computed by `addTechnique(technique)`.
     * @param isPolygonGroup `true`for polygons.
     */
    addFeature(featureGroup, technique, env, featureId, infoTileTechniqueIndex, isPolygonGroup) {
        // compute name/label of feature
        const textTechnique = technique;
        const textLabel = textTechnique.label;
        const useAbbreviation = textTechnique.useAbbreviation;
        const useIsoCode = textTechnique.useIsoCode;
        const name = typeof textLabel === "string"
            ? env.lookup(textLabel)
            : ExtendedTileInfo.getFeatureName(env, useAbbreviation, useIsoCode, this.languages);
        let stringIndex = -1;
        if (name && typeof name === "string") {
            stringIndex = this.addText(name);
        }
        // add indices into the arrays.
        featureGroup.featureIds[featureGroup.numFeatures] = featureId;
        featureGroup.techniqueIndex[featureGroup.numFeatures] = infoTileTechniqueIndex;
        featureGroup.textIndex[featureGroup.numFeatures] = stringIndex;
        featureGroup.positionIndex[featureGroup.numFeatures] = featureGroup.numPositions;
        // polygons need the extra fields for polygon rings
        if (isPolygonGroup) {
            const polygonGroup = featureGroup;
            harp_utils_1.assert(polygonGroup.outerRingStartIndex !== undefined);
            harp_utils_1.assert(polygonGroup.innerRingStartIndex !== undefined);
            harp_utils_1.assert(polygonGroup.innerRingIsOuterContour !== undefined);
            polygonGroup.outerRingStartIndex[featureGroup.numFeatures] = polygonGroup.groupNumRings;
        }
        // store the extra feature fields
        if (this.storeExtendedTags) {
            featureGroup.layerIndex[featureGroup.numFeatures] = this.addLayer(env.lookup("$layer"));
            featureGroup.classIndex[featureGroup.numFeatures] = this.addClass(env.lookup("class"));
            featureGroup.typeIndex[featureGroup.numFeatures] = this.addType(env.lookup("type"));
        }
        featureGroup.numFeatures++;
    }
    /**
     * Add the X/Y coordinate of the point. Only for point feature groups.
     *
     * @param featureGroup The feature group to add it to.
     * @param x X Position of point.
     * @param y Y Position of point.
     */
    addFeaturePoint(featureGroup, x, y) {
        featureGroup.positions[featureGroup.numPositions++] = x;
        featureGroup.positions[featureGroup.numPositions++] = y;
    }
    /**
     * Add the line points as X/Y coordinates to the line feature.
     *
     * If a line feature has more than one line (rare for HERE data), it should define multiple
     * line features for it.
     *
     * @param featureGroup The feature group to add to. Must be line feature group.
     * @param points The X/Y coordinates of the points.
     */
    addFeaturePoints(featureGroup, points) {
        const n = featureGroup.numPositions;
        const l = points.length;
        const p = featureGroup.positions;
        for (let i = 0; i < l; i++) {
            p[n + i] = points[i];
        }
        featureGroup.numPositions += points.length;
    }
    /**
     * Add the information about road segments to the line feature. Performs lazy initialization of
     * `segmentIds`, `segmentStartOffsets`, and `segmentEndOffsets` members of a
     * [[LineFeatureGroup]] instance.
     *
     * @param featureGroup The line feature group to add information to.
     * @param segmentId Segment id of a feature.
     * @param startOffset Start offset of a feature.
     * @param endOffset End offset of a feature.
     */
    addRoadSegments(featureGroup, segmentId, startOffset, endOffset) {
        if (featureGroup.segmentIds === undefined) {
            featureGroup.segmentIds = new Array();
            featureGroup.segmentStartOffsets = new Array();
            featureGroup.segmentEndOffsets = new Array();
        }
        featureGroup.segmentIds[featureGroup.numFeatures - 1] = segmentId;
        featureGroup.segmentStartOffsets[featureGroup.numFeatures - 1] = startOffset;
        featureGroup.segmentEndOffsets[featureGroup.numFeatures - 1] = endOffset;
    }
    /**
     * Add a single ring to the polygon. Can be called multiple times to add multiple rings to the
     * polygon.
     *
     * @param featureGroup Polygon feature group to add polygon ring to.
     * @param contour The X/Y coordinates of the ring.
     * @param isOuterRing Pass `true`if it is a outer ring, otherwise `false`.
     */
    addRingPoints(featureGroup, contour, isOuterRing) {
        featureGroup.innerRingStartIndex[featureGroup.groupNumRings] = featureGroup.numPositions;
        featureGroup.innerRingIsOuterContour[featureGroup.groupNumRings] = isOuterRing ? 1 : 0;
        featureGroup.groupNumRings++;
        const n = featureGroup.numPositions;
        const l = contour.length;
        const p = featureGroup.positions;
        for (let i = 0; i < l; i++) {
            p[n + i] = contour[i];
        }
        featureGroup.numPositions += contour.length;
    }
    /**
     * Finalize the tile info's feature group.
     */
    finish() {
        ExtendedTileInfo.finish(this.tileInfo);
    }
    addText(name) {
        return this.addStringValue(name, this.tileInfo.textCatalog, this.stringMap);
    }
    addLayer(name) {
        return this.addStringValue(name, this.tileInfo.layerCatalog, this.layerMap);
    }
    addClass(name) {
        return this.addStringValue(name, this.tileInfo.classCatalog, this.classMap);
    }
    addType(name) {
        return this.addStringValue(name, this.tileInfo.typeCatalog, this.typeMap);
    }
    // Add a string to the strings catalog. Returns index into the catalog.
    addStringValue(str, catalog, map) {
        if (str === undefined) {
            return -1;
        }
        const name = str.toString();
        let i = map.get(name);
        if (i !== undefined) {
            return i;
        }
        i = catalog.length;
        catalog.push(name);
        map.set(name, i);
        return i;
    }
}
exports.ExtendedTileInfoWriter = ExtendedTileInfoWriter;
/**
 * Implementation of [[ExtendedTileInfoPolygonAccessor]].
 */
class ExtendedTileInfoPolygonAccessorImpl {
    constructor() {
        /**
         * Feature's index in the group.
         */
        this.featureIndex = 0;
        /**
         * Indicates where the ring starts.
         */
        this.ringStart = 0;
        /**
         * Number of rings.
         */
        this.numRings = 0;
    }
    /**
     * Setup the accessor for extended [[TileInfo]].
     *
     * @param polygons polygons feature group.
     * @param featureIndex feature's index in the group.
     * @param ringStart where the ring starts.
     * @param numRings number of rings.
     */
    setup(polygons, featureIndex, ringStart, numRings) {
        this.polygons = polygons;
        this.featureIndex = featureIndex;
        this.ringStart = ringStart;
        this.numRings = numRings;
    }
    /**
     * Shut down the accessor and free all references.
     */
    reset() {
        this.polygons = undefined;
        this.featureIndex = 0;
        this.ringStart = 0;
        this.numRings = 0;
    }
    isOuterRing(ringIndex) {
        harp_utils_1.assert(ringIndex >= 0);
        harp_utils_1.assert(ringIndex < this.numRings);
        harp_utils_1.assert(this.polygons !== undefined);
        if (ringIndex < 0 || ringIndex >= this.numRings || this.polygons === undefined) {
            throw new Error("ExtendedTileInfoPolygonAccessor: Invalid ring index");
        }
        return this.polygons.innerRingIsOuterContour[this.ringStart + ringIndex] !== 0;
    }
    getPoints(ringIndex) {
        harp_utils_1.assert(ringIndex >= 0);
        harp_utils_1.assert(ringIndex < this.numRings);
        harp_utils_1.assert(this.polygons !== undefined);
        if (ringIndex < 0 || ringIndex >= this.numRings || this.polygons === undefined) {
            throw new Error("ExtendedTileInfoPolygonAccessor: Invalid ring index");
        }
        // compute the start/size of the points in this ring. All `points` are actually just the
        // indices of a single X/Y coordinate.
        const pointsStart = this.polygons.innerRingStartIndex[this.ringStart + ringIndex];
        let numPointValues;
        if (ringIndex < this.numRings - 1) {
            numPointValues =
                this.polygons.innerRingStartIndex[this.ringStart + ringIndex + 1] - pointsStart;
        }
        else {
            if (this.ringStart + ringIndex < this.polygons.innerRingStartIndex.length - 1) {
                numPointValues =
                    this.polygons.innerRingStartIndex[this.ringStart + ringIndex + 1] - pointsStart;
            }
            else {
                numPointValues = this.polygons.positions.length - pointsStart;
            }
        }
        return {
            points: this.polygons.positions,
            pointsStart,
            numPointValues
        };
    }
}
/**
 * Supporting class for [[ExtendedTileInfo]]. Takes an [[ExtendedTileInfoHandler]] and calls an
 * `accept` for every feature of the [[ExtendedTileInfo]], or just all features of a specified
 * `featureId`.
 */
class ExtendedTileInfoVisitor {
    constructor(tileInfo) {
        this.tileInfo = tileInfo;
    }
    /**
     * Visit all feature in the [[ExtendedTileInfo]]
     *
     * @param handler Let the `handler` visit all features.
     */
    visitAll(handler) {
        this.visitAllPointFeatures(handler);
        this.visitAllLineFeatures(handler);
        this.visitAllPolygonFeatures(handler);
    }
    /**
     * Visit all features of a specified featureId.
     *
     * @param featureId The featureId to visit.
     * @param handler The `handler` to use.
     */
    visitFeature(featureId, handler) {
        let numFeaturesFound = 0;
        const numPointFeatures = this.tileInfo.pointGroup.numFeatures;
        const pointFeatures = this.tileInfo.pointGroup.featureIds;
        for (let i = 0; i < numPointFeatures; i++) {
            if (pointFeatures[i] === featureId) {
                numFeaturesFound++;
                this.visitPointFeature(i, handler);
            }
        }
        const numLineFeatures = this.tileInfo.lineGroup.numFeatures;
        const lineFeatures = this.tileInfo.lineGroup.featureIds;
        for (let i = 0; i < numLineFeatures; i++) {
            if (lineFeatures[i] === featureId) {
                numFeaturesFound++;
                this.visitLineFeature(i, handler);
            }
        }
        const numPolygonFeatures = this.tileInfo.polygonGroup.numFeatures;
        const polygonsFeatures = this.tileInfo.polygonGroup.featureIds;
        for (let i = 0; i < numPolygonFeatures; i++) {
            if (polygonsFeatures[i] === featureId) {
                numFeaturesFound++;
                this.visitPolygonFeature(i, handler);
            }
        }
        return numFeaturesFound;
    }
    /**
     * Visit all `POINT` features.
     *
     * @param handler The `handler` to use.
     */
    visitAllPointFeatures(handler) {
        const numFeatures = this.tileInfo.pointGroup.numFeatures;
        for (let i = 0; i < numFeatures; i++) {
            this.visitPointFeature(i, handler);
        }
    }
    /**
     * Visit all `LINESTRING` features.
     *
     * @param handler The handler to use.
     */
    visitAllLineFeatures(handler) {
        const numFeatures = this.tileInfo.lineGroup.numFeatures;
        for (let i = 0; i < numFeatures; i++) {
            this.visitLineFeature(i, handler);
        }
    }
    /**
     * Visit all `POLYGON` features.
     *
     * @param handler The `handler` to use.
     */
    visitAllPolygonFeatures(handler) {
        const numFeatures = this.tileInfo.polygonGroup.numFeatures;
        for (let i = 0; i < numFeatures; i++) {
            this.visitPolygonFeature(i, handler);
        }
    }
    getTag(featureIndex, index) {
        return index !== undefined && index[featureIndex] >= 0 ? index[featureIndex] : -1;
    }
    /**
     * Call the `handler` on a point feature.
     *
     * @param featureIndex The index of the feature into the feature table.
     * @param handler The `handler` to use.
     */
    visitPointFeature(featureIndex, handler) {
        const tileInfo = this.tileInfo;
        const points = tileInfo.pointGroup;
        const start = points.positionIndex[featureIndex];
        const x = points.positions[start];
        const y = points.positions[start + 1];
        if (!!handler.acceptPoint) {
            handler.acceptPoint(points.featureIds[featureIndex], points.techniqueIndex[featureIndex], x, y, points.textIndex[featureIndex], this.getTag(featureIndex, points.layerIndex), this.getTag(featureIndex, points.classIndex), this.getTag(featureIndex, points.typeIndex));
        }
    }
    /**
     * Call the `handler` on a line feature.
     *
     * @param featureIndex The index of the feature into the feature table.
     * @param handler The `handler` to use.
     */
    visitLineFeature(featureIndex, handler) {
        const tileInfo = this.tileInfo;
        const lines = tileInfo.lineGroup;
        const numFeatures = lines.numFeatures;
        const positionsStart = lines.positionIndex[featureIndex];
        const numPointValues = featureIndex === numFeatures - 1
            ? lines.positions.length - positionsStart
            : lines.positionIndex[featureIndex + 1] - positionsStart;
        let segmentId;
        let startOffset;
        let endOffset;
        if (lines.segmentIds !== undefined) {
            segmentId = lines.segmentIds[featureIndex];
            startOffset = lines.segmentStartOffsets[featureIndex];
            endOffset = lines.segmentEndOffsets[featureIndex];
        }
        if (!!handler.acceptLine) {
            handler.acceptLine(lines.featureIds[featureIndex], lines.techniqueIndex[featureIndex], lines.textIndex[featureIndex], this.getTag(featureIndex, lines.layerIndex), this.getTag(featureIndex, lines.classIndex), this.getTag(featureIndex, lines.typeIndex), tileInfo.lineGroup.positions, positionsStart, numPointValues, segmentId, startOffset, endOffset);
        }
    }
    /**
     * Call the `handler` on a polygon feature.
     *
     * @param featureIndex The index of the feature into the feature table.
     * @param handler The `handler` to use.
     */
    visitPolygonFeature(featureIndex, handler) {
        if (handler.acceptPolygon === undefined) {
            return;
        }
        const tileInfo = this.tileInfo;
        const polygons = tileInfo.polygonGroup;
        const numFeatures = polygons.numFeatures;
        const ringStart = polygons.outerRingStartIndex[featureIndex];
        const numRings = featureIndex === numFeatures - 1
            ? polygons.innerRingStartIndex.length - ringStart
            : polygons.outerRingStartIndex[featureIndex + 1] - ringStart;
        // Use a static instance, so we do not allocate anything here
        ExtendedTileInfoVisitor.polygonAccessor.setup(polygons, featureIndex, ringStart, numRings);
        handler.acceptPolygon(polygons.featureIds[featureIndex], polygons.techniqueIndex[featureIndex], polygons.textIndex[featureIndex], this.getTag(featureIndex, polygons.layerIndex), this.getTag(featureIndex, polygons.classIndex), this.getTag(featureIndex, polygons.typeIndex), ExtendedTileInfoVisitor.polygonAccessor);
        // Free all data references.
        ExtendedTileInfoVisitor.polygonAccessor.reset();
    }
}
// static instance to work without allocations.
ExtendedTileInfoVisitor.polygonAccessor = new ExtendedTileInfoPolygonAccessorImpl();
exports.ExtendedTileInfoVisitor = ExtendedTileInfoVisitor;


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/WorkerDecoderProtocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/WorkerDecoderProtocol.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Allows to cancel and prioritize requests inside the requestQueue. Useful to optimize the order of
 * decoding tiles during animations and camera movements.
 *
 * `RequestController` is not extending [[AbortController]], because this is not supported in ES5.
 */
class RequestController {
    /**
     * Creates an instance of `RequestController`.
     *
     * @param {number} priority
     * @param {AbortController} abortController Optional [[AbortController]] used internally, since
     *      [[AbortController]]s should not be subclassed.
     */
    constructor(priority = 0, abortController = new AbortController()) {
        this.priority = priority;
        this.abortController = abortController;
    }
    get signal() {
        return this.abortController.signal;
    }
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and
     * signal to any observers that the associated activity is to be aborted.
     */
    abort() {
        this.abortController.abort();
    }
}
exports.RequestController = RequestController;
/**
 * Communication protocol with [[ITileDecoder]].
 */
var WorkerDecoderProtocol;
(function (WorkerDecoderProtocol) {
    /**
     * Define possible names of messages exchanged with decoder services within `WebWorker`.
     */
    let DecoderMessageName;
    (function (DecoderMessageName) {
        DecoderMessageName["Configuration"] = "configuration";
    })(DecoderMessageName = WorkerDecoderProtocol.DecoderMessageName || (WorkerDecoderProtocol.DecoderMessageName = {}));
    /**
     * Type guard to check if an object is an instance of `ConfigurationMessage`.
     */
    function isConfigurationMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === DecoderMessageName.Configuration);
    }
    WorkerDecoderProtocol.isConfigurationMessage = isConfigurationMessage;
    /**
     * Define possible names of requests called on decoder services within `WebWorker`.
     */
    let Requests;
    (function (Requests) {
        Requests["DecodeTileRequest"] = "decode-tile-request";
        Requests["TileInfoRequest"] = "tile-info-request";
    })(Requests = WorkerDecoderProtocol.Requests || (WorkerDecoderProtocol.Requests = {}));
    /**
     * Type guard to check if an object is a decoded tile object sent to a worker.
     */
    function isDecodeTileRequest(message) {
        return (message &&
            typeof message.type === "string" &&
            message.type === Requests.DecodeTileRequest);
    }
    WorkerDecoderProtocol.isDecodeTileRequest = isDecodeTileRequest;
    /**
     * Type guard to check if an object is an info tile object sent to a worker.
     */
    function isTileInfoRequest(message) {
        return (message && typeof message.type === "string" && message.type === Requests.TileInfoRequest);
    }
    WorkerDecoderProtocol.isTileInfoRequest = isTileInfoRequest;
})(WorkerDecoderProtocol = exports.WorkerDecoderProtocol || (exports.WorkerDecoderProtocol = {}));


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/WorkerServiceProtocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/WorkerServiceProtocol.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Common communication protocol for [[WorkerService]].
 */
var WorkerServiceProtocol;
(function (WorkerServiceProtocol) {
    /**
     * Service id of worker manager ([[WorkerServiceManager]]) used to create/destroy service
     * instances in workers.
     */
    WorkerServiceProtocol.WORKER_SERVICE_MANAGER_SERVICE_ID = "worker-service-manager";
    /**
     * Define possible names of messages exchanged with services within `WebWorker`.
     */
    let ServiceMessageName;
    (function (ServiceMessageName) {
        ServiceMessageName["Initialized"] = "initialized";
        ServiceMessageName["Request"] = "request";
        ServiceMessageName["Response"] = "response";
    })(ServiceMessageName = WorkerServiceProtocol.ServiceMessageName || (WorkerServiceProtocol.ServiceMessageName = {}));
    /**
     * Type guard to check if an object is a signal message from worker.
     */
    function isInitializedMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === ServiceMessageName.Initialized);
    }
    WorkerServiceProtocol.isInitializedMessage = isInitializedMessage;
    /**
     * Define possible names of requests called on services within `WebWorker`.
     */
    let Requests;
    (function (Requests) {
        Requests["CreateService"] = "create-service";
        Requests["DestroyService"] = "destroy-service";
    })(Requests = WorkerServiceProtocol.Requests || (WorkerServiceProtocol.Requests = {}));
    /**
     * Type guard to check if an object is a request message sent to a worker.
     */
    function isRequestMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === ServiceMessageName.Request);
    }
    WorkerServiceProtocol.isRequestMessage = isRequestMessage;
    /**
     * Type guard to check if an object is a request message sent to a worker.
     */
    function isResponseMessage(message) {
        return (message &&
            typeof message.service === "string" &&
            typeof message.type === "string" &&
            message.type === ServiceMessageName.Response);
    }
    WorkerServiceProtocol.isResponseMessage = isResponseMessage;
})(WorkerServiceProtocol = exports.WorkerServiceProtocol || (exports.WorkerServiceProtocol = {}));


/***/ }),

/***/ "./node_modules/@here/harp-datasource-protocol/lib/WorkerTilerProtocol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-datasource-protocol/lib/WorkerTilerProtocol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Communication protocol with [[ITiler]].
 */
var WorkerTilerProtocol;
(function (WorkerTilerProtocol) {
    /**
     * Define possible names of requests called on tiler services within `WebWorker`.
     */
    let Requests;
    (function (Requests) {
        Requests["RegisterIndex"] = "register-index";
        Requests["UpdateIndex"] = "update-index";
        Requests["TileRequest"] = "tile-request";
    })(Requests = WorkerTilerProtocol.Requests || (WorkerTilerProtocol.Requests = {}));
    /**
     * Type guard to check if an object is an index registration request sent to a worker.
     */
    function isRegisterIndexRequest(message) {
        return (message && typeof message.type === "string" && message.type === Requests.RegisterIndex);
    }
    WorkerTilerProtocol.isRegisterIndexRequest = isRegisterIndexRequest;
    /**
     * Type guard to check if an object is an update request for the index registration.
     */
    function isUpdateIndexRequest(message) {
        return message && typeof message.type === "string" && message.type === Requests.UpdateIndex;
    }
    WorkerTilerProtocol.isUpdateIndexRequest = isUpdateIndexRequest;
    /**
     * Type guard to check if an object is a tile request sent to a worker.
     */
    function isTileRequest(message) {
        return message && typeof message.type === "string" && message.type === Requests.TileRequest;
    }
    WorkerTilerProtocol.isTileRequest = isTileRequest;
})(WorkerTilerProtocol = exports.WorkerTilerProtocol || (exports.WorkerTilerProtocol = {}));


/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/SphericalGeometrySubdivisionModifier.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/SphericalGeometrySubdivisionModifier.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const SubdivisionModifier_1 = __webpack_require__(/*! ./SubdivisionModifier */ "./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js");
const VERTEX_POSITION_CACHE = [new three_1.Vector3(), new three_1.Vector3(), new three_1.Vector3()];
/**
 * The [[SphericalGeometrySubdivisionModifier]] subdivides triangle mesh geometries positioned
 * on the surface of a sphere centered at `(0, 0, 0)`.
 */
class SphericalGeometrySubdivisionModifier extends SubdivisionModifier_1.SubdivisionModifier {
    /**
     * Constructs a new [[SphericalGeometrySubdivisionModifier]].
     *
     * @param angle The maximum angle in radians between two vertices and the origin.
     * @param projection The projection that defines the world space of this geometry.
     */
    constructor(angle, projection = harp_geoutils_1.sphereProjection) {
        super();
        this.angle = angle;
        this.projection = projection;
    }
    shouldSplitTriangle(a, b, c) {
        const aa = harp_geoutils_1.sphereProjection.reprojectPoint(this.projection, a, VERTEX_POSITION_CACHE[0]);
        const bb = harp_geoutils_1.sphereProjection.reprojectPoint(this.projection, b, VERTEX_POSITION_CACHE[1]);
        const cc = harp_geoutils_1.sphereProjection.reprojectPoint(this.projection, c, VERTEX_POSITION_CACHE[2]);
        const alpha = aa.angleTo(bb);
        const beta = bb.angleTo(cc);
        const gamma = cc.angleTo(aa);
        // find the maximum angle
        const m = Math.max(alpha, Math.max(beta, gamma));
        // split the triangle if needed.
        if (m < this.angle) {
            return undefined;
        }
        if (m === alpha) {
            return 0;
        }
        else if (m === beta) {
            return 1;
        }
        else if (m === gamma) {
            return 2;
        }
        throw new Error("failed to split triangle");
    }
}
exports.SphericalGeometrySubdivisionModifier = SphericalGeometrySubdivisionModifier;


/***/ }),

/***/ "./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-geometry/lib/SubdivisionModifier.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = __webpack_require__(/*! three */ "three");
/**
 * The [[SubdivisionModifier]] subdivides triangle mesh geometries.
 */
class SubdivisionModifier {
    /**
     * Constructs a new [[SubdivisionModifier]].
     */
    constructor() {
        // nothing to do
    }
    /**
     * Subdivides the faces of the given [[THREE.Geometry]].
     *
     * This method modifies (in-place) the vertices and the faces of the geometry.
     * Please note that only the vertex position and their UV coordinates are subdivided.
     * Normals, vertex colors and other attributes are left unmodified.
     *
     * @param geometry The [[THREE.Geometry]] to subdivide.
     */
    modify(geometry) {
        const { vertices, faces: faceWorkList, faceVertexUvs: oldUvs } = geometry;
        // A cache containing the indices of the vertices added
        // when subdiving the faces of the geometry.
        const cache = new Map();
        /**
         * Returns the index of the vertex positioned in the middle
         * of the given vertices.
         */
        function middleVertex(i, j) {
            // build a unique `key` for the pair of indices `(i, j)`.
            const key = `${Math.min(i, j)}_${Math.max(i, j)}`;
            const h = cache.get(key);
            if (h !== undefined) {
                // nothing to do, a vertex in the middle of (i, j) was already created.
                return h;
            }
            // the position of the new vertex.
            const p = new three_1.Vector3();
            p.lerpVectors(vertices[i], vertices[j], 0.5);
            // the index of the new vertex.
            const index = vertices.length;
            vertices.push(p);
            // cache the position of the new vertex.
            cache.set(key, index);
            return index;
        }
        // The resulting triangles.
        const newFaces = [];
        const newFaceVertexUvs = [];
        const uvWorkList = oldUvs[0];
        const hasUvs = oldUvs !== undefined && oldUvs.length > 0 && uvWorkList.length > 0;
        while (true) {
            const face = faceWorkList.shift();
            if (face === undefined) {
                break;
            }
            let uvs;
            if (hasUvs) {
                uvs = uvWorkList.shift();
            }
            const edgeToSplit = this.shouldSplitTriangle(vertices[face.a], vertices[face.b], vertices[face.c]);
            switch (edgeToSplit) {
                case 0: {
                    const d = middleVertex(face.a, face.b);
                    faceWorkList.push(new three_1.Face3(face.a, d, face.c));
                    faceWorkList.push(new three_1.Face3(d, face.b, face.c));
                    if (hasUvs) {
                        const t = new three_1.Vector2().lerpVectors(uvs[0], uvs[1], 0.5);
                        uvWorkList.push([uvs[0], t, uvs[2]], [t, uvs[1], uvs[2]]);
                    }
                    break;
                }
                case 1: {
                    const d = middleVertex(face.b, face.c);
                    faceWorkList.push(new three_1.Face3(face.a, face.b, d));
                    faceWorkList.push(new three_1.Face3(face.a, d, face.c));
                    if (hasUvs) {
                        const t = new three_1.Vector2().lerpVectors(uvs[1], uvs[2], 0.5);
                        uvWorkList.push([uvs[0], uvs[1], t], [uvs[0], t, uvs[2]]);
                    }
                    break;
                }
                case 2: {
                    const d = middleVertex(face.c, face.a);
                    faceWorkList.push(new three_1.Face3(face.a, face.b, d));
                    faceWorkList.push(new three_1.Face3(d, face.b, face.c));
                    if (hasUvs) {
                        const t = new three_1.Vector2().lerpVectors(uvs[2], uvs[0], 0.5);
                        uvWorkList.push([uvs[0], uvs[1], t], [t, uvs[1], uvs[2]]);
                    }
                    break;
                }
                case undefined: {
                    newFaces.push(face);
                    if (hasUvs) {
                        newFaceVertexUvs.push(uvs);
                    }
                    break;
                }
                default:
                    throw new Error("failed to subdivide the given geometry");
            } // switch
        }
        geometry.faces = newFaces;
        geometry.verticesNeedUpdate = true;
        geometry.elementsNeedUpdate = true;
        if (hasUvs) {
            geometry.faceVertexUvs[0] = newFaceVertexUvs;
            geometry.uvsNeedUpdate = true;
        }
        return geometry;
    }
}
exports.SubdivisionModifier = SubdivisionModifier;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js"));
__export(__webpack_require__(/*! ./lib/coordinates/GeoCoordinatesLike */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js"));
__export(__webpack_require__(/*! ./lib/coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js"));
__export(__webpack_require__(/*! ./lib/projection/EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js"));
__export(__webpack_require__(/*! ./lib/projection/EquirectangularProjection */ "./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js"));
__export(__webpack_require__(/*! ./lib/projection/IdentityProjection */ "./node_modules/@here/harp-geoutils/lib/projection/IdentityProjection.js"));
__export(__webpack_require__(/*! ./lib/projection/Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js"));
__export(__webpack_require__(/*! ./lib/projection/MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js"));
__export(__webpack_require__(/*! ./lib/projection/SphereProjection */ "./node_modules/@here/harp-geoutils/lib/projection/SphereProjection.js"));
__export(__webpack_require__(/*! ./lib/tiling/FlatTileBoundingBoxGenerator */ "./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js"));
__export(__webpack_require__(/*! ./lib/tiling/HalfQuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js"));
__export(__webpack_require__(/*! ./lib/tiling/QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js"));
__export(__webpack_require__(/*! ./lib/tiling/QuadTree */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTree.js"));
__export(__webpack_require__(/*! ./lib/tiling/SubTiles */ "./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js"));
__export(__webpack_require__(/*! ./lib/tiling/TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js"));
__export(__webpack_require__(/*! ./lib/tiling/TileKeyUtils */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js"));
__export(__webpack_require__(/*! ./lib/tiling/TileTreeTraverse */ "./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js"));
__export(__webpack_require__(/*! ./lib/tiling/TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js"));
__export(__webpack_require__(/*! ./lib/tiling/HereTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/HereTilingScheme.js"));
__export(__webpack_require__(/*! ./lib/tiling/WebMercatorTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/WebMercatorTilingScheme.js"));
__export(__webpack_require__(/*! ./lib/tiling/MercatorTilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/MercatorTilingScheme.js"));
__export(__webpack_require__(/*! ./lib/math/Vector3Like */ "./node_modules/@here/harp-geoutils/lib/math/Vector3Like.js"));
__export(__webpack_require__(/*! ./lib/math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js"));
__export(__webpack_require__(/*! ./lib/math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js"));
__export(__webpack_require__(/*! ./lib/math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js"));


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js":
/*!********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GeoCoordinates_1 = __webpack_require__(/*! ./GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const DEG2RAD = Math.PI / 180;
/**
 * `GeoBox` is used to represent a bounding box in geo coordinates.
 */
class GeoBox {
    /**
     * Constructs a new `GeoBox` with the given geo coordinates.
     *
     * @param southWest The south west position in geo coordinates.
     * @param northEast The north east position in geo coordinates.
     */
    constructor(southWest, northEast) {
        this.southWest = southWest;
        this.northEast = northEast;
    }
    /**
     * Returns a `GeoBox` with the given geo coordinates.
     *
     * @param southWest The south west position in geo coordinates.
     * @param northEast The north east position in geo coordinates.
     */
    static fromCoordinates(southWest, northEast) {
        return new GeoBox(southWest, northEast);
    }
    /**
     * Returns the minimum altitude or `undefined`.
     */
    get minAltitude() {
        if (this.southWest.altitude === undefined || this.northEast.altitude === undefined) {
            return undefined;
        }
        return Math.min(this.southWest.altitude, this.northEast.altitude);
    }
    /**
     * Returns the maximum altitude or `undefined`.
     */
    get maxAltitude() {
        if (this.southWest.altitude === undefined || this.northEast.altitude === undefined) {
            return undefined;
        }
        return Math.max(this.southWest.altitude, this.northEast.altitude);
    }
    /**
     * Returns the south latitude in degrees of this `GeoBox`.
     */
    get south() {
        return this.southWest.latitude;
    }
    /**
     * Returns the north altitude in degrees of this `GeoBox`.
     */
    get north() {
        return this.northEast.latitude;
    }
    /**
     * Returns the west longitude in degrees of this `GeoBox`.
     */
    get west() {
        return this.southWest.longitude;
    }
    /**
     * Returns the east longitude in degrees of this `GeoBox`.
     */
    get east() {
        return this.northEast.longitude;
    }
    /**
     * Returns the center of this `GeoBox`.
     */
    get center() {
        const latitude = (this.south + this.north) * 0.5;
        const { west, east } = this;
        const { minAltitude, altitudeSpan } = this;
        let altitude;
        if (minAltitude !== undefined && altitudeSpan !== undefined) {
            altitude = minAltitude + altitudeSpan * 0.5;
        }
        if (west < east) {
            return new GeoCoordinates_1.GeoCoordinates(latitude, (west + east) * 0.5, altitude);
        }
        let longitude = (360 + east + west) * 0.5;
        if (longitude > 360) {
            longitude -= 360;
        }
        return new GeoCoordinates_1.GeoCoordinates(latitude, longitude, altitude);
    }
    /**
     * Returns the latitude span in radians.
     */
    get latitudeSpanInRadians() {
        return this.latitudeSpan * DEG2RAD;
    }
    /**
     * Returns the longitude span in radians.
     */
    get longitudeSpanInRadians() {
        return this.longitudeSpan * DEG2RAD;
    }
    /**
     * Returns the latitude span in degrees.
     */
    get latitudeSpan() {
        return this.north - this.south;
    }
    get altitudeSpan() {
        if (this.maxAltitude === undefined || this.minAltitude === undefined) {
            return undefined;
        }
        return this.maxAltitude - this.minAltitude;
    }
    /**
     * Returns the longitude span in degrees.
     */
    get longitudeSpan() {
        let width = this.northEast.longitude - this.southWest.longitude;
        if (width < 0) {
            width += 360;
        }
        return width;
    }
    /**
     * Returns the latitude span in degrees.
     * @deprecated Use [[latitudeSpan]] instead.
     */
    get latitudeSpanInDegrees() {
        return this.latitudeSpan;
    }
    /**
     * Returns the longitude span in degrees.
     * @deprecated Use [[longitudeSpan]] instead.
     */
    get longitudeSpanInDegrees() {
        return this.longitudeSpan;
    }
    /**
     * Returns `true` if the given geo coordinates are contained in this `GeoBox`.
     *
     * @param point The geo coordinates.
     */
    contains(point) {
        if (point.altitude === undefined ||
            this.minAltitude === undefined ||
            this.maxAltitude === undefined) {
            return this.containsHelper(point);
        }
        const isFlat = this.minAltitude === this.maxAltitude;
        const isSameAltitude = this.minAltitude === point.altitude;
        const isWithinAltitudeRange = this.minAltitude <= point.altitude && this.maxAltitude > point.altitude;
        // If box is flat, we should check the altitude and containment,
        // otherwise we should check also altitude difference where we consider
        // point to be inside if alt is from [m_minAltitude, m_maxAltitude) range!
        if (isFlat ? isSameAltitude : isWithinAltitudeRange) {
            return this.containsHelper(point);
        }
        return false;
    }
    /**
     * Clones this `GeoBox` instance.
     */
    clone() {
        return new GeoBox(this.southWest, this.northEast);
    }
    /**
     * Update the bounding box by considering a given point.
     *
     * @param point The point that may expand the bounding box.
     */
    growToContain(point) {
        this.southWest.latitude = Math.min(this.southWest.latitude, point.latitude);
        this.southWest.longitude = Math.min(this.southWest.longitude, point.longitude);
        this.southWest.altitude =
            this.southWest.altitude !== undefined && point.altitude !== undefined
                ? Math.min(this.southWest.altitude, point.altitude)
                : this.southWest.altitude !== undefined
                    ? this.southWest.altitude
                    : point.altitude !== undefined
                        ? point.altitude
                        : undefined;
        this.northEast.latitude = Math.max(this.northEast.latitude, point.latitude);
        this.northEast.longitude = Math.max(this.northEast.longitude, point.longitude);
        this.northEast.altitude =
            this.northEast.altitude !== undefined && point.altitude !== undefined
                ? Math.max(this.northEast.altitude, point.altitude)
                : this.northEast.altitude !== undefined
                    ? this.northEast.altitude
                    : point.altitude !== undefined
                        ? point.altitude
                        : undefined;
    }
    containsHelper(point) {
        if (point.latitude < this.southWest.latitude || point.latitude >= this.northEast.latitude) {
            return false;
        }
        const { west, east } = this;
        if (east > west) {
            return point.longitude >= west && point.longitude < east;
        }
        return point.longitude > east || point.longitude <= west;
    }
}
exports.GeoBox = GeoBox;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;
/**
 * `GeoCoordinates` is used to represent geo positions.
 */
class GeoCoordinates {
    /**
     * Creates a `GeoCoordinates` from the given latitude, longitude, and optional altitude.
     *
     * @param latitude Latitude in degrees.
     * @param longitude Longitude in degrees.
     * @param altitude Altitude in meters.
     */
    constructor(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
    /**
     * Returns a `GeoCoordinates` from the given latitude, longitude, and optional altitude.
     *
     * @param latitude Latitude in degrees.
     * @param longitude Longitude in degrees.
     * @param altitude Altitude in meters.
     */
    static fromDegrees(latitude, longitude, altitude) {
        return new GeoCoordinates(latitude, longitude, altitude);
    }
    /**
     * Returns a `GeoCoordinates` from the given latitude, longitude, and optional altitude.
     *
     * @param latitude Latitude in radians.
     * @param longitude Longitude in radians.
     * @param altitude Altitude in meters.
     */
    static fromRadians(latitude, longitude, altitude) {
        return new GeoCoordinates(latitude * RAD2DEG, longitude * RAD2DEG, altitude);
    }
    /**
     * Returns the latitude in radians.
     */
    get latitudeInRadians() {
        return this.latitude * DEG2RAD;
    }
    /**
     * Returns the longitude in radians.
     */
    get longitudeInRadians() {
        return this.longitude * DEG2RAD;
    }
    /**
     * Returns the latitude in degrees.
     * @deprecated Use the [[latitude]] property instead.
     */
    get latitudeInDegrees() {
        return this.latitude;
    } // compat api
    /**
     * Returns the longitude in degrees.
     * @deprecated Use the [[longitude]] property instead.
     */
    get longitudeInDegrees() {
        return this.longitude;
    } // compat api
    /**
     * Returns `true` if this `GeoCoordinates` is valid; returns `false` otherwise.
     */
    isValid() {
        return !isNaN(this.latitude) && !isNaN(this.longitude);
    }
    /**
     * Returns the normalized `GeoCoordinates`.
     */
    normalized() {
        let { latitude, longitude } = this;
        if (isNaN(latitude) || isNaN(longitude)) {
            return this;
        }
        if (latitude > 90) {
            let wrapped = (latitude + 90) % 360;
            if (wrapped >= 180) {
                longitude += 180;
                wrapped = 360 - wrapped;
            }
            latitude = wrapped - 90;
        }
        if (latitude < -90) {
            let wrapped = (latitude - 90) % 360;
            if (wrapped <= -180) {
                longitude += 180;
                wrapped = -360 - wrapped;
            }
            latitude = wrapped + 90;
        }
        if (longitude < -180 || longitude > 180) {
            const sign = Math.sign(longitude);
            longitude = (((longitude % 360) + 180 * sign) % 360) - 180 * sign;
        }
        if (latitude === this.latitude && longitude === this.longitude) {
            return this;
        }
        return new GeoCoordinates(latitude, longitude, this.altitude);
    }
    /**
     * Returns `true` if this `GeoCoordinates` is equal to the other.
     *
     * @param other GeoCoordinatesLike to compare to.
     */
    equals(other) {
        return (this.latitude === other.latitude &&
            this.longitude === other.longitude &&
            this.altitude === other.altitude);
    }
    /**
     * Copy values from the other.
     *
     * @param other GeoCoordinatesLike to copy all values from.
     */
    copy(other) {
        this.latitude = other.latitude;
        this.longitude = other.longitude;
        this.altitude = other.altitude;
        return this;
    }
    /**
     * Clones this `GeoCoordinates`.
     * @deprecated
     */
    clone() {
        return new GeoCoordinates(this.latitude, this.longitude, this.altitude);
    }
}
exports.GeoCoordinates = GeoCoordinates;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinatesLike.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type guard to assert that `object` conforms to [[GeoCoordinatesLike]] data interface.
 */
function isGeoCoordinatesLike(object) {
    return (object &&
        typeof object.latitude === "number" &&
        typeof object.longitude === "number" &&
        (typeof object.altitude === "number" || typeof object.altitude === "undefined"));
}
exports.isGeoCoordinatesLike = isGeoCoordinatesLike;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/Box3Like.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true if the given object implements the [[Box3Like]] interface.
 *
 * @param object A valid object.
 */
function isBox3Like(object) {
    const box3 = object;
    return box3.min !== undefined && box3.max !== undefined;
}
exports.isBox3Like = isBox3Like;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/MathUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
var MathUtils;
(function (MathUtils) {
    /**
     * Creates a new empty bounding box.
     */
    function newEmptyBox3() {
        return {
            min: { x: Infinity, y: Infinity, z: Infinity },
            max: { x: -Infinity, y: -Infinity, z: -Infinity }
        };
    }
    MathUtils.newEmptyBox3 = newEmptyBox3;
    /**
     * Set the components of the given [Vector3Like] instance.
     *
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     * @param v The [Vector3Like]
     */
    function newVector3(x, y, z, v) {
        if (v === undefined) {
            return { x, y, z };
        }
        v.x = x;
        v.y = y;
        v.z = z;
        return v;
    }
    MathUtils.newVector3 = newVector3;
    /**
     * Converts an angle measured in degrees to an equivalent value in radians.
     *
     * @param degrees Value in degrees.
     * @returns Value in radians.
     */
    function degToRad(degrees) {
        return degrees * DEG2RAD;
    }
    MathUtils.degToRad = degToRad;
    /**
     * Converts an angle measured in radians to an equivalent value in degrees.
     *
     * @param degrees Value in radians.
     * @returns Value in degrees.
     */
    function radToDeg(radians) {
        return radians * RAD2DEG;
    }
    MathUtils.radToDeg = radToDeg;
    /**
     * Ensures that input value fits in a given range.
     *
     * @param value The value to be clamped.
     * @param min Minimum value.
     * @param max Maximum value.
     * @returns Clamped value.
     */
    function clamp(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }
    MathUtils.clamp = clamp;
    /**
     * Normalize angle in degrees to range `[0, 360)`.
     *
     * @param a Angle in degrees.
     * @returns Angle in degrees in range `[0, 360)`.
     */
    function normalizeAngleDeg(a) {
        a = a % 360;
        if (a < 0) {
            a = a + 360;
        }
        return a;
    }
    MathUtils.normalizeAngleDeg = normalizeAngleDeg;
    /**
     * Return the minimal delta between angles `a` and `b` given in degrees.
     *
     * Equivalent to `a - b` in coordinate space with exception vector direction can be reversed
     * that if `abs(a-b) > 180` because trip is shorter in 'other' direction.
     *
     * Useful when interpolating between `b` and `a` in angle space.
     *
     * @param a Start angle in degrees.
     * @param b End angle in degrees.
     * @returns Angle that that satisfies condition `a - b - d = 0` in angle space.
     */
    function angleDistanceDeg(a, b) {
        a = normalizeAngleDeg(a);
        b = normalizeAngleDeg(b);
        const d = a - b;
        if (d > 180) {
            return d - 360;
        }
        else if (d <= -180) {
            return d + 360;
        }
        else {
            return d;
        }
    }
    MathUtils.angleDistanceDeg = angleDistanceDeg;
    /**
     * Interpolate linearly between two angles given in degrees.
     *
     * @param p0 Angle from in degrees
     * @param p1 Angle to in degrees
     * @param t Interpolation factor (alpha), in range `0-1`.
     */
    function interpolateAnglesDeg(p0, p1, t) {
        // hand crafted version,
        // see stack for maybe better versions:
        //    https://stackoverflow.com/questions/2708476/rotation-interpolation
        const d = angleDistanceDeg(p1, p0);
        const r = (p0 + d * t) % 360;
        return r;
    }
    MathUtils.interpolateAnglesDeg = interpolateAnglesDeg;
})(MathUtils = exports.MathUtils || (exports.MathUtils = {}));


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true if the given object implements the interface [[OrientedBox3Like]].
 *
 * @param object The object.
 */
function isOrientedBox3Like(object) {
    const obb = object;
    return (obb.position !== undefined &&
        obb.xAxis !== undefined &&
        obb.yAxis !== undefined &&
        obb.zAxis !== undefined &&
        obb.extents !== undefined);
}
exports.isOrientedBox3Like = isOrientedBox3Like;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/math/Vector3Like.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/math/Vector3Like.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isVector3Like(v) {
    return v && typeof v.x === "number" && typeof v.y === "number" && typeof v.z === "number";
}
exports.isVector3Like = isVector3Like;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class EarthConstants {
}
/** The equatorial circumference in meters. */
EarthConstants.EQUATORIAL_CIRCUMFERENCE = 40075016.6855784861531768177614;
/** The equatorial radius in meters. */
EarthConstants.EQUATORIAL_RADIUS = 6378137.0;
/** The lowest point on earth (Dead Sea) in meters. */
EarthConstants.MIN_ELEVATION = -433.0;
/** The highest point on earth (Mt. Everest) in meters. */
EarthConstants.MAX_ELEVATION = 8848.0;
exports.EarthConstants = EarthConstants;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
const DEG2RAD = Math.PI / 180;
class EquirectangularProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        this.type = Projection_1.ProjectionType.Planar;
    }
    getScaleFactor(_worldPoint) {
        return 1;
    }
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        result.min.x = 0.0;
        result.min.y = 0.0;
        result.min.z = minAltitude;
        result.max.x = this.unitScale;
        result.max.y = this.unitScale / 2;
        result.max.z = maxAltitude;
        return result;
    }
    projectPoint(geoPoint, result) {
        if (result === undefined) {
            /*
             * The following tslint:disable is due to the fact that the [[WorldCoordinates]]
             * might be a concrete class which is not available at runtime.
             * Consider the following example:
             *
             *  const x: THREE.Vector3 = new THREE.Vector3(0,0,0);
             *  const result = EquirectangularProjection.projectPoint<THREE.Vector3>(x);
             *
             * Note: type of `result` is Vector3Like and not as expected: THREE.Vector3!
             */
            // tslint:disable-next-line:no-object-literal-type-assertion
            result = { x: 0, y: 0, z: 0 };
        }
        result.x =
            (geoPoint.longitude * DEG2RAD + Math.PI) *
                EquirectangularProjection.geoToWorldScale *
                this.unitScale;
        result.y =
            (geoPoint.latitude * DEG2RAD + Math.PI * 0.5) *
                EquirectangularProjection.geoToWorldScale *
                this.unitScale;
        result.z = geoPoint.altitude || 0;
        return result;
    }
    unprojectPoint(worldPoint) {
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians((worldPoint.y * EquirectangularProjection.worldToGeoScale) / this.unitScale -
            Math.PI * 0.5, (worldPoint.x * EquirectangularProjection.worldToGeoScale) / this.unitScale - Math.PI, worldPoint.z);
        return geoPoint;
    }
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    projectBox(geoBox, result) {
        const worldCenter = this.projectPoint(new GeoCoordinates_1.GeoCoordinates(geoBox.center.latitude, geoBox.center.longitude, 0));
        const { latitudeSpanInRadians, longitudeSpanInRadians, altitudeSpan } = geoBox;
        const sizeX = longitudeSpanInRadians * EquirectangularProjection.geoToWorldScale;
        const sizeY = latitudeSpanInRadians * EquirectangularProjection.geoToWorldScale;
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = worldCenter.x - sizeX * 0.5 * this.unitScale;
            result.min.y = worldCenter.y - sizeY * 0.5 * this.unitScale;
            result.max.x = worldCenter.x + sizeX * 0.5 * this.unitScale;
            result.max.y = worldCenter.y + sizeY * 0.5 * this.unitScale;
            if (altitudeSpan !== undefined) {
                result.min.z = worldCenter.z - altitudeSpan * 0.5;
                result.max.z = worldCenter.z + altitudeSpan * 0.5;
            }
            else {
                result.min.z = 0;
                result.max.z = 0;
            }
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = worldCenter.x;
            result.position.y = worldCenter.y;
            result.position.z = worldCenter.z;
            result.extents.x = sizeX * 0.5 * this.unitScale;
            result.extents.y = sizeY * 0.5 * this.unitScale;
            result.extents.z = Math.max(Number.EPSILON, (altitudeSpan || 0) * 0.5);
        }
        return result;
    }
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        return GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
    }
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = 1;
        }
        return normal;
    }
}
EquirectangularProjection.geoToWorldScale = 1.0 / (2.0 * Math.PI);
EquirectangularProjection.worldToGeoScale = (2.0 * Math.PI) / 1.0;
/**
 * Equirectangular [[Projection]] used to convert geo coordinates to unit coordinates and vice
 * versa.
 */
exports.normalizedEquirectangularProjection = new EquirectangularProjection(1);
/**
 * Equirectangular [[Projection]] used to convert geo coordinates to world coordinates and vice
 * versa.
 */
exports.equirectangularProjection = new EquirectangularProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/IdentityProjection.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/IdentityProjection.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
const DEG2RAD = Math.PI / 180;
class IdentityProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        this.type = Projection_1.ProjectionType.Planar;
    }
    getScaleFactor(_worldPoint) {
        return 1;
    }
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        result.min.x = -Math.PI;
        result.min.y = -Math.PI * 0.5;
        result.min.z = minAltitude;
        result.max.x = Math.PI;
        result.max.y = Math.PI * 0.5;
        result.max.z = maxAltitude;
        return result;
    }
    projectPoint(geoPoint, result) {
        if (!result) {
            // tslint:disable-next-line:no-object-literal-type-assertion
            result = { x: 0, y: 0, z: 0 };
        }
        result.x = geoPoint.longitude * DEG2RAD;
        result.y = geoPoint.latitude * DEG2RAD;
        result.z = geoPoint.altitude || 0;
        return result;
    }
    unprojectPoint(worldPoint) {
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians(worldPoint.y, worldPoint.x, worldPoint.z);
        return geoPoint;
    }
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    projectBox(geoBox, result) {
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        const min = this.projectPoint(new GeoCoordinates_1.GeoCoordinates(geoBox.south, geoBox.west, geoBox.minAltitude));
        const max = this.projectPoint(new GeoCoordinates_1.GeoCoordinates(geoBox.north, geoBox.east, geoBox.maxAltitude));
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = min.x;
            result.min.y = min.y;
            result.min.z = min.z;
            result.max.x = max.x;
            result.max.y = max.y;
            result.max.z = max.z;
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = (min.x + max.x) * 0.5;
            result.position.y = (min.y + max.y) * 0.5;
            result.position.z = (min.z + max.z) * 0.5;
            result.extents.x = (max.x - min.x) * 0.5;
            result.extents.y = (max.y - min.y) * 0.5;
            result.extents.z = Math.max(Number.EPSILON, (max.z - min.z) * 0.5);
        }
        return result;
    }
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        return GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
    }
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = 1;
        }
        return normal;
    }
}
/**
 * Identity [[Projection]] used to convert geo coordinates to unit coordinates and vice versa.
 */
exports.identityProjection = new IdentityProjection(1);


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GeoBox_1 = __webpack_require__(/*! ../coordinates/GeoBox */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoBox.js");
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
class MercatorProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        this.type = Projection_1.ProjectionType.Planar;
    }
    static clamp(val, min, max) {
        return Math.min(Math.max(min, val), max);
    }
    static latitudeClamp(latitude) {
        return MercatorProjection.clamp(latitude, -MercatorProjection.MAXIMUM_LATITUDE, MercatorProjection.MAXIMUM_LATITUDE);
    }
    static latitudeProject(latitude) {
        return Math.log(Math.tan(Math.PI * 0.25 + latitude * 0.5)) / Math.PI;
    }
    static latitudeClampProject(latitude) {
        return MercatorProjection.latitudeProject(MercatorProjection.latitudeClamp(latitude));
    }
    static unprojectLatitude(y) {
        return 2.0 * Math.atan(Math.exp(Math.PI * y)) - Math.PI * 0.5;
    }
    getScaleFactor(worldPoint) {
        return Math.cosh(2 * Math.PI * (worldPoint.y / this.unitScale - 0.5));
    }
    worldExtent(minAltitude, maxAltitude, result) {
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        result.min.x = 0;
        result.min.y = 0;
        result.min.z = minAltitude;
        result.max.x = this.unitScale;
        result.max.y = this.unitScale;
        result.max.z = maxAltitude;
        return result;
    }
    projectPoint(geoPointLike, result) {
        let geoPoint;
        if (geoPointLike instanceof GeoCoordinates_1.GeoCoordinates) {
            geoPoint = geoPointLike;
        }
        else {
            geoPoint = new GeoCoordinates_1.GeoCoordinates(geoPointLike.latitude, geoPointLike.longitude, geoPointLike.altitude);
        }
        if (!result) {
            // tslint:disable-next-line:no-object-literal-type-assertion
            result = { x: 0, y: 0, z: 0 };
        }
        result.x = ((geoPoint.longitude + 180) / 360) * this.unitScale;
        result.y =
            (MercatorProjection.latitudeClampProject(geoPoint.latitudeInRadians) * 0.5 + 0.5) *
                this.unitScale;
        result.z = geoPoint.altitude || 0;
        return result;
    }
    unprojectPoint(worldPoint) {
        const geoPoint = GeoCoordinates_1.GeoCoordinates.fromRadians(MercatorProjection.unprojectLatitude((worldPoint.y / this.unitScale - 0.5) * 2.0), (worldPoint.x / this.unitScale) * 2 * Math.PI - Math.PI, worldPoint.z);
        return geoPoint;
    }
    unprojectAltitude(worldPoint) {
        return worldPoint.z;
    }
    projectBox(geoBox, result) {
        const worldCenter = this.projectPoint(geoBox.center);
        const worldNorth = (MercatorProjection.latitudeClampProject(geoBox.northEast.latitudeInRadians) * 0.5 +
            0.5) *
            this.unitScale;
        const worldSouth = (MercatorProjection.latitudeClampProject(geoBox.southWest.latitudeInRadians) * 0.5 +
            0.5) *
            this.unitScale;
        const worldYCenter = (worldNorth + worldSouth) * 0.5;
        worldCenter.y = worldYCenter;
        const latitudeSpan = worldNorth - worldSouth;
        const longitudeSpan = (geoBox.longitudeSpan / 360) * this.unitScale;
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        if (Box3Like_1.isBox3Like(result)) {
            result.min.x = worldCenter.x - longitudeSpan * 0.5;
            result.min.y = worldCenter.y - latitudeSpan * 0.5;
            result.max.x = worldCenter.x + longitudeSpan * 0.5;
            result.max.y = worldCenter.y + latitudeSpan * 0.5;
            const altitudeSpan = geoBox.altitudeSpan;
            if (altitudeSpan !== undefined) {
                result.min.z = worldCenter.z - altitudeSpan * 0.5;
                result.max.z = worldCenter.z + altitudeSpan * 0.5;
            }
            else {
                result.min.z = 0;
                result.max.z = 0;
            }
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
            result.position.x = worldCenter.x;
            result.position.y = worldCenter.y;
            result.position.z = worldCenter.z;
            result.extents.x = longitudeSpan * 0.5;
            result.extents.y = latitudeSpan * 0.5;
            result.extents.z = Math.max(Number.EPSILON, (geoBox.altitudeSpan || 0) * 0.5);
        }
        else {
            throw new Error("invalid bounding box");
        }
        return result;
    }
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        const geoBox = GeoBox_1.GeoBox.fromCoordinates(minGeo, maxGeo);
        return geoBox;
    }
    groundDistance(worldPoint) {
        return worldPoint.z;
    }
    scalePointToSurface(worldPoint) {
        worldPoint.z = 0;
        return worldPoint;
    }
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = 1;
        }
        return normal;
    }
    reprojectPoint(sourceProjection, worldPos, result) {
        // this implementation of [[reprojectPoint]] supports both
        // [[WebMercatorProjection]] and [[MercatorProjection]]. The only
        // difference betweeen these two variants of WEB Mercator
        // is in the orientation of the Y axis, so we just flip Y coordinates
        // when reprojecting between them.
        if (sourceProjection !== this &&
            (sourceProjection === exports.webMercatorProjection || sourceProjection === exports.mercatorProjection)) {
            if (result === undefined) {
                // tslint:disable-next-line: no-object-literal-type-assertion
                result = {};
            }
            result.x = worldPos.x;
            result.y = this.unitScale - worldPos.y;
            result.z = worldPos.z;
            return result;
        }
        return super.reprojectPoint(sourceProjection, worldPos, result);
    }
}
MercatorProjection.MAXIMUM_LATITUDE = 1.4844222297453323;
class WebMercatorProjection extends MercatorProjection {
    projectPoint(geoPointLike, result) {
        let geoPoint;
        if (geoPointLike instanceof GeoCoordinates_1.GeoCoordinates) {
            geoPoint = geoPointLike;
        }
        else {
            geoPoint = new GeoCoordinates_1.GeoCoordinates(geoPointLike.latitude, geoPointLike.longitude, geoPointLike.altitude);
        }
        /*
         * The following tslint:disable is due to the fact that the [[WorldCoordinates]]
         * might be a concrete class which is not available at runtime.
         * Consider the following example:
         *
         *  const x: THREE.Vector3 = new THREE.Vector3(0,0,0);
         *  const result = EquirectangularProjection.projectPoint<THREE.Vector3>(x);
         *
         * Note: type of `result` is Vector3Like and not as expected: THREE.Vector3!
         */
        if (!result) {
            // tslint:disable-next-line:no-object-literal-type-assertion
            result = { x: 0, y: 0, z: 0 };
        }
        result.x = ((geoPoint.longitude + 180) / 360) * this.unitScale;
        const sy = Math.sin(MercatorProjection.latitudeClamp(geoPoint.latitudeInRadians));
        result.y = (0.5 - Math.log((1 + sy) / (1 - sy)) / (4 * Math.PI)) * this.unitScale;
        result.z = geoPoint.altitude || 0;
        return result;
    }
    unprojectPoint(worldPoint) {
        const x = worldPoint.x / this.unitScale - 0.5;
        const y = 0.5 - worldPoint.y / this.unitScale;
        const longitude = 360 * x;
        const latitude = 90 - (360 * Math.atan(Math.exp(-y * 2 * Math.PI))) / Math.PI;
        return new GeoCoordinates_1.GeoCoordinates(latitude, longitude, worldPoint.z);
    }
    projectBox(geoBox, result) {
        const r = super.projectBox(geoBox, result);
        if (OrientedBox3Like_1.isOrientedBox3Like(r)) {
            MathUtils_1.MathUtils.newVector3(1, 0, 0, r.xAxis);
            MathUtils_1.MathUtils.newVector3(0, -1, 0, r.yAxis);
            MathUtils_1.MathUtils.newVector3(0, 0, -1, r.zAxis);
        }
        return r;
    }
    unprojectBox(worldBox) {
        const minGeo = this.unprojectPoint(worldBox.min);
        const maxGeo = this.unprojectPoint(worldBox.max);
        const geoBox = new GeoBox_1.GeoBox(new GeoCoordinates_1.GeoCoordinates(maxGeo.latitude, minGeo.longitude, minGeo.altitude), new GeoCoordinates_1.GeoCoordinates(minGeo.latitude, maxGeo.longitude, maxGeo.altitude));
        return geoBox;
    }
    surfaceNormal(_worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: -1 };
        }
        else {
            normal.x = 0;
            normal.y = 0;
            normal.z = -1;
        }
        return normal;
    }
}
WebMercatorProjection.MAXIMUM_LATITUDE = 1.4844222297453323;
/**
 * Mercator [[Projection]] used to convert geo coordinates to world coordinates and vice versa.
 */
exports.mercatorProjection = new MercatorProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);
/**
 * Web Mercator [[Projection]] used to convert geo coordinates to world coordinates and vice versa.
 */
exports.webMercatorProjection = new WebMercatorProjection(EarthConstants_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE);


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/Projection.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of projection.
 */
var ProjectionType;
(function (ProjectionType) {
    /**
     * A type of [Projection] with zero curvature.
     */
    ProjectionType[ProjectionType["Planar"] = 0] = "Planar";
    /**
     * A spherical [Projection].
     */
    ProjectionType[ProjectionType["Spherical"] = 1] = "Spherical";
})(ProjectionType = exports.ProjectionType || (exports.ProjectionType = {}));
/**
 * `Projection` is used to convert positions from geo coordinates to world coordinates and vice
 * versa.
 */
class Projection {
    /**
     * Constructs the Projection
     *
     * @param unitScale How to transform the projected coordinates to world units.
     */
    constructor(unitScale) {
        this.unitScale = unitScale;
        //Prevent empty constructor error.
    }
    /**
     * Reproject a world position from the given source [[Projection]].
     *
     * @param sourceProjection The source projection.
     * @param worldPos A valid position in the world space defined by the source projection.
     * @param result The resulting position reprojected using this [[Projection]].
     * @hidden
     */
    reprojectPoint(sourceProjection, worldPos, result) {
        if (sourceProjection === this) {
            if (result === undefined) {
                return { x: worldPos.x, y: worldPos.y, z: worldPos.z };
            }
            result.x = worldPos.x;
            result.y = worldPos.y;
            result.z = worldPos.z;
            return result;
        }
        return this.projectPoint(sourceProjection.unprojectPoint(worldPos), result);
    }
}
exports.Projection = Projection;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/projection/SphereProjection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/projection/SphereProjection.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const Box3Like_1 = __webpack_require__(/*! ../math/Box3Like */ "./node_modules/@here/harp-geoutils/lib/math/Box3Like.js");
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
const OrientedBox3Like_1 = __webpack_require__(/*! ../math/OrientedBox3Like */ "./node_modules/@here/harp-geoutils/lib/math/OrientedBox3Like.js");
const EarthConstants_1 = __webpack_require__(/*! ./EarthConstants */ "./node_modules/@here/harp-geoutils/lib/projection/EarthConstants.js");
const MercatorProjection_1 = __webpack_require__(/*! ./MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js");
const Projection_1 = __webpack_require__(/*! ./Projection */ "./node_modules/@here/harp-geoutils/lib/projection/Projection.js");
/**
 * Transforms the given vector using the provided basis.
 */
function apply(xAxis, yAxis, zAxis, v) {
    const x = xAxis.x * v.x + yAxis.x * v.y + zAxis.x * v.z;
    const y = xAxis.y * v.x + yAxis.y * v.y + zAxis.y * v.z;
    const z = xAxis.z * v.x + yAxis.z * v.y + zAxis.z * v.z;
    v.x = x;
    v.y = y;
    v.z = z;
    return v;
}
/**
 * Returns the quadrants for the given longitude. The quadrant is defined as:
 *  - quadrant(+Math.PI * -1.0) = 0
 *  - quadrant(+Math.PI * -0.5) = 1
 *  - quadrant(+Math.PI *  0.0) = 2
 *  - quadrant(+Math.PI *  0.5) = 3
 *  - quadrant(+Math.PI *  1.0) = 4
 *
 * @param longitude The longitude in radians.
 */
function getLongitudeQuadrant(longitude) {
    const oneOverPI = 1 / Math.PI;
    const quadrantIndex = Math.floor(2 * (longitude * oneOverPI + 1));
    return MathUtils_1.MathUtils.clamp(quadrantIndex, 0, 4);
}
function lengthOfVector3(worldPoint) {
    const d = Math.sqrt(worldPoint.x * worldPoint.x + worldPoint.y * worldPoint.y + worldPoint.z * worldPoint.z);
    return d;
}
/**
 * Creates a Box3 enclosing the geobox.
 *
 * @param geoBox Ghe given geobox
 * @param worldBox The resulting axis aligned bounding box.
 */
function makeBox3(geoBox, worldBox, unitScale) {
    const halfEquatorialRadius = (unitScale + (geoBox.maxAltitude || 0)) * 0.5;
    const minLongitude = MathUtils_1.MathUtils.degToRad(geoBox.west);
    const maxLongitude = MathUtils_1.MathUtils.degToRad(geoBox.east);
    const minLongitudeQuadrant = getLongitudeQuadrant(minLongitude);
    const maxLongitudeQuadrant = getLongitudeQuadrant(maxLongitude);
    let xMin = Math.cos(minLongitude);
    let xMax = xMin;
    let yMin = Math.sin(minLongitude);
    let yMax = yMin;
    for (let quadrantIndex = minLongitudeQuadrant + 1; quadrantIndex <= maxLongitudeQuadrant; quadrantIndex++) {
        // tslint:disable-next-line: no-bitwise
        const x = ((quadrantIndex + 1) & 1) * ((quadrantIndex & 2) - 1);
        xMin = Math.min(x, xMin);
        xMax = Math.max(x, xMax);
        // tslint:disable-next-line: no-bitwise
        const y = (quadrantIndex & 1) * ((quadrantIndex & 2) - 1);
        yMin = Math.min(y, yMin);
        yMax = Math.max(y, yMax);
    }
    const cosMaxLongitude = Math.cos(maxLongitude);
    xMin = Math.min(cosMaxLongitude, xMin);
    xMax = Math.max(cosMaxLongitude, xMax);
    const sinMaxLongitude = Math.sin(maxLongitude);
    yMin = Math.min(sinMaxLongitude, yMin);
    yMax = Math.max(sinMaxLongitude, yMax);
    const xCenter = (xMax + xMin) * halfEquatorialRadius;
    const xExtent = (xMax - xMin) * halfEquatorialRadius;
    const yCenter = (yMax + yMin) * halfEquatorialRadius;
    const yExtent = (yMax - yMin) * halfEquatorialRadius;
    // Calculate Z boundaries.
    const minLatitude = MathUtils_1.MathUtils.degToRad(geoBox.south);
    const maxLatutide = MathUtils_1.MathUtils.degToRad(geoBox.north);
    const zMax = Math.sin(maxLatutide);
    const zMin = Math.sin(minLatitude);
    const zCenter = (zMax + zMin) * halfEquatorialRadius;
    const zExtent = (zMax - zMin) * halfEquatorialRadius;
    worldBox.min.x = xCenter - xExtent;
    worldBox.min.y = yCenter - yExtent;
    worldBox.min.z = zCenter - zExtent;
    worldBox.max.x = xCenter + xExtent;
    worldBox.max.y = yCenter + yExtent;
    worldBox.max.z = zCenter + zExtent;
    return worldBox;
}
/**
 * Computes the spherical projection of the given geo coordinates.
 *
 * @param geoPoint The geo coordinates.
 * @param worldpoint The resulting world coordinates.
 */
function project(geoPoint, worldpoint, unitScale) {
    const radius = unitScale + (geoPoint.altitude || 0);
    const latitude = MathUtils_1.MathUtils.degToRad(geoPoint.latitude);
    const longitude = MathUtils_1.MathUtils.degToRad(geoPoint.longitude);
    const cosLatitude = Math.cos(latitude);
    worldpoint.x = radius * cosLatitude * Math.cos(longitude);
    worldpoint.y = radius * cosLatitude * Math.sin(longitude);
    worldpoint.z = radius * Math.sin(latitude);
    return worldpoint;
}
class SphereProjection extends Projection_1.Projection {
    constructor() {
        super(...arguments);
        this.type = Projection_1.ProjectionType.Spherical;
    }
    worldExtent(_minElevation, maxElevation, result = MathUtils_1.MathUtils.newEmptyBox3()) {
        const radius = this.unitScale + maxElevation;
        result.min.x = -radius;
        result.min.y = -radius;
        result.min.z = -radius;
        result.max.x = radius;
        result.max.y = radius;
        result.max.z = radius;
        return result;
    }
    projectPoint(geoPoint, result = MathUtils_1.MathUtils.newVector3(0, 0, 0)) {
        return project(geoPoint, result, this.unitScale);
    }
    unprojectPoint(point) {
        const parallelRadiusSq = point.x * point.x + point.y * point.y;
        const parallelRadius = Math.sqrt(parallelRadiusSq);
        const v = point.z / parallelRadius;
        if (isNaN(v)) {
            return GeoCoordinates_1.GeoCoordinates.fromRadians(0, 0, -this.unitScale);
        }
        const radius = Math.sqrt(parallelRadiusSq + point.z * point.z);
        return GeoCoordinates_1.GeoCoordinates.fromRadians(Math.atan(v), Math.atan2(point.y, point.x), radius - this.unitScale);
    }
    unprojectAltitude(point) {
        const parallelRadiusSq = point.x * point.x + point.y * point.y + point.z * point.z;
        return Math.sqrt(parallelRadiusSq) - EarthConstants_1.EarthConstants.EQUATORIAL_RADIUS;
    }
    projectBox(geoBox, result = MathUtils_1.MathUtils.newEmptyBox3()) {
        if (Box3Like_1.isBox3Like(result)) {
            return makeBox3(geoBox, result, this.unitScale);
        }
        else if (OrientedBox3Like_1.isOrientedBox3Like(result)) {
            if (geoBox.longitudeSpan >= 90) {
                const bounds = makeBox3(geoBox, MathUtils_1.MathUtils.newEmptyBox3(), this.unitScale);
                MathUtils_1.MathUtils.newVector3(1, 0, 0, result.xAxis);
                MathUtils_1.MathUtils.newVector3(0, 1, 0, result.yAxis);
                MathUtils_1.MathUtils.newVector3(0, 0, 1, result.zAxis);
                result.position.x = (bounds.max.x + bounds.min.x) * 0.5;
                result.position.y = (bounds.max.y + bounds.min.y) * 0.5;
                result.position.z = (bounds.max.z + bounds.min.z) * 0.5;
                result.extents.x = (bounds.max.x - bounds.min.x) * 0.5;
                result.extents.y = (bounds.max.y - bounds.min.y) * 0.5;
                result.extents.z = (bounds.max.z - bounds.min.z) * 0.5;
                return result;
            }
            const { south, west, north, east, center: mid } = geoBox;
            const midX = mid.longitude;
            const midY = mid.latitude;
            const cosSouth = Math.cos(MathUtils_1.MathUtils.degToRad(south));
            const sinSouth = Math.sin(MathUtils_1.MathUtils.degToRad(south));
            const cosWest = Math.cos(MathUtils_1.MathUtils.degToRad(west));
            const sinWest = Math.sin(MathUtils_1.MathUtils.degToRad(west));
            const cosNorth = Math.cos(MathUtils_1.MathUtils.degToRad(north));
            const sinNorth = Math.sin(MathUtils_1.MathUtils.degToRad(north));
            const cosEast = Math.cos(MathUtils_1.MathUtils.degToRad(east));
            const sinEast = Math.sin(MathUtils_1.MathUtils.degToRad(east));
            const cosMidX = Math.cos(MathUtils_1.MathUtils.degToRad(midX));
            const sinMidX = Math.sin(MathUtils_1.MathUtils.degToRad(midX));
            const cosMidY = Math.cos(MathUtils_1.MathUtils.degToRad(midY));
            const sinMidY = Math.sin(MathUtils_1.MathUtils.degToRad(midY));
            // Build the orientation of the OBB using the normal vector and its partial derivates.
            // the sperical coordinates of the mid point of the geobox.
            MathUtils_1.MathUtils.newVector3(cosMidX * cosMidY, sinMidX * cosMidY, sinMidY, result.zAxis);
            // the partial derivates of the normal vector.
            MathUtils_1.MathUtils.newVector3(-sinMidX, cosMidX, 0, result.xAxis);
            MathUtils_1.MathUtils.newVector3(-cosMidX * sinMidY, -sinMidX * sinMidY, cosMidY, result.yAxis);
            let width;
            let minY;
            let maxY;
            if (south >= 0) {
                // abs(dot(southWest - southEast, xAxis))
                width = Math.abs(cosSouth * (cosMidX * (sinWest - sinEast) + sinMidX * (cosEast - cosWest)));
                // dot(south, yAxis)
                minY = cosMidY * sinSouth - sinMidY * cosSouth;
                // dot(northEast, zAxis)
                maxY =
                    cosMidY * sinNorth -
                        sinMidY * cosNorth * (cosMidX * cosEast + sinMidX * sinEast);
            }
            else {
                if (north <= 0) {
                    // abs(dot(northWest - northEast, xAxis))
                    width = Math.abs(cosNorth * (cosMidX * (sinWest - sinEast) + sinMidX * (cosEast - cosWest)));
                    // dot(north, yAxis)
                    maxY = cosMidY * sinNorth - sinMidY * cosNorth;
                }
                else {
                    // abs(dot(west - east, xAxis))
                    width = Math.abs(cosMidX * (sinWest - sinEast) + sinMidX * (cosEast - cosWest));
                    // dot(northEast, yAxis)
                    maxY =
                        cosMidY * sinNorth -
                            sinMidY * cosNorth * (sinMidX * sinEast + cosMidX * cosEast);
                }
                // dot(southEast, yAxis)
                minY =
                    cosMidY * sinSouth -
                        sinMidY * cosSouth * (cosMidX * cosEast + sinMidX * sinEast);
            }
            const rMax = (this.unitScale + (geoBox.maxAltitude || 0)) * 0.5;
            const rMin = (this.unitScale + (geoBox.minAltitude || 0)) * 0.5;
            // min(dot(southEast, zAxis), dot(northEast, zAxis))
            const d = cosMidY * (cosMidX * cosEast + sinMidX * sinEast);
            const minZ = Math.min(cosNorth * d + sinNorth * sinMidY, cosSouth * d + sinSouth * sinMidY);
            MathUtils_1.MathUtils.newVector3(width * rMax, (maxY - minY) * rMax, rMax - minZ * rMin, result.extents);
            MathUtils_1.MathUtils.newVector3(0, (minY + maxY) * rMax, rMax + rMax, result.position);
            apply(result.xAxis, result.yAxis, result.zAxis, result.position);
            result.position.x = result.position.x - result.zAxis.x * result.extents.z;
            result.position.y = result.position.y - result.zAxis.y * result.extents.z;
            result.position.z = result.position.z - result.zAxis.z * result.extents.z;
            return result;
        }
        throw new Error("Invalid bounding box");
    }
    unprojectBox(_worldBox) {
        throw new Error("Method not implemented.");
    }
    getScaleFactor(_worldPoint) {
        return 1;
    }
    groundDistance(worldPoint) {
        return lengthOfVector3(worldPoint) - this.unitScale;
    }
    scalePointToSurface(worldPoint) {
        const scale = this.unitScale / (lengthOfVector3(worldPoint) || 1);
        worldPoint.x *= scale;
        worldPoint.y *= scale;
        worldPoint.z *= scale;
        return worldPoint;
    }
    surfaceNormal(worldPoint, normal) {
        if (normal === undefined) {
            normal = { x: 0, y: 0, z: 0 };
        }
        const scale = 1 / (lengthOfVector3(worldPoint) || 1);
        normal.x = worldPoint.x * scale;
        normal.y = worldPoint.y * scale;
        normal.z = worldPoint.z * scale;
        return normal;
    }
    reprojectPoint(sourceProjection, worldPos, result) {
        if (sourceProjection === MercatorProjection_1.mercatorProjection || sourceProjection === MercatorProjection_1.webMercatorProjection) {
            const { x, y, z } = worldPos;
            const r = this.unitScale;
            const mx = x / r - Math.PI;
            const my = y / r - Math.PI;
            const w = Math.exp(my);
            const d = w * w;
            const gx = (2 * w) / (d + 1);
            const gy = (d - 1) / (d + 1);
            const scale = r + z;
            if (result === undefined) {
                // tslint:disable-next-line: no-object-literal-type-assertion
                result = {};
            }
            result.x = Math.cos(mx) * gx * scale;
            result.y = Math.sin(mx) * gx * scale;
            result.z = gy * scale;
            if (sourceProjection === MercatorProjection_1.webMercatorProjection) {
                result.z = -result.z;
            }
            return result;
        }
        return super.reprojectPoint(sourceProjection, worldPos, result);
    }
}
exports.sphereProjection = new SphereProjection(EarthConstants_1.EarthConstants.EQUATORIAL_RADIUS);


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MathUtils_1 = __webpack_require__(/*! ../math/MathUtils */ "./node_modules/@here/harp-geoutils/lib/math/MathUtils.js");
/**
 * `FlatTileBoundingBoxGenerator` generates bounding boxes in world and geo coordinates for a given
 * TilingScheme.
 */
class FlatTileBoundingBoxGenerator {
    /**
     * Creates a new `FlatTileBoundingBoxGenerator` that can generate bounding boxes for the given
     * TilingScheme.
     *
     * @param tilingScheme The [[TilingScheme]] used to compute bounding boxes.
     * @param minElevation The minimum elevation in meters.
     * @param maxElevation The maximum elevation in meters.
     */
    constructor(tilingScheme, minElevation = 0, maxElevation = 0) {
        this.tilingScheme = tilingScheme;
        this.minElevation = minElevation;
        this.maxElevation = maxElevation;
        this.m_tilingScheme = tilingScheme;
        this.m_worldBox = tilingScheme.projection.worldExtent(minElevation, maxElevation);
        const { min, max } = this.m_worldBox;
        this.m_worldDimensions = { x: max.x - min.x, y: max.y - min.y, z: max.z - min.z };
    }
    /**
     * Returns the [[Projection]] of the [[TilingScheme]].
     */
    get projection() {
        return this.m_tilingScheme.projection;
    }
    /**
     * Returns the [[SubdivisionScheme]] of the [[TilingScheme]].
     */
    get subdivisionScheme() {
        return this.m_tilingScheme.subdivisionScheme;
    }
    /**
     * Returns the bounding box in world coordinates of the given [[TileKey]].
     *
     * Example:
     * ```typescript
     * const worldBounds = new THREE.Box3();
     * generator.getWorldBox(geoBox, worldBounds);
     * console.log(worldBounds.getCenter());
     * ```
     *
     * @param tileKey The TileKey.
     * @param result The optional object used to store the resulting bounding box in world
     * coordinates.
     */
    getWorldBox(tileKey, result) {
        const level = tileKey.level;
        const levelDimensionX = this.subdivisionScheme.getLevelDimensionX(level);
        const levelDimensionY = this.subdivisionScheme.getLevelDimensionY(level);
        const sizeX = this.m_worldDimensions.x / levelDimensionX;
        const sizeY = this.m_worldDimensions.y / levelDimensionY;
        const originX = this.m_worldBox.min.x + sizeX * tileKey.column;
        const originY = this.m_worldBox.min.y + sizeY * tileKey.row;
        if (!result) {
            result = MathUtils_1.MathUtils.newEmptyBox3();
        }
        result.min.x = originX;
        result.min.y = originY;
        result.min.z = this.m_worldBox.min.z;
        result.max.x = originX + sizeX;
        result.max.y = originY + sizeY;
        result.max.z = this.m_worldBox.max.z;
        return result;
    }
    /**
     * Returns the bounding box in geo coordinates for the given [[TileKey]].
     *
     * Example:
     * ```typescript
     * const geoBox = generator.getGeoBox(worldBounds);
     * console.log(geoBox.center);
     * ```
     *
     * @param tileKey The [[TileKey]].
     */
    getGeoBox(tileKey) {
        const worldBox = this.getWorldBox(tileKey);
        return this.projection.unprojectBox(worldBox);
    }
}
exports.FlatTileBoundingBoxGenerator = FlatTileBoundingBoxGenerator;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class HalfQuadTreeSubdivisionScheme {
    getSubdivisionX() {
        return 2;
    }
    getSubdivisionY(level) {
        return level === 0 ? 1 : 2;
    }
    getLevelDimensionX(level) {
        // tslint:disable-next-line:no-bitwise
        return 1 << level;
    }
    getLevelDimensionY(level) {
        // tslint:disable-next-line:no-bitwise
        return level !== 0 ? 1 << (level - 1) : 1;
    }
}
/**
 * A [[SubdivisionScheme]] used to represent half quadtrees. This particular subdivision scheme is
 * used by the HERE tiling scheme.
 */
exports.halfQuadTreeSubdivisionScheme = new HalfQuadTreeSubdivisionScheme();


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/HereTilingScheme.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/HereTilingScheme.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const EquirectangularProjection_1 = __webpack_require__(/*! ../projection/EquirectangularProjection */ "./node_modules/@here/harp-geoutils/lib/projection/EquirectangularProjection.js");
const HalfQuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./HalfQuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/HalfQuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * [[TilingScheme]] used by most of the data published by HERE.
 *
 * The `hereTilingScheme` features a half quadtree subdivision scheme and an equirectangular
 * projection.
 */
exports.hereTilingScheme = new TilingScheme_1.TilingScheme(HalfQuadTreeSubdivisionScheme_1.halfQuadTreeSubdivisionScheme, EquirectangularProjection_1.normalizedEquirectangularProjection);


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/MercatorTilingScheme.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/MercatorTilingScheme.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MercatorProjection_1 = __webpack_require__(/*! ../projection/MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js");
const QuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * The [[TilingScheme]] used by the HERE web tiles.
 *
 * The `mercatorTilingScheme` features a quadtree subdivision scheme and a Mercator projection.
 */
exports.mercatorTilingScheme = new TilingScheme_1.TilingScheme(QuadTreeSubdivisionScheme_1.quadTreeSubdivisionScheme, MercatorProjection_1.mercatorProjection);


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTree.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/QuadTree.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TileKey_1 = __webpack_require__(/*! ./TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js");
/**
 * A class used to represent a quadtree.
 */
class QuadTree {
    /**
     * Constructs a new `QuadTree` for the given [[TilingScheme]].
     *
     * Example:
     * ```typescript
     * const quadTree = new QuadTree(hereTilingScheme);
     * const geoBox = quadTree.getGeoBox(tileKey);
     * console.log(geoBox.center);
     * ```
     *
     * @param tilingScheme The TilingScheme used by this `QuadTree`.
     */
    constructor(tilingScheme) {
        this.tilingScheme = tilingScheme;
    }
    /**
     * Visits this `QuadTree` and invoke the given accept method with the current [[TileKey]] and
     * its bounding box in geo coordinates.
     *
     * Example:
     * ```typescript
     * const geoPos = new GeoCoordinates(latitude, longitude);
     * const quadTree = new QuadTree(hereTilingScheme);
     * quadTree.visit((tileKey, geoBox) => {
     *     if (geoBox.contains(geoPos)) {
     *         console.log("tile", tileKey, "contains", geoPos);
     *         return tileKey.level < 14; // stop visiting the quadtree if the level is >= 14.
     *     }
     *     return false; // stop visiting the quadtree,
     *                   // the tile's geoBox doesn't contain the given coordinates.
     * });
     * ```
     *
     * @param accept A function that takes a [[TileKey]] and its bounding box in geo coordinates and
     * returns `true` if the visit of the `QuadTree` should continue; otherwise `false`.
     */
    visit(accept) {
        this.visitTileKey(TileKey_1.TileKey.fromRowColumnLevel(0, 0, 0), accept);
    }
    /**
     * Visits the subtree starting from the given tile.
     *
     * @param tileKey The root of the subtree that should be visited.
     * @param accept A function that takes a [[TileKey]] and its bounding box in geo coordinates and
     * returns `true` if the visit of the `QuadTree` should continue; otherwise `false`.
     */
    visitTileKey(tileKey, accept) {
        const geoBox = this.tilingScheme.getGeoBox(tileKey);
        if (!accept(tileKey, geoBox)) {
            return;
        }
        for (const subTileKey of this.tilingScheme.getSubTileKeys(tileKey)) {
            this.visitTileKey(subTileKey, accept);
        }
    }
}
exports.QuadTree = QuadTree;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class QuadTreeSubdivisionScheme {
    getSubdivisionX() {
        return 2;
    }
    getSubdivisionY() {
        return 2;
    }
    getLevelDimensionX(level) {
        // tslint:disable-next-line:no-bitwise
        return 1 << level;
    }
    getLevelDimensionY(level) {
        // tslint:disable-next-line:no-bitwise
        return 1 << level;
    }
}
/**
 * [[SubdivisionScheme]] representing a quadtree.
 */
exports.quadTreeSubdivisionScheme = new QuadTreeSubdivisionScheme();


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TileKey_1 = __webpack_require__(/*! ./TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js");
class SubTiles {
    constructor(tileKey, level, mask) {
        this.m_tileKey = tileKey;
        this.m_level = level;
        // tslint:disable:no-bitwise
        this.m_count = 1 << (level << 1);
        this.m_mask = mask;
        this.m_shift = level > 2 ? (level - 2) << 1 : 0;
        // tslint:enable:no-bitwise
    }
    get length() {
        return this.m_count;
    }
    get level() {
        return this.m_level;
    }
    get tileKey() {
        return this.m_tileKey;
    }
    iterator() {
        return new SubTiles.Iterator(this);
    }
    skip(index) {
        // tslint:disable:no-bitwise
        if (this.m_mask !== ~0) {
            while (index < this.m_count && (this.m_mask & (1 << (index >> this.m_shift))) === 0) {
                ++index;
            }
        }
        // tslint:enable:no-bitwise
        return index;
    }
}
exports.SubTiles = SubTiles;
(function (SubTiles) {
    class Iterator {
        constructor(parent, index = 0) {
            this.m_parent = parent;
            this.m_index = parent.skip(index);
        }
        get value() {
            const parentKey = this.m_parent.tileKey;
            const subLevel = this.m_parent.level;
            return TileKey_1.TileKey.fromRowColumnLevel(
            // tslint:disable:no-bitwise
            (parentKey.row << subLevel) | (this.m_index >> subLevel), (parentKey.column << subLevel) | (this.m_index & ((1 << subLevel) - 1)), parentKey.level + subLevel
            // tslint:enableno-bitwise
            );
        }
        next() {
            this.m_index = this.m_parent.skip(++this.m_index);
        }
    }
    SubTiles.Iterator = Iterator;
})(SubTiles = exports.SubTiles || (exports.SubTiles = {}));


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** @hidden */
const powerOfTwo = [
    0x1,
    0x2,
    0x4,
    0x8,
    0x10,
    0x20,
    0x40,
    0x80,
    0x100,
    0x200,
    0x400,
    0x800,
    0x1000,
    0x2000,
    0x4000,
    0x8000,
    0x10000,
    0x20000,
    0x40000,
    0x80000,
    0x100000,
    0x200000,
    0x400000,
    0x800000,
    0x1000000,
    0x2000000,
    0x4000000,
    0x8000000,
    0x10000000,
    0x20000000,
    0x40000000,
    0x80000000,
    0x100000000,
    0x200000000,
    0x400000000,
    0x800000000,
    0x1000000000,
    0x2000000000,
    0x4000000000,
    0x8000000000,
    0x10000000000,
    0x20000000000,
    0x40000000000,
    0x80000000000,
    0x100000000000,
    0x200000000000,
    0x400000000000,
    0x800000000000,
    0x1000000000000,
    0x2000000000000,
    0x4000000000000,
    0x8000000000000,
    0x10000000000000 // Math.pow(2, 52), highest bit that can be set correctly.
];
/**
 * The `TileKey` instances are used to address a tile in a quadtree.
 *
 * A tile key is defined by a row, a column, and a level. The tree has a root at level 0, with one
 * single tile. On every level, each tile is divided into four children (therefore the name
 * quadtree).
 *
 * Within each [[level]], any particular tile is addressed with [[row]] and [[column]]. The number
 * of rows and columns in each level is 2 to the power of the level. This means: On level 0, only
 * one tile exists, [[columnsAtLevel]]() and [[rowsAtLevel]]() are both 1. On level 1, 4 tiles
 * exist, in 2 rows and 2 columns. On level 2 we have 16 tiles, in 4 rows and 4 columns. And so on.
 *
 * A tile key is usually created using [[fromRowColumnLevel]]() method.
 *
 * `TileKey` instances are immutable, all members return new instances of `TileKey` and do not
 * modify the original object.
 *
 * Utility functions like [[parent]](), [[changedLevelBy]](), and [[changedLevelTo]]() allow for
 * easy vertical navigation of the tree. The number of available rows and columns in the tile's
 * level is given with [[rowCount]]() and [[columnCount]]().
 *
 * Tile keys can be created from and converted into various alternative formats:
 *
 *  - [[toQuadKey]]() / [[fromQuadKey]]() - string representation 4-based
 *  - [[toHereTile]]() / [[fromHereTile]]() - string representation 10-based
 *  - [[mortonCode]]() / [[fromMortonCode]]() - number representation
 *
 * Note - as JavaScript's number type can hold 53 bits in its mantissa, only levels up to 26 can be
 * represented in the number representation returned by [[mortonCode]]().
 */
class TileKey {
    /**
     * Constructs a new immutable instance of a `TileKey`.
     *
     * For the better readability, [[TileKey.fromRowColumnLevel]] should be preferred.
     *
     * Note - row and column must not be greater than the maximum rows/columns for the given level.
     *
     * @param row Represents the row in the quadtree.
     * @param column Represents the column in the quadtree.
     * @param level Represents the level in the quadtree.
     */
    constructor(row, column, level) {
        this.row = row;
        this.column = column;
        this.level = level;
    }
    /**
     * Creates a tile key.
     *
     * @param row The requested row. Must be less than 2 to the power of level.
     * @param column The requested column. Must be less than 2 to the power of level.
     * @param level The requested level.
     */
    static fromRowColumnLevel(row, column, level) {
        return new TileKey(row, column, level);
    }
    /**
     * Creates a tile key from a quad string.
     *
     * The quad string can be created with [[toQuadKey]].
     *
     * @param quadkey The quadkey to convert.
     * @returns A new instance of `TileKey`.
     */
    static fromQuadKey(quadkey) {
        const level = quadkey.length;
        let row = 0;
        let column = 0;
        // tslint:disable:no-bitwise
        for (let i = 0; i < quadkey.length; ++i) {
            const mask = 1 << i;
            const d = parseInt(quadkey.charAt(level - i - 1), 10);
            if (d & 0x1) {
                column |= mask;
            }
            if (d & 0x2) {
                row |= mask;
            }
        }
        // tslint:enable:no-bitwise
        return TileKey.fromRowColumnLevel(row, column, level);
    }
    /**
     * Creates a tile key from a numeric Morton code representation.
     *
     * You can convert a tile key into a numeric Morton code with [[mortonCode]].
     *
     * @param quadKey64 The Morton code to be converted.
     * @returns A new instance of [[TileKey]].
     */
    static fromMortonCode(quadKey64) {
        let level = 0;
        let row = 0;
        let column = 0;
        let quadKey = quadKey64;
        // tslint:disable:no-bitwise
        while (quadKey > 1) {
            const mask = 1 << level;
            if (quadKey & 0x1) {
                column |= mask;
            }
            if (quadKey & 0x2) {
                row |= mask;
            }
            level++;
            quadKey = (quadKey - (quadKey & 0x3)) / 4;
        }
        // tslint:enable:no-bitwise
        const result = TileKey.fromRowColumnLevel(row, column, level);
        result.m_mortonCode = quadKey64;
        return result;
    }
    /**
     * Creates a tile key from a heretile code string.
     *
     * The string can be created with [[toHereTile]].
     *
     * @param quadkey64 The string representation of the HERE tile key.
     * @returns A new instance of `TileKey`.
     */
    static fromHereTile(quadkey64) {
        const result = TileKey.fromMortonCode(parseInt(quadkey64, 10));
        result.m_hereTile = quadkey64;
        return result;
    }
    /**
     * Returns the number of available columns at a given level.
     *
     * This is 2 to the power of the level.
     *
     * @param level The level for which to return the number of columns.
     * @returns The available columns at the given level.
     */
    static columnsAtLevel(level) {
        return Math.pow(2, level);
    }
    /**
     * Returns the number of available rows at a given level.
     *
     * This is 2 to the power of the level.
     *
     * @param level The level for which to return the number of rows.
     * @returns The available rows at the given level.
     */
    static rowsAtLevel(level) {
        return Math.pow(2, level);
    }
    /**
     * Returns the closest matching `TileKey` in a cartesian coordinate system.
     *
     * @param level The level for the tile key.
     * @param coordX The X coordinate.
     * @param coordY The Y coordinate.
     * @param totalWidth The maximum X coordinate.
     * @param totalHeight The maximum Y coordinate.
     * @returns A new tile key at the given level that includes the given coordinates.
     */
    static atCoords(level, coordX, coordY, totalWidth, totalHeight) {
        return TileKey.fromRowColumnLevel(Math.floor(coordY / (totalHeight / TileKey.rowsAtLevel(level))), Math.floor(coordX / (totalWidth / TileKey.columnsAtLevel(level))), level);
    }
    /**
     * Computes the Morton code of the parent tile key of the given Morton code.
     *
     * Note: The parent key of the root key is the root key itself.
     *
     * @param mortonCode A Morton code, for example, obtained from [[mortonCode]].
     * @returns The Morton code of the parent tile.
     */
    static parentMortonCode(mortonCode) {
        return Math.floor(mortonCode / 4);
    }
    /**
     * Returns a tile key representing the parent of the tile addressed by this tile key.
     *
     * Throws an exception is this tile is already the root.
     */
    parent() {
        if (this.level === 0) {
            throw new Error("Cannot get the parent of the root tile key");
        }
        // tslint:disable-next-line:no-bitwise
        return TileKey.fromRowColumnLevel(this.row >>> 1, this.column >>> 1, this.level - 1);
    }
    /**
     * Returns a new tile key at a level that differs from this tile's level by delta.
     *
     * Equivalent to `changedLevelTo(level() + delta)`.
     *
     * Note - root key is returned if `delta` is smaller than the level of this tile key.
     *
     * @param delta The numeric difference between the current level and the requested level.
     */
    changedLevelBy(delta) {
        const level = Math.max(0, this.level + delta);
        let row = this.row;
        let column = this.column;
        // tslint:disable:no-bitwise
        if (delta >= 0) {
            row <<= delta;
            column <<= delta;
        }
        else {
            row >>>= -delta;
            column >>>= -delta;
        }
        // tslint:enable:no-bitwise
        return TileKey.fromRowColumnLevel(row, column, level);
    }
    /**
     * Returns a new tile key at the requested level.
     *
     * If the requested level is smaller than the tile's level, then the key of an ancestor of this
     * tile is returned. If the requested level is larger than the tile's level, then the key of
     * first child or grandchild of this tile is returned, for example, the child with the lowest
     * row and column number. If the requested level equals this tile's level, then the tile key
     * itself is returned. If the requested level is negative, the root tile key is returned.
     *
     * @param level The requested level.
     */
    changedLevelTo(level) {
        return this.changedLevelBy(level - this.level);
    }
    /**
     * Converts the tile key to a numeric code representation.
     *
     * You can create a tile key from a numeric Morton code with [[fromMortonCode]].
     *
     * Note - only levels <= 26 are supported.
     */
    mortonCode() {
        if (this.m_mortonCode === undefined) {
            let column = this.column;
            let row = this.row;
            // tslint:disable:no-bitwise
            let result = powerOfTwo[this.level << 1];
            for (let i = 0; i < this.level; ++i) {
                if (column & 0x1) {
                    result += powerOfTwo[2 * i];
                }
                if (row & 0x1) {
                    result += powerOfTwo[2 * i + 1];
                }
                column >>>= 1;
                row >>>= 1;
            }
            // tslint:enable:no-bitwise
            this.m_mortonCode = result;
        }
        return this.m_mortonCode;
    }
    /**
     * Converts the tile key into a string for using in REST API calls.
     *
     * The string is a quadkey Morton code representation as a string.
     *
     * You can convert back from a quadkey string with [[fromHereTile]].
     */
    toHereTile() {
        if (this.m_hereTile === undefined) {
            this.m_hereTile = this.mortonCode().toString();
        }
        return this.m_hereTile;
    }
    /**
     * Converts the tile key into a string for using in REST API calls.
     *
     * If the tile is the root tile, the quadkey is '-'. Otherwise the string is a number to the
     * base of 4, but without the leading 1, with the following properties:
     *  1. the number of digits equals the level.
     *  2. removing the last digit gives the parent tile's quadkey string, i.e. appending 0,1,2,3
     *     to a quadkey string gives the tiles's children.
     *
     * You can convert back from a quadkey string with [[fromQuadKey]].
     */
    toQuadKey() {
        let result = "";
        // tslint:disable:no-bitwise
        for (let i = this.level; i > 0; --i) {
            const mask = 1 << (i - 1);
            const col = (this.column & mask) !== 0;
            const row = (this.row & mask) !== 0;
            if (col && row) {
                result += "3";
            }
            else if (row) {
                result += "2";
            }
            else if (col) {
                result += "1";
            }
            else {
                result += "0";
            }
        }
        // tslint:enable:no-bitwise
        return result;
    }
    /**
     * Equality operator.
     *
     * @param qnr The tile key to compare to.
     * @returns `true` if this tile key has identical row, column and level, `false` otherwise.
     */
    equals(qnr) {
        return this.row === qnr.row && this.column === qnr.column && this.level === qnr.level;
    }
    /**
     * Returns the absolute quadkey that is constructed from its sub quadkey.
     *
     * @param sub The sub key.
     * @returns The absolute tile key in the quadtree.
     */
    addedSubKey(sub) {
        const subQuad = TileKey.fromQuadKey(sub.length === 0 ? "-" : sub);
        const child = this.changedLevelBy(subQuad.level);
        return TileKey.fromRowColumnLevel(child.row + subQuad.row, child.column + subQuad.column, child.level);
    }
    /**
     * Returns the absolute quadkey that is constructed from its sub HERE tile key.
     *
     * @param sub The sub HERE key.
     * @returns The absolute tile key in the quadtree.
     */
    addedSubHereTile(sub) {
        const subQuad = TileKey.fromHereTile(sub);
        const child = this.changedLevelBy(subQuad.level);
        return TileKey.fromRowColumnLevel(child.row + subQuad.row, child.column + subQuad.column, child.level);
    }
    /**
     * Returns a sub quadkey that is relative to its parent.
     *
     * This function can be used to generate sub keys that are relative to a parent that is delta
     * levels up in the quadtree.
     *
     * This function can be used to create shortened keys for quads on lower levels if the parent is
     * known.
     *
     * Note - the sub quadkeys fit in a 16-bit unsigned integer if the `delta` is smaller than 8. If
     * `delta` is smaller than 16, the sub quadkey fits into an unsigned 32-bit integer.
     *
     * Deltas larger than 16 are not supported.
     *
     * @param delta The number of levels relative to its parent quadkey. Must be greater or equal to
     * 0 and smaller than 16.
     * @returns The quadkey relative to its parent that is `delta` levels up the tree.
     */
    getSubHereTile(delta) {
        const key = this.mortonCode();
        // tslint:disable-next-line:no-bitwise
        const msb = 1 << (delta * 2);
        const mask = msb - 1;
        // tslint:disable-next-line:no-bitwise
        const result = (key & mask) | msb;
        return result.toString();
    }
    /**
     * Returns the number of available rows in the tile's [[level]].
     *
     * This is 2 to the power of the level.
     */
    rowCount() {
        return TileKey.rowsAtLevel(this.level);
    }
    /**
     * Returns the number of available columns in the tile's [[level]].
     *
     * This is 2 to the power of the level.
     */
    columnCount() {
        return TileKey.columnsAtLevel(this.level);
    }
}
exports.TileKey = TileKey;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GeoCoordinates_1 = __webpack_require__(/*! ../coordinates/GeoCoordinates */ "./node_modules/@here/harp-geoutils/lib/coordinates/GeoCoordinates.js");
const TileKey_1 = __webpack_require__(/*! ./TileKey */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKey.js");
class TileKeyUtils {
    static geoCoordinatesToTileKey(tilingScheme, geoPoint, level) {
        const projection = tilingScheme.projection;
        const subdivisionScheme = tilingScheme.subdivisionScheme;
        const worldPoint = projection.projectPoint(geoPoint);
        const cx = subdivisionScheme.getLevelDimensionX(level);
        const cy = subdivisionScheme.getLevelDimensionY(level);
        const { min, max } = projection.worldExtent(0, 0);
        const worldSizeX = max.x - min.x;
        const worldSizeY = max.y - min.y;
        if (worldPoint.x < min.x || worldPoint.x > max.x) {
            return null;
        }
        if (worldPoint.y < min.y || worldPoint.y > max.y) {
            return null;
        }
        const column = Math.min(cx - 1, Math.floor((cx * (worldPoint.x - min.x)) / worldSizeX));
        const row = Math.min(cy - 1, Math.floor((cy * (worldPoint.y - min.y)) / worldSizeY));
        return TileKey_1.TileKey.fromRowColumnLevel(row, column, level);
    }
    static geoRectangleToTileKeys(tilingScheme, geoBox, level) {
        const wrap = (value, lower, upper) => {
            if (value < lower) {
                return upper - ((lower - value) % (upper - lower));
            }
            return lower + ((value - lower) % (upper - lower));
        };
        const clamp = (x, minVal, maxVal) => {
            return Math.min(Math.max(x, minVal), maxVal);
        };
        // Clamp at the poles and wrap around the international date line.
        const southWestLongitude = wrap(geoBox.southWest.longitudeInRadians, -Math.PI, Math.PI);
        const southWestLatitude = clamp(geoBox.southWest.latitudeInRadians, -(Math.PI * 0.5), Math.PI * 0.5);
        const northEastLongitude = wrap(geoBox.northEast.longitudeInRadians, -Math.PI, Math.PI);
        const northEastLatitude = clamp(geoBox.northEast.latitudeInRadians, -(Math.PI * 0.5), Math.PI * 0.5);
        const minTileKey = TileKeyUtils.geoCoordinatesToTileKey(tilingScheme, GeoCoordinates_1.GeoCoordinates.fromRadians(southWestLatitude, southWestLongitude), level);
        const maxTileKey = TileKeyUtils.geoCoordinatesToTileKey(tilingScheme, GeoCoordinates_1.GeoCoordinates.fromRadians(northEastLatitude, northEastLongitude), level);
        const columnCount = tilingScheme.subdivisionScheme.getLevelDimensionX(level);
        if (!minTileKey || !maxTileKey) {
            throw new Error("Invalid coordinates");
        }
        const minColumn = minTileKey.column;
        let maxColumn = maxTileKey.column;
        // wrap around case
        if (southWestLongitude > northEastLongitude) {
            if (maxColumn !== minColumn) {
                maxColumn += columnCount;
            }
            else {
                // do not duplicate
                maxColumn += columnCount - 1;
            }
        }
        const minRow = Math.min(minTileKey.row, maxTileKey.row);
        const maxRow = Math.max(minTileKey.row, maxTileKey.row);
        const keys = new Array();
        for (let row = minRow; row <= maxRow; ++row) {
            for (let column = minColumn; column <= maxColumn; ++column) {
                keys.push(TileKey_1.TileKey.fromRowColumnLevel(row, column % columnCount, level));
            }
        }
        return keys;
    }
}
exports.TileKeyUtils = TileKeyUtils;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const SubTiles_1 = __webpack_require__(/*! ./SubTiles */ "./node_modules/@here/harp-geoutils/lib/tiling/SubTiles.js");
class TileTreeTraverse {
    constructor(subdivisionScheme) {
        this.m_subdivisionScheme = subdivisionScheme;
    }
    subTiles(tileKey) {
        const subTileCount = this.m_subdivisionScheme.getSubdivisionX(tileKey.level) *
            this.m_subdivisionScheme.getSubdivisionY(tileKey.level);
        // tslint:disable-next-line:no-bitwise
        const subTileMask = ~(~0 << subTileCount);
        const subTiles = new SubTiles_1.SubTiles(tileKey, 1, subTileMask);
        const it = subTiles.iterator();
        const result = new Array();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < subTiles.length; ++i) {
            result.push(it.value);
            it.next();
        }
        return result;
    }
}
exports.TileTreeTraverse = TileTreeTraverse;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const FlatTileBoundingBoxGenerator_1 = __webpack_require__(/*! ./FlatTileBoundingBoxGenerator */ "./node_modules/@here/harp-geoutils/lib/tiling/FlatTileBoundingBoxGenerator.js");
const TileKeyUtils_1 = __webpack_require__(/*! ./TileKeyUtils */ "./node_modules/@here/harp-geoutils/lib/tiling/TileKeyUtils.js");
const TileTreeTraverse_1 = __webpack_require__(/*! ./TileTreeTraverse */ "./node_modules/@here/harp-geoutils/lib/tiling/TileTreeTraverse.js");
/**
 * The `TilingScheme` represents how the data is tiled.
 */
class TilingScheme {
    /**
     * Constructs a new `TilingScheme` with the given subdivision scheme and projection.
     *
     * @param subdivisionScheme The subdivision scheme used by this `TilingScheme`.
     * @param projection The projection used by this `TilingScheme`.
     */
    constructor(subdivisionScheme, projection) {
        this.subdivisionScheme = subdivisionScheme;
        this.projection = projection;
        this.boundingBoxGenerator = new FlatTileBoundingBoxGenerator_1.FlatTileBoundingBoxGenerator(this);
        this.tileTreeTraverse = new TileTreeTraverse_1.TileTreeTraverse(subdivisionScheme);
    }
    /**
     * Returns the sub tile keys of the given tile.
     *
     * @param tileKey The [[TileKey]].
     * @returns The list of the sub tile keys.
     */
    getSubTileKeys(tileKey) {
        return this.tileTreeTraverse.subTiles(tileKey);
    }
    /**
     * Gets the [[TileKey]] from the given geo position and level.
     *
     * @param geoPoint The position in geo coordinates.
     * @param level The level of the resulting `TileKey`.
     */
    getTileKey(geoPoint, level) {
        return TileKeyUtils_1.TileKeyUtils.geoCoordinatesToTileKey(this, geoPoint, level);
    }
    /**
     * Gets the list of [[TileKey]]s contained in the given [[GeoBox]].
     *
     * @param geoBox The bounding box in geo coordinates.
     * @param level The level of the resulting `TileKey`.
     */
    getTileKeys(geoBox, level) {
        return TileKeyUtils_1.TileKeyUtils.geoRectangleToTileKeys(this, geoBox, level);
    }
    /**
     * Returns the bounding box in geo coordinates for the given [[TileKey]].
     *
     * @param tileKey The `TileKey`.
     */
    getGeoBox(tileKey) {
        return this.boundingBoxGenerator.getGeoBox(tileKey);
    }
    /**
     * Returns the bounding box in world coordinates.
     *
     * @param tileKey The `TileKey`.
     * @param result The optional object that will contain the resulting bounding box.
     */
    getWorldBox(tileKey, result) {
        return this.boundingBoxGenerator.getWorldBox(tileKey, result);
    }
}
exports.TilingScheme = TilingScheme;


/***/ }),

/***/ "./node_modules/@here/harp-geoutils/lib/tiling/WebMercatorTilingScheme.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-geoutils/lib/tiling/WebMercatorTilingScheme.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MercatorProjection_1 = __webpack_require__(/*! ../projection/MercatorProjection */ "./node_modules/@here/harp-geoutils/lib/projection/MercatorProjection.js");
const QuadTreeSubdivisionScheme_1 = __webpack_require__(/*! ./QuadTreeSubdivisionScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/QuadTreeSubdivisionScheme.js");
const TilingScheme_1 = __webpack_require__(/*! ./TilingScheme */ "./node_modules/@here/harp-geoutils/lib/tiling/TilingScheme.js");
/**
 * A [[TilingScheme]] featuring quadtree subdivision scheme and web Mercator projection.
 */
exports.webMercatorTilingScheme = new TilingScheme_1.TilingScheme(QuadTreeSubdivisionScheme_1.quadTreeSubdivisionScheme, MercatorProjection_1.webMercatorProjection);


/***/ }),

/***/ "./node_modules/@here/harp-lines/lib/Lines.js":
/*!****************************************************!*\
  !*** ./node_modules/@here/harp-lines/lib/Lines.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = __webpack_require__(/*! three */ "three");
// Preallocate temp variables used during line generation.
const tmpV = new THREE.Vector3();
const tmpNormal = new THREE.Vector3();
const tmpTangent0 = new THREE.Vector3();
const tmpTangent1 = new THREE.Vector3();
const tmpBitangent = new THREE.Vector3();
const SEGMENT_OFFSET = 0.1;
/**
 * Declares all the vertex attributes used for rendering a line using the [[SolidLineMaterial]].
 */
const LINE_VERTEX_ATTRIBUTES = [
    { name: "texcoord", itemSize: 2, offset: 0 },
    { name: "position", itemSize: 3, offset: 2 },
    { name: "tangent", itemSize: 3, offset: 5 },
    { name: "bitangent", itemSize: 4, offset: 8 }
];
/** Stride size for line vertex data. */
const LINE_STRIDE = 12;
/**
 * Declares all the vertex attributes used for rendering a line using the
 * [[HighPrecisionLineMaterial]].
 */
const HP_LINE_VERTEX_ATTRIBUTES = [
    { name: "texcoord", itemSize: 2, offset: 0 },
    { name: "position", itemSize: 3, offset: 2 },
    { name: "positionLow", itemSize: 3, offset: 5 },
    { name: "tangent", itemSize: 3, offset: 8 },
    { name: "bitangent", itemSize: 4, offset: 11 }
];
/** Stride size for high precision line vertex data. */
const HP_LINE_STRIDE = 15;
/**
 * Class that holds the vertex and index attributes for a [[Lines]] object.
 */
class LineGeometry {
    constructor() {
        this.vertices = [];
        this.vertexColors = [];
        this.indices = [];
    }
}
exports.LineGeometry = LineGeometry;
/**
 * Creates a [[LineGeometry]] object out of a polyline.
 *
 * @param center Center of the polyline.
 * @param polyline Array of `numbers` describing a polyline.
 * @param colors Array of `numbers` describing a polyline's colors.
 * @param geometry [[LineGeometry]] object used to store the vertex and index attributes.
 * @param highPrecision If `true` will create high-precision vertex information.
 */
function createLineGeometry(center, polyline, colors, geometry = new LineGeometry(), highPrecision = false) {
    if (polyline.length === 0) {
        return geometry;
    }
    const stride = highPrecision ? HP_LINE_STRIDE : LINE_STRIDE;
    const pointCount = polyline.length / 3;
    const segments = new Array(pointCount);
    const tangents = new Array(polyline.length - 3);
    const baseVertex = geometry.vertices.length / stride;
    const vertexColors = colors !== undefined && colors.length && polyline.length;
    // Compute segments and tangents.
    let sum = SEGMENT_OFFSET;
    segments[0] = sum;
    let isFlat = true;
    for (let i = 0; i < pointCount - 1; ++i) {
        let sqrLength = 0;
        for (let j = 0; j < 3; ++j) {
            const d = polyline[(i + 1) * 3 + j] - polyline[i * 3 + j];
            tangents[i * 3 + j] = d;
            sqrLength += d * d;
            isFlat = j === 2 ? isFlat && polyline[(i + 1) * 3 + j] === 0.0 : isFlat;
        }
        const len = Math.sqrt(sqrLength);
        sum = sum + len;
        segments[i + 1] = sum;
    }
    // Check if we're working with a closed line.
    let isClosed = true;
    for (let j = 0; j < 3; ++j) {
        isClosed = isClosed && polyline[j] === polyline[polyline.length - 3 + j];
    }
    for (let i = 0; i < pointCount; ++i) {
        // Retrieve the per-point tangents.
        const T1 = isClosed && i === 0 ? tangents.length - 3 : Math.max(0, i - 1) * 3;
        const T2 = isClosed && i === pointCount - 1 ? 0 : Math.min(i * 3, tangents.length - 3);
        // Process v0 and v1.
        if (i > 0) {
            for (let v = -1; v <= 1; v += 2) {
                // Store the segment and texcoord attributes.
                geometry.vertices.push(segments[i - 1], segments[i] * v);
                // Store the position attribute (component-dependant).
                for (let j = 0; j < 3; ++j) {
                    if (!highPrecision) {
                        geometry.vertices.push(polyline[i * 3 + j]);
                    }
                    else {
                        const highComp = Math.fround(polyline[i * 3 + j]);
                        const lowComp = polyline[i * 3 + j] - highComp;
                        geometry.vertices.push(highComp, lowComp);
                    }
                    tmpNormal.setComponent(j, polyline[i * 3 + j]);
                }
                // Store the bitangent attribute (component-dependant).
                for (let j = 0; j < 3; ++j) {
                    tmpTangent0.setComponent(j, tangents[T1 + j]);
                    tmpTangent1.setComponent(j, tangents[T2 + j]);
                }
                geometry.vertices.push(...tmpTangent0.normalize().toArray());
                const angle = computeBitangent(isFlat ? tmpNormal.set(0, 0, 1) : tmpNormal.add(center).normalize(), tmpTangent0.normalize(), tmpTangent1.normalize(), tmpBitangent);
                geometry.vertices.push(...tmpBitangent.toArray(), angle);
                // Add vertex colors (if supplied).
                if (vertexColors) {
                    geometry.vertexColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
                }
            }
        }
        // Process v2 and v3.
        if (i + 1 < pointCount) {
            for (let v = -1; v <= 1; v += 2) {
                // Store the segment and texcoord attributes.
                geometry.vertices.push(segments[Math.min(i, segments.length - 1)] * -1, segments[Math.min(i + 1, segments.length - 1)] * v);
                // Store the position attribute (component-dependant).
                for (let j = 0; j < 3; ++j) {
                    if (!highPrecision) {
                        geometry.vertices.push(polyline[i * 3 + j]);
                    }
                    else {
                        const highComp = Math.fround(polyline[i * 3 + j]);
                        const lowComp = polyline[i * 3 + j] - highComp;
                        geometry.vertices.push(highComp, lowComp);
                    }
                    tmpNormal.setComponent(j, polyline[i * 3 + j]);
                }
                // Store the bitangent attribute (component-dependant).
                for (let j = 0; j < 3; ++j) {
                    tmpTangent0.setComponent(j, tangents[T1 + j]);
                    tmpTangent1.setComponent(j, tangents[T2 + j]);
                }
                geometry.vertices.push(...tmpTangent0.normalize().toArray());
                const angle = computeBitangent(isFlat ? tmpNormal.set(0, 0, 1) : tmpNormal.add(center).normalize(), tmpTangent0.normalize(), tmpTangent1.normalize(), tmpBitangent);
                geometry.vertices.push(...tmpBitangent.toArray(), angle);
                // Add vertex colors (if supplied).
                if (vertexColors) {
                    geometry.vertexColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
                }
            }
        }
    }
    // Store the triangle indices in the final index buffer.
    for (let i = 0; i < pointCount - 1; ++i) {
        const base = baseVertex + i * 4;
        geometry.indices.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
    }
    return geometry;
}
exports.createLineGeometry = createLineGeometry;
/**
 * Creates a [[LineGeometry]] object out of a polyline.
 *
 * @param polyline Array of `numbers` describing a polyline.
 * @param polyline Array of `numbers` describing a polyline's colors.
 * @param geometry [[LineGeometry]] object used to store the vertex and index attributes.
 */
function createSimpleLineGeometry(polyline, colors, geometry = new LineGeometry()) {
    if (polyline.length === 0) {
        return geometry;
    }
    const pointCount = polyline.length / 3;
    let index = geometry.vertices.length / 3;
    const vertexColors = colors !== undefined && colors.length && polyline.length;
    for (let i = 0; i < pointCount; ++i, index++) {
        if (i > 0) {
            geometry.indices.push(index);
        }
        if (i < pointCount - 1) {
            geometry.indices.push(index);
        }
        for (let j = 0; j < 3; ++j) {
            geometry.vertices.push(polyline[i * 3 + j]);
            if (vertexColors) {
                geometry.vertexColors.push(colors[i * 3 + j]);
            }
        }
    }
    return geometry;
}
exports.createSimpleLineGeometry = createSimpleLineGeometry;
/**
 * Class used to render groups (or batches) of width-variable lines (in the same tile).
 */
class LineGroup {
    constructor(highPrecision = false, isSimple = false) {
        this.highPrecision = highPrecision;
        this.isSimple = isSimple;
        this.m_geometry = new LineGeometry();
    }
    /**
     * Adds all the attribute data needed to a [[BufferGeometry]] object for rendering `Lines`.
     *
     * @param vertices Array of vertex attributes.
     * @param colors Array of vertex colors.
     * @param indices Array of vertex indices.
     * @param geometry [[BufferGeometry]] object which will store all the `Lines` attribute data.
     * @param highPrecision If `true` will create high-precision vertex information.
     * @param isSimple `true` to create simple (nonsolid, nonextruded) lines. Defaults to `false`.
     */
    static createGeometry(vertices, colors, indices, geometry, highPrecision = false, isSimple = false) {
        if (isSimple) {
            geometry.addAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
            if (colors.length === vertices.length) {
                geometry.addAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
            }
            geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
            return geometry;
        }
        else {
            const stride = highPrecision ? HP_LINE_STRIDE : LINE_STRIDE;
            const descriptors = highPrecision ? HP_LINE_VERTEX_ATTRIBUTES : LINE_VERTEX_ATTRIBUTES;
            const buffer = new THREE.InterleavedBuffer(new Float32Array(vertices), stride);
            descriptors.forEach(descr => {
                const attribute = new THREE.InterleavedBufferAttribute(buffer, descr.itemSize, descr.offset, false);
                geometry.addAttribute(descr.name, attribute);
            });
            if (colors.length === vertices.length) {
                geometry.addAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
            }
            geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
            return geometry;
        }
    }
    /**
     * Clears the list of line strips.
     */
    clear() {
        this.m_geometry.vertices = [];
        this.m_geometry.vertexColors = [];
        this.m_geometry.indices = [];
    }
    /**
     * Add the given points to this line group.
     *
     * @param center World center of the provided points.
     * @param points Sequence of (x,y,z) coordinates.
     * @param colors Sequence of (r,g,b) color components.
     */
    add(center, points, colors) {
        if (!this.isSimple) {
            createLineGeometry(center, points, colors, this.m_geometry, this.highPrecision);
        }
        else {
            createSimpleLineGeometry(points, colors, this.m_geometry);
        }
        return this;
    }
    /**
     * Returns the list of vertices.
     */
    get vertices() {
        return this.m_geometry.vertices;
    }
    /**
     * Returns the list of vertex colors.
     */
    get vertexColors() {
        return this.m_geometry.vertexColors;
    }
    /**
     * Returns the list of indices.
     */
    get indices() {
        return this.m_geometry.indices;
    }
    /**
     * Returns the list of [[VertexAttributeDescriptor]]s.
     */
    get vertexAttributes() {
        return this.highPrecision ? HP_LINE_VERTEX_ATTRIBUTES : LINE_VERTEX_ATTRIBUTES;
    }
    /**
     * Returns the vertex attribute stride.
     */
    get stride() {
        return this.highPrecision ? HP_LINE_STRIDE : LINE_STRIDE;
    }
    /**
     * Creates a three.js geometry.
     */
    createGeometry(geometry) {
        if (geometry === undefined) {
            geometry = new THREE.BufferGeometry();
        }
        return LineGroup.createGeometry(this.m_geometry.vertices, this.m_geometry.vertexColors, this.m_geometry.indices, geometry, this.highPrecision);
    }
}
exports.LineGroup = LineGroup;
function computeBitangent(n, t0, t1, bt) {
    let angle = 0;
    if (!t0.equals(t1)) {
        angle = Math.acos(t0.dot(t1)) * Math.sign(n.dot(tmpV.copy(t0).cross(t1)));
        if (Number.isNaN(angle)) {
            angle = 0;
        }
    }
    bt.copy(t0)
        .add(t1)
        .normalize()
        .cross(n)
        .normalize();
    return angle;
}


/***/ }),

/***/ "./node_modules/@here/harp-lines/lib/TriangulateLines.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-lines/lib/TriangulateLines.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = __webpack_require__(/*! three */ "three");
const UNIT_Z = new THREE.Vector3(0, 0, 1);
const POINTS = [0, 1, 2, 1, 3, 2];
const BEVEL_POINTS = [0, 1, 3, 3, 1, 2, 0, 3, 4, 5, 4, 3];
const SECTORS_IN_CIRCLE = 8;
const STEP = Math.PI / SECTORS_IN_CIRCLE;
/**
 * Adds a half-circle geometry to original line
 *
 * @param x The line end X (used as circle center X)
 * @param y The line end Y (used as circle center Y)
 * @param lineAngle The cap incline angle
 * @param radius The cap (circle) radius
 * @param vertices The input vertex buffer (cap vertices are added there)
 * @param indices The input index buffer (cap indices are is added there)
 */
function addCircle(x, y, lineAngle, radius, vertices, indices) {
    const baseVertex = vertices.length / 3;
    // Add cap center to vertices directly (it doesn't need rotation)
    vertices.push(x, y, 0);
    for (let i = 0; i < SECTORS_IN_CIRCLE + 1; ++i) {
        const angle = STEP * i + Math.PI / 2 + lineAngle; // Start angle is -90deg
        vertices.push(x + radius * Math.cos(angle), y + radius * Math.sin(angle), 0);
        indices.push(baseVertex, baseVertex + i + 1, baseVertex + ((i + 1) % (SECTORS_IN_CIRCLE + 1)) + 1);
    }
}
/**
 * Returns the number of points in circle used for caps.
 *
 * @param lineWidth Width of line.
 */
// tslint:disable-next-line:no-unused-variable
function numCirclePoints(lineWidth) {
    return SECTORS_IN_CIRCLE + 1;
}
exports.numCirclePoints = numCirclePoints;
/**
 * Create a triangle mesh from the given polyline.
 *
 * @param points Sequence of (x,y,z) coordinates.
 * @param width The width of the extruded line.
 * @param vertices The output vertex buffer.
 * @param indices The output index buffer.
 * @param startWithCircle `true` if the line should start will a circle.
 * @param endWithCircle `true` if the line should end with a circle.
 */
function triangulateLine(points, width, vertices, indices, startWithCircle = true, endWithCircle = startWithCircle) {
    if (points.length < 3) {
        return;
    }
    // This vector is used for computing cap angle
    const angleVec = new THREE.Vector2();
    if (startWithCircle) {
        // Define lineAngle as (direction - origin) vector angle to X axis
        const lineAngle = points.length !== 3
            ? angleVec.set(points[3] - points[0], points[4] - points[1]).angle()
            : 0;
        addCircle(points[0], points[1], lineAngle, width, vertices, indices);
    }
    const baseVertex = vertices.length / 3;
    // bt = Bitangent (i.e. extrusion vector)
    const prevBt = new THREE.Vector3();
    const p = new THREE.Vector3(); // current point
    const n = new THREE.Vector3(); // next point
    const bt = new THREE.Vector3();
    const averageBt = new THREE.Vector3();
    const p0 = new THREE.Vector3();
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();
    const p3 = new THREE.Vector3();
    const N = points.length / 3;
    let vertexOffset = 0;
    for (let i = 0; i < N; ++i) {
        let useBevel = false;
        p.set(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
        if (i + 1 < N) {
            n.set(points[(i + 1) * 3], points[(i + 1) * 3 + 1], points[(i + 1) * 3 + 2]);
            bt.copy(n)
                .sub(p)
                .normalize()
                .cross(UNIT_Z);
            averageBt.copy(bt);
            if (i > 0) {
                averageBt.add(prevBt).multiplyScalar(1.0 - 0.5 * bt.dot(prevBt));
                useBevel = prevBt.angleTo(bt) > Math.PI / 2;
                if (useBevel) {
                    const inclineWidth = width / Math.cos(bt.angleTo(prevBt) / 2);
                    p0.copy(bt)
                        .add(prevBt)
                        .normalize()
                        .multiplyScalar(-inclineWidth)
                        .add(p);
                    p1.copy(prevBt)
                        .multiplyScalar(width)
                        .add(p);
                    // p2 is used for "miter" connections
                    p2.copy(bt)
                        .add(prevBt)
                        .normalize()
                        .multiplyScalar(inclineWidth)
                        .add(p);
                    p3.copy(bt)
                        .multiplyScalar(width)
                        .add(p);
                }
            }
            if (useBevel) {
                vertices.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
            }
            else {
                p0.copy(averageBt)
                    .multiplyScalar(-width)
                    .add(p);
                p1.copy(averageBt)
                    .multiplyScalar(width)
                    .add(p);
                vertices.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
            }
            prevBt.copy(bt);
        }
        else {
            p0.copy(prevBt)
                .multiplyScalar(-width)
                .add(p);
            p1.copy(prevBt)
                .multiplyScalar(width)
                .add(p);
            vertices.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
        }
        if (i !== N - 1) {
            (useBevel ? BEVEL_POINTS : POINTS).forEach(o => indices.push(baseVertex + vertexOffset + o));
            vertexOffset += useBevel ? 4 : 2;
        }
    }
    if (endWithCircle) {
        const lineAngle = points.length !== 2
            ? angleVec
                .set(points[(N - 3) * 3] - points[(N - 2) * 3], points[(N - 3) * 3 + 1] - points[(N - 2) * 3 + 1])
                .angle()
            : Math.PI;
        addCircle(points[(N - 2) * 3], points[(N - 2) * 3 + 1], lineAngle, width, vertices, indices);
    }
}
exports.triangulateLine = triangulateLine;
/**
 * Reconstruct the original points of a line from the vertices of the triangulated line.
 *
 * @param inBuffer Buffer with vertices.
 * @param startOffset Start index, will differ from `0` if the line has caps.
 * @returns Buffer containing the original points of the triangulated line.
 */
function reconstructLine(inBuffer, startOffset) {
    const outBuffer = new Float32Array(inBuffer.length / 2);
    for (let i = startOffset * 3, i2 = i * 2; i < outBuffer.length; i += 3, i2 += 6) {
        outBuffer[i] = inBuffer[i2] + (inBuffer[i2 + 3] - inBuffer[i2]) * 0.5;
        outBuffer[i + 1] = inBuffer[i2 + 1] + (inBuffer[i2 + 3 + 1] - inBuffer[i2 + 1]) * 0.5;
        outBuffer[i + 2] = inBuffer[i2 + 2] + (inBuffer[i2 + 3 + 2] - inBuffer[i2 + 2]) * 0.5;
    }
    return outBuffer;
}
exports.reconstructLine = reconstructLine;
/**
 * Extract the line width from a triangulated line.
 *
 * @param inBuffer Array of vertex elements of a triangulated line.
 * @param startIndex Start index, will differ from `0` if the line has caps.
 */
function reconstructLineWidth(inBuffer, startIndex) {
    const xd = inBuffer[startIndex * 2 + 3] - inBuffer[startIndex * 2];
    const yd = inBuffer[startIndex * 2 + 3 + 1] - inBuffer[startIndex * 2 + 1];
    const zd = inBuffer[startIndex * 2 + 3 + 2] - inBuffer[startIndex * 2 + 2];
    return Math.sqrt(xd * xd + yd * yd + zd * zd) * 0.5;
}
exports.reconstructLineWidth = reconstructLineWidth;


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/index-worker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/index-worker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/ThemedTileDecoder */ "./node_modules/@here/harp-mapview-decoder/lib/ThemedTileDecoder.js"));
__export(__webpack_require__(/*! ./lib/TileDecoderService */ "./node_modules/@here/harp-mapview-decoder/lib/TileDecoderService.js"));
__export(__webpack_require__(/*! ./lib/TilerService */ "./node_modules/@here/harp-mapview-decoder/lib/TilerService.js"));
__export(__webpack_require__(/*! ./lib/WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js"));
__export(__webpack_require__(/*! ./lib/WorkerServiceManager */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerServiceManager.js"));
__export(__webpack_require__(/*! ./lib/GeoJsonTiler */ "./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js"));


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
const geojsonvt = __webpack_require__(/*! geojson-vt */ "./node_modules/geojson-vt/src/index.js");
class GeoJsonTiler {
    constructor() {
        this.indexes = new Map();
    }
    dispose() {
        /* */
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
    registerIndex(indexId, input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.indexes.has(indexId)) {
                return;
            }
            return this.updateIndex(indexId, input);
        });
    }
    updateIndex(indexId, input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (input instanceof URL) {
                const response = yield fetch(input.href);
                if (!response.ok) {
                    throw new Error(`GeoJsonTiler: Unable to fetch ${input.href}: ${response.statusText}`);
                }
                input = yield response.json();
            }
            else {
                input = input;
            }
            this.indexes.set(indexId, geojsonvt.default(input, {
                maxZoom: 20,
                indexMaxZoom: 5,
                indexMaxPoints: 100000,
                tolerance: 3,
                extent: 4096,
                buffer: 0,
                lineMetrics: false,
                promoteId: null,
                generateId: false,
                debug: 0 // logging level (0, 1 or 2)
            }));
        });
    }
    getTile(indexId, tileKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.indexes.get(indexId);
            if (index === undefined) {
                throw new Error("Tile not found");
            }
            return index.getTile(tileKey.level, tileKey.column, tileKey.row);
        });
    }
}
exports.GeoJsonTiler = GeoJsonTiler;


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/ThemedTileDecoder.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/ThemedTileDecoder.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
/**
 * `ThemedTileDecoder` implements an [[ITileDecoder]] which uses a [[Theme]] to apply styles to the
 * objects displayed in the map.
 *
 * By default, decoders are executed in web workers (using [[TileDecoderService]]) for performance
 * reasons.
 */
class ThemedTileDecoder {
    constructor() {
        this.m_storageLevelOffset = 0;
    }
    dispose() {
        // implemented in subclasses
    }
    decodeTile(data, tileKey, projection) {
        if (this.m_styleSetEvaluator === undefined) {
            return Promise.reject(new Error("No style is defined"));
        }
        return this.decodeThemedTile(data, tileKey, this.m_styleSetEvaluator, projection);
    }
    // tslint:disable:no-unused-variable
    getTileInfo(data, tileKey, projection) {
        return Promise.resolve(undefined);
    }
    // tslint:disable:no-unused-variable
    configure(styleSet, languages, options) {
        if (styleSet !== undefined) {
            this.m_styleSetEvaluator = new index_decoder_1.StyleSetEvaluator(styleSet);
        }
        if (languages !== undefined) {
            this.languages = languages;
        }
        if (options !== undefined && options.storageLevelOffset !== undefined) {
            this.m_storageLevelOffset = options.storageLevelOffset;
        }
    }
}
exports.ThemedTileDecoder = ThemedTileDecoder;


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/TileDecoderService.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/TileDecoderService.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js");
const logger = harp_utils_1.LoggerManager.instance.create("TileDecoderService");
/**
 * An extension to [[WorkerService]], the `TileDecoderService` implements an asynchronous
 * (message based) service to decode tile content in web workers. The `TileDecoderService` itself
 * lives in the web worker, and communicates with messages by means of a [[ConcurrentWorkerSet]]
 * with the application.
 *
 * The `TileDecoderService` handles a [[DecodeTileRequest]], which contains a tile and its freshly
 * loaded binary data, decodes the content with the [[ITileDecoder]] that the service is configured
 * to use, and sends the data back in form of a [[WorkerServiceResponse]].
 */
class TileDecoderService extends WorkerService_1.WorkerService {
    /**
     * Set up the `TileDecoderService`. The name of the service must be unique
     *
     * @param serviceId Service id. Must be unique.
     * @param m_decoder Decoder to handle the decoding and info requests.
     */
    constructor(serviceId, m_decoder) {
        super(serviceId);
        this.serviceId = serviceId;
        this.m_decoder = m_decoder;
        this.m_decoder.connect();
    }
    /**
     * Start a [[TileDecoderService]] with a given decoder.
     *
     * @param serviceId Service id. Must be unique.
     * @param decoder   [[TileDecoder]] instance.
     */
    static start(serviceId, decoder) {
        return new TileDecoderService(serviceId, decoder);
    }
    /**
     * Handle incoming request messages. Identifies message type and processes the request.
     *
     * @param request Message that is either a DecodeTileRequest or a TileInfoRequest.
     * @returns A promise which resolves to a [[WorkerServiceResponse]].
     */
    handleRequest(request) {
        if (harp_datasource_protocol_1.WorkerDecoderProtocol.isDecodeTileRequest(request)) {
            return this.handleDecodeTileRequest(request);
        }
        else if (harp_datasource_protocol_1.WorkerDecoderProtocol.isTileInfoRequest(request)) {
            return this.handleTileInfoRequest(request);
        }
        else {
            return super.handleRequest(request);
        }
    }
    /**
     * Handle incoming configuration message. Configuration message is passed on to decoder.
     *
     * @param request Message of type [[ConfigurationMessage]].
     */
    handleMessage(message) {
        if (harp_datasource_protocol_1.WorkerDecoderProtocol.isConfigurationMessage(message)) {
            this.handleConfigurationMessage(message);
        }
        else {
            logger.error(`[${this.serviceId}]: invalid message ${message.type}`);
        }
    }
    handleDecodeTileRequest(request) {
        const tileKey = harp_geoutils_1.TileKey.fromMortonCode(request.tileKey);
        const projection = harp_datasource_protocol_1.getProjection(request.projection);
        return this.m_decoder.decodeTile(request.data, tileKey, projection).then(decodedTile => {
            const transferList = [];
            decodedTile.geometries.forEach(geom => {
                geom.vertexAttributes.forEach(attr => {
                    if (attr.buffer instanceof ArrayBuffer) {
                        transferList.push(attr.buffer);
                    }
                });
                if (geom.index && geom.index.buffer instanceof ArrayBuffer) {
                    transferList.push(geom.index.buffer);
                }
                if (geom.objInfos !== undefined &&
                    geom.objInfos.length === 1 &&
                    geom.objInfos[0] !== undefined &&
                    "displacementMap" in geom.objInfos[0]) {
                    transferList.push(geom.objInfos[0].displacementMap.buffer);
                }
            });
            decodedTile.techniques.forEach(technique => {
                harp_datasource_protocol_1.addBuffersToTransferList(technique, transferList);
            });
            return {
                response: decodedTile,
                transferList
            };
        });
    }
    handleTileInfoRequest(request) {
        const tileKey = harp_geoutils_1.TileKey.fromMortonCode(request.tileKey);
        const projection = harp_datasource_protocol_1.getProjection(request.projection);
        return this.m_decoder.getTileInfo(request.data, tileKey, projection).then(tileInfo => {
            const transferList = tileInfo !== undefined && tileInfo.transferList !== undefined
                ? tileInfo.transferList
                : [];
            return {
                response: tileInfo,
                transferList
            };
        });
    }
    handleConfigurationMessage(message) {
        this.m_decoder.configure(message.styleSet, message.languages, message.options);
    }
}
exports.TileDecoderService = TileDecoderService;


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/TilerService.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/TilerService.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const GeoJsonTiler_1 = __webpack_require__(/*! ./GeoJsonTiler */ "./node_modules/@here/harp-mapview-decoder/lib/GeoJsonTiler.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js");
/**
 * An extension to [[WorkerService]], the `TilerService` implements an asynchronous (message based)
 * service to tile untiled payloads in web workers. The `TilerService` itself lives in the web
 * worker, and communicates with messages by means of a [[ConcurrentWorkerSet]] with the
 * application.
 *
 * The `TilerService` registers tile indices (parent tile to be subdivided) by handling a
 * [[RegisterIndexRequest]], and can later retrieve tiled payloads from through the [[TileRequest]].
 * The data is sent back in form of a [[WorkerServiceResponse]].
 */
class TilerService extends WorkerService_1.WorkerService {
    /**
     * Set up the `TilerService`. The name of the service must be unique
     *
     * @param serviceId Service id. Must be unique.
     */
    constructor(serviceId) {
        super(serviceId);
        this.serviceId = serviceId;
        this.tiler = new GeoJsonTiler_1.GeoJsonTiler();
    }
    /**
     * Start a [[TilerService]].
     *
     * @param serviceId Service id. Must be unique.
     */
    static start(serviceId) {
        return new TilerService(serviceId);
    }
    /**
     * Handle incoming request messages. Identifies message type and processes the request.
     *
     * @param request [[WorkerTilerProtocol]] request.
     * @returns A promise which resolves to a [[WorkerServiceResponse]].
     */
    handleRequest(request) {
        if (harp_datasource_protocol_1.WorkerTilerProtocol.isRegisterIndexRequest(request)) {
            return this.handleRegisterIndexRequest(request);
        }
        else if (harp_datasource_protocol_1.WorkerTilerProtocol.isUpdateIndexRequest(request)) {
            return this.handleUpdateIndexRequest(request);
        }
        else if (harp_datasource_protocol_1.WorkerTilerProtocol.isTileRequest(request)) {
            return this.handleTileRequest(request);
        }
        else {
            return super.handleRequest(request);
        }
    }
    handleTileRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const tileKey = harp_geoutils_1.TileKey.fromMortonCode(request.tileKey);
            const tile = yield this.tiler.getTile(request.index, tileKey);
            return { response: tile || {} };
        });
    }
    handleRegisterIndexRequest(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = typeof message.input === "string" ? new URL(message.input) : message.input;
            yield this.tiler.registerIndex(message.id, input);
            return { response: {} };
        });
    }
    handleUpdateIndexRequest(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = typeof message.input === "string" ? new URL(message.input) : message.input;
            this.tiler.updateIndex(message.id, input);
            return { response: {} };
        });
    }
}
exports.TilerService = TilerService;


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const logger = harp_utils_1.LoggerManager.instance.create("WorkerService", { enabled: false });
/**
 * Worker Service communication helper.
 *
 * Listens to Web Worker messages from [[ConcurrentWorkerSet]] and implements:
 *  - worker service initialization
 *  - request/response scheme
 *  - error handling.
 *
 * This class should be subclassed to provide concrete like [[TileDecoderService]].
 *
 * Communication peer for [[ConcurrentWorkerSet]].
 */
class WorkerService {
    /**
     * Sets up the `WorkerService` with the specified name, and starts processing messages.
     *
     * @param serviceId The service id.
     */
    constructor(serviceId) {
        this.serviceId = serviceId;
        this.m_pendingRequests = new Map();
        /**
         * Central message handler for this service.
         *
         * Responsible for filtering message target and managing request/response sequence.
         *
         * @param message Message to be dispatched.
         */
        this.onMessage = (message) => {
            if (typeof message.data.service !== "string" || message.data.service !== this.serviceId) {
                return;
            }
            try {
                if (harp_datasource_protocol_1.WorkerServiceProtocol.isRequestMessage(message.data)) {
                    const request = message.data;
                    const requestEntry = {
                        service: request.service,
                        messageId: request.messageId,
                        responseSent: false
                    };
                    this.m_pendingRequests.set(request.messageId, requestEntry);
                    this.tryHandleRequest(request.request)
                        .then(response => {
                        this.doSendResponse(requestEntry, {
                            service: this.serviceId,
                            type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Response,
                            messageId: request.messageId,
                            response: response.response
                        }, response.transferList);
                    })
                        .catch(error => {
                        this.doSendResponse(requestEntry, {
                            service: this.serviceId,
                            type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Response,
                            messageId: request.messageId,
                            error: error.toString()
                        });
                    });
                }
                else {
                    this.tryHandleMessage(message.data);
                }
            }
            catch (err) {
                logger.error(`[${this.serviceId}]: Unhandled exception when handling ${message.type}`);
            }
        };
        self.addEventListener("message", this.onMessage);
        const isInitializedMessage = {
            service: serviceId,
            type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Initialized
        };
        self.postMessage(isInitializedMessage);
    }
    /**
     * Destroy the `WorkerService`. Cancels all pending requests ad removes itself from the message
     * queue.
     */
    destroy() {
        this.cancelAllPendingRequests();
        self.removeEventListener("message", this.onMessage);
    }
    /**
     * Message handler to be overridden by implementation.
     *
     * @param message `MessageEvent.data` as received by `WorkerService`.
     */
    handleMessage(message) {
        logger.error(`[${this.serviceId}]: Invalid message ${message.type}`);
    }
    /**
     * Call request handler to be overridden by implementation.
     *
     * @param request [[RequestMessage.request]] as received by `WorkerService`.
     */
    handleRequest(request) {
        throw new Error(`ServiceAdapter[${this.serviceId}]: Invalid request '${request.type}'`);
    }
    /**
     * Safety belt over [[handleMessage]] for correct exception handling & logging.
     */
    tryHandleMessage(message) {
        try {
            this.handleMessage(message);
        }
        catch (error) {
            logger.error(`[${this.serviceId}]: Failed, handling message ${message.type}`);
        }
    }
    /**
     * Safety belt over [[handleRequest]] for correct exception handling in promise chain.
     */
    tryHandleRequest(request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            // we don't log exceptions here as they are propagated to client as responses
            logger.error(`[${this.serviceId}]: Failure`, error);
            return Promise.reject(error);
        }
    }
    doSendResponse(requestEntry, response, transferList) {
        if (requestEntry.responseSent) {
            return;
        }
        if (transferList !== undefined) {
            self.postMessage(response, transferList);
        }
        else {
            self.postMessage(response);
        }
        requestEntry.responseSent = true;
        this.m_pendingRequests.delete(requestEntry.messageId);
    }
    cancelAllPendingRequests() {
        this.m_pendingRequests.forEach(requestEntry => {
            this.doSendResponse(requestEntry, {
                service: this.serviceId,
                type: harp_datasource_protocol_1.WorkerServiceProtocol.ServiceMessageName.Response,
                messageId: requestEntry.messageId,
                error: "cancelled"
            });
        });
    }
}
exports.WorkerService = WorkerService;


/***/ }),

/***/ "./node_modules/@here/harp-mapview-decoder/lib/WorkerServiceManager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-mapview-decoder/lib/WorkerServiceManager.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const WorkerService_1 = __webpack_require__(/*! ./WorkerService */ "./node_modules/@here/harp-mapview-decoder/lib/WorkerService.js");
/**
 * Manages dynamic worker services in Web Worker context.
 *
 * Handles `CreateService` and `DestroyService` messages sent to Web Worker. Singleton (in scope of
 * one worker runtime!), starts automatically with first [[getInstance]] call.
 */
class WorkerServiceManager extends WorkerService_1.WorkerService {
    constructor(serviceId = harp_datasource_protocol_1.WorkerServiceProtocol.WORKER_SERVICE_MANAGER_SERVICE_ID) {
        super(serviceId);
        /**
         * Contains all registered service factories indexed by `serviceType`.
         */
        this.m_factories = new Map();
        /**
         * Contains all managed worker services indexed by their `serviceId`.
         */
        this.m_services = new Map();
    }
    /**
     * Gets the default instance of `WorkerServiceManager`. Starts the service when first called.
     */
    static getInstance() {
        if (this.m_service === undefined) {
            this.m_service = new WorkerServiceManager(harp_datasource_protocol_1.WorkerServiceProtocol.WORKER_SERVICE_MANAGER_SERVICE_ID);
        }
        return this.m_service;
    }
    /**
     * Register [[WorkerService]] class to this manager.
     *
     * @param workerServiceDescriptor service type and factory
     */
    register(workerServiceDescriptor) {
        this.m_factories.set(workerServiceDescriptor.serviceType, workerServiceDescriptor.factory);
    }
    handleRequest(request) {
        if (request.type === harp_datasource_protocol_1.WorkerServiceProtocol.Requests.CreateService) {
            const existingService = this.m_services.get(request.targetServiceId);
            if (existingService !== undefined) {
                throw Error(
                // tslint:disable-next-line: max-line-length
                `error - service with targetServiceId='${request.targetServiceId}' already running, ignoring CreateService request`);
            }
            const factory = this.m_factories.get(request.targetServiceType);
            if (factory === undefined) {
                throw Error(`unknown targetServiceType requested: '${request.targetServiceType}'`);
            }
            const service = factory(request.targetServiceId);
            this.m_services.set(request.targetServiceId, service);
        }
        if (request.type === harp_datasource_protocol_1.WorkerServiceProtocol.Requests.DestroyService) {
            const service = this.m_services.get(request.targetServiceId);
            if (service === undefined) {
                throw Error(`unknown targetServiceId '${request.targetServiceId}'`);
            }
            service.destroy();
            this.m_services.delete(request.targetServiceId);
        }
        return Promise.resolve({
            response: {}
        });
    }
}
exports.WorkerServiceManager = WorkerServiceManager;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/index-worker.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/index-worker.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/OmvDecoder */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoder.js"));
__export(__webpack_require__(/*! ./lib/OmvTiler */ "./node_modules/@here/harp-omv-datasource/lib/OmvTiler.js"));
__export(__webpack_require__(/*! ./lib/OmvDecoderDefs */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js"));


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvData.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvData.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const Long = __webpack_require__(/*! long */ "./node_modules/long/src/long.js");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js");
const OmvUtils_1 = __webpack_require__(/*! ./OmvUtils */ "./node_modules/@here/harp-omv-datasource/lib/OmvUtils.js");
const vector_tile_1 = __webpack_require__(/*! ./proto/vector_tile */ "./node_modules/@here/harp-omv-datasource/lib/proto/vector_tile.js");
/**
 * @hidden
 */
var CommandKind;
(function (CommandKind) {
    CommandKind[CommandKind["MoveTo"] = 1] = "MoveTo";
    CommandKind[CommandKind["LineTo"] = 2] = "LineTo";
    CommandKind[CommandKind["ClosePath"] = 7] = "ClosePath";
})(CommandKind = exports.CommandKind || (exports.CommandKind = {}));
/**
 * @hidden
 */
function isMoveToCommand(command) {
    return command.kind === CommandKind.MoveTo;
}
exports.isMoveToCommand = isMoveToCommand;
/**
 * @hidden
 */
function isLineToCommand(command) {
    return command.kind === CommandKind.LineTo;
}
exports.isLineToCommand = isLineToCommand;
/**
 * @hidden
 */
function isClosePathCommand(command) {
    return command.kind === CommandKind.ClosePath;
}
exports.isClosePathCommand = isClosePathCommand;
/**
 * @hidden
 */
function visitOmv(vectorTile, visitor) {
    if (!vectorTile.layers) {
        return;
    }
    for (const layer of vectorTile.layers) {
        if (!visitor.visitLayer || visitor.visitLayer(layer)) {
            visitOmvLayer(layer, visitor);
        }
        if (visitor.endVisitLayer) {
            visitor.endVisitLayer(layer);
        }
    }
}
exports.visitOmv = visitOmv;
/**
 * @hidden
 */
function visitOmvLayer(layer, visitor) {
    if (!visitor.visitLayer || visitor.visitLayer(layer)) {
        if (layer.features) {
            for (const feature of layer.features) {
                switch (feature.type) {
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.UNKNOWN:
                        break;
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.POINT:
                        if (visitor.visitPointFeature) {
                            visitor.visitPointFeature(feature);
                        }
                        break;
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.LINESTRING:
                        if (visitor.visitLineFeature) {
                            visitor.visitLineFeature(feature);
                        }
                        break;
                    case vector_tile_1.com.mapbox.pb.Tile.GeomType.POLYGON:
                        if (visitor.visitPolygonFeature) {
                            visitor.visitPolygonFeature(feature);
                        }
                        break;
                }
            }
        }
    }
    if (visitor.endVisitLayer) {
        visitor.endVisitLayer(layer);
    }
}
exports.visitOmvLayer = visitOmvLayer;
/**
 * @hidden
 */
class FeatureAttributes {
    accept(layer, feature, visitor) {
        const { keys, values } = layer;
        const tags = feature.tags;
        if (!tags || !keys || !values) {
            return;
        }
        for (let i = 0; i < tags.length; i += 2) {
            const key = keys[tags[i]];
            const value = values[tags[i + 1]];
            if (!visitor.visitAttribute(key, value)) {
                break;
            }
        }
    }
}
exports.FeatureAttributes = FeatureAttributes;
/**
 * @hidden
 */
class GeometryCommands {
    accept(geometry, tileKey, geoBox, extent = 4096, visitor) {
        const geometryCount = geometry.length;
        const { north, west } = geoBox;
        const N = Math.log2(extent);
        const scale = Math.pow(2, tileKey.level + N);
        const top = OmvUtils_1.lat2tile(north, tileKey.level + N);
        const left = ((west + 180) / 360) * scale;
        let currX = 0;
        let currY = 0;
        const xCoords = [];
        const yCoords = [];
        const commands = [];
        for (let cmdIndex = 0; cmdIndex < geometryCount;) {
            // tslint:disable:no-bitwise
            const kind = (geometry[cmdIndex] & 0x7);
            const count = geometry[cmdIndex] >> 0x3;
            // tslint:enable:no-bitwise
            ++cmdIndex;
            if (kind === CommandKind.MoveTo || kind === CommandKind.LineTo) {
                for (let n = 0; n < count; ++n) {
                    const xx = geometry[cmdIndex++];
                    const yy = geometry[cmdIndex++];
                    // tslint:disable:no-bitwise
                    currX += (xx >> 1) ^ -(xx & 1);
                    currY += (yy >> 1) ^ -(yy & 1);
                    if (visitor.type === "Polygon") {
                        xCoords.push(currX);
                        yCoords.push(currY);
                    }
                    const R = harp_geoutils_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE;
                    const position = new three_1.Vector3(((left + currX) / scale) * R, ((top + currY) / scale) * R, 0);
                    commands.push({ kind, position });
                }
            }
            else {
                for (let i = 0; i < commands.length; ++i) {
                    const prevX = xCoords[i];
                    const prevY = yCoords[i];
                    const nextX = xCoords[(i + 1) % xCoords.length];
                    const nextY = yCoords[(i + 1) % yCoords.length];
                    commands[i].outline = !((prevX <= 0 && nextX <= 0) ||
                        (prevX >= extent && nextX >= extent) ||
                        (prevY <= 0 && nextY <= 0) ||
                        (prevY >= extent && nextY >= extent));
                    visitor.visitCommand(commands[i]);
                }
                visitor.visitCommand({ kind });
                xCoords.length = 0;
                yCoords.length = 0;
                commands.length = 0;
            }
        }
        if (commands.length > 0) {
            for (const command of commands) {
                visitor.visitCommand(command);
            }
        }
    }
}
exports.GeometryCommands = GeometryCommands;
const propertyCategories = [
    "stringValue",
    "floatValue",
    "doubleValue",
    "intValue",
    "uintValue",
    "sintValue",
    "boolValue"
];
function simplifiedValue(value) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    for (const category of propertyCategories) {
        if (hasOwnProperty.call(value, category)) {
            const v = value[category];
            if (v === undefined) {
                throw new Error("unpexted undefined value");
            }
            return Long.isLong(v) ? v.toNumber() : v;
        }
    }
    throw new Error("not happening");
}
function replaceReservedName(name) {
    switch (name) {
        case "id":
            return "$id";
        default:
            return name;
    } // switch
}
function decodeFeatureId(feature, logger) {
    if (feature.id !== undefined) {
        if (typeof feature.id === "number") {
            return feature.id;
        }
        else if (Long.isLong(feature.id)) {
            if (feature.id.greaterThan(Number.MAX_SAFE_INTEGER)) {
                if (logger !== undefined) {
                    logger.error("Invalid ID: Larger than largest available Number in feature: ", feature);
                }
            }
            return feature.id.toNumber(); // long
        }
    }
    return undefined;
}
function readAttributes(layer, feature, defaultAttributes = {}) {
    const attrs = new FeatureAttributes();
    const attributes = defaultAttributes || {};
    attrs.accept(layer, feature, {
        visitAttribute: (name, value) => {
            attributes[replaceReservedName(name)] = simplifiedValue(value);
            return true;
        }
    });
    return attributes;
}
function createFeatureEnv(layer, feature, geometryType, storageLevel, logger, parent) {
    const attributes = {
        $layer: layer.name,
        $level: storageLevel,
        $geometryType: geometryType
    };
    // Some sources serve `id` directly as `IFeature` property ...
    if (feature.id !== undefined) {
        attributes.$id = decodeFeatureId(feature, logger);
    }
    readAttributes(layer, feature, attributes);
    return new index_decoder_1.MapEnv(attributes, parent);
}
function asGeometryType(feature) {
    if (feature === undefined) {
        return OmvDecoderDefs_1.OmvGeometryType.UNKNOWN;
    }
    switch (feature.type) {
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.UNKNOWN:
            return OmvDecoderDefs_1.OmvGeometryType.UNKNOWN;
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.POINT:
            return OmvDecoderDefs_1.OmvGeometryType.POINT;
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.LINESTRING:
            return OmvDecoderDefs_1.OmvGeometryType.LINESTRING;
        case vector_tile_1.com.mapbox.pb.Tile.GeomType.POLYGON:
            return OmvDecoderDefs_1.OmvGeometryType.POLYGON;
        default:
            return OmvDecoderDefs_1.OmvGeometryType.UNKNOWN;
    } // switch
}
/**
 * The class [[OmvProtobufDataAdapter]] converts OMV protobuf geo data
 * to geometries for the given [[IGeometryProcessor]].
 */
class OmvProtobufDataAdapter {
    /**
     * Constructs a new [[OmvProtobufDataAdapter]].
     *
     * @param processor The [[IGeometryProcessor]] used to process the data.
     * @param dataFilter The [[OmvFeatureFilter]] used to filter features.
     * @param logger The [[ILogger]] used to log diagnostic messages.
     */
    constructor(processor, dataFilter, logger) {
        this.m_geometryCommands = new GeometryCommands();
        this.m_processor = processor;
        this.m_dataFilter = dataFilter;
        this.m_logger = logger;
    }
    /**
     * The [[OmvFeatureFilter]] used to filter features.
     */
    get dataFilter() {
        return this.m_dataFilter;
    }
    /**
     * The [[OmvFeatureFilter]] used to filter features.
     */
    set dataFilter(dataFilter) {
        this.m_dataFilter = dataFilter;
    }
    /**
     * Checks that the given data can be processed by this [[OmvProtobufDataAdapter]].
     */
    canProcess(data) {
        return OmvUtils_1.isArrayBufferLike(data);
    }
    /**
     * Processes the given data payload using this adapter's [[IGeometryProcessor]].
     *
     * @param data The data payload to process.
     * @param tileKey The [[TileKey]] of the tile enclosing the data.
     * @param geoBox The [[GeoBox]] of the tile enclosing the data.
     */
    process(data, tileKey, geoBox) {
        const payload = new Uint8Array(data);
        const proto = vector_tile_1.com.mapbox.pb.Tile.decode(payload);
        this.m_tileKey = tileKey;
        this.m_geoBox = geoBox;
        visitOmv(proto, this);
    }
    /**
     * Visits the OMV layer.
     *
     * @param layer The OMV layer to process.
     */
    visitLayer(layer) {
        this.m_layer = layer;
        const storageLevel = this.m_tileKey.level;
        const layerName = layer.name;
        if (this.m_dataFilter !== undefined &&
            !this.m_dataFilter.wantsLayer(layerName, storageLevel)) {
            return false;
        }
        return true;
    }
    /**
     * Visits point features.
     *
     * @param feature The OMV point features to process.
     */
    visitPointFeature(feature) {
        if (feature.geometry === undefined) {
            return;
        }
        const storageLevel = this.m_tileKey.level;
        const layerName = this.m_layer.name;
        if (this.m_dataFilter !== undefined &&
            !this.m_dataFilter.wantsPointFeature(layerName, asGeometryType(feature), storageLevel)) {
            return;
        }
        const geometry = [];
        this.m_geometryCommands.accept(feature.geometry, this.m_tileKey, this.m_geoBox, this.m_layer.extent, {
            type: "Point",
            visitCommand: command => {
                if (isMoveToCommand(command)) {
                    geometry.push(command.position);
                }
            }
        });
        if (geometry.length === 0) {
            return;
        }
        const env = createFeatureEnv(this.m_layer, feature, "point", storageLevel, this.m_logger);
        this.m_processor.processPointFeature(layerName, geometry, env, storageLevel);
    }
    /**
     * Visits the line features.
     *
     * @param feature The line features to process.
     */
    visitLineFeature(feature) {
        if (feature.geometry === undefined) {
            return;
        }
        const storageLevel = this.m_tileKey.level;
        const layerName = this.m_layer.name;
        if (this.m_dataFilter !== undefined &&
            !this.m_dataFilter.wantsLineFeature(layerName, asGeometryType(feature), storageLevel)) {
            return;
        }
        const geometry = [];
        let positions;
        this.m_geometryCommands.accept(feature.geometry, this.m_tileKey, this.m_geoBox, this.m_layer.extent, {
            type: "Line",
            visitCommand: command => {
                if (isMoveToCommand(command)) {
                    positions = [command.position];
                    geometry.push({ positions });
                }
                else if (isLineToCommand(command)) {
                    positions.push(command.position);
                }
            }
        });
        if (geometry.length === 0) {
            return;
        }
        const env = createFeatureEnv(this.m_layer, feature, "line", storageLevel, this.m_logger);
        this.m_processor.processLineFeature(layerName, geometry, env, storageLevel);
    }
    /**
     * Visits the polygon features.
     *
     * @param feature The polygon features to process.
     */
    visitPolygonFeature(feature) {
        if (feature.geometry === undefined) {
            return;
        }
        const storageLevel = this.m_tileKey.level;
        const layerName = this.m_layer.name;
        if (this.m_dataFilter !== undefined &&
            !this.m_dataFilter.wantsPolygonFeature(layerName, asGeometryType(feature), storageLevel)) {
            return;
        }
        const geometry = [];
        const currentPolygon = { rings: [] };
        let currentRing;
        this.m_geometryCommands.accept(feature.geometry, this.m_tileKey, this.m_geoBox, this.m_layer.extent, {
            type: "Polygon",
            visitCommand: command => {
                if (isMoveToCommand(command)) {
                    currentRing = {
                        positions: [command.position],
                        outlines: [command.outline]
                    };
                }
                else if (isLineToCommand(command)) {
                    currentRing.positions.push(command.position);
                    currentRing.outlines.push(command.outline);
                }
                else if (isClosePathCommand(command)) {
                    currentPolygon.rings.push(currentRing);
                }
            }
        });
        if (currentPolygon.rings.length > 0) {
            geometry.push(currentPolygon);
        }
        if (geometry.length === 0) {
            return;
        }
        const env = createFeatureEnv(this.m_layer, feature, "polygon", storageLevel, this.m_logger);
        this.m_processor.processPolygonFeature(layerName, geometry, env, storageLevel);
    }
}
exports.OmvProtobufDataAdapter = OmvProtobufDataAdapter;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvDataFilter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvDataFilter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js");
/**
 * Builds an `OmvFilterDescription` (internal type) that specifies an [[OmvFeatureFilter]] as well
 * as an [[OmvFeatureModifier]].
 *
 */
class OmvFeatureFilterDescriptionBuilder {
    /**
     * Builds an `OmvFilterDescription` (internal type) that specifies an [[OmvFeatureFilter]] as
     * well as an [[OmvFeatureModifier]].
     *
     * @param processLayersDefault If `true`, all unspecified layers will be processed. If `false`,
     * all unspecified layers will be ignored.
     * @param processPointsDefault If `true`, all unspecified point features will be processed. If
     * `false`, all unspecified point features will be ignored.
     * @param processLinesDefault If `true`, all unspecified line features will be processed. If
     * `false`, all unspecified line features will be ignored.
     * @param processPolygonsDefault If `true`, all unspecified polygon features will be processed.
     * If `false`, all unspecified polygon features will be ignored.
     */
    constructor(options) {
        this.m_processLayersDefault = true;
        this.m_processPointsDefault = true;
        this.m_processLinesDefault = true;
        this.m_processPolygonsDefault = true;
        this.m_layersToProcess = new Array();
        this.m_layersToIgnore = new Array();
        this.m_pointsToProcess = new Array();
        this.m_ignoredPoints = new Array();
        this.m_linesToProcess = new Array();
        this.m_linesToIgnore = new Array();
        this.m_polygonsToProcess = new Array();
        this.m_polygonsToIgnore = new Array();
        if (options) {
            this.m_processLayersDefault =
                options.processLayersDefault !== undefined ? options.processLayersDefault : true;
            this.m_processPointsDefault =
                options.processPointsDefault !== undefined ? options.processPointsDefault : true;
            this.m_processLinesDefault =
                options.processLinesDefault !== undefined ? options.processLinesDefault : true;
            this.m_processPolygonsDefault =
                options.processPolygonsDefault !== undefined
                    ? options.processPolygonsDefault
                    : true;
        }
    }
    /**
     * Add a layer that should be processed.
     *
     * @param layer Layer name to be matched.
     * @param match Match condition.
     */
    processLayer(layer, match = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, minLevel = 0, maxLevel = Infinity) {
        this.m_layersToProcess.push({
            name: { value: layer, match },
            minLevel,
            maxLevel
        });
    }
    /**
     * Add a layer that should be ignored.
     *
     * @param layer Layer name to be matched.
     * @param match Match condition.
     */
    ignoreLayer(layer, match = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, minLevel = 0, maxLevel = Infinity) {
        this.m_layersToIgnore.push({
            name: { value: layer, match },
            minLevel,
            maxLevel
        });
    }
    /**
     * Add a valid point feature.
     *
     * @param options Feature options.
     */
    processPoint(options) {
        this.addItem(this.m_pointsToProcess, options.layer, options.geomType, options.featureClass, options.matchLayer, options.matchClass, options.minLevel, options.maxLevel);
    }
    /**
     * Add valid point features.
     *
     * @param options multi feature options
     */
    processPoints(options) {
        this.addItems(this.m_pointsToProcess, options.layer, options.geomTypes, options.featureClasses, options.matchLayer, options.minLevel, options.maxLevel);
    }
    /**
     * Add a point feature that should be ignored.
     *
     * @param layer Layer name to be matched
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClass Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    ignorePoint(layer, geomType, featureClass, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, matchClass = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItem(this.m_ignoredPoints, layer, geomType, featureClass, matchLayer, matchClass);
    }
    /**
     * Add point features that should be ignored.
     *
     * @param layer Layer name to be matched
     * @param geomTypes Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClasses Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    ignorePoints(layer, geomTypes, featureClasses, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItems(this.m_ignoredPoints, layer, geomTypes, featureClasses, matchLayer);
    }
    /**
     * Add a valid line feature.
     *
     * @param layer Layer name to be matched.
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClass Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    processLine(layer, geomType, featureClass, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, matchClass = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItem(this.m_linesToProcess, layer, geomType, featureClass, matchLayer, matchClass);
    }
    /**
     * Add valid line features.
     *
     * @param layer Layer name to be matched.
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClasses Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    processLines(layer, geomType, featureClasses, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItems(this.m_linesToProcess, layer, geomType, featureClasses, matchLayer);
    }
    /**
     * Ignore a line feature.
     *
     * @param layer Layer name to be matched
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClass Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    ignoreLine(layer, geomType, featureClass, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, matchClass = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItem(this.m_linesToIgnore, layer, geomType, featureClass, matchLayer, matchClass);
    }
    /**
     * Ignore line features.
     *
     * @param layer Layer name to be matched.
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClasses Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    ignoreLines(layer, geomType, featureClasses, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItems(this.m_linesToIgnore, layer, geomType, featureClasses, matchLayer);
    }
    /**
     * Add a valid polygon feature.
     *
     * @param layer Layer name to be matched.
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClass Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    processPolygon(layer, geomType, featureClass, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, matchClass = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItem(this.m_polygonsToProcess, layer, geomType, featureClass, matchLayer, matchClass);
    }
    /**
     * Add valid polygon features.
     *
     * @param layer Layer name to be matched.
     * @param geomTypes Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClasses Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    processPolygons(layer, geomType, featureClasses, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItems(this.m_polygonsToProcess, layer, geomType, featureClasses, matchLayer);
    }
    /**
     * Ignore a valid polygon feature.
     *
     * @param layer Layer name to be matched
     * @param geomType Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClass Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    ignorePolygon(layer, geomType, featureClass, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match, matchClass = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItem(this.m_polygonsToIgnore, layer, geomType, featureClass, matchLayer, matchClass);
    }
    /**
     * Ignore polygon features.
     *
     * @param layer Layer name to be matched.
     * @param geomTypes Optional geometry type to be limited to. If specified, but does not match,
     * the feature is ignored.
     * @param featureClasses Optional class/classes to match. If specified, but does not match, the
     * feature is ignored.
     * @param matchLayer Match condition for the layer name.
     * @param matchClass Match condition for `featureClass`.
     */
    ignorePolygons(layer, geomType, featureClasses, matchLayer = OmvDecoderDefs_1.OmvFilterString.StringMatch.Match) {
        this.addItems(this.m_polygonsToIgnore, layer, geomType, featureClasses, matchLayer);
    }
    /**
     * Create a filter description that can be passed as an option to the [[OmvDataSource]].
     */
    createDescription() {
        return {
            processLayersDefault: this.m_processLayersDefault,
            processPointsDefault: this.m_processPointsDefault,
            processLinesDefault: this.m_processLinesDefault,
            processPolygonsDefault: this.m_processPolygonsDefault,
            layersToProcess: this.m_layersToProcess,
            layersToIgnore: this.m_layersToIgnore,
            pointsToProcess: this.m_pointsToProcess,
            pointsToIgnore: this.m_ignoredPoints,
            linesToProcess: this.m_linesToProcess,
            linesToIgnore: this.m_linesToIgnore,
            polygonsToProcess: this.m_polygonsToProcess,
            polygonsToIgnore: this.m_polygonsToIgnore
        };
    }
    addItem(items, layer, geomType, featureClass, matchLayer, matchClass, minLevel, maxLevel) {
        if (minLevel === undefined || isNaN(minLevel)) {
            minLevel = 0;
        }
        if (maxLevel === undefined || isNaN(maxLevel)) {
            maxLevel = Infinity;
        }
        const item = {
            layerName: {
                value: layer,
                match: matchLayer === undefined ? OmvDecoderDefs_1.OmvFilterString.StringMatch.Match : matchLayer
            },
            geometryTypes: geomType !== undefined
                ? Array.isArray(geomType)
                    ? geomType
                    : [geomType]
                : undefined,
            classes: [
                {
                    value: featureClass,
                    match: matchClass === undefined ? OmvDecoderDefs_1.OmvFilterString.StringMatch.Match : matchClass
                }
            ],
            minLevel,
            maxLevel
        };
        items.push(item);
    }
    addItems(items, layer, geomType, featureClasses, matchLayer, minLevel, maxLevel) {
        if (minLevel === undefined || isNaN(minLevel)) {
            minLevel = 0;
        }
        if (maxLevel === undefined || isNaN(maxLevel)) {
            maxLevel = Infinity;
        }
        const item = {
            layerName: {
                value: layer,
                match: matchLayer === undefined ? OmvDecoderDefs_1.OmvFilterString.StringMatch.Match : matchLayer
            },
            geometryTypes: geomType !== undefined
                ? Array.isArray(geomType)
                    ? geomType
                    : [geomType]
                : undefined,
            classes: featureClasses,
            minLevel,
            maxLevel
        };
        items.push(item);
    }
}
exports.OmvFeatureFilterDescriptionBuilder = OmvFeatureFilterDescriptionBuilder;
/**
 * `OmvFeatureFilter` implementation that uses a `OmvFeatureFilterDescription` to filter `TileData`
 * features before they are completely decoded.
 *
 * @hidden
 */
class OmvGenericFeatureFilter {
    constructor(description) {
        this.description = description;
    }
    static matchLayer(layer, layerItems, level) {
        for (const layerItem of layerItems) {
            if (level < layerItem.minLevel || level > layerItem.maxLevel) {
                continue;
            }
            if (OmvDecoderDefs_1.OmvFilterString.matchString(layer, layerItem.name)) {
                return true;
            }
        }
        return false;
    }
    wantsLayer(layer, level) {
        if (OmvGenericFeatureFilter.matchLayer(layer, this.description.layersToProcess, level)) {
            return true;
        }
        if (OmvGenericFeatureFilter.matchLayer(layer, this.description.layersToIgnore, level)) {
            return false;
        }
        return this.description.processLayersDefault;
    }
    wantsPointFeature(layer, geometryType, level) {
        return this.wantsFeature(this.description.pointsToProcess, this.description.pointsToIgnore, layer, geometryType, level, this.description.processPointsDefault);
    }
    wantsLineFeature(layer, geometryType, level) {
        return this.wantsFeature(this.description.linesToProcess, this.description.linesToIgnore, layer, geometryType, level, this.description.processLinesDefault);
    }
    wantsPolygonFeature(layer, geometryType, level) {
        return this.wantsFeature(this.description.polygonsToProcess, this.description.polygonsToIgnore, layer, geometryType, level, this.description.processPolygonsDefault);
    }
    wantsFeature(itemsToProcess, itemsToIgnore, layer, geometryType, level, defaultResult) {
        for (const item of itemsToProcess) {
            if (level < item.minLevel || level > item.maxLevel) {
                continue;
            }
            if (!OmvDecoderDefs_1.OmvFilterString.matchString(layer, item.layerName)) {
                // this rule is not for this layer
                continue;
            }
            if (item.geometryTypes !== undefined && item.geometryTypes.indexOf(geometryType) >= 0) {
                return true;
            }
        }
        for (const item of itemsToIgnore) {
            if (!OmvDecoderDefs_1.OmvFilterString.matchString(layer, item.layerName)) {
                // this rule is not for this layer
                continue;
            }
            if (item.geometryTypes !== undefined && item.geometryTypes.indexOf(geometryType) >= 0) {
                return false;
            }
        }
        return defaultResult;
    }
}
exports.OmvGenericFeatureFilter = OmvGenericFeatureFilter;
/**
 * `OmvFeatureModifier` implementation that uses a `OmvFeatureFilterDescription` to filter
 * `TileData` features before they are completely decoded.
 *
 * @hidden
 */
class OmvGenericFeatureModifier {
    constructor(description) {
        this.description = description;
    }
    static matchItems(layerName, featureClass, items) {
        for (const item of items) {
            if (!OmvDecoderDefs_1.OmvFilterString.matchString(layerName, item.layerName)) {
                continue;
            }
            const matchClasses = item.classes;
            if (featureClass !== undefined && matchClasses !== undefined) {
                for (const matchClass of matchClasses) {
                    if (OmvDecoderDefs_1.OmvFilterString.matchString(featureClass, matchClass)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    doProcessPointFeature(layer, env) {
        return this.doProcessFeature(this.description.pointsToProcess, this.description.pointsToIgnore, layer, env, this.description.processPointsDefault);
    }
    doProcessLineFeature(layer, env) {
        return this.doProcessFeature(this.description.linesToProcess, this.description.linesToIgnore, layer, env, this.description.processLinesDefault);
    }
    doProcessPolygonFeature(layer, env) {
        return this.doProcessFeature(this.description.polygonsToProcess, this.description.polygonsToIgnore, layer, env, this.description.processPolygonsDefault);
    }
    doProcessFeature(itemsToProcess, itemsToIgnore, layer, env, defaultResult) {
        if (layer === undefined || layer === undefined) {
            return defaultResult;
        }
        let featureClass;
        const featureClassThing = env.lookup("class");
        if (featureClassThing !== undefined) {
            featureClass = featureClassThing.toString();
        }
        if (featureClass &&
            OmvGenericFeatureModifier.matchItems(layer, featureClass, itemsToProcess)) {
            return true;
        }
        if (featureClass &&
            OmvGenericFeatureModifier.matchItems(layer, featureClass, itemsToIgnore)) {
            return false;
        }
        return defaultResult;
    }
}
exports.OmvGenericFeatureModifier = OmvGenericFeatureModifier;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvDecodedTileEmitter.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvDecodedTileEmitter.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
const Lines_1 = __webpack_require__(/*! @here/harp-lines/lib/Lines */ "./node_modules/@here/harp-lines/lib/Lines.js");
const TriangulateLines_1 = __webpack_require__(/*! @here/harp-lines/lib/TriangulateLines */ "./node_modules/@here/harp-lines/lib/TriangulateLines.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const earcut_1 = __webpack_require__(/*! earcut */ "./node_modules/earcut/src/earcut.js");
const THREE = __webpack_require__(/*! three */ "three");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const OmvDecoder_1 = __webpack_require__(/*! ./OmvDecoder */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoder.js");
// tslint:disable-next-line: max-line-length
const SphericalGeometrySubdivisionModifier_1 = __webpack_require__(/*! @here/harp-geometry/lib/SphericalGeometrySubdivisionModifier */ "./node_modules/@here/harp-geometry/lib/SphericalGeometrySubdivisionModifier.js");
const logger = harp_utils_1.LoggerManager.instance.create("OmvDecodedTileEmitter");
const tempTileOrigin = new THREE.Vector3();
const tempVertOrigin = new THREE.Vector3();
const tempVertNormal = new THREE.Vector3();
const tempFootDisp = new THREE.Vector3();
const tempRoofDisp = new THREE.Vector3();
/**
 * Minimum number of pixels per character. Used during estimation if there is enough screen space
 * available to render a text. Based on the estimated screen size of a tile.
 */
const MIN_AVERAGE_CHAR_WIDTH = 5;
/**
 * Estimation "fudge factor", tweaking the size estimation to
 *
 * a) allow room for zooming in to the tile, and
 *
 * b) allow for some tilting, where the edge of a tile closer to the camera has more space.
 *
 * Useful values are between 0 (allow all labels), 0.5 (allow labels at twice the default display
 * size of the tile) and 1.0 (skip labels that would normally not be displayed at default tile
 * size).
 */
const SIZE_ESTIMATION_FACTOR = 0.5;
/**
 * Used to identify an invalid (or better: unused) array index.
 */
const INVALID_ARRAY_INDEX = -1;
// for tilezen by default extrude all buildings even those without height data
class MeshBuffers {
    constructor(type) {
        this.type = type;
        this.positions = [];
        this.textureCoordinates = [];
        this.colors = [];
        this.extrusionAxis = [];
        this.indices = [];
        this.edgeIndices = [];
        this.groups = [];
        this.texts = [];
        this.pathLengths = [];
        this.stringCatalog = [];
        this.imageTextures = [];
        /**
         * Optional list of feature IDs. Currently only Number is supported, will fail if features have
         * IDs with type Long.
         */
        this.featureIds = [];
        /**
         * Optional list of feature start indices. The indices point into the index attribute.
         */
        this.featureStarts = [];
    }
    addText(text) {
        let index = this.stringCatalog.indexOf(text);
        if (index < 0) {
            index = this.stringCatalog.length;
            this.stringCatalog.push(text);
        }
        return index;
    }
}
var LineType;
(function (LineType) {
    LineType[LineType["Simple"] = 0] = "Simple";
    LineType[LineType["Complex"] = 1] = "Complex";
})(LineType = exports.LineType || (exports.LineType = {}));
class OmvDecodedTileEmitter {
    constructor(m_decodeInfo, m_styleSetEvaluator, m_gatherFeatureIds, m_skipShortLabels, m_languages) {
        this.m_decodeInfo = m_decodeInfo;
        this.m_styleSetEvaluator = m_styleSetEvaluator;
        this.m_gatherFeatureIds = m_gatherFeatureIds;
        this.m_skipShortLabels = m_skipShortLabels;
        this.m_languages = m_languages;
        // mapping from style index to mesh buffers
        this.m_meshBuffers = new Map();
        this.m_geometries = [];
        this.m_textGeometries = [];
        this.m_textPathGeometries = [];
        this.m_poiGeometries = [];
        this.m_simpleLines = [];
        this.m_solidLines = [];
        this.m_dashedLines = [];
        this.m_sources = [];
    }
    get projection() {
        return this.m_decodeInfo.targetProjection;
    }
    get center() {
        return this.m_decodeInfo.center;
    }
    /**
     * Creates the Point of Interest geometries for the given feature.
     *
     * @param layer Tile's layer to be processed.
     * @param feature The current feature containing the main geometry.
     * @param env The [[MapEnv]] containing the environment information for the map.
     * @param techniques The array of [[Technique]] that will be applied to the geometry.
     * @param featureId The id of the feature.
     */
    processPointFeature(layer, geometry, env, techniques, featureId) {
        this.processFeatureCommon(env);
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const techniqueIndex = technique._index;
            const meshBuffers = this.findOrCreateMeshBuffers(techniqueIndex, harp_datasource_protocol_1.GeometryType.Point);
            if (meshBuffers === undefined) {
                continue;
            }
            const { positions, texts, featureIds, imageTextures } = meshBuffers;
            const shouldCreateTextGeometries = harp_datasource_protocol_1.isTextTechnique(technique) || harp_datasource_protocol_1.isPoiTechnique(technique);
            let imageTexture;
            const wantsPoi = harp_datasource_protocol_1.isPoiTechnique(technique);
            if (wantsPoi) {
                const poiTechnique = technique;
                imageTexture = poiTechnique.imageTexture;
                // TODO: Move to decoder independent parts of code.
                if (typeof poiTechnique.poiName === "string") {
                    imageTexture = poiTechnique.poiName;
                }
                else if (typeof poiTechnique.poiNameField === "string") {
                    const poiNameFieldValue = env.lookup(poiTechnique.poiNameField);
                    imageTexture = poiNameFieldValue;
                }
                else if (typeof poiTechnique.imageTextureField === "string") {
                    const imageTextureValue = env.lookup(poiTechnique.imageTextureField);
                    imageTexture = imageTextureValue;
                    if (typeof poiTechnique.imageTexturePrefix === "string") {
                        imageTexture = poiTechnique.imageTexturePrefix + imageTexture;
                    }
                    if (typeof poiTechnique.imageTexturePostfix === "string") {
                        imageTexture = imageTexture + poiTechnique.imageTexturePostfix;
                    }
                }
            }
            const worldPos = new THREE.Vector3();
            for (const pos of geometry) {
                const { x, y, z } = this.m_decodeInfo.targetProjection
                    .reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos)
                    .sub(this.m_decodeInfo.center);
                if (shouldCreateTextGeometries) {
                    const textTechnique = technique;
                    const textLabel = textTechnique.label;
                    const useAbbreviation = textTechnique.useAbbreviation;
                    const useIsoCode = textTechnique.useIsoCode;
                    const name = typeof textLabel === "string"
                        ? env.lookup(textLabel)
                        : OmvDecoder_1.OmvDecoder.getFeatureName(env, useAbbreviation, useIsoCode, this.m_languages);
                    if (name && typeof name === "string") {
                        texts.push(meshBuffers.addText(name));
                    }
                    else {
                        texts.push(INVALID_ARRAY_INDEX);
                    }
                }
                // Always store the position, otherwise the following POIs will be
                // misplaced.
                positions.push(x, y, z);
                if (this.m_gatherFeatureIds) {
                    featureIds.push(featureId);
                }
                if (harp_datasource_protocol_1.isPoiTechnique) {
                    if (imageTexture === undefined) {
                        imageTextures.push(INVALID_ARRAY_INDEX);
                    }
                    else {
                        imageTextures.push(meshBuffers.addText(imageTexture));
                    }
                }
            }
        }
    }
    /**
     *
     * Creates the line geometries for the given feature.
     *
     * @param layer Tile's layer to be processed.
     * @param feature The current feature containing the main geometry.
     * @param env The [[MapEnv]] containing the environment information for the map.
     * @param techniques The array of [[Technique]] that will be applied to the geometry.
     * @param featureId The id of the feature.
     */
    processLineFeature(layer, geometry, env, techniques, featureId) {
        this.processFeatureCommon(env);
        const lines = [];
        const worldPos = new THREE.Vector3();
        const { targetProjection, center, projectedTileBounds } = this.m_decodeInfo;
        const tileWidth = projectedTileBounds.max.x - projectedTileBounds.min.x;
        const tileHeight = projectedTileBounds.max.y - projectedTileBounds.min.y;
        const tileSizeInMeters = Math.max(tileWidth, tileHeight);
        for (const polyline of geometry) {
            const line = [];
            polyline.positions.forEach(pos => {
                const { x, y, z } = targetProjection
                    .reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos)
                    .sub(center);
                line.push(x, y, z);
            });
            lines.push(line);
        }
        const wantCircle = this.m_decodeInfo.tileKey.level >= 11;
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const techniqueIndex = technique._index;
            const techniqueName = technique.name;
            if (techniqueName === "line" ||
                techniqueName === "solid-line" ||
                techniqueName === "dashed-line") {
                const lineGeometry = techniqueName === "line"
                    ? this.m_simpleLines
                    : techniqueName === "solid-line"
                        ? this.m_solidLines
                        : this.m_dashedLines;
                const lineType = techniqueName === "line" ? LineType.Simple : LineType.Complex;
                this.applyLineTechnique(lineGeometry, technique, techniqueIndex, this.m_gatherFeatureIds, lineType, featureId, lines, env);
            }
            else if (harp_datasource_protocol_1.isTextTechnique(technique) ||
                harp_datasource_protocol_1.isPoiTechnique(technique) ||
                harp_datasource_protocol_1.isLineMarkerTechnique(technique)) {
                const textTechnique = technique;
                const textLabel = textTechnique.label;
                const useAbbreviation = textTechnique.useAbbreviation;
                const useIsoCode = textTechnique.useIsoCode;
                let text = typeof textLabel === "string"
                    ? env.lookup(textLabel)
                    : OmvDecoder_1.OmvDecoder.getFeatureName(env, useAbbreviation, useIsoCode, this.m_languages);
                let validLines = [];
                if (text === undefined) {
                    continue;
                }
                text = String(text);
                if (this.m_skipShortLabels) {
                    // Filter the lines, keep only those that are long enough for labelling.
                    validLines = [];
                    const metersPerPixel = tileSizeInMeters / this.m_decodeInfo.tileSizeOnScreen;
                    const minTileSpace = MIN_AVERAGE_CHAR_WIDTH *
                        text.length *
                        metersPerPixel *
                        SIZE_ESTIMATION_FACTOR;
                    // Estimate if the line is long enough for the label, otherwise ignore it for
                    // rendering text. First, compute the bounding box in world coordinates.
                    for (const aLine of lines) {
                        let minX = Number.MAX_SAFE_INTEGER;
                        let maxX = Number.MIN_SAFE_INTEGER;
                        let minY = Number.MAX_SAFE_INTEGER;
                        let maxY = Number.MIN_SAFE_INTEGER;
                        for (let i = 0; i < aLine.length; i += 3) {
                            const x = aLine[i];
                            const y = aLine[i + 1];
                            if (x < minX) {
                                minX = x;
                            }
                            if (x > maxX) {
                                maxX = x;
                            }
                            if (y < minY) {
                                minY = y;
                            }
                            if (y > maxY) {
                                maxY = y;
                            }
                        }
                        // Check if the diagonal of the bounding box would be long enough to fit the
                        // label text:
                        if ((maxX - minX) * (maxX - minX) + (maxY - minY) * (maxY - minY) >=
                            minTileSpace * minTileSpace) {
                            validLines.push(aLine);
                        }
                    }
                }
                else {
                    validLines = lines;
                }
                if (validLines.length === 0) {
                    continue;
                }
                if (harp_datasource_protocol_1.isTextTechnique(technique)) {
                    if (text === undefined) {
                        continue;
                    }
                    for (const aLine of validLines) {
                        const pathLengthSqr = harp_utils_1.Math2D.computeSquaredLineLength(aLine);
                        this.m_textPathGeometries.push({
                            technique: techniqueIndex,
                            path: aLine,
                            pathLengthSqr,
                            text: String(text),
                            featureId
                        });
                    }
                }
                else {
                    const lineMarkerTechnique = technique;
                    let imageTexture = lineMarkerTechnique.imageTexture;
                    if (typeof lineMarkerTechnique.imageTextureField === "string") {
                        const imageTextureValue = env.lookup(lineMarkerTechnique.imageTextureField);
                        imageTexture = imageTextureValue;
                        if (typeof lineMarkerTechnique.imageTexturePrefix === "string") {
                            imageTexture = lineMarkerTechnique.imageTexturePrefix + imageTexture;
                        }
                        if (typeof lineMarkerTechnique.imageTexturePostfix === "string") {
                            imageTexture = imageTexture + lineMarkerTechnique.imageTexturePostfix;
                        }
                    }
                    for (const aLine of validLines) {
                        this.m_poiGeometries.push({
                            technique: techniqueIndex,
                            positions: {
                                name: "position",
                                type: "float",
                                buffer: new Float32Array(aLine).buffer,
                                itemCount: 3
                            },
                            texts: [0],
                            stringCatalog: [text, imageTexture],
                            imageTextures: [1],
                            featureId
                        });
                    }
                }
            }
            else if (harp_datasource_protocol_1.isExtrudedLineTechnique(technique)) {
                const meshBuffers = this.findOrCreateMeshBuffers(techniqueIndex, harp_datasource_protocol_1.GeometryType.ExtrudedLine);
                if (meshBuffers === undefined) {
                    continue;
                }
                const { positions, indices, groups, featureIds, featureStarts } = meshBuffers;
                const start = indices.length;
                const lineWidth = harp_datasource_protocol_1.getPropertyValue(technique.lineWidth, this.m_decodeInfo.tileKey.level);
                if (lineWidth === undefined) {
                    continue;
                }
                const addCircle = wantCircle && (technique.caps === undefined || technique.caps === "Circle");
                lines.forEach(aLine => {
                    TriangulateLines_1.triangulateLine(aLine, lineWidth, positions, indices, addCircle);
                    if (this.m_gatherFeatureIds && featureIds && featureStarts) {
                        featureIds.push(featureId);
                        featureStarts.push(start);
                    }
                });
                const count = indices.length - start;
                groups.push({ start, count, technique: techniqueIndex, featureId });
            }
            else {
                logger.warn(`OmvDecodedTileEmitter#processLineFeature: Invalid line technique
                     ${techniqueName} for layer: ${env.entries.$layer} `);
            }
        }
    }
    /**
     * Creates the polygons geometries for the given feature.
     *
     * @param layer Tile's layer to be processed.
     * @param feature The current feature containing the main geometry.
     * @param env The [[MapEnv]] containing the environment information for the map.
     * @param techniques The array of [[Technique]] that will be applied to the geometry.
     * @param featureId The id of the feature.
     */
    processPolygonFeature(layer, geometry, env, techniques, featureId) {
        this.processFeatureCommon(env);
        const { targetProjection, center } = this.m_decodeInfo;
        techniques.forEach(technique => {
            if (technique === undefined) {
                return;
            }
            const techniqueIndex = technique._index;
            if (techniqueIndex === undefined) {
                throw new Error("OmvDecodedTileEmitter#processPolygonFeature: " +
                    "Internal error - No technique index");
            }
            const extrudedPolygonTechnique = technique;
            const fillTechnique = technique;
            const polygons = [];
            const worldPos = new THREE.Vector3();
            const isExtruded = harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique);
            const isFilled = harp_datasource_protocol_1.isFillTechnique(technique);
            const texCoordType = harp_datasource_protocol_1.textureCoordinateType(technique);
            const isLine = harp_datasource_protocol_1.isSolidLineTechnique(technique) ||
                harp_datasource_protocol_1.isDashedLineTechnique(technique) ||
                harp_datasource_protocol_1.isLineTechnique(technique);
            const isPolygon = isExtruded || isFilled || harp_datasource_protocol_1.isStandardTechnique(technique);
            const edgeWidth = isExtruded
                ? extrudedPolygonTechnique.lineWidth || 0.0
                : isFilled
                    ? fillTechnique.lineWidth || 0.0
                    : 0.0;
            const hasEdges = edgeWidth > 0.0 || isLine;
            const isSpherical = targetProjection.type === harp_geoutils_1.ProjectionType.Spherical;
            const tempTexcoords = new THREE.Vector3();
            const computeTexCoords = texCoordType === harp_datasource_protocol_1.TextureCoordinateType.TileSpace
                ? (pos) => {
                    const { x: u, y: v } = tempTexcoords
                        .copy(pos)
                        .sub(this.m_decodeInfo.tileBounds.min)
                        .divide(this.m_decodeInfo.tileSize);
                    return { u, v: 1 - v };
                }
                : texCoordType === harp_datasource_protocol_1.TextureCoordinateType.EquirectangularSpace
                    ? (pos) => {
                        const { x: u, y: v } = harp_geoutils_1.normalizedEquirectangularProjection.reprojectPoint(harp_geoutils_1.webMercatorProjection, pos);
                        return { u, v };
                    }
                    : undefined;
            const vertexStride = computeTexCoords !== undefined ? 5 : 3;
            for (const polygon of geometry) {
                const rings = [];
                for (const outline of polygon.rings) {
                    const ringContour = [];
                    const ringPoints = isSpherical ? [] : undefined;
                    let ringEdges;
                    for (let coordIdx = 0; coordIdx < outline.positions.length; ++coordIdx) {
                        const pos = outline.positions[coordIdx];
                        targetProjection
                            .reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos)
                            .sub(center);
                        ringContour.push(worldPos.x, worldPos.y, worldPos.z);
                        if (ringPoints !== undefined) {
                            harp_geoutils_1.mercatorProjection.reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos);
                            ringPoints.push(worldPos.x, worldPos.y, worldPos.z);
                        }
                        if (hasEdges && outline.outlines !== undefined) {
                            const edge = outline.outlines[coordIdx];
                            if (ringEdges === undefined) {
                                ringEdges = [edge];
                            }
                            else {
                                ringEdges.push(edge);
                            }
                        }
                        if (computeTexCoords !== undefined) {
                            const { u, v } = computeTexCoords(pos);
                            ringContour.push(u, v);
                            if (ringPoints !== undefined) {
                                ringPoints.push(u, v);
                            }
                        }
                    }
                    rings.push(new OmvDecoder_1.Ring(vertexStride, ringContour, ringEdges, ringPoints));
                }
                polygons.push(rings);
            }
            if (isPolygon) {
                this.applyPolygonTechnique(polygons, technique, techniqueIndex, featureId, env);
            }
            else if (isLine) {
                const lineGeometry = technique.name === "line"
                    ? this.m_simpleLines
                    : technique.name === "solid-line"
                        ? this.m_solidLines
                        : this.m_dashedLines;
                const lineType = technique.name === "line" ? LineType.Simple : LineType.Complex;
                polygons.forEach(rings => {
                    rings.forEach(ring => {
                        const lines = ring.getOutlines();
                        if (lines.length === 0) {
                            return;
                        }
                        this.applyLineTechnique(lineGeometry, technique, techniqueIndex, this.m_gatherFeatureIds, lineType, featureId, lines, env);
                    });
                });
            }
        });
    }
    /**
     * Creates the geometries that belongs to the [[Tile].
     *
     * @returns The [[DecodedTile]]
     */
    getDecodedTile() {
        this.createGeometries();
        this.processSimpleLines(this.m_simpleLines);
        this.processLines(this.m_solidLines);
        this.processLines(this.m_dashedLines);
        const decodedTile = {
            techniques: this.m_styleSetEvaluator.techniques,
            geometries: this.m_geometries,
            decodeTime: undefined
        };
        if (this.m_textGeometries.length > 0) {
            decodedTile.textGeometries = this.m_textGeometries;
        }
        if (this.m_poiGeometries.length > 0) {
            decodedTile.poiGeometries = this.m_poiGeometries;
        }
        if (this.m_textPathGeometries.length > 0) {
            decodedTile.textPathGeometries = this.m_textPathGeometries;
        }
        if (this.m_sources.length !== 0) {
            decodedTile.copyrightHolderIds = this.m_sources;
        }
        return decodedTile;
    }
    applyLineTechnique(linesGeometry, technique, techniqueIndex, gatherFeatureIds, lineType = LineType.Complex, featureId, lines, env) {
        const renderOrderOffset = technique.renderOrderBiasProperty
            ? env.lookup(technique.renderOrderBiasProperty)
            : 0;
        let lineGroup;
        const lineGroupGeometries = linesGeometry.find(aLine => {
            return (aLine.technique === techniqueIndex && aLine.renderOrderOffset === renderOrderOffset);
        });
        if (lineGroupGeometries === undefined) {
            lineGroup = new Lines_1.LineGroup(undefined, lineType === LineType.Simple);
            const aLine = {
                type: lineType === LineType.Complex ? harp_datasource_protocol_1.GeometryType.SolidLine : harp_datasource_protocol_1.GeometryType.Line,
                technique: techniqueIndex,
                renderOrderOffset: renderOrderOffset !== undefined ? Number(renderOrderOffset) : undefined,
                lines: lineGroup
            };
            if (gatherFeatureIds) {
                // if this technique is transient, do not save the featureIds with the geometry
                aLine.featureIds = technique.transient === true ? undefined : [featureId];
                aLine.featureStarts = technique.transient === true ? undefined : [0];
            }
            linesGeometry.push(aLine);
        }
        else {
            lineGroup = lineGroupGeometries.lines;
            if (gatherFeatureIds &&
                lineGroupGeometries.featureIds &&
                lineGroupGeometries.featureStarts) {
                // Add ID to tag the geometry, also provide the current length of the index
                // attribute
                lineGroupGeometries.featureIds.push(featureId);
                lineGroupGeometries.featureStarts.push(lineGroup.indices.length);
            }
        }
        lines.forEach(aLine => {
            lineGroup.add(this.m_decodeInfo.center, aLine);
        });
    }
    applyPolygonTechnique(polygons, technique, techniqueIndex, featureId, env) {
        const isExtruded = harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique);
        const geometryType = isExtruded ? harp_datasource_protocol_1.GeometryType.ExtrudedPolygon : harp_datasource_protocol_1.GeometryType.Polygon;
        const meshBuffers = this.findOrCreateMeshBuffers(techniqueIndex, geometryType);
        if (meshBuffers === undefined) {
            return;
        }
        const extrudedPolygonTechnique = technique;
        const isFilled = harp_datasource_protocol_1.isFillTechnique(technique);
        const texCoordType = harp_datasource_protocol_1.textureCoordinateType(technique);
        // Get the height values for the footprint and extrusion.
        const currentHeight = env.lookup("height");
        const currentMinHeight = env.lookup("min_height");
        const defaultHeight = extrudedPolygonTechnique.defaultHeight;
        const constantHeight = extrudedPolygonTechnique.constantHeight;
        const minHeight = currentMinHeight !== undefined && !isFilled ? currentMinHeight : 0;
        const height = currentHeight !== undefined
            ? currentHeight
            : defaultHeight !== undefined
                ? defaultHeight
                : 0;
        this.m_decodeInfo.tileBounds.getCenter(tempTileOrigin);
        const { positions, textureCoordinates, colors, extrusionAxis, indices, edgeIndices, groups } = meshBuffers;
        const stride = texCoordType !== undefined ? 5 : 3;
        const isSpherical = this.m_decodeInfo.targetProjection.type === harp_geoutils_1.ProjectionType.Spherical;
        for (const rings of polygons) {
            const start = indices.length;
            const basePosition = positions.length;
            for (let ringIndex = 0; ringIndex < rings.length;) {
                const baseVertex = positions.length / 3;
                // Get the contour vertices for this ring.
                const ring = rings[ringIndex++];
                const vertices = [...ring.contour];
                const points = [...ring.points];
                if (isExtruded) {
                    index_decoder_1.addExtrudedWalls(indices, baseVertex, stride, ring.contour, ring.contourOutlines, extrudedPolygonTechnique.boundaryWalls);
                }
                if (ring.contourOutlines !== undefined) {
                    index_decoder_1.addPolygonEdges(edgeIndices, baseVertex, stride, ring.contour, ring.contourOutlines, isExtruded, extrudedPolygonTechnique.footprint, extrudedPolygonTechnique.maxSlope);
                }
                // Repeat the process for all the inner rings (holes).
                const outerRingWinding = ring.winding;
                const holes = [];
                // Iterate over the inner rings. The inner rings have the oppositve winding
                // of the outer rings.
                while (ringIndex < rings.length && rings[ringIndex].winding !== outerRingWinding) {
                    const current = rings[ringIndex++];
                    holes.push(vertices.length / stride);
                    // As we are predicting the indexes before the vertices are added,
                    // the vertex offset has to be taken into account
                    const vertexOffset = (vertices.length / stride) * 2;
                    vertices.push(...current.contour);
                    points.push(...current.points);
                    if (isExtruded) {
                        index_decoder_1.addExtrudedWalls(indices, vertexOffset + baseVertex, stride, current.contour, current.contourOutlines, extrudedPolygonTechnique.boundaryWalls);
                    }
                    if (current.contourOutlines !== undefined) {
                        index_decoder_1.addPolygonEdges(edgeIndices, (isExtruded ? vertexOffset : vertexOffset / 2) + baseVertex, stride, current.contour, current.contourOutlines, isExtruded, extrudedPolygonTechnique.footprint, extrudedPolygonTechnique.maxSlope);
                    }
                }
                try {
                    // Triangulate the footprint polyline.
                    // For sphere projection the stride of Ring.contour and Ring.points can be
                    // different b/c Ring.contour contains texture coordinates where Ring.points
                    // does not.
                    const triangles = earcut_1.default(points, holes, stride);
                    if (isSpherical) {
                        const geom = new THREE.Geometry();
                        for (let i = 0; i < vertices.length; i += stride) {
                            geom.vertices.push(new THREE.Vector3(points[i], points[i + 1], points[i + 2]));
                        }
                        for (let i = 0; i < triangles.length; i += 3) {
                            geom.faces.push(new THREE.Face3(triangles[i], triangles[i + 1], triangles[i + 2]));
                            if (texCoordType !== undefined) {
                                const i0 = triangles[i] * stride;
                                const i1 = triangles[i + 1] * stride;
                                const i2 = triangles[i + 2] * stride;
                                geom.faceVertexUvs[0][i / 3] = [
                                    new THREE.Vector2(points[i0 + 3], points[i0 + 4]),
                                    new THREE.Vector2(points[i1 + 3], points[i1 + 4]),
                                    new THREE.Vector2(points[i2 + 3], points[i2 + 4])
                                ];
                            }
                        }
                        // FIXME(HARP-5700): Subdivison modifer ignores texture coordinates.
                        const modifier = new SphericalGeometrySubdivisionModifier_1.SphericalGeometrySubdivisionModifier(THREE.Math.degToRad(10), harp_geoutils_1.mercatorProjection);
                        modifier.modify(geom);
                        vertices.length = 0;
                        triangles.length = 0;
                        geom.vertices.forEach(p => {
                            this.projection.reprojectPoint(harp_geoutils_1.mercatorProjection, p, p);
                            p.sub(this.m_decodeInfo.center);
                            vertices.push(p.x, p.y, p.z);
                            if (texCoordType !== undefined) {
                                vertices.push(0, 0);
                            }
                        });
                        geom.faces.forEach((face, i) => {
                            const { a, b, c } = face;
                            triangles.push(a, b, c);
                            if (texCoordType !== undefined) {
                                const vertexUvs = geom.faceVertexUvs[0][i];
                                if (vertexUvs !== undefined) {
                                    vertexUvs[0].toArray(vertices, a * stride + 3);
                                    vertexUvs[1].toArray(vertices, b * stride + 3);
                                    vertexUvs[2].toArray(vertices, c * stride + 3);
                                }
                            }
                        });
                    }
                    // Add the footprint/roof vertices to the position buffer.
                    tempVertNormal.set(0, 0, 1);
                    for (let i = 0; i < vertices.length; i += stride) {
                        let scaleFactor = 1.0;
                        if (isExtruded && constantHeight !== true) {
                            tempVertOrigin.set(tempTileOrigin.x + vertices[i], tempTileOrigin.y + vertices[i + 1], tempTileOrigin.z + vertices[i + 2]);
                            scaleFactor = this.m_decodeInfo.targetProjection.getScaleFactor(tempVertOrigin);
                        }
                        if (isSpherical) {
                            tempVertNormal
                                .set(vertices[i], vertices[i + 1], vertices[i + 2])
                                .add(this.center)
                                .normalize();
                        }
                        tempFootDisp.copy(tempVertNormal).multiplyScalar(minHeight * scaleFactor);
                        tempRoofDisp.copy(tempVertNormal).multiplyScalar(height * scaleFactor);
                        positions.push(vertices[i] + tempFootDisp.x, vertices[i + 1] + tempFootDisp.y, vertices[i + 2] + tempFootDisp.z);
                        if (texCoordType !== undefined) {
                            textureCoordinates.push(vertices[i + 3], vertices[i + 4]);
                        }
                        if (isExtruded) {
                            positions.push(vertices[i] + tempRoofDisp.x, vertices[i + 1] + tempRoofDisp.y, vertices[i + 2] + tempRoofDisp.z);
                            extrusionAxis.push(0, 0, 0, tempRoofDisp.x - tempFootDisp.x, tempRoofDisp.y - tempFootDisp.y, tempRoofDisp.z - tempFootDisp.z);
                            if (texCoordType !== undefined) {
                                textureCoordinates.push(vertices[i + 3], vertices[i + 4]);
                            }
                        }
                    }
                    // Add the footprint/roof indices to the index buffer.
                    for (let i = 0; i < triangles.length; i += 3) {
                        if (isExtruded) {
                            // When extruding we duplicate the vertices, so that all even vertices
                            // belong to the bottom and all odd vertices belong to the top.
                            const i0 = baseVertex + triangles[i + 0] * 2 + 1;
                            const i1 = baseVertex + triangles[i + 1] * 2 + 1;
                            const i2 = baseVertex + triangles[i + 2] * 2 + 1;
                            indices.push(i0, i1, i2);
                        }
                        else {
                            const i0 = baseVertex + triangles[i + 0];
                            const i1 = baseVertex + triangles[i + 1];
                            const i2 = baseVertex + triangles[i + 2];
                            indices.push(i0, i1, i2);
                        }
                    }
                }
                catch (err) {
                    logger.error(`cannot triangulate geometry`, err);
                }
            }
            if (harp_datasource_protocol_1.isExtrudedPolygonTechnique(technique) && technique.vertexColors === true) {
                const positionCount = (positions.length - basePosition) / 3;
                const color = new THREE.Color(harp_datasource_protocol_1.isInterpolatedPropertyDefinition(technique.color)
                    ? harp_datasource_protocol_1.getPropertyValue(technique.color, this.m_decodeInfo.tileKey.level)
                    : this.isColorStringValid(technique.color)
                        ? technique.color
                        : this.isColorStringValid(env.lookup("color"))
                            ? env.lookup("color")
                            : harp_datasource_protocol_1.getPropertyValue(technique.defaultColor, this.m_decodeInfo.tileKey.level));
                for (let i = 0; i < positionCount; ++i) {
                    colors.push(color.r, color.g, color.b);
                }
            }
            const count = indices.length - start;
            if (count > 0) {
                groups.push({
                    start,
                    count,
                    technique: techniqueIndex,
                    featureId
                });
            }
        }
    }
    createGeometries() {
        this.m_meshBuffers.forEach((meshBuffers, techniqueIdx) => {
            if (meshBuffers.positions.length === 0) {
                return;
            } // nothing to do
            if (!this.m_styleSetEvaluator.techniques ||
                this.m_styleSetEvaluator.techniques.length <= techniqueIdx) {
                throw new Error("Invalid technique index");
            }
            const technique = this.m_styleSetEvaluator.techniques[techniqueIdx];
            if (technique === undefined) {
                return;
            }
            const positionElements = new Float32Array(meshBuffers.positions);
            if (meshBuffers.texts.length > 0 && harp_datasource_protocol_1.isTextTechnique(technique)) {
                this.m_textGeometries.push({
                    positions: {
                        name: "position",
                        type: "float",
                        buffer: positionElements.buffer,
                        itemCount: 3
                    },
                    texts: meshBuffers.texts,
                    technique: techniqueIdx,
                    featureId: meshBuffers.featureIds ? meshBuffers.featureIds[0] : undefined,
                    stringCatalog: meshBuffers.stringCatalog
                });
                return;
            }
            if (meshBuffers.texts.length > 0 && harp_datasource_protocol_1.isPoiTechnique(technique)) {
                this.m_poiGeometries.push({
                    positions: {
                        name: "position",
                        type: "float",
                        buffer: positionElements.buffer,
                        itemCount: 3
                    },
                    texts: meshBuffers.texts,
                    technique: techniqueIdx,
                    featureId: meshBuffers.featureIds ? meshBuffers.featureIds[0] : undefined,
                    stringCatalog: meshBuffers.stringCatalog,
                    imageTextures: meshBuffers.imageTextures
                });
                return;
            }
            if (meshBuffers.groups.length === 0) {
                // create a default group containing all the vertices in the position attribute.
                meshBuffers.groups.push({
                    start: 0,
                    count: positionElements.length / 3,
                    technique: techniqueIdx
                });
            }
            const geometry = {
                type: meshBuffers.type,
                vertexAttributes: [
                    {
                        name: "position",
                        buffer: positionElements.buffer,
                        itemCount: 3,
                        type: "float"
                    }
                ],
                groups: meshBuffers.groups
            };
            if (meshBuffers.colors.length > 0) {
                const colors = new Float32Array(meshBuffers.colors);
                harp_utils_1.assert(colors.length === positionElements.length, "length of colors buffer is different than the length of the " +
                    "position buffer");
                geometry.vertexAttributes.push({
                    name: "color",
                    buffer: colors.buffer,
                    itemCount: 3,
                    type: "float"
                });
            }
            if (meshBuffers.textureCoordinates.length > 0) {
                const positionCount = meshBuffers.positions.length / 3;
                const texCoordCount = meshBuffers.textureCoordinates.length / 2;
                harp_utils_1.assert(texCoordCount === positionCount, "length of textureCoordinates buffer is different than the length of the" +
                    "position buffer");
                const textureCoordinates = new Float32Array(meshBuffers.textureCoordinates);
                geometry.vertexAttributes.push({
                    name: "uv",
                    buffer: textureCoordinates.buffer,
                    itemCount: 2,
                    type: "float"
                });
            }
            if (meshBuffers.extrusionAxis.length > 0) {
                const extrusionAxis = new Float32Array(meshBuffers.extrusionAxis);
                harp_utils_1.assert(extrusionAxis.length === positionElements.length, "length of extrusionAxis buffer is different than the length of the " +
                    "position buffer");
                geometry.vertexAttributes.push({
                    name: "extrusionAxis",
                    buffer: extrusionAxis.buffer,
                    itemCount: 3,
                    type: "float"
                });
            }
            if (meshBuffers.indices.length > 0) {
                // TODO: use uint16 for buffers when possible
                geometry.index = {
                    name: "index",
                    buffer: new Uint32Array(meshBuffers.indices).buffer,
                    itemCount: 1,
                    type: "uint32"
                };
            }
            if (meshBuffers.edgeIndices.length > 0) {
                // TODO: use uint16 for buffers when possible. Issue HARP-3987
                geometry.edgeIndex = {
                    name: "edgeIndex",
                    buffer: new Uint32Array(meshBuffers.edgeIndices)
                        .buffer,
                    itemCount: 1,
                    type: "uint32"
                };
            }
            if (this.m_gatherFeatureIds) {
                geometry.featureIds = meshBuffers.featureIds;
                geometry.featureStarts = meshBuffers.featureStarts;
            }
            this.m_geometries.push(geometry);
        });
    }
    processLines(linesArray) {
        linesArray.forEach(linesGeometry => {
            const { vertices, indices } = linesGeometry.lines;
            const renderOrderOffset = linesGeometry.renderOrderOffset;
            const technique = linesGeometry.technique;
            const buffer = new Float32Array(vertices).buffer;
            const index = new Uint32Array(indices).buffer;
            const attr = {
                type: "float",
                stride: linesGeometry.lines.stride,
                buffer,
                attributes: linesGeometry.lines.vertexAttributes
            };
            const geometry = {
                type: harp_datasource_protocol_1.GeometryType.SolidLine,
                index: {
                    buffer: index,
                    itemCount: 1,
                    type: "uint32",
                    name: "index"
                },
                interleavedVertexAttributes: [attr],
                groups: [{ start: 0, count: indices.length, technique, renderOrderOffset }],
                vertexAttributes: []
            };
            if (this.m_gatherFeatureIds) {
                geometry.featureIds = linesGeometry.featureIds;
                geometry.featureStarts = linesGeometry.featureStarts;
            }
            this.m_geometries.push(geometry);
        });
    }
    processSimpleLines(linesArray) {
        linesArray.forEach(linesGeometry => {
            const { vertices, indices } = linesGeometry.lines;
            const renderOrderOffset = linesGeometry.renderOrderOffset;
            const technique = linesGeometry.technique;
            const buffer = new Float32Array(vertices).buffer;
            const index = new Uint32Array(indices).buffer;
            const attr = {
                buffer,
                itemCount: 3,
                type: "float",
                name: "position"
            };
            const geometry = {
                type: harp_datasource_protocol_1.GeometryType.Line,
                index: {
                    buffer: index,
                    itemCount: 1,
                    type: "uint32",
                    name: "index"
                },
                vertexAttributes: [attr],
                groups: [{ start: 0, count: indices.length, technique, renderOrderOffset }]
            };
            if (this.m_gatherFeatureIds) {
                geometry.featureIds = linesGeometry.featureIds;
                geometry.featureStarts = linesGeometry.featureStarts;
            }
            this.m_geometries.push(geometry);
        });
    }
    findOrCreateMeshBuffers(index, type) {
        let buffers = this.m_meshBuffers.get(index);
        if (buffers !== undefined) {
            if (buffers.type !== type) {
                logger.error(`MeshBuffer has been created with wrong type "${harp_datasource_protocol_1.GeometryType[type]}"
                instead of "${harp_datasource_protocol_1.GeometryType[buffers.type]}"`);
                return undefined;
            }
            return buffers;
        }
        buffers = new MeshBuffers(type);
        this.m_meshBuffers.set(index, buffers);
        return buffers;
    }
    processFeatureCommon(env) {
        const source = env.lookup("source");
        if (typeof source === "string" && source !== "") {
            if (!this.m_sources.includes(source)) {
                this.m_sources.push(source);
            }
        }
    }
    isColorStringValid(color) {
        return typeof color === "string" && color.length > 0;
    }
}
exports.OmvDecodedTileEmitter = OmvDecodedTileEmitter;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoder.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvDecoder.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const THREE = __webpack_require__(/*! three */ "three");
const index_worker_1 = __webpack_require__(/*! @here/harp-mapview-decoder/index-worker */ "./node_modules/@here/harp-mapview-decoder/index-worker.js");
const OmvData_1 = __webpack_require__(/*! ./OmvData */ "./node_modules/@here/harp-omv-datasource/lib/OmvData.js");
const OmvDataFilter_1 = __webpack_require__(/*! ./OmvDataFilter */ "./node_modules/@here/harp-omv-datasource/lib/OmvDataFilter.js");
const OmvDecodedTileEmitter_1 = __webpack_require__(/*! ./OmvDecodedTileEmitter */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecodedTileEmitter.js");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js");
const OmvTileInfoEmitter_1 = __webpack_require__(/*! ./OmvTileInfoEmitter */ "./node_modules/@here/harp-omv-datasource/lib/OmvTileInfoEmitter.js");
const OmvTomTomFeatureModifier_1 = __webpack_require__(/*! ./OmvTomTomFeatureModifier */ "./node_modules/@here/harp-omv-datasource/lib/OmvTomTomFeatureModifier.js");
const VTJsonDataAdapter_1 = __webpack_require__(/*! ./VTJsonDataAdapter */ "./node_modules/@here/harp-omv-datasource/lib/VTJsonDataAdapter.js");
const logger = harp_utils_1.LoggerManager.instance.create("OmvDecoder", { enabled: false });
class Ring {
    /**
     * Constructs a new [[Ring]].
     *
     * @param vertexStride The stride of this elements stored in 'contour' and 'points'.
     * @param contour The [[Array]] containing the projected world coordinates.
     * @param points An optional [[Array]] containing points projected
     *               using the equirectangular projection.
     * @param contourOutlines An optional [[Array]] of outline attributes.
     */
    constructor(vertexStride, contour, contourOutlines, points = contour) {
        this.vertexStride = vertexStride;
        this.contour = contour;
        this.contourOutlines = contourOutlines;
        this.points = points;
        this.winding = this.area() < 0;
    }
    area() {
        const points = this.points;
        const stride = this.vertexStride;
        const n = points.length / stride;
        let area = 0.0;
        for (let p = n - 1, q = 0; q < n; p = q++) {
            area +=
                points[p * stride] * points[q * stride + 1] -
                    points[q * stride] * points[p * stride + 1];
        }
        return area / 2;
    }
    /*
     * Extracts outlines from the ring contour data
     */
    getOutlines() {
        const stride = this.vertexStride;
        const { contourOutlines, contour } = this;
        if (contourOutlines === undefined) {
            const outLine = contour.slice();
            outLine.push(...outLine.slice(0, stride));
            return [outLine];
        }
        const { length } = contourOutlines;
        const lines = [];
        let line = [];
        for (let i = 0; i < length; i++) {
            const isOutline = contourOutlines[i];
            let index = i * stride;
            if (!isOutline && line.length !== 0) {
                lines.push(line);
                line = [];
            }
            else if (isOutline && line.length === 0) {
                line.push(...contour.slice(index, index + stride));
                index = (index + stride) % (length * stride);
                line.push(...contour.slice(index, index + stride));
            }
            else if (isOutline) {
                index = (index + stride) % (length * stride);
                line.push(...contour.slice(index, index + stride));
            }
        }
        if (line.length) {
            lines.push(line);
        }
        return lines;
    }
}
exports.Ring = Ring;
class OmvDecoder {
    constructor(m_projection, m_styleSetEvaluator, m_showMissingTechniques, dataFilter, m_featureModifier, m_gatherFeatureIds = true, m_createTileInfo = false, m_gatherRoadSegments = false, m_skipShortLabels = true, m_storageLevelOffset = 0, m_languages) {
        this.m_projection = m_projection;
        this.m_styleSetEvaluator = m_styleSetEvaluator;
        this.m_showMissingTechniques = m_showMissingTechniques;
        this.m_featureModifier = m_featureModifier;
        this.m_gatherFeatureIds = m_gatherFeatureIds;
        this.m_createTileInfo = m_createTileInfo;
        this.m_gatherRoadSegments = m_gatherRoadSegments;
        this.m_skipShortLabels = m_skipShortLabels;
        this.m_storageLevelOffset = m_storageLevelOffset;
        this.m_languages = m_languages;
        this.m_dataAdapters = [];
        // Register the default adapters.
        this.m_dataAdapters.push(new OmvData_1.OmvProtobufDataAdapter(this, dataFilter, logger));
        this.m_dataAdapters.push(new VTJsonDataAdapter_1.VTJsonDataAdapter(this, dataFilter, logger));
    }
    /**
     * Given a tile and a protobuffer, it returns a decoded tile and it creates the geometries that
     * belong to it.
     *
     * @param tileKey The tile to be decoded.
     * @param data The protobuffer to decode from.
     * @returns A [[DecodedTile]]
     */
    getDecodedTile(tileKey, data) {
        const tileSizeOnScreen = this.estimatedTileSizeOnScreen();
        const decodeInfo = new OmvDecoder.DecodeInfo(this.m_projection, tileKey, tileSizeOnScreen);
        this.m_decodedTileEmitter = new OmvDecodedTileEmitter_1.OmvDecodedTileEmitter(decodeInfo, this.m_styleSetEvaluator, this.m_gatherFeatureIds, this.m_skipShortLabels, this.m_languages);
        if (this.m_createTileInfo) {
            const storeExtendedTags = true;
            this.m_infoTileEmitter = new OmvTileInfoEmitter_1.OmvTileInfoEmitter(decodeInfo, this.m_styleSetEvaluator, storeExtendedTags, this.m_gatherRoadSegments);
        }
        for (const adapter of this.m_dataAdapters.values()) {
            if (adapter.canProcess(data)) {
                adapter.process(data, tileKey, decodeInfo.geoBox);
                break;
            }
        }
        const decodedTile = this.m_decodedTileEmitter.getDecodedTile();
        if (this.m_createTileInfo) {
            decodedTile.tileInfo = this.m_infoTileEmitter.getTileInfo();
        }
        return decodedTile;
    }
    getTileInfo(tileKey, data) {
        const tileSizeOnScreen = this.estimatedTileSizeOnScreen();
        const decodeInfo = new OmvDecoder.DecodeInfo(this.m_projection, tileKey, tileSizeOnScreen);
        const storeExtendedTags = true;
        this.m_infoTileEmitter = new OmvTileInfoEmitter_1.OmvTileInfoEmitter(decodeInfo, this.m_styleSetEvaluator, storeExtendedTags, this.m_gatherRoadSegments);
        for (const adapter of this.m_dataAdapters.values()) {
            if (adapter.canProcess(data)) {
                adapter.process(data, tileKey, decodeInfo.geoBox);
                break;
            }
        }
        return this.m_infoTileEmitter.getTileInfo();
    }
    processPointFeature(layer, geometry, env, storageLevel) {
        if (this.m_featureModifier !== undefined &&
            !this.m_featureModifier.doProcessPointFeature(layer, env, storageLevel)) {
            return;
        }
        const techniques = this.m_styleSetEvaluator.getMatchingTechniques(env);
        if (techniques.length === 0) {
            if (this.m_showMissingTechniques) {
                logger.log("OmvDecoder#processPointFeature: no techniques for object:", JSON.stringify(env.unmap()));
            }
            return;
        }
        const featureId = env.lookup("$id");
        if (this.m_decodedTileEmitter) {
            this.m_decodedTileEmitter.processPointFeature(layer, geometry, env, techniques, featureId);
        }
        if (this.m_infoTileEmitter) {
            this.m_infoTileEmitter.processPointFeature(layer, geometry, env, techniques, featureId);
        }
    }
    processLineFeature(layer, geometry, env, storageLevel) {
        if (this.m_featureModifier !== undefined &&
            !this.m_featureModifier.doProcessLineFeature(layer, env, storageLevel)) {
            return;
        }
        const techniques = this.m_styleSetEvaluator.getMatchingTechniques(env);
        if (techniques.length === 0) {
            if (this.m_showMissingTechniques) {
                logger.log("OmvDecoder#processLineFeature: no techniques for object:", JSON.stringify(env.unmap()));
            }
            return;
        }
        const featureId = env.lookup("$id");
        if (this.m_decodedTileEmitter) {
            this.m_decodedTileEmitter.processLineFeature(layer, geometry, env, techniques, featureId);
        }
        if (this.m_infoTileEmitter) {
            this.m_infoTileEmitter.processLineFeature(layer, geometry, env, techniques, featureId);
        }
    }
    processPolygonFeature(layer, geometry, env, storageLevel) {
        if (this.m_featureModifier !== undefined &&
            !this.m_featureModifier.doProcessPolygonFeature(layer, env, storageLevel)) {
            return;
        }
        const techniques = this.m_styleSetEvaluator.getMatchingTechniques(env);
        if (techniques.length === 0) {
            if (this.m_showMissingTechniques) {
                logger.log("OmvDecoder#processPolygonFeature: no techniques for object:", JSON.stringify(env.unmap()));
            }
            return;
        }
        const featureId = env.lookup("$id");
        if (this.m_decodedTileEmitter) {
            this.m_decodedTileEmitter.processPolygonFeature(layer, geometry, env, techniques, featureId);
        }
        if (this.m_infoTileEmitter) {
            this.m_infoTileEmitter.processPolygonFeature(layer, geometry, env, techniques, featureId);
        }
    }
    /**
     * Estimate the number of screen pixels a tile will cover. The actual number of pixels will be
     * influenced by tilt and rotation, so estimated the number here should be an upper bound.
     *
     * @returns {number} Estimated number of screen pixels.
     */
    estimatedTileSizeOnScreen() {
        const tileSizeOnScreen = 256 * Math.pow(2, -this.m_storageLevelOffset);
        return tileSizeOnScreen;
    }
}
exports.OmvDecoder = OmvDecoder;
(function (OmvDecoder) {
    class DecodeInfo {
        /**
         * Constructs a new [[DecodeInfo]].
         *
         * @param targetProjection The [[Projection]]
         * @param tileKey The [[TileKey]] of the Tile to decode.
         * @param tileSizeOnScreen The estimated size of the Tile in pixels.
         */
        constructor(targetProjection, tileKey, tileSizeOnScreen) {
            this.targetProjection = targetProjection;
            this.tileKey = tileKey;
            this.tileSizeOnScreen = tileSizeOnScreen;
            /**
             * The tile bounds in the OMV tile space [[webMercatorTilingScheme]].
             */
            this.tileBounds = new THREE.Box3();
            /**
             * The tile size in the OMV tile space [[webMercatorTilingScheme]].
             */
            this.tileSize = new THREE.Vector3();
            /**
             * The center of the Tile in the target [[Projection]] space.
             * Geometries generated by decoding the OMV tile must be relative
             * to this position.
             */
            this.center = new THREE.Vector3();
            /**
             * The tile bounds in the world space of the
             * target projection [[DecodeInfo.targetProjection]].
             *
             * @deprecated
             */
            this.projectedTileBounds = new THREE.Box3();
            this.geoBox = this.tilingScheme.getGeoBox(tileKey);
            this.targetProjection.projectBox(this.geoBox, this.projectedTileBounds);
            this.projectedTileBounds.getCenter(this.center);
            this.tilingScheme.getWorldBox(tileKey, this.tileBounds);
            this.tileBounds.getSize(this.tileSize);
        }
        /**
         * The [[TilingScheme]] of the OMV data, currenly it is defined
         * to be [[webMercatorTilingScheme]].
         */
        get tilingScheme() {
            return harp_geoutils_1.webMercatorTilingScheme;
        }
        /**
         * The [[Projection]] of OMV tiled data, currenly it is defined
         * to be [[webMercatorProjection]].
         */
        get sourceProjection() {
            return this.tilingScheme.projection;
        }
    }
    OmvDecoder.DecodeInfo = DecodeInfo;
    function getFeatureName(env, useAbbreviation, useIsoCode, languages) {
        let name;
        if (useAbbreviation) {
            const abbreviation = env.lookup(`name:short`);
            if (typeof abbreviation === "string" && abbreviation.length > 0) {
                return abbreviation;
            }
        }
        if (useIsoCode) {
            const isoCode = env.lookup(`iso_code`);
            if (typeof isoCode === "string" && isoCode.length > 0) {
                return isoCode;
            }
        }
        if (languages !== undefined) {
            for (const language of languages) {
                name = env.lookup(`name:${language}`) || env.lookup(`name_${language}`);
                if (typeof name === "string" && name.length > 0) {
                    return name;
                }
            }
        }
        name = env.lookup("name");
        if (typeof name === "string") {
            return name;
        }
        return undefined;
    }
    OmvDecoder.getFeatureName = getFeatureName;
})(OmvDecoder = exports.OmvDecoder || (exports.OmvDecoder = {}));
class OmvTileDecoder extends index_worker_1.ThemedTileDecoder {
    constructor() {
        super(...arguments);
        this.m_showMissingTechniques = false;
        this.m_gatherFeatureIds = true;
        this.m_createTileInfo = false;
        this.m_gatherRoadSegments = false;
        this.m_skipShortLabels = true;
    }
    connect() {
        return Promise.resolve();
    }
    decodeThemedTile(data, tileKey, styleSetEvaluator, projection) {
        const startTime = harp_utils_1.PerformanceTimer.now();
        const decoder = new OmvDecoder(projection, styleSetEvaluator, this.m_showMissingTechniques, this.m_featureFilter, this.m_featureModifier, this.m_gatherFeatureIds, this.m_createTileInfo, this.m_gatherRoadSegments, this.m_skipShortLabels, this.m_storageLevelOffset, this.languages);
        const decodedTile = decoder.getDecodedTile(tileKey, data);
        decodedTile.decodeTime = harp_utils_1.PerformanceTimer.now() - startTime;
        return Promise.resolve(decodedTile);
    }
    getTileInfo(data, tileKey, projection) {
        const startTime = harp_utils_1.PerformanceTimer.now();
        const styleSetEvaluator = this.m_styleSetEvaluator;
        if (styleSetEvaluator === undefined) {
            return Promise.reject(new Error("no theme loaded"));
        }
        const decoder = new OmvDecoder(projection, styleSetEvaluator, this.m_showMissingTechniques, this.m_featureFilter, this.m_featureModifier, this.m_gatherFeatureIds, this.m_createTileInfo, this.m_gatherRoadSegments, this.m_skipShortLabels, this.m_storageLevelOffset, this.languages);
        const tileInfo = decoder.getTileInfo(tileKey, data);
        tileInfo.setupTime = harp_utils_1.PerformanceTimer.now() - startTime;
        return Promise.resolve(tileInfo);
    }
    configure(styleSet, languages, options) {
        super.configure(styleSet, languages, options);
        if (options) {
            const omvOptions = options;
            if (omvOptions.showMissingTechniques !== undefined) {
                this.m_showMissingTechniques = omvOptions.showMissingTechniques === true;
            }
            if (omvOptions && omvOptions.filterDescription !== undefined) {
                if (omvOptions.filterDescription !== null) {
                    // create new filter/modifier from description
                    this.m_featureFilter = new OmvDataFilter_1.OmvGenericFeatureFilter(omvOptions.filterDescription);
                    this.m_featureModifier = this.createFeatureModifier(omvOptions.filterDescription, omvOptions.featureModifierId);
                }
                else {
                    // null is the signal to clear the filter/modifier
                    this.m_featureFilter = undefined;
                    this.m_featureModifier = undefined;
                }
            }
            if (omvOptions.gatherFeatureIds !== undefined) {
                this.m_gatherFeatureIds = omvOptions.gatherFeatureIds === true;
            }
            if (omvOptions.createTileInfo !== undefined) {
                this.m_createTileInfo = omvOptions.createTileInfo === true;
            }
            if (omvOptions.gatherRoadSegments !== undefined) {
                this.m_gatherRoadSegments = omvOptions.gatherRoadSegments === true;
            }
            if (omvOptions.skipShortLabels !== undefined) {
                this.m_skipShortLabels = omvOptions.skipShortLabels;
            }
        }
        if (languages !== undefined) {
            this.languages = languages;
        }
    }
    createFeatureModifier(filterDescription, featureModifierId) {
        if (featureModifierId === OmvDecoderDefs_1.FeatureModifierId.tomTom) {
            return new OmvTomTomFeatureModifier_1.OmvTomTomFeatureModifier(filterDescription);
        }
        else {
            return new OmvDataFilter_1.OmvGenericFeatureModifier(filterDescription);
        }
    }
}
exports.OmvTileDecoder = OmvTileDecoder;
/**
 * OMV tile decoder service.
 */
class OmvTileDecoderService {
    /**
     * Register[[OmvTileDecoder]] service class in [[WorkerServiceManager]].
     *
     * Has to be called during initialization of decoder bundle.
     */
    static start() {
        index_worker_1.WorkerServiceManager.getInstance().register({
            serviceType: OmvDecoderDefs_1.OMV_TILE_DECODER_SERVICE_TYPE,
            factory: (serviceId) => index_worker_1.TileDecoderService.start(serviceId, new OmvTileDecoder())
        });
    }
}
exports.OmvTileDecoderService = OmvTileDecoderService;
/**
 * Starts an OMV decoder service.
 *
 * @deprecated Please use [[OmvTileDecoderService.start]].
 */
class OmvWorkerClient {
    // TODO(HARP-3651): remove this class when clients are ready
    constructor() {
        logger.warn("OmvWorkerClient class is deprecated, please use OmvTileDecoderService.start");
        OmvTileDecoderService.start();
    }
}
exports.default = OmvWorkerClient;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Feature Modifier ids to choose which OmvFeatureModifer should be used in OmvDecoder.
 */
var FeatureModifierId;
(function (FeatureModifierId) {
    /**
     * Identifier to use the OmvTomTomFeatureModifier in the OmvDecoder.
     */
    FeatureModifierId[FeatureModifierId["tomTom"] = 0] = "tomTom";
})(FeatureModifierId = exports.FeatureModifierId || (exports.FeatureModifierId = {}));
/**
 * Adding the match condition type and the matching function to the namespace of `OmvFilterString`.
 */
var OmvFilterString;
(function (OmvFilterString) {
    /**
     * Match condition.
     */
    let StringMatch;
    (function (StringMatch) {
        /** Matches any. */
        StringMatch[StringMatch["Any"] = 0] = "Any";
        /** Exact match. */
        StringMatch[StringMatch["Match"] = 1] = "Match";
        /** Matches if a test string starts with a filter string. */
        StringMatch[StringMatch["StartsWith"] = 2] = "StartsWith";
        /** Matches if a test string contains a filter string. */
        StringMatch[StringMatch["Contains"] = 3] = "Contains";
        /** Matches if a test string ends with a filter string. */
        StringMatch[StringMatch["EndsWith"] = 4] = "EndsWith";
    })(StringMatch = OmvFilterString.StringMatch || (OmvFilterString.StringMatch = {}));
    /**
     * Check for a string against a filter.
     *
     * @param str The string to check against a filter.
     * @param filterString The filter containing the match condition.
     * @returns `true` if the match condition is satisfied.
     */
    function matchString(str, filterString) {
        switch (filterString.match) {
            case OmvFilterString.StringMatch.Any:
                return true;
            case OmvFilterString.StringMatch.Match:
                return str === filterString.value;
            case OmvFilterString.StringMatch.StartsWith:
                return filterString.value.startsWith(str);
            case OmvFilterString.StringMatch.EndsWith:
                return filterString.value.endsWith(str);
            default:
                return str.indexOf(filterString.value) >= 0;
        }
    }
    OmvFilterString.matchString = matchString;
})(OmvFilterString = exports.OmvFilterString || (exports.OmvFilterString = {}));
var OmvGeometryType;
(function (OmvGeometryType) {
    OmvGeometryType[OmvGeometryType["UNKNOWN"] = 0] = "UNKNOWN";
    OmvGeometryType[OmvGeometryType["POINT"] = 1] = "POINT";
    OmvGeometryType[OmvGeometryType["LINESTRING"] = 2] = "LINESTRING";
    OmvGeometryType[OmvGeometryType["POLYGON"] = 3] = "POLYGON";
})(OmvGeometryType = exports.OmvGeometryType || (exports.OmvGeometryType = {}));
/**
 * Default OMV tile decoder service type.
 *
 * Used for requesting decoder services using [[WorkerServiceManager]].
 */
exports.OMV_TILE_DECODER_SERVICE_TYPE = "omv-tile-decoder";
/**
 * Default OMV tiler service type.
 *
 * Used for requesting tiler services using [[WorkerServiceManager]].
 */
exports.OMV_TILER_SERVICE_TYPE = "omv-tiler";


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvTileInfoEmitter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvTileInfoEmitter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_datasource_protocol_1 = __webpack_require__(/*! @here/harp-datasource-protocol */ "./node_modules/@here/harp-datasource-protocol/index.js");
const THREE = __webpack_require__(/*! three */ "three");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const OmvDecoder_1 = __webpack_require__(/*! ./OmvDecoder */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoder.js");
class OmvTileInfoEmitter {
    /**
     * Create OmvTileInfoEmitter object
     *
     * @param m_decodeInfo
     * @param m_styleSetEvaluator
     * @param m_storeExtendedTags
     * @param m_gatherRoadSegments
     */
    constructor(m_decodeInfo, 
    // tslint:disable-next-line:no-unused-variable
    m_styleSetEvaluator, m_storeExtendedTags, m_gatherRoadSegments, m_languages) {
        this.m_decodeInfo = m_decodeInfo;
        this.m_styleSetEvaluator = m_styleSetEvaluator;
        this.m_storeExtendedTags = m_storeExtendedTags;
        this.m_gatherRoadSegments = m_gatherRoadSegments;
        this.m_languages = m_languages;
        this.m_tileInfo = new harp_datasource_protocol_1.ExtendedTileInfo(m_decodeInfo.tileKey, this.m_storeExtendedTags);
        this.m_tileInfoWriter = new harp_datasource_protocol_1.ExtendedTileInfoWriter(this.m_tileInfo, this.m_storeExtendedTags, this.m_languages);
    }
    processPointFeature(layer, geometry, env, techniques, featureId) {
        const tileInfoWriter = this.m_tileInfoWriter;
        const { targetProjection, center } = this.m_decodeInfo;
        const worldPos = new THREE.Vector3();
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const infoTileTechniqueIndex = tileInfoWriter.addTechnique(technique);
            for (const pos of geometry) {
                const { x, y } = targetProjection
                    .reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos)
                    .sub(center);
                tileInfoWriter.addFeature(this.m_tileInfo.pointGroup, technique, env, featureId, infoTileTechniqueIndex, false);
                tileInfoWriter.addFeaturePoint(this.m_tileInfo.pointGroup, x, y);
            }
        }
    }
    processLineFeature(layer, geometry, env, techniques, featureId) {
        const tileInfoWriter = this.m_tileInfoWriter;
        const { targetProjection, center } = this.m_decodeInfo;
        const worldPos = new THREE.Vector3();
        const lines = [];
        for (const polyline of geometry) {
            const line = [];
            for (const pos of polyline.positions) {
                const { x, y } = targetProjection
                    .reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos)
                    .sub(center);
                line.push(x, y);
            }
            lines.push(line);
        }
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const infoTileTechniqueIndex = tileInfoWriter.addTechnique(technique);
            for (const aLine of lines) {
                tileInfoWriter.addFeature(this.m_tileInfo.lineGroup, technique, env, featureId, infoTileTechniqueIndex, false);
                tileInfoWriter.addFeaturePoints(this.m_tileInfo.lineGroup, aLine);
            }
        }
        if (this.m_gatherRoadSegments) {
            const segmentId = env.lookup("segmentId");
            if (segmentId !== undefined) {
                const startOffset = env.lookup("startOffset");
                const endOffset = env.lookup("endOffset");
                tileInfoWriter.addRoadSegments(this.m_tileInfo.lineGroup, segmentId, startOffset !== undefined ? startOffset : 0, endOffset !== undefined ? endOffset : 1);
            }
        }
    }
    processPolygonFeature(layer, geometry, env, techniques, featureId) {
        if (techniques.length === 0) {
            throw new Error("OmvTileInfoEmitter#processPolygonFeature: Internal error - No technique index");
        }
        const tileInfoWriter = this.m_tileInfoWriter;
        const { targetProjection, center } = this.m_decodeInfo;
        const polygons = [];
        const worldPos = new THREE.Vector3();
        for (const polygon of geometry) {
            const rings = [];
            for (const outline of polygon.rings) {
                const contour = [];
                for (const pos of outline.positions) {
                    const { x, y, z } = targetProjection
                        .reprojectPoint(harp_geoutils_1.webMercatorProjection, pos, worldPos)
                        .sub(center);
                    contour.push(x, y, z);
                }
                rings.push(new OmvDecoder_1.Ring(3, contour));
            }
            polygons.push(rings);
        }
        for (const technique of techniques) {
            if (technique === undefined) {
                continue;
            }
            const infoTileTechniqueIndex = tileInfoWriter.addTechnique(technique);
            tileInfoWriter.addFeature(this.m_tileInfo.polygonGroup, technique, env, featureId, infoTileTechniqueIndex, true);
        }
        for (const rings of polygons) {
            // rings are shared between techniques
            if (rings.length === 0) {
                continue;
            }
            const outerRingWinding = rings[0].winding;
            for (const aRing of rings) {
                tileInfoWriter.addRingPoints(this.m_tileInfo.polygonGroup, aRing.contour, aRing.winding === outerRingWinding);
            }
        }
    }
    getTileInfo() {
        this.m_tileInfoWriter.finish();
        return this.m_tileInfo;
    }
}
exports.OmvTileInfoEmitter = OmvTileInfoEmitter;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvTiler.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvTiler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_worker_1 = __webpack_require__(/*! @here/harp-mapview-decoder/index-worker */ "./node_modules/@here/harp-mapview-decoder/index-worker.js");
const OmvDecoderDefs_1 = __webpack_require__(/*! ./OmvDecoderDefs */ "./node_modules/@here/harp-omv-datasource/lib/OmvDecoderDefs.js");
/**
 * OMV tile decoder service.
 */
class OmvTilerService {
    /**
     * Register[[OmvTiler]] service class in [[WorkerServiceManager]].
     *
     * Has to be called during initialization of decoder bundle.
     */
    static start() {
        index_worker_1.WorkerServiceManager.getInstance().register({
            serviceType: OmvDecoderDefs_1.OMV_TILER_SERVICE_TYPE,
            factory: (serviceId) => index_worker_1.TilerService.start(serviceId)
        });
    }
}
exports.OmvTilerService = OmvTilerService;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvTomTomFeatureModifier.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvTomTomFeatureModifier.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const harp_utils_1 = __webpack_require__(/*! @here/harp-utils */ "./node_modules/@here/harp-utils/index.js");
const OmvDataFilter_1 = __webpack_require__(/*! ./OmvDataFilter */ "./node_modules/@here/harp-omv-datasource/lib/OmvDataFilter.js");
const logger = harp_utils_1.LoggerManager.instance.create("OmvTomTomFeatureModifier");
const DEFAULT_BUILDING_COLOR = "#AAAAAA";
const DEFAULT_DO_EXTRUDE_BUILDINGS = "true";
const DEFAULT_BUILDING_MIN_HEIGHT = "2";
const DEFAULT_BUILDING_HEIGHT = "20";
/**
 * Modifies the MapEnv of the TomTom Vector Tiles to be similar to the OMV format, so that the same
 * theme files can be used.
 */
class OmvTomTomFeatureModifier extends OmvDataFilter_1.OmvGenericFeatureModifier {
    constructor(description) {
        super(description);
    }
    doProcessFeature(itemsToProcess, itemsToIgnore, layer, env, defaultResult) {
        this.rewriteEnvironment(layer, env);
        return super.doProcessFeature(itemsToProcess, itemsToIgnore, layer, env, defaultResult);
    }
    /**
     * Rewrites the Environment to match the environment naming used in OMV.
     *
     * Does not cover roadlabels, as the roadlabels in the Tomtom format are delivered in a
     * different format combined in the environment with the road line geometry, which is
     * represented as two separate environment in the default format.
     *
     * @param layer
     * @param env
     */
    rewriteEnvironment(layer, env) {
        // Rewriting landuse layers
        if (this.isWood(layer)) {
            this.updateEnvironment(env, "landuse", "wood");
        }
        else if (this.isHospital(layer)) {
            this.updateEnvironment(env, "landuse", "hospital");
        }
        else if (this.isCemetery(layer)) {
            this.updateEnvironment(env, "landuse", "cemetery");
        }
        else if (this.isIndustrial(layer)) {
            this.updateEnvironment(env, "landuse", "industrial");
        }
        else if (this.isPark(layer)) {
            this.updateEnvironment(env, "landuse", "park");
        }
        else if (this.isBuiltup(layer)) {
            this.updateEnvironment(env, "landuse", "builtup");
            // Rewriting the water layer
        }
        else if (this.isWater(layer)) {
            this.updateEnvironment(env, "water");
            // Rewriting the road label layer
        }
        else if (this.isRoadLabel(layer)) {
            this.updateEnvironment(env, "road_label");
            // Rewriting road layers with category classes
        }
        else if (this.isRoadPath(layer)) {
            this.updateEnvironment(env, "road", "path");
        }
        else if (this.isRoadStreet(layer)) {
            this.updateEnvironment(env, "road", "street");
        }
        else if (this.isRoadPrimary(layer)) {
            this.updateEnvironment(env, "road", "primary");
        }
        else if (this.isRoadSecondary(layer)) {
            this.updateEnvironment(env, "road", "secondary");
        }
        else if (this.isRailway(layer)) {
            this.updateEnvironment(env, "road", "major_rail");
        }
        else if (this.isFerry(layer)) {
            this.updateEnvironment(env, "road", "ferry");
            // Rewriting aeroway layer
        }
        else if (this.isAeroway(layer)) {
            this.updateEnvironment(env, "aeroway");
            // Rewriting border layer
        }
        else if (this.isBorder(layer)) {
            this.updateEnvironment(env, "admin");
            // Rewriting label layers
        }
        else if (this.isCountryLabel(layer)) {
            this.updateEnvironment(env, "country_label");
        }
        else if (this.isCountyLabel(layer)) {
            this.updateEnvironment(env, "county_label");
        }
        else if (this.isRegionLabel(layer)) {
            this.updateEnvironment(env, "region_label");
        }
        else if (this.isStateLabel(layer)) {
            this.updateEnvironment(env, "state_label");
        }
        else if (this.isPlaceLabel(layer)) {
            this.updateEnvironment(env, "place_label");
        }
        else if (this.isWaterLabel(layer)) {
            this.updateEnvironment(env, "water_label");
        }
        else if (this.isMarineLabel(layer)) {
            this.updateEnvironment(env, "marine_label");
        }
        else if (this.isPoiLabel(layer)) {
            this.updateEnvironment(env, "poi_label");
            // Rewriting building layer
        }
        else if (this.isBuilding(layer)) {
            this.updateEnvironment(env, "building");
            env.entries.color = DEFAULT_BUILDING_COLOR;
            env.entries.extrude = DEFAULT_DO_EXTRUDE_BUILDINGS;
            env.entries.min_height = DEFAULT_BUILDING_MIN_HEIGHT;
            env.entries.height = DEFAULT_BUILDING_HEIGHT;
        }
        else {
            logger.info(`Not yet rewritten layer: ##${env.entries.$layer}## `);
        }
        // Add tunnel structure if its a tunnel
        if (this.isTunnel(layer)) {
            env.entries.structure = "tunnel";
        }
        //Add bridge structure if its a bridge
        if (this.isBridge(layer)) {
            env.entries.structure = "bridge";
        }
    }
    updateEnvironment(env, layer, newClass, structure) {
        env.entries.$layer = layer;
        if (newClass !== undefined) {
            env.entries.class = newClass;
        }
        if (structure !== undefined) {
            env.entries.structure = structure;
        }
    }
    isWood(layer) {
        return layer === "Woodland" || layer === "Moor or heathland";
    }
    isHospital(layer) {
        return layer === "Hospital";
    }
    isCemetery(layer) {
        return layer === "Cemetery";
    }
    isIndustrial(layer) {
        return layer.indexOf("Industrial") >= 0 || layer === "Airport";
    }
    isPark(layer) {
        return (layer === "Park" ||
            layer === "City park" ||
            layer === "National park" ||
            layer === "Regional park" ||
            layer.indexOf("grass") >= 0 ||
            layer.indexOf("greens") >= 0);
    }
    isBuiltup(layer) {
        return (layer === "Built-up area" ||
            layer === "Town paved area" ||
            layer === "Shopping" ||
            layer === "University" ||
            layer === "Stadium" ||
            layer.indexOf("ground") > 0);
    }
    isWater(layer) {
        return (layer === "Other water" ||
            layer === "Ocean or sea" ||
            layer === "Ocean" ||
            layer === "Lake" ||
            layer === "Sea" ||
            layer === "Town swimming pool" ||
            layer === "River");
    }
    isRoadLabel(layer) {
        return layer.indexOf("road label") >= 0;
    }
    isRoadPath(layer) {
        return (layer.indexOf("path") > 0 ||
            layer === "Parking road" ||
            layer === "Town walkway" ||
            layer === "Pedestrian road" ||
            layer === "Walkway road" ||
            layer === "Town carriageway divider" ||
            layer === "Runway" ||
            layer === "Non public road");
    }
    isRoadStreet(layer) {
        return (layer.indexOf("Minor local road") >= 0 ||
            layer.indexOf("minor local road") >= 0 ||
            layer.indexOf("Toll local road") >= 0 ||
            layer.indexOf("Local road") >= 0);
    }
    isRoadPrimary(layer) {
        return (layer.indexOf("Major local road") >= 0 ||
            layer.indexOf("Major road") >= 0 ||
            layer.indexOf("major road") >= 0 ||
            layer.indexOf("Motorway") >= 0 ||
            layer.indexOf("motorway") >= 0 ||
            layer.indexOf("International road") >= 0 ||
            layer.indexOf("international road") >= 0);
    }
    isRoadSecondary(layer) {
        return (layer.indexOf("connecting road") >= 0 ||
            layer.indexOf("Connecting road") >= 0 ||
            layer.indexOf("secondary road") >= 0 ||
            layer.indexOf("Secondary road") >= 0);
    }
    isRailway(layer) {
        return layer === "Railway";
    }
    isFerry(layer) {
        return layer === "Ferry road";
    }
    isBorder(layer) {
        return layer.indexOf("border") > 0;
    }
    isCountryLabel(layer) {
        return layer === "Country name" || layer === "Country label";
    }
    isStateLabel(layer) {
        return layer === "City" || layer.indexOf("city") > 0;
    }
    isRegionLabel(layer) {
        return layer === "Town";
    }
    isCountyLabel(layer) {
        return layer === "Village";
    }
    isPlaceLabel(layer) {
        return (layer === "Park" ||
            layer === "Railway station" ||
            layer === "Airport POI" ||
            layer === "Town greens");
    }
    isWaterLabel(layer) {
        return (layer === "Ocean name" || layer === "River label" || layer.indexOf("water label") > 0);
    }
    isMarineLabel(layer) {
        return layer.indexOf("water label") > 0;
    }
    isPoiLabel(layer) {
        return (layer === "National park name" ||
            layer === "Landmark label" ||
            layer.indexOf("label") >= 0);
    }
    isAeroway(layer) {
        return layer === "Airport";
    }
    isBuilding(layer) {
        return layer.indexOf("building") >= 0;
    }
    isTunnel(layer) {
        return layer.indexOf("tunnel") >= 0;
    }
    isBridge(layer) {
        return layer.indexOf("bridge") >= 0;
    }
}
exports.OmvTomTomFeatureModifier = OmvTomTomFeatureModifier;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/OmvUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/OmvUtils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
function isArrayBufferLike(data) {
    if (typeof SharedArrayBuffer !== "undefined") {
        return data instanceof ArrayBuffer || data instanceof SharedArrayBuffer;
    }
    else {
        return data instanceof ArrayBuffer;
    }
}
exports.isArrayBufferLike = isArrayBufferLike;
/**
 * @hidden
 */
function lat2tile(lat, zoom) {
    return Math.floor(((1 -
        Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) /
            Math.PI) /
        2) *
        Math.pow(2, zoom));
}
exports.lat2tile = lat2tile;
/**
 * @hidden
 */
function tile2lat(y, level) {
    const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, level);
    return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}
exports.tile2lat = tile2lat;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/VTJsonDataAdapter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/VTJsonDataAdapter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_decoder_1 = __webpack_require__(/*! @here/harp-datasource-protocol/index-decoder */ "./node_modules/@here/harp-datasource-protocol/index-decoder.js");
const harp_geoutils_1 = __webpack_require__(/*! @here/harp-geoutils */ "./node_modules/@here/harp-geoutils/index.js");
const three_1 = __webpack_require__(/*! three */ "three");
const OmvUtils_1 = __webpack_require__(/*! ./OmvUtils */ "./node_modules/@here/harp-omv-datasource/lib/OmvUtils.js");
var VTJsonGeometryType;
(function (VTJsonGeometryType) {
    VTJsonGeometryType[VTJsonGeometryType["Unknown"] = 0] = "Unknown";
    VTJsonGeometryType[VTJsonGeometryType["Point"] = 1] = "Point";
    VTJsonGeometryType[VTJsonGeometryType["LineString"] = 2] = "LineString";
    VTJsonGeometryType[VTJsonGeometryType["Polygon"] = 3] = "Polygon";
})(VTJsonGeometryType || (VTJsonGeometryType = {}));
/**
 * The class [[VTJsonDataAdapter]] converts VT-json data to geometries for the given
 * [[IGeometryProcessor]].
 */
class VTJsonDataAdapter {
    constructor(m_processor, m_dataFilter, m_logger) {
        this.m_processor = m_processor;
        this.m_dataFilter = m_dataFilter;
        this.m_logger = m_logger;
    }
    get dataFilter() {
        return this.m_dataFilter;
    }
    set dataFilter(dataFilter) {
        this.m_dataFilter = dataFilter;
    }
    canProcess(data) {
        if (OmvUtils_1.isArrayBufferLike(data)) {
            return false;
        }
        const tile = data;
        if (tile.features === undefined ||
            tile.source === undefined ||
            tile.x === undefined ||
            tile.y === undefined ||
            tile.z === undefined) {
            return false;
        }
        return true;
    }
    process(tile, tileKey, geoBox) {
        const extent = 4096;
        const { north, west } = geoBox;
        const N = Math.log2(extent);
        const scale = Math.pow(2, tileKey.level + N);
        const top = OmvUtils_1.lat2tile(north, tileKey.level + N);
        const left = ((west + 180) / 360) * scale;
        const R = harp_geoutils_1.EarthConstants.EQUATORIAL_CIRCUMFERENCE;
        for (const feature of tile.features) {
            const env = new index_decoder_1.MapEnv(Object.assign({}, feature.tags, { $layer: tile.layer, $geometryType: this.convertGeometryType(feature.type), $level: tileKey.level }));
            switch (feature.type) {
                case VTJsonGeometryType.Point: {
                    for (const pointGeometry of feature.geometry) {
                        const x = pointGeometry[0];
                        const y = pointGeometry[1];
                        const position = new three_1.Vector3(((left + x) / scale) * R, ((top + y) / scale) * R, 0);
                        this.m_processor.processPointFeature(tile.layer, [position], env, tileKey.level);
                    }
                    break;
                }
                case VTJsonGeometryType.LineString: {
                    for (const lineGeometry of feature.geometry) {
                        const line = { positions: [] };
                        for (const [x, y] of lineGeometry) {
                            const position = new three_1.Vector3(((left + x) / scale) * R, ((top + y) / scale) * R, 0);
                            line.positions.push(position);
                        }
                        this.m_processor.processLineFeature(tile.layer, [line], env, tileKey.level);
                    }
                    break;
                }
                case VTJsonGeometryType.Polygon: {
                    let polygonValid = true;
                    const polygon = { rings: [] };
                    for (const outline of feature.geometry) {
                        let minX = Infinity;
                        let minY = Infinity;
                        let maxX = 0;
                        let maxY = 0;
                        const ring = { positions: [], outlines: [] };
                        for (let coordIdx = 0; coordIdx < outline.length; ++coordIdx) {
                            const currX = outline[coordIdx][0];
                            const currY = outline[coordIdx][1];
                            const nextX = outline[(coordIdx + 1) % outline.length][0];
                            const nextY = outline[(coordIdx + 1) % outline.length][1];
                            if (polygon.rings.length > 0) {
                                minX = Math.min(minX, currX);
                                minY = Math.min(minY, currY);
                                maxX = Math.max(maxX, currX);
                                maxY = Math.max(maxY, currY);
                            }
                            const position = new three_1.Vector3(((left + currX) / scale) * R, ((top + currY) / scale) * R, 0);
                            ring.positions.push(position);
                            ring.outlines.push(!((currX === 0 && nextX === 0) ||
                                (currX === extent && nextX === extent) ||
                                (currY === 0 && nextY === 0) ||
                                (currY === extent && nextY === extent)));
                        }
                        if (minX === 0 && minY === 0 && maxX === extent && maxY === extent) {
                            polygonValid = false;
                            break;
                        }
                        else {
                            minX = minY = Infinity;
                            maxX = maxY = 0;
                        }
                        polygon.rings.push(ring);
                    }
                    if (polygonValid) {
                        this.m_processor.processPolygonFeature(tile.layer, [polygon], env, tileKey.level);
                    }
                    break;
                }
                case VTJsonGeometryType.Unknown: {
                    break;
                }
            }
        }
    }
    convertGeometryType(type) {
        switch (type) {
            case VTJsonGeometryType.Point:
                return "point";
            case VTJsonGeometryType.LineString:
                return "line";
            case VTJsonGeometryType.Polygon:
                return "polygon";
            default:
                return "unknown";
        }
    }
}
exports.VTJsonDataAdapter = VTJsonDataAdapter;


/***/ }),

/***/ "./node_modules/@here/harp-omv-datasource/lib/proto/vector_tile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@here/harp-omv-datasource/lib/proto/vector_tile.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (C) 2017-2018 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/


var $protobuf = __webpack_require__(/*! protobufjs/minimal */ "./node_modules/protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.mapbox = (function() {

        /**
         * Namespace mapbox.
         * @memberof com
         * @namespace
         */
        var mapbox = {};

        mapbox.pb = (function() {

            /**
             * Namespace pb.
             * @memberof com.mapbox
             * @namespace
             */
            var pb = {};

            pb.Tile = (function() {

                /**
                 * Properties of a Tile.
                 * @memberof com.mapbox.pb
                 * @interface ITile
                 * @property {Array.<com.mapbox.pb.Tile.ILayer>} [layers] Tile layers
                 */

                /**
                 * Constructs a new Tile.
                 * @memberof com.mapbox.pb
                 * @classdesc Represents a Tile.
                 * @constructor
                 * @param {com.mapbox.pb.ITile=} [properties] Properties to set
                 */
                function Tile(properties) {
                    this.layers = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Tile layers.
                 * @member {Array.<com.mapbox.pb.Tile.ILayer>}layers
                 * @memberof com.mapbox.pb.Tile
                 * @instance
                 */
                Tile.prototype.layers = $util.emptyArray;

                /**
                 * Decodes a Tile message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.mapbox.pb.Tile} Tile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Tile.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            if (!(message.layers && message.layers.length))
                                message.layers = [];
                            message.layers.push($root.com.mapbox.pb.Tile.Layer.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Tile message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.mapbox.pb.Tile} Tile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Tile.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Creates a Tile message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.mapbox.pb.Tile} Tile
                 */
                Tile.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.mapbox.pb.Tile)
                        return object;
                    var message = new $root.com.mapbox.pb.Tile();
                    if (object.layers) {
                        if (!Array.isArray(object.layers))
                            throw TypeError(".com.mapbox.pb.Tile.layers: array expected");
                        message.layers = [];
                        for (var i = 0; i < object.layers.length; ++i) {
                            if (typeof object.layers[i] !== "object")
                                throw TypeError(".com.mapbox.pb.Tile.layers: object expected");
                            message.layers[i] = $root.com.mapbox.pb.Tile.Layer.fromObject(object.layers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Tile message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.mapbox.pb.Tile
                 * @static
                 * @param {com.mapbox.pb.Tile} message Tile
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Tile.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.layers = [];
                    if (message.layers && message.layers.length) {
                        object.layers = [];
                        for (var j = 0; j < message.layers.length; ++j)
                            object.layers[j] = $root.com.mapbox.pb.Tile.Layer.toObject(message.layers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Tile to JSON.
                 * @function toJSON
                 * @memberof com.mapbox.pb.Tile
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Tile.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * GeomType enum.
                 * @enum {string}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} POINT=1 POINT value
                 * @property {number} LINESTRING=2 LINESTRING value
                 * @property {number} POLYGON=3 POLYGON value
                 */
                Tile.GeomType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "POINT"] = 1;
                    values[valuesById[2] = "LINESTRING"] = 2;
                    values[valuesById[3] = "POLYGON"] = 3;
                    return values;
                })();

                Tile.Value = (function() {

                    /**
                     * Properties of a Value.
                     * @memberof com.mapbox.pb.Tile
                     * @interface IValue
                     * @property {string} [stringValue] Value stringValue
                     * @property {number} [floatValue] Value floatValue
                     * @property {number} [doubleValue] Value doubleValue
                     * @property {number|Long} [intValue] Value intValue
                     * @property {number|Long} [uintValue] Value uintValue
                     * @property {number|Long} [sintValue] Value sintValue
                     * @property {boolean} [boolValue] Value boolValue
                     */

                    /**
                     * Constructs a new Value.
                     * @memberof com.mapbox.pb.Tile
                     * @classdesc Represents a Value.
                     * @constructor
                     * @param {com.mapbox.pb.Tile.IValue=} [properties] Properties to set
                     */
                    function Value(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Value stringValue.
                     * @member {string}stringValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.stringValue = "";

                    /**
                     * Value floatValue.
                     * @member {number}floatValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.floatValue = 0;

                    /**
                     * Value doubleValue.
                     * @member {number}doubleValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.doubleValue = 0;

                    /**
                     * Value intValue.
                     * @member {number|Long}intValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Value uintValue.
                     * @member {number|Long}uintValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.uintValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Value sintValue.
                     * @member {number|Long}sintValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.sintValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Value boolValue.
                     * @member {boolean}boolValue
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     */
                    Value.prototype.boolValue = false;

                    /**
                     * Decodes a Value message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapbox.pb.Tile.Value} Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Value.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile.Value();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.stringValue = reader.string();
                                break;
                            case 2:
                                message.floatValue = reader.float();
                                break;
                            case 3:
                                message.doubleValue = reader.double();
                                break;
                            case 4:
                                message.intValue = reader.int64();
                                break;
                            case 5:
                                message.uintValue = reader.uint64();
                                break;
                            case 6:
                                message.sintValue = reader.sint64();
                                break;
                            case 7:
                                message.boolValue = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Value message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapbox.pb.Tile.Value} Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Value.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Value message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapbox.pb.Tile.Value} Value
                     */
                    Value.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapbox.pb.Tile.Value)
                            return object;
                        var message = new $root.com.mapbox.pb.Tile.Value();
                        if (object.stringValue != null)
                            message.stringValue = String(object.stringValue);
                        if (object.floatValue != null)
                            message.floatValue = Number(object.floatValue);
                        if (object.doubleValue != null)
                            message.doubleValue = Number(object.doubleValue);
                        if (object.intValue != null)
                            if ($util.Long)
                                (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                            else if (typeof object.intValue === "string")
                                message.intValue = parseInt(object.intValue, 10);
                            else if (typeof object.intValue === "number")
                                message.intValue = object.intValue;
                            else if (typeof object.intValue === "object")
                                message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                        if (object.uintValue != null)
                            if ($util.Long)
                                (message.uintValue = $util.Long.fromValue(object.uintValue)).unsigned = true;
                            else if (typeof object.uintValue === "string")
                                message.uintValue = parseInt(object.uintValue, 10);
                            else if (typeof object.uintValue === "number")
                                message.uintValue = object.uintValue;
                            else if (typeof object.uintValue === "object")
                                message.uintValue = new $util.LongBits(object.uintValue.low >>> 0, object.uintValue.high >>> 0).toNumber(true);
                        if (object.sintValue != null)
                            if ($util.Long)
                                (message.sintValue = $util.Long.fromValue(object.sintValue)).unsigned = false;
                            else if (typeof object.sintValue === "string")
                                message.sintValue = parseInt(object.sintValue, 10);
                            else if (typeof object.sintValue === "number")
                                message.sintValue = object.sintValue;
                            else if (typeof object.sintValue === "object")
                                message.sintValue = new $util.LongBits(object.sintValue.low >>> 0, object.sintValue.high >>> 0).toNumber();
                        if (object.boolValue != null)
                            message.boolValue = Boolean(object.boolValue);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Value message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapbox.pb.Tile.Value
                     * @static
                     * @param {com.mapbox.pb.Tile.Value} message Value
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Value.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.stringValue = "";
                            object.floatValue = 0;
                            object.doubleValue = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.intValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.intValue = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.uintValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.uintValue = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.sintValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.sintValue = options.longs === String ? "0" : 0;
                            object.boolValue = false;
                        }
                        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                            object.stringValue = message.stringValue;
                        if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                            object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                        if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                            object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                        if (message.intValue != null && message.hasOwnProperty("intValue"))
                            if (typeof message.intValue === "number")
                                object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                            else
                                object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                        if (message.uintValue != null && message.hasOwnProperty("uintValue"))
                            if (typeof message.uintValue === "number")
                                object.uintValue = options.longs === String ? String(message.uintValue) : message.uintValue;
                            else
                                object.uintValue = options.longs === String ? $util.Long.prototype.toString.call(message.uintValue) : options.longs === Number ? new $util.LongBits(message.uintValue.low >>> 0, message.uintValue.high >>> 0).toNumber(true) : message.uintValue;
                        if (message.sintValue != null && message.hasOwnProperty("sintValue"))
                            if (typeof message.sintValue === "number")
                                object.sintValue = options.longs === String ? String(message.sintValue) : message.sintValue;
                            else
                                object.sintValue = options.longs === String ? $util.Long.prototype.toString.call(message.sintValue) : options.longs === Number ? new $util.LongBits(message.sintValue.low >>> 0, message.sintValue.high >>> 0).toNumber() : message.sintValue;
                        if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                            object.boolValue = message.boolValue;
                        return object;
                    };

                    /**
                     * Converts this Value to JSON.
                     * @function toJSON
                     * @memberof com.mapbox.pb.Tile.Value
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Value.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Value;
                })();

                Tile.Feature = (function() {

                    /**
                     * Properties of a Feature.
                     * @memberof com.mapbox.pb.Tile
                     * @interface IFeature
                     * @property {number|Long} [id] Feature id
                     * @property {Array.<number>} [tags] Feature tags
                     * @property {com.mapbox.pb.Tile.GeomType} [type] Feature type
                     * @property {Array.<number>} [geometry] Feature geometry
                     */

                    /**
                     * Constructs a new Feature.
                     * @memberof com.mapbox.pb.Tile
                     * @classdesc Represents a Feature.
                     * @constructor
                     * @param {com.mapbox.pb.Tile.IFeature=} [properties] Properties to set
                     */
                    function Feature(properties) {
                        this.tags = [];
                        this.geometry = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Feature id.
                     * @member {number|Long}id
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Feature tags.
                     * @member {Array.<number>}tags
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.tags = $util.emptyArray;

                    /**
                     * Feature type.
                     * @member {com.mapbox.pb.Tile.GeomType}type
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.type = 0;

                    /**
                     * Feature geometry.
                     * @member {Array.<number>}geometry
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     */
                    Feature.prototype.geometry = $util.emptyArray;

                    /**
                     * Decodes a Feature message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapbox.pb.Tile.Feature} Feature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feature.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile.Feature();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.uint64();
                                break;
                            case 2:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.tags.push(reader.uint32());
                                } else
                                    message.tags.push(reader.uint32());
                                break;
                            case 3:
                                message.type = reader.int32();
                                break;
                            case 4:
                                if (!(message.geometry && message.geometry.length))
                                    message.geometry = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.geometry.push(reader.uint32());
                                } else
                                    message.geometry.push(reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Feature message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapbox.pb.Tile.Feature} Feature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feature.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Feature message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapbox.pb.Tile.Feature} Feature
                     */
                    Feature.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapbox.pb.Tile.Feature)
                            return object;
                        var message = new $root.com.mapbox.pb.Tile.Feature();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".com.mapbox.pb.Tile.Feature.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = object.tags[i] >>> 0;
                        }
                        switch (object.type) {
                        case "UNKNOWN":
                        case 0:
                            message.type = 0;
                            break;
                        case "POINT":
                        case 1:
                            message.type = 1;
                            break;
                        case "LINESTRING":
                        case 2:
                            message.type = 2;
                            break;
                        case "POLYGON":
                        case 3:
                            message.type = 3;
                            break;
                        }
                        if (object.geometry) {
                            if (!Array.isArray(object.geometry))
                                throw TypeError(".com.mapbox.pb.Tile.Feature.geometry: array expected");
                            message.geometry = [];
                            for (var i = 0; i < object.geometry.length; ++i)
                                message.geometry[i] = object.geometry[i] >>> 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Feature message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @static
                     * @param {com.mapbox.pb.Tile.Feature} message Feature
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Feature.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.tags = [];
                            object.geometry = [];
                        }
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                            object.type = options.enums === String ? "UNKNOWN" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.com.mapbox.pb.Tile.GeomType[message.type] : message.type;
                        if (message.geometry && message.geometry.length) {
                            object.geometry = [];
                            for (var j = 0; j < message.geometry.length; ++j)
                                object.geometry[j] = message.geometry[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Feature to JSON.
                     * @function toJSON
                     * @memberof com.mapbox.pb.Tile.Feature
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Feature.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Feature;
                })();

                Tile.Layer = (function() {

                    /**
                     * Properties of a Layer.
                     * @memberof com.mapbox.pb.Tile
                     * @interface ILayer
                     * @property {number} version Layer version
                     * @property {string} name Layer name
                     * @property {Array.<com.mapbox.pb.Tile.IFeature>} [features] Layer features
                     * @property {Array.<string>} [keys] Layer keys
                     * @property {Array.<com.mapbox.pb.Tile.IValue>} [values] Layer values
                     * @property {number} [extent] Layer extent
                     */

                    /**
                     * Constructs a new Layer.
                     * @memberof com.mapbox.pb.Tile
                     * @classdesc Represents a Layer.
                     * @constructor
                     * @param {com.mapbox.pb.Tile.ILayer=} [properties] Properties to set
                     */
                    function Layer(properties) {
                        this.features = [];
                        this.keys = [];
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Layer version.
                     * @member {number}version
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.version = 1;

                    /**
                     * Layer name.
                     * @member {string}name
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.name = "";

                    /**
                     * Layer features.
                     * @member {Array.<com.mapbox.pb.Tile.IFeature>}features
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.features = $util.emptyArray;

                    /**
                     * Layer keys.
                     * @member {Array.<string>}keys
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.keys = $util.emptyArray;

                    /**
                     * Layer values.
                     * @member {Array.<com.mapbox.pb.Tile.IValue>}values
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.values = $util.emptyArray;

                    /**
                     * Layer extent.
                     * @member {number}extent
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     */
                    Layer.prototype.extent = 4096;

                    /**
                     * Decodes a Layer message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.mapbox.pb.Tile.Layer} Layer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Layer.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.mapbox.pb.Tile.Layer();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 15:
                                message.version = reader.uint32();
                                break;
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                if (!(message.features && message.features.length))
                                    message.features = [];
                                message.features.push($root.com.mapbox.pb.Tile.Feature.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                if (!(message.keys && message.keys.length))
                                    message.keys = [];
                                message.keys.push(reader.string());
                                break;
                            case 4:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push($root.com.mapbox.pb.Tile.Value.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                message.extent = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("version"))
                            throw $util.ProtocolError("missing required 'version'", { instance: message });
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a Layer message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.mapbox.pb.Tile.Layer} Layer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Layer.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Layer message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.mapbox.pb.Tile.Layer} Layer
                     */
                    Layer.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.mapbox.pb.Tile.Layer)
                            return object;
                        var message = new $root.com.mapbox.pb.Tile.Layer();
                        if (object.version != null)
                            message.version = object.version >>> 0;
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.features) {
                            if (!Array.isArray(object.features))
                                throw TypeError(".com.mapbox.pb.Tile.Layer.features: array expected");
                            message.features = [];
                            for (var i = 0; i < object.features.length; ++i) {
                                if (typeof object.features[i] !== "object")
                                    throw TypeError(".com.mapbox.pb.Tile.Layer.features: object expected");
                                message.features[i] = $root.com.mapbox.pb.Tile.Feature.fromObject(object.features[i]);
                            }
                        }
                        if (object.keys) {
                            if (!Array.isArray(object.keys))
                                throw TypeError(".com.mapbox.pb.Tile.Layer.keys: array expected");
                            message.keys = [];
                            for (var i = 0; i < object.keys.length; ++i)
                                message.keys[i] = String(object.keys[i]);
                        }
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".com.mapbox.pb.Tile.Layer.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".com.mapbox.pb.Tile.Layer.values: object expected");
                                message.values[i] = $root.com.mapbox.pb.Tile.Value.fromObject(object.values[i]);
                            }
                        }
                        if (object.extent != null)
                            message.extent = object.extent >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Layer message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @static
                     * @param {com.mapbox.pb.Tile.Layer} message Layer
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Layer.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.features = [];
                            object.keys = [];
                            object.values = [];
                        }
                        if (options.defaults) {
                            object.name = "";
                            object.extent = 4096;
                            object.version = 1;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.features && message.features.length) {
                            object.features = [];
                            for (var j = 0; j < message.features.length; ++j)
                                object.features[j] = $root.com.mapbox.pb.Tile.Feature.toObject(message.features[j], options);
                        }
                        if (message.keys && message.keys.length) {
                            object.keys = [];
                            for (var j = 0; j < message.keys.length; ++j)
                                object.keys[j] = message.keys[j];
                        }
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.com.mapbox.pb.Tile.Value.toObject(message.values[j], options);
                        }
                        if (message.extent != null && message.hasOwnProperty("extent"))
                            object.extent = message.extent;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        return object;
                    };

                    /**
                     * Converts this Layer to JSON.
                     * @function toJSON
                     * @memberof com.mapbox.pb.Tile.Layer
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Layer.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Layer;
                })();

                return Tile;
            })();

            return pb;
        })();

        return mapbox;
    })();

    return com;
})();

module.exports = $root;


/***/ }),

/***/ "./node_modules/@here/harp-utils/index.js":
/*!************************************************!*\
  !*** ./node_modules/@here/harp-utils/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/GroupedPriorityList */ "./node_modules/@here/harp-utils/lib/GroupedPriorityList.js"));
__export(__webpack_require__(/*! ./lib/Logger */ "./node_modules/@here/harp-utils/lib/Logger/index.js"));
__export(__webpack_require__(/*! ./lib/Math2D */ "./node_modules/@here/harp-utils/lib/Math2D.js"));
__export(__webpack_require__(/*! ./lib/MathUtils */ "./node_modules/@here/harp-utils/lib/MathUtils.js"));
__export(__webpack_require__(/*! ./lib/Mixins */ "./node_modules/@here/harp-utils/lib/Mixins.js"));
__export(__webpack_require__(/*! ./lib/assert */ "./node_modules/@here/harp-utils/lib/assert.js"));
__export(__webpack_require__(/*! ./lib/PerformanceTimer */ "./node_modules/@here/harp-utils/lib/PerformanceTimer.js"));
__export(__webpack_require__(/*! ./lib/OptionsUtils */ "./node_modules/@here/harp-utils/lib/OptionsUtils.js"));
__export(__webpack_require__(/*! ./lib/UrlResolver */ "./node_modules/@here/harp-utils/lib/UrlResolver.js"));
__export(__webpack_require__(/*! ./lib/UrlUtils */ "./node_modules/@here/harp-utils/lib/UrlUtils.js"));
__export(__webpack_require__(/*! ./lib/Functions */ "./node_modules/@here/harp-utils/lib/Functions.js"));


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Functions.js":
/*!********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Functions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Chains two functions for further assigning as one wrapped callback function
 */
function chainCallbacks(f1, f2) {
    return function (...args) {
        if (f1) {
            f1.apply(this, args);
        }
        return f2.apply(this, args);
    };
}
exports.chainCallbacks = chainCallbacks;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/GroupedPriorityList.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/GroupedPriorityList.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The `PriorityListGroup` contains a list of [[PriorityListElement]]s that all have the same
 * (integer) priority.
 */
class PriorityListGroup {
    constructor(priority, elements = new Array()) {
        this.priority = priority;
        this.elements = elements;
    }
    /**
     * Create and return a deep copy of the `PriorityListGroup<T>`.
     *
     * @returns A clone of the `PriorityListGroup<T>`.
     */
    clone() {
        return new PriorityListGroup(this.priority, this.elements.slice());
    }
}
exports.PriorityListGroup = PriorityListGroup;
/**
 * The `GroupedPriorityList` contains a [[PriorityListGroupMap]] to manage a larger number of items
 * in priority groups.
 */
class GroupedPriorityList {
    constructor() {
        this.groups = new Map();
    }
    /**
     * Add an element to the `GroupedPriorityList`. Selects group based on the elements priority.
     *
     * @param element Element to be added.
     */
    add(element) {
        this.getGroup(element.priority).elements.push(element);
    }
    /**
     * Remove an element from the `GroupedPriorityList`.
     *
     * Note: It is required that the priority is the same as it was when the element has been added.
     * Otherwise, the removal will fail.
     *
     * @param element Element to be removed.
     * @returns `True` if the element was removed, `false` otherwise.
     */
    remove(element) {
        const group = this.getGroup(element.priority);
        if (group !== undefined) {
            const foundIndex = group.elements.indexOf(element);
            if (foundIndex >= 0) {
                group.elements.splice(foundIndex, 1);
                if (group.elements.length === 0) {
                    const normalizedPriority = Math.floor(element.priority);
                    this.groups.delete(normalizedPriority);
                }
                return true;
            }
        }
        return false;
    }
    /**
     * Remove all internal [[PriorityListGroup]]s.
     */
    clear() {
        this.groups.clear();
    }
    /**
     * Merge another [[GroupedPriorityList]] into this one.
     *
     * @param other Other group to merge.
     */
    merge(other) {
        for (const otherGroup of other.groups) {
            const group = this.findGroup(otherGroup[1].priority);
            if (group === undefined) {
                this.groups.set(Math.floor(otherGroup[1].priority), otherGroup[1].clone());
                continue;
            }
            group.elements = group.elements.concat(otherGroup[1].elements);
        }
        return this;
    }
    /**
     * Return a sorted list of [[PriorityListGroup]]s.
     */
    get sortedGroups() {
        const groups = [];
        for (const priorityList of this.groups) {
            groups.push(priorityList[1]);
        }
        groups.sort((a, b) => {
            return b.priority - a.priority;
        });
        return groups;
    }
    /**
     * Apply function to all elements in this `GroupedPriorityList`.
     *
     * @param {(element: T) => void} fun Function to apply.
     */
    forEach(fun) {
        for (const group of this.groups) {
            group[1].elements.forEach(fun);
        }
    }
    /**
     * Count the number of elements in this `GroupedPriorityList`.
     */
    count() {
        let n = 0;
        for (const group of this.groups) {
            n += group[1].elements.length;
        }
        return n;
    }
    /**
     * Get group of elements that have the same (integer) priority.
     *
     * @param priority The priority to retrieve all elements from.
     */
    findGroup(priority) {
        const normalizedPriority = Math.floor(priority);
        const group = this.groups.get(normalizedPriority);
        return group;
    }
    /**
     * Get group of elements that have the same (integer) priority.
     *
     * @param priority The priority to retrieve all elements from.
     */
    getGroup(priority) {
        let group = this.findGroup(priority);
        if (group === undefined) {
            const normalizedPriority = Math.floor(priority);
            group = new PriorityListGroup(normalizedPriority);
            this.groups.set(normalizedPriority, group);
        }
        return group;
    }
}
exports.GroupedPriorityList = GroupedPriorityList;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class for the default console channel.
 */
class ConsoleChannel {
    error(message, ...optionalParams) {
        // tslint:disable-next-line:no-console
        console.error(message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        // tslint:disable-next-line:no-console
        console.debug(message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        // tslint:disable-next-line:no-console
        console.info(message, ...optionalParams);
    }
    log(message, ...optionalParams) {
        // tslint:disable-next-line:no-console
        console.log(message, ...optionalParams);
    }
    trace(message, ...optionalParams) {
        // tslint:disable-next-line:no-console
        console.trace(message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        // tslint:disable-next-line:no-console
        console.warn(message, ...optionalParams);
    }
}
exports.ConsoleChannel = ConsoleChannel;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js":
/*!*************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/ILogger.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum log levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Log"] = 2] = "Log";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warn"] = 4] = "Warn";
    LogLevel[LogLevel["Error"] = 5] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * Logger options to configure logger
 */
class LoggerOptions {
}
exports.LoggerOptions = LoggerOptions;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/Logger.js":
/*!************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/Logger.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ILogger_1 = __webpack_require__(/*! ./ILogger */ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js");
/**
 * Logger class.
 */
class Logger {
    constructor(name, m_channel, options) {
        this.name = name;
        this.m_channel = m_channel;
        this.enabled = true;
        this.level = ILogger_1.LogLevel.Trace;
        if (options !== undefined) {
            this.update(options);
        }
    }
    error(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Error) {
            this.m_channel.error(this.prefix, message, ...optionalParams);
        }
    }
    debug(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Debug) {
            this.m_channel.debug(this.prefix, message, ...optionalParams);
        }
    }
    info(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Info) {
            this.m_channel.info(this.prefix, message, ...optionalParams);
        }
    }
    log(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Log) {
            this.m_channel.log(this.prefix, message, ...optionalParams);
        }
    }
    trace(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Trace) {
            this.m_channel.trace(this.prefix, message, ...optionalParams);
        }
    }
    warn(message, ...optionalParams) {
        if (this.enabled && this.level <= ILogger_1.LogLevel.Warn) {
            this.m_channel.warn(this.prefix, message, ...optionalParams);
        }
    }
    update(options) {
        this.enabled = options.enabled === undefined ? this.enabled : options.enabled;
        this.level = options.level === undefined ? this.level : options.level;
    }
    get prefix() {
        return this.name + ":";
    }
}
exports.Logger = Logger;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/LoggerManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/LoggerManager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerManagerImpl_1 = __webpack_require__(/*! ./LoggerManagerImpl */ "./node_modules/@here/harp-utils/lib/Logger/LoggerManagerImpl.js");
/**
 * The LoggerManager class implements a singleton object that handles logging.
 *
 * Example:
 *
 * ```typescript
 *
 * const logger = LoggerManager.instance.create("MyFontLoaderClass");
 * if (missingFonts.length > 0) {
 *     logger.error("These fonts can not be loaded: ", missingFonts);
 * } else {
 *     logger.log("All fonts have been loaded.");
 * }
 * ```
 */
class LoggerManager {
    static get instance() {
        return this.m_instance || (this.m_instance = new LoggerManagerImpl_1.LoggerManagerImpl());
    }
}
exports.LoggerManager = LoggerManager;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/LoggerManagerImpl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/LoggerManagerImpl.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleChannel_1 = __webpack_require__(/*! ./ConsoleChannel */ "./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "./node_modules/@here/harp-utils/lib/Logger/Logger.js");
const WorkerChannel_1 = __webpack_require__(/*! ./WorkerChannel */ "./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js");
/**
 * LoggerManagerImpl is the class for the singleton instance of the logger manager.
 * It handles channels and loggers.
 */
class LoggerManagerImpl {
    constructor() {
        this.m_loggers = [];
        this.channel =
            typeof self === "undefined" || typeof self.document !== "undefined"
                ? new ConsoleChannel_1.ConsoleChannel()
                : new WorkerChannel_1.WorkerChannel();
    }
    getLoggerNames() {
        return this.m_loggers.map(logger => logger.name);
    }
    getLogger(name) {
        return this.m_loggers.find(logger => logger.name === name);
    }
    create(loggerName, options) {
        const logger = new Logger_1.Logger(loggerName, this.channel, options);
        this.m_loggers.push(logger);
        return logger;
    }
    dispose(logger) {
        const found = this.m_loggers.indexOf(logger);
        if (found < 0) {
            throw new Error(`Cannot unregister "${logger}" : no such logger registered.`);
        }
        this.m_loggers.splice(found, 1);
    }
    updateAll(options) {
        for (const logger of this.m_loggers) {
            logger.update(options);
        }
    }
    update(loggerName, config) {
        for (const logger of this.m_loggers) {
            if (logger.name === loggerName) {
                logger.update(config);
            }
        }
    }
    enableAll(enabled) {
        for (const logger of this.m_loggers) {
            logger.enabled = enabled;
        }
    }
    enable(loggerName, value) {
        this.update(loggerName, { enabled: value });
    }
    setLogLevelForAll(level) {
        for (const logger of this.m_loggers) {
            logger.level = level;
        }
    }
    setLogLevel(loggerName, level) {
        this.update(loggerName, { level });
    }
    setChannel(channel) {
        this.channel = channel;
    }
}
exports.LoggerManagerImpl = LoggerManagerImpl;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/MultiChannel.js":
/*!******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/MultiChannel.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class allowing mixing several channels.
 */
class MultiChannel {
    constructor(...channels) {
        this.channels = [];
        this.channels = channels;
    }
    error(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.error(message, ...optionalParams);
        }
    }
    debug(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.debug(message, ...optionalParams);
        }
    }
    info(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.info(message, ...optionalParams);
        }
    }
    log(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.log(message, ...optionalParams);
        }
    }
    trace(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.trace(message, ...optionalParams);
        }
    }
    warn(message, ...optionalParams) {
        for (const channel of this.channels) {
            channel.warn(message, ...optionalParams);
        }
    }
}
exports.MultiChannel = MultiChannel;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ILogger_1 = __webpack_require__(/*! ./ILogger */ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js");
exports.WORKERCHANNEL_MSG_TYPE = "worker-channel-message";
/**
 * The class for the worker channel.
 */
class WorkerChannel {
    error(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Error
        };
        self.postMessage(workerMessage);
    }
    debug(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Debug
        };
        self.postMessage(workerMessage);
    }
    info(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Info
        };
        self.postMessage(workerMessage);
    }
    log(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Log
        };
        self.postMessage(workerMessage);
    }
    trace(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Trace
        };
        self.postMessage(workerMessage);
    }
    warn(message, ...optionalParams) {
        const workerMessage = {
            message: [message, ...optionalParams],
            type: exports.WORKERCHANNEL_MSG_TYPE,
            level: ILogger_1.LogLevel.Warn
        };
        self.postMessage(workerMessage);
    }
}
exports.WorkerChannel = WorkerChannel;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Logger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Logger/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ConsoleChannel */ "./node_modules/@here/harp-utils/lib/Logger/ConsoleChannel.js"));
__export(__webpack_require__(/*! ./ILogger */ "./node_modules/@here/harp-utils/lib/Logger/ILogger.js"));
__export(__webpack_require__(/*! ./Logger */ "./node_modules/@here/harp-utils/lib/Logger/Logger.js"));
__export(__webpack_require__(/*! ./LoggerManager */ "./node_modules/@here/harp-utils/lib/Logger/LoggerManager.js"));
__export(__webpack_require__(/*! ./MultiChannel */ "./node_modules/@here/harp-utils/lib/Logger/MultiChannel.js"));
__export(__webpack_require__(/*! ./WorkerChannel */ "./node_modules/@here/harp-utils/lib/Logger/WorkerChannel.js"));


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Math2D.js":
/*!*****************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Math2D.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Math2D;
(function (Math2D) {
    /**
     * Alternative 2D box object with less memory impact (four numbers instead of two min/max
     * objects with two numbers each). Should be faster.
     */
    class Box {
        /**
         * Alternative 2D box object with less memory impact (four numbers instead of two min/max
         * objects with two numbers each). Should be faster.
         *
         * @param x New X value.
         * @param y New y value.
         * @param w New w value.
         * @param h New h value.
         */
        constructor(x = 0, y = 0, w = 0, h = 0) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        /**
         * Set new values to all properties of the box.
         *
         * @param x New X value.
         * @param y New y value.
         * @param w New w value.
         * @param h New h value.
         */
        set(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        /**
         * Test box for inclusion of point.
         *
         * @param x X coordinate of point.
         * @param y Y coordinate of point.
         */
        contains(x, y) {
            return this.x <= x && this.x + this.w >= x && this.y <= y && this.y + this.h >= y;
        }
        /**
         * Test two boxes for intersection.
         *
         * @param other Box 2 to test for intersection.
         */
        intersects(other) {
            return (this.x <= other.x + other.w &&
                this.x + this.w >= other.x &&
                this.y <= other.y + other.h &&
                this.y + this.h >= other.y);
        }
    }
    Math2D.Box = Box;
    /**
     * Compute squared distance between two 2D points `a` and `b`.
     *
     * @param ax Point a.x
     * @param ay Point a.y
     * @param bx Point b.x
     * @param by Point b.y
     * @returns Squared distance between the two points
     */
    function distSquared(ax, ay, bx, by) {
        return (ax - bx) * (ax - bx) + (ay - by) * (ay - by);
    }
    Math2D.distSquared = distSquared;
    /**
     * Computes the squared length of a line.
     *
     * @param line An array of that forms a line via [x,y,z,x,y,z,...] tuples.
     */
    function computeSquaredLineLength(line) {
        let squaredLineLength = 0;
        const length = line.length - 4;
        for (let i = 0; i < length; i += 3) {
            const xDiff = line[i + 3] - line[i];
            const yDiff = line[i + 4] - line[i + 1];
            squaredLineLength += xDiff * xDiff + yDiff * yDiff;
        }
        return squaredLineLength;
    }
    Math2D.computeSquaredLineLength = computeSquaredLineLength;
    /**
     * Compute squared distance between a 2D point and a 2D line segment.
     *
     * @param px Test point X
     * @param py Test point y
     * @param l0x Line segment start X
     * @param l0y Line segment start Y
     * @param l1x Line segment end X
     * @param l1y Line segment end Y
     * @returns Squared distance between point and line segment
     */
    function distToSegmentSquared(px, py, l0x, l0y, l1x, l1y) {
        const lineLengthSuared = distSquared(l0x, l0y, l1x, l1y);
        if (lineLengthSuared === 0) {
            return distSquared(px, py, l0x, l0y);
        }
        let t = ((px - l0x) * (l1x - l0x) + (py - l0y) * (l1y - l0y)) / lineLengthSuared;
        t = Math.max(0, Math.min(1, t));
        return distSquared(px, py, l0x + t * (l1x - l0x), l0y + t * (l1y - l0y));
    }
    Math2D.distToSegmentSquared = distToSegmentSquared;
})(Math2D = exports.Math2D || (exports.Math2D = {}));


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/MathUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/MathUtils.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils;
(function (MathUtils) {
    /**
     * Ensures that input value fits in a given range.
     *
     * @param value The value to be clamped.
     * @param min Minimum value.
     * @param max Maximum value.
     *
     * @returns Clamped value.
     */
    function clamp(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }
    MathUtils.clamp = clamp;
    /**
     * Returns a smooth interpolation between the values edge0 and edge1 based on the interpolation
     * factor x. `0 <= x <= 1`.
     * @see https://en.wikipedia.org/wiki/Smoothstep
     *
     * @param edge0
     * @param edge1
     * @param x
     */
    function smoothStep(edge0, edge1, x) {
        // Scale, bias and saturate x to 0..1 range
        x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        // Evaluate polynomial
        return x * x * (3 - 2 * x);
    }
    MathUtils.smoothStep = smoothStep;
    /**
     * Returns a smooth interpolation between the values edge0 and edge1 based on the interpolation
     * factor x. `0 <= x <= 1`.
     *
     * Improved version by Ken Perlin, which has zero 1st- and 2nd-order derivatives at `x = 0` and
     * `x = 1`:
     *
     * @see https://en.wikipedia.org/wiki/Smoothstep
     *
     * @param edge0
     * @param edge1
     * @param x
     */
    function smootherStep(edge0, edge1, x) {
        // Scale, and clamp x to 0..1 range
        x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        // Evaluate polynomial
        return x * x * x * (x * (x * 6 - 15) + 10);
    }
    MathUtils.smootherStep = smootherStep;
    /**
     * Maps a number from one range to another.
     *
     * @param val The incoming value to be converted.
     * @param inMin Lower bound of the value's current range.
     * @param inMax Upper bound of the value's current range.
     * @param outMin Lower bound of the value's target range.
     * @param outMax Upper bound of the value's target range.
     */
    function lerp(val, inMin, inMax, outMin, outMax) {
        return ((val - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    MathUtils.lerp = lerp;
    /**
     * Returns the smaller of the two given numbers. Both numbers may be undefined, in which case
     * the result is undefined. If only one of the numbers is undefined, the other number is
     * returned.
     *
     * @param a First number.
     * @param b Second number.
     */
    function min2(a, b) {
        let result;
        if (a !== undefined) {
            result = a;
        }
        if (b !== undefined) {
            result = result === undefined ? b : Math.min(result, b);
        }
        return result;
    }
    MathUtils.min2 = min2;
    /**
     * Returns the larger of the two given numbers. Both numbers may be undefined, in which case
     * the result is undefined. If only one of the numbers is undefined, the other number is
     * returned.
     *
     * @param a First number.
     * @param b Second number.
     */
    function max2(a, b) {
        let result;
        if (a !== undefined) {
            result = a;
        }
        if (b !== undefined) {
            result = result === undefined ? b : Math.max(result, b);
        }
        return result;
    }
    MathUtils.max2 = max2;
    /**
     * Checks if the value of a given number is inside an upper or lower bound. The bounds may be
     * undefined, in which case their value is ignored.
     *
     * @param value Value to check.
     * @param lowerBound The lower bound to check the value against.
     * @param upperBound The upper bound to check the value against.
     *
     * @returns `true` if value is inside the bounds or if the bounds are `undefined`, `false`
     *          otherwise.
     */
    function isClamped(value, lowerBound, upperBound) {
        if (lowerBound !== undefined && value < lowerBound) {
            return false;
        }
        if (upperBound !== undefined && value > upperBound) {
            return false;
        }
        return true;
    }
    MathUtils.isClamped = isClamped;
    /**
     * Smoothly interpolates between two values using cubic formula
     *
     * @param startValue
     * @param endValue
     * @param time
     * @returns Result of the interpolation within the range of `[startValue, endValue]`
     */
    function easeInOutCubic(startValue, endValue, time) {
        const timeValue = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
        return startValue + (endValue - startValue) * timeValue;
    }
    MathUtils.easeInOutCubic = easeInOutCubic;
})(MathUtils = exports.MathUtils || (exports.MathUtils = {}));


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/Mixins.js":
/*!*****************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/Mixins.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copy methods and properties from one prototype into another.
 *
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor Class to mix methods and properties into.
 * @param baseCtors Class to take all methods and properties from.
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
/**
 * Copy methods from one prototype into another.
 *
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor Class to mix methods into.
 * @param baseCtors Class to take all methods from.
 */
function applyMixinsWithoutProperties(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            if (descriptor !== undefined && descriptor.get === undefined) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
exports.applyMixinsWithoutProperties = applyMixinsWithoutProperties;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/OptionsUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/OptionsUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getOptionValue(...values) {
    for (const candidate of values) {
        if (candidate !== undefined && candidate !== null) {
            return candidate;
        }
    }
    return undefined;
}
exports.getOptionValue = getOptionValue;
/**
 * Merge options into existing parameters object.
 *
 * Convenience helper with _similar_ semantics as:
 *
 *     const finalParams1 = { ...defaults, ... options };
 *     const finalParams2 = Object.assign({}, defaults, options);
 *
 * This function doesn't copy _extra_ properties of `options` that doesn't exist in `defaults`.
 * `defaults` is used as _parameters_ template.
 *
 * This doc uses following notion of `option` and `parameter` terms:
 * * `parameter` is a variable, or 'almost constant' of procedure/function/algorith/object
 *    * `parameter` usually have sensible and usually used default
 *    * `parameter` is always defined (no `undefined`, `null` or `?` in type)
 *    * `parameter` can be overriden by specyfying `option` with same name
 * * `option` means value that may be passed optionally, overrides `parameter` value with same name
 *
 * Usage:
 *
 *     interface FooParams {
 *         useTextures: boolean;
 *         opacity: number;
 *     }
 *
 *     const FOO_DEFAULTS: FooParams = {
 *         useTextures: true,
 *         opacity: 0.8
 *     };
 *
 *     type FooOptions = Partial<FooParams>;
 *
 *     function doSomething(options: FooOptions) {
 *         const params = mergeWithOptions(FOO_DEFAULTS, options);
 *             // typeof params === FooParams
 *             // params.opacity = 0.5
 *             // params.useTextures = true
 *             // params.someOtherOptionFromOtherApi is not defined
 *     }
 *     const opt = {opacity: 0.5, someOtherOptionFromOtherApi: 'aaa'};
 *     doSomething(opt);
 *
 * Rationale:
 *   * both `Object.assign` and spread operator copy extra options
 *   * `Object.assign` & `spread operator` may copy `undefined` and `null`s if they really exist
 *     in options object
 *
 * @param parameters parmeters template object holding all expected parameters
 * @param options options object
 * @returns new object with `parameters` overriden by values from `options`
 */
function mergeWithOptions(parameters, options) {
    // NOTE: `as object` needed due to TypeScript bug:
    //       https://github.com/Microsoft/TypeScript/issues/14409
    // tslint:disable-next-line:no-object-literal-type-assertion
    const result = Object.assign({}, parameters);
    if (options === undefined || options === null) {
        return result;
    }
    for (const prop in parameters) {
        if (parameters.hasOwnProperty(prop)) {
            const optionValue = options[prop];
            if (optionValue !== undefined && optionValue !== null) {
                result[prop] = optionValue;
            }
        }
    }
    return result;
}
exports.mergeWithOptions = mergeWithOptions;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/PerformanceTimer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/PerformanceTimer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
/**
 * See:
 * https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now
 */
/* tslint:ensable:max-line-length */
class PerformanceTimer {
    /**
     * Returns timestamp in milliseconds since page load.
     *
     * If the [[DOMHighResTimeStamp]] is supported, the resolution is up to 5 microseconds,
     * otherwise it is in milliseconds. Timespans are computed by taking the difference between two
     * samples.
     *
     * Example:
     * ```typescript
     * const now = PerformanceTimer.now();
     * // call some expensive function for which you want to check the duration.
     * const end = PerformanceTimer.now();
     * const elapsedTime = end - now;
     * ```
     */
    static now() {
        return PerformanceTimer.nowFunc();
    }
    static getNowFunc() {
        if (typeof performance !== "undefined" && typeof performance.now !== "undefined") {
            return () => performance.now();
        }
        // fall back to Date.getTime()
        return () => {
            return new Date().getTime();
        };
    }
}
// tslint:disable-next-line:no-unused-variable
PerformanceTimer.instance = new PerformanceTimer();
PerformanceTimer.nowFunc = PerformanceTimer.getNowFunc();
exports.PerformanceTimer = PerformanceTimer;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/UrlResolver.js":
/*!**********************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/UrlResolver.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resolves URL using default URL resolver.
 *
 * By default URL resolver is just identity function, it can be changed using
 * [[setDefaultUrlResolver].
 */
function defaultUrlResolver(url) {
    if (customDefaultUrlResolver !== undefined) {
        return customDefaultUrlResolver(url);
    }
    else {
        return url;
    }
}
exports.defaultUrlResolver = defaultUrlResolver;
/**
 * Change resolver used by [[defaultUrlResolver]].
 *
 * `undefined` resets default resolver to identity function.
 *
 * @param resolver
 */
function setDefaultUrlResolver(resolver) {
    customDefaultUrlResolver = resolver;
}
exports.setDefaultUrlResolver = setDefaultUrlResolver;
let customDefaultUrlResolver;
/**
 * Compose URL resolvers.
 *
 * Creates new `UrlResolver` that applies resolvers in orders or arguments.
 *
 * Example:
 *
 *     const themeUrl = ...; // url of parent object
 *     const childUrlResolver = composeUrlResolvers(
 *           (childUrl: string) => resolveReferenceUrl(themeUrl, childUrl),
 *           defaultUrlResolver
 *     );
 */
function composeUrlResolvers(...resolvers) {
    return (originalUrl) => {
        return resolvers.reduce((url, resolver) => {
            if (resolver !== undefined) {
                return resolver(url);
            }
            else {
                return url;
            }
        }, originalUrl);
    };
}
exports.composeUrlResolvers = composeUrlResolvers;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/UrlUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/UrlUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resolve URL of referenced object.
 *
 * Resolves `childUrl` as it would be loaded from location specified by `parentUrl`.
 *
 * If `childUrl` is absolute, then it is returned unchanged.
 * If `childUrl` is origin-absolute path, then only origin path is taken from `parentUrl`.
 *
 * See [[baseUrl]] for reference how base URL of `parentUrl` is determined.
 *
 * Examples:
 *
 *     // normal case, child is sibling
 *     https://foo.com/themes/day.json + images/foo.png -> https://foo.com/themes/images/foo.png
 *
 *     // parent is "folder", so child is just located in this folder
 *     https://foo.com/themes/ + images/foo.png -> https://foo.com/themes/images/foo.png
 *
 *     // parent looks like leaf, so last component is stripped
 *     https://foo.com/themes + images/foo.png -> https://foo.com/images/foo.png
 *
 *     // origin-absolute URL, takes only origin from parent
 *     https://foo.com/themes/day.json + /fonts/foo.json -> https://foo.com/fonts/foo.json
 *
 * @param parentUrl URL of parent resource
 * @param childUrl URL of child as referenced from parent resource
 * @return `childUrl` as if anchored in location of `parentUrl`
 */
function resolveReferenceUrl(parentUrl, childUrl) {
    if (absoluteUrlWithOriginRe.test(childUrl)) {
        return childUrl;
    }
    else if (childUrl.startsWith("/")) {
        const origin = getUrlOrigin(parentUrl);
        return origin + childUrl;
    }
    else {
        if (childUrl.startsWith("./")) {
            childUrl = childUrl.substr(2);
        }
        const parentBaseUrl = baseUrl(parentUrl);
        return parentBaseUrl + childUrl;
    }
}
exports.resolveReferenceUrl = resolveReferenceUrl;
const absoluteUrlWithOriginRe = new RegExp("^(?:[a-z]+:)?//", "i");
/**
 * Returns base URL of given resource URL.
 *
 * `Url` with trailing slash are considered genuine 'locations', they are returned as is, however if
 * `url` ends with name component it is treated as "leaf", so last path component is removed.
 *
 * Standalone files (without any folder structure) are considered relative to `./`.
 *
 * Examples:
 * ```
 *     https://foo.com/themes/a.json -> https://foo.com/themes/
 *     https://foo.com/themes/ -> https://foo.com/themes/
 *     https://foo.com/themes -> https://foo.com/ // note, themes is treated as leaf
 *     themes/day.json -> themes/
 *     themes -> ./
 * ```
 */
function baseUrl(url) {
    if (url === undefined) {
        return "./";
    }
    const idx = url.lastIndexOf("/");
    if (idx === -1) {
        return "./";
    }
    else {
        return url.substring(0, idx + 1);
    }
}
exports.baseUrl = baseUrl;
/**
 * Get `origin` part of URL.
 *
 * @example
 *    https://example.com/foo -> https://example.com
 *    //example.com:8080/ -> //example.com:8080
 *    file:///etc/hosts ->
 *
 * @param url input URL
 * @return origin of given URL
 */
function getUrlOrigin(url) {
    if (url === undefined) {
        return "";
    }
    const parsed = getUrlHostAndProtocol(url);
    if (parsed.protocol === "file:") {
        return "file://";
    }
    else if (parsed.host && parsed.protocol) {
        return parsed.protocol + "//" + parsed.host;
    }
    else if (parsed.host) {
        return "//" + parsed.host;
    }
    else if (parsed.protocol) {
        return parsed.protocol + "//";
    }
    else {
        return "";
    }
}
exports.getUrlOrigin = getUrlOrigin;
/**
 * Parse `host` and `protocol` part from URL.
 */
function getUrlHostAndProtocol(url) {
    const urlOriginRe = new RegExp(/^(?:([a-z]+:))?\/\/([^\/]*)/, "i");
    const match = url.match(urlOriginRe);
    if (!match) {
        throw new Error(`getUrlHostAndProtocol: unable to parse URL '${url}'`);
    }
    return {
        protocol: match[1],
        host: match[2]
    };
}
exports.getUrlHostAndProtocol = getUrlHostAndProtocol;


/***/ }),

/***/ "./node_modules/@here/harp-utils/lib/assert.js":
/*!*****************************************************!*\
  !*** ./node_modules/@here/harp-utils/lib/assert.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
// cache value, because access to process.env.NODE_ENV is SLOW!
const isProduction = "development" === "production";
//TODO: Make assertHandler configurable
/**
 * Implementation of assert as a development help
 *
 * Note - this is deliberately a global function so that minimizers remove the
 * entire call when building for production.
 *
 * @hidden
 * @param condition Condition to match, if false, throws an Error(message)
 * @param message Optional message, defaults to "ASSERTION failed"
 */
function assert(condition, message) {
    if (!isProduction) {
        if (!condition) {
            throw new Error(message !== undefined ? message : "ASSERTION failed");
        }
    }
}
exports.assert = assert;
function assertExists(element, message) {
    if (!isProduction) {
        if (element === undefined || element === null) {
            throw new Error(message !== undefined ? message : "ASSERTION failed: Element is undefined or null");
        }
    }
    return element;
}
exports.assertExists = assertExists;


/***/ }),

/***/ "./node_modules/@protobufjs/aspromise/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@protobufjs/aspromise/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/@protobufjs/base64/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@protobufjs/base64/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "./node_modules/@protobufjs/eventemitter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@protobufjs/eventemitter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "./node_modules/@protobufjs/float/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@protobufjs/float/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "./node_modules/@protobufjs/inquire/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@protobufjs/inquire/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "./node_modules/@protobufjs/pool/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/pool/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "./node_modules/@protobufjs/utf8/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/utf8/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "./node_modules/earcut/src/earcut.js":
/*!*******************************************!*\
  !*** ./node_modules/earcut/src/earcut.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ }),

/***/ "./node_modules/geojson-vt/src/clip.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-vt/src/clip.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clip; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/geojson-vt/src/feature.js");



/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   \____|____/
 *     |        |
 */

function clip(features, scale, k1, k2, axis, minAll, maxAll, options) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll < k2) return features; // trivial accept
    else if (maxAll < k1 || minAll >= k2) return null; // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i];
        var geometry = feature.geometry;
        var type = feature.type;

        var min = axis === 0 ? feature.minX : feature.minY;
        var max = axis === 0 ? feature.maxX : feature.maxY;

        if (min >= k1 && max < k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (max < k1 || min >= k2) { // trivial reject
            continue;
        }

        var newGeometry = [];

        if (type === 'Point' || type === 'MultiPoint') {
            clipPoints(geometry, newGeometry, k1, k2, axis);

        } else if (type === 'LineString') {
            clipLine(geometry, newGeometry, k1, k2, axis, false, options.lineMetrics);

        } else if (type === 'MultiLineString') {
            clipLines(geometry, newGeometry, k1, k2, axis, false);

        } else if (type === 'Polygon') {
            clipLines(geometry, newGeometry, k1, k2, axis, true);

        } else if (type === 'MultiPolygon') {
            for (var j = 0; j < geometry.length; j++) {
                var polygon = [];
                clipLines(geometry[j], polygon, k1, k2, axis, true);
                if (polygon.length) {
                    newGeometry.push(polygon);
                }
            }
        }

        if (newGeometry.length) {
            if (options.lineMetrics && type === 'LineString') {
                for (j = 0; j < newGeometry.length; j++) {
                    clipped.push(Object(_feature__WEBPACK_IMPORTED_MODULE_0__["default"])(feature.id, type, newGeometry[j], feature.tags));
                }
                continue;
            }

            if (type === 'LineString' || type === 'MultiLineString') {
                if (newGeometry.length === 1) {
                    type = 'LineString';
                    newGeometry = newGeometry[0];
                } else {
                    type = 'MultiLineString';
                }
            }
            if (type === 'Point' || type === 'MultiPoint') {
                type = newGeometry.length === 3 ? 'Point' : 'MultiPoint';
            }

            clipped.push(Object(_feature__WEBPACK_IMPORTED_MODULE_0__["default"])(feature.id, type, newGeometry, feature.tags));
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geom, newGeom, k1, k2, axis) {
    for (var i = 0; i < geom.length; i += 3) {
        var a = geom[i + axis];

        if (a >= k1 && a <= k2) {
            newGeom.push(geom[i]);
            newGeom.push(geom[i + 1]);
            newGeom.push(geom[i + 2]);
        }
    }
}

function clipLine(geom, newGeom, k1, k2, axis, isPolygon, trackMetrics) {

    var slice = newSlice(geom);
    var intersect = axis === 0 ? intersectX : intersectY;
    var len = geom.start;
    var segLen, t;

    for (var i = 0; i < geom.length - 3; i += 3) {
        var ax = geom[i];
        var ay = geom[i + 1];
        var az = geom[i + 2];
        var bx = geom[i + 3];
        var by = geom[i + 4];
        var a = axis === 0 ? ax : ay;
        var b = axis === 0 ? bx : by;
        var exited = false;

        if (trackMetrics) segLen = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));

        if (a < k1) {
            // ---|-->  | (line enters the clip region from the left)
            if (b > k1) {
                t = intersect(slice, ax, ay, bx, by, k1);
                if (trackMetrics) slice.start = len + segLen * t;
            }
        } else if (a > k2) {
            // |  <--|--- (line enters the clip region from the right)
            if (b < k2) {
                t = intersect(slice, ax, ay, bx, by, k2);
                if (trackMetrics) slice.start = len + segLen * t;
            }
        } else {
            addPoint(slice, ax, ay, az);
        }
        if (b < k1 && a >= k1) {
            // <--|---  | or <--|-----|--- (line exits the clip region on the left)
            t = intersect(slice, ax, ay, bx, by, k1);
            exited = true;
        }
        if (b > k2 && a <= k2) {
            // |  ---|--> or ---|-----|--> (line exits the clip region on the right)
            t = intersect(slice, ax, ay, bx, by, k2);
            exited = true;
        }

        if (!isPolygon && exited) {
            if (trackMetrics) slice.end = len + segLen * t;
            newGeom.push(slice);
            slice = newSlice(geom);
        }

        if (trackMetrics) len += segLen;
    }

    // add the last point
    var last = geom.length - 3;
    ax = geom[last];
    ay = geom[last + 1];
    az = geom[last + 2];
    a = axis === 0 ? ax : ay;
    if (a >= k1 && a <= k2) addPoint(slice, ax, ay, az);

    // close the polygon if its endpoints are not the same after clipping
    last = slice.length - 3;
    if (isPolygon && last >= 3 && (slice[last] !== slice[0] || slice[last + 1] !== slice[1])) {
        addPoint(slice, slice[0], slice[1], slice[2]);
    }

    // add the final slice
    if (slice.length) {
        newGeom.push(slice);
    }
}

function newSlice(line) {
    var slice = [];
    slice.size = line.size;
    slice.start = line.start;
    slice.end = line.end;
    return slice;
}

function clipLines(geom, newGeom, k1, k2, axis, isPolygon) {
    for (var i = 0; i < geom.length; i++) {
        clipLine(geom[i], newGeom, k1, k2, axis, isPolygon, false);
    }
}

function addPoint(out, x, y, z) {
    out.push(x);
    out.push(y);
    out.push(z);
}

function intersectX(out, ax, ay, bx, by, x) {
    var t = (x - ax) / (bx - ax);
    out.push(x);
    out.push(ay + (by - ay) * t);
    out.push(1);
    return t;
}

function intersectY(out, ax, ay, bx, by, y) {
    var t = (y - ay) / (by - ay);
    out.push(ax + (bx - ax) * t);
    out.push(y);
    out.push(1);
    return t;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/convert.js":
/*!************************************************!*\
  !*** ./node_modules/geojson-vt/src/convert.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convert; });
/* harmony import */ var _simplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplify */ "./node_modules/geojson-vt/src/simplify.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "./node_modules/geojson-vt/src/feature.js");




// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data

function convert(data, options) {
    var features = [];
    if (data.type === 'FeatureCollection') {
        for (var i = 0; i < data.features.length; i++) {
            convertFeature(features, data.features[i], options, i);
        }

    } else if (data.type === 'Feature') {
        convertFeature(features, data, options);

    } else {
        // single geometry or a geometry collection
        convertFeature(features, {geometry: data}, options);
    }

    return features;
}

function convertFeature(features, geojson, options, index) {
    if (!geojson.geometry) return;

    var coords = geojson.geometry.coordinates;
    var type = geojson.geometry.type;
    var tolerance = Math.pow(options.tolerance / ((1 << options.maxZoom) * options.extent), 2);
    var geometry = [];
    var id = geojson.id;
    if (options.promoteId) {
        id = geojson.properties[options.promoteId];
    } else if (options.generateId) {
        id = index || 0;
    }
    if (type === 'Point') {
        convertPoint(coords, geometry);

    } else if (type === 'MultiPoint') {
        for (var i = 0; i < coords.length; i++) {
            convertPoint(coords[i], geometry);
        }

    } else if (type === 'LineString') {
        convertLine(coords, geometry, tolerance, false);

    } else if (type === 'MultiLineString') {
        if (options.lineMetrics) {
            // explode into linestrings to be able to track metrics
            for (i = 0; i < coords.length; i++) {
                geometry = [];
                convertLine(coords[i], geometry, tolerance, false);
                features.push(Object(_feature__WEBPACK_IMPORTED_MODULE_1__["default"])(id, 'LineString', geometry, geojson.properties));
            }
            return;
        } else {
            convertLines(coords, geometry, tolerance, false);
        }

    } else if (type === 'Polygon') {
        convertLines(coords, geometry, tolerance, true);

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < coords.length; i++) {
            var polygon = [];
            convertLines(coords[i], polygon, tolerance, true);
            geometry.push(polygon);
        }
    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geojson.geometry.geometries.length; i++) {
            convertFeature(features, {
                id: id,
                geometry: geojson.geometry.geometries[i],
                properties: geojson.properties
            }, options, index);
        }
        return;
    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }

    features.push(Object(_feature__WEBPACK_IMPORTED_MODULE_1__["default"])(id, type, geometry, geojson.properties));
}

function convertPoint(coords, out) {
    out.push(projectX(coords[0]));
    out.push(projectY(coords[1]));
    out.push(0);
}

function convertLine(ring, out, tolerance, isPolygon) {
    var x0, y0;
    var size = 0;

    for (var j = 0; j < ring.length; j++) {
        var x = projectX(ring[j][0]);
        var y = projectY(ring[j][1]);

        out.push(x);
        out.push(y);
        out.push(0);

        if (j > 0) {
            if (isPolygon) {
                size += (x0 * y - x * y0) / 2; // area
            } else {
                size += Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)); // length
            }
        }
        x0 = x;
        y0 = y;
    }

    var last = out.length - 3;
    out[2] = 1;
    Object(_simplify__WEBPACK_IMPORTED_MODULE_0__["default"])(out, 0, last, tolerance);
    out[last + 2] = 1;

    out.size = Math.abs(size);
    out.start = 0;
    out.end = out.size;
}

function convertLines(rings, out, tolerance, isPolygon) {
    for (var i = 0; i < rings.length; i++) {
        var geom = [];
        convertLine(rings[i], geom, tolerance, isPolygon);
        out.push(geom);
    }
}

function projectX(x) {
    return x / 360 + 0.5;
}

function projectY(y) {
    var sin = Math.sin(y * Math.PI / 180);
    var y2 = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y2 < 0 ? 0 : y2 > 1 ? 1 : y2;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/feature.js":
/*!************************************************!*\
  !*** ./node_modules/geojson-vt/src/feature.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFeature; });

function createFeature(id, type, geom, tags) {
    var feature = {
        id: typeof id === 'undefined' ? null : id,
        type: type,
        geometry: geom,
        tags: tags,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
    calcBBox(feature);
    return feature;
}

function calcBBox(feature) {
    var geom = feature.geometry;
    var type = feature.type;

    if (type === 'Point' || type === 'MultiPoint' || type === 'LineString') {
        calcLineBBox(feature, geom);

    } else if (type === 'Polygon' || type === 'MultiLineString') {
        for (var i = 0; i < geom.length; i++) {
            calcLineBBox(feature, geom[i]);
        }

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < geom.length; i++) {
            for (var j = 0; j < geom[i].length; j++) {
                calcLineBBox(feature, geom[i][j]);
            }
        }
    }
}

function calcLineBBox(feature, geom) {
    for (var i = 0; i < geom.length; i += 3) {
        feature.minX = Math.min(feature.minX, geom[i]);
        feature.minY = Math.min(feature.minY, geom[i + 1]);
        feature.maxX = Math.max(feature.maxX, geom[i]);
        feature.maxY = Math.max(feature.maxY, geom[i + 1]);
    }
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/geojson-vt/src/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return geojsonvt; });
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert */ "./node_modules/geojson-vt/src/convert.js");
/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clip */ "./node_modules/geojson-vt/src/clip.js");
/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap */ "./node_modules/geojson-vt/src/wrap.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform */ "./node_modules/geojson-vt/src/transform.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile */ "./node_modules/geojson-vt/src/tile.js");

     // GeoJSON conversion and preprocessing
           // stripe clipping algorithm
           // date line processing
 // coordinate transformation
     // final simplified tile generation

function geojsonvt(data, options) {
    return new GeoJSONVT(data, options);
}

function GeoJSONVT(data, options) {
    options = this.options = extend(Object.create(this.options), options);

    var debug = options.debug;

    if (debug) console.time('preprocess data');

    if (options.maxZoom < 0 || options.maxZoom > 24) throw new Error('maxZoom should be in the 0-24 range');
    if (options.promoteId && options.generateId) throw new Error('promoteId and generateId cannot be used together.');

    var features = Object(_convert__WEBPACK_IMPORTED_MODULE_0__["default"])(data, options);

    this.tiles = {};
    this.tileCoords = [];

    if (debug) {
        console.timeEnd('preprocess data');
        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);
        console.time('generate tiles');
        this.stats = {};
        this.total = 0;
    }

    features = Object(_wrap__WEBPACK_IMPORTED_MODULE_2__["default"])(features, options);

    // start slicing from the top tile down
    if (features.length) this.splitTile(features, 0, 0, 0);

    if (debug) {
        if (features.length) console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints);
        console.timeEnd('generate tiles');
        console.log('tiles generated:', this.total, JSON.stringify(this.stats));
    }
}

GeoJSONVT.prototype.options = {
    maxZoom: 14,            // max zoom to preserve detail on
    indexMaxZoom: 5,        // max zoom in the tile index
    indexMaxPoints: 100000, // max number of points per tile in the tile index
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    lineMetrics: false,     // whether to calculate line metrics
    promoteId: null,        // name of a feature property to be promoted to feature.id
    generateId: false,      // whether to generate feature ids. Cannot be used with promoteId
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {

    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug;

    // avoid recursion by using a processing queue
    while (stack.length) {
        y = stack.pop();
        x = stack.pop();
        z = stack.pop();
        features = stack.pop();

        var z2 = 1 << z,
            id = toID(z, x, y),
            tile = this.tiles[id];

        if (!tile) {
            if (debug > 1) console.time('creation');

            tile = this.tiles[id] = Object(_tile__WEBPACK_IMPORTED_MODULE_4__["default"])(features, z, x, y, options);
            this.tileCoords.push({z: z, x: x, y: y});

            if (debug) {
                if (debug > 1) {
                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',
                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);
                    console.timeEnd('creation');
                }
                var key = 'z' + z;
                this.stats[key] = (this.stats[key] || 0) + 1;
                this.total++;
            }
        }

        // save reference to original geometry in tile so that we can drill down later if we stop now
        tile.source = features;

        // if it's the first-pass tiling
        if (!cz) {
            // stop tiling if we reached max zoom, or if the tile is too simple
            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) continue;

        // if a drilldown to a specific tile
        } else {
            // stop tiling if we reached base zoom or our target tile zoom
            if (z === options.maxZoom || z === cz) continue;

            // stop tiling if it's not an ancestor of the target tile
            var m = 1 << (cz - z);
            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) continue;
        }

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (features.length === 0) continue;

        if (debug > 1) console.time('clipping');

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = Object(_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(features, z2, x - k1, x + k3, 0, tile.minX, tile.maxX, options);
        right = Object(_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(features, z2, x + k2, x + k4, 0, tile.minX, tile.maxX, options);
        features = null;

        if (left) {
            tl = Object(_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(left, z2, y - k1, y + k3, 1, tile.minY, tile.maxY, options);
            bl = Object(_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(left, z2, y + k2, y + k4, 1, tile.minY, tile.maxY, options);
            left = null;
        }

        if (right) {
            tr = Object(_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(right, z2, y - k1, y + k3, 1, tile.minY, tile.maxY, options);
            br = Object(_clip__WEBPACK_IMPORTED_MODULE_1__["default"])(right, z2, y + k2, y + k4, 1, tile.minY, tile.maxY, options);
            right = null;
        }

        if (debug > 1) console.timeEnd('clipping');

        stack.push(tl || [], z + 1, x * 2,     y * 2);
        stack.push(bl || [], z + 1, x * 2,     y * 2 + 1);
        stack.push(tr || [], z + 1, x * 2 + 1, y * 2);
        stack.push(br || [], z + 1, x * 2 + 1, y * 2 + 1);
    }
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    if (z < 0 || z > 24) return null;

    var z2 = 1 << z;
    x = ((x % z2) + z2) % z2; // wrap tile x coordinate

    var id = toID(z, x, y);
    if (this.tiles[id]) return Object(_transform__WEBPACK_IMPORTED_MODULE_3__["default"])(this.tiles[id], extent);

    if (debug > 1) console.log('drilling down to z%d-%d-%d', z, x, y);

    var z0 = z,
        x0 = x,
        y0 = y,
        parent;

    while (!parent && z0 > 0) {
        z0--;
        x0 = Math.floor(x0 / 2);
        y0 = Math.floor(y0 / 2);
        parent = this.tiles[toID(z0, x0, y0)];
    }

    if (!parent || !parent.source) return null;

    // if we found a parent tile containing the original geometry, we can drill down from it
    if (debug > 1) console.log('found parent tile z%d-%d-%d', z0, x0, y0);

    if (debug > 1) console.time('drilling down');
    this.splitTile(parent.source, z0, x0, y0, z, x, y);
    if (debug > 1) console.timeEnd('drilling down');

    return this.tiles[id] ? Object(_transform__WEBPACK_IMPORTED_MODULE_3__["default"])(this.tiles[id], extent) : null;
};

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/simplify.js":
/*!*************************************************!*\
  !*** ./node_modules/geojson-vt/src/simplify.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simplify; });

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify(coords, first, last, sqTolerance) {
    var maxSqDist = sqTolerance;
    var mid = (last - first) >> 1;
    var minPosToMid = last - first;
    var index;

    var ax = coords[first];
    var ay = coords[first + 1];
    var bx = coords[last];
    var by = coords[last + 1];

    for (var i = first + 3; i < last; i += 3) {
        var d = getSqSegDist(coords[i], coords[i + 1], ax, ay, bx, by);

        if (d > maxSqDist) {
            index = i;
            maxSqDist = d;

        } else if (d === maxSqDist) {
            // a workaround to ensure we choose a pivot close to the middle of the list,
            // reducing recursion depth, for certain degenerate inputs
            // https://github.com/mapbox/geojson-vt/issues/104
            var posToMid = Math.abs(i - mid);
            if (posToMid < minPosToMid) {
                index = i;
                minPosToMid = posToMid;
            }
        }
    }

    if (maxSqDist > sqTolerance) {
        if (index - first > 3) simplify(coords, first, index, sqTolerance);
        coords[index + 2] = maxSqDist;
        if (last - index > 3) simplify(coords, index, last, sqTolerance);
    }
}

// square distance from a point to a segment
function getSqSegDist(px, py, x, y, bx, by) {

    var dx = bx - x;
    var dy = by - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = bx;
            y = by;

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/tile.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-vt/src/tile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTile; });

function createTile(features, z, tx, ty, options) {
    var tolerance = z === options.maxZoom ? 0 : options.tolerance / ((1 << z) * options.extent);
    var tile = {
        features: [],
        numPoints: 0,
        numSimplified: 0,
        numFeatures: 0,
        source: null,
        x: tx,
        y: ty,
        z: z,
        transformed: false,
        minX: 2,
        minY: 1,
        maxX: -1,
        maxY: 0
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, options);

        var minX = features[i].minX;
        var minY = features[i].minY;
        var maxX = features[i].maxX;
        var maxY = features[i].maxY;

        if (minX < tile.minX) tile.minX = minX;
        if (minY < tile.minY) tile.minY = minY;
        if (maxX > tile.maxX) tile.maxX = maxX;
        if (maxY > tile.maxY) tile.maxY = maxY;
    }
    return tile;
}

function addFeature(tile, feature, tolerance, options) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [];

    if (type === 'Point' || type === 'MultiPoint') {
        for (var i = 0; i < geom.length; i += 3) {
            simplified.push(geom[i]);
            simplified.push(geom[i + 1]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else if (type === 'LineString') {
        addLine(simplified, geom, tile, tolerance, false, false);

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        for (i = 0; i < geom.length; i++) {
            addLine(simplified, geom[i], tile, tolerance, type === 'Polygon', i === 0);
        }

    } else if (type === 'MultiPolygon') {

        for (var k = 0; k < geom.length; k++) {
            var polygon = geom[k];
            for (i = 0; i < polygon.length; i++) {
                addLine(simplified, polygon[i], tile, tolerance, true, i === 0);
            }
        }
    }

    if (simplified.length) {
        var tags = feature.tags || null;
        if (type === 'LineString' && options.lineMetrics) {
            tags = {};
            for (var key in feature.tags) tags[key] = feature.tags[key];
            tags['mapbox_clip_start'] = geom.start / geom.size;
            tags['mapbox_clip_end'] = geom.end / geom.size;
        }
        var tileFeature = {
            geometry: simplified,
            type: type === 'Polygon' || type === 'MultiPolygon' ? 3 :
                type === 'LineString' || type === 'MultiLineString' ? 2 : 1,
            tags: tags
        };
        if (feature.id !== null) {
            tileFeature.id = feature.id;
        }
        tile.features.push(tileFeature);
    }
}

function addLine(result, geom, tile, tolerance, isPolygon, isOuter) {
    var sqTolerance = tolerance * tolerance;

    if (tolerance > 0 && (geom.size < (isPolygon ? sqTolerance : tolerance))) {
        tile.numPoints += geom.length / 3;
        return;
    }

    var ring = [];

    for (var i = 0; i < geom.length; i += 3) {
        if (tolerance === 0 || geom[i + 2] > sqTolerance) {
            tile.numSimplified++;
            ring.push(geom[i]);
            ring.push(geom[i + 1]);
        }
        tile.numPoints++;
    }

    if (isPolygon) rewind(ring, isOuter);

    result.push(ring);
}

function rewind(ring, clockwise) {
    var area = 0;
    for (var i = 0, len = ring.length, j = len - 2; i < len; j = i, i += 2) {
        area += (ring[i] - ring[j]) * (ring[i + 1] + ring[j + 1]);
    }
    if (area > 0 === clockwise) {
        for (i = 0, len = ring.length; i < len / 2; i += 2) {
            var x = ring[i];
            var y = ring[i + 1];
            ring[i] = ring[len - 2 - i];
            ring[i + 1] = ring[len - 1 - i];
            ring[len - 2 - i] = x;
            ring[len - 1 - i] = y;
        }
    }
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/transform.js":
/*!**************************************************!*\
  !*** ./node_modules/geojson-vt/src/transform.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transformTile; });

// Transforms the coordinates of each feature in the given tile from
// mercator-projected space into (extent x extent) tile space.
function transformTile(tile, extent) {
    if (tile.transformed) return tile;

    var z2 = 1 << tile.z,
        tx = tile.x,
        ty = tile.y,
        i, j, k;

    for (i = 0; i < tile.features.length; i++) {
        var feature = tile.features[i],
            geom = feature.geometry,
            type = feature.type;

        feature.geometry = [];

        if (type === 1) {
            for (j = 0; j < geom.length; j += 2) {
                feature.geometry.push(transformPoint(geom[j], geom[j + 1], extent, z2, tx, ty));
            }
        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = [];
                for (k = 0; k < geom[j].length; k += 2) {
                    ring.push(transformPoint(geom[j][k], geom[j][k + 1], extent, z2, tx, ty));
                }
                feature.geometry.push(ring);
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(x, y, extent, z2, tx, ty) {
    return [
        Math.round(extent * (x * z2 - tx)),
        Math.round(extent * (y * z2 - ty))];
}


/***/ }),

/***/ "./node_modules/geojson-vt/src/wrap.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-vt/src/wrap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrap; });
/* harmony import */ var _clip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clip */ "./node_modules/geojson-vt/src/clip.js");
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "./node_modules/geojson-vt/src/feature.js");




function wrap(features, options) {
    var buffer = options.buffer / options.extent;
    var merged = features;
    var left  = Object(_clip__WEBPACK_IMPORTED_MODULE_0__["default"])(features, 1, -1 - buffer, buffer,     0, -1, 2, options); // left world copy
    var right = Object(_clip__WEBPACK_IMPORTED_MODULE_0__["default"])(features, 1,  1 - buffer, 2 + buffer, 0, -1, 2, options); // right world copy

    if (left || right) {
        merged = Object(_clip__WEBPACK_IMPORTED_MODULE_0__["default"])(features, 1, -buffer, 1 + buffer, 0, -1, 2, options) || []; // center world copy

        if (left) merged = shiftFeatureCoords(left, 1).concat(merged); // merge left into center
        if (right) merged = merged.concat(shiftFeatureCoords(right, -1)); // merge right into center
    }

    return merged;
}

function shiftFeatureCoords(features, offset) {
    var newFeatures = [];

    for (var i = 0; i < features.length; i++) {
        var feature = features[i],
            type = feature.type;

        var newGeometry;

        if (type === 'Point' || type === 'MultiPoint' || type === 'LineString') {
            newGeometry = shiftCoords(feature.geometry, offset);

        } else if (type === 'MultiLineString' || type === 'Polygon') {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        } else if (type === 'MultiPolygon') {
            newGeometry = [];
            for (j = 0; j < feature.geometry.length; j++) {
                var newPolygon = [];
                for (var k = 0; k < feature.geometry[j].length; k++) {
                    newPolygon.push(shiftCoords(feature.geometry[j][k], offset));
                }
                newGeometry.push(newPolygon);
            }
        }

        newFeatures.push(Object(_feature__WEBPACK_IMPORTED_MODULE_1__["default"])(feature.id, type, newGeometry, feature.tags));
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.size = points.size;

    if (points.start !== undefined) {
        newPoints.start = points.start;
        newPoints.end = points.end;
    }

    for (var i = 0; i < points.length; i += 3) {
        newPoints.push(points[i] + offset, points[i + 1], points[i + 2]);
    }
    return newPoints;
}


/***/ }),

/***/ "./node_modules/long/src/long.js":
/*!***************************************!*\
  !*** ./node_modules/long/src/long.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ }),

/***/ "./node_modules/protobufjs/minimal.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/minimal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(/*! ./src/index-minimal */ "./node_modules/protobufjs/src/index-minimal.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/index-minimal.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/index-minimal.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "./node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "./node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__(/*! ./rpc */ "./node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__(/*! ./roots */ "./node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Set up buffer utility according to the environment
protobuf.Writer._configure(protobuf.BufferWriter);
configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/reader.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/reader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "./node_modules/protobufjs/src/reader_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/reader_buffer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


/***/ }),

/***/ "./node_modules/protobufjs/src/roots.js":
/*!**********************************************!*\
  !*** ./node_modules/protobufjs/src/roots.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/src/rpc.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "./node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc/service.js":
/*!****************************************************!*\
  !*** ./node_modules/protobufjs/src/rpc/service.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/longbits.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/util/longbits.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/minimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/protobufjs/src/util/minimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "./node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "./node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__(/*! @protobufjs/float */ "./node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "./node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(/*! @protobufjs/pool */ "./node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(/*! ./longbits */ "./node_modules/protobufjs/src/util/longbits.js");

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/protobufjs/src/writer.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/writer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/writer_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/writer_buffer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = THREE;

/***/ })

/******/ });
//# sourceMappingURL=decoder.bundle.js.map