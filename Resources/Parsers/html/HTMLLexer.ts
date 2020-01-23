// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/html/HTMLLexer.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class HTMLLexer extends Lexer {
	public static readonly HTML_COMMENT = 1;
	public static readonly HTML_CONDITIONAL_COMMENT = 2;
	public static readonly XML_DECLARATION = 3;
	public static readonly CDATA = 4;
	public static readonly DTD = 5;
	public static readonly SCRIPTLET = 6;
	public static readonly SEA_WS = 7;
	public static readonly SCRIPT_OPEN = 8;
	public static readonly STYLE_OPEN = 9;
	public static readonly TAG_OPEN = 10;
	public static readonly HTML_TEXT = 11;
	public static readonly TAG_CLOSE = 12;
	public static readonly TAG_SLASH_CLOSE = 13;
	public static readonly TAG_SLASH = 14;
	public static readonly TAG_EQUALS = 15;
	public static readonly TAG_NAME = 16;
	public static readonly TAG_WHITESPACE = 17;
	public static readonly SCRIPT_BODY = 18;
	public static readonly SCRIPT_SHORT_BODY = 19;
	public static readonly STYLE_BODY = 20;
	public static readonly STYLE_SHORT_BODY = 21;
	public static readonly ATTVALUE_VALUE = 22;
	public static readonly ATTRIBUTE = 23;
	public static readonly TAG = 1;
	public static readonly SCRIPT = 2;
	public static readonly STYLE = 3;
	public static readonly ATTVALUE = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "TAG", "SCRIPT", "STYLE", "ATTVALUE",
	];

	public static readonly ruleNames: string[] = [
		"HTML_COMMENT", "HTML_CONDITIONAL_COMMENT", "XML_DECLARATION", "CDATA", 
		"DTD", "SCRIPTLET", "SEA_WS", "SCRIPT_OPEN", "STYLE_OPEN", "TAG_OPEN", 
		"HTML_TEXT", "TAG_CLOSE", "TAG_SLASH_CLOSE", "TAG_SLASH", "TAG_EQUALS", 
		"TAG_NAME", "TAG_WHITESPACE", "HEXDIGIT", "DIGIT", "TAG_NameChar", "TAG_NameStartChar", 
		"SCRIPT_BODY", "SCRIPT_SHORT_BODY", "STYLE_BODY", "STYLE_SHORT_BODY", 
		"ATTVALUE_VALUE", "ATTRIBUTE", "ATTCHAR", "ATTCHARS", "HEXCHARS", "DECCHARS", 
		"DOUBLE_QUOTE_STRING", "SINGLE_QUOTE_STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'<'", undefined, "'>'", "'/>'", "'/'", 
		"'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HTML_COMMENT", "HTML_CONDITIONAL_COMMENT", "XML_DECLARATION", 
		"CDATA", "DTD", "SCRIPTLET", "SEA_WS", "SCRIPT_OPEN", "STYLE_OPEN", "TAG_OPEN", 
		"HTML_TEXT", "TAG_CLOSE", "TAG_SLASH_CLOSE", "TAG_SLASH", "TAG_EQUALS", 
		"TAG_NAME", "TAG_WHITESPACE", "SCRIPT_BODY", "SCRIPT_SHORT_BODY", "STYLE_BODY", 
		"STYLE_SHORT_BODY", "ATTVALUE_VALUE", "ATTRIBUTE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HTMLLexer._LITERAL_NAMES, HTMLLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HTMLLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(HTMLLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "HTMLLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return HTMLLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return HTMLLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return HTMLLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return HTMLLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x19\u017D\b\x01" +
		"\b\x01\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04" +
		"\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04" +
		"\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04" +
		"\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04" +
		"\x16\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04" +
		"\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04" +
		" \t \x04!\t!\x04\"\t\"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x07\x02P\n\x02\f\x02\x0E\x02S\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03^\n\x03\f\x03\x0E\x03a\v\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04m\n\x04\f\x04\x0E\x04p\v\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05\x7F\n\x05\f\x05\x0E\x05\x82\v\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x8C\n\x06\f\x06\x0E\x06" +
		"\x8F\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x97" +
		"\n\x07\f\x07\x0E\x07\x9A\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\xA2\n\x07\f\x07\x0E\x07\xA5\v\x07\x03\x07\x03\x07\x05" +
		"\x07\xA9\n\x07\x03\b\x03\b\x05\b\xAD\n\b\x03\b\x06\b\xB0\n\b\r\b\x0E\b" +
		"\xB1\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\xBD\n" +
		"\t\f\t\x0E\t\xC0\v\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\xCE\n\n\f\n\x0E\n\xD1\v\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x06\f\xDC\n\f\r\f\x0E\f\xDD\x03\r" +
		"\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x07\x11\xF1\n\x11" +
		"\f\x11\x0E\x11\xF4\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0102\n\x15\x03" +
		"\x16\x05\x16\u0105\n\x16\x03\x17\x07\x17\u0108\n\x17\f\x17\x0E\x17\u010B" +
		"\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x07\x18\u011A\n\x18\f\x18\x0E" +
		"\x18\u011D\v\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x07\x19\u0126\n\x19\f\x19\x0E\x19\u0129\v\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x07\x1A\u0137\n\x1A\f\x1A\x0E\x1A\u013A\v\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x07\x1B\u0143\n\x1B\f\x1B\x0E\x1B\u0146" +
		"\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u0151\n\x1C\x03\x1D\x05\x1D\u0154\n\x1D\x03\x1E\x06\x1E" +
		"\u0157\n\x1E\r\x1E\x0E\x1E\u0158\x03\x1E\x05\x1E\u015C\n\x1E\x03\x1F\x03" +
		"\x1F\x06\x1F\u0160\n\x1F\r\x1F\x0E\x1F\u0161\x03 \x06 \u0165\n \r \x0E" +
		" \u0166\x03 \x05 \u016A\n \x03!\x03!\x07!\u016E\n!\f!\x0E!\u0171\v!\x03" +
		"!\x03!\x03\"\x03\"\x07\"\u0177\n\"\f\"\x0E\"\u017A\v\"\x03\"\x03\"\x0F" +
		"Q_n\x80\x8D\x98\xA3\xBE\xCF\u0109\u011B\u0127\u0138\x02\x02#\x07\x02\x03" +
		"\t\x02\x04\v\x02\x05\r\x02\x06\x0F\x02\x07\x11\x02\b\x13\x02\t\x15\x02" +
		"\n\x17\x02\v\x19\x02\f\x1B\x02\r\x1D\x02\x0E\x1F\x02\x0F!\x02\x10#\x02" +
		"\x11%\x02\x12\'\x02\x13)\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x143" +
		"\x02\x155\x02\x167\x02\x179\x02\x18;\x02\x19=\x02\x02?\x02\x02A\x02\x02" +
		"C\x02\x02E\x02\x02G\x02\x02\x07\x02\x03\x04\x05\x06\x0E\x04\x02\v\v\"" +
		"\"\x03\x02>>\x05\x02\v\f\x0F\x0F\"\"\x05\x022;CHch\x03\x022;\x04\x02/" +
		"0aa\x05\x02\xB9\xB9\u0302\u0371\u2041\u2042\n\x02<<C\\c|\u2072\u2191\u2C02" +
		"\u2FF1\u3003\uD801\uF902\uFDD1\uFDF2\uFFFF\x03\x02\"\"\t\x02%%-=??AAC" +
		"\\aac|\x04\x02$$>>\x04\x02))>>\x02\u0190\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x03!\x03" +
		"\x02\x02\x02\x03#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x03\'\x03\x02\x02" +
		"\x02\x041\x03\x02\x02\x02\x043\x03\x02\x02\x02\x055\x03\x02\x02\x02\x05" +
		"7\x03\x02\x02\x02\x069\x03\x02\x02\x02\x06;\x03\x02\x02\x02\x07I\x03\x02" +
		"\x02\x02\tX\x03\x02\x02\x02\ve\x03\x02\x02\x02\rs\x03\x02\x02\x02\x0F" +
		"\x87\x03\x02\x02\x02\x11\xA8\x03\x02\x02\x02\x13\xAF\x03\x02\x02\x02\x15" +
		"\xB3\x03\x02\x02\x02\x17\xC5\x03\x02\x02\x02\x19\xD6\x03\x02\x02\x02\x1B" +
		"\xDB\x03\x02\x02\x02\x1D\xDF\x03\x02\x02\x02\x1F\xE3\x03\x02\x02\x02!" +
		"\xE8\x03\x02\x02\x02#\xEA\x03\x02\x02\x02%\xEE\x03\x02\x02\x02\'\xF5\x03" +
		"\x02\x02\x02)\xF9\x03\x02\x02\x02+\xFB\x03\x02\x02\x02-\u0101\x03\x02" +
		"\x02\x02/\u0104\x03\x02\x02\x021\u0109\x03\x02\x02\x023\u011B\x03\x02" +
		"\x02\x025\u0127\x03\x02\x02\x027\u0138\x03\x02\x02\x029\u0144\x03\x02" +
		"\x02\x02;\u0150\x03\x02\x02\x02=\u0153\x03\x02\x02\x02?\u0156\x03\x02" +
		"\x02\x02A\u015D\x03\x02\x02\x02C\u0164\x03\x02\x02\x02E\u016B\x03\x02" +
		"\x02\x02G\u0174\x03\x02\x02\x02IJ\x07>\x02\x02JK\x07#\x02\x02KL\x07/\x02" +
		"\x02LM\x07/\x02\x02MQ\x03\x02\x02\x02NP\v\x02\x02\x02ON\x03\x02\x02\x02" +
		"PS\x03\x02\x02\x02QR\x03\x02\x02\x02QO\x03\x02\x02\x02RT\x03\x02\x02\x02" +
		"SQ\x03\x02\x02\x02TU\x07/\x02\x02UV\x07/\x02\x02VW\x07@\x02\x02W\b\x03" +
		"\x02\x02\x02XY\x07>\x02\x02YZ\x07#\x02\x02Z[\x07]\x02\x02[_\x03\x02\x02" +
		"\x02\\^\v\x02\x02\x02]\\\x03\x02\x02\x02^a\x03\x02\x02\x02_`\x03\x02\x02" +
		"\x02_]\x03\x02\x02\x02`b\x03\x02\x02\x02a_\x03\x02\x02\x02bc\x07_\x02" +
		"\x02cd\x07@\x02\x02d\n\x03\x02\x02\x02ef\x07>\x02\x02fg\x07A\x02\x02g" +
		"h\x07z\x02\x02hi\x07o\x02\x02ij\x07n\x02\x02jn\x03\x02\x02\x02km\v\x02" +
		"\x02\x02lk\x03\x02\x02\x02mp\x03\x02\x02\x02no\x03\x02\x02\x02nl\x03\x02" +
		"\x02\x02oq\x03\x02\x02\x02pn\x03\x02\x02\x02qr\x07@\x02\x02r\f\x03\x02" +
		"\x02\x02st\x07>\x02\x02tu\x07#\x02\x02uv\x07]\x02\x02vw\x07E\x02\x02w" +
		"x\x07F\x02\x02xy\x07C\x02\x02yz\x07V\x02\x02z{\x07C\x02\x02{|\x07]\x02" +
		"\x02|\x80\x03\x02\x02\x02}\x7F\v\x02\x02\x02~}\x03\x02\x02\x02\x7F\x82" +
		"\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x83" +
		"\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84\x07_\x02\x02\x84\x85" +
		"\x07_\x02\x02\x85\x86\x07@\x02\x02\x86\x0E\x03\x02\x02\x02\x87\x88\x07" +
		">\x02\x02\x88\x89\x07#\x02\x02\x89\x8D\x03\x02\x02\x02\x8A\x8C\v\x02\x02" +
		"\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8D\x8B\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03\x02\x02" +
		"\x02\x90\x91\x07@\x02\x02\x91\x10\x03\x02\x02\x02\x92\x93\x07>\x02\x02" +
		"\x93\x94\x07A\x02\x02\x94\x98\x03\x02\x02\x02\x95\x97\v\x02\x02\x02\x96" +
		"\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x98" +
		"\x96\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B" +
		"\x9C\x07A\x02\x02\x9C\xA9\x07@\x02\x02\x9D\x9E\x07>\x02\x02\x9E\x9F\x07" +
		"\'\x02\x02\x9F\xA3\x03\x02\x02\x02\xA0\xA2\v\x02\x02\x02\xA1\xA0\x03\x02" +
		"\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA3\xA1\x03\x02" +
		"\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x07\'" +
		"\x02\x02\xA7\xA9\x07@\x02\x02\xA8\x92\x03\x02\x02\x02\xA8\x9D\x03\x02" +
		"\x02\x02\xA9\x12\x03\x02\x02\x02\xAA\xB0\t\x02\x02\x02\xAB\xAD\x07\x0F" +
		"\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02" +
		"\x02\x02\xAE\xB0\x07\f\x02\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAC\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02" +
		"\x02\x02\xB2\x14\x03\x02\x02\x02\xB3\xB4\x07>\x02\x02\xB4\xB5\x07u\x02" +
		"\x02\xB5\xB6\x07e\x02\x02\xB6\xB7\x07t\x02\x02\xB7\xB8\x07k\x02\x02\xB8" +
		"\xB9\x07r\x02\x02\xB9\xBA\x07v\x02\x02\xBA\xBE\x03\x02\x02\x02\xBB\xBD" +
		"\v\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBF" +
		"\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE" +
		"\x03\x02\x02\x02\xC1\xC2\x07@\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4" +
		"\b\t\x02\x02\xC4\x16\x03\x02\x02\x02\xC5\xC6\x07>\x02\x02\xC6\xC7\x07" +
		"u\x02\x02\xC7\xC8\x07v\x02\x02\xC8\xC9\x07{\x02\x02\xC9\xCA\x07n\x02\x02" +
		"\xCA\xCB\x07g\x02\x02\xCB\xCF\x03\x02\x02\x02\xCC\xCE\v\x02\x02\x02\xCD" +
		"\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xCF" +
		"\xCD\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2" +
		"\xD3\x07@\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\b\n\x03\x02\xD5\x18" +
		"\x03\x02\x02\x02\xD6\xD7\x07>\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9" +
		"\b\v\x04\x02\xD9\x1A\x03\x02\x02\x02\xDA\xDC\n\x03\x02\x02\xDB\xDA\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03" +
		"\x02\x02\x02\xDE\x1C\x03\x02\x02\x02\xDF\xE0\x07@\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xE2\b\r\x05\x02\xE2\x1E\x03\x02\x02\x02\xE3\xE4\x071" +
		"\x02\x02\xE4\xE5\x07@\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\b\x0E\x05" +
		"\x02\xE7 \x03\x02\x02\x02\xE8\xE9\x071\x02\x02\xE9\"\x03\x02\x02\x02\xEA" +
		"\xEB\x07?\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\b\x10\x06\x02\xED$\x03" +
		"\x02\x02\x02\xEE\xF2\x05/\x16\x02\xEF\xF1\x05-\x15\x02\xF0\xEF\x03\x02" +
		"\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3&\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF6\t\x04\x02" +
		"\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\b\x12\x07\x02\xF8(\x03\x02\x02\x02" +
		"\xF9\xFA\t\x05\x02\x02\xFA*\x03\x02\x02\x02\xFB\xFC\t\x06\x02\x02\xFC" +
		",\x03\x02\x02\x02\xFD\u0102\x05/\x16\x02\xFE\u0102\t\x07\x02\x02\xFF\u0102" +
		"\x05+\x14\x02\u0100\u0102\t\b\x02\x02\u0101\xFD\x03\x02\x02\x02\u0101" +
		"\xFE\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0100\x03\x02\x02" +
		"\x02\u0102.\x03\x02\x02\x02\u0103\u0105\t\t\x02\x02\u0104\u0103\x03\x02" +
		"\x02\x02\u01050\x03\x02\x02\x02\u0106\u0108\v\x02\x02\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u0109\u0107\x03\x02\x02\x02\u010A\u010C\x03\x02\x02\x02\u010B\u0109\x03" +
		"\x02\x02\x02\u010C\u010D\x07>\x02\x02\u010D\u010E\x071\x02\x02\u010E\u010F" +
		"\x07u\x02\x02\u010F\u0110\x07e\x02\x02\u0110\u0111\x07t\x02\x02\u0111" +
		"\u0112\x07k\x02\x02\u0112\u0113\x07r\x02\x02\u0113\u0114\x07v\x02\x02" +
		"\u0114\u0115\x07@\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\b\x17" +
		"\x05\x02\u01172\x03\x02\x02\x02\u0118\u011A\v\x02\x02\x02\u0119\u0118" +
		"\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02" +
		"\u011B\u0119\x03\x02\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D\u011B\x03" +
		"\x02\x02\x02\u011E\u011F\x07>\x02\x02\u011F\u0120\x071\x02\x02\u0120\u0121" +
		"\x07@\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\b\x18\x05\x02\u0123" +
		"4\x03\x02\x02\x02\u0124\u0126\v\x02\x02\x02\u0125\u0124\x03\x02\x02\x02" +
		"\u0126\u0129\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0127\u0125\x03" +
		"\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A" +
		"\u012B\x07>\x02\x02\u012B\u012C\x071\x02\x02\u012C\u012D\x07u\x02\x02" +
		"\u012D\u012E\x07v\x02\x02\u012E\u012F\x07{\x02\x02\u012F\u0130\x07n\x02" +
		"\x02\u0130\u0131\x07g\x02\x02\u0131\u0132\x07@\x02\x02\u0132\u0133\x03" +
		"\x02\x02\x02\u0133\u0134\b\x19\x05\x02\u01346\x03\x02\x02\x02\u0135\u0137" +
		"\v\x02\x02\x02\u0136\u0135\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02" +
		"\u0138\u0139\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013B\x03" +
		"\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013C\x07>\x02\x02\u013C" +
		"\u013D\x071\x02\x02\u013D\u013E\x07@\x02\x02\u013E\u013F\x03\x02\x02\x02" +
		"\u013F\u0140\b\x1A\x05\x02\u01408\x03\x02\x02\x02\u0141\u0143\t\n\x02" +
		"\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142" +
		"\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02" +
		"\u0146\u0144\x03\x02\x02\x02\u0147\u0148\x05;\x1C\x02\u0148\u0149\x03" +
		"\x02\x02\x02\u0149\u014A\b\x1B\x05\x02\u014A:\x03\x02\x02\x02\u014B\u0151" +
		"\x05E!\x02\u014C\u0151\x05G\"\x02\u014D\u0151\x05?\x1E\x02\u014E\u0151" +
		"\x05A\x1F\x02\u014F\u0151\x05C \x02\u0150\u014B\x03\x02\x02\x02\u0150" +
		"\u014C\x03\x02\x02\x02\u0150\u014D\x03\x02\x02\x02\u0150\u014E\x03\x02" +
		"\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151<\x03\x02\x02\x02\u0152\u0154" +
		"\t\v\x02\x02\u0153\u0152\x03\x02\x02\x02\u0154>\x03\x02\x02\x02\u0155" +
		"\u0157\x05=\x1D\x02\u0156\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02" +
		"\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B" +
		"\x03\x02\x02\x02\u015A\u015C\x07\"\x02\x02\u015B\u015A\x03\x02\x02\x02" +
		"\u015B\u015C\x03\x02\x02\x02\u015C@\x03\x02\x02\x02\u015D\u015F\x07%\x02" +
		"\x02\u015E\u0160\t\x05\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160\u0161" +
		"\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02" +
		"\u0162B\x03\x02\x02\x02\u0163\u0165\t\x06\x02\x02\u0164\u0163\x03\x02" +
		"\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166" +
		"\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u016A\x07\'\x02" +
		"\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016AD\x03" +
		"\x02\x02\x02\u016B\u016F\x07$\x02\x02\u016C\u016E\n\f\x02\x02\u016D\u016C" +
		"\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171\u016F\x03" +
		"\x02\x02\x02\u0172\u0173\x07$\x02\x02\u0173F\x03\x02\x02\x02\u0174\u0178" +
		"\x07)\x02\x02\u0175\u0177\n\r\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177" +
		"\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02" +
		"\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B" +
		"\u017C\x07)\x02\x02\u017CH\x03\x02\x02\x02&\x02\x03\x04\x05\x06Q_n\x80" +
		"\x8D\x98\xA3\xA8\xAC\xAF\xB1\xBE\xCF\xDD\xF2\u0101\u0104\u0109\u011B\u0127" +
		"\u0138\u0144\u0150\u0153\u0158\u015B\u0161\u0166\u0169\u016F\u0178\b\x07" +
		"\x04\x02\x07\x05\x02\x07\x03\x02\x06\x02\x02\x07\x06\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HTMLLexer.__ATN) {
			HTMLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HTMLLexer._serializedATN));
		}

		return HTMLLexer.__ATN;
	}

}

