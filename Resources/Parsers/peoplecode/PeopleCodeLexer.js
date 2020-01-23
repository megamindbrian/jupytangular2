"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/peoplecode/PeopleCode.g4 by ANTLR 4.7.3-SNAPSHOT
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
var PeopleCodeLexer = /** @class */ (function (_super) {
    __extends(PeopleCodeLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function PeopleCodeLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(PeopleCodeLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(PeopleCodeLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PeopleCodeLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "PeopleCode.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return PeopleCodeLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return PeopleCodeLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeLexer.prototype, "channelNames", {
        // @Override
        get: function () { return PeopleCodeLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeLexer.prototype, "modeNames", {
        // @Override
        get: function () { return PeopleCodeLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeopleCodeLexer, "_ATN", {
        get: function () {
            if (!PeopleCodeLexer.__ATN) {
                PeopleCodeLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PeopleCodeLexer._serializedATN));
            }
            return PeopleCodeLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PeopleCodeLexer.T__0 = 1;
    PeopleCodeLexer.T__1 = 2;
    PeopleCodeLexer.T__2 = 3;
    PeopleCodeLexer.T__3 = 4;
    PeopleCodeLexer.T__4 = 5;
    PeopleCodeLexer.T__5 = 6;
    PeopleCodeLexer.T__6 = 7;
    PeopleCodeLexer.T__7 = 8;
    PeopleCodeLexer.T__8 = 9;
    PeopleCodeLexer.T__9 = 10;
    PeopleCodeLexer.T__10 = 11;
    PeopleCodeLexer.T__11 = 12;
    PeopleCodeLexer.T__12 = 13;
    PeopleCodeLexer.T__13 = 14;
    PeopleCodeLexer.T__14 = 15;
    PeopleCodeLexer.T__15 = 16;
    PeopleCodeLexer.T__16 = 17;
    PeopleCodeLexer.T__17 = 18;
    PeopleCodeLexer.T__18 = 19;
    PeopleCodeLexer.T__19 = 20;
    PeopleCodeLexer.T__20 = 21;
    PeopleCodeLexer.T__21 = 22;
    PeopleCodeLexer.T__22 = 23;
    PeopleCodeLexer.T__23 = 24;
    PeopleCodeLexer.T__24 = 25;
    PeopleCodeLexer.T__25 = 26;
    PeopleCodeLexer.T__26 = 27;
    PeopleCodeLexer.T__27 = 28;
    PeopleCodeLexer.T__28 = 29;
    PeopleCodeLexer.T__29 = 30;
    PeopleCodeLexer.T__30 = 31;
    PeopleCodeLexer.T__31 = 32;
    PeopleCodeLexer.T__32 = 33;
    PeopleCodeLexer.T__33 = 34;
    PeopleCodeLexer.T__34 = 35;
    PeopleCodeLexer.T__35 = 36;
    PeopleCodeLexer.T__36 = 37;
    PeopleCodeLexer.T__37 = 38;
    PeopleCodeLexer.T__38 = 39;
    PeopleCodeLexer.T__39 = 40;
    PeopleCodeLexer.T__40 = 41;
    PeopleCodeLexer.T__41 = 42;
    PeopleCodeLexer.T__42 = 43;
    PeopleCodeLexer.T__43 = 44;
    PeopleCodeLexer.T__44 = 45;
    PeopleCodeLexer.T__45 = 46;
    PeopleCodeLexer.T__46 = 47;
    PeopleCodeLexer.T__47 = 48;
    PeopleCodeLexer.T__48 = 49;
    PeopleCodeLexer.T__49 = 50;
    PeopleCodeLexer.T__50 = 51;
    PeopleCodeLexer.T__51 = 52;
    PeopleCodeLexer.T__52 = 53;
    PeopleCodeLexer.T__53 = 54;
    PeopleCodeLexer.T__54 = 55;
    PeopleCodeLexer.T__55 = 56;
    PeopleCodeLexer.T__56 = 57;
    PeopleCodeLexer.T__57 = 58;
    PeopleCodeLexer.T__58 = 59;
    PeopleCodeLexer.T__59 = 60;
    PeopleCodeLexer.T__60 = 61;
    PeopleCodeLexer.T__61 = 62;
    PeopleCodeLexer.T__62 = 63;
    PeopleCodeLexer.T__63 = 64;
    PeopleCodeLexer.T__64 = 65;
    PeopleCodeLexer.T__65 = 66;
    PeopleCodeLexer.T__66 = 67;
    PeopleCodeLexer.T__67 = 68;
    PeopleCodeLexer.T__68 = 69;
    PeopleCodeLexer.T__69 = 70;
    PeopleCodeLexer.T__70 = 71;
    PeopleCodeLexer.DecimalLiteral = 72;
    PeopleCodeLexer.IntegerLiteral = 73;
    PeopleCodeLexer.StringLiteral = 74;
    PeopleCodeLexer.BoolLiteral = 75;
    PeopleCodeLexer.VAR_ID = 76;
    PeopleCodeLexer.SYS_VAR_ID = 77;
    PeopleCodeLexer.GENERIC_ID = 78;
    PeopleCodeLexer.REM = 79;
    PeopleCodeLexer.COMMENT_1 = 80;
    PeopleCodeLexer.COMMENT_2 = 81;
    PeopleCodeLexer.COMMENT_3 = 82;
    PeopleCodeLexer.WS = 83;
    // tslint:disable:no-trailing-whitespace
    PeopleCodeLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    PeopleCodeLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    PeopleCodeLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
        "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24",
        "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32",
        "T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40",
        "T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48",
        "T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56",
        "T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64",
        "T__65", "T__66", "T__67", "T__68", "T__69", "T__70", "DecimalLiteral",
        "IntegerLiteral", "StringLiteral", "BoolLiteral", "VAR_ID", "SYS_VAR_ID",
        "GENERIC_ID", "REM", "COMMENT_1", "COMMENT_2", "COMMENT_3", "WS",
    ];
    PeopleCodeLexer._LITERAL_NAMES = [
        undefined, "';'", "'Exit'", "'Break'", "'Error'", "'Warning'", "'Return'",
        "'throw'", "'='", "'('", "')'", "'@'", "'.'", "'['", "']'", "'-'", "'Not'",
        "'*'", "'/'", "'+'", "'<='", "'>='", "'<'", "'>'", "'<>'", "'And'", "'Or'",
        "'|'", "','", "'of'", "'import'", "':'", "'Declare'", "'Function'", "'PeopleCode'",
        "'FieldFormula'", "'FieldChange'", "'class'", "'end-class'", "'private'",
        "'method'", "'Constant'", "'property'", "'get'", "'set'", "'readonly'",
        "'instance'", "'end-method'", "'end-get'", "'end-set'", "'End-Function'",
        "'As'", "'Returns'", "'If'", "'Then'", "'Else'", "'End-If'", "'For'",
        "'To'", "'Step'", "'End-For'", "'While'", "'End-While'", "'Evaluate'",
        "'End-Evaluate'", "'When'", "'When-Other'", "'try'", "'end-try'", "'catch'",
        "'Exception'", "'create'",
    ];
    PeopleCodeLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "DecimalLiteral", "IntegerLiteral", "StringLiteral",
        "BoolLiteral", "VAR_ID", "SYS_VAR_ID", "GENERIC_ID", "REM", "COMMENT_1",
        "COMMENT_2", "COMMENT_3", "WS",
    ];
    PeopleCodeLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PeopleCodeLexer._LITERAL_NAMES, PeopleCodeLexer._SYMBOLIC_NAMES, []);
    PeopleCodeLexer._serializedATNSegments = 2;
    PeopleCodeLexer._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02U\u02BA\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t" +
        "\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
        "\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16" +
        "\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
        "\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!" +
        "\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#" +
        "\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
        "$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03" +
        "%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
        "+\x03+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
        "0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x03" +
        "1\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x033\x03" +
        "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x034\x034\x03" +
        "4\x035\x035\x035\x035\x035\x035\x035\x035\x036\x036\x036\x037\x037\x03" +
        "7\x037\x037\x038\x038\x038\x038\x038\x039\x039\x039\x039\x039\x039\x03" +
        "9\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03=\x03" +
        "=\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03?\x03" +
        "?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03" +
        "@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
        "C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03" +
        "E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03" +
        "I\x06I\u0247\nI\rI\x0EI\u0248\x03J\x03J\x03J\x07J\u024E\nJ\fJ\x0EJ\u0251" +
        "\vJ\x05J\u0253\nJ\x03K\x03K\x07K\u0257\nK\fK\x0EK\u025A\vK\x03K\x03K\x03" +
        "L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0267\nL\x03M\x03M\x03" +
        "M\x03N\x03N\x03N\x03O\x03O\x07O\u0271\nO\fO\x0EO\u0274\vO\x03P\x05P\u0277" +
        "\nP\x03P\x03P\x03P\x03P\x03P\x07P\u027E\nP\fP\x0EP\u0281\vP\x03P\x03P" +
        "\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x07Q\u028B\nQ\fQ\x0EQ\u028E\vQ\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x07R\u0299\nR\fR\x0ER\u029C\vR\x03" +
        "R\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x07S\u02A7\nS\fS\x0ES\u02AA" +
        "\vS\x03S\x03S\x03S\x03S\x05S\u02B0\nS\x03S\x03S\x03T\x06T\u02B5\nT\rT" +
        "\x0ET\u02B6\x03T\x03T\x06\u027F\u028C\u029A\u02A8\x02\x02U\x03\x02\x03" +
        "\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
        "\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
        "\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
        "/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
        "?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U" +
        "\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x02" +
        "7m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02" +
        "B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02" +
        "J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02Q\xA1\x02" +
        "R\xA3\x02S\xA5\x02T\xA7\x02U\x03\x02\n\x03\x022;\x03\x02$$\x04\x02C\\" +
        "c|\x07\x02%%2;C\\aac|\x04\x02TTtt\x04\x02GGgg\x04\x02OOoo\x05\x02\v\f" +
        "\x0F\x0F\"\"\x02\u02C6\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
        "\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
        "\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
        "\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
        "\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
        "\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
        "\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
        "\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
        "3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02" +
        "\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
        "\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03" +
        "\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02" +
        "\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02" +
        "U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02" +
        "\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02" +
        "\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03" +
        "\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02" +
        "\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02" +
        "w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02" +
        "\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02" +
        "\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02" +
        "\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02" +
        "\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02" +
        "\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02\x9B\x03\x02" +
        "\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02" +
        "\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03\x02" +
        "\x02\x02\x03\xA9\x03\x02\x02\x02\x05\xAB\x03\x02\x02\x02\x07\xB0\x03\x02" +
        "\x02\x02\t\xB6\x03\x02\x02\x02\v\xBC\x03\x02\x02\x02\r\xC4\x03\x02\x02" +
        "\x02\x0F\xCB\x03\x02\x02\x02\x11\xD1\x03\x02\x02\x02\x13\xD3\x03\x02\x02" +
        "\x02\x15\xD5\x03\x02\x02\x02\x17\xD7\x03\x02\x02\x02\x19\xD9\x03\x02\x02" +
        "\x02\x1B\xDB\x03\x02\x02\x02\x1D\xDD\x03\x02\x02\x02\x1F\xDF\x03\x02\x02" +
        "\x02!\xE1\x03\x02\x02\x02#\xE5\x03\x02\x02\x02%\xE7\x03\x02\x02\x02\'" +
        "\xE9\x03\x02\x02\x02)\xEB\x03\x02\x02\x02+\xEE\x03\x02\x02\x02-\xF1\x03" +
        "\x02\x02\x02/\xF3\x03\x02\x02\x021\xF5\x03\x02\x02\x023\xF8\x03\x02\x02" +
        "\x025\xFC\x03\x02\x02\x027\xFF\x03\x02\x02\x029\u0101\x03\x02\x02\x02" +
        ";\u0103\x03\x02\x02\x02=\u0106\x03\x02\x02\x02?\u010D\x03\x02\x02\x02" +
        "A\u010F\x03\x02\x02\x02C\u0117\x03\x02\x02\x02E\u0120\x03\x02\x02\x02" +
        "G\u012B\x03\x02\x02\x02I\u0138\x03\x02\x02\x02K\u0144\x03\x02\x02\x02" +
        "M\u014A\x03\x02\x02\x02O\u0154\x03\x02\x02\x02Q\u015C\x03\x02\x02\x02" +
        "S\u0163\x03\x02\x02\x02U\u016C\x03\x02\x02\x02W\u0175\x03\x02\x02\x02" +
        "Y\u0179\x03\x02\x02\x02[\u017D\x03\x02\x02\x02]\u0186\x03\x02\x02\x02" +
        "_\u018F\x03\x02\x02\x02a\u019A\x03\x02\x02\x02c\u01A2\x03\x02\x02\x02" +
        "e\u01AA\x03\x02\x02\x02g\u01B7\x03\x02\x02\x02i\u01BA\x03\x02\x02\x02" +
        "k\u01C2\x03\x02\x02\x02m\u01C5\x03\x02\x02\x02o\u01CA\x03\x02\x02\x02" +
        "q\u01CF\x03\x02\x02\x02s\u01D6\x03\x02\x02\x02u\u01DA\x03\x02\x02\x02" +
        "w\u01DD\x03\x02\x02\x02y\u01E2\x03\x02\x02\x02{\u01EA\x03\x02\x02\x02" +
        "}\u01F0\x03\x02\x02\x02\x7F\u01FA\x03\x02\x02\x02\x81\u0203\x03\x02\x02" +
        "\x02\x83\u0210\x03\x02\x02\x02\x85\u0215\x03\x02\x02\x02\x87\u0220\x03" +
        "\x02\x02\x02\x89\u0224\x03\x02\x02\x02\x8B\u022C\x03\x02\x02\x02\x8D\u0232" +
        "\x03\x02\x02\x02\x8F\u023C\x03\x02\x02\x02\x91\u0243\x03\x02\x02\x02\x93" +
        "\u0252\x03\x02\x02\x02\x95\u0254\x03\x02\x02\x02\x97\u0266\x03\x02\x02" +
        "\x02\x99\u0268\x03\x02\x02\x02\x9B\u026B\x03\x02\x02\x02\x9D\u026E\x03" +
        "\x02\x02\x02\x9F\u0276\x03\x02\x02\x02\xA1\u0286\x03\x02\x02\x02\xA3\u0294" +
        "\x03\x02\x02\x02\xA5\u02A2\x03\x02\x02\x02\xA7\u02B4\x03\x02\x02\x02\xA9" +
        "\xAA\x07=\x02\x02\xAA\x04\x03\x02\x02\x02\xAB\xAC\x07G\x02\x02\xAC\xAD" +
        "\x07z\x02\x02\xAD\xAE\x07k\x02\x02\xAE\xAF\x07v\x02\x02\xAF\x06\x03\x02" +
        "\x02\x02\xB0\xB1\x07D\x02\x02\xB1\xB2\x07t\x02\x02\xB2\xB3\x07g\x02\x02" +
        "\xB3\xB4\x07c\x02\x02\xB4\xB5\x07m\x02\x02\xB5\b\x03\x02\x02\x02\xB6\xB7" +
        "\x07G\x02\x02\xB7\xB8\x07t\x02\x02\xB8\xB9\x07t\x02\x02\xB9\xBA\x07q\x02" +
        "\x02\xBA\xBB\x07t\x02\x02\xBB\n\x03\x02\x02\x02\xBC\xBD\x07Y\x02\x02\xBD" +
        "\xBE\x07c\x02\x02\xBE\xBF\x07t\x02\x02\xBF\xC0\x07p\x02\x02\xC0\xC1\x07" +
        "k\x02\x02\xC1\xC2\x07p\x02\x02\xC2\xC3\x07i\x02\x02\xC3\f\x03\x02\x02" +
        "\x02\xC4\xC5\x07T\x02\x02\xC5\xC6\x07g\x02\x02\xC6\xC7\x07v\x02\x02\xC7" +
        "\xC8\x07w\x02\x02\xC8\xC9\x07t\x02\x02\xC9\xCA\x07p\x02\x02\xCA\x0E\x03" +
        "\x02\x02\x02\xCB\xCC\x07v\x02\x02\xCC\xCD\x07j\x02\x02\xCD\xCE\x07t\x02" +
        "\x02\xCE\xCF\x07q\x02\x02\xCF\xD0\x07y\x02\x02\xD0\x10\x03\x02\x02\x02" +
        "\xD1\xD2\x07?\x02\x02\xD2\x12\x03\x02\x02\x02\xD3\xD4\x07*\x02\x02\xD4" +
        "\x14\x03\x02\x02\x02\xD5\xD6\x07+\x02\x02\xD6\x16\x03\x02\x02\x02\xD7" +
        "\xD8\x07B\x02\x02\xD8\x18\x03\x02\x02\x02\xD9\xDA\x070\x02\x02\xDA\x1A" +
        "\x03\x02\x02\x02\xDB\xDC\x07]\x02\x02\xDC\x1C\x03\x02\x02\x02\xDD\xDE" +
        "\x07_\x02\x02\xDE\x1E\x03\x02\x02\x02\xDF\xE0\x07/\x02\x02\xE0 \x03\x02" +
        "\x02\x02\xE1\xE2\x07P\x02\x02\xE2\xE3\x07q\x02\x02\xE3\xE4\x07v\x02\x02" +
        "\xE4\"\x03\x02\x02\x02\xE5\xE6\x07,\x02\x02\xE6$\x03\x02\x02\x02\xE7\xE8" +
        "\x071\x02\x02\xE8&\x03\x02\x02\x02\xE9\xEA\x07-\x02\x02\xEA(\x03\x02\x02" +
        "\x02\xEB\xEC\x07>\x02\x02\xEC\xED\x07?\x02\x02\xED*\x03\x02\x02\x02\xEE" +
        "\xEF\x07@\x02\x02\xEF\xF0\x07?\x02\x02\xF0,\x03\x02\x02\x02\xF1\xF2\x07" +
        ">\x02\x02\xF2.\x03\x02\x02\x02\xF3\xF4\x07@\x02\x02\xF40\x03\x02\x02\x02" +
        "\xF5\xF6\x07>\x02\x02\xF6\xF7\x07@\x02\x02\xF72\x03\x02\x02\x02\xF8\xF9" +
        "\x07C\x02\x02\xF9\xFA\x07p\x02\x02\xFA\xFB\x07f\x02\x02\xFB4\x03\x02\x02" +
        "\x02\xFC\xFD\x07Q\x02\x02\xFD\xFE\x07t\x02\x02\xFE6\x03\x02\x02\x02\xFF" +
        "\u0100\x07~\x02\x02\u01008\x03\x02\x02\x02\u0101\u0102\x07.\x02\x02\u0102" +
        ":\x03\x02\x02\x02\u0103\u0104\x07q\x02\x02\u0104\u0105\x07h\x02\x02\u0105" +
        "<\x03\x02\x02\x02\u0106\u0107\x07k\x02\x02\u0107\u0108\x07o\x02\x02\u0108" +
        "\u0109\x07r\x02\x02\u0109\u010A\x07q\x02\x02\u010A\u010B\x07t\x02\x02" +
        "\u010B\u010C\x07v\x02\x02\u010C>\x03\x02\x02\x02\u010D\u010E\x07<\x02" +
        "\x02\u010E@\x03\x02\x02\x02\u010F\u0110\x07F\x02\x02\u0110\u0111\x07g" +
        "\x02\x02\u0111\u0112\x07e\x02\x02\u0112\u0113\x07n\x02\x02\u0113\u0114" +
        "\x07c\x02\x02\u0114\u0115\x07t\x02\x02\u0115\u0116\x07g\x02\x02\u0116" +
        "B\x03\x02\x02\x02\u0117\u0118\x07H\x02\x02\u0118\u0119\x07w\x02\x02\u0119" +
        "\u011A\x07p\x02\x02\u011A\u011B\x07e\x02\x02\u011B\u011C\x07v\x02\x02" +
        "\u011C\u011D\x07k\x02\x02\u011D\u011E\x07q\x02\x02\u011E\u011F\x07p\x02" +
        "\x02\u011FD\x03\x02\x02\x02\u0120\u0121\x07R\x02\x02\u0121\u0122\x07g" +
        "\x02\x02\u0122\u0123\x07q\x02\x02\u0123\u0124\x07r\x02\x02\u0124\u0125" +
        "\x07n\x02\x02\u0125\u0126\x07g\x02\x02\u0126\u0127\x07E\x02\x02\u0127" +
        "\u0128\x07q\x02\x02\u0128\u0129\x07f\x02\x02\u0129\u012A\x07g\x02\x02" +
        "\u012AF\x03\x02\x02\x02\u012B\u012C\x07H\x02\x02\u012C\u012D\x07k\x02" +
        "\x02\u012D\u012E\x07g\x02\x02\u012E\u012F\x07n\x02\x02\u012F\u0130\x07" +
        "f\x02\x02\u0130\u0131\x07H\x02\x02\u0131\u0132\x07q\x02\x02\u0132\u0133" +
        "\x07t\x02\x02\u0133\u0134\x07o\x02\x02\u0134\u0135\x07w\x02\x02\u0135" +
        "\u0136\x07n\x02\x02\u0136\u0137\x07c\x02\x02\u0137H\x03\x02\x02\x02\u0138" +
        "\u0139\x07H\x02\x02\u0139\u013A\x07k\x02\x02\u013A\u013B\x07g\x02\x02" +
        "\u013B\u013C\x07n\x02\x02\u013C\u013D\x07f\x02\x02\u013D\u013E\x07E\x02" +
        "\x02\u013E\u013F\x07j\x02\x02\u013F\u0140\x07c\x02\x02\u0140\u0141\x07" +
        "p\x02\x02\u0141\u0142\x07i\x02\x02\u0142\u0143\x07g\x02\x02\u0143J\x03" +
        "\x02\x02\x02\u0144\u0145\x07e\x02\x02\u0145\u0146\x07n\x02\x02\u0146\u0147" +
        "\x07c\x02\x02\u0147\u0148\x07u\x02\x02\u0148\u0149\x07u\x02\x02\u0149" +
        "L\x03\x02\x02\x02\u014A\u014B\x07g\x02\x02\u014B\u014C\x07p\x02\x02\u014C" +
        "\u014D\x07f\x02\x02\u014D\u014E\x07/\x02\x02\u014E\u014F\x07e\x02\x02" +
        "\u014F\u0150\x07n\x02\x02\u0150\u0151\x07c\x02\x02\u0151\u0152\x07u\x02" +
        "\x02\u0152\u0153\x07u\x02\x02\u0153N\x03\x02\x02\x02\u0154\u0155\x07r" +
        "\x02\x02\u0155\u0156\x07t\x02\x02\u0156\u0157\x07k\x02\x02\u0157\u0158" +
        "\x07x\x02\x02\u0158\u0159\x07c\x02\x02\u0159\u015A\x07v\x02\x02\u015A" +
        "\u015B\x07g\x02\x02\u015BP\x03\x02\x02\x02\u015C\u015D\x07o\x02\x02\u015D" +
        "\u015E\x07g\x02\x02\u015E\u015F\x07v\x02\x02\u015F\u0160\x07j\x02\x02" +
        "\u0160\u0161\x07q\x02\x02\u0161\u0162\x07f\x02\x02\u0162R\x03\x02\x02" +
        "\x02\u0163\u0164\x07E\x02\x02\u0164\u0165\x07q\x02\x02\u0165\u0166\x07" +
        "p\x02\x02\u0166\u0167\x07u\x02\x02\u0167\u0168\x07v\x02\x02\u0168\u0169" +
        "\x07c\x02\x02\u0169\u016A\x07p\x02\x02\u016A\u016B\x07v\x02\x02\u016B" +
        "T\x03\x02\x02\x02\u016C\u016D\x07r\x02\x02\u016D\u016E\x07t\x02\x02\u016E" +
        "\u016F\x07q\x02\x02\u016F\u0170\x07r\x02\x02\u0170\u0171\x07g\x02\x02" +
        "\u0171\u0172\x07t\x02\x02\u0172\u0173\x07v\x02\x02\u0173\u0174\x07{\x02" +
        "\x02\u0174V\x03\x02\x02\x02\u0175\u0176\x07i\x02\x02\u0176\u0177\x07g" +
        "\x02\x02\u0177\u0178\x07v\x02\x02\u0178X\x03\x02\x02\x02\u0179\u017A\x07" +
        "u\x02\x02\u017A\u017B\x07g\x02\x02\u017B\u017C\x07v\x02\x02\u017CZ\x03" +
        "\x02\x02\x02\u017D\u017E\x07t\x02\x02\u017E\u017F\x07g\x02\x02\u017F\u0180" +
        "\x07c\x02\x02\u0180\u0181\x07f\x02\x02\u0181\u0182\x07q\x02\x02\u0182" +
        "\u0183\x07p\x02\x02\u0183\u0184\x07n\x02\x02\u0184\u0185\x07{\x02\x02" +
        "\u0185\\\x03\x02\x02\x02\u0186\u0187\x07k\x02\x02\u0187\u0188\x07p\x02" +
        "\x02\u0188\u0189\x07u\x02\x02\u0189\u018A\x07v\x02\x02\u018A\u018B\x07" +
        "c\x02\x02\u018B\u018C\x07p\x02\x02\u018C\u018D\x07e\x02\x02\u018D\u018E" +
        "\x07g\x02\x02\u018E^\x03\x02\x02\x02\u018F\u0190\x07g\x02\x02\u0190\u0191" +
        "\x07p\x02\x02\u0191\u0192\x07f\x02\x02\u0192\u0193\x07/\x02\x02\u0193" +
        "\u0194\x07o\x02\x02\u0194\u0195\x07g\x02\x02\u0195\u0196\x07v\x02\x02" +
        "\u0196\u0197\x07j\x02\x02\u0197\u0198\x07q\x02\x02\u0198\u0199\x07f\x02" +
        "\x02\u0199`\x03\x02\x02\x02\u019A\u019B\x07g\x02\x02\u019B\u019C\x07p" +
        "\x02\x02\u019C\u019D\x07f\x02\x02\u019D\u019E\x07/\x02\x02\u019E\u019F" +
        "\x07i\x02\x02\u019F\u01A0\x07g\x02\x02\u01A0\u01A1\x07v\x02\x02\u01A1" +
        "b\x03\x02\x02\x02\u01A2\u01A3\x07g\x02\x02\u01A3\u01A4\x07p\x02\x02\u01A4" +
        "\u01A5\x07f\x02\x02\u01A5\u01A6\x07/\x02\x02\u01A6\u01A7\x07u\x02\x02" +
        "\u01A7\u01A8\x07g\x02\x02\u01A8\u01A9\x07v\x02\x02\u01A9d\x03\x02\x02" +
        "\x02\u01AA\u01AB\x07G\x02\x02\u01AB\u01AC\x07p\x02\x02\u01AC\u01AD\x07" +
        "f\x02\x02\u01AD\u01AE\x07/\x02\x02\u01AE\u01AF\x07H\x02\x02\u01AF\u01B0" +
        "\x07w\x02\x02\u01B0\u01B1\x07p\x02\x02\u01B1\u01B2\x07e\x02\x02\u01B2" +
        "\u01B3\x07v\x02\x02\u01B3\u01B4\x07k\x02\x02\u01B4\u01B5\x07q\x02\x02" +
        "\u01B5\u01B6\x07p\x02\x02\u01B6f\x03\x02\x02\x02\u01B7\u01B8\x07C\x02" +
        "\x02\u01B8\u01B9\x07u\x02\x02\u01B9h\x03\x02\x02\x02\u01BA\u01BB\x07T" +
        "\x02\x02\u01BB\u01BC\x07g\x02\x02\u01BC\u01BD\x07v\x02\x02\u01BD\u01BE" +
        "\x07w\x02\x02\u01BE\u01BF\x07t\x02\x02\u01BF\u01C0\x07p\x02\x02\u01C0" +
        "\u01C1\x07u\x02\x02\u01C1j\x03\x02\x02\x02\u01C2\u01C3\x07K\x02\x02\u01C3" +
        "\u01C4\x07h\x02\x02\u01C4l\x03\x02\x02\x02\u01C5\u01C6\x07V\x02\x02\u01C6" +
        "\u01C7\x07j\x02\x02\u01C7\u01C8\x07g\x02\x02\u01C8\u01C9\x07p\x02\x02" +
        "\u01C9n\x03\x02\x02\x02\u01CA\u01CB\x07G\x02\x02\u01CB\u01CC\x07n\x02" +
        "\x02\u01CC\u01CD\x07u\x02\x02\u01CD\u01CE\x07g\x02\x02\u01CEp\x03\x02" +
        "\x02\x02\u01CF\u01D0\x07G\x02\x02\u01D0\u01D1\x07p\x02\x02\u01D1\u01D2" +
        "\x07f\x02\x02\u01D2\u01D3\x07/\x02\x02\u01D3\u01D4\x07K\x02\x02\u01D4" +
        "\u01D5\x07h\x02\x02\u01D5r\x03\x02\x02\x02\u01D6\u01D7\x07H\x02\x02\u01D7" +
        "\u01D8\x07q\x02\x02\u01D8\u01D9\x07t\x02\x02\u01D9t\x03\x02\x02\x02\u01DA" +
        "\u01DB\x07V\x02\x02\u01DB\u01DC\x07q\x02\x02\u01DCv\x03\x02\x02\x02\u01DD" +
        "\u01DE\x07U\x02\x02\u01DE\u01DF\x07v\x02\x02\u01DF\u01E0\x07g\x02\x02" +
        "\u01E0\u01E1\x07r\x02\x02\u01E1x\x03\x02\x02\x02\u01E2\u01E3\x07G\x02" +
        "\x02\u01E3\u01E4\x07p\x02\x02\u01E4\u01E5\x07f\x02\x02\u01E5\u01E6\x07" +
        "/\x02\x02\u01E6\u01E7\x07H\x02\x02\u01E7\u01E8\x07q\x02\x02\u01E8\u01E9" +
        "\x07t\x02\x02\u01E9z\x03\x02\x02\x02\u01EA\u01EB\x07Y\x02\x02\u01EB\u01EC" +
        "\x07j\x02\x02\u01EC\u01ED\x07k\x02\x02\u01ED\u01EE\x07n\x02\x02\u01EE" +
        "\u01EF\x07g\x02\x02\u01EF|\x03\x02\x02\x02\u01F0\u01F1\x07G\x02\x02\u01F1" +
        "\u01F2\x07p\x02\x02\u01F2\u01F3\x07f\x02\x02\u01F3\u01F4\x07/\x02\x02" +
        "\u01F4\u01F5\x07Y\x02\x02\u01F5\u01F6\x07j\x02\x02\u01F6\u01F7\x07k\x02" +
        "\x02\u01F7\u01F8\x07n\x02\x02\u01F8\u01F9\x07g\x02\x02\u01F9~\x03\x02" +
        "\x02\x02\u01FA\u01FB\x07G\x02\x02\u01FB\u01FC\x07x\x02\x02\u01FC\u01FD" +
        "\x07c\x02\x02\u01FD\u01FE\x07n\x02\x02\u01FE\u01FF\x07w\x02\x02\u01FF" +
        "\u0200\x07c\x02\x02\u0200\u0201\x07v\x02\x02\u0201\u0202\x07g\x02\x02" +
        "\u0202\x80\x03\x02\x02\x02\u0203\u0204\x07G\x02\x02\u0204\u0205\x07p\x02" +
        "\x02\u0205\u0206\x07f\x02\x02\u0206\u0207\x07/\x02\x02\u0207\u0208\x07" +
        "G\x02\x02\u0208\u0209\x07x\x02\x02\u0209\u020A\x07c\x02\x02\u020A\u020B" +
        "\x07n\x02\x02\u020B\u020C\x07w\x02\x02\u020C\u020D\x07c\x02\x02\u020D" +
        "\u020E\x07v\x02\x02\u020E\u020F\x07g\x02\x02\u020F\x82\x03\x02\x02\x02" +
        "\u0210\u0211\x07Y\x02\x02\u0211\u0212\x07j\x02\x02\u0212\u0213\x07g\x02" +
        "\x02\u0213\u0214\x07p\x02\x02\u0214\x84\x03\x02\x02\x02\u0215\u0216\x07" +
        "Y\x02\x02\u0216\u0217\x07j\x02\x02\u0217\u0218\x07g\x02\x02\u0218\u0219" +
        "\x07p\x02\x02\u0219\u021A\x07/\x02\x02\u021A\u021B\x07Q\x02\x02\u021B" +
        "\u021C\x07v\x02\x02\u021C\u021D\x07j\x02\x02\u021D\u021E\x07g\x02\x02" +
        "\u021E\u021F\x07t\x02\x02\u021F\x86\x03\x02\x02\x02\u0220\u0221\x07v\x02" +
        "\x02\u0221\u0222\x07t\x02\x02\u0222\u0223";
    PeopleCodeLexer._serializedATNSegment1 = "\x07{\x02\x02\u0223\x88\x03\x02\x02\x02\u0224\u0225\x07g\x02\x02\u0225" +
        "\u0226\x07p\x02\x02\u0226\u0227\x07f\x02\x02\u0227\u0228\x07/\x02\x02" +
        "\u0228\u0229\x07v\x02\x02\u0229\u022A\x07t\x02\x02\u022A\u022B\x07{\x02" +
        "\x02\u022B\x8A\x03\x02\x02\x02\u022C\u022D\x07e\x02\x02\u022D\u022E\x07" +
        "c\x02\x02\u022E\u022F\x07v\x02\x02\u022F\u0230\x07e\x02\x02\u0230\u0231" +
        "\x07j\x02\x02\u0231\x8C\x03\x02\x02\x02\u0232\u0233\x07G\x02\x02\u0233" +
        "\u0234\x07z\x02\x02\u0234\u0235\x07e\x02\x02\u0235\u0236\x07g\x02\x02" +
        "\u0236\u0237\x07r\x02\x02\u0237\u0238\x07v\x02\x02\u0238\u0239\x07k\x02" +
        "\x02\u0239\u023A\x07q\x02\x02\u023A\u023B\x07p\x02\x02\u023B\x8E\x03\x02" +
        "\x02\x02\u023C\u023D\x07e\x02\x02\u023D\u023E\x07t\x02\x02\u023E\u023F" +
        "\x07g\x02\x02\u023F\u0240\x07c\x02\x02\u0240\u0241\x07v\x02\x02\u0241" +
        "\u0242\x07g\x02\x02\u0242\x90\x03\x02\x02\x02\u0243\u0244\x05\x93J\x02" +
        "\u0244\u0246\x070\x02\x02\u0245\u0247\t\x02\x02\x02\u0246\u0245\x03\x02" +
        "\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248" +
        "\u0249\x03\x02\x02\x02\u0249\x92\x03\x02\x02\x02\u024A\u0253\x072\x02" +
        "\x02\u024B\u024F\x043;\x02\u024C\u024E\x042;\x02\u024D\u024C\x03\x02\x02" +
        "\x02\u024E\u0251\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250" +
        "\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02" +
        "\u0252\u024A\x03\x02\x02\x02\u0252\u024B\x03\x02\x02\x02\u0253\x94\x03" +
        "\x02\x02\x02\u0254\u0258\x07$\x02\x02\u0255\u0257\n\x03\x02\x02\u0256" +
        "\u0255\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02" +
        "\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025B\x03\x02\x02\x02\u025A" +
        "\u0258\x03\x02\x02\x02\u025B\u025C\x07$\x02\x02\u025C\x96\x03\x02\x02" +
        "\x02\u025D\u025E\x07V\x02\x02\u025E\u025F\x07t\x02\x02\u025F\u0260\x07" +
        "w\x02\x02\u0260\u0267\x07g\x02\x02\u0261\u0262\x07H\x02\x02\u0262\u0263" +
        "\x07c\x02\x02\u0263\u0264\x07n\x02\x02\u0264\u0265\x07u\x02\x02\u0265" +
        "\u0267\x07g\x02\x02\u0266\u025D\x03\x02\x02\x02\u0266\u0261\x03\x02\x02" +
        "\x02\u0267\x98\x03\x02\x02\x02\u0268\u0269\x07(\x02\x02\u0269\u026A\x05" +
        "\x9DO\x02\u026A\x9A\x03\x02\x02\x02\u026B\u026C\x07\'\x02\x02\u026C\u026D" +
        "\x05\x9DO\x02\u026D\x9C\x03\x02\x02\x02\u026E\u0272\t\x04\x02\x02\u026F" +
        "\u0271\t\x05\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271\u0274\x03\x02\x02" +
        "\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\x9E" +
        "\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0277\x05\xA7T\x02" +
        "\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x03" +
        "\x02\x02\x02\u0278\u0279\t\x06\x02\x02\u0279\u027A\t\x07\x02\x02\u027A" +
        "\u027B\t\b\x02\x02\u027B\u027F\x05\xA7T\x02\u027C\u027E\v\x02\x02\x02" +
        "\u027D\u027C\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u0280\x03" +
        "\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281" +
        "\u027F\x03\x02\x02\x02\u0282\u0283\x07=\x02\x02\u0283\u0284\x03\x02\x02" +
        "\x02\u0284\u0285\bP\x02\x02\u0285\xA0\x03\x02\x02\x02\u0286\u0287\x07" +
        "1\x02\x02\u0287\u0288\x07,\x02\x02\u0288\u028C\x03\x02\x02\x02\u0289\u028B" +
        "\v\x02\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02" +
        "\u028C\u028D\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D\u028F\x03" +
        "\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\x07,\x02\x02\u0290" +
        "\u0291\x071\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293\bQ\x02\x02" +
        "\u0293\xA2\x03\x02\x02\x02\u0294\u0295\x07>\x02\x02\u0295\u0296\x07,\x02" +
        "\x02\u0296\u029A\x03\x02\x02\x02\u0297\u0299\v\x02\x02\x02\u0298\u0297" +
        "\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02" +
        "\u029A\u0298\x03\x02\x02\x02\u029B\u029D\x03\x02\x02\x02\u029C\u029A\x03" +
        "\x02\x02\x02\u029D\u029E\x07,\x02\x02\u029E\u029F\x07@\x02\x02\u029F\u02A0" +
        "\x03\x02\x02\x02\u02A0\u02A1\bR\x02\x02\u02A1\xA4\x03\x02\x02\x02\u02A2" +
        "\u02A3\x071\x02\x02\u02A3\u02A4\x07-\x02\x02\u02A4\u02A8\x03\x02\x02\x02" +
        "\u02A5\u02A7\v\x02\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02AA\x03" +
        "\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9" +
        "\u02AB\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02AC\x07-\x02" +
        "\x02\u02AC\u02AD\x071\x02\x02\u02AD\u02AF\x03\x02\x02\x02\u02AE\u02B0" +
        "\x07=\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02" +
        "\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\bS\x02\x02\u02B2\xA6\x03\x02" +
        "\x02\x02\u02B3\u02B5\t\t\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B6" +
        "\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02" +
        "\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\bT\x02\x02\u02B9\xA8\x03\x02" +
        "\x02\x02\x10\x02\u0248\u024F\u0252\u0258\u0266\u0272\u0276\u027F\u028C" +
        "\u029A\u02A8\u02AF\u02B6\x03\b\x02\x02";
    PeopleCodeLexer._serializedATN = Utils.join([
        PeopleCodeLexer._serializedATNSegment0,
        PeopleCodeLexer._serializedATNSegment1,
    ], "");
    return PeopleCodeLexer;
}(Lexer_1.Lexer));
exports.PeopleCodeLexer = PeopleCodeLexer;
