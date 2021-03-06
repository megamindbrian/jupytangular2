// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wavefront/WavefrontOBJ.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class WavefrontOBJLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly GEOMETRIC_VERTEX = 6;
	public static readonly TEXTURE_VERTEX = 7;
	public static readonly VERTEX_NORMAL = 8;
	public static readonly PARAMETER_SPACE_VERTEX = 9;
	public static readonly DEGREE = 10;
	public static readonly BASIS_MATRIX = 11;
	public static readonly STEP_SIZE = 12;
	public static readonly CURVE_SURF_TYPE = 13;
	public static readonly POINT = 14;
	public static readonly LINE = 15;
	public static readonly FACE = 16;
	public static readonly CURVE = 17;
	public static readonly CURVE2D = 18;
	public static readonly SURF = 19;
	public static readonly PARAM = 20;
	public static readonly OUTER_TRIMMING_HOLE = 21;
	public static readonly INNER_TRIMMING_HOLE = 22;
	public static readonly SPECIAL_CURVE = 23;
	public static readonly SPECIAL_POINT = 24;
	public static readonly END = 25;
	public static readonly CONNECT = 26;
	public static readonly GROUP_NAME = 27;
	public static readonly SMOOTHING_GROUP = 28;
	public static readonly MERGING_GROUP = 29;
	public static readonly OBJECT_NAME = 30;
	public static readonly BEVEL_INTERPOLATION = 31;
	public static readonly COLOR_INTERPOLATION = 32;
	public static readonly DISSOLVE_INTERPOLATION = 33;
	public static readonly LEVEL_OF_DETAIL = 34;
	public static readonly MATERIAL_NAME = 35;
	public static readonly MATERIAL_LIBRARY = 36;
	public static readonly SHADOW_CASTING = 37;
	public static readonly RAY_TRACING = 38;
	public static readonly CURVE_APPROX = 39;
	public static readonly SURF_APPROX = 40;
	public static readonly INTEGER = 41;
	public static readonly DECIMAL = 42;
	public static readonly COMMENT = 43;
	public static readonly NAME = 44;
	public static readonly WS = 45;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "GEOMETRIC_VERTEX", "TEXTURE_VERTEX", 
		"VERTEX_NORMAL", "PARAMETER_SPACE_VERTEX", "DEGREE", "BASIS_MATRIX", "STEP_SIZE", 
		"CURVE_SURF_TYPE", "POINT", "LINE", "FACE", "CURVE", "CURVE2D", "SURF", 
		"PARAM", "OUTER_TRIMMING_HOLE", "INNER_TRIMMING_HOLE", "SPECIAL_CURVE", 
		"SPECIAL_POINT", "END", "CONNECT", "GROUP_NAME", "SMOOTHING_GROUP", "MERGING_GROUP", 
		"OBJECT_NAME", "BEVEL_INTERPOLATION", "COLOR_INTERPOLATION", "DISSOLVE_INTERPOLATION", 
		"LEVEL_OF_DETAIL", "MATERIAL_NAME", "MATERIAL_LIBRARY", "SHADOW_CASTING", 
		"RAY_TRACING", "CURVE_APPROX", "SURF_APPROX", "DIGIT", "INTEGER", "DECIMAL", 
		"COMMENT", "NAME", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\r'", "'\n'", "'.mtl'", "'on'", "'off'", "'v'", "'vt'", "'vn'", 
		"'vp'", "'deg'", "'bmat'", "'step'", "'cstype'", "'p'", "'l'", "'f'", 
		"'curv'", "'curv2'", "'surf'", "'parm'", "'trim'", "'hole'", "'scrv'", 
		"'sp'", "'end'", "'con'", "'g'", "'s'", "'mg'", "'o'", "'bevel'", "'c_interp'", 
		"'d_interp'", "'lod'", "'usemtl'", "'mtllib'", "'shadow_obj'", "'trace_obj'", 
		"'ctech'", "'stech'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "GEOMETRIC_VERTEX", 
		"TEXTURE_VERTEX", "VERTEX_NORMAL", "PARAMETER_SPACE_VERTEX", "DEGREE", 
		"BASIS_MATRIX", "STEP_SIZE", "CURVE_SURF_TYPE", "POINT", "LINE", "FACE", 
		"CURVE", "CURVE2D", "SURF", "PARAM", "OUTER_TRIMMING_HOLE", "INNER_TRIMMING_HOLE", 
		"SPECIAL_CURVE", "SPECIAL_POINT", "END", "CONNECT", "GROUP_NAME", "SMOOTHING_GROUP", 
		"MERGING_GROUP", "OBJECT_NAME", "BEVEL_INTERPOLATION", "COLOR_INTERPOLATION", 
		"DISSOLVE_INTERPOLATION", "LEVEL_OF_DETAIL", "MATERIAL_NAME", "MATERIAL_LIBRARY", 
		"SHADOW_CASTING", "RAY_TRACING", "CURVE_APPROX", "SURF_APPROX", "INTEGER", 
		"DECIMAL", "COMMENT", "NAME", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WavefrontOBJLexer._LITERAL_NAMES, WavefrontOBJLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WavefrontOBJLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(WavefrontOBJLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "WavefrontOBJ.g4"; }

	// @Override
	public get ruleNames(): string[] { return WavefrontOBJLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return WavefrontOBJLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return WavefrontOBJLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return WavefrontOBJLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02/\u0146\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03+\x05" +
		"+\u011C\n+\x03+\x06+\u011F\n+\r+\x0E+\u0120\x03,\x03,\x03,\x07,\u0126" +
		"\n,\f,\x0E,\u0129\v,\x05,\u012B\n,\x03-\x03-\x07-\u012F\n-\f-\x0E-\u0132" +
		"\v-\x03-\x05-\u0135\n-\x03-\x03-\x03-\x03-\x03.\x06.\u013C\n.\r.\x0E." +
		"\u013D\x03/\x06/\u0141\n/\r/\x0E/\u0142\x03/\x03/\x02\x02\x020\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10" +
		"\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02" +
		"\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02" +
		" ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02\x02" +
		"U\x02+W\x02,Y\x02-[\x02.]\x02/\x03\x02\x05\x04\x02\f\f\x0F\x0F\t\x02*" +
		"+//2;C\\aac|\x80\x80\x04\x02\v\v\"\"\x02\u014C\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
		"7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
		"\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
		"\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
		"\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x03_\x03\x02\x02\x02\x05a\x03\x02" +
		"\x02\x02\x07c\x03\x02\x02\x02\th\x03\x02\x02\x02\vk\x03\x02\x02\x02\r" +
		"o\x03\x02\x02\x02\x0Fq\x03\x02\x02\x02\x11t\x03\x02\x02\x02\x13w\x03\x02" +
		"\x02\x02\x15z\x03\x02\x02\x02\x17~\x03\x02\x02\x02\x19\x83\x03\x02\x02" +
		"\x02\x1B\x88\x03\x02\x02\x02\x1D\x8F\x03\x02\x02\x02\x1F\x91\x03\x02\x02" +
		"\x02!\x93\x03\x02\x02\x02#\x95\x03\x02\x02\x02%\x9A\x03\x02\x02\x02\'" +
		"\xA0\x03\x02\x02\x02)\xA5\x03\x02\x02\x02+\xAA\x03\x02\x02\x02-\xAF\x03" +
		"\x02\x02\x02/\xB4\x03\x02\x02\x021\xB9\x03\x02\x02\x023\xBC\x03\x02\x02" +
		"\x025\xC0\x03\x02\x02\x027\xC4\x03\x02\x02\x029\xC6\x03\x02\x02\x02;\xC8" +
		"\x03\x02\x02\x02=\xCB\x03\x02\x02\x02?\xCD\x03\x02\x02\x02A\xD3\x03\x02" +
		"\x02\x02C\xDC\x03\x02\x02\x02E\xE5\x03\x02\x02\x02G\xE9\x03\x02\x02\x02" +
		"I\xF0\x03\x02\x02\x02K\xF7\x03\x02\x02\x02M\u0102\x03\x02\x02\x02O\u010C" +
		"\x03\x02\x02\x02Q\u0112\x03\x02\x02\x02S\u0118\x03\x02\x02\x02U\u011B" +
		"\x03\x02\x02\x02W\u0122\x03\x02\x02\x02Y\u012C\x03\x02\x02\x02[\u013B" +
		"\x03\x02\x02\x02]\u0140\x03\x02\x02\x02_`\x07\x0F\x02\x02`\x04\x03\x02" +
		"\x02\x02ab\x07\f\x02\x02b\x06\x03\x02\x02\x02cd\x070\x02\x02de\x07o\x02" +
		"\x02ef\x07v\x02\x02fg\x07n\x02\x02g\b\x03\x02\x02\x02hi\x07q\x02\x02i" +
		"j\x07p\x02\x02j\n\x03\x02\x02\x02kl\x07q\x02\x02lm\x07h\x02\x02mn\x07" +
		"h\x02\x02n\f\x03\x02\x02\x02op\x07x\x02\x02p\x0E\x03\x02\x02\x02qr\x07" +
		"x\x02\x02rs\x07v\x02\x02s\x10\x03\x02\x02\x02tu\x07x\x02\x02uv\x07p\x02" +
		"\x02v\x12\x03\x02\x02\x02wx\x07x\x02\x02xy\x07r\x02\x02y\x14\x03\x02\x02" +
		"\x02z{\x07f\x02\x02{|\x07g\x02\x02|}\x07i\x02\x02}\x16\x03\x02\x02\x02" +
		"~\x7F\x07d\x02\x02\x7F\x80\x07o\x02\x02\x80\x81\x07c\x02\x02\x81\x82\x07" +
		"v\x02\x02\x82\x18\x03\x02\x02\x02\x83\x84\x07u\x02\x02\x84\x85\x07v\x02" +
		"\x02\x85\x86\x07g\x02\x02\x86\x87\x07r\x02\x02\x87\x1A\x03\x02\x02\x02" +
		"\x88\x89\x07e\x02\x02\x89\x8A\x07u\x02\x02\x8A\x8B\x07v\x02\x02\x8B\x8C" +
		"\x07{\x02\x02\x8C\x8D\x07r\x02\x02\x8D\x8E\x07g\x02\x02\x8E\x1C\x03\x02" +
		"\x02\x02\x8F\x90\x07r\x02\x02\x90\x1E\x03\x02\x02\x02\x91\x92\x07n\x02" +
		"\x02\x92 \x03\x02\x02\x02\x93\x94\x07h\x02\x02\x94\"\x03\x02\x02\x02\x95" +
		"\x96\x07e\x02\x02\x96\x97\x07w\x02\x02\x97\x98\x07t\x02\x02\x98\x99\x07" +
		"x\x02\x02\x99$\x03\x02\x02\x02\x9A\x9B\x07e\x02\x02\x9B\x9C\x07w\x02\x02" +
		"\x9C\x9D\x07t\x02\x02\x9D\x9E\x07x\x02\x02\x9E\x9F\x074\x02\x02\x9F&\x03" +
		"\x02\x02\x02\xA0\xA1\x07u\x02\x02\xA1\xA2\x07w\x02\x02\xA2\xA3\x07t\x02" +
		"\x02\xA3\xA4\x07h\x02\x02\xA4(\x03\x02\x02\x02\xA5\xA6\x07r\x02\x02\xA6" +
		"\xA7\x07c\x02\x02\xA7\xA8\x07t\x02\x02\xA8\xA9\x07o\x02\x02\xA9*\x03\x02" +
		"\x02\x02\xAA\xAB\x07v\x02\x02\xAB\xAC\x07t\x02\x02\xAC\xAD\x07k\x02\x02" +
		"\xAD\xAE\x07o\x02\x02\xAE,\x03\x02\x02\x02\xAF\xB0\x07j\x02\x02\xB0\xB1" +
		"\x07q\x02\x02\xB1\xB2\x07n\x02\x02\xB2\xB3\x07g\x02\x02\xB3.\x03\x02\x02" +
		"\x02\xB4\xB5\x07u\x02\x02\xB5\xB6\x07e\x02\x02\xB6\xB7\x07t\x02\x02\xB7" +
		"\xB8\x07x\x02\x02\xB80\x03\x02\x02\x02\xB9\xBA\x07u\x02\x02\xBA\xBB\x07" +
		"r\x02\x02\xBB2\x03\x02\x02\x02\xBC\xBD\x07g\x02\x02\xBD\xBE\x07p\x02\x02" +
		"\xBE\xBF\x07f\x02\x02\xBF4\x03\x02\x02\x02\xC0\xC1\x07e\x02\x02\xC1\xC2" +
		"\x07q\x02\x02\xC2\xC3\x07p\x02\x02\xC36\x03\x02\x02\x02\xC4\xC5\x07i\x02" +
		"\x02\xC58\x03\x02\x02\x02\xC6\xC7\x07u\x02\x02\xC7:\x03\x02\x02\x02\xC8" +
		"\xC9\x07o\x02\x02\xC9\xCA\x07i\x02\x02\xCA<\x03\x02\x02\x02\xCB\xCC\x07" +
		"q\x02\x02\xCC>\x03\x02\x02\x02\xCD\xCE\x07d\x02\x02\xCE\xCF\x07g\x02\x02" +
		"\xCF\xD0\x07x\x02\x02\xD0\xD1\x07g\x02\x02\xD1\xD2\x07n\x02\x02\xD2@\x03" +
		"\x02\x02\x02\xD3\xD4\x07e\x02\x02\xD4\xD5\x07a\x02\x02\xD5\xD6\x07k\x02" +
		"\x02\xD6\xD7\x07p\x02\x02\xD7\xD8\x07v\x02\x02\xD8\xD9\x07g\x02\x02\xD9" +
		"\xDA\x07t\x02\x02\xDA\xDB\x07r\x02\x02\xDBB\x03\x02\x02\x02\xDC\xDD\x07" +
		"f\x02\x02\xDD\xDE\x07a\x02\x02\xDE\xDF\x07k\x02\x02\xDF\xE0\x07p\x02\x02" +
		"\xE0\xE1\x07v\x02\x02\xE1\xE2\x07g\x02\x02\xE2\xE3\x07t\x02\x02\xE3\xE4" +
		"\x07r\x02\x02\xE4D\x03\x02\x02\x02\xE5\xE6\x07n\x02\x02\xE6\xE7\x07q\x02" +
		"\x02\xE7\xE8\x07f\x02\x02\xE8F\x03\x02\x02\x02\xE9\xEA\x07w\x02\x02\xEA" +
		"\xEB\x07u\x02\x02\xEB\xEC\x07g\x02\x02\xEC\xED\x07o\x02\x02\xED\xEE\x07" +
		"v\x02\x02\xEE\xEF\x07n\x02\x02\xEFH\x03\x02\x02\x02\xF0\xF1\x07o\x02\x02" +
		"\xF1\xF2\x07v\x02\x02\xF2\xF3\x07n\x02\x02\xF3\xF4\x07n\x02\x02\xF4\xF5" +
		"\x07k\x02\x02\xF5\xF6\x07d\x02\x02\xF6J\x03\x02\x02\x02\xF7\xF8\x07u\x02" +
		"\x02\xF8\xF9\x07j\x02\x02\xF9\xFA\x07c\x02\x02\xFA\xFB\x07f\x02\x02\xFB" +
		"\xFC\x07q\x02\x02\xFC\xFD\x07y\x02\x02\xFD\xFE\x07a\x02\x02\xFE\xFF\x07" +
		"q\x02\x02\xFF\u0100\x07d\x02\x02\u0100\u0101\x07l\x02\x02\u0101L\x03\x02" +
		"\x02\x02\u0102\u0103\x07v\x02\x02\u0103\u0104\x07t\x02\x02\u0104\u0105" +
		"\x07c\x02\x02\u0105\u0106\x07e\x02\x02\u0106\u0107\x07g\x02\x02\u0107" +
		"\u0108\x07a\x02\x02\u0108\u0109\x07q\x02\x02\u0109\u010A\x07d\x02\x02" +
		"\u010A\u010B\x07l\x02\x02\u010BN\x03\x02\x02\x02\u010C\u010D\x07e\x02" +
		"\x02\u010D\u010E\x07v\x02\x02\u010E\u010F\x07g\x02\x02\u010F\u0110\x07" +
		"e\x02\x02\u0110\u0111\x07j\x02\x02\u0111P\x03\x02\x02\x02\u0112\u0113" +
		"\x07u\x02\x02\u0113\u0114\x07v\x02\x02\u0114\u0115\x07g\x02\x02\u0115" +
		"\u0116\x07e\x02\x02\u0116\u0117\x07j\x02\x02\u0117R\x03\x02\x02\x02\u0118" +
		"\u0119\x042;\x02\u0119T\x03\x02\x02\x02\u011A\u011C\x07/\x02\x02\u011B" +
		"\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E\x03\x02" +
		"\x02\x02\u011D\u011F\x05S*\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0120" +
		"\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02" +
		"\u0121V\x03\x02\x02\x02\u0122\u012A\x05U+\x02\u0123\u0127\x070\x02\x02" +
		"\u0124\u0126\x05S*\x02\u0125\u0124\x03\x02\x02\x02\u0126\u0129\x03\x02" +
		"\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128" +
		"\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u0123\x03\x02" +
		"\x02\x02\u012A\u012B\x03\x02\x02\x02\u012BX\x03\x02\x02\x02\u012C\u0130" +
		"\x07%\x02\x02\u012D\u012F\n\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F" +
		"\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133" +
		"\u0135\x07\x0F\x02\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02" +
		"\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07\f\x02\x02\u0137\u0138" +
		"\x03\x02\x02\x02\u0138\u0139\b-\x02\x02\u0139Z\x03\x02\x02\x02\u013A\u013C" +
		"\t\x03\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02" +
		"\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\\\x03\x02" +
		"\x02\x02\u013F\u0141\t\x04\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0142" +
		"\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02" +
		"\u0143\u0144\x03\x02\x02\x02\u0144\u0145\b/\x02\x02\u0145^\x03\x02\x02" +
		"\x02\v\x02\u011B\u0120\u0127\u012A\u0130\u0134\u013D\u0142\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WavefrontOBJLexer.__ATN) {
			WavefrontOBJLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WavefrontOBJLexer._serializedATN));
		}

		return WavefrontOBJLexer.__ATN;
	}

}

