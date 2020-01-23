// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/molecule/molecule.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class moleculeLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly ELEMENT = 6;
	public static readonly NUMBER = 7;
	public static readonly WS = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "ELEMENT", "NUMBER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u00B7'", "'('", "')'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "ELEMENT", 
		"NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(moleculeLexer._LITERAL_NAMES, moleculeLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return moleculeLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(moleculeLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "molecule.g4"; }

	// @Override
	public get ruleNames(): string[] { return moleculeLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return moleculeLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return moleculeLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return moleculeLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n\u0108\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\xFB\n\x07\x03\b\x06\b\xFE\n\b\r\b\x0E\b\xFF\x03\t" +
		"\x06\t\u0103\n\t\r\t\x0E\t\u0104\x03\t\x03\t\x02\x02\x02\n\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x03\x02\x05\x05\x02DEHHPQ\x04\x02RRUU\x05\x02\v\f\x0F\x0F\"\"\x02\u0179" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x05" +
		"\x15\x03\x02\x02\x02\x07\x17\x03\x02\x02\x02\t\x19\x03\x02\x02\x02\v\x1B" +
		"\x03\x02\x02\x02\r\xFA\x03\x02\x02\x02\x0F\xFD\x03\x02\x02\x02\x11\u0102" +
		"\x03\x02\x02\x02\x13\x14\x07\xB9\x02\x02\x14\x04\x03\x02\x02\x02\x15\x16" +
		"\x07*\x02\x02\x16\x06\x03\x02\x02\x02\x17\x18\x07+\x02\x02\x18\b\x03\x02" +
		"\x02\x02\x19\x1A\x07]\x02\x02\x1A\n\x03\x02\x02\x02\x1B\x1C\x07_\x02\x02" +
		"\x1C\f\x03\x02\x02\x02\x1D\xFB\x07J\x02\x02\x1E\x1F\x07J\x02\x02\x1F\xFB" +
		"\x07g\x02\x02 !\x07N\x02\x02!\xFB\x07k\x02\x02\"#\x07D\x02\x02#\xFB\x07" +
		"g\x02\x02$\xFB\t\x02\x02\x02%&\x07P\x02\x02&\xFB\x07g\x02\x02\'(\x07P" +
		"\x02\x02(\xFB\x07c\x02\x02)*\x07O\x02\x02*\xFB\x07i\x02\x02+,\x07C\x02" +
		"\x02,\xFB\x07n\x02\x02-.\x07U\x02\x02.\xFB\x07k\x02\x02/\xFB\t\x03\x02" +
		"\x0201\x07E\x02\x021\xFB\x07n\x02\x0223\x07C\x02\x023\xFB\x07t\x02\x02" +
		"4\xFB\x07M\x02\x0256\x07E\x02\x026\xFB\x07c\x02\x0278\x07U\x02\x028\xFB" +
		"\x07e\x02\x029:\x07V\x02\x02:\xFB\x07k\x02\x02;\xFB\x07X\x02\x02<=\x07" +
		"E\x02\x02=\xFB\x07t\x02\x02>?\x07O\x02\x02?\xFB\x07p\x02\x02@A\x07H\x02" +
		"\x02A\xFB\x07g\x02\x02BC\x07E\x02\x02C\xFB\x07q\x02\x02DE\x07P\x02\x02" +
		"E\xFB\x07k\x02\x02FG\x07E\x02\x02G\xFB\x07w\x02\x02HI\x07\\\x02\x02I\xFB" +
		"\x07p\x02\x02JK\x07I\x02\x02K\xFB\x07c\x02\x02LM\x07I\x02\x02M\xFB\x07" +
		"g\x02\x02NO\x07C\x02\x02O\xFB\x07u\x02\x02PQ\x07U\x02\x02Q\xFB\x07g\x02" +
		"\x02RS\x07D\x02\x02S\xFB\x07t\x02\x02TU\x07M\x02\x02U\xFB\x07t\x02\x02" +
		"VW\x07T\x02\x02W\xFB\x07d\x02\x02XY\x07U\x02\x02Y\xFB\x07t\x02\x02Z\xFB" +
		"\x07[\x02\x02[\\\x07\\\x02\x02\\\xFB\x07t\x02\x02]^\x07P\x02\x02^\xFB" +
		"\x07d\x02\x02_`\x07O\x02\x02`\xFB\x07q\x02\x02ab\x07V\x02\x02b\xFB\x07" +
		"e\x02\x02cd\x07T\x02\x02d\xFB\x07w\x02\x02ef\x07T\x02\x02f\xFB\x07j\x02" +
		"\x02gh\x07R\x02\x02h\xFB\x07f\x02\x02ij\x07C\x02\x02j\xFB\x07i\x02\x02" +
		"kl\x07E\x02\x02l\xFB\x07f\x02\x02mn\x07K\x02\x02n\xFB\x07p\x02\x02op\x07" +
		"U\x02\x02p\xFB\x07p\x02\x02qr\x07U\x02\x02r\xFB\x07d\x02\x02st\x07V\x02" +
		"\x02t\xFB\x07g\x02\x02u\xFB\x07K\x02\x02vw\x07Z\x02\x02w\xFB\x07g\x02" +
		"\x02xy\x07E\x02\x02y\xFB\x07u\x02\x02z{\x07D\x02\x02{\xFB\x07c\x02\x02" +
		"|}\x07N\x02\x02}\xFB\x07c\x02\x02~\x7F\x07E\x02\x02\x7F\xFB\x07g\x02\x02" +
		"\x80\x81\x07R\x02\x02\x81\xFB\x07t\x02\x02\x82\x83\x07P\x02\x02\x83\xFB" +
		"\x07f\x02\x02\x84\x85\x07R\x02\x02\x85\xFB\x07o\x02\x02\x86\x87\x07U\x02" +
		"\x02\x87\xFB\x07o\x02\x02\x88\x89\x07G\x02\x02\x89\xFB\x07w\x02\x02\x8A" +
		"\x8B\x07I\x02\x02\x8B\xFB\x07f\x02\x02\x8C\x8D\x07V\x02\x02\x8D\xFB\x07" +
		"d\x02\x02\x8E\x8F\x07F\x02\x02\x8F\xFB\x07{\x02\x02\x90\x91\x07J\x02\x02" +
		"\x91\xFB\x07q\x02\x02\x92\x93\x07G\x02\x02\x93\xFB\x07t\x02\x02\x94\x95" +
		"\x07V\x02\x02\x95\xFB\x07o\x02\x02\x96\x97\x07[\x02\x02\x97\xFB\x07d\x02" +
		"\x02\x98\x99\x07N\x02\x02\x99\xFB\x07w\x02\x02\x9A\x9B\x07J\x02\x02\x9B" +
		"\xFB\x07h\x02\x02\x9C\x9D\x07V\x02\x02\x9D\xFB\x07c\x02\x02\x9E\xFB\x07" +
		"Y\x02\x02\x9F\xA0\x07T\x02\x02\xA0\xFB\x07g\x02\x02\xA1\xA2\x07Q\x02\x02" +
		"\xA2\xFB\x07u\x02\x02\xA3\xA4\x07K\x02\x02\xA4\xFB\x07t\x02\x02\xA5\xA6" +
		"\x07R\x02\x02\xA6\xFB\x07v\x02\x02\xA7\xA8\x07C\x02\x02\xA8\xFB\x07w\x02" +
		"\x02\xA9\xAA\x07J\x02\x02\xAA\xFB\x07i\x02\x02\xAB\xAC\x07V\x02\x02\xAC" +
		"\xFB\x07n\x02\x02\xAD\xAE\x07R\x02\x02\xAE\xFB\x07d\x02\x02\xAF\xB0\x07" +
		"D\x02\x02\xB0\xFB\x07k\x02\x02\xB1\xB2\x07R\x02\x02\xB2\xFB\x07q\x02\x02" +
		"\xB3\xB4\x07C\x02\x02\xB4\xFB\x07v\x02\x02\xB5\xB6\x07T\x02\x02\xB6\xFB" +
		"\x07p\x02\x02\xB7\xB8\x07H\x02\x02\xB8\xFB\x07t\x02\x02\xB9\xBA\x07T\x02" +
		"\x02\xBA\xFB\x07c\x02\x02\xBB\xBC\x07C\x02\x02\xBC\xFB\x07e\x02\x02\xBD" +
		"\xBE\x07V\x02\x02\xBE\xFB\x07j\x02\x02\xBF\xC0\x07R\x02\x02\xC0\xFB\x07" +
		"c\x02\x02\xC1\xFB\x07W\x02\x02\xC2\xC3\x07P\x02\x02\xC3\xFB\x07r\x02\x02" +
		"\xC4\xC5\x07R\x02\x02\xC5\xFB\x07w\x02\x02\xC6\xC7\x07C\x02\x02\xC7\xFB" +
		"\x07o\x02\x02\xC8\xC9\x07E\x02\x02\xC9\xFB\x07o\x02\x02\xCA\xCB\x07D\x02" +
		"\x02\xCB\xFB\x07m\x02\x02\xCC\xCD\x07E\x02\x02\xCD\xFB\x07h\x02\x02\xCE" +
		"\xCF\x07G\x02\x02\xCF\xFB\x07u\x02\x02\xD0\xD1\x07H\x02\x02\xD1\xFB\x07" +
		"o\x02\x02\xD2\xD3\x07O\x02\x02\xD3\xFB\x07f\x02\x02\xD4\xD5\x07P\x02\x02" +
		"\xD5\xFB\x07q\x02\x02\xD6\xD7\x07N\x02\x02\xD7\xFB\x07t\x02\x02\xD8\xD9" +
		"\x07T\x02\x02\xD9\xFB\x07h\x02\x02\xDA\xDB\x07F\x02\x02\xDB\xFB\x07d\x02" +
		"\x02\xDC\xDD\x07U\x02\x02\xDD\xFB\x07i\x02\x02\xDE\xDF\x07D\x02\x02\xDF" +
		"\xFB\x07j\x02\x02\xE0\xE1\x07J\x02\x02\xE1\xFB\x07u\x02\x02\xE2\xE3\x07" +
		"O\x02\x02\xE3\xFB\x07v\x02\x02\xE4\xE5\x07F\x02\x02\xE5\xFB\x07u\x02\x02" +
		"\xE6\xE7\x07T\x02\x02\xE7\xFB\x07i\x02\x02\xE8\xE9\x07E\x02\x02\xE9\xFB" +
		"\x07p\x02\x02\xEA\xEB\x07W\x02\x02\xEB\xEC\x07w\x02\x02\xEC\xFB\x07v\x02" +
		"\x02\xED\xEE\x07H\x02\x02\xEE\xFB\x07n\x02\x02\xEF\xF0\x07W\x02\x02\xF0" +
		"\xF1\x07w\x02\x02\xF1\xFB\x07r\x02\x02\xF2\xF3\x07N\x02\x02\xF3\xFB\x07" +
		"x\x02\x02\xF4\xF5\x07W\x02\x02\xF5\xF6\x07w\x02\x02\xF6\xFB\x07u\x02\x02" +
		"\xF7\xF8\x07W\x02\x02\xF8\xF9\x07w\x02\x02\xF9\xFB\x07q\x02\x02\xFA\x1D" +
		"\x03\x02\x02\x02\xFA\x1E\x03\x02\x02\x02\xFA \x03\x02\x02\x02\xFA\"\x03" +
		"\x02\x02\x02\xFA$\x03\x02\x02\x02\xFA%\x03\x02\x02\x02\xFA\'\x03\x02\x02" +
		"\x02\xFA)\x03\x02\x02\x02\xFA+\x03\x02\x02\x02\xFA-\x03\x02\x02\x02\xFA" +
		"/\x03\x02\x02\x02\xFA0\x03\x02\x02\x02\xFA2\x03\x02\x02\x02\xFA4\x03\x02" +
		"\x02\x02\xFA5\x03\x02\x02\x02\xFA7\x03\x02\x02\x02\xFA9\x03\x02\x02\x02" +
		"\xFA;\x03\x02\x02\x02\xFA<\x03\x02\x02\x02\xFA>\x03\x02\x02\x02\xFA@\x03" +
		"\x02\x02\x02\xFAB\x03\x02\x02\x02\xFAD\x03\x02\x02\x02\xFAF\x03\x02\x02" +
		"\x02\xFAH\x03\x02\x02\x02\xFAJ\x03\x02\x02\x02\xFAL\x03\x02\x02\x02\xFA" +
		"N\x03\x02\x02\x02\xFAP\x03\x02\x02\x02\xFAR\x03\x02\x02\x02\xFAT\x03\x02" +
		"\x02\x02\xFAV\x03\x02\x02\x02\xFAX\x03\x02\x02\x02\xFAZ\x03\x02\x02\x02" +
		"\xFA[\x03\x02\x02\x02\xFA]\x03\x02\x02\x02\xFA_\x03\x02\x02\x02\xFAa\x03" +
		"\x02\x02\x02\xFAc\x03\x02\x02\x02\xFAe\x03\x02\x02\x02\xFAg\x03\x02\x02" +
		"\x02\xFAi\x03\x02\x02\x02\xFAk\x03\x02\x02\x02\xFAm\x03\x02\x02\x02\xFA" +
		"o\x03\x02\x02\x02\xFAq\x03\x02\x02\x02\xFAs\x03\x02\x02\x02\xFAu\x03\x02" +
		"\x02\x02\xFAv\x03\x02\x02\x02\xFAx\x03\x02\x02\x02\xFAz\x03\x02\x02\x02" +
		"\xFA|\x03\x02\x02\x02\xFA~\x03\x02\x02\x02\xFA\x80\x03\x02\x02\x02\xFA" +
		"\x82\x03\x02\x02\x02\xFA\x84\x03\x02\x02\x02\xFA\x86\x03\x02\x02\x02\xFA" +
		"\x88\x03\x02\x02\x02\xFA\x8A\x03\x02\x02\x02\xFA\x8C\x03\x02\x02\x02\xFA" +
		"\x8E\x03\x02\x02\x02\xFA\x90\x03\x02\x02\x02\xFA\x92\x03\x02\x02\x02\xFA" +
		"\x94\x03\x02\x02\x02\xFA\x96\x03\x02\x02\x02\xFA\x98\x03\x02\x02\x02\xFA" +
		"\x9A\x03\x02\x02\x02\xFA\x9C\x03\x02\x02\x02\xFA\x9E\x03\x02\x02\x02\xFA" +
		"\x9F\x03\x02\x02\x02\xFA\xA1\x03\x02\x02\x02\xFA\xA3\x03\x02\x02\x02\xFA" +
		"\xA5\x03\x02\x02\x02\xFA\xA7\x03\x02\x02\x02\xFA\xA9\x03\x02\x02\x02\xFA" +
		"\xAB\x03\x02\x02\x02\xFA\xAD\x03\x02\x02\x02\xFA\xAF\x03\x02\x02\x02\xFA" +
		"\xB1\x03\x02\x02\x02\xFA\xB3\x03\x02\x02\x02\xFA\xB5\x03\x02\x02\x02\xFA" +
		"\xB7\x03\x02\x02\x02\xFA\xB9\x03\x02\x02\x02\xFA\xBB\x03\x02\x02\x02\xFA" +
		"\xBD\x03\x02\x02\x02\xFA\xBF\x03\x02\x02\x02\xFA\xC1\x03\x02\x02\x02\xFA" +
		"\xC2\x03\x02\x02\x02\xFA\xC4\x03\x02\x02\x02\xFA\xC6\x03\x02\x02\x02\xFA" +
		"\xC8\x03\x02\x02\x02\xFA\xCA\x03\x02\x02\x02\xFA\xCC\x03\x02\x02\x02\xFA" +
		"\xCE\x03\x02\x02\x02\xFA\xD0\x03\x02\x02\x02\xFA\xD2\x03\x02\x02\x02\xFA" +
		"\xD4\x03\x02\x02\x02\xFA\xD6\x03\x02\x02\x02\xFA\xD8\x03\x02\x02\x02\xFA" +
		"\xDA\x03\x02\x02\x02\xFA\xDC\x03\x02\x02\x02\xFA\xDE\x03\x02\x02\x02\xFA" +
		"\xE0\x03\x02\x02\x02\xFA\xE2\x03\x02\x02\x02\xFA\xE4\x03\x02\x02\x02\xFA" +
		"\xE6\x03\x02\x02\x02\xFA\xE8\x03\x02\x02\x02\xFA\xEA\x03\x02\x02\x02\xFA" +
		"\xED\x03\x02\x02\x02\xFA\xEF\x03\x02\x02\x02\xFA\xF2\x03\x02\x02\x02\xFA" +
		"\xF4\x03\x02\x02\x02\xFA\xF7\x03\x02\x02\x02\xFB\x0E\x03\x02\x02\x02\xFC" +
		"\xFE\x042;\x02\xFD\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\xFD" +
		"\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\x10\x03\x02\x02\x02\u0101" +
		"\u0103\t\x04\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\u0107\b\t\x02\x02\u0107\x12\x03\x02\x02\x02\x06" +
		"\x02\xFA\xFF\u0104\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!moleculeLexer.__ATN) {
			moleculeLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(moleculeLexer._serializedATN));
		}

		return moleculeLexer.__ATN;
	}

}

