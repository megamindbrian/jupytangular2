// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pascal/pascal.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class pascalLexer extends Lexer {
	public static readonly AND = 1;
	public static readonly ARRAY = 2;
	public static readonly BEGIN = 3;
	public static readonly BOOLEAN = 4;
	public static readonly CASE = 5;
	public static readonly CHAR = 6;
	public static readonly CHR = 7;
	public static readonly CONST = 8;
	public static readonly DIV = 9;
	public static readonly DO = 10;
	public static readonly DOWNTO = 11;
	public static readonly ELSE = 12;
	public static readonly END = 13;
	public static readonly FILE = 14;
	public static readonly FOR = 15;
	public static readonly FUNCTION = 16;
	public static readonly GOTO = 17;
	public static readonly IF = 18;
	public static readonly IN = 19;
	public static readonly INTEGER = 20;
	public static readonly LABEL = 21;
	public static readonly MOD = 22;
	public static readonly NIL = 23;
	public static readonly NOT = 24;
	public static readonly OF = 25;
	public static readonly OR = 26;
	public static readonly PACKED = 27;
	public static readonly PROCEDURE = 28;
	public static readonly PROGRAM = 29;
	public static readonly REAL = 30;
	public static readonly RECORD = 31;
	public static readonly REPEAT = 32;
	public static readonly SET = 33;
	public static readonly THEN = 34;
	public static readonly TO = 35;
	public static readonly TYPE = 36;
	public static readonly UNTIL = 37;
	public static readonly VAR = 38;
	public static readonly WHILE = 39;
	public static readonly WITH = 40;
	public static readonly PLUS = 41;
	public static readonly MINUS = 42;
	public static readonly STAR = 43;
	public static readonly SLASH = 44;
	public static readonly ASSIGN = 45;
	public static readonly COMMA = 46;
	public static readonly SEMI = 47;
	public static readonly COLON = 48;
	public static readonly EQUAL = 49;
	public static readonly NOT_EQUAL = 50;
	public static readonly LT = 51;
	public static readonly LE = 52;
	public static readonly GE = 53;
	public static readonly GT = 54;
	public static readonly LPAREN = 55;
	public static readonly RPAREN = 56;
	public static readonly LBRACK = 57;
	public static readonly LBRACK2 = 58;
	public static readonly RBRACK = 59;
	public static readonly RBRACK2 = 60;
	public static readonly POINTER = 61;
	public static readonly AT = 62;
	public static readonly DOT = 63;
	public static readonly DOTDOT = 64;
	public static readonly LCURLY = 65;
	public static readonly RCURLY = 66;
	public static readonly UNIT = 67;
	public static readonly INTERFACE = 68;
	public static readonly USES = 69;
	public static readonly STRING = 70;
	public static readonly IMPLEMENTATION = 71;
	public static readonly TRUE = 72;
	public static readonly FALSE = 73;
	public static readonly WS = 74;
	public static readonly COMMENT_1 = 75;
	public static readonly COMMENT_2 = 76;
	public static readonly IDENT = 77;
	public static readonly STRING_LITERAL = 78;
	public static readonly NUM_INT = 79;
	public static readonly NUM_REAL = 80;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AND", "ARRAY", 
		"BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR", "CONST", "DIV", "DO", "DOWNTO", 
		"ELSE", "END", "FILE", "FOR", "FUNCTION", "GOTO", "IF", "IN", "INTEGER", 
		"LABEL", "MOD", "NIL", "NOT", "OF", "OR", "PACKED", "PROCEDURE", "PROGRAM", 
		"REAL", "RECORD", "REPEAT", "SET", "THEN", "TO", "TYPE", "UNTIL", "VAR", 
		"WHILE", "WITH", "PLUS", "MINUS", "STAR", "SLASH", "ASSIGN", "COMMA", 
		"SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", "GE", "GT", "LPAREN", 
		"RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", "POINTER", "AT", "DOT", 
		"DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE", "USES", "STRING", "IMPLEMENTATION", 
		"TRUE", "FALSE", "WS", "COMMENT_1", "COMMENT_2", "IDENT", "STRING_LITERAL", 
		"NUM_INT", "NUM_REAL", "EXPONENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'+'", 
		"'-'", "'*'", "'/'", "':='", "','", "';'", "':'", "'='", "'<>'", "'<'", 
		"'<='", "'>='", "'>'", "'('", "')'", "'['", "'(.'", "']'", "'.)'", "'^'", 
		"'@'", "'.'", "'..'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR", 
		"CONST", "DIV", "DO", "DOWNTO", "ELSE", "END", "FILE", "FOR", "FUNCTION", 
		"GOTO", "IF", "IN", "INTEGER", "LABEL", "MOD", "NIL", "NOT", "OF", "OR", 
		"PACKED", "PROCEDURE", "PROGRAM", "REAL", "RECORD", "REPEAT", "SET", "THEN", 
		"TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", "PLUS", "MINUS", "STAR", 
		"SLASH", "ASSIGN", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", 
		"LE", "GE", "GT", "LPAREN", "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
		"POINTER", "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE", 
		"USES", "STRING", "IMPLEMENTATION", "TRUE", "FALSE", "WS", "COMMENT_1", 
		"COMMENT_2", "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pascalLexer._LITERAL_NAMES, pascalLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pascalLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(pascalLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "pascal.g4"; }

	// @Override
	public get ruleNames(): string[] { return pascalLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return pascalLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return pascalLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return pascalLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02R\u029F\b\x01" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03)\x03)\x03" +
		")\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x031\x03" +
		"1\x031\x031\x032\x032\x032\x032\x033\x033\x033\x033\x034\x034\x034\x03" +
		"5\x035\x035\x036\x036\x036\x036\x036\x036\x036\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"9\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03" +
		">\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03" +
		"C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03I\x03I\x03" +
		"J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03M\x03N\x03N\x03O\x03O\x03O\x03" +
		"P\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03T\x03T\x03U\x03U\x03U\x03" +
		"V\x03V\x03W\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03[\x03" +
		"\\\x03\\\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x07f\u0258\nf\ff\x0Ef\u025B" +
		"\vf\x03f\x03f\x03f\x03f\x03f\x03g\x03g\x07g\u0264\ng\fg\x0Eg\u0267\vg" +
		"\x03g\x03g\x03g\x03g\x03h\x03h\x07h\u026F\nh\fh\x0Eh\u0272\vh\x03i\x03" +
		"i\x03i\x03i\x07i\u0278\ni\fi\x0Ei\u027B\vi\x03i\x03i\x03j\x06j\u0280\n" +
		"j\rj\x0Ej\u0281\x03k\x06k\u0285\nk\rk\x0Ek\u0286\x03k\x03k\x06k\u028B" +
		"\nk\rk\x0Ek\u028C\x03k\x05k\u0290\nk\x05k\u0292\nk\x03k\x05k\u0295\nk" +
		"\x03l\x03l\x05l\u0299\nl\x03l\x06l\u029C\nl\rl\x0El\u029D\x04\u0259\u0265" +
		"\x02\x02m\x03\x02\x02\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02" +
		"\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02" +
		"\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'" +
		"\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x023\x02\x025\x02\x02" +
		"7\x02\x039\x02\x04;\x02\x05=\x02\x06?\x02\x07A\x02\bC\x02\tE\x02\nG\x02" +
		"\vI\x02\fK\x02\rM\x02\x0EO\x02\x0FQ\x02\x10S\x02\x11U\x02\x12W\x02\x13" +
		"Y\x02\x14[\x02\x15]\x02\x16_\x02\x17a\x02\x18c\x02\x19e\x02\x1Ag\x02\x1B" +
		"i\x02\x1Ck\x02\x1Dm\x02\x1Eo\x02\x1Fq\x02 s\x02!u\x02\"w\x02#y\x02${\x02" +
		"%}\x02&\x7F\x02\'\x81\x02(\x83\x02)\x85\x02*\x87\x02+\x89\x02,\x8B\x02" +
		"-\x8D\x02.\x8F\x02/\x91\x020\x93\x021\x95\x022\x97\x023\x99\x024\x9B\x02" +
		"5\x9D\x026\x9F\x027\xA1\x028\xA3\x029\xA5\x02:\xA7\x02;\xA9\x02<\xAB\x02" +
		"=\xAD\x02>\xAF\x02?\xB1\x02@\xB3\x02A\xB5\x02B\xB7\x02C\xB9\x02D\xBB\x02" +
		"E\xBD\x02F\xBF\x02G\xC1\x02H\xC3\x02I\xC5\x02J\xC7\x02K\xC9\x02L\xCB\x02" +
		"M\xCD\x02N\xCF\x02O\xD1\x02P\xD3\x02Q\xD5\x02R\xD7\x02\x02\x03\x02!\x04" +
		"\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04" +
		"\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04" +
		"\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04" +
		"\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04" +
		"\x02[[{{\x04\x02\\\\||\x05\x02\v\f\x0F\x0F\"\"\x04\x02C\\c|\x06\x022;" +
		"C\\aac|\x03\x02))\x04\x02--//\x02\u0290\x027\x03\x02\x02\x02\x029\x03" +
		"\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02" +
		"\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02" +
		"G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02" +
		"\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02" +
		"\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03" +
		"\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02" +
		"\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02" +
		"i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02" +
		"\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02" +
		"\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03" +
		"\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03" +
		"\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03" +
		"\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03" +
		"\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03" +
		"\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02\x9B\x03" +
		"\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03" +
		"\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03" +
		"\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB\x03\x02\x02\x02\x02\xAD\x03" +
		"\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xB1\x03\x02\x02\x02\x02\xB3\x03" +
		"\x02\x02\x02\x02\xB5\x03\x02\x02\x02\x02\xB7\x03\x02\x02\x02\x02\xB9\x03" +
		"\x02\x02\x02\x02\xBB\x03\x02\x02\x02\x02\xBD\x03\x02\x02\x02\x02\xBF\x03" +
		"\x02\x02\x02\x02\xC1\x03\x02\x02\x02\x02\xC3\x03\x02\x02\x02\x02\xC5\x03" +
		"\x02\x02\x02\x02\xC7\x03\x02\x02\x02\x02\xC9\x03\x02\x02\x02\x02\xCB\x03" +
		"\x02\x02\x02\x02\xCD\x03\x02\x02\x02\x02\xCF\x03\x02\x02\x02\x02\xD1\x03" +
		"\x02\x02\x02\x02\xD3\x03\x02\x02\x02\x02\xD5\x03\x02\x02\x02\x03\xD9\x03" +
		"\x02\x02\x02\x05\xDB\x03\x02\x02\x02\x07\xDD\x03\x02\x02\x02\t\xDF\x03" +
		"\x02\x02\x02\v\xE1\x03\x02\x02\x02\r\xE3\x03\x02\x02\x02\x0F\xE5\x03\x02" +
		"\x02\x02\x11\xE7\x03\x02\x02\x02\x13\xE9\x03\x02\x02\x02\x15\xEB\x03\x02" +
		"\x02\x02\x17\xED\x03\x02\x02\x02\x19\xEF\x03\x02\x02\x02\x1B\xF1\x03\x02" +
		"\x02\x02\x1D\xF3\x03\x02\x02\x02\x1F\xF5\x03\x02\x02\x02!\xF7\x03\x02" +
		"\x02\x02#\xF9\x03\x02\x02\x02%\xFB\x03\x02\x02\x02\'\xFD\x03\x02\x02\x02" +
		")\xFF\x03\x02\x02\x02+\u0101\x03\x02\x02\x02-\u0103\x03\x02\x02\x02/\u0105" +
		"\x03\x02\x02\x021\u0107\x03\x02\x02\x023\u0109\x03\x02\x02\x025\u010B" +
		"\x03\x02\x02\x027\u010D\x03\x02\x02\x029\u0111\x03\x02\x02\x02;\u0117" +
		"\x03\x02\x02\x02=\u011D\x03\x02\x02\x02?\u0125\x03\x02\x02\x02A\u012A" +
		"\x03\x02\x02\x02C\u012F\x03\x02\x02\x02E\u0133\x03\x02\x02\x02G\u0139" +
		"\x03\x02\x02\x02I\u013D\x03\x02\x02\x02K\u0140\x03\x02\x02\x02M\u0147" +
		"\x03\x02\x02\x02O\u014C\x03\x02\x02\x02Q\u0150\x03\x02\x02\x02S\u0155" +
		"\x03\x02\x02\x02U\u0159\x03\x02\x02\x02W\u0162\x03\x02\x02\x02Y\u0167" +
		"\x03\x02\x02\x02[\u016A\x03\x02\x02\x02]\u016D\x03\x02\x02\x02_\u0175" +
		"\x03\x02\x02\x02a\u017B\x03\x02\x02\x02c\u017F\x03\x02\x02\x02e\u0183" +
		"\x03\x02\x02\x02g\u0187\x03\x02\x02\x02i\u018A\x03\x02\x02\x02k\u018D" +
		"\x03\x02\x02\x02m\u0194\x03\x02\x02\x02o\u019E\x03\x02\x02\x02q\u01A6" +
		"\x03\x02\x02\x02s\u01AB\x03\x02\x02\x02u\u01B2\x03\x02\x02\x02w\u01B9" +
		"\x03\x02\x02\x02y\u01BD\x03\x02\x02\x02{\u01C2\x03\x02\x02\x02}\u01C5" +
		"\x03\x02\x02\x02\x7F\u01CA\x03\x02\x02\x02\x81\u01D0\x03\x02\x02\x02\x83" +
		"\u01D4\x03\x02\x02\x02\x85\u01DA\x03\x02\x02\x02\x87\u01DF\x03\x02\x02" +
		"\x02\x89\u01E1\x03\x02\x02\x02\x8B\u01E3\x03\x02\x02\x02\x8D\u01E5\x03" +
		"\x02\x02\x02\x8F\u01E7\x03\x02\x02\x02\x91\u01EA\x03\x02\x02\x02\x93\u01EC" +
		"\x03\x02\x02\x02\x95\u01EE\x03\x02\x02\x02\x97\u01F0\x03\x02\x02\x02\x99" +
		"\u01F2\x03\x02\x02\x02\x9B\u01F5\x03\x02\x02\x02\x9D\u01F7\x03\x02\x02" +
		"\x02\x9F\u01FA\x03\x02\x02\x02\xA1\u01FD\x03\x02\x02\x02\xA3\u01FF\x03" +
		"\x02\x02\x02\xA5\u0201\x03\x02\x02\x02\xA7\u0203\x03\x02\x02\x02\xA9\u0205" +
		"\x03\x02\x02\x02\xAB\u0208\x03\x02\x02\x02\xAD\u020A\x03\x02\x02\x02\xAF" +
		"\u020D\x03\x02\x02\x02\xB1\u020F\x03\x02\x02\x02\xB3\u0211\x03\x02\x02" +
		"\x02\xB5\u0213\x03\x02\x02\x02\xB7\u0216\x03\x02\x02\x02\xB9\u0218\x03" +
		"\x02\x02\x02\xBB\u021A\x03\x02\x02\x02\xBD\u021F\x03\x02\x02\x02\xBF\u0229" +
		"\x03\x02\x02\x02\xC1\u022E\x03\x02\x02\x02\xC3\u0235\x03\x02\x02\x02\xC5" +
		"\u0244\x03\x02\x02\x02\xC7\u0249\x03\x02\x02\x02\xC9\u024F\x03\x02\x02" +
		"\x02\xCB\u0253\x03\x02\x02\x02\xCD\u0261\x03\x02\x02\x02\xCF\u026C\x03" +
		"\x02\x02\x02\xD1\u0273\x03\x02\x02\x02\xD3\u027F\x03\x02\x02\x02\xD5\u0284" +
		"\x03\x02\x02\x02\xD7\u0296\x03\x02\x02\x02\xD9\xDA\t\x02\x02\x02\xDA\x04" +
		"\x03\x02\x02\x02\xDB\xDC\t\x03\x02\x02\xDC\x06\x03\x02\x02\x02\xDD\xDE" +
		"\t\x04\x02\x02\xDE\b\x03\x02\x02\x02\xDF\xE0\t\x05\x02\x02\xE0\n\x03\x02" +
		"\x02\x02\xE1\xE2\t\x06\x02\x02\xE2\f\x03\x02\x02\x02\xE3\xE4\t\x07\x02" +
		"\x02\xE4\x0E\x03\x02\x02\x02\xE5\xE6\t\b\x02\x02\xE6\x10\x03\x02\x02\x02" +
		"\xE7\xE8\t\t\x02\x02\xE8\x12\x03\x02\x02\x02\xE9\xEA\t\n\x02\x02\xEA\x14" +
		"\x03\x02\x02\x02\xEB\xEC\t\v\x02\x02\xEC\x16\x03\x02\x02\x02\xED\xEE\t" +
		"\f\x02\x02\xEE\x18\x03\x02\x02\x02\xEF\xF0\t\r\x02\x02\xF0\x1A\x03\x02" +
		"\x02\x02\xF1\xF2\t\x0E\x02\x02\xF2\x1C\x03\x02\x02\x02\xF3\xF4\t\x0F\x02" +
		"\x02\xF4\x1E\x03\x02\x02\x02\xF5\xF6\t\x10\x02\x02\xF6 \x03\x02\x02\x02" +
		"\xF7\xF8\t\x11\x02\x02\xF8\"\x03\x02\x02\x02\xF9\xFA\t\x12\x02\x02\xFA" +
		"$\x03\x02\x02\x02\xFB\xFC\t\x13\x02\x02\xFC&\x03\x02\x02\x02\xFD\xFE\t" +
		"\x14\x02\x02\xFE(\x03\x02\x02\x02\xFF\u0100\t\x15\x02\x02\u0100*\x03\x02" +
		"\x02\x02\u0101\u0102\t\x16\x02\x02\u0102,\x03\x02\x02\x02\u0103\u0104" +
		"\t\x17\x02\x02\u0104.\x03\x02\x02\x02\u0105\u0106\t\x18\x02\x02\u0106" +
		"0\x03\x02\x02\x02\u0107\u0108\t\x19\x02\x02\u01082\x03\x02\x02\x02\u0109" +
		"\u010A\t\x1A\x02\x02\u010A4\x03\x02\x02\x02\u010B\u010C\t\x1B\x02\x02" +
		"\u010C6\x03\x02\x02\x02\u010D\u010E\x05\x03\x02\x02\u010E\u010F\x05\x1D" +
		"\x0F\x02\u010F\u0110\x05\t\x05\x02\u01108\x03\x02\x02\x02\u0111\u0112" +
		"\x05\x03\x02\x02\u0112\u0113\x05%\x13\x02\u0113\u0114\x05%\x13\x02\u0114" +
		"\u0115\x05\x03\x02\x02\u0115\u0116\x053\x1A\x02\u0116:\x03\x02\x02\x02" +
		"\u0117\u0118\x05\x05\x03\x02\u0118\u0119\x05\v\x06\x02\u0119\u011A\x05" +
		"\x0F\b\x02\u011A\u011B\x05\x13\n\x02\u011B\u011C\x05\x1D\x0F\x02\u011C" +
		"<\x03\x02\x02\x02\u011D\u011E\x05\x05\x03\x02\u011E\u011F\x05\x1F\x10" +
		"\x02\u011F\u0120\x05\x1F\x10\x02\u0120\u0121\x05\x19\r\x02\u0121\u0122" +
		"\x05\v\x06\x02\u0122\u0123\x05\x03\x02\x02\u0123\u0124\x05\x1D\x0F\x02" +
		"\u0124>\x03\x02\x02\x02\u0125\u0126\x05\x07\x04\x02\u0126\u0127\x05\x03" +
		"\x02\x02\u0127\u0128\x05\'\x14\x02\u0128\u0129\x05\v\x06\x02\u0129@\x03" +
		"\x02\x02\x02\u012A\u012B\x05\x07\x04\x02\u012B\u012C\x05\x11\t\x02\u012C" +
		"\u012D\x05\x03\x02\x02\u012D\u012E\x05%\x13\x02\u012EB\x03\x02\x02\x02" +
		"\u012F\u0130\x05\x07\x04\x02\u0130\u0131\x05\x11\t\x02\u0131\u0132\x05" +
		"%\x13\x02\u0132D\x03\x02\x02\x02\u0133\u0134\x05\x07\x04\x02\u0134\u0135" +
		"\x05\x1F\x10\x02\u0135\u0136\x05\x1D\x0F\x02\u0136\u0137\x05\'\x14\x02" +
		"\u0137\u0138\x05)\x15\x02\u0138F\x03\x02\x02\x02\u0139\u013A\x05\t\x05" +
		"\x02\u013A\u013B\x05\x13\n\x02\u013B\u013C\x05-\x17\x02\u013CH\x03\x02" +
		"\x02\x02\u013D\u013E\x05\t\x05\x02\u013E\u013F\x05\x1F\x10\x02\u013FJ" +
		"\x03\x02\x02\x02\u0140\u0141\x05\t\x05\x02\u0141\u0142\x05\x1F\x10\x02" +
		"\u0142\u0143\x05/\x18\x02\u0143\u0144\x05\x1D\x0F\x02\u0144\u0145\x05" +
		")\x15\x02\u0145\u0146\x05\x1F\x10\x02\u0146L\x03\x02\x02\x02\u0147\u0148" +
		"\x05\v\x06\x02\u0148\u0149\x05\x19\r\x02\u0149\u014A\x05\'\x14\x02\u014A" +
		"\u014B\x05\v\x06\x02\u014BN\x03\x02\x02\x02\u014C\u014D\x05\v\x06\x02" +
		"\u014D\u014E\x05\x1D\x0F\x02\u014E\u014F\x05\t\x05\x02\u014FP\x03\x02" +
		"\x02\x02\u0150\u0151\x05\r\x07\x02\u0151\u0152\x05\x13\n\x02\u0152\u0153" +
		"\x05\x19\r\x02\u0153\u0154\x05\v\x06\x02\u0154R\x03\x02\x02\x02\u0155" +
		"\u0156\x05\r\x07\x02\u0156\u0157\x05\x1F\x10\x02\u0157\u0158\x05%\x13" +
		"\x02\u0158T\x03\x02\x02\x02\u0159\u015A\x05\r\x07\x02\u015A\u015B\x05" +
		"+\x16\x02\u015B\u015C\x05\x1D\x0F\x02\u015C\u015D\x05\x07\x04\x02\u015D" +
		"\u015E\x05)\x15\x02\u015E\u015F\x05\x13\n\x02\u015F\u0160\x05\x1F\x10" +
		"\x02\u0160\u0161\x05\x1D\x0F\x02\u0161V\x03\x02\x02\x02\u0162\u0163\x05" +
		"\x0F\b\x02\u0163\u0164\x05\x1F\x10\x02\u0164\u0165\x05)\x15\x02\u0165" +
		"\u0166\x05\x1F\x10\x02\u0166X\x03\x02\x02\x02\u0167\u0168\x05\x13\n\x02" +
		"\u0168\u0169\x05\r\x07\x02\u0169Z\x03\x02\x02\x02\u016A\u016B\x05\x13" +
		"\n\x02\u016B\u016C\x05\x1D\x0F\x02\u016C\\\x03\x02\x02\x02\u016D\u016E" +
		"\x05\x13\n\x02\u016E\u016F\x05\x1D\x0F\x02\u016F\u0170\x05)\x15\x02\u0170" +
		"\u0171\x05\v\x06\x02\u0171\u0172\x05\x0F\b\x02\u0172\u0173\x05\v\x06\x02" +
		"\u0173\u0174\x05%\x13\x02\u0174^\x03\x02\x02\x02\u0175\u0176\x05\x19\r" +
		"\x02\u0176\u0177\x05\x03\x02\x02\u0177\u0178\x05\x05\x03\x02\u0178\u0179" +
		"\x05\v\x06\x02\u0179\u017A\x05\x19\r\x02\u017A`\x03\x02\x02\x02\u017B" +
		"\u017C\x05\x1B\x0E\x02\u017C\u017D\x05\x1F\x10\x02\u017D\u017E\x05\t\x05" +
		"\x02\u017Eb\x03\x02\x02\x02\u017F\u0180\x05\x1D\x0F\x02\u0180\u0181\x05" +
		"\x13\n\x02\u0181\u0182\x05\x19\r\x02\u0182d\x03\x02\x02\x02\u0183\u0184" +
		"\x05\x1D\x0F\x02\u0184\u0185\x05\x1F\x10\x02\u0185\u0186\x05)\x15\x02" +
		"\u0186f\x03\x02\x02\x02\u0187\u0188\x05\x1F\x10\x02\u0188\u0189\x05\r" +
		"\x07\x02\u0189h\x03\x02\x02\x02\u018A\u018B\x05\x1F\x10\x02\u018B\u018C" +
		"\x05%\x13\x02\u018Cj\x03\x02\x02\x02\u018D\u018E\x05!\x11\x02\u018E\u018F" +
		"\x05\x03\x02\x02\u018F\u0190\x05\x07\x04\x02\u0190\u0191\x05\x17\f\x02" +
		"\u0191\u0192\x05\v\x06\x02\u0192\u0193\x05\t\x05\x02\u0193l\x03\x02\x02" +
		"\x02\u0194\u0195\x05!\x11\x02\u0195\u0196\x05%\x13\x02\u0196\u0197\x05" +
		"\x1F\x10\x02\u0197\u0198\x05\x07\x04\x02\u0198\u0199\x05\v\x06\x02\u0199" +
		"\u019A\x05\t\x05\x02\u019A\u019B\x05+\x16\x02\u019B\u019C\x05%\x13\x02" +
		"\u019C\u019D\x05\v\x06\x02\u019Dn\x03\x02\x02\x02\u019E\u019F\x05!\x11" +
		"\x02\u019F\u01A0\x05%\x13\x02\u01A0\u01A1\x05\x1F\x10\x02\u01A1\u01A2" +
		"\x05\x0F\b\x02\u01A2\u01A3\x05%\x13\x02\u01A3\u01A4\x05\x03\x02\x02\u01A4" +
		"\u01A5\x05\x1B\x0E\x02\u01A5p\x03\x02\x02\x02\u01A6\u01A7\x05%\x13\x02" +
		"\u01A7\u01A8\x05\v\x06\x02\u01A8\u01A9\x05\x03\x02\x02\u01A9\u01AA\x05" +
		"\x19\r\x02\u01AAr\x03\x02\x02\x02\u01AB\u01AC\x05%\x13\x02\u01AC\u01AD" +
		"\x05\v\x06\x02\u01AD\u01AE\x05\x07\x04\x02\u01AE\u01AF\x05\x1F\x10\x02" +
		"\u01AF\u01B0\x05%\x13\x02\u01B0\u01B1\x05\t\x05\x02\u01B1t\x03\x02\x02" +
		"\x02\u01B2\u01B3\x05%\x13\x02\u01B3\u01B4\x05\v\x06\x02\u01B4\u01B5\x05" +
		"!\x11\x02\u01B5\u01B6\x05\v\x06\x02\u01B6\u01B7\x05\x03\x02\x02\u01B7" +
		"\u01B8\x05)\x15\x02\u01B8v\x03\x02\x02\x02\u01B9\u01BA\x05\'\x14\x02\u01BA" +
		"\u01BB\x05\v\x06\x02\u01BB\u01BC\x05)\x15\x02\u01BCx\x03\x02\x02\x02\u01BD" +
		"\u01BE\x05)\x15\x02\u01BE\u01BF\x05\x11\t\x02\u01BF\u01C0\x05\v\x06\x02" +
		"\u01C0\u01C1\x05\x1D\x0F\x02\u01C1z\x03\x02\x02\x02\u01C2\u01C3\x05)\x15" +
		"\x02\u01C3\u01C4\x05\x1F\x10\x02\u01C4|\x03\x02\x02\x02\u01C5\u01C6\x05" +
		")\x15\x02\u01C6\u01C7\x053\x1A\x02\u01C7\u01C8\x05!\x11\x02\u01C8\u01C9" +
		"\x05\v\x06\x02\u01C9~\x03\x02\x02\x02\u01CA\u01CB\x05+\x16\x02\u01CB\u01CC" +
		"\x05\x1D\x0F\x02\u01CC\u01CD\x05)\x15\x02\u01CD\u01CE\x05\x13\n\x02\u01CE" +
		"\u01CF\x05\x19\r\x02\u01CF\x80\x03\x02\x02\x02\u01D0\u01D1\x05-\x17\x02" +
		"\u01D1\u01D2\x05\x03\x02\x02\u01D2\u01D3\x05%\x13\x02\u01D3\x82\x03\x02" +
		"\x02\x02\u01D4\u01D5\x05/\x18\x02\u01D5\u01D6\x05\x11\t\x02\u01D6\u01D7" +
		"\x05\x13\n\x02\u01D7\u01D8\x05\x19\r\x02\u01D8\u01D9\x05\v\x06\x02\u01D9" +
		"\x84\x03\x02\x02\x02\u01DA\u01DB\x05/\x18\x02\u01DB\u01DC\x05\x13\n\x02" +
		"\u01DC\u01DD\x05)\x15\x02\u01DD\u01DE\x05\x11\t\x02\u01DE\x86\x03\x02" +
		"\x02\x02\u01DF\u01E0\x07-\x02\x02\u01E0\x88\x03\x02\x02\x02\u01E1\u01E2" +
		"\x07/\x02\x02\u01E2\x8A\x03\x02\x02\x02\u01E3\u01E4\x07,\x02\x02\u01E4" +
		"\x8C\x03\x02\x02\x02\u01E5\u01E6\x071\x02\x02\u01E6\x8E\x03\x02\x02\x02" +
		"\u01E7\u01E8\x07<\x02\x02\u01E8\u01E9\x07?\x02\x02\u01E9\x90\x03\x02\x02" +
		"\x02\u01EA\u01EB\x07.\x02\x02\u01EB\x92\x03\x02\x02\x02\u01EC\u01ED\x07" +
		"=\x02\x02\u01ED\x94\x03\x02\x02\x02\u01EE\u01EF\x07<\x02\x02\u01EF\x96" +
		"\x03\x02\x02\x02\u01F0\u01F1\x07?\x02\x02\u01F1\x98\x03\x02\x02\x02\u01F2" +
		"\u01F3\x07>\x02\x02\u01F3\u01F4\x07@\x02\x02\u01F4\x9A\x03\x02\x02\x02" +
		"\u01F5\u01F6\x07>\x02\x02\u01F6\x9C\x03\x02\x02\x02\u01F7\u01F8\x07>\x02" +
		"\x02\u01F8\u01F9\x07?\x02\x02\u01F9\x9E\x03\x02\x02\x02\u01FA\u01FB\x07" +
		"@\x02\x02\u01FB\u01FC\x07?\x02\x02\u01FC\xA0\x03\x02\x02\x02\u01FD\u01FE" +
		"\x07@\x02\x02\u01FE\xA2\x03\x02\x02\x02\u01FF\u0200\x07*\x02\x02\u0200" +
		"\xA4\x03\x02\x02\x02\u0201\u0202\x07+\x02\x02\u0202\xA6\x03\x02\x02\x02" +
		"\u0203\u0204\x07]\x02\x02\u0204\xA8\x03\x02\x02\x02\u0205\u0206\x07*\x02" +
		"\x02\u0206\u0207\x070\x02\x02\u0207\xAA\x03\x02\x02\x02\u0208\u0209\x07" +
		"_\x02\x02\u0209\xAC\x03\x02\x02\x02\u020A\u020B\x070\x02\x02\u020B\u020C" +
		"\x07+\x02\x02\u020C\xAE\x03\x02\x02\x02\u020D\u020E\x07`\x02\x02\u020E" +
		"\xB0\x03\x02\x02\x02\u020F\u0210\x07B\x02\x02\u0210\xB2\x03\x02\x02\x02" +
		"\u0211\u0212\x070\x02\x02\u0212\xB4\x03\x02\x02\x02\u0213\u0214\x070\x02" +
		"\x02\u0214\u0215\x070\x02\x02\u0215\xB6\x03\x02\x02\x02\u0216\u0217\x07" +
		"}\x02\x02\u0217\xB8\x03\x02\x02\x02\u0218\u0219\x07\x7F\x02\x02\u0219" +
		"\xBA\x03\x02\x02\x02\u021A\u021B\x05+\x16\x02\u021B\u021C\x05\x1D\x0F" +
		"\x02\u021C\u021D\x05\x13\n\x02\u021D\u021E\x05)\x15\x02\u021E\xBC\x03" +
		"\x02\x02\x02\u021F\u0220\x05\x13\n\x02\u0220\u0221\x05\x1D\x0F\x02\u0221" +
		"\u0222\x05)\x15\x02\u0222\u0223\x05\v\x06\x02\u0223\u0224\x05%\x13\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0224\u0225\x05\r\x07\x02\u0225\u0226\x05\x03\x02\x02\u0226\u0227\x05" +
		"\x07\x04\x02\u0227\u0228\x05\v\x06\x02\u0228\xBE\x03\x02\x02\x02\u0229" +
		"\u022A\x05+\x16\x02\u022A\u022B\x05\'\x14\x02\u022B\u022C\x05\v\x06\x02" +
		"\u022C\u022D\x05\'\x14\x02\u022D\xC0\x03\x02\x02\x02\u022E\u022F\x05\'" +
		"\x14\x02\u022F\u0230\x05)\x15\x02\u0230\u0231\x05%\x13\x02\u0231\u0232" +
		"\x05\x13\n\x02\u0232\u0233\x05\x1D\x0F\x02\u0233\u0234\x05\x0F\b\x02\u0234" +
		"\xC2\x03\x02\x02\x02\u0235\u0236\x05\x13\n\x02\u0236\u0237\x05\x1B\x0E" +
		"\x02\u0237\u0238\x05!\x11\x02\u0238\u0239\x05\x19\r\x02\u0239\u023A\x05" +
		"\v\x06\x02\u023A\u023B\x05\x1B\x0E\x02\u023B\u023C\x05\v\x06\x02\u023C" +
		"\u023D\x05\x1D\x0F\x02\u023D\u023E\x05)\x15\x02\u023E\u023F\x05\x03\x02" +
		"\x02\u023F\u0240\x05)\x15\x02\u0240\u0241\x05\x13\n\x02\u0241\u0242\x05" +
		"\x1F\x10\x02\u0242\u0243\x05\x1D\x0F\x02\u0243\xC4\x03\x02\x02\x02\u0244" +
		"\u0245\x05)\x15\x02\u0245\u0246\x05%\x13\x02\u0246\u0247\x05+\x16\x02" +
		"\u0247\u0248\x05\v\x06\x02\u0248\xC6\x03\x02\x02\x02\u0249\u024A\x05\r" +
		"\x07\x02\u024A\u024B\x05\x03\x02\x02\u024B\u024C\x05\x19\r\x02\u024C\u024D" +
		"\x05\'\x14\x02\u024D\u024E\x05\v\x06\x02\u024E\xC8\x03\x02\x02\x02\u024F" +
		"\u0250\t\x1C\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\be\x02\x02" +
		"\u0252\xCA\x03\x02\x02\x02\u0253\u0254\x07*\x02\x02\u0254\u0255\x07,\x02" +
		"\x02\u0255\u0259\x03\x02\x02\x02\u0256\u0258\v\x02\x02\x02\u0257\u0256" +
		"\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02" +
		"\u0259\u0257\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0259\x03" +
		"\x02\x02\x02\u025C\u025D\x07,\x02\x02\u025D\u025E\x07+\x02\x02\u025E\u025F" +
		"\x03\x02\x02\x02\u025F\u0260\bf\x02\x02\u0260\xCC\x03\x02\x02\x02\u0261" +
		"\u0265\x07}\x02\x02\u0262\u0264\v\x02\x02\x02\u0263\u0262\x03\x02\x02" +
		"\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0265\u0263" +
		"\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02" +
		"\u0268\u0269\x07\x7F\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\b" +
		"g\x02\x02\u026B\xCE\x03\x02\x02\x02\u026C\u0270\t\x1D\x02\x02\u026D\u026F" +
		"\t\x1E\x02\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02" +
		"\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\xD0\x03" +
		"\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0279\x07)\x02\x02\u0274" +
		"\u0275\x07)\x02\x02\u0275\u0278\x07)\x02\x02\u0276\u0278\n\x1F\x02\x02" +
		"\u0277\u0274\x03\x02\x02\x02\u0277\u0276\x03\x02\x02\x02\u0278\u027B\x03" +
		"\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"\u027C\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u027D\x07)\x02" +
		"\x02\u027D\xD2\x03\x02\x02\x02\u027E\u0280\x042;\x02\u027F\u027E\x03\x02" +
		"\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281" +
		"\u0282\x03\x02\x02\x02\u0282\xD4\x03\x02\x02\x02\u0283\u0285\x042;\x02" +
		"\u0284\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0284\x03" +
		"\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0294\x03\x02\x02\x02\u0288" +
		"\u028A\x070\x02\x02\u0289\u028B\x042;\x02\u028A\u0289\x03\x02\x02\x02" +
		"\u028B\u028C\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03" +
		"\x02\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u0290\x05\xD7l\x02\u028F" +
		"\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x03\x02" +
		"\x02\x02\u0291\u0288\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292" +
		"\u0295\x03\x02\x02\x02\u0293\u0295\x05\xD7l\x02\u0294\u0291\x03\x02\x02" +
		"\x02\u0294\u0293\x03\x02\x02\x02\u0295\xD6\x03\x02\x02\x02\u0296\u0298" +
		"\x07g\x02\x02\u0297\u0299\t \x02\x02\u0298\u0297\x03\x02\x02\x02\u0298" +
		"\u0299\x03\x02\x02\x02\u0299\u029B\x03\x02\x02\x02\u029A\u029C\x042;\x02" +
		"\u029B\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029B\x03" +
		"\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\xD8\x03\x02\x02\x02\x10" +
		"\x02\u0259\u0265\u0270\u0277\u0279\u0281\u0286\u028C\u028F\u0291\u0294" +
		"\u0298\u029D\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			pascalLexer._serializedATNSegment0,
			pascalLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pascalLexer.__ATN) {
			pascalLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pascalLexer._serializedATN));
		}

		return pascalLexer.__ATN;
	}

}

