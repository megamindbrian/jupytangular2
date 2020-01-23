// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/memcached_protocol/memcached_protocol.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class memcached_protocolLexer extends Lexer {
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
	public static readonly INTEGER = 32;
	public static readonly WORD = 33;
	public static readonly WHITESPACE = 34;

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
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "INTEGER", "WORD", 
		"DIGIT", "PRINTABLE_CHAR", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cas'", "'set'", "'add'", "'replace'", "'append'", "'prepend'", 
		"'get'", "'gets'", "'delete'", "'incr'", "'decr'", "'stats'", "'items'", 
		"'slabs'", "'sizes'", "'flush_all'", "'version'", "'verbosity'", "'quit'", 
		"'STORED'", "'NOT_STORED'", "'EXISTS'", "'NOT_FOUND'", "'VALUE'", "'DELETED'", 
		"'STAT'", "'ERROR'", "'CLIENT_ERROR'", "'SERVER_ERROR'", "'END'", "'noreply'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "INTEGER", "WORD", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(memcached_protocolLexer._LITERAL_NAMES, memcached_protocolLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return memcached_protocolLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(memcached_protocolLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "memcached_protocol.g4"; }

	// @Override
	public get ruleNames(): string[] { return memcached_protocolLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return memcached_protocolLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return memcached_protocolLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return memcached_protocolLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02$\u0138\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03!\x06!\u0125\n!\r!\x0E!\u0126\x03\"\x06\"\u012A\n\"" +
		"\r\"\x0E\"\u012B\x03#\x03#\x03$\x03$\x03%\x06%\u0133\n%\r%\x0E%\u0134" +
		"\x03%\x03%\x02\x02\x02&\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02\x02G\x02" +
		"\x02I\x02$\x03\x02\x03\x05\x02\v\f\x0E\x0F\"\"\x02\u0138\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02I\x03\x02\x02\x02\x03K\x03\x02\x02\x02\x05O\x03\x02\x02\x02\x07" +
		"S\x03\x02\x02\x02\tW\x03\x02\x02\x02\v_\x03\x02\x02\x02\rf\x03\x02\x02" +
		"\x02\x0Fn\x03\x02\x02\x02\x11r\x03\x02\x02\x02\x13w\x03\x02\x02\x02\x15" +
		"~\x03\x02\x02\x02\x17\x83\x03\x02\x02\x02\x19\x88\x03\x02\x02\x02\x1B" +
		"\x8E\x03\x02\x02\x02\x1D\x94\x03\x02\x02\x02\x1F\x9A\x03\x02\x02\x02!" +
		"\xA0\x03\x02\x02\x02#\xAA\x03\x02\x02\x02%\xB2\x03\x02\x02\x02\'\xBC\x03" +
		"\x02\x02\x02)\xC1\x03\x02\x02\x02+\xC8\x03\x02\x02\x02-\xD3\x03\x02\x02" +
		"\x02/\xDA\x03\x02\x02\x021\xE4\x03\x02\x02\x023\xEA\x03\x02\x02\x025\xF2" +
		"\x03\x02\x02\x027\xF7\x03\x02\x02\x029\xFD\x03\x02\x02\x02;\u010A\x03" +
		"\x02\x02\x02=\u0117\x03\x02\x02\x02?\u011B\x03\x02\x02\x02A\u0124\x03" +
		"\x02\x02\x02C\u0129\x03\x02\x02\x02E\u012D\x03\x02\x02\x02G\u012F\x03" +
		"\x02\x02\x02I\u0132\x03\x02\x02\x02KL\x07e\x02\x02LM\x07c\x02\x02MN\x07" +
		"u\x02\x02N\x04\x03\x02\x02\x02OP\x07u\x02\x02PQ\x07g\x02\x02QR\x07v\x02" +
		"\x02R\x06\x03\x02\x02\x02ST\x07c\x02\x02TU\x07f\x02\x02UV\x07f\x02\x02" +
		"V\b\x03\x02\x02\x02WX\x07t\x02\x02XY\x07g\x02\x02YZ\x07r\x02\x02Z[\x07" +
		"n\x02\x02[\\\x07c\x02\x02\\]\x07e\x02\x02]^\x07g\x02\x02^\n\x03\x02\x02" +
		"\x02_`\x07c\x02\x02`a\x07r\x02\x02ab\x07r\x02\x02bc\x07g\x02\x02cd\x07" +
		"p\x02\x02de\x07f\x02\x02e\f\x03\x02\x02\x02fg\x07r\x02\x02gh\x07t\x02" +
		"\x02hi\x07g\x02\x02ij\x07r\x02\x02jk\x07g\x02\x02kl\x07p\x02\x02lm\x07" +
		"f\x02\x02m\x0E\x03\x02\x02\x02no\x07i\x02\x02op\x07g\x02\x02pq\x07v\x02" +
		"\x02q\x10\x03\x02\x02\x02rs\x07i\x02\x02st\x07g\x02\x02tu\x07v\x02\x02" +
		"uv\x07u\x02\x02v\x12\x03\x02\x02\x02wx\x07f\x02\x02xy\x07g\x02\x02yz\x07" +
		"n\x02\x02z{\x07g\x02\x02{|\x07v\x02\x02|}\x07g\x02\x02}\x14\x03\x02\x02" +
		"\x02~\x7F\x07k\x02\x02\x7F\x80\x07p\x02\x02\x80\x81\x07e\x02\x02\x81\x82" +
		"\x07t\x02\x02\x82\x16\x03\x02\x02\x02\x83\x84\x07f\x02\x02\x84\x85\x07" +
		"g\x02\x02\x85\x86\x07e\x02\x02\x86\x87\x07t\x02\x02\x87\x18\x03\x02\x02" +
		"\x02\x88\x89\x07u\x02\x02\x89\x8A\x07v\x02\x02\x8A\x8B\x07c\x02\x02\x8B" +
		"\x8C\x07v\x02\x02\x8C\x8D\x07u\x02\x02\x8D\x1A\x03\x02\x02\x02\x8E\x8F" +
		"\x07k\x02\x02\x8F\x90\x07v\x02\x02\x90\x91\x07g\x02\x02\x91\x92\x07o\x02" +
		"\x02\x92\x93\x07u\x02\x02\x93\x1C\x03\x02\x02\x02\x94\x95\x07u\x02\x02" +
		"\x95\x96\x07n\x02\x02\x96\x97\x07c\x02\x02\x97\x98\x07d\x02\x02\x98\x99" +
		"\x07u\x02\x02\x99\x1E\x03\x02\x02\x02\x9A\x9B\x07u\x02\x02\x9B\x9C\x07" +
		"k\x02\x02\x9C\x9D\x07|\x02\x02\x9D\x9E\x07g\x02\x02\x9E\x9F\x07u\x02\x02" +
		"\x9F \x03\x02\x02\x02\xA0\xA1\x07h\x02\x02\xA1\xA2\x07n\x02\x02\xA2\xA3" +
		"\x07w\x02\x02\xA3\xA4\x07u\x02\x02\xA4\xA5\x07j\x02\x02\xA5\xA6\x07a\x02" +
		"\x02\xA6\xA7\x07c\x02\x02\xA7\xA8\x07n\x02\x02\xA8\xA9\x07n\x02\x02\xA9" +
		"\"\x03\x02\x02\x02\xAA\xAB\x07x\x02\x02\xAB\xAC\x07g\x02\x02\xAC\xAD\x07" +
		"t\x02\x02\xAD\xAE\x07u\x02\x02\xAE\xAF\x07k\x02\x02\xAF\xB0\x07q\x02\x02" +
		"\xB0\xB1\x07p\x02\x02\xB1$\x03\x02\x02\x02\xB2\xB3\x07x\x02\x02\xB3\xB4" +
		"\x07g\x02\x02\xB4\xB5\x07t\x02\x02\xB5\xB6\x07d\x02\x02\xB6\xB7\x07q\x02" +
		"\x02\xB7\xB8\x07u\x02\x02\xB8\xB9\x07k\x02\x02\xB9\xBA\x07v\x02\x02\xBA" +
		"\xBB\x07{\x02\x02\xBB&\x03\x02\x02\x02\xBC\xBD\x07s\x02\x02\xBD\xBE\x07" +
		"w\x02\x02\xBE\xBF\x07k\x02\x02\xBF\xC0\x07v\x02\x02\xC0(\x03\x02\x02\x02" +
		"\xC1\xC2\x07U\x02\x02\xC2\xC3\x07V\x02\x02\xC3\xC4\x07Q\x02\x02\xC4\xC5" +
		"\x07T\x02\x02\xC5\xC6\x07G\x02\x02\xC6\xC7\x07F\x02\x02\xC7*\x03\x02\x02" +
		"\x02\xC8\xC9\x07P\x02\x02\xC9\xCA\x07Q\x02\x02\xCA\xCB\x07V\x02\x02\xCB" +
		"\xCC\x07a\x02\x02\xCC\xCD\x07U\x02\x02\xCD\xCE\x07V\x02\x02\xCE\xCF\x07" +
		"Q\x02\x02\xCF\xD0\x07T\x02\x02\xD0\xD1\x07G\x02\x02\xD1\xD2\x07F\x02\x02" +
		"\xD2,\x03\x02\x02\x02\xD3\xD4\x07G\x02\x02\xD4\xD5\x07Z\x02\x02\xD5\xD6" +
		"\x07K\x02\x02\xD6\xD7\x07U\x02\x02\xD7\xD8\x07V\x02\x02\xD8\xD9\x07U\x02" +
		"\x02\xD9.\x03\x02\x02\x02\xDA\xDB\x07P\x02\x02\xDB\xDC\x07Q\x02\x02\xDC" +
		"\xDD\x07V\x02\x02\xDD\xDE\x07a\x02\x02\xDE\xDF\x07H\x02\x02\xDF\xE0\x07" +
		"Q\x02\x02\xE0\xE1\x07W\x02\x02\xE1\xE2\x07P\x02\x02\xE2\xE3\x07F\x02\x02" +
		"\xE30\x03\x02\x02\x02\xE4\xE5\x07X\x02\x02\xE5\xE6\x07C\x02\x02\xE6\xE7" +
		"\x07N\x02\x02\xE7\xE8\x07W\x02\x02\xE8\xE9\x07G\x02\x02\xE92\x03\x02\x02" +
		"\x02\xEA\xEB\x07F\x02\x02\xEB\xEC\x07G\x02\x02\xEC\xED\x07N\x02\x02\xED" +
		"\xEE\x07G\x02\x02\xEE\xEF\x07V\x02\x02\xEF\xF0\x07G\x02\x02\xF0\xF1\x07" +
		"F\x02\x02\xF14\x03\x02\x02\x02\xF2\xF3\x07U\x02\x02\xF3\xF4\x07V\x02\x02" +
		"\xF4\xF5\x07C\x02\x02\xF5\xF6\x07V\x02\x02\xF66\x03\x02\x02\x02\xF7\xF8" +
		"\x07G\x02\x02\xF8\xF9\x07T\x02\x02\xF9\xFA\x07T\x02\x02\xFA\xFB\x07Q\x02" +
		"\x02\xFB\xFC\x07T\x02\x02\xFC8\x03\x02\x02\x02\xFD\xFE\x07E\x02\x02\xFE" +
		"\xFF\x07N\x02\x02\xFF\u0100\x07K\x02\x02\u0100\u0101\x07G\x02\x02\u0101" +
		"\u0102\x07P\x02\x02\u0102\u0103\x07V\x02\x02\u0103\u0104\x07a\x02\x02" +
		"\u0104\u0105\x07G\x02\x02\u0105\u0106\x07T\x02\x02\u0106\u0107\x07T\x02" +
		"\x02\u0107\u0108\x07Q\x02\x02\u0108\u0109\x07T\x02\x02\u0109:\x03\x02" +
		"\x02\x02\u010A\u010B\x07U\x02\x02\u010B\u010C\x07G\x02\x02\u010C\u010D" +
		"\x07T\x02\x02\u010D\u010E\x07X\x02\x02\u010E\u010F\x07G\x02\x02\u010F" +
		"\u0110\x07T\x02\x02\u0110\u0111\x07a\x02\x02\u0111\u0112\x07G\x02\x02" +
		"\u0112\u0113\x07T\x02\x02\u0113\u0114\x07T\x02\x02\u0114\u0115\x07Q\x02" +
		"\x02\u0115\u0116\x07T\x02\x02\u0116<\x03\x02\x02\x02\u0117\u0118\x07G" +
		"\x02\x02\u0118\u0119\x07P\x02\x02\u0119\u011A\x07F\x02\x02\u011A>\x03" +
		"\x02\x02\x02\u011B\u011C\x07p\x02\x02\u011C\u011D\x07q\x02\x02\u011D\u011E" +
		"\x07t\x02\x02\u011E\u011F\x07g\x02\x02\u011F\u0120\x07r\x02\x02\u0120" +
		"\u0121\x07n\x02\x02\u0121\u0122\x07{\x02\x02\u0122@\x03\x02\x02\x02\u0123" +
		"\u0125\x05E#\x02\u0124\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02" +
		"\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127B\x03\x02" +
		"\x02\x02\u0128\u012A\x05G$\x02\u0129\u0128\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012CD\x03\x02\x02\x02\u012D\u012E\x042;\x02\u012EF\x03\x02\x02\x02\u012F" +
		"\u0130\x04#\x80\x02\u0130H\x03\x02\x02\x02\u0131\u0133\t\x02\x02\x02\u0132" +
		"\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136" +
		"\u0137\b%\x02\x02\u0137J\x03\x02\x02\x02\x06\x02\u0126\u012B\u0134\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!memcached_protocolLexer.__ATN) {
			memcached_protocolLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(memcached_protocolLexer._serializedATN));
		}

		return memcached_protocolLexer.__ATN;
	}

}

