"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/xpath/xpath.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var xpathLexer = /** @class */ (function (_super) {
    __extends(xpathLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function xpathLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(xpathLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(xpathLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return xpathLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "xpath.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return xpathLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return xpathLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathLexer.prototype, "channelNames", {
        // @Override
        get: function () { return xpathLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathLexer.prototype, "modeNames", {
        // @Override
        get: function () { return xpathLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(xpathLexer, "_ATN", {
        get: function () {
            if (!xpathLexer.__ATN) {
                xpathLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(xpathLexer._serializedATN));
            }
            return xpathLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    xpathLexer.T__0 = 1;
    xpathLexer.T__1 = 2;
    xpathLexer.T__2 = 3;
    xpathLexer.T__3 = 4;
    xpathLexer.T__4 = 5;
    xpathLexer.T__5 = 6;
    xpathLexer.T__6 = 7;
    xpathLexer.T__7 = 8;
    xpathLexer.NodeType = 9;
    xpathLexer.Number = 10;
    xpathLexer.AxisName = 11;
    xpathLexer.PATHSEP = 12;
    xpathLexer.ABRPATH = 13;
    xpathLexer.LPAR = 14;
    xpathLexer.RPAR = 15;
    xpathLexer.LBRAC = 16;
    xpathLexer.RBRAC = 17;
    xpathLexer.MINUS = 18;
    xpathLexer.PLUS = 19;
    xpathLexer.DOT = 20;
    xpathLexer.MUL = 21;
    xpathLexer.DOTDOT = 22;
    xpathLexer.AT = 23;
    xpathLexer.COMMA = 24;
    xpathLexer.PIPE = 25;
    xpathLexer.LESS = 26;
    xpathLexer.MORE_ = 27;
    xpathLexer.LE = 28;
    xpathLexer.GE = 29;
    xpathLexer.COLON = 30;
    xpathLexer.CC = 31;
    xpathLexer.APOS = 32;
    xpathLexer.QUOT = 33;
    xpathLexer.Literal = 34;
    xpathLexer.Whitespace = 35;
    xpathLexer.NCName = 36;
    // tslint:disable:no-trailing-whitespace
    xpathLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    xpathLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    xpathLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "NodeType",
        "Number", "Digits", "AxisName", "PATHSEP", "ABRPATH", "LPAR", "RPAR",
        "LBRAC", "RBRAC", "MINUS", "PLUS", "DOT", "MUL", "DOTDOT", "AT", "COMMA",
        "PIPE", "LESS", "MORE_", "LE", "GE", "COLON", "CC", "APOS", "QUOT", "Literal",
        "Whitespace", "NCName", "NCNameStartChar", "NCNameChar",
    ];
    xpathLexer._LITERAL_NAMES = [
        undefined, "'processing-instruction'", "'or'", "'and'", "'='", "'!='",
        "'div'", "'mod'", "'$'", undefined, undefined, undefined, "'/'", "'//'",
        "'('", "')'", "'['", "']'", "'-'", "'+'", "'.'", "'*'", "'..'", "'@'",
        "','", "'|'", "'<'", "'>'", "'<='", "'>='", "':'", "'::'", "'''", "'\"'",
    ];
    xpathLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "NodeType", "Number", "AxisName", "PATHSEP", "ABRPATH",
        "LPAR", "RPAR", "LBRAC", "RBRAC", "MINUS", "PLUS", "DOT", "MUL", "DOTDOT",
        "AT", "COMMA", "PIPE", "LESS", "MORE_", "LE", "GE", "COLON", "CC", "APOS",
        "QUOT", "Literal", "Whitespace", "NCName",
    ];
    xpathLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(xpathLexer._LITERAL_NAMES, xpathLexer._SYMBOLIC_NAMES, []);
    xpathLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02&\u0197\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n" +
        "\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA4\n\n\x03\v" +
        "\x03\v\x03\v\x05\v\xA9\n\v\x05\v\xAB\n\v\x03\v\x03\v\x05\v\xAF\n\v\x03" +
        "\f\x06\f\xB2\n\f\r\f\x0E\f\xB3\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u013F" +
        "\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
        "\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03\"\x03" +
        "\"\x03#\x03#\x03$\x03$\x07$\u0174\n$\f$\x0E$\u0177\v$\x03$\x03$\x03$\x07" +
        "$\u017C\n$\f$\x0E$\u017F\v$\x03$\x05$\u0182\n$\x03%\x06%\u0185\n%\r%\x0E" +
        "%\u0186\x03%\x03%\x03&\x03&\x07&\u018D\n&\f&\x0E&\u0190\v&\x03\'\x03\'" +
        "\x03(\x03(\x05(\u0196\n(\x02\x02\x02)\x03\x02\x03\x05\x02\x04\x07\x02" +
        "\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
        "\f\x17\x02\x02\x19\x02\r\x1B\x02\x0E\x1D\x02\x0F\x1F\x02\x10!\x02\x11" +
        "#\x02\x12%\x02\x13\'\x02\x14)\x02\x15+\x02\x16-\x02\x17/\x02\x181\x02" +
        "\x193\x02\x1A5\x02\x1B7\x02\x1C9\x02\x1D;\x02\x1E=\x02\x1F?\x02 A\x02" +
        "!C\x02\"E\x02#G\x02$I\x02%K\x02&M\x02\x02O\x02\x02\x03\x02\x06\x03\x02" +
        "$$\x03\x02))\x05\x02\v\f\x0F\x0F\"\"\x07\x02/02;\xB9\xB9\u0302\u0371\u2041" +
        "\u2042\x03\x11\x02C\x02\\\x02a\x02a\x02c\x02|\x02\xC2\x02\xD8\x02\xDA" +
        "\x02\xF8\x02\xFA\x02\u0301\x02\u0372\x02\u037F\x02\u0381\x02\u2001\x02" +
        "\u200E\x02\u200F\x02\u2072\x02\u2191\x02\u2C02\x02\u2FF1\x02\u3003\x02" +
        "\uD801\x02\uF902\x02\uFDD1\x02\uFDF2\x02\uFFFF\x02\x02\x03\x01\x10\u01AC" +
        "\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
        "\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
        "\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
        "\x15\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
        "\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
        "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
        "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
        "\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
        "7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
        "\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
        "\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
        "\x02\x02\x02\x03Q\x03\x02\x02\x02\x05h\x03\x02\x02\x02\x07k\x03\x02\x02" +
        "\x02\to\x03\x02\x02\x02\vq\x03\x02\x02\x02\rt\x03\x02\x02\x02\x0Fx\x03" +
        "\x02\x02\x02\x11|\x03\x02\x02\x02\x13\xA3\x03\x02\x02\x02\x15\xAE\x03" +
        "\x02\x02\x02\x17\xB1\x03\x02\x02\x02\x19\u013E\x03\x02\x02\x02\x1B\u0140" +
        "\x03\x02\x02\x02\x1D\u0142\x03\x02\x02\x02\x1F\u0145\x03\x02\x02\x02!" +
        "\u0147\x03\x02\x02\x02#\u0149\x03\x02\x02\x02%\u014B\x03\x02\x02\x02\'" +
        "\u014D\x03\x02\x02\x02)\u014F\x03\x02\x02\x02+\u0151\x03\x02\x02\x02-" +
        "\u0153\x03\x02\x02\x02/\u0155\x03\x02\x02\x021\u0158\x03\x02\x02\x023" +
        "\u015A\x03\x02\x02\x025\u015C\x03\x02\x02\x027\u015E\x03\x02\x02\x029" +
        "\u0160\x03\x02\x02\x02;\u0162\x03\x02\x02\x02=\u0165\x03\x02\x02\x02?" +
        "\u0168\x03\x02\x02\x02A\u016A\x03\x02\x02\x02C\u016D\x03\x02\x02\x02E" +
        "\u016F\x03\x02\x02\x02G\u0181\x03\x02\x02\x02I\u0184\x03\x02\x02\x02K" +
        "\u018A\x03\x02\x02\x02M\u0191\x03\x02\x02\x02O\u0195\x03\x02\x02\x02Q" +
        "R\x07r\x02\x02RS\x07t\x02\x02ST\x07q\x02\x02TU\x07e\x02\x02UV\x07g\x02" +
        "\x02VW\x07u\x02\x02WX\x07u\x02\x02XY\x07k\x02\x02YZ\x07p\x02\x02Z[\x07" +
        "i\x02\x02[\\\x07/\x02\x02\\]\x07k\x02\x02]^\x07p\x02\x02^_\x07u\x02\x02" +
        "_`\x07v\x02\x02`a\x07t\x02\x02ab\x07w\x02\x02bc\x07e\x02\x02cd\x07v\x02" +
        "\x02de\x07k\x02\x02ef\x07q\x02\x02fg\x07p\x02\x02g\x04\x03\x02\x02\x02" +
        "hi\x07q\x02\x02ij\x07t\x02\x02j\x06\x03\x02\x02\x02kl\x07c\x02\x02lm\x07" +
        "p\x02\x02mn\x07f\x02\x02n\b\x03\x02\x02\x02op\x07?\x02\x02p\n\x03\x02" +
        "\x02\x02qr\x07#\x02\x02rs\x07?\x02\x02s\f\x03\x02\x02\x02tu\x07f\x02\x02" +
        "uv\x07k\x02\x02vw\x07x\x02\x02w\x0E\x03\x02\x02\x02xy\x07o\x02\x02yz\x07" +
        "q\x02\x02z{\x07f\x02\x02{\x10\x03\x02\x02\x02|}\x07&\x02\x02}\x12\x03" +
        "\x02\x02\x02~\x7F\x07e\x02\x02\x7F\x80\x07q\x02\x02\x80\x81\x07o\x02\x02" +
        "\x81\x82\x07o\x02\x02\x82\x83\x07g\x02\x02\x83\x84\x07p\x02\x02\x84\xA4" +
        "\x07v\x02\x02\x85\x86\x07v\x02\x02\x86\x87\x07g\x02\x02\x87\x88\x07z\x02" +
        "\x02\x88\xA4\x07v\x02\x02\x89\x8A\x07r\x02\x02\x8A\x8B\x07t\x02\x02\x8B" +
        "\x8C\x07q\x02\x02\x8C\x8D\x07e\x02\x02\x8D\x8E\x07g\x02\x02\x8E\x8F\x07" +
        "u\x02\x02\x8F\x90\x07u\x02\x02\x90\x91\x07k\x02\x02\x91\x92\x07p\x02\x02" +
        "\x92\x93\x07i\x02\x02\x93\x94\x07/\x02\x02\x94\x95\x07k\x02\x02\x95\x96" +
        "\x07p\x02\x02\x96\x97\x07u\x02\x02\x97\x98\x07v\x02\x02\x98\x99\x07t\x02" +
        "\x02\x99\x9A\x07w\x02\x02\x9A\x9B\x07e\x02\x02\x9B\x9C\x07v\x02\x02\x9C" +
        "\x9D\x07k\x02\x02\x9D\x9E\x07q\x02\x02\x9E\xA4\x07p\x02\x02\x9F\xA0\x07" +
        "p\x02\x02\xA0\xA1\x07q\x02\x02\xA1\xA2\x07f\x02\x02\xA2\xA4\x07g\x02\x02" +
        "\xA3~\x03\x02\x02\x02\xA3\x85\x03\x02\x02\x02\xA3\x89\x03\x02\x02\x02" +
        "\xA3\x9F\x03\x02\x02\x02\xA4\x14\x03\x02\x02\x02\xA5\xAA\x05\x17\f\x02" +
        "\xA6\xA8\x070\x02\x02\xA7\xA9\x05\x17\f\x02\xA8\xA7\x03\x02\x02\x02\xA8" +
        "\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA6\x03\x02\x02\x02\xAA" +
        "\xAB\x03\x02\x02\x02\xAB\xAF\x03\x02\x02\x02\xAC\xAD\x070\x02\x02\xAD" +
        "\xAF\x05\x17\f\x02\xAE\xA5\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF" +
        "\x16\x03\x02\x02\x02\xB0\xB2\x042;\x02\xB1\xB0\x03\x02\x02\x02\xB2\xB3" +
        "\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\x18" +
        "\x03\x02\x02\x02\xB5\xB6\x07c\x02\x02\xB6\xB7\x07p\x02\x02\xB7\xB8\x07" +
        "e\x02\x02\xB8\xB9\x07g\x02\x02\xB9\xBA\x07u\x02\x02\xBA\xBB\x07v\x02\x02" +
        "\xBB\xBC\x07q\x02\x02\xBC\u013F\x07t\x02\x02\xBD\xBE\x07c\x02\x02\xBE" +
        "\xBF\x07p\x02\x02\xBF\xC0\x07e\x02\x02\xC0\xC1\x07g\x02\x02\xC1\xC2\x07" +
        "u\x02\x02\xC2\xC3\x07v\x02\x02\xC3\xC4\x07q\x02\x02\xC4\xC5\x07t\x02\x02" +
        "\xC5\xC6\x07/\x02\x02\xC6\xC7\x07q\x02\x02\xC7\xC8\x07t\x02\x02\xC8\xC9" +
        "\x07/\x02\x02\xC9\xCA\x07u\x02\x02\xCA\xCB\x07g\x02\x02\xCB\xCC\x07n\x02" +
        "\x02\xCC\u013F\x07h\x02\x02\xCD\xCE\x07c\x02\x02\xCE\xCF\x07v\x02\x02" +
        "\xCF\xD0\x07v\x02\x02\xD0\xD1\x07t\x02\x02\xD1\xD2\x07k\x02\x02\xD2\xD3" +
        "\x07d\x02\x02\xD3\xD4\x07w\x02\x02\xD4\xD5\x07v\x02\x02\xD5\u013F\x07" +
        "g\x02\x02\xD6\xD7\x07e\x02\x02\xD7\xD8\x07j\x02\x02\xD8\xD9\x07k\x02\x02" +
        "\xD9\xDA\x07n\x02\x02\xDA\u013F\x07f\x02\x02\xDB\xDC\x07f\x02\x02\xDC" +
        "\xDD\x07g\x02\x02\xDD\xDE\x07u\x02\x02\xDE\xDF\x07e\x02\x02\xDF\xE0\x07" +
        "g\x02\x02\xE0\xE1\x07p\x02\x02\xE1\xE2\x07f\x02\x02\xE2\xE3\x07c\x02\x02" +
        "\xE3\xE4\x07p\x02\x02\xE4\u013F\x07v\x02\x02\xE5\xE6\x07f\x02\x02\xE6" +
        "\xE7\x07g\x02\x02\xE7\xE8\x07u\x02\x02\xE8\xE9\x07e\x02\x02\xE9\xEA\x07" +
        "g\x02\x02\xEA\xEB\x07p\x02\x02\xEB\xEC\x07f\x02\x02\xEC\xED\x07c\x02\x02" +
        "\xED\xEE\x07p\x02\x02\xEE\xEF\x07v\x02\x02\xEF\xF0\x07/\x02\x02\xF0\xF1" +
        "\x07q\x02\x02\xF1\xF2\x07t\x02\x02\xF2\xF3\x07/\x02\x02\xF3\xF4\x07u\x02" +
        "\x02\xF4\xF5\x07g\x02\x02\xF5\xF6\x07n\x02\x02\xF6\u013F\x07h\x02\x02" +
        "\xF7\xF8\x07h\x02\x02\xF8\xF9\x07q\x02\x02\xF9\xFA\x07n\x02\x02\xFA\xFB" +
        "\x07n\x02\x02\xFB\xFC\x07q\x02\x02\xFC\xFD\x07y\x02\x02\xFD\xFE\x07k\x02" +
        "\x02\xFE\xFF\x07p\x02\x02\xFF\u013F\x07i\x02\x02\u0100\u0101\x07h\x02" +
        "\x02\u0101\u0102\x07q\x02\x02\u0102\u0103\x07n\x02\x02\u0103\u0104\x07" +
        "n\x02\x02\u0104\u0105\x07q\x02\x02\u0105\u0106\x07y\x02\x02\u0106\u0107" +
        "\x07k\x02\x02\u0107\u0108\x07p\x02\x02\u0108\u0109\x07i\x02\x02\u0109" +
        "\u010A\x07/\x02\x02\u010A\u010B\x07u\x02\x02\u010B\u010C\x07k\x02\x02" +
        "\u010C\u010D\x07d\x02\x02\u010D\u010E\x07n\x02\x02\u010E\u010F\x07k\x02" +
        "\x02\u010F\u0110\x07p\x02\x02\u0110\u013F\x07i\x02\x02\u0111\u0112\x07" +
        "p\x02\x02\u0112\u0113\x07c\x02\x02\u0113\u0114\x07o\x02\x02\u0114\u0115" +
        "\x07g\x02\x02\u0115\u0116\x07u\x02\x02\u0116\u0117\x07r\x02\x02\u0117" +
        "\u0118\x07c\x02\x02\u0118\u0119\x07e\x02\x02\u0119\u013F\x07g\x02\x02" +
        "\u011A\u011B\x07r\x02\x02\u011B\u011C\x07c\x02\x02\u011C\u011D\x07t\x02" +
        "\x02\u011D\u011E\x07g\x02\x02\u011E\u011F\x07p\x02\x02\u011F\u013F\x07" +
        "v\x02\x02\u0120\u0121\x07r\x02\x02\u0121\u0122\x07t\x02\x02\u0122\u0123" +
        "\x07g\x02\x02\u0123\u0124\x07e\x02\x02\u0124\u0125\x07g\x02\x02\u0125" +
        "\u0126\x07f\x02\x02\u0126\u0127\x07k\x02\x02\u0127\u0128\x07p\x02\x02" +
        "\u0128\u013F\x07i\x02\x02\u0129\u012A\x07r\x02\x02\u012A\u012B\x07t\x02" +
        "\x02\u012B\u012C\x07g\x02\x02\u012C\u012D\x07e\x02\x02\u012D\u012E\x07" +
        "g\x02\x02\u012E\u012F\x07f\x02\x02\u012F\u0130\x07k\x02\x02\u0130\u0131" +
        "\x07p\x02\x02\u0131\u0132\x07i\x02\x02\u0132\u0133\x07/\x02\x02\u0133" +
        "\u0134\x07u\x02\x02\u0134\u0135\x07k\x02\x02\u0135\u0136\x07d\x02\x02" +
        "\u0136\u0137\x07n\x02\x02\u0137\u0138\x07k\x02\x02\u0138\u0139\x07p\x02" +
        "\x02\u0139\u013F\x07i\x02\x02\u013A\u013B\x07u\x02\x02\u013B\u013C\x07" +
        "g\x02\x02\u013C\u013D\x07n\x02\x02\u013D\u013F\x07h\x02\x02\u013E\xB5" +
        "\x03\x02\x02\x02\u013E\xBD\x03\x02\x02\x02\u013E\xCD\x03\x02\x02\x02\u013E" +
        "\xD6\x03\x02\x02\x02\u013E\xDB\x03\x02\x02\x02\u013E\xE5\x03\x02\x02\x02" +
        "\u013E\xF7\x03\x02\x02\x02\u013E\u0100\x03\x02\x02\x02\u013E\u0111\x03" +
        "\x02\x02\x02\u013E\u011A\x03\x02\x02\x02\u013E\u0120\x03\x02\x02\x02\u013E" +
        "\u0129\x03\x02\x02\x02\u013E\u013A\x03\x02\x02\x02\u013F\x1A\x03\x02\x02" +
        "\x02\u0140\u0141\x071\x02\x02\u0141\x1C\x03\x02\x02\x02\u0142\u0143\x07" +
        "1\x02\x02\u0143\u0144\x071\x02\x02\u0144\x1E\x03\x02\x02\x02\u0145\u0146" +
        "\x07*\x02\x02\u0146 \x03\x02\x02\x02\u0147\u0148\x07+\x02\x02\u0148\"" +
        "\x03\x02\x02\x02\u0149\u014A\x07]\x02\x02\u014A$\x03\x02\x02\x02\u014B" +
        "\u014C\x07_\x02\x02\u014C&\x03\x02\x02\x02\u014D\u014E\x07/\x02\x02\u014E" +
        "(\x03\x02\x02\x02\u014F\u0150\x07-\x02\x02\u0150*\x03\x02\x02\x02\u0151" +
        "\u0152\x070\x02\x02\u0152,\x03\x02\x02\x02\u0153\u0154\x07,\x02\x02\u0154" +
        ".\x03\x02\x02\x02\u0155\u0156\x070\x02\x02\u0156\u0157\x070\x02\x02\u0157" +
        "0\x03\x02\x02\x02\u0158\u0159\x07B\x02\x02\u01592\x03\x02\x02\x02\u015A" +
        "\u015B\x07.\x02\x02\u015B4\x03\x02\x02\x02\u015C\u015D\x07~\x02\x02\u015D" +
        "6\x03\x02\x02\x02\u015E\u015F\x07>\x02\x02\u015F8\x03\x02\x02\x02\u0160" +
        "\u0161\x07@\x02\x02\u0161:\x03\x02\x02\x02\u0162\u0163\x07>\x02\x02\u0163" +
        "\u0164\x07?\x02\x02\u0164<\x03\x02\x02\x02\u0165\u0166\x07@\x02\x02\u0166" +
        "\u0167\x07?\x02\x02\u0167>\x03\x02\x02\x02\u0168\u0169\x07<\x02\x02\u0169" +
        "@\x03\x02\x02\x02\u016A\u016B\x07<\x02\x02\u016B\u016C\x07<\x02\x02\u016C" +
        "B\x03\x02\x02\x02\u016D\u016E\x07)\x02\x02\u016ED\x03\x02\x02\x02\u016F" +
        "\u0170\x07$\x02\x02\u0170F\x03\x02\x02\x02\u0171\u0175\x07$\x02\x02\u0172" +
        "\u0174\n\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0177\x03\x02\x02" +
        "\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0178" +
        "\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u0182\x07$\x02\x02" +
        "\u0179\u017D\x07)\x02\x02\u017A\u017C\n\x03\x02\x02\u017B\u017A\x03\x02" +
        "\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D" +
        "\u017E\x03\x02\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017D\x03\x02" +
        "\x02\x02\u0180\u0182\x07)\x02\x02\u0181\u0171\x03\x02\x02\x02\u0181\u0179" +
        "\x03\x02\x02\x02\u0182H\x03\x02\x02\x02\u0183\u0185\t\x04\x02\x02\u0184" +
        "\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0184\x03\x02" +
        "\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
        "\u0189\b%\x02\x02\u0189J\x03\x02\x02\x02\u018A\u018E\x05M\'\x02\u018B" +
        "\u018D\x05O(\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02" +
        "\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018FL\x03\x02" +
        "\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0192\t\x06\x02\x02\u0192N" +
        "\x03\x02\x02\x02\u0193\u0196\x05M\'\x02\u0194\u0196\t\x05\x02\x02\u0195" +
        "\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196P\x03\x02\x02" +
        "\x02\x0F\x02\xA3\xA8\xAA\xAE\xB3\u013E\u0175\u017D\u0181\u0186\u018E\u0195" +
        "\x03\b\x02\x02";
    return xpathLexer;
}(Lexer_1.Lexer));
exports.xpathLexer = xpathLexer;
