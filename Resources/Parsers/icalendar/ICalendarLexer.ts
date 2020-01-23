// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/icalendar/ICalendar.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class ICalendarLexer extends Lexer {
	public static readonly LINE_FOLD = 1;
	public static readonly WSP = 2;
	public static readonly ESCAPED_CHAR = 3;
	public static readonly CRLF = 4;
	public static readonly CONTROL = 5;
	public static readonly A = 6;
	public static readonly B = 7;
	public static readonly C = 8;
	public static readonly D = 9;
	public static readonly E = 10;
	public static readonly F = 11;
	public static readonly G = 12;
	public static readonly H = 13;
	public static readonly I = 14;
	public static readonly J = 15;
	public static readonly K = 16;
	public static readonly L = 17;
	public static readonly M = 18;
	public static readonly N = 19;
	public static readonly O = 20;
	public static readonly P = 21;
	public static readonly Q = 22;
	public static readonly R = 23;
	public static readonly S = 24;
	public static readonly T = 25;
	public static readonly U = 26;
	public static readonly V = 27;
	public static readonly W = 28;
	public static readonly X = 29;
	public static readonly Y = 30;
	public static readonly Z = 31;
	public static readonly EXCLAMATION = 32;
	public static readonly DQUOTE = 33;
	public static readonly HASH = 34;
	public static readonly DOLLAR = 35;
	public static readonly X25 = 36;
	public static readonly AMP = 37;
	public static readonly X27 = 38;
	public static readonly X28 = 39;
	public static readonly X29 = 40;
	public static readonly X2A = 41;
	public static readonly PLUS = 42;
	public static readonly COMMA = 43;
	public static readonly MINUS = 44;
	public static readonly DOT = 45;
	public static readonly FSLASH = 46;
	public static readonly D0 = 47;
	public static readonly D1 = 48;
	public static readonly D2 = 49;
	public static readonly D3 = 50;
	public static readonly D4 = 51;
	public static readonly D5 = 52;
	public static readonly D6 = 53;
	public static readonly D7 = 54;
	public static readonly D8 = 55;
	public static readonly D9 = 56;
	public static readonly COL = 57;
	public static readonly SCOL = 58;
	public static readonly X3C = 59;
	public static readonly ASSIGN = 60;
	public static readonly X3E = 61;
	public static readonly X3F = 62;
	public static readonly X40 = 63;
	public static readonly X5B = 64;
	public static readonly BSLASH = 65;
	public static readonly X5D = 66;
	public static readonly CARET = 67;
	public static readonly USCORE = 68;
	public static readonly X60 = 69;
	public static readonly X7B = 70;
	public static readonly X7C = 71;
	public static readonly X7D = 72;
	public static readonly X7E = 73;
	public static readonly NON_US_ASCII = 74;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LINE_FOLD", "WSP", "ESCAPED_CHAR", "CRLF", "CONTROL", "A", "B", "C", 
		"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
		"R", "S", "T", "U", "V", "W", "X", "Y", "Z", "EXCLAMATION", "DQUOTE", 
		"HASH", "DOLLAR", "X25", "AMP", "X27", "X28", "X29", "X2A", "PLUS", "COMMA", 
		"MINUS", "DOT", "FSLASH", "D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", 
		"D8", "D9", "COL", "SCOL", "X3C", "ASSIGN", "X3E", "X3F", "X40", "X5B", 
		"BSLASH", "X5D", "CARET", "USCORE", "X60", "X7B", "X7C", "X7D", "X7E", 
		"NON_US_ASCII",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'!'", "'\"'", "'#'", "'$'", 
		"'%'", "'&'", "'''", "'('", "')'", "'*'", "'+'", "','", "'-'", "'.'", 
		"'/'", "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", 
		"'9'", "':'", "';'", "'<'", "'='", "'>'", "'?'", "'@'", "'['", "'\\'", 
		"']'", "'^'", "'_'", "'`'", "'{'", "'|'", "'}'", "'~'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LINE_FOLD", "WSP", "ESCAPED_CHAR", "CRLF", "CONTROL", "A", 
		"B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "EXCLAMATION", 
		"DQUOTE", "HASH", "DOLLAR", "X25", "AMP", "X27", "X28", "X29", "X2A", 
		"PLUS", "COMMA", "MINUS", "DOT", "FSLASH", "D0", "D1", "D2", "D3", "D4", 
		"D5", "D6", "D7", "D8", "D9", "COL", "SCOL", "X3C", "ASSIGN", "X3E", "X3F", 
		"X40", "X5B", "BSLASH", "X5D", "CARET", "USCORE", "X60", "X7B", "X7C", 
		"X7D", "X7E", "NON_US_ASCII",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ICalendarLexer._LITERAL_NAMES, ICalendarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ICalendarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ICalendarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ICalendar.g4"; }

	// @Override
	public get ruleNames(): string[] { return ICalendarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ICalendarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ICalendarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ICalendarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02L\u0150\b\x01" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xA3" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAA\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xB1\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\xB8\n\x04\x03\x04\x05\x04\xBB\n\x04\x03\x05" +
		"\x05\x05\xBE\n\x05\x03\x05\x03\x05\x05\x05\xC2\n\x05\x03\x06\x05\x06\xC5" +
		"\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v" +
		"\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03" +
		"$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03" +
		"+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x03" +
		"2\x032\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x038\x038\x03" +
		"9\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03" +
		"@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03" +
		"G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x02\x02\x02L\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U" +
		"\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x02" +
		"7m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02" +
		"B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02" +
		"J\x93\x02K\x95\x02L\x03\x02\x1E\x04\x02\v\v\"\"\x06\x02\x02\n\r\x0E\x10" +
		"!\x81\x81\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg" +
		"\x04\x02HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02M" +
		"Mmm\x04\x02NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02" +
		"SSss\x04\x02TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02" +
		"YYyy\x04\x02ZZzz\x04\x02[[{{\x04\x02\\\\||\x02\u0158\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02" +
		"\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02" +
		"m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02" +
		"\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02" +
		"\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02" +
		"\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02" +
		"\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02" +
		"\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02" +
		"\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x03\x97\x03\x02\x02\x02\x05" +
		"\x9C\x03\x02\x02\x02\x07\xBA\x03\x02\x02\x02\t\xC1\x03\x02\x02\x02\v\xC4" +
		"\x03\x02\x02\x02\r\xC6\x03\x02\x02\x02\x0F\xC8\x03\x02\x02\x02\x11\xCA" +
		"\x03\x02\x02\x02\x13\xCC\x03\x02\x02\x02\x15\xCE\x03\x02\x02\x02\x17\xD0" +
		"\x03\x02\x02\x02\x19\xD2\x03\x02\x02\x02\x1B\xD4\x03\x02\x02\x02\x1D\xD6" +
		"\x03\x02\x02\x02\x1F\xD8\x03\x02\x02\x02!\xDA\x03\x02\x02\x02#\xDC\x03" +
		"\x02\x02\x02%\xDE\x03\x02\x02\x02\'\xE0\x03\x02\x02\x02)\xE2\x03\x02\x02" +
		"\x02+\xE4\x03\x02\x02\x02-\xE6\x03\x02\x02\x02/\xE8\x03\x02\x02\x021\xEA" +
		"\x03\x02\x02\x023\xEC\x03\x02\x02\x025\xEE\x03\x02\x02\x027\xF0\x03\x02" +
		"\x02\x029\xF2\x03\x02\x02\x02;\xF4\x03\x02\x02\x02=\xF6\x03\x02\x02\x02" +
		"?\xF8\x03\x02\x02\x02A\xFA\x03\x02\x02\x02C\xFC\x03\x02\x02\x02E\xFE\x03" +
		"\x02\x02\x02G\u0100\x03\x02\x02\x02I\u0102\x03\x02\x02\x02K\u0104\x03" +
		"\x02\x02\x02M\u0106\x03\x02\x02\x02O\u0108\x03\x02\x02\x02Q\u010A\x03" +
		"\x02\x02\x02S\u010C\x03\x02\x02\x02U\u010E\x03\x02\x02\x02W\u0110\x03" +
		"\x02\x02\x02Y\u0112\x03\x02\x02\x02[\u0114\x03\x02\x02\x02]\u0116\x03" +
		"\x02\x02\x02_\u0118\x03\x02\x02\x02a\u011A\x03\x02\x02\x02c\u011C\x03" +
		"\x02\x02\x02e\u011E\x03\x02\x02\x02g\u0120\x03\x02\x02\x02i\u0122\x03" +
		"\x02\x02\x02k\u0124\x03\x02\x02\x02m\u0126\x03\x02\x02\x02o\u0128\x03" +
		"\x02\x02\x02q\u012A\x03\x02\x02\x02s\u012C\x03\x02\x02\x02u\u012E\x03" +
		"\x02\x02\x02w\u0130\x03\x02\x02\x02y\u0132\x03\x02\x02\x02{\u0134\x03" +
		"\x02\x02\x02}\u0136\x03\x02\x02\x02\x7F\u0138\x03\x02\x02\x02\x81\u013A" +
		"\x03\x02\x02\x02\x83\u013C\x03\x02\x02\x02\x85\u013E\x03\x02\x02\x02\x87" +
		"\u0140\x03\x02\x02\x02\x89\u0142\x03\x02\x02\x02\x8B\u0144\x03\x02\x02" +
		"\x02\x8D\u0146\x03\x02\x02\x02\x8F\u0148\x03\x02\x02\x02\x91\u014A\x03" +
		"\x02\x02\x02\x93\u014C\x03\x02\x02\x02\x95\u014E\x03\x02\x02\x02\x97\x98" +
		"\x05\t\x05\x02\x98\x99\x05\x05\x03\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B" +
		"\b\x02\x02\x02\x9B\x04\x03\x02\x02\x02\x9C\x9D\t\x02\x02\x02\x9D\x06\x03" +
		"\x02\x02\x02\x9E\xA2\x07^\x02\x02\x9F\xA0\x05\t\x05\x02\xA0\xA1\x05\x05" +
		"\x03\x02\xA1\xA3\x03\x02\x02\x02\xA2\x9F\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xBB\x07^\x02\x02\xA5\xA9\x07^\x02" +
		"\x02\xA6\xA7\x05\t\x05\x02\xA7\xA8\x05\x05\x03\x02\xA8\xAA\x03\x02\x02" +
		"\x02\xA9\xA6\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02" +
		"\x02\xAB\xBB\x07=\x02\x02\xAC\xB0\x07^\x02\x02\xAD\xAE\x05\t\x05\x02\xAE" +
		"\xAF\x05\x05\x03\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAD\x03\x02\x02\x02\xB0" +
		"\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xBB\x07.\x02\x02\xB3" +
		"\xB7\x07^\x02\x02\xB4\xB5\x05\t\x05\x02\xB5\xB6\x05\x05\x03\x02\xB6\xB8" +
		"\x03\x02\x02\x02\xB7\xB4\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9" +
		"\x03\x02\x02\x02\xB9\xBB\x05\'\x14\x02\xBA\x9E\x03\x02\x02\x02\xBA\xA5" +
		"\x03\x02\x02\x02\xBA\xAC\x03\x02\x02\x02\xBA\xB3\x03\x02\x02\x02\xBB\b" +
		"\x03\x02\x02\x02\xBC\xBE\x07\x0F\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE" +
		"\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC2\x07\f\x02\x02\xC0\xC2" +
		"\x07\x0F\x02\x02\xC1\xBD\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\n" +
		"\x03\x02\x02\x02\xC3\xC5\t\x03\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\f\x03" +
		"\x02\x02\x02\xC6\xC7\t\x04\x02\x02\xC7\x0E\x03\x02\x02\x02\xC8\xC9\t\x05" +
		"\x02\x02\xC9\x10\x03\x02\x02\x02\xCA\xCB\t\x06\x02\x02\xCB\x12\x03\x02" +
		"\x02\x02\xCC\xCD\t\x07\x02\x02\xCD\x14\x03\x02\x02\x02\xCE\xCF\t\b\x02" +
		"\x02\xCF\x16\x03\x02\x02\x02\xD0\xD1\t\t\x02\x02\xD1\x18\x03\x02\x02\x02" +
		"\xD2\xD3\t\n\x02\x02\xD3\x1A\x03\x02\x02\x02\xD4\xD5\t\v\x02\x02\xD5\x1C" +
		"\x03\x02\x02\x02\xD6\xD7\t\f\x02\x02\xD7\x1E\x03\x02\x02\x02\xD8\xD9\t" +
		"\r\x02\x02\xD9 \x03\x02\x02\x02\xDA\xDB\t\x0E\x02\x02\xDB\"\x03\x02\x02" +
		"\x02\xDC\xDD\t\x0F\x02\x02\xDD$\x03\x02\x02\x02\xDE\xDF\t\x10\x02\x02" +
		"\xDF&\x03\x02\x02\x02\xE0\xE1\t\x11\x02\x02\xE1(\x03\x02\x02\x02\xE2\xE3" +
		"\t\x12\x02\x02\xE3*\x03\x02\x02\x02\xE4\xE5\t\x13\x02\x02\xE5,\x03\x02" +
		"\x02\x02\xE6\xE7\t\x14\x02\x02\xE7.\x03\x02\x02\x02\xE8\xE9\t\x15\x02" +
		"\x02\xE90\x03\x02\x02\x02\xEA\xEB\t\x16\x02\x02\xEB2\x03\x02\x02\x02\xEC" +
		"\xED\t\x17\x02\x02\xED4\x03\x02\x02\x02\xEE\xEF\t\x18\x02\x02\xEF6\x03" +
		"\x02\x02\x02\xF0\xF1\t\x19\x02\x02\xF18\x03\x02\x02\x02\xF2\xF3\t\x1A" +
		"\x02\x02\xF3:\x03\x02\x02\x02\xF4\xF5\t\x1B\x02\x02\xF5<\x03\x02\x02\x02" +
		"\xF6\xF7\t\x1C\x02\x02\xF7>\x03\x02\x02\x02\xF8\xF9\t\x1D\x02\x02\xF9" +
		"@\x03\x02\x02\x02\xFA\xFB\x07#\x02\x02\xFBB\x03\x02\x02\x02\xFC\xFD\x07" +
		"$\x02\x02\xFDD\x03\x02\x02\x02\xFE\xFF\x07%\x02\x02\xFFF\x03\x02\x02\x02" +
		"\u0100\u0101\x07&\x02\x02\u0101H\x03\x02\x02\x02\u0102\u0103\x07\'\x02" +
		"\x02\u0103J\x03\x02\x02\x02\u0104\u0105\x07(\x02\x02\u0105L\x03\x02\x02" +
		"\x02\u0106\u0107\x07)\x02\x02\u0107N\x03\x02\x02\x02\u0108\u0109\x07*" +
		"\x02\x02\u0109P\x03\x02\x02\x02\u010A\u010B\x07+\x02\x02\u010BR\x03\x02" +
		"\x02\x02\u010C\u010D\x07,\x02\x02\u010DT\x03\x02\x02\x02\u010E\u010F\x07" +
		"-\x02\x02\u010FV\x03\x02\x02\x02\u0110\u0111\x07.\x02\x02\u0111X\x03\x02" +
		"\x02\x02\u0112\u0113\x07/\x02\x02\u0113Z\x03\x02\x02\x02\u0114\u0115\x07" +
		"0\x02\x02\u0115\\\x03\x02\x02\x02\u0116\u0117\x071\x02\x02\u0117^\x03" +
		"\x02\x02\x02\u0118\u0119\x072\x02\x02\u0119`\x03\x02\x02\x02\u011A\u011B" +
		"\x073\x02\x02\u011Bb\x03\x02\x02\x02\u011C\u011D\x074\x02\x02\u011Dd\x03" +
		"\x02\x02\x02\u011E\u011F\x075\x02\x02\u011Ff\x03\x02\x02\x02\u0120\u0121" +
		"\x076\x02\x02\u0121h\x03\x02\x02\x02\u0122\u0123\x077\x02\x02\u0123j\x03" +
		"\x02\x02\x02\u0124\u0125\x078\x02\x02\u0125l\x03\x02\x02\x02\u0126\u0127" +
		"\x079\x02\x02\u0127n\x03\x02\x02\x02\u0128\u0129\x07:\x02\x02\u0129p\x03" +
		"\x02\x02\x02\u012A\u012B\x07;\x02\x02\u012Br\x03\x02\x02\x02\u012C\u012D" +
		"\x07<\x02\x02\u012Dt\x03\x02\x02\x02\u012E\u012F\x07=\x02\x02\u012Fv\x03" +
		"\x02\x02\x02\u0130\u0131\x07>\x02\x02\u0131x\x03\x02\x02\x02\u0132\u0133" +
		"\x07?\x02\x02\u0133z\x03\x02\x02\x02\u0134\u0135\x07@\x02\x02\u0135|\x03" +
		"\x02\x02\x02\u0136\u0137\x07A\x02\x02\u0137~\x03\x02\x02\x02\u0138\u0139" +
		"\x07B\x02\x02\u0139\x80\x03\x02\x02\x02\u013A\u013B\x07]\x02\x02\u013B" +
		"\x82\x03\x02\x02\x02\u013C\u013D\x07^\x02\x02\u013D\x84\x03\x02\x02\x02" +
		"\u013E\u013F\x07_\x02\x02\u013F\x86\x03\x02\x02\x02\u0140\u0141\x07`\x02" +
		"\x02\u0141\x88\x03\x02\x02\x02\u0142\u0143\x07a\x02\x02\u0143\x8A\x03" +
		"\x02\x02\x02\u0144\u0145\x07b\x02\x02\u0145\x8C\x03\x02\x02\x02\u0146" +
		"\u0147\x07}\x02\x02\u0147\x8E\x03\x02\x02\x02\u0148\u0149\x07~\x02\x02" +
		"\u0149\x90\x03\x02\x02\x02\u014A\u014B\x07\x7F\x02\x02\u014B\x92\x03\x02" +
		"\x02\x02\u014C\u014D\x07\x80\x02\x02\u014D\x94\x03\x02\x02\x02\u014E\u014F" +
		"\v\x02\x02\x02\u014F\x96\x03\x02\x02\x02\v\x02\xA2\xA9\xB0\xB7\xBA\xBD" +
		"\xC1\xC4\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ICalendarLexer.__ATN) {
			ICalendarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ICalendarLexer._serializedATN));
		}

		return ICalendarLexer.__ATN;
	}

}

