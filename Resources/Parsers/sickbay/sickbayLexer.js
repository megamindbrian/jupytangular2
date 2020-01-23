"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sickbay/sickbay.g4 by ANTLR 4.7.3-SNAPSHOT
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
var sickbayLexer = /** @class */ (function (_super) {
    __extends(sickbayLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function sickbayLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(sickbayLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(sickbayLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return sickbayLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "sickbay.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return sickbayLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return sickbayLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayLexer.prototype, "channelNames", {
        // @Override
        get: function () { return sickbayLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayLexer.prototype, "modeNames", {
        // @Override
        get: function () { return sickbayLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sickbayLexer, "_ATN", {
        get: function () {
            if (!sickbayLexer.__ATN) {
                sickbayLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sickbayLexer._serializedATN));
            }
            return sickbayLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    sickbayLexer.T__0 = 1;
    sickbayLexer.T__1 = 2;
    sickbayLexer.T__2 = 3;
    sickbayLexer.T__3 = 4;
    sickbayLexer.T__4 = 5;
    sickbayLexer.T__5 = 6;
    sickbayLexer.T__6 = 7;
    sickbayLexer.T__7 = 8;
    sickbayLexer.T__8 = 9;
    sickbayLexer.T__9 = 10;
    sickbayLexer.T__10 = 11;
    sickbayLexer.T__11 = 12;
    sickbayLexer.T__12 = 13;
    sickbayLexer.T__13 = 14;
    sickbayLexer.T__14 = 15;
    sickbayLexer.T__15 = 16;
    sickbayLexer.T__16 = 17;
    sickbayLexer.INTOP = 18;
    sickbayLexer.IINTID = 19;
    sickbayLexer.INTCONST = 20;
    sickbayLexer.STRCONST = 21;
    sickbayLexer.ARBTEXT = 22;
    sickbayLexer.NL = 23;
    sickbayLexer.WS = 24;
    // tslint:disable:no-trailing-whitespace
    sickbayLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    sickbayLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    sickbayLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "INTOP", "IINTID", "INTCONST", "STRCONST", "ARBTEXT", "NL", "WS",
    ];
    sickbayLexer._LITERAL_NAMES = [
        undefined, "':'", "'REM'", "'LET'", "'='", "'GOTO'", "'GOSUB'", "'RETURN'",
        "'END'", "'PROLONG'", "'CUTSHORT'", "'DIM'", "'RING'", "'('", "')'", "'INPUT'",
        "'CHR$'", "'RND%'",
    ];
    sickbayLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "INTOP", "IINTID", "INTCONST",
        "STRCONST", "ARBTEXT", "NL", "WS",
    ];
    sickbayLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sickbayLexer._LITERAL_NAMES, sickbayLexer._SYMBOLIC_NAMES, []);
    sickbayLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1A\xA4\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
        "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15" +
        "\x03\x15\x07\x15\x8B\n\x15\f\x15\x0E\x15\x8E\v\x15\x03\x16\x03\x16\x07" +
        "\x16\x92\n\x16\f\x16\x0E\x16\x95\v\x16\x03\x16\x03\x16\x03\x17\x07\x17" +
        "\x9A\n\x17\f\x17\x0E\x17\x9D\v\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
        "\x19\x03\x19\x02\x02\x02\x1A\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
        "\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
        "\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
        "\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A\x03\x02" +
        "\n\x05\x02,-//11\x03\x02C\\\x05\x02\'\'2;C\\\x03\x022;\x03\x02$$\x03\x02" +
        "\f\f\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x02\xA6\x02\x03\x03\x02" +
        "\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
        "\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
        "\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
        "\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
        "\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
        "\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
        ")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
        "\x02\x02\x021\x03\x02\x02\x02\x033\x03\x02\x02\x02\x055\x03\x02\x02\x02" +
        "\x079\x03\x02\x02\x02\t=\x03\x02\x02\x02\v?\x03\x02\x02\x02\rD\x03\x02" +
        "\x02\x02\x0FJ\x03\x02\x02\x02\x11Q\x03\x02\x02\x02\x13U\x03\x02\x02\x02" +
        "\x15]\x03\x02\x02\x02\x17f\x03\x02\x02\x02\x19j\x03\x02\x02\x02\x1Bo\x03" +
        "\x02\x02\x02\x1Dq\x03\x02\x02\x02\x1Fs\x03\x02\x02\x02!y\x03\x02\x02\x02" +
        "#~\x03\x02\x02\x02%\x83\x03\x02\x02\x02\'\x85\x03\x02\x02\x02)\x88\x03" +
        "\x02\x02\x02+\x8F\x03\x02\x02\x02-\x9B\x03\x02\x02\x02/\x9E\x03\x02\x02" +
        "\x021\xA0\x03\x02\x02\x0234\x07<\x02\x024\x04\x03\x02\x02\x0256\x07T\x02" +
        "\x0267\x07G\x02\x0278\x07O\x02\x028\x06\x03\x02\x02\x029:\x07N\x02\x02" +
        ":;\x07G\x02\x02;<\x07V\x02\x02<\b\x03\x02\x02\x02=>\x07?\x02\x02>\n\x03" +
        "\x02\x02\x02?@\x07I\x02\x02@A\x07Q\x02\x02AB\x07V\x02\x02BC\x07Q\x02\x02" +
        "C\f\x03\x02\x02\x02DE\x07I\x02\x02EF\x07Q\x02\x02FG\x07U\x02\x02GH\x07" +
        "W\x02\x02HI\x07D\x02\x02I\x0E\x03\x02\x02\x02JK\x07T\x02\x02KL\x07G\x02" +
        "\x02LM\x07V\x02\x02MN\x07W\x02\x02NO\x07T\x02\x02OP\x07P\x02\x02P\x10" +
        "\x03\x02\x02\x02QR\x07G\x02\x02RS\x07P\x02\x02ST\x07F\x02\x02T\x12\x03" +
        "\x02\x02\x02UV\x07R\x02\x02VW\x07T\x02\x02WX\x07Q\x02\x02XY\x07N\x02\x02" +
        "YZ\x07Q\x02\x02Z[\x07P\x02\x02[\\\x07I\x02\x02\\\x14\x03\x02\x02\x02]" +
        "^\x07E\x02\x02^_\x07W\x02\x02_`\x07V\x02\x02`a\x07U\x02\x02ab\x07J\x02" +
        "\x02bc\x07Q\x02\x02cd\x07T\x02\x02de\x07V\x02\x02e\x16\x03\x02\x02\x02" +
        "fg\x07F\x02\x02gh\x07K\x02\x02hi\x07O\x02\x02i\x18\x03\x02\x02\x02jk\x07" +
        "T\x02\x02kl\x07K\x02\x02lm\x07P\x02\x02mn\x07I\x02\x02n\x1A\x03\x02\x02" +
        "\x02op\x07*\x02\x02p\x1C\x03\x02\x02\x02qr\x07+\x02\x02r\x1E\x03\x02\x02" +
        "\x02st\x07K\x02\x02tu\x07P\x02\x02uv\x07R\x02\x02vw\x07W\x02\x02wx\x07" +
        "V\x02\x02x \x03\x02\x02\x02yz\x07E\x02\x02z{\x07J\x02\x02{|\x07T\x02\x02" +
        "|}\x07&\x02\x02}\"\x03\x02\x02\x02~\x7F\x07T\x02\x02\x7F\x80\x07P\x02" +
        "\x02\x80\x81\x07F\x02\x02\x81\x82\x07\'\x02\x02\x82$\x03\x02\x02\x02\x83" +
        "\x84\t\x02\x02\x02\x84&\x03\x02\x02\x02\x85\x86\t\x03\x02\x02\x86\x87" +
        "\t\x04\x02\x02\x87(\x03\x02\x02\x02\x88\x8C\t\x05\x02\x02\x89\x8B\t\x05" +
        "\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02" +
        "\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D*\x03\x02\x02\x02\x8E\x8C\x03\x02" +
        "\x02\x02\x8F\x93\x07$\x02\x02\x90\x92\n\x06\x02\x02\x91\x90\x03\x02\x02" +
        "\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02" +
        "\x02\x94\x96\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x97\x07$\x02" +
        "\x02\x97,\x03\x02\x02\x02\x98\x9A\n\x07\x02\x02\x99\x98\x03\x02\x02\x02" +
        "\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
        "\x9C.\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\t\b\x02\x02\x9F" +
        "0\x03\x02\x02\x02\xA0\xA1\t\t\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3" +
        "\b\x19\x02\x02\xA32\x03\x02\x02\x02\x06\x02\x8C\x93\x9B\x03\b\x02\x02";
    return sickbayLexer;
}(Lexer_1.Lexer));
exports.sickbayLexer = sickbayLexer;
