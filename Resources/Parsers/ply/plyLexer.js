"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ply/ply.g4 by ANTLR 4.7.3-SNAPSHOT
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
var plyLexer = /** @class */ (function (_super) {
    __extends(plyLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function plyLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(plyLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(plyLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return plyLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "ply.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return plyLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return plyLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyLexer.prototype, "channelNames", {
        // @Override
        get: function () { return plyLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyLexer.prototype, "modeNames", {
        // @Override
        get: function () { return plyLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyLexer, "_ATN", {
        get: function () {
            if (!plyLexer.__ATN) {
                plyLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(plyLexer._serializedATN));
            }
            return plyLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    plyLexer.T__0 = 1;
    plyLexer.T__1 = 2;
    plyLexer.T__2 = 3;
    plyLexer.T__3 = 4;
    plyLexer.T__4 = 5;
    plyLexer.T__5 = 6;
    plyLexer.T__6 = 7;
    plyLexer.T__7 = 8;
    plyLexer.T__8 = 9;
    plyLexer.T__9 = 10;
    plyLexer.T__10 = 11;
    plyLexer.T__11 = 12;
    plyLexer.T__12 = 13;
    plyLexer.T__13 = 14;
    plyLexer.T__14 = 15;
    plyLexer.T__15 = 16;
    plyLexer.T__16 = 17;
    plyLexer.T__17 = 18;
    plyLexer.STRING = 19;
    plyLexer.NUMBER = 20;
    plyLexer.COMMENT = 21;
    plyLexer.EOL = 22;
    plyLexer.WS = 23;
    // tslint:disable:no-trailing-whitespace
    plyLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    plyLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    plyLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "T__17", "STRING", "NUMBER", "COMMENT", "EOL", "WS",
    ];
    plyLexer._LITERAL_NAMES = [
        undefined, "'end_header'", "'format'", "'ascii 1.0'", "'element'", "'property'",
        "'list'", "'char'", "'uchar'", "'short'", "'ushort'", "'int'", "'uint'",
        "'float'", "'double'", "'float32'", "'uint8'", "'int32'", "'ply'",
    ];
    plyLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "STRING", "NUMBER",
        "COMMENT", "EOL", "WS",
    ];
    plyLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(plyLexer._LITERAL_NAMES, plyLexer._SYMBOLIC_NAMES, []);
    plyLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x19\xDB\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
        "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
        "\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07" +
        "\x14\xAC\n\x14\f\x14\x0E\x14\xAF\v\x14\x03\x15\x05\x15\xB2\n\x15\x03\x15" +
        "\x06\x15\xB5\n\x15\r\x15\x0E\x15\xB6\x03\x15\x03\x15\x06\x15\xBB\n\x15" +
        "\r\x15\x0E\x15\xBC\x05\x15\xBF\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
        "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\xCA\n\x16\f\x16\x0E\x16\xCD" +
        "\v\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x06\x17\xD4\n\x17\r\x17" +
        "\x0E\x17\xD5\x03\x18\x03\x18\x03\x18\x03\x18\x02\x02\x02\x19\x03\x02\x03" +
        "\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
        "\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
        "\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
        "/\x02\x19\x03\x02\x07\x04\x02C\\c|\x07\x02002;C\\aac|\x04\x02--//\x04" +
        "\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x02\xE1\x02\x03\x03\x02\x02\x02" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
        "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
        "\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
        "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
        "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
        "\x02\x031\x03\x02\x02\x02\x05<\x03\x02\x02\x02\x07C\x03\x02\x02\x02\t" +
        "M\x03\x02\x02\x02\vU\x03\x02\x02\x02\r^\x03\x02\x02\x02\x0Fc\x03\x02\x02" +
        "\x02\x11h\x03\x02\x02\x02\x13n\x03\x02\x02\x02\x15t\x03\x02\x02\x02\x17" +
        "{\x03\x02\x02\x02\x19\x7F\x03\x02\x02\x02\x1B\x84\x03\x02\x02\x02\x1D" +
        "\x8A\x03\x02\x02\x02\x1F\x91\x03\x02\x02\x02!\x99\x03\x02\x02\x02#\x9F" +
        "\x03\x02\x02\x02%\xA5\x03\x02\x02\x02\'\xA9\x03\x02\x02\x02)\xB1\x03\x02" +
        "\x02\x02+\xC0\x03\x02\x02\x02-\xD3\x03\x02\x02\x02/\xD7\x03\x02\x02\x02" +
        "12\x07g\x02\x0223\x07p\x02\x0234\x07f\x02\x0245\x07a\x02\x0256\x07j\x02" +
        "\x0267\x07g\x02\x0278\x07c\x02\x0289\x07f\x02\x029:\x07g\x02\x02:;\x07" +
        "t\x02\x02;\x04\x03\x02\x02\x02<=\x07h\x02\x02=>\x07q\x02\x02>?\x07t\x02" +
        "\x02?@\x07o\x02\x02@A\x07c\x02\x02AB\x07v\x02\x02B\x06\x03\x02\x02\x02" +
        "CD\x07c\x02\x02DE\x07u\x02\x02EF\x07e\x02\x02FG\x07k\x02\x02GH\x07k\x02" +
        "\x02HI\x07\"\x02\x02IJ\x073\x02\x02JK\x070\x02\x02KL\x072\x02\x02L\b\x03" +
        "\x02\x02\x02MN\x07g\x02\x02NO\x07n\x02\x02OP\x07g\x02\x02PQ\x07o\x02\x02" +
        "QR\x07g\x02\x02RS\x07p\x02\x02ST\x07v\x02\x02T\n\x03\x02\x02\x02UV\x07" +
        "r\x02\x02VW\x07t\x02\x02WX\x07q\x02\x02XY\x07r\x02\x02YZ\x07g\x02\x02" +
        "Z[\x07t\x02\x02[\\\x07v\x02\x02\\]\x07{\x02\x02]\f\x03\x02\x02\x02^_\x07" +
        "n\x02\x02_`\x07k\x02\x02`a\x07u\x02\x02ab\x07v\x02\x02b\x0E\x03\x02\x02" +
        "\x02cd\x07e\x02\x02de\x07j\x02\x02ef\x07c\x02\x02fg\x07t\x02\x02g\x10" +
        "\x03\x02\x02\x02hi\x07w\x02\x02ij\x07e\x02\x02jk\x07j\x02\x02kl\x07c\x02" +
        "\x02lm\x07t\x02\x02m\x12\x03\x02\x02\x02no\x07u\x02\x02op\x07j\x02\x02" +
        "pq\x07q\x02\x02qr\x07t\x02\x02rs\x07v\x02\x02s\x14\x03\x02\x02\x02tu\x07" +
        "w\x02\x02uv\x07u\x02\x02vw\x07j\x02\x02wx\x07q\x02\x02xy\x07t\x02\x02" +
        "yz\x07v\x02\x02z\x16\x03\x02\x02\x02{|\x07k\x02\x02|}\x07p\x02\x02}~\x07" +
        "v\x02\x02~\x18\x03\x02\x02\x02\x7F\x80\x07w\x02\x02\x80\x81\x07k\x02\x02" +
        "\x81\x82\x07p\x02\x02\x82\x83\x07v\x02\x02\x83\x1A\x03\x02\x02\x02\x84" +
        "\x85\x07h\x02\x02\x85\x86\x07n\x02\x02\x86\x87\x07q\x02\x02\x87\x88\x07" +
        "c\x02\x02\x88\x89\x07v\x02\x02\x89\x1C\x03\x02\x02\x02\x8A\x8B\x07f\x02" +
        "\x02\x8B\x8C\x07q\x02\x02\x8C\x8D\x07w\x02\x02\x8D\x8E\x07d\x02\x02\x8E" +
        "\x8F\x07n\x02\x02\x8F\x90\x07g\x02\x02\x90\x1E\x03\x02\x02\x02\x91\x92" +
        "\x07h\x02\x02\x92\x93\x07n\x02\x02\x93\x94\x07q\x02\x02\x94\x95\x07c\x02" +
        "\x02\x95\x96\x07v\x02\x02\x96\x97\x075\x02\x02\x97\x98\x074\x02\x02\x98" +
        " \x03\x02\x02\x02\x99\x9A\x07w\x02\x02\x9A\x9B\x07k\x02\x02\x9B\x9C\x07" +
        "p\x02\x02\x9C\x9D\x07v\x02\x02\x9D\x9E\x07:\x02\x02\x9E\"\x03\x02\x02" +
        "\x02\x9F\xA0\x07k\x02\x02\xA0\xA1\x07p\x02\x02\xA1\xA2\x07v\x02\x02\xA2" +
        "\xA3\x075\x02\x02\xA3\xA4\x074\x02\x02\xA4$\x03\x02\x02\x02\xA5\xA6\x07" +
        "r\x02\x02\xA6\xA7\x07n\x02\x02\xA7\xA8\x07{\x02\x02\xA8&\x03\x02\x02\x02" +
        "\xA9\xAD\t\x02\x02\x02\xAA\xAC\t\x03\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC" +
        "\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
        "(\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB2\t\x04\x02\x02\xB1\xB0" +
        "\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB5" +
        "\x042;\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB4\x03" +
        "\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBE\x03\x02\x02\x02\xB8\xBA\x07" +
        "0\x02\x02\xB9\xBB\x042;\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02" +
        "\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02" +
        "\x02\xBE\xB8\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF*\x03\x02\x02" +
        "\x02\xC0\xC1\x07e\x02\x02\xC1\xC2\x07q\x02\x02\xC2\xC3\x07o\x02\x02\xC3" +
        "\xC4\x07o\x02\x02\xC4\xC5\x07g\x02\x02\xC5\xC6\x07p\x02\x02\xC6\xC7\x07" +
        "v\x02\x02\xC7\xCB\x03\x02\x02\x02\xC8\xCA\n\x05\x02\x02\xC9\xC8\x03\x02" +
        "\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02" +
        "\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xCF\x05-" +
        "\x17\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\b\x16\x02\x02\xD1,\x03\x02\x02" +
        "\x02\xD2\xD4\t\x05\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02" +
        "\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6.\x03\x02\x02" +
        "\x02\xD7\xD8\t\x06\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\b\x18\x02\x02" +
        "\xDA0\x03\x02\x02\x02\n\x02\xAD\xB1\xB6\xBC\xBE\xCB\xD5\x03\b\x02\x02";
    return plyLexer;
}(Lexer_1.Lexer));
exports.plyLexer = plyLexer;
