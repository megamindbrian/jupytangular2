// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mps/mps.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class mpsLexer extends Lexer {
	public static readonly NAMEINDICATORCARD = 1;
	public static readonly ROWINDICATORCARD = 2;
	public static readonly COLUMNINDICATORCARD = 3;
	public static readonly RHSINDICATORCARD = 4;
	public static readonly RANGESINDICATORCARD = 5;
	public static readonly BOUNDSINDICATORCARD = 6;
	public static readonly ENDATAINDICATORCARD = 7;
	public static readonly KEYWORDMARKER = 8;
	public static readonly STARTMARKER = 9;
	public static readonly ENDMARKER = 10;
	public static readonly KEYWORDFREE = 11;
	public static readonly BOUNDKEY = 12;
	public static readonly ROWTYPE = 13;
	public static readonly IDENTIFIER = 14;
	public static readonly NUMERICALVALUE = 15;
	public static readonly WS = 16;
	public static readonly LINE_COMMENT = 17;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"NAMEINDICATORCARD", "ROWINDICATORCARD", "COLUMNINDICATORCARD", "RHSINDICATORCARD", 
		"RANGESINDICATORCARD", "BOUNDSINDICATORCARD", "ENDATAINDICATORCARD", "KEYWORDMARKER", 
		"STARTMARKER", "ENDMARKER", "KEYWORDFREE", "BOUNDKEY", "ROWTYPE", "IDENTIFIER", 
		"NUMERICALVALUE", "WS", "LINE_COMMENT", "CHARACTER", "LETTER", "DIGIT", 
		"DIGITS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'NAME'", "'ROWS'", "'COLUMNS'", "'RHS'", "'RANGES'", "'BOUNDS'", 
		"'ENDATA'", "''ARKER''", "''NTORG''", "''NTEND''", "'FREE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NAMEINDICATORCARD", "ROWINDICATORCARD", "COLUMNINDICATORCARD", 
		"RHSINDICATORCARD", "RANGESINDICATORCARD", "BOUNDSINDICATORCARD", "ENDATAINDICATORCARD", 
		"KEYWORDMARKER", "STARTMARKER", "ENDMARKER", "KEYWORDFREE", "BOUNDKEY", 
		"ROWTYPE", "IDENTIFIER", "NUMERICALVALUE", "WS", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mpsLexer._LITERAL_NAMES, mpsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mpsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(mpsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "mps.g4"; }

	// @Override
	public get ruleNames(): string[] { return mpsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return mpsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return mpsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return mpsLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x13\xBF\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x8D\n\r" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0F\x93\n\x0F\f\x0F\x0E\x0F\x96\v" +
		"\x0F\x03\x10\x03\x10\x07\x10\x9A\n\x10\f\x10\x0E\x10\x9D\v\x10\x03\x11" +
		"\x06\x11\xA0\n\x11\r\x11\x0E\x11\xA1\x03\x11\x03\x11\x03\x12\x03\x12\x07" +
		"\x12\xA8\n\x12\f\x12\x0E\x12\xAB\v\x12\x03\x12\x05\x12\xAE\n\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xB6\n\x13\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\xBE\n\x16\x02\x02\x02\x17" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x02\'\x02\x02)\x02\x02+\x02" +
		"\x02\x03\x02\t\x06\x02GGIINNPP\x05\x02\v\f\x0E\x0F\"\"\x04\x02&&,,\x04" +
		"\x02\f\f\x0F\x0F\b\x02%%*+11B\\aac|\x04\x02-02;\x04\x02FGfg\x02\xCA\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x03-\x03\x02\x02\x02\x052\x03\x02" +
		"\x02\x02\x077\x03\x02\x02\x02\t?\x03\x02\x02\x02\vC\x03\x02\x02\x02\r" +
		"J\x03\x02\x02\x02\x0FQ\x03\x02\x02\x02\x11X\x03\x02\x02\x02\x13a\x03\x02" +
		"\x02\x02\x15j\x03\x02\x02\x02\x17s\x03\x02\x02\x02\x19\x8C\x03\x02\x02" +
		"\x02\x1B\x8E\x03\x02\x02\x02\x1D\x90\x03\x02\x02\x02\x1F\x97\x03\x02\x02" +
		"\x02!\x9F\x03\x02\x02\x02#\xA5\x03\x02\x02\x02%\xB5\x03\x02\x02\x02\'" +
		"\xB7\x03\x02\x02\x02)\xB9\x03\x02\x02\x02+\xBD\x03\x02\x02\x02-.\x07P" +
		"\x02\x02./\x07C\x02\x02/0\x07O\x02\x0201\x07G\x02\x021\x04\x03\x02\x02" +
		"\x0223\x07T\x02\x0234\x07Q\x02\x0245\x07Y\x02\x0256\x07U\x02\x026\x06" +
		"\x03\x02\x02\x0278\x07E\x02\x0289\x07Q\x02\x029:\x07N\x02\x02:;\x07W\x02" +
		"\x02;<\x07O\x02\x02<=\x07P\x02\x02=>\x07U\x02\x02>\b\x03\x02\x02\x02?" +
		"@\x07T\x02\x02@A\x07J\x02\x02AB\x07U\x02\x02B\n\x03\x02\x02\x02CD\x07" +
		"T\x02\x02DE\x07C\x02\x02EF\x07P\x02\x02FG\x07I\x02\x02GH\x07G\x02\x02" +
		"HI\x07U\x02\x02I\f\x03\x02\x02\x02JK\x07D\x02\x02KL\x07Q\x02\x02LM\x07" +
		"W\x02\x02MN\x07P\x02\x02NO\x07F\x02\x02OP\x07U\x02\x02P\x0E\x03\x02\x02" +
		"\x02QR\x07G\x02\x02RS\x07P\x02\x02ST\x07F\x02\x02TU\x07C\x02\x02UV\x07" +
		"V\x02\x02VW\x07C\x02\x02W\x10\x03\x02\x02\x02XY\x07)\x02\x02YZ\x07O\x02" +
		"\x02Z[\x07C\x02\x02[\\\x07T\x02\x02\\]\x07M\x02\x02]^\x07G\x02\x02^_\x07" +
		"T\x02\x02_`\x07)\x02\x02`\x12\x03\x02\x02\x02ab\x07)\x02\x02bc\x07K\x02" +
		"\x02cd\x07P\x02\x02de\x07V\x02\x02ef\x07Q\x02\x02fg\x07T\x02\x02gh\x07" +
		"I\x02\x02hi\x07)\x02\x02i\x14\x03\x02\x02\x02jk\x07)\x02\x02kl\x07K\x02" +
		"\x02lm\x07P\x02\x02mn\x07V\x02\x02no\x07G\x02\x02op\x07P\x02\x02pq\x07" +
		"F\x02\x02qr\x07)\x02\x02r\x16\x03\x02\x02\x02st\x07H\x02\x02tu\x07T\x02" +
		"\x02uv\x07G\x02\x02vw\x07G\x02\x02w\x18\x03\x02\x02\x02xy\x07W\x02\x02" +
		"y\x8D\x07R\x02\x02z{\x07N\x02\x02{\x8D\x07Q\x02\x02|}\x07H\x02\x02}\x8D" +
		"\x07Z\x02\x02~\x7F\x07N\x02\x02\x7F\x8D\x07K\x02\x02\x80\x81\x07W\x02" +
		"\x02\x81\x8D\x07K\x02\x02\x82\x83\x07U\x02\x02\x83\x8D\x07E\x02\x02\x84" +
		"\x85\x07H\x02\x02\x85\x8D\x07T\x02\x02\x86\x87\x07D\x02\x02\x87\x8D\x07" +
		"X\x02\x02\x88\x89\x07O\x02\x02\x89\x8D\x07K\x02\x02\x8A\x8B\x07R\x02\x02" +
		"\x8B\x8D\x07N\x02\x02\x8Cx\x03\x02\x02\x02\x8Cz\x03\x02\x02\x02\x8C|\x03" +
		"\x02\x02\x02\x8C~\x03\x02\x02\x02\x8C\x80\x03\x02\x02\x02\x8C\x82\x03" +
		"\x02\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x86\x03\x02\x02\x02\x8C\x88\x03" +
		"\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x1A\x03\x02\x02\x02\x8E\x8F\t" +
		"\x02\x02\x02\x8F\x1C\x03\x02\x02\x02\x90\x94\x05\'\x14\x02\x91\x93\x05" +
		"%\x13\x02\x92\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x1E\x03\x02\x02\x02\x96\x94\x03" +
		"\x02\x02\x02\x97\x9B\x05)\x15\x02\x98\x9A\x05+\x16\x02\x99\x98\x03\x02" +
		"\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02" +
		"\x02\x02\x9C \x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA0\t\x03\x02" +
		"\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\b\x11\x02" +
		"\x02\xA4\"\x03\x02\x02\x02\xA5\xA9\t\x04\x02\x02\xA6\xA8\n\x05\x02\x02" +
		"\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02" +
		"\xA9\xAA\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02" +
		"\xAC\xAE\x07\x0F\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02" +
		"\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x07\f\x02\x02\xB0\xB1\x03\x02\x02\x02" +
		"\xB1\xB2\b\x12\x02\x02\xB2$\x03\x02\x02\x02\xB3\xB6\x05\'\x14\x02\xB4" +
		"\xB6\x05)\x15\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6" +
		"&\x03\x02\x02\x02\xB7\xB8\t\x06\x02\x02\xB8(\x03\x02\x02\x02\xB9\xBA\t" +
		"\x07\x02\x02\xBA*\x03\x02\x02\x02\xBB\xBE\x05)\x15\x02\xBC\xBE\t\b\x02" +
		"\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE,\x03\x02\x02" +
		"\x02\v\x02\x8C\x94\x9B\xA1\xA9\xAD\xB5\xBD\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mpsLexer.__ATN) {
			mpsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mpsLexer._serializedATN));
		}

		return mpsLexer.__ATN;
	}

}

