// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/xdr.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class xdrLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly COMMENT = 32;
	public static readonly OCTAL = 33;
	public static readonly DECIMAL = 34;
	public static readonly HEXADECIMAL = 35;
	public static readonly IDENTIFIER = 36;
	public static readonly WS = 37;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "COMMENT", "OCTAL", 
		"DECIMAL", "HEXADECIMAL", "IDENTIFIER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'<'", "'>'", "'opaque'", "'string'", "'*'", 
		"'void'", "'unsigned'", "'int'", "'hyper'", "'float'", "'double'", "'quadruple'", 
		"'bool'", "'enum'", "'{'", "'='", "','", "'}'", "'struct'", "';'", "'union'", 
		"'switch'", "'('", "')'", "'default'", "':'", "'case'", "'const'", "'typedef'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "COMMENT", "OCTAL", "DECIMAL", 
		"HEXADECIMAL", "IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(xdrLexer._LITERAL_NAMES, xdrLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return xdrLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(xdrLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "xdr.g4"; }

	// @Override
	public get ruleNames(): string[] { return xdrLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return xdrLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return xdrLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return xdrLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\'\u0111\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x07!\xE2\n!\f!\x0E!\xE5\v!\x03" +
		"!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x07\"\xEF\n\"\f\"\x0E\"\xF2\v" +
		"\"\x03#\x05#\xF5\n#\x03#\x06#\xF8\n#\r#\x0E#\xF9\x03$\x03$\x03$\x03$\x06" +
		"$\u0100\n$\r$\x0E$\u0101\x03%\x03%\x07%\u0106\n%\f%\x0E%\u0109\v%\x03" +
		"&\x06&\u010C\n&\r&\x0E&\u010D\x03&\x03&\x03\xE3\x02\x02\'\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'\x03\x02\t\x03\x0239\x03\x02" +
		"29\x03\x022;\x05\x022;CHch\x04\x02C\\c|\x06\x022;C\\aac|\x05\x02\v\f\x0F" +
		"\x0F\"\"\x02\u0117\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
		"\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
		"\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
		"\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03" +
		"\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
		"\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02" +
		"A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02" +
		"\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x03M\x03\x02\x02\x02" +
		"\x05O\x03\x02\x02\x02\x07Q\x03\x02\x02\x02\tS\x03\x02\x02\x02\vU\x03\x02" +
		"\x02\x02\r\\\x03\x02\x02\x02\x0Fc\x03\x02\x02\x02\x11e\x03\x02\x02\x02" +
		"\x13j\x03\x02\x02\x02\x15s\x03\x02\x02\x02\x17w\x03\x02\x02\x02\x19}\x03" +
		"\x02\x02\x02\x1B\x83\x03\x02\x02\x02\x1D\x8A\x03\x02\x02\x02\x1F\x94\x03" +
		"\x02\x02\x02!\x99\x03\x02\x02\x02#\x9E\x03\x02\x02\x02%\xA0\x03\x02\x02" +
		"\x02\'\xA2\x03\x02\x02\x02)\xA4\x03\x02\x02\x02+\xA6\x03\x02\x02\x02-" +
		"\xAD\x03\x02\x02\x02/\xAF\x03\x02\x02\x021\xB5\x03\x02\x02\x023\xBC\x03" +
		"\x02\x02\x025\xBE\x03\x02\x02\x027\xC0\x03\x02\x02\x029\xC8\x03\x02\x02" +
		"\x02;\xCA\x03\x02\x02\x02=\xCF\x03\x02\x02\x02?\xD5\x03\x02\x02\x02A\xDD" +
		"\x03\x02\x02\x02C\xEB\x03\x02\x02\x02E\xF4\x03\x02\x02\x02G\xFB\x03\x02" +
		"\x02\x02I\u0103\x03\x02\x02\x02K\u010B\x03\x02\x02\x02MN\x07]\x02\x02" +
		"N\x04\x03\x02\x02\x02OP\x07_\x02\x02P\x06\x03\x02\x02\x02QR\x07>\x02\x02" +
		"R\b\x03\x02\x02\x02ST\x07@\x02\x02T\n\x03\x02\x02\x02UV\x07q\x02\x02V" +
		"W\x07r\x02\x02WX\x07c\x02\x02XY\x07s\x02\x02YZ\x07w\x02\x02Z[\x07g\x02" +
		"\x02[\f\x03\x02\x02\x02\\]\x07u\x02\x02]^\x07v\x02\x02^_\x07t\x02\x02" +
		"_`\x07k\x02\x02`a\x07p\x02\x02ab\x07i\x02\x02b\x0E\x03\x02\x02\x02cd\x07" +
		",\x02\x02d\x10\x03\x02\x02\x02ef\x07x\x02\x02fg\x07q\x02\x02gh\x07k\x02" +
		"\x02hi\x07f\x02\x02i\x12\x03\x02\x02\x02jk\x07w\x02\x02kl\x07p\x02\x02" +
		"lm\x07u\x02\x02mn\x07k\x02\x02no\x07i\x02\x02op\x07p\x02\x02pq\x07g\x02" +
		"\x02qr\x07f\x02\x02r\x14\x03\x02\x02\x02st\x07k\x02\x02tu\x07p\x02\x02" +
		"uv\x07v\x02\x02v\x16\x03\x02\x02\x02wx\x07j\x02\x02xy\x07{\x02\x02yz\x07" +
		"r\x02\x02z{\x07g\x02\x02{|\x07t\x02\x02|\x18\x03\x02\x02\x02}~\x07h\x02" +
		"\x02~\x7F\x07n\x02\x02\x7F\x80\x07q\x02\x02\x80\x81\x07c\x02\x02\x81\x82" +
		"\x07v\x02\x02\x82\x1A\x03\x02\x02\x02\x83\x84\x07f\x02\x02\x84\x85\x07" +
		"q\x02\x02\x85\x86\x07w\x02\x02\x86\x87\x07d\x02\x02\x87\x88\x07n\x02\x02" +
		"\x88\x89\x07g\x02\x02\x89\x1C\x03\x02\x02\x02\x8A\x8B\x07s\x02\x02\x8B" +
		"\x8C\x07w\x02\x02\x8C\x8D\x07c\x02\x02\x8D\x8E\x07f\x02\x02\x8E\x8F\x07" +
		"t\x02\x02\x8F\x90\x07w\x02\x02\x90\x91\x07r\x02\x02\x91\x92\x07n\x02\x02" +
		"\x92\x93\x07g\x02\x02\x93\x1E\x03\x02\x02\x02\x94\x95\x07d\x02\x02\x95" +
		"\x96\x07q\x02\x02\x96\x97\x07q\x02\x02\x97\x98\x07n\x02\x02\x98 \x03\x02" +
		"\x02\x02\x99\x9A\x07g\x02\x02\x9A\x9B\x07p\x02\x02\x9B\x9C\x07w\x02\x02" +
		"\x9C\x9D\x07o\x02\x02\x9D\"\x03\x02\x02\x02\x9E\x9F\x07}\x02\x02\x9F$" +
		"\x03\x02\x02\x02\xA0\xA1\x07?\x02\x02\xA1&\x03\x02\x02\x02\xA2\xA3\x07" +
		".\x02\x02\xA3(\x03\x02\x02\x02\xA4\xA5\x07\x7F\x02\x02\xA5*\x03\x02\x02" +
		"\x02\xA6\xA7\x07u\x02\x02\xA7\xA8\x07v\x02\x02\xA8\xA9\x07t\x02\x02\xA9" +
		"\xAA\x07w\x02\x02\xAA\xAB\x07e\x02\x02\xAB\xAC\x07v\x02\x02\xAC,\x03\x02" +
		"\x02\x02\xAD\xAE\x07=\x02\x02\xAE.\x03\x02\x02\x02\xAF\xB0\x07w\x02\x02" +
		"\xB0\xB1\x07p\x02\x02\xB1\xB2\x07k\x02\x02\xB2\xB3\x07q\x02\x02\xB3\xB4" +
		"\x07p\x02\x02\xB40\x03\x02\x02\x02\xB5\xB6\x07u\x02\x02\xB6\xB7\x07y\x02" +
		"\x02\xB7\xB8\x07k\x02\x02\xB8\xB9\x07v\x02\x02\xB9\xBA\x07e\x02\x02\xBA" +
		"\xBB\x07j\x02\x02\xBB2\x03\x02\x02\x02\xBC\xBD\x07*\x02\x02\xBD4\x03\x02" +
		"\x02\x02\xBE\xBF\x07+\x02\x02\xBF6\x03\x02\x02\x02\xC0\xC1\x07f\x02\x02" +
		"\xC1\xC2\x07g\x02\x02\xC2\xC3\x07h\x02\x02\xC3\xC4\x07c\x02\x02\xC4\xC5" +
		"\x07w\x02\x02\xC5\xC6\x07n\x02\x02\xC6\xC7\x07v\x02\x02\xC78\x03\x02\x02" +
		"\x02\xC8\xC9\x07<\x02\x02\xC9:\x03\x02\x02\x02\xCA\xCB\x07e\x02\x02\xCB" +
		"\xCC\x07c\x02\x02\xCC\xCD\x07u\x02\x02\xCD\xCE\x07g\x02\x02\xCE<\x03\x02" +
		"\x02\x02\xCF\xD0\x07e\x02\x02\xD0\xD1\x07q\x02\x02\xD1\xD2\x07p\x02\x02" +
		"\xD2\xD3\x07u\x02\x02\xD3\xD4\x07v\x02\x02\xD4>\x03\x02\x02\x02\xD5\xD6" +
		"\x07v\x02\x02\xD6\xD7\x07{\x02\x02\xD7\xD8\x07r\x02\x02\xD8\xD9\x07g\x02" +
		"\x02\xD9\xDA\x07f\x02\x02\xDA\xDB\x07g\x02\x02\xDB\xDC\x07h\x02\x02\xDC" +
		"@\x03\x02\x02\x02\xDD\xDE\x071\x02\x02\xDE\xDF\x07,\x02\x02\xDF\xE3\x03" +
		"\x02\x02\x02\xE0\xE2\v\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03" +
		"\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE6\x03" +
		"\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE7\x07,\x02\x02\xE7\xE8\x07" +
		"1\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\b!\x02\x02\xEAB\x03\x02\x02" +
		"\x02\xEB\xEC\x072\x02\x02\xEC\xF0\t\x02\x02\x02\xED\xEF\t\x03\x02\x02" +
		"\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02" +
		"\xF0\xF1\x03\x02\x02\x02\xF1D\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02" +
		"\xF3\xF5\x07/\x02\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02" +
		"\xF5\xF7\x03\x02\x02\x02\xF6\xF8\t\x04\x02\x02\xF7\xF6\x03\x02\x02\x02" +
		"\xF8\xF9\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
		"\xFAF\x03\x02\x02\x02\xFB\xFC\x072\x02\x02\xFC\xFD\x07z\x02\x02\xFD\xFF" +
		"\x03\x02\x02\x02\xFE\u0100\t\x05\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100" +
		"\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102H\x03\x02\x02\x02\u0103\u0107\t\x06\x02\x02\u0104\u0106\t\x07" +
		"\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108J\x03\x02\x02" +
		"\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010C\t\b\x02\x02\u010B\u010A\x03" +
		"\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\b&\x02" +
		"\x02\u0110L\x03\x02\x02\x02\n\x02\xE3\xF0\xF4\xF9\u0101\u0107\u010D\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!xdrLexer.__ATN) {
			xdrLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(xdrLexer._serializedATN));
		}

		return xdrLexer.__ATN;
	}

}

