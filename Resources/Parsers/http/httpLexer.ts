// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class httpLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly SP = 10;
	public static readonly ALPHA = 11;
	public static readonly DIGIT = 12;
	public static readonly Pct_encoded = 13;
	public static readonly HEXDIG = 14;
	public static readonly LColumn = 15;
	public static readonly RColumn = 16;
	public static readonly SemiColon = 17;
	public static readonly Equals = 18;
	public static readonly Period = 19;
	public static readonly CRLF = 20;
	public static readonly Minus = 21;
	public static readonly Dot = 22;
	public static readonly Underscore = 23;
	public static readonly Tilde = 24;
	public static readonly QuestionMark = 25;
	public static readonly Slash = 26;
	public static readonly ExclamationMark = 27;
	public static readonly Colon = 28;
	public static readonly At = 29;
	public static readonly DollarSign = 30;
	public static readonly Hashtag = 31;
	public static readonly Ampersand = 32;
	public static readonly Percent = 33;
	public static readonly SQuote = 34;
	public static readonly Star = 35;
	public static readonly Plus = 36;
	public static readonly Caret = 37;
	public static readonly BackQuote = 38;
	public static readonly VBar = 39;
	public static readonly OWS = 40;
	public static readonly HTAB = 41;
	public static readonly VCHAR = 42;
	public static readonly OBS_TEXT = 43;

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
		"SP", "ALPHA", "DIGIT", "Pct_encoded", "HEXDIG", "LColumn", "RColumn", 
		"SemiColon", "Equals", "Period", "CRLF", "Minus", "Dot", "Underscore", 
		"Tilde", "QuestionMark", "Slash", "ExclamationMark", "Colon", "At", "DollarSign", 
		"Hashtag", "Ampersand", "Percent", "SQuote", "Star", "Plus", "Caret", 
		"BackQuote", "VBar", "OWS", "HTAB", "VCHAR", "OBS_TEXT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'GET'", "'HEAD'", "'POST'", "'PUT'", "'DELETE'", "'CONNECT'", 
		"'OPTIONS'", "'TRACE'", "'HTTP/'", "' '", undefined, undefined, undefined, 
		undefined, "'('", "')'", "';'", "'='", "','", "'\n'", "'-'", "'.'", "'_'", 
		"'~'", "'?'", "'/'", "'!'", "':'", "'@'", "'$'", "'#'", "'&'", "'%'", 
		"'''", "'*'", "'+'", "'^'", "'`'", "'|'", undefined, "'\t'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "SP", "ALPHA", "DIGIT", "Pct_encoded", 
		"HEXDIG", "LColumn", "RColumn", "SemiColon", "Equals", "Period", "CRLF", 
		"Minus", "Dot", "Underscore", "Tilde", "QuestionMark", "Slash", "ExclamationMark", 
		"Colon", "At", "DollarSign", "Hashtag", "Ampersand", "Percent", "SQuote", 
		"Star", "Plus", "Caret", "BackQuote", "VBar", "OWS", "HTAB", "VCHAR", 
		"OBS_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(httpLexer._LITERAL_NAMES, httpLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return httpLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(httpLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "http.g4"; }

	// @Override
	public get ruleNames(): string[] { return httpLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return httpLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return httpLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return httpLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02-\xF7\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\x9B\n\x0F\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
		"#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x05" +
		")\xD1\n)\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\xF4\n+\x03,\x03,\x02\x02\x02-\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
		"-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
		"=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S" +
		"\x02+U\x02,W\x02-\x03\x02\x05\x04\x02C\\c|\x03\x022;\x04\x02}}\x7F\x7F" +
		"\x02\u0116\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
		"\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02" +
		"\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02" +
		"O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02" +
		"\x02\x02\x02W\x03\x02\x02\x02\x03Y\x03\x02\x02\x02\x05]\x03\x02\x02\x02" +
		"\x07b\x03\x02\x02\x02\tg\x03\x02\x02\x02\vk\x03\x02\x02\x02\rr\x03\x02" +
		"\x02\x02\x0Fz\x03\x02\x02\x02\x11\x82\x03\x02\x02\x02\x13\x88\x03\x02" +
		"\x02\x02\x15\x8E\x03\x02\x02\x02\x17\x90\x03\x02\x02\x02\x19\x92\x03\x02" +
		"\x02\x02\x1B\x94\x03\x02\x02\x02\x1D\x9A\x03\x02\x02\x02\x1F\x9C\x03\x02" +
		"\x02\x02!\x9E\x03\x02\x02\x02#\xA0\x03\x02\x02\x02%\xA2\x03\x02\x02\x02" +
		"\'\xA4\x03\x02\x02\x02)\xA6\x03\x02\x02\x02+\xA8\x03\x02\x02\x02-\xAA" +
		"\x03\x02\x02\x02/\xAC\x03\x02\x02\x021\xAE\x03\x02\x02\x023\xB0\x03\x02" +
		"\x02\x025\xB2\x03\x02\x02\x027\xB4\x03\x02\x02\x029\xB6\x03\x02\x02\x02" +
		";\xB8\x03\x02\x02\x02=\xBA\x03\x02\x02\x02?\xBC\x03\x02\x02\x02A\xBE\x03" +
		"\x02\x02\x02C\xC0\x03\x02\x02\x02E\xC2\x03\x02\x02\x02G\xC4\x03\x02\x02" +
		"\x02I\xC6\x03\x02\x02\x02K\xC8\x03\x02\x02\x02M\xCA\x03\x02\x02\x02O\xCC" +
		"\x03\x02\x02\x02Q\xD0\x03\x02\x02\x02S\xD2\x03\x02\x02\x02U\xF3\x03\x02" +
		"\x02\x02W\xF5\x03\x02\x02\x02YZ\x07I\x02\x02Z[\x07G\x02\x02[\\\x07V\x02" +
		"\x02\\\x04\x03\x02\x02\x02]^\x07J\x02\x02^_\x07G\x02\x02_`\x07C\x02\x02" +
		"`a\x07F\x02\x02a\x06\x03\x02\x02\x02bc\x07R\x02\x02cd\x07Q\x02\x02de\x07" +
		"U\x02\x02ef\x07V\x02\x02f\b\x03\x02\x02\x02gh\x07R\x02\x02hi\x07W\x02" +
		"\x02ij\x07V\x02\x02j\n\x03\x02\x02\x02kl\x07F\x02\x02lm\x07G\x02\x02m" +
		"n\x07N\x02\x02no\x07G\x02\x02op\x07V\x02\x02pq\x07G\x02\x02q\f\x03\x02" +
		"\x02\x02rs\x07E\x02\x02st\x07Q\x02\x02tu\x07P\x02\x02uv\x07P\x02\x02v" +
		"w\x07G\x02\x02wx\x07E\x02\x02xy\x07V\x02\x02y\x0E\x03\x02\x02\x02z{\x07" +
		"Q\x02\x02{|\x07R\x02\x02|}\x07V\x02\x02}~\x07K\x02\x02~\x7F\x07Q\x02\x02" +
		"\x7F\x80\x07P\x02\x02\x80\x81\x07U\x02\x02\x81\x10\x03\x02\x02\x02\x82" +
		"\x83\x07V\x02\x02\x83\x84\x07T\x02\x02\x84\x85\x07C\x02\x02\x85\x86\x07" +
		"E\x02\x02\x86\x87\x07G\x02\x02\x87\x12\x03\x02\x02\x02\x88\x89\x07J\x02" +
		"\x02\x89\x8A\x07V\x02\x02\x8A\x8B\x07V\x02\x02\x8B\x8C\x07R\x02\x02\x8C" +
		"\x8D\x071\x02\x02\x8D\x14\x03\x02\x02\x02\x8E\x8F\x07\"\x02\x02\x8F\x16" +
		"\x03\x02\x02\x02\x90\x91\t\x02\x02\x02\x91\x18\x03\x02\x02\x02\x92\x93" +
		"\t\x03\x02\x02\x93\x1A\x03\x02\x02\x02\x94\x95\x05C\"\x02\x95\x96\x05" +
		"\x1D\x0F\x02\x96\x97\x05\x1D\x0F\x02\x97\x1C\x03\x02\x02\x02\x98\x9B\x05" +
		"\x19\r\x02\x99\x9B\x04CH\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02" +
		"\x02\x9B\x1E\x03\x02\x02\x02\x9C\x9D\x07*\x02\x02\x9D \x03\x02\x02\x02" +
		"\x9E\x9F\x07+\x02\x02\x9F\"\x03\x02\x02\x02\xA0\xA1\x07=\x02\x02\xA1$" +
		"\x03\x02\x02\x02\xA2\xA3\x07?\x02\x02\xA3&\x03\x02\x02\x02\xA4\xA5\x07" +
		".\x02\x02\xA5(\x03\x02\x02\x02\xA6\xA7\x07\f\x02\x02\xA7*\x03\x02\x02" +
		"\x02\xA8\xA9\x07/\x02\x02\xA9,\x03\x02\x02\x02\xAA\xAB\x070\x02\x02\xAB" +
		".\x03\x02\x02\x02\xAC\xAD\x07a\x02\x02\xAD0\x03\x02\x02\x02\xAE\xAF\x07" +
		"\x80\x02\x02\xAF2\x03\x02\x02\x02\xB0\xB1\x07A\x02\x02\xB14\x03\x02\x02" +
		"\x02\xB2\xB3\x071\x02\x02\xB36\x03\x02\x02\x02\xB4\xB5\x07#\x02\x02\xB5" +
		"8\x03\x02\x02\x02\xB6\xB7\x07<\x02\x02\xB7:\x03\x02\x02\x02\xB8\xB9\x07" +
		"B\x02\x02\xB9<\x03\x02\x02\x02\xBA\xBB\x07&\x02\x02\xBB>\x03\x02\x02\x02" +
		"\xBC\xBD\x07%\x02\x02\xBD@\x03\x02\x02\x02\xBE\xBF\x07(\x02\x02\xBFB\x03" +
		"\x02\x02\x02\xC0\xC1\x07\'\x02\x02\xC1D\x03\x02\x02\x02\xC2\xC3\x07)\x02" +
		"\x02\xC3F\x03\x02\x02\x02\xC4\xC5\x07,\x02\x02\xC5H\x03\x02\x02\x02\xC6" +
		"\xC7\x07-\x02\x02\xC7J\x03\x02\x02\x02\xC8\xC9\x07`\x02\x02\xC9L\x03\x02" +
		"\x02\x02\xCA\xCB\x07b\x02\x02\xCBN\x03\x02\x02\x02\xCC\xCD\x07~\x02\x02" +
		"\xCDP\x03\x02\x02\x02\xCE\xD1\x05\x15\v\x02\xCF\xD1\x05S*\x02\xD0\xCE" +
		"\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1R\x03\x02\x02\x02\xD2\xD3" +
		"\x07\v\x02\x02\xD3T\x03\x02\x02\x02\xD4\xF4\x057\x1C\x02\xD5\xF4\x07$" +
		"\x02\x02\xD6\xF4\x05? \x02\xD7\xF4\x05=\x1F\x02\xD8\xF4\x05C\"\x02\xD9" +
		"\xF4\x05A!\x02\xDA\xF4\x05E#\x02\xDB\xF4\x05\x1F\x10\x02\xDC\xF4\x05!" +
		"\x11\x02\xDD\xF4\x05!\x11\x02\xDE\xF4\x05G$\x02\xDF\xF4\x05I%\x02\xE0" +
		"\xF4\x05\'\x14\x02\xE1\xF4\x05+\x16\x02\xE2\xF4\x05-\x17\x02\xE3\xF4\x05" +
		"5\x1B\x02\xE4\xF4\x059\x1D\x02\xE5\xF4\x05#\x12\x02\xE6\xF4\x07>\x02\x02" +
		"\xE7\xF4\x05%\x13\x02\xE8\xF4\x07@\x02\x02\xE9\xF4\x053\x1A\x02\xEA\xF4" +
		"\x05;\x1E\x02\xEB\xF4\x04]^\x02\xEC\xF4\x05K&\x02\xED\xF4\x05/\x18\x02" +
		"\xEE\xF4\x07_\x02\x02\xEF\xF4\x05M\'\x02\xF0\xF4\t\x04\x02\x02\xF1\xF4" +
		"\x05O(\x02\xF2\xF4\x051\x19\x02\xF3\xD4\x03\x02\x02\x02\xF3\xD5\x03\x02" +
		"\x02\x02\xF3\xD6\x03\x02\x02\x02\xF3\xD7\x03\x02\x02\x02\xF3\xD8\x03\x02" +
		"\x02\x02\xF3\xD9\x03\x02\x02\x02\xF3\xDA\x03\x02\x02\x02\xF3\xDB\x03\x02" +
		"\x02\x02\xF3\xDC\x03\x02\x02\x02\xF3\xDD\x03\x02\x02\x02\xF3\xDE\x03\x02" +
		"\x02\x02\xF3\xDF\x03\x02\x02\x02\xF3\xE0\x03\x02\x02\x02\xF3\xE1\x03\x02" +
		"\x02\x02\xF3\xE2\x03\x02\x02\x02\xF3\xE3\x03\x02\x02\x02\xF3\xE4\x03\x02" +
		"\x02\x02\xF3\xE5\x03\x02\x02\x02\xF3\xE6\x03\x02\x02\x02\xF3\xE7\x03\x02" +
		"\x02\x02\xF3\xE8\x03\x02\x02\x02\xF3\xE9\x03\x02\x02\x02\xF3\xEA\x03\x02" +
		"\x02\x02\xF3\xEB\x03\x02\x02\x02\xF3\xEC\x03\x02\x02\x02\xF3\xED\x03\x02" +
		"\x02\x02\xF3\xEE\x03\x02\x02\x02\xF3\xEF\x03\x02\x02\x02\xF3\xF0\x03\x02" +
		"\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4V\x03\x02" +
		"\x02\x02\xF5\xF6\x04\x82\u0101\x02\xF6X\x03\x02\x02\x02\x06\x02\x9A\xD0" +
		"\xF3\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!httpLexer.__ATN) {
			httpLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(httpLexer._serializedATN));
		}

		return httpLexer.__ATN;
	}

}

