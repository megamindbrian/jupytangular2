"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/restructuredtext/ReStructuredText.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ReStructuredTextLexer = /** @class */ (function (_super) {
    __extends(ReStructuredTextLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function ReStructuredTextLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(ReStructuredTextLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(ReStructuredTextLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return ReStructuredTextLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "ReStructuredText.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return ReStructuredTextLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return ReStructuredTextLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextLexer.prototype, "channelNames", {
        // @Override
        get: function () { return ReStructuredTextLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextLexer.prototype, "modeNames", {
        // @Override
        get: function () { return ReStructuredTextLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReStructuredTextLexer, "_ATN", {
        get: function () {
            if (!ReStructuredTextLexer.__ATN) {
                ReStructuredTextLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ReStructuredTextLexer._serializedATN));
            }
            return ReStructuredTextLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ReStructuredTextLexer.T__0 = 1;
    ReStructuredTextLexer.SectionSeparator = 2;
    ReStructuredTextLexer.Literal = 3;
    ReStructuredTextLexer.TimeStar = 4;
    ReStructuredTextLexer.Alphabet = 5;
    ReStructuredTextLexer.Numbers = 6;
    ReStructuredTextLexer.Quote = 7;
    ReStructuredTextLexer.SquareLeft = 8;
    ReStructuredTextLexer.SquareRight = 9;
    ReStructuredTextLexer.RoundLeft = 10;
    ReStructuredTextLexer.RoundRight = 11;
    ReStructuredTextLexer.AngleLeft = 12;
    ReStructuredTextLexer.AngleRight = 13;
    ReStructuredTextLexer.Hat = 14;
    ReStructuredTextLexer.QuotationDouble = 15;
    ReStructuredTextLexer.QuotationSingle = 16;
    ReStructuredTextLexer.Dot = 17;
    ReStructuredTextLexer.SemiColon = 18;
    ReStructuredTextLexer.Colon = 19;
    ReStructuredTextLexer.Equal = 20;
    ReStructuredTextLexer.Plus = 21;
    ReStructuredTextLexer.Minus = 22;
    ReStructuredTextLexer.Block = 23;
    ReStructuredTextLexer.Comment = 24;
    ReStructuredTextLexer.UnderScore = 25;
    ReStructuredTextLexer.BackTick = 26;
    ReStructuredTextLexer.Star = 27;
    ReStructuredTextLexer.Space = 28;
    ReStructuredTextLexer.LineBreak = 29;
    ReStructuredTextLexer.Any = 30;
    // tslint:disable:no-trailing-whitespace
    ReStructuredTextLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    ReStructuredTextLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    ReStructuredTextLexer.ruleNames = [
        "T__0", "SectionSeparator", "Literal", "TimeStar", "Alphabet", "Numbers",
        "Quote", "SquareLeft", "SquareRight", "RoundLeft", "RoundRight", "AngleLeft",
        "AngleRight", "Hat", "QuotationDouble", "QuotationSingle", "Dot", "SemiColon",
        "Colon", "Equal", "Plus", "Minus", "Block", "Comment", "UnderScore", "BackTick",
        "Star", "Space", "LineBreak", "Any",
    ];
    ReStructuredTextLexer._LITERAL_NAMES = [
        undefined, "':doc:'", undefined, undefined, undefined, undefined, undefined,
        undefined, "'['", "']'", "'('", "')'", "'<'", "'>'", "'^'", "'\"'", "'''",
        "'.'", "';'", "':'", "'='", "'+'", "'-'", "'|'", undefined, "'_'", "'`'",
        "'*'",
    ];
    ReStructuredTextLexer._SYMBOLIC_NAMES = [
        undefined, undefined, "SectionSeparator", "Literal", "TimeStar", "Alphabet",
        "Numbers", "Quote", "SquareLeft", "SquareRight", "RoundLeft", "RoundRight",
        "AngleLeft", "AngleRight", "Hat", "QuotationDouble", "QuotationSingle",
        "Dot", "SemiColon", "Colon", "Equal", "Plus", "Minus", "Block", "Comment",
        "UnderScore", "BackTick", "Star", "Space", "LineBreak", "Any",
    ];
    ReStructuredTextLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ReStructuredTextLexer._LITERAL_NAMES, ReStructuredTextLexer._SYMBOLIC_NAMES, []);
    ReStructuredTextLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02 \xB4\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x05\x03P\n\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x06\x03V\n\x03\r\x03\x0E\x03W\x03\x04\x03\x04\x03\x04\x07\x04]\n" +
        "\x04\f\x04\x0E\x04`\v\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x05\x05j\n\x05\x03\x06\x06\x06m\n\x06\r\x06\x0E\x06" +
        "n\x03\x07\x06\x07r\n\x07\r\x07\x0E\x07s\x03\b\x03\b\x03\b\x03\t\x03\t" +
        "\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
        "\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\x9E\n\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x05\x19\xA4\n\x19\x03\x1A\x03\x1A\x03\x1B" +
        "\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x05\x1E\xAF\n\x1E\x03" +
        "\x1E\x03\x1E\x03\x1F\x03\x1F\x02\x02\x02 \x03\x02\x03\x05\x02\x04\x07" +
        "\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
        "\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02" +
        "\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191" +
        "\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 \x03\x02\x05" +
        "\x04\x02C\\c|\x03\x022;\x04\x02\v\v\"\"\x02\xC4\x02\x03\x03\x02\x02\x02" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
        "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
        "\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
        "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
        "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
        "\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
        "7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
        "\x02\x02\x03?\x03\x02\x02\x02\x05I\x03\x02\x02\x02\x07Y\x03\x02\x02\x02" +
        "\ti\x03\x02\x02\x02\vl\x03\x02\x02\x02\rq\x03\x02\x02\x02\x0Fu\x03\x02" +
        "\x02\x02\x11x\x03\x02\x02\x02\x13z\x03\x02\x02\x02\x15|\x03\x02\x02\x02" +
        "\x17~\x03\x02\x02\x02\x19\x80\x03\x02\x02\x02\x1B\x82\x03\x02\x02\x02" +
        "\x1D\x84\x03\x02\x02\x02\x1F\x86\x03\x02\x02\x02!\x88\x03\x02\x02\x02" +
        "#\x8A\x03\x02\x02\x02%\x8C\x03\x02\x02\x02\'\x8E\x03\x02\x02\x02)\x90" +
        "\x03\x02\x02\x02+\x92\x03\x02\x02\x02-\x94\x03\x02\x02\x02/\x96\x03\x02" +
        "\x02\x021\xA3\x03\x02\x02\x023\xA5\x03\x02\x02\x025\xA7\x03\x02\x02\x02" +
        "7\xA9\x03\x02\x02\x029\xAB\x03\x02\x02\x02;\xAE\x03\x02\x02\x02=\xB2\x03" +
        "\x02\x02\x02?@\x07<\x02\x02@A\x07f\x02\x02AB\x07q\x02\x02BC\x07e\x02\x02" +
        "CD\x07<\x02\x02D\x04\x03\x02\x02\x02EJ\x05-\x17\x02FJ\x05)\x15\x02GJ\x05" +
        "+\x16\x02HJ\x05\x1D\x0F\x02IE\x03\x02\x02\x02IF\x03\x02\x02\x02IG\x03" +
        "\x02\x02\x02IH\x03\x02\x02\x02JO\x03\x02\x02\x02KP\x05-\x17\x02LP\x05" +
        ")\x15\x02MP\x05+\x16\x02NP\x05\x1D\x0F\x02OK\x03\x02\x02\x02OL\x03\x02" +
        "\x02\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02PU\x03\x02\x02\x02QV\x05-" +
        "\x17\x02RV\x05)\x15\x02SV\x05+\x16\x02TV\x05\x1D\x0F\x02UQ\x03\x02\x02" +
        "\x02UR\x03\x02\x02\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02" +
        "\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\x06\x03\x02\x02\x02YZ\x05\'" +
        "\x14\x02Z^\x05;\x1E\x02[]\x05;\x1E\x02\\[\x03\x02\x02\x02]`\x03\x02\x02" +
        "\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02" +
        "\x02\x02ab\x05\'\x14\x02bc\x05\'\x14\x02c\b\x03\x02\x02\x02de\x05\r\x07" +
        "\x02ef\x057\x1C\x02fj\x03\x02\x02\x02gh\x07z\x02\x02hj\x057\x1C\x02id" +
        "\x03\x02\x02\x02ig\x03\x02\x02\x02j\n\x03\x02\x02\x02km\t\x02\x02\x02" +
        "lk\x03\x02\x02\x02mn\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02" +
        "o\f\x03\x02\x02\x02pr\t\x03\x02\x02qp\x03\x02\x02\x02rs\x03\x02\x02\x02" +
        "sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x0E\x03\x02\x02\x02uv\x05\'\x14" +
        "\x02vw\x05\'\x14\x02w\x10\x03\x02\x02\x02xy\x07]\x02\x02y\x12\x03\x02" +
        "\x02\x02z{\x07_\x02\x02{\x14\x03\x02\x02\x02|}\x07*\x02\x02}\x16\x03\x02" +
        "\x02\x02~\x7F\x07+\x02\x02\x7F\x18\x03\x02\x02\x02\x80\x81\x07>\x02\x02" +
        "\x81\x1A\x03\x02\x02\x02\x82\x83\x07@\x02\x02\x83\x1C\x03\x02\x02\x02" +
        "\x84\x85\x07`\x02\x02\x85\x1E\x03\x02\x02\x02\x86\x87\x07$\x02\x02\x87" +
        " \x03\x02\x02\x02\x88\x89\x07)\x02\x02\x89\"\x03\x02\x02\x02\x8A\x8B\x07" +
        "0\x02\x02\x8B$\x03\x02\x02\x02\x8C\x8D\x07=\x02\x02\x8D&\x03\x02\x02\x02" +
        "\x8E\x8F\x07<\x02\x02\x8F(\x03\x02\x02\x02\x90\x91\x07?\x02\x02\x91*\x03" +
        "\x02\x02\x02\x92\x93\x07-\x02\x02\x93,\x03\x02\x02\x02\x94\x95\x07/\x02" +
        "\x02\x95.\x03\x02\x02\x02\x96\x97\x07~\x02\x02\x970\x03\x02\x02\x02\x98" +
        "\x99\x070\x02\x02\x99\x9A\x070\x02\x02\x9A\x9B\x07\"\x02\x02\x9B\x9D\x03" +
        "\x02\x02\x02\x9C\x9E\x05;\x1E\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03" +
        "\x02\x02\x02\x9E\xA4\x03\x02\x02\x02\x9F\xA0\x070\x02\x02\xA0\xA1\x07" +
        "0\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x05;\x1E\x02\xA3\x98\x03\x02" +
        "\x02\x02\xA3\x9F\x03\x02\x02\x02\xA42\x03\x02\x02\x02\xA5\xA6\x07a\x02" +
        "\x02\xA64\x03\x02\x02\x02\xA7\xA8\x07b\x02\x02\xA86\x03\x02\x02\x02\xA9" +
        "\xAA\x07,\x02\x02\xAA8\x03\x02\x02\x02\xAB\xAC\t\x04\x02\x02\xAC:\x03" +
        "\x02\x02\x02\xAD\xAF\x07\x0F\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03" +
        "\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x07\f\x02\x02\xB1<\x03\x02" +
        "\x02\x02\xB2\xB3\v\x02\x02\x02\xB3>\x03\x02\x02\x02\x0E\x02IOUW^ins\x9D" +
        "\xA3\xAE\x02";
    return ReStructuredTextLexer;
}(Lexer_1.Lexer));
exports.ReStructuredTextLexer = ReStructuredTextLexer;