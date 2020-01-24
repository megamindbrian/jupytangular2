"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/metric/metric.g4 by ANTLR 4.7.3-SNAPSHOT
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
var metricLexer = /** @class */ (function (_super) {
    __extends(metricLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function metricLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(metricLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(metricLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return metricLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "metric.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return metricLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return metricLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricLexer.prototype, "channelNames", {
        // @Override
        get: function () { return metricLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricLexer.prototype, "modeNames", {
        // @Override
        get: function () { return metricLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(metricLexer, "_ATN", {
        get: function () {
            if (!metricLexer.__ATN) {
                metricLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(metricLexer._serializedATN));
            }
            return metricLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    metricLexer.T__0 = 1;
    metricLexer.T__1 = 2;
    metricLexer.T__2 = 3;
    metricLexer.T__3 = 4;
    metricLexer.T__4 = 5;
    metricLexer.T__5 = 6;
    metricLexer.T__6 = 7;
    metricLexer.T__7 = 8;
    metricLexer.T__8 = 9;
    metricLexer.T__9 = 10;
    metricLexer.T__10 = 11;
    metricLexer.T__11 = 12;
    metricLexer.T__12 = 13;
    metricLexer.T__13 = 14;
    metricLexer.T__14 = 15;
    metricLexer.T__15 = 16;
    metricLexer.T__16 = 17;
    metricLexer.T__17 = 18;
    metricLexer.T__18 = 19;
    metricLexer.T__19 = 20;
    metricLexer.T__20 = 21;
    metricLexer.T__21 = 22;
    metricLexer.T__22 = 23;
    metricLexer.T__23 = 24;
    metricLexer.T__24 = 25;
    metricLexer.T__25 = 26;
    metricLexer.T__26 = 27;
    metricLexer.T__27 = 28;
    metricLexer.T__28 = 29;
    metricLexer.T__29 = 30;
    metricLexer.T__30 = 31;
    metricLexer.T__31 = 32;
    metricLexer.T__32 = 33;
    metricLexer.T__33 = 34;
    metricLexer.T__34 = 35;
    metricLexer.T__35 = 36;
    metricLexer.T__36 = 37;
    metricLexer.T__37 = 38;
    metricLexer.T__38 = 39;
    metricLexer.T__39 = 40;
    metricLexer.T__40 = 41;
    metricLexer.T__41 = 42;
    metricLexer.T__42 = 43;
    metricLexer.T__43 = 44;
    metricLexer.T__44 = 45;
    metricLexer.T__45 = 46;
    metricLexer.INTE = 47;
    metricLexer.WS = 48;
    // tslint:disable:no-trailing-whitespace
    metricLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    metricLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    metricLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24",
        "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32",
        "T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40",
        "T__41", "T__42", "T__43", "T__44", "T__45", "INTE", "WS",
    ];
    metricLexer._LITERAL_NAMES = [
        undefined, "'*'", "'/'", "'^'", "'E'", "'P'", "'T'", "'G'", "'M'", "'k'",
        "'h'", "'da'", "'d'", "'c'", "'m'", "'\u00B5'", "'n'", "'p'", "'f'", "'a'",
        "'g'", "'s'", "'A'", "'K'", "'mol'", "'cd'", "'rad'", "'Hz'", "'sr'",
        "'N'", "'Pa'", "'J'", "'W'", "'C'", "'V'", "'F'", "'\u03A9'", "'S'", "'Wb'",
        "'H'", "'\u02DAC'", "'lm'", "'lx'", "'Bq'", "'Gy'", "'Sv'", "'kat'",
    ];
    metricLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "INTE", "WS",
    ];
    metricLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(metricLexer._LITERAL_NAMES, metricLexer._SYMBOLIC_NAMES, []);
    metricLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x022\xDA\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
        "\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
        "\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
        "\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
        "&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03+" +
        "\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03" +
        "/\x03/\x030\x060\xD3\n0\r0\x0E0\xD4\x031\x031\x031\x031\x02\x02\x022\x03" +
        "\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
        "\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
        "\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
        "-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
        "=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S" +
        "\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022\x03\x02\x04\x03\x022;" +
        "\x05\x02\v\f\x0F\x0F\"\"\x02\xDA\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
        "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
        "\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
        "\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
        "\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
        "\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02" +
        "\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+" +
        "\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
        "\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
        "\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
        "\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
        "\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
        "M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
        "\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
        "\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
        "\x02\x02\x02\x03c\x03\x02\x02\x02\x05e\x03\x02\x02\x02\x07g\x03\x02\x02" +
        "\x02\ti\x03\x02\x02\x02\vk\x03\x02\x02\x02\rm\x03\x02\x02\x02\x0Fo\x03" +
        "\x02\x02\x02\x11q\x03\x02\x02\x02\x13s\x03\x02\x02\x02\x15u\x03\x02\x02" +
        "\x02\x17w\x03\x02\x02\x02\x19z\x03\x02\x02\x02\x1B|\x03\x02\x02\x02\x1D" +
        "~\x03\x02\x02\x02\x1F\x80\x03\x02\x02\x02!\x82\x03\x02\x02\x02#\x84\x03" +
        "\x02\x02\x02%\x86\x03\x02\x02\x02\'\x88\x03\x02\x02\x02)\x8A\x03\x02\x02" +
        "\x02+\x8C\x03\x02\x02\x02-\x8E\x03\x02\x02\x02/\x90\x03\x02\x02\x021\x92" +
        "\x03\x02\x02\x023\x96\x03\x02\x02\x025\x99\x03\x02\x02\x027\x9D\x03\x02" +
        "\x02\x029\xA0\x03\x02\x02\x02;\xA3\x03\x02\x02\x02=\xA5\x03\x02\x02\x02" +
        "?\xA8\x03\x02\x02\x02A\xAA\x03\x02\x02\x02C\xAC\x03\x02\x02\x02E\xAE\x03" +
        "\x02\x02\x02G\xB0\x03\x02\x02\x02I\xB2\x03\x02\x02\x02K\xB4\x03\x02\x02" +
        "\x02M\xB6\x03\x02\x02\x02O\xB9\x03\x02\x02\x02Q\xBB\x03\x02\x02\x02S\xBE" +
        "\x03\x02\x02\x02U\xC1\x03\x02\x02\x02W\xC4\x03\x02\x02\x02Y\xC7\x03\x02" +
        "\x02\x02[\xCA\x03\x02\x02\x02]\xCD\x03\x02\x02\x02_\xD2\x03\x02\x02\x02" +
        "a\xD6\x03\x02\x02\x02cd\x07,\x02\x02d\x04\x03\x02\x02\x02ef\x071\x02\x02" +
        "f\x06\x03\x02\x02\x02gh\x07`\x02\x02h\b\x03\x02\x02\x02ij\x07G\x02\x02" +
        "j\n\x03\x02\x02\x02kl\x07R\x02\x02l\f\x03\x02\x02\x02mn\x07V\x02\x02n" +
        "\x0E\x03\x02\x02\x02op\x07I\x02\x02p\x10\x03\x02\x02\x02qr\x07O\x02\x02" +
        "r\x12\x03\x02\x02\x02st\x07m\x02\x02t\x14\x03\x02\x02\x02uv\x07j\x02\x02" +
        "v\x16\x03\x02\x02\x02wx\x07f\x02\x02xy\x07c\x02\x02y\x18\x03\x02\x02\x02" +
        "z{\x07f\x02\x02{\x1A\x03\x02\x02\x02|}\x07e\x02\x02}\x1C\x03\x02\x02\x02" +
        "~\x7F\x07o\x02\x02\x7F\x1E\x03\x02\x02\x02\x80\x81\x07\xB7\x02\x02\x81" +
        " \x03\x02\x02\x02\x82\x83\x07p\x02\x02\x83\"\x03\x02\x02\x02\x84\x85\x07" +
        "r\x02\x02\x85$\x03\x02\x02\x02\x86\x87\x07h\x02\x02\x87&\x03\x02\x02\x02" +
        "\x88\x89\x07c\x02\x02\x89(\x03\x02\x02\x02\x8A\x8B\x07i\x02\x02\x8B*\x03" +
        "\x02\x02\x02\x8C\x8D\x07u\x02\x02\x8D,\x03\x02\x02\x02\x8E\x8F\x07C\x02" +
        "\x02\x8F.\x03\x02\x02\x02\x90\x91\x07M\x02\x02\x910\x03\x02\x02\x02\x92" +
        "\x93\x07o\x02\x02\x93\x94\x07q\x02\x02\x94\x95\x07n\x02\x02\x952\x03\x02" +
        "\x02\x02\x96\x97\x07e\x02\x02\x97\x98\x07f\x02\x02\x984\x03\x02\x02\x02" +
        "\x99\x9A\x07t\x02\x02\x9A\x9B\x07c\x02\x02\x9B\x9C\x07f\x02\x02\x9C6\x03" +
        "\x02\x02\x02\x9D\x9E\x07J\x02\x02\x9E\x9F\x07|\x02\x02\x9F8\x03\x02\x02" +
        "\x02\xA0\xA1\x07u\x02\x02\xA1\xA2\x07t\x02\x02\xA2:\x03\x02\x02\x02\xA3" +
        "\xA4\x07P\x02\x02\xA4<\x03\x02\x02\x02\xA5\xA6\x07R\x02\x02\xA6\xA7\x07" +
        "c\x02\x02\xA7>\x03\x02\x02\x02\xA8\xA9\x07L\x02\x02\xA9@\x03\x02\x02\x02" +
        "\xAA\xAB\x07Y\x02\x02\xABB\x03\x02\x02\x02\xAC\xAD\x07E\x02\x02\xADD\x03" +
        "\x02\x02\x02\xAE\xAF\x07X\x02\x02\xAFF\x03\x02\x02\x02\xB0\xB1\x07H\x02" +
        "\x02\xB1H\x03\x02\x02\x02\xB2\xB3\x07\u03AB\x02\x02\xB3J\x03\x02\x02\x02" +
        "\xB4\xB5\x07U\x02\x02\xB5L\x03\x02\x02\x02\xB6\xB7\x07Y\x02\x02\xB7\xB8" +
        "\x07d\x02\x02\xB8N\x03\x02\x02\x02\xB9\xBA\x07J\x02\x02\xBAP\x03\x02\x02" +
        "\x02\xBB\xBC\x07\u02DC\x02\x02\xBC\xBD\x07E\x02\x02\xBDR\x03\x02\x02\x02" +
        "\xBE\xBF\x07n\x02\x02\xBF\xC0\x07o\x02\x02\xC0T\x03\x02\x02\x02\xC1\xC2" +
        "\x07n\x02\x02\xC2\xC3\x07z\x02\x02\xC3V\x03\x02\x02\x02\xC4\xC5\x07D\x02" +
        "\x02\xC5\xC6\x07s\x02\x02\xC6X\x03\x02\x02\x02\xC7\xC8\x07I\x02\x02\xC8" +
        "\xC9\x07{\x02\x02\xC9Z\x03\x02\x02\x02\xCA\xCB\x07U\x02\x02\xCB\xCC\x07" +
        "x\x02\x02\xCC\\\x03\x02\x02\x02\xCD\xCE\x07m\x02\x02\xCE\xCF\x07c\x02" +
        "\x02\xCF\xD0\x07v\x02\x02\xD0^\x03\x02\x02\x02\xD1\xD3\t\x02\x02\x02\xD2" +
        "\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4" +
        "\xD5\x03\x02\x02\x02\xD5`\x03\x02\x02\x02\xD6\xD7\t\x03\x02\x02\xD7\xD8" +
        "\x03\x02\x02\x02\xD8\xD9\b1\x02\x02\xD9b\x03\x02\x02\x02\x04\x02\xD4\x03" +
        "\b\x02\x02";
    return metricLexer;
}(Lexer_1.Lexer));
exports.metricLexer = metricLexer;