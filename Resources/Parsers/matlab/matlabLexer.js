"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/matlab/matlab.g4 by ANTLR 4.7.3-SNAPSHOT
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
var matlabLexer = /** @class */ (function (_super) {
    __extends(matlabLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function matlabLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(matlabLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(matlabLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return matlabLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "matlab.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return matlabLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return matlabLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabLexer.prototype, "channelNames", {
        // @Override
        get: function () { return matlabLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabLexer.prototype, "modeNames", {
        // @Override
        get: function () { return matlabLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(matlabLexer, "_ATN", {
        get: function () {
            if (!matlabLexer.__ATN) {
                matlabLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(matlabLexer._serializedATN));
            }
            return matlabLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    matlabLexer.T__0 = 1;
    matlabLexer.T__1 = 2;
    matlabLexer.T__2 = 3;
    matlabLexer.T__3 = 4;
    matlabLexer.T__4 = 5;
    matlabLexer.T__5 = 6;
    matlabLexer.T__6 = 7;
    matlabLexer.T__7 = 8;
    matlabLexer.T__8 = 9;
    matlabLexer.T__9 = 10;
    matlabLexer.T__10 = 11;
    matlabLexer.T__11 = 12;
    matlabLexer.T__12 = 13;
    matlabLexer.T__13 = 14;
    matlabLexer.T__14 = 15;
    matlabLexer.T__15 = 16;
    matlabLexer.T__16 = 17;
    matlabLexer.T__17 = 18;
    matlabLexer.T__18 = 19;
    matlabLexer.ARRAYMUL = 20;
    matlabLexer.ARRAYDIV = 21;
    matlabLexer.ARRAYRDIV = 22;
    matlabLexer.ARRAYPOW = 23;
    matlabLexer.BREAK = 24;
    matlabLexer.RETURN = 25;
    matlabLexer.FUNCTION = 26;
    matlabLexer.FOR = 27;
    matlabLexer.WHILE = 28;
    matlabLexer.END = 29;
    matlabLexer.GLOBAL = 30;
    matlabLexer.IF = 31;
    matlabLexer.CLEAR = 32;
    matlabLexer.ELSE = 33;
    matlabLexer.ELSEIF = 34;
    matlabLexer.LE_OP = 35;
    matlabLexer.GE_OP = 36;
    matlabLexer.EQ_OP = 37;
    matlabLexer.NE_OP = 38;
    matlabLexer.TRANSPOSE = 39;
    matlabLexer.NCTRANSPOSE = 40;
    matlabLexer.STRING_LITERAL = 41;
    matlabLexer.IDENTIFIER = 42;
    matlabLexer.CONSTANT = 43;
    matlabLexer.CR = 44;
    matlabLexer.WS = 45;
    // tslint:disable:no-trailing-whitespace
    matlabLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    matlabLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    matlabLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "T__17", "T__18", "ARRAYMUL", "ARRAYDIV", "ARRAYRDIV", "ARRAYPOW", "BREAK",
        "RETURN", "FUNCTION", "FOR", "WHILE", "END", "GLOBAL", "IF", "CLEAR",
        "ELSE", "ELSEIF", "LE_OP", "GE_OP", "EQ_OP", "NE_OP", "TRANSPOSE", "NCTRANSPOSE",
        "STRING_LITERAL", "IDENTIFIER", "CONSTANT", "NUMBER", "E", "SIGN", "CR",
        "WS",
    ];
    matlabLexer._LITERAL_NAMES = [
        undefined, "'('", "')'", "'['", "']'", "':'", "','", "'+'", "'-'", "'~'",
        "'*'", "'/'", "'\\'", "'^'", "'<'", "'>'", "'&'", "'|'", "'='", "';'",
        "'.*'", "'.\\'", "'./'", "'.^'", "'break'", "'return'", "'function'",
        "'for'", "'while'", "'end'", "'global'", "'if'", "'clear'", "'else'",
        "'elseif'", "'<='", "'>='", "'=='", "'~='", "'transpose'", "'.''",
    ];
    matlabLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "ARRAYMUL",
        "ARRAYDIV", "ARRAYRDIV", "ARRAYPOW", "BREAK", "RETURN", "FUNCTION", "FOR",
        "WHILE", "END", "GLOBAL", "IF", "CLEAR", "ELSE", "ELSEIF", "LE_OP", "GE_OP",
        "EQ_OP", "NE_OP", "TRANSPOSE", "NCTRANSPOSE", "STRING_LITERAL", "IDENTIFIER",
        "CONSTANT", "CR", "WS",
    ];
    matlabLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(matlabLexer._LITERAL_NAMES, matlabLexer._SYMBOLIC_NAMES, []);
    matlabLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02/\u011F\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r" +
        "\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
        "\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
        " \x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03" +
        "#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03" +
        "&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(" +
        "\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x07+\xF5\n+\f+\x0E+\xF8" +
        "\v+\x03,\x03,\x03,\x05,\xFD\n,\x03,\x03,\x05,\u0101\n,\x03-\x06-\u0104" +
        "\n-\r-\x0E-\u0105\x03-\x03-\x06-\u010A\n-\r-\x0E-\u010B\x05-\u010E\n-" +
        "\x03.\x03.\x03/\x03/\x030\x060\u0115\n0\r0\x0E0\u0116\x031\x061\u011A" +
        "\n1\r1\x0E1\u011B\x031\x031\x02\x02\x022\x03\x02\x03\x05\x02\x04\x07\x02" +
        "\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
        "\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
        "#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
        "\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
        "\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02" +
        "\x02[\x02\x02]\x02\x02_\x02.a\x02/\x03\x02\t\x03\x02))\x04\x02C\\c|\x06" +
        "\x022;C\\aac|\x04\x02GGgg\x04\x02--//\x04\x02\f\f\x0F\x0F\x04\x02\v\v" +
        "\"\"\x02\u0123\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
        "\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
        "\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
        "\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
        "\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
        "\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02" +
        "\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02" +
        "-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
        "\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
        "\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
        "\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02" +
        "\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02" +
        "O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02" +
        "\x02\x02\x02W\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02" +
        "\x03c\x03\x02\x02\x02\x05e\x03\x02\x02\x02\x07g\x03\x02\x02\x02\ti\x03" +
        "\x02\x02\x02\vk\x03\x02\x02\x02\rm\x03\x02\x02\x02\x0Fo\x03\x02\x02\x02" +
        "\x11q\x03\x02\x02\x02\x13s\x03\x02\x02\x02\x15u\x03\x02\x02\x02\x17w\x03" +
        "\x02\x02\x02\x19y\x03\x02\x02\x02\x1B{\x03\x02\x02\x02\x1D}\x03\x02\x02" +
        "\x02\x1F\x7F\x03\x02\x02\x02!\x81\x03\x02\x02\x02#\x83\x03\x02\x02\x02" +
        "%\x85\x03\x02\x02\x02\'\x87\x03\x02\x02\x02)\x89\x03\x02\x02\x02+\x8C" +
        "\x03\x02\x02\x02-\x8F\x03\x02\x02\x02/\x92\x03\x02\x02\x021\x95\x03\x02" +
        "\x02\x023\x9B\x03\x02\x02\x025\xA2\x03\x02\x02\x027\xAB\x03\x02\x02\x02" +
        "9\xAF\x03\x02\x02\x02;\xB5\x03\x02\x02\x02=\xB9\x03\x02\x02\x02?\xC0\x03" +
        "\x02\x02\x02A\xC3\x03\x02\x02\x02C\xC9\x03\x02\x02\x02E\xCE\x03\x02\x02" +
        "\x02G\xD5\x03\x02\x02\x02I\xD8\x03\x02\x02\x02K\xDB\x03\x02\x02\x02M\xDE" +
        "\x03\x02\x02\x02O\xE1\x03\x02\x02\x02Q\xEB\x03\x02\x02\x02S\xEE\x03\x02" +
        "\x02\x02U\xF2\x03\x02\x02\x02W\xF9\x03\x02\x02\x02Y\u0103\x03\x02\x02" +
        "\x02[\u010F\x03\x02\x02\x02]\u0111\x03\x02\x02\x02_\u0114\x03\x02\x02" +
        "\x02a\u0119\x03\x02\x02\x02cd\x07*\x02\x02d\x04\x03\x02\x02\x02ef\x07" +
        "+\x02\x02f\x06\x03\x02\x02\x02gh\x07]\x02\x02h\b\x03\x02\x02\x02ij\x07" +
        "_\x02\x02j\n\x03\x02\x02\x02kl\x07<\x02\x02l\f\x03\x02\x02\x02mn\x07." +
        "\x02\x02n\x0E\x03\x02\x02\x02op\x07-\x02\x02p\x10\x03\x02\x02\x02qr\x07" +
        "/\x02\x02r\x12\x03\x02\x02\x02st\x07\x80\x02\x02t\x14\x03\x02\x02\x02" +
        "uv\x07,\x02\x02v\x16\x03\x02\x02\x02wx\x071\x02\x02x\x18\x03\x02\x02\x02" +
        "yz\x07^\x02\x02z\x1A\x03\x02\x02\x02{|\x07`\x02\x02|\x1C\x03\x02\x02\x02" +
        "}~\x07>\x02\x02~\x1E\x03\x02\x02\x02\x7F\x80\x07@\x02\x02\x80 \x03\x02" +
        "\x02\x02\x81\x82\x07(\x02\x02\x82\"\x03\x02\x02\x02\x83\x84\x07~\x02\x02" +
        "\x84$\x03\x02\x02\x02\x85\x86\x07?\x02\x02\x86&\x03\x02\x02\x02\x87\x88" +
        "\x07=\x02\x02\x88(\x03\x02\x02\x02\x89\x8A\x070\x02\x02\x8A\x8B\x07,\x02" +
        "\x02\x8B*\x03\x02\x02\x02\x8C\x8D\x070\x02\x02\x8D\x8E\x07^\x02\x02\x8E" +
        ",\x03\x02\x02\x02\x8F\x90\x070\x02\x02\x90\x91\x071\x02\x02\x91.\x03\x02" +
        "\x02\x02\x92\x93\x070\x02\x02\x93\x94\x07`\x02\x02\x940\x03\x02\x02\x02" +
        "\x95\x96\x07d\x02\x02\x96\x97\x07t\x02\x02\x97\x98\x07g\x02\x02\x98\x99" +
        "\x07c\x02\x02\x99\x9A\x07m\x02\x02\x9A2\x03\x02\x02\x02\x9B\x9C\x07t\x02" +
        "\x02\x9C\x9D\x07g\x02\x02\x9D\x9E\x07v\x02\x02\x9E\x9F\x07w\x02\x02\x9F" +
        "\xA0\x07t\x02\x02\xA0\xA1\x07p\x02\x02\xA14\x03\x02\x02\x02\xA2\xA3\x07" +
        "h\x02\x02\xA3\xA4\x07w\x02\x02\xA4\xA5\x07p\x02\x02\xA5\xA6\x07e\x02\x02" +
        "\xA6\xA7\x07v\x02\x02\xA7\xA8\x07k\x02\x02\xA8\xA9\x07q\x02\x02\xA9\xAA" +
        "\x07p\x02\x02\xAA6\x03\x02\x02\x02\xAB\xAC\x07h\x02\x02\xAC\xAD\x07q\x02" +
        "\x02\xAD\xAE\x07t\x02\x02\xAE8\x03\x02\x02\x02\xAF\xB0\x07y\x02\x02\xB0" +
        "\xB1\x07j\x02\x02\xB1\xB2\x07k\x02\x02\xB2\xB3\x07n\x02\x02\xB3\xB4\x07" +
        "g\x02\x02\xB4:\x03\x02\x02\x02\xB5\xB6\x07g\x02\x02\xB6\xB7\x07p\x02\x02" +
        "\xB7\xB8\x07f\x02\x02\xB8<\x03\x02\x02\x02\xB9\xBA\x07i\x02\x02\xBA\xBB" +
        "\x07n\x02\x02\xBB\xBC\x07q\x02\x02\xBC\xBD\x07d\x02\x02\xBD\xBE\x07c\x02" +
        "\x02\xBE\xBF\x07n\x02\x02\xBF>\x03\x02\x02\x02\xC0\xC1\x07k\x02\x02\xC1" +
        "\xC2\x07h\x02\x02\xC2@\x03\x02\x02\x02\xC3\xC4\x07e\x02\x02\xC4\xC5\x07" +
        "n\x02\x02\xC5\xC6\x07g\x02\x02\xC6\xC7\x07c\x02\x02\xC7\xC8\x07t\x02\x02" +
        "\xC8B\x03\x02\x02\x02\xC9\xCA\x07g\x02\x02\xCA\xCB\x07n\x02\x02\xCB\xCC" +
        "\x07u\x02\x02\xCC\xCD\x07g\x02\x02\xCDD\x03\x02\x02\x02\xCE\xCF\x07g\x02" +
        "\x02\xCF\xD0\x07n\x02\x02\xD0\xD1\x07u\x02\x02\xD1\xD2\x07g\x02\x02\xD2" +
        "\xD3\x07k\x02\x02\xD3\xD4\x07h\x02\x02\xD4F\x03\x02\x02\x02\xD5\xD6\x07" +
        ">\x02\x02\xD6\xD7\x07?\x02\x02\xD7H\x03\x02\x02\x02\xD8\xD9\x07@\x02\x02" +
        "\xD9\xDA\x07?\x02\x02\xDAJ\x03\x02\x02\x02\xDB\xDC\x07?\x02\x02\xDC\xDD" +
        "\x07?\x02\x02\xDDL\x03\x02\x02\x02\xDE\xDF\x07\x80\x02\x02\xDF\xE0\x07" +
        "?\x02\x02\xE0N\x03\x02\x02\x02\xE1\xE2\x07v\x02\x02\xE2\xE3\x07t\x02\x02" +
        "\xE3\xE4\x07c\x02\x02\xE4\xE5\x07p\x02\x02\xE5\xE6\x07u\x02\x02\xE6\xE7" +
        "\x07r\x02\x02\xE7\xE8\x07q\x02\x02\xE8\xE9\x07u\x02\x02\xE9\xEA\x07g\x02" +
        "\x02\xEAP\x03\x02\x02\x02\xEB\xEC\x070\x02\x02\xEC\xED\x07)\x02\x02\xED" +
        "R\x03\x02\x02\x02\xEE\xEF\x07)\x02\x02\xEF\xF0\n\x02\x02\x02\xF0\xF1\x07" +
        ")\x02\x02\xF1T\x03\x02\x02\x02\xF2\xF6\t\x03\x02\x02\xF3\xF5\t\x04\x02" +
        "\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02" +
        "\x02\xF6\xF7\x03\x02\x02\x02\xF7V\x03\x02\x02\x02\xF8\xF6\x03\x02\x02" +
        "\x02\xF9\u0100\x05Y-\x02\xFA\xFC\x05[.\x02\xFB\xFD\x05]/\x02\xFC\xFB\x03" +
        "\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05" +
        "Y-\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFA\x03\x02\x02\x02\u0100\u0101" +
        "\x03\x02\x02\x02\u0101X\x03\x02\x02\x02\u0102\u0104\x042;\x02\u0103\u0102" +
        "\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02" +
        "\u0105\u0106\x03\x02\x02\x02\u0106\u010D\x03\x02\x02\x02\u0107\u0109\x07" +
        "0\x02\x02\u0108\u010A\x042;\x02\u0109\u0108\x03\x02\x02\x02\u010A\u010B" +
        "\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02" +
        "\u010C\u010E\x03\x02\x02\x02\u010D\u0107\x03\x02\x02\x02\u010D\u010E\x03" +
        "\x02\x02\x02\u010EZ\x03\x02\x02\x02\u010F\u0110\t\x05\x02\x02\u0110\\" +
        "\x03\x02\x02\x02\u0111\u0112\t\x06\x02\x02\u0112^\x03\x02\x02\x02\u0113" +
        "\u0115\t\x07\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02" +
        "\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117`\x03" +
        "\x02\x02\x02\u0118\u011A\t\b\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A" +
        "\u011B\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02" +
        "\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\b1\x02\x02\u011Eb\x03" +
        "\x02\x02\x02\v\x02\xF6\xFC\u0100\u0105\u010B\u010D\u0116\u011B\x03\b\x02" +
        "\x02";
    return matlabLexer;
}(Lexer_1.Lexer));
exports.matlabLexer = matlabLexer;