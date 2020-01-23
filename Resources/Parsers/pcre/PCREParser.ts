// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pcre/PCRE.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PCREListener } from "./PCREListener";

export class PCREParser extends Parser {
	public static readonly Quoted = 1;
	public static readonly BlockQuoted = 2;
	public static readonly BellChar = 3;
	public static readonly ControlChar = 4;
	public static readonly EscapeChar = 5;
	public static readonly FormFeed = 6;
	public static readonly NewLine = 7;
	public static readonly CarriageReturn = 8;
	public static readonly Tab = 9;
	public static readonly Backslash = 10;
	public static readonly HexChar = 11;
	public static readonly Dot = 12;
	public static readonly OneDataUnit = 13;
	public static readonly DecimalDigit = 14;
	public static readonly NotDecimalDigit = 15;
	public static readonly HorizontalWhiteSpace = 16;
	public static readonly NotHorizontalWhiteSpace = 17;
	public static readonly NotNewLine = 18;
	public static readonly CharWithProperty = 19;
	public static readonly CharWithoutProperty = 20;
	public static readonly NewLineSequence = 21;
	public static readonly WhiteSpace = 22;
	public static readonly NotWhiteSpace = 23;
	public static readonly VerticalWhiteSpace = 24;
	public static readonly NotVerticalWhiteSpace = 25;
	public static readonly WordChar = 26;
	public static readonly NotWordChar = 27;
	public static readonly ExtendedUnicodeChar = 28;
	public static readonly CharacterClassStart = 29;
	public static readonly CharacterClassEnd = 30;
	public static readonly Caret = 31;
	public static readonly Hyphen = 32;
	public static readonly POSIXNamedSet = 33;
	public static readonly POSIXNegatedNamedSet = 34;
	public static readonly QuestionMark = 35;
	public static readonly Plus = 36;
	public static readonly Star = 37;
	public static readonly OpenBrace = 38;
	public static readonly CloseBrace = 39;
	public static readonly Comma = 40;
	public static readonly WordBoundary = 41;
	public static readonly NonWordBoundary = 42;
	public static readonly StartOfSubject = 43;
	public static readonly EndOfSubjectOrLine = 44;
	public static readonly EndOfSubjectOrLineEndOfSubject = 45;
	public static readonly EndOfSubject = 46;
	public static readonly PreviousMatchInSubject = 47;
	public static readonly ResetStartMatch = 48;
	public static readonly SubroutineOrNamedReferenceStartG = 49;
	public static readonly NamedReferenceStartK = 50;
	public static readonly Pipe = 51;
	public static readonly OpenParen = 52;
	public static readonly CloseParen = 53;
	public static readonly LessThan = 54;
	public static readonly GreaterThan = 55;
	public static readonly SingleQuote = 56;
	public static readonly Underscore = 57;
	public static readonly Colon = 58;
	public static readonly Hash = 59;
	public static readonly Equals = 60;
	public static readonly Exclamation = 61;
	public static readonly Ampersand = 62;
	public static readonly ALC = 63;
	public static readonly BLC = 64;
	public static readonly CLC = 65;
	public static readonly DLC = 66;
	public static readonly ELC = 67;
	public static readonly FLC = 68;
	public static readonly GLC = 69;
	public static readonly HLC = 70;
	public static readonly ILC = 71;
	public static readonly JLC = 72;
	public static readonly KLC = 73;
	public static readonly LLC = 74;
	public static readonly MLC = 75;
	public static readonly NLC = 76;
	public static readonly OLC = 77;
	public static readonly PLC = 78;
	public static readonly QLC = 79;
	public static readonly RLC = 80;
	public static readonly SLC = 81;
	public static readonly TLC = 82;
	public static readonly ULC = 83;
	public static readonly VLC = 84;
	public static readonly WLC = 85;
	public static readonly XLC = 86;
	public static readonly YLC = 87;
	public static readonly ZLC = 88;
	public static readonly AUC = 89;
	public static readonly BUC = 90;
	public static readonly CUC = 91;
	public static readonly DUC = 92;
	public static readonly EUC = 93;
	public static readonly FUC = 94;
	public static readonly GUC = 95;
	public static readonly HUC = 96;
	public static readonly IUC = 97;
	public static readonly JUC = 98;
	public static readonly KUC = 99;
	public static readonly LUC = 100;
	public static readonly MUC = 101;
	public static readonly NUC = 102;
	public static readonly OUC = 103;
	public static readonly PUC = 104;
	public static readonly QUC = 105;
	public static readonly RUC = 106;
	public static readonly SUC = 107;
	public static readonly TUC = 108;
	public static readonly UUC = 109;
	public static readonly VUC = 110;
	public static readonly WUC = 111;
	public static readonly XUC = 112;
	public static readonly YUC = 113;
	public static readonly ZUC = 114;
	public static readonly D1 = 115;
	public static readonly D2 = 116;
	public static readonly D3 = 117;
	public static readonly D4 = 118;
	public static readonly D5 = 119;
	public static readonly D6 = 120;
	public static readonly D7 = 121;
	public static readonly D8 = 122;
	public static readonly D9 = 123;
	public static readonly D0 = 124;
	public static readonly OtherChar = 125;
	public static readonly RULE_parse = 0;
	public static readonly RULE_alternation = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_element = 3;
	public static readonly RULE_quantifier = 4;
	public static readonly RULE_quantifier_type = 5;
	public static readonly RULE_character_class = 6;
	public static readonly RULE_backreference = 7;
	public static readonly RULE_backreference_or_octal = 8;
	public static readonly RULE_capture = 9;
	public static readonly RULE_non_capture = 10;
	public static readonly RULE_comment = 11;
	public static readonly RULE_option = 12;
	public static readonly RULE_option_flags = 13;
	public static readonly RULE_option_flag = 14;
	public static readonly RULE_look_around = 15;
	public static readonly RULE_subroutine_reference = 16;
	public static readonly RULE_conditional = 17;
	public static readonly RULE_backtrack_control = 18;
	public static readonly RULE_newline_convention = 19;
	public static readonly RULE_callout = 20;
	public static readonly RULE_atom = 21;
	public static readonly RULE_cc_atom = 22;
	public static readonly RULE_shared_atom = 23;
	public static readonly RULE_literal = 24;
	public static readonly RULE_cc_literal = 25;
	public static readonly RULE_shared_literal = 26;
	public static readonly RULE_number = 27;
	public static readonly RULE_octal_char = 28;
	public static readonly RULE_octal_digit = 29;
	public static readonly RULE_digits = 30;
	public static readonly RULE_digit = 31;
	public static readonly RULE_name = 32;
	public static readonly RULE_alpha_nums = 33;
	public static readonly RULE_non_close_parens = 34;
	public static readonly RULE_non_close_paren = 35;
	public static readonly RULE_letter = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "alternation", "expr", "element", "quantifier", "quantifier_type", 
		"character_class", "backreference", "backreference_or_octal", "capture", 
		"non_capture", "comment", "option", "option_flags", "option_flag", "look_around", 
		"subroutine_reference", "conditional", "backtrack_control", "newline_convention", 
		"callout", "atom", "cc_atom", "shared_atom", "literal", "cc_literal", 
		"shared_literal", "number", "octal_char", "octal_digit", "digits", "digit", 
		"name", "alpha_nums", "non_close_parens", "non_close_paren", "letter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'\\'", "'\\'", "'\\'", "'\\'", "'\\'", 
		"'\\'", "'\\'", "'\\'", undefined, "'.'", "'\\'", "'\\'", "'\\'", "'\\'", 
		"'\\'", "'\\'", undefined, undefined, "'\\'", "'\\'", "'\\'", "'\\'", 
		"'\\'", "'\\'", "'\\'", "'\\'", "'['", "']'", "'^'", "'-'", undefined, 
		undefined, "'?'", "'+'", "'*'", "'{'", "'}'", "','", "'\\'", "'\\'", "'\\'", 
		"'$'", "'\\'", "'\\'", "'\\'", "'\\'", "'\\'", "'\\'", "'|'", "'('", "')'", 
		"'<'", "'>'", "'''", "'_'", "':'", "'#'", "'='", "'!'", "'&'", "'a'", 
		"'b'", "'c'", "'d'", "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", 
		"'l'", "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", "'s'", "'t'", "'u'", 
		"'v'", "'w'", "'x'", "'y'", "'z'", "'A'", "'B'", "'C'", "'D'", "'E'", 
		"'F'", "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", 
		"'P'", "'Q'", "'R'", "'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", 
		"'Z'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", 
		"'0'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Quoted", "BlockQuoted", "BellChar", "ControlChar", "EscapeChar", 
		"FormFeed", "NewLine", "CarriageReturn", "Tab", "Backslash", "HexChar", 
		"Dot", "OneDataUnit", "DecimalDigit", "NotDecimalDigit", "HorizontalWhiteSpace", 
		"NotHorizontalWhiteSpace", "NotNewLine", "CharWithProperty", "CharWithoutProperty", 
		"NewLineSequence", "WhiteSpace", "NotWhiteSpace", "VerticalWhiteSpace", 
		"NotVerticalWhiteSpace", "WordChar", "NotWordChar", "ExtendedUnicodeChar", 
		"CharacterClassStart", "CharacterClassEnd", "Caret", "Hyphen", "POSIXNamedSet", 
		"POSIXNegatedNamedSet", "QuestionMark", "Plus", "Star", "OpenBrace", "CloseBrace", 
		"Comma", "WordBoundary", "NonWordBoundary", "StartOfSubject", "EndOfSubjectOrLine", 
		"EndOfSubjectOrLineEndOfSubject", "EndOfSubject", "PreviousMatchInSubject", 
		"ResetStartMatch", "SubroutineOrNamedReferenceStartG", "NamedReferenceStartK", 
		"Pipe", "OpenParen", "CloseParen", "LessThan", "GreaterThan", "SingleQuote", 
		"Underscore", "Colon", "Hash", "Equals", "Exclamation", "Ampersand", "ALC", 
		"BLC", "CLC", "DLC", "ELC", "FLC", "GLC", "HLC", "ILC", "JLC", "KLC", 
		"LLC", "MLC", "NLC", "OLC", "PLC", "QLC", "RLC", "SLC", "TLC", "ULC", 
		"VLC", "WLC", "XLC", "YLC", "ZLC", "AUC", "BUC", "CUC", "DUC", "EUC", 
		"FUC", "GUC", "HUC", "IUC", "JUC", "KUC", "LUC", "MUC", "NUC", "OUC", 
		"PUC", "QUC", "RUC", "SUC", "TUC", "UUC", "VUC", "WUC", "XUC", "YUC", 
		"ZUC", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D0", "OtherChar",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PCREParser._LITERAL_NAMES, PCREParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PCREParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PCRE.g4"; }

	// @Override
	public get ruleNames(): string[] { return PCREParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PCREParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PCREParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PCREParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.alternation();
			this.state = 75;
			this.match(PCREParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternation(): AlternationContext {
		let _localctx: AlternationContext = new AlternationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PCREParser.RULE_alternation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.expr();
			this.state = 82;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 78;
					this.match(PCREParser.Pipe);
					this.state = 79;
					this.expr();
					}
					}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PCREParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.OneDataUnit) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.ExtendedUnicodeChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.CharacterClassEnd) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.NonWordBoundary - 32)) | (1 << (PCREParser.StartOfSubject - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.EndOfSubjectOrLineEndOfSubject - 32)) | (1 << (PCREParser.EndOfSubject - 32)) | (1 << (PCREParser.PreviousMatchInSubject - 32)) | (1 << (PCREParser.ResetStartMatch - 32)) | (1 << (PCREParser.SubroutineOrNamedReferenceStartG - 32)) | (1 << (PCREParser.NamedReferenceStartK - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0)) {
				{
				{
				this.state = 85;
				this.element();
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PCREParser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.atom();
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 92;
				this.quantifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifier(): QuantifierContext {
		let _localctx: QuantifierContext = new QuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PCREParser.RULE_quantifier);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.match(PCREParser.QuestionMark);
				this.state = 96;
				this.quantifier_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.match(PCREParser.Plus);
				this.state = 98;
				this.quantifier_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.match(PCREParser.Star);
				this.state = 100;
				this.quantifier_type();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 101;
				this.match(PCREParser.OpenBrace);
				this.state = 102;
				this.number();
				this.state = 103;
				this.match(PCREParser.CloseBrace);
				this.state = 104;
				this.quantifier_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 106;
				this.match(PCREParser.OpenBrace);
				this.state = 107;
				this.number();
				this.state = 108;
				this.match(PCREParser.Comma);
				this.state = 109;
				this.match(PCREParser.CloseBrace);
				this.state = 110;
				this.quantifier_type();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 112;
				this.match(PCREParser.OpenBrace);
				this.state = 113;
				this.number();
				this.state = 114;
				this.match(PCREParser.Comma);
				this.state = 115;
				this.number();
				this.state = 116;
				this.match(PCREParser.CloseBrace);
				this.state = 117;
				this.quantifier_type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifier_type(): Quantifier_typeContext {
		let _localctx: Quantifier_typeContext = new Quantifier_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PCREParser.RULE_quantifier_type);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PCREParser.Plus:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.match(PCREParser.Plus);
				}
				break;
			case PCREParser.QuestionMark:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.match(PCREParser.QuestionMark);
				}
				break;
			case PCREParser.EOF:
			case PCREParser.Quoted:
			case PCREParser.BlockQuoted:
			case PCREParser.BellChar:
			case PCREParser.ControlChar:
			case PCREParser.EscapeChar:
			case PCREParser.FormFeed:
			case PCREParser.NewLine:
			case PCREParser.CarriageReturn:
			case PCREParser.Tab:
			case PCREParser.Backslash:
			case PCREParser.HexChar:
			case PCREParser.Dot:
			case PCREParser.OneDataUnit:
			case PCREParser.DecimalDigit:
			case PCREParser.NotDecimalDigit:
			case PCREParser.HorizontalWhiteSpace:
			case PCREParser.NotHorizontalWhiteSpace:
			case PCREParser.NotNewLine:
			case PCREParser.CharWithProperty:
			case PCREParser.CharWithoutProperty:
			case PCREParser.NewLineSequence:
			case PCREParser.WhiteSpace:
			case PCREParser.NotWhiteSpace:
			case PCREParser.VerticalWhiteSpace:
			case PCREParser.NotVerticalWhiteSpace:
			case PCREParser.WordChar:
			case PCREParser.NotWordChar:
			case PCREParser.ExtendedUnicodeChar:
			case PCREParser.CharacterClassStart:
			case PCREParser.CharacterClassEnd:
			case PCREParser.Caret:
			case PCREParser.Hyphen:
			case PCREParser.POSIXNamedSet:
			case PCREParser.POSIXNegatedNamedSet:
			case PCREParser.OpenBrace:
			case PCREParser.CloseBrace:
			case PCREParser.Comma:
			case PCREParser.WordBoundary:
			case PCREParser.NonWordBoundary:
			case PCREParser.StartOfSubject:
			case PCREParser.EndOfSubjectOrLine:
			case PCREParser.EndOfSubjectOrLineEndOfSubject:
			case PCREParser.EndOfSubject:
			case PCREParser.PreviousMatchInSubject:
			case PCREParser.ResetStartMatch:
			case PCREParser.SubroutineOrNamedReferenceStartG:
			case PCREParser.NamedReferenceStartK:
			case PCREParser.Pipe:
			case PCREParser.OpenParen:
			case PCREParser.CloseParen:
			case PCREParser.LessThan:
			case PCREParser.GreaterThan:
			case PCREParser.SingleQuote:
			case PCREParser.Underscore:
			case PCREParser.Colon:
			case PCREParser.Hash:
			case PCREParser.Equals:
			case PCREParser.Exclamation:
			case PCREParser.Ampersand:
			case PCREParser.ALC:
			case PCREParser.BLC:
			case PCREParser.CLC:
			case PCREParser.DLC:
			case PCREParser.ELC:
			case PCREParser.FLC:
			case PCREParser.GLC:
			case PCREParser.HLC:
			case PCREParser.ILC:
			case PCREParser.JLC:
			case PCREParser.KLC:
			case PCREParser.LLC:
			case PCREParser.MLC:
			case PCREParser.NLC:
			case PCREParser.OLC:
			case PCREParser.PLC:
			case PCREParser.QLC:
			case PCREParser.RLC:
			case PCREParser.SLC:
			case PCREParser.TLC:
			case PCREParser.ULC:
			case PCREParser.VLC:
			case PCREParser.WLC:
			case PCREParser.XLC:
			case PCREParser.YLC:
			case PCREParser.ZLC:
			case PCREParser.AUC:
			case PCREParser.BUC:
			case PCREParser.CUC:
			case PCREParser.DUC:
			case PCREParser.EUC:
			case PCREParser.FUC:
			case PCREParser.GUC:
			case PCREParser.HUC:
			case PCREParser.IUC:
			case PCREParser.JUC:
			case PCREParser.KUC:
			case PCREParser.LUC:
			case PCREParser.MUC:
			case PCREParser.NUC:
			case PCREParser.OUC:
			case PCREParser.PUC:
			case PCREParser.QUC:
			case PCREParser.RUC:
			case PCREParser.SUC:
			case PCREParser.TUC:
			case PCREParser.UUC:
			case PCREParser.VUC:
			case PCREParser.WUC:
			case PCREParser.XUC:
			case PCREParser.YUC:
			case PCREParser.ZUC:
			case PCREParser.D1:
			case PCREParser.D2:
			case PCREParser.D3:
			case PCREParser.D4:
			case PCREParser.D5:
			case PCREParser.D6:
			case PCREParser.D7:
			case PCREParser.D8:
			case PCREParser.D9:
			case PCREParser.D0:
			case PCREParser.OtherChar:
				this.enterOuterAlt(_localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public character_class(): Character_classContext {
		let _localctx: Character_classContext = new Character_classContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PCREParser.RULE_character_class);
		let _la: number;
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.match(PCREParser.CharacterClassStart);
				this.state = 127;
				this.match(PCREParser.Caret);
				this.state = 128;
				this.match(PCREParser.CharacterClassEnd);
				this.state = 129;
				this.match(PCREParser.Hyphen);
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 130;
					this.cc_atom();
					}
					}
					this.state = 133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.CloseParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0));
				this.state = 135;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.match(PCREParser.CharacterClassStart);
				this.state = 138;
				this.match(PCREParser.Caret);
				this.state = 139;
				this.match(PCREParser.CharacterClassEnd);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.CloseParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0)) {
					{
					{
					this.state = 140;
					this.cc_atom();
					}
					}
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 146;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 147;
				this.match(PCREParser.CharacterClassStart);
				this.state = 148;
				this.match(PCREParser.Caret);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 149;
					this.cc_atom();
					}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.CloseParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0));
				this.state = 154;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 156;
				this.match(PCREParser.CharacterClassStart);
				this.state = 157;
				this.match(PCREParser.CharacterClassEnd);
				this.state = 158;
				this.match(PCREParser.Hyphen);
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 159;
					this.cc_atom();
					}
					}
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.CloseParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0));
				this.state = 164;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 166;
				this.match(PCREParser.CharacterClassStart);
				this.state = 167;
				this.match(PCREParser.CharacterClassEnd);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.CloseParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0)) {
					{
					{
					this.state = 168;
					this.cc_atom();
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 175;
				this.match(PCREParser.CharacterClassStart);
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 176;
					this.cc_atom();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.CloseParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0));
				this.state = 181;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public backreference(): BackreferenceContext {
		let _localctx: BackreferenceContext = new BackreferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PCREParser.RULE_backreference);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.backreference_or_octal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 187;
				this.number();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 188;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 189;
				this.match(PCREParser.OpenBrace);
				this.state = 190;
				this.number();
				this.state = 191;
				this.match(PCREParser.CloseBrace);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 193;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 194;
				this.match(PCREParser.OpenBrace);
				this.state = 195;
				this.match(PCREParser.Hyphen);
				this.state = 196;
				this.number();
				this.state = 197;
				this.match(PCREParser.CloseBrace);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 199;
				this.match(PCREParser.NamedReferenceStartK);
				this.state = 200;
				this.match(PCREParser.LessThan);
				this.state = 201;
				this.name();
				this.state = 202;
				this.match(PCREParser.GreaterThan);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 204;
				this.match(PCREParser.NamedReferenceStartK);
				this.state = 205;
				this.match(PCREParser.SingleQuote);
				this.state = 206;
				this.name();
				this.state = 207;
				this.match(PCREParser.SingleQuote);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 209;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 210;
				this.match(PCREParser.OpenBrace);
				this.state = 211;
				this.name();
				this.state = 212;
				this.match(PCREParser.CloseBrace);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 214;
				this.match(PCREParser.NamedReferenceStartK);
				this.state = 215;
				this.match(PCREParser.OpenBrace);
				this.state = 216;
				this.name();
				this.state = 217;
				this.match(PCREParser.CloseBrace);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 219;
				this.match(PCREParser.OpenParen);
				this.state = 220;
				this.match(PCREParser.QuestionMark);
				this.state = 221;
				this.match(PCREParser.PUC);
				this.state = 222;
				this.match(PCREParser.Equals);
				this.state = 223;
				this.name();
				this.state = 224;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public backreference_or_octal(): Backreference_or_octalContext {
		let _localctx: Backreference_or_octalContext = new Backreference_or_octalContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PCREParser.RULE_backreference_or_octal);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.octal_char();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.match(PCREParser.Backslash);
				this.state = 230;
				this.digit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PCREParser.RULE_capture);
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 233;
				this.match(PCREParser.OpenParen);
				this.state = 234;
				this.match(PCREParser.QuestionMark);
				this.state = 235;
				this.match(PCREParser.LessThan);
				this.state = 236;
				this.name();
				this.state = 237;
				this.match(PCREParser.GreaterThan);
				this.state = 238;
				this.alternation();
				this.state = 239;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.match(PCREParser.OpenParen);
				this.state = 242;
				this.match(PCREParser.QuestionMark);
				this.state = 243;
				this.match(PCREParser.SingleQuote);
				this.state = 244;
				this.name();
				this.state = 245;
				this.match(PCREParser.SingleQuote);
				this.state = 246;
				this.alternation();
				this.state = 247;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 249;
				this.match(PCREParser.OpenParen);
				this.state = 250;
				this.match(PCREParser.QuestionMark);
				this.state = 251;
				this.match(PCREParser.PUC);
				this.state = 252;
				this.match(PCREParser.LessThan);
				this.state = 253;
				this.name();
				this.state = 254;
				this.match(PCREParser.GreaterThan);
				this.state = 255;
				this.alternation();
				this.state = 256;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 258;
				this.match(PCREParser.OpenParen);
				this.state = 259;
				this.alternation();
				this.state = 260;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public non_capture(): Non_captureContext {
		let _localctx: Non_captureContext = new Non_captureContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PCREParser.RULE_non_capture);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.match(PCREParser.OpenParen);
				this.state = 265;
				this.match(PCREParser.QuestionMark);
				this.state = 266;
				this.match(PCREParser.Colon);
				this.state = 267;
				this.alternation();
				this.state = 268;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.match(PCREParser.OpenParen);
				this.state = 271;
				this.match(PCREParser.QuestionMark);
				this.state = 272;
				this.match(PCREParser.Pipe);
				this.state = 273;
				this.alternation();
				this.state = 274;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this.match(PCREParser.OpenParen);
				this.state = 277;
				this.match(PCREParser.QuestionMark);
				this.state = 278;
				this.match(PCREParser.GreaterThan);
				this.state = 279;
				this.alternation();
				this.state = 280;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 282;
				this.match(PCREParser.OpenParen);
				this.state = 283;
				this.match(PCREParser.QuestionMark);
				this.state = 284;
				this.option_flags();
				this.state = 285;
				this.match(PCREParser.Colon);
				this.state = 286;
				this.alternation();
				this.state = 287;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PCREParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(PCREParser.OpenParen);
			this.state = 292;
			this.match(PCREParser.QuestionMark);
			this.state = 293;
			this.match(PCREParser.Hash);
			this.state = 294;
			this.non_close_parens();
			this.state = 295;
			this.match(PCREParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PCREParser.RULE_option);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.match(PCREParser.OpenParen);
				this.state = 298;
				this.match(PCREParser.QuestionMark);
				this.state = 299;
				this.option_flags();
				this.state = 300;
				this.match(PCREParser.Hyphen);
				this.state = 301;
				this.option_flags();
				this.state = 302;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.match(PCREParser.OpenParen);
				this.state = 305;
				this.match(PCREParser.QuestionMark);
				this.state = 306;
				this.option_flags();
				this.state = 307;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 309;
				this.match(PCREParser.OpenParen);
				this.state = 310;
				this.match(PCREParser.QuestionMark);
				this.state = 311;
				this.match(PCREParser.Hyphen);
				this.state = 312;
				this.option_flags();
				this.state = 313;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 315;
				this.match(PCREParser.OpenParen);
				this.state = 316;
				this.match(PCREParser.Star);
				this.state = 317;
				this.match(PCREParser.NUC);
				this.state = 318;
				this.match(PCREParser.OUC);
				this.state = 319;
				this.match(PCREParser.Underscore);
				this.state = 320;
				this.match(PCREParser.SUC);
				this.state = 321;
				this.match(PCREParser.TUC);
				this.state = 322;
				this.match(PCREParser.AUC);
				this.state = 323;
				this.match(PCREParser.RUC);
				this.state = 324;
				this.match(PCREParser.TUC);
				this.state = 325;
				this.match(PCREParser.Underscore);
				this.state = 326;
				this.match(PCREParser.OUC);
				this.state = 327;
				this.match(PCREParser.PUC);
				this.state = 328;
				this.match(PCREParser.TUC);
				this.state = 329;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 330;
				this.match(PCREParser.OpenParen);
				this.state = 331;
				this.match(PCREParser.Star);
				this.state = 332;
				this.match(PCREParser.UUC);
				this.state = 333;
				this.match(PCREParser.TUC);
				this.state = 334;
				this.match(PCREParser.FUC);
				this.state = 335;
				this.match(PCREParser.D8);
				this.state = 336;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 337;
				this.match(PCREParser.OpenParen);
				this.state = 338;
				this.match(PCREParser.Star);
				this.state = 339;
				this.match(PCREParser.UUC);
				this.state = 340;
				this.match(PCREParser.TUC);
				this.state = 341;
				this.match(PCREParser.FUC);
				this.state = 342;
				this.match(PCREParser.D1);
				this.state = 343;
				this.match(PCREParser.D6);
				this.state = 344;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 345;
				this.match(PCREParser.OpenParen);
				this.state = 346;
				this.match(PCREParser.Star);
				this.state = 347;
				this.match(PCREParser.UUC);
				this.state = 348;
				this.match(PCREParser.CUC);
				this.state = 349;
				this.match(PCREParser.PUC);
				this.state = 350;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option_flags(): Option_flagsContext {
		let _localctx: Option_flagsContext = new Option_flagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PCREParser.RULE_option_flags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 353;
				this.option_flag();
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PCREParser.ILC - 71)) | (1 << (PCREParser.MLC - 71)) | (1 << (PCREParser.SLC - 71)) | (1 << (PCREParser.XLC - 71)) | (1 << (PCREParser.JUC - 71)))) !== 0) || _la === PCREParser.UUC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option_flag(): Option_flagContext {
		let _localctx: Option_flagContext = new Option_flagContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PCREParser.RULE_option_flag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			_la = this._input.LA(1);
			if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (PCREParser.ILC - 71)) | (1 << (PCREParser.MLC - 71)) | (1 << (PCREParser.SLC - 71)) | (1 << (PCREParser.XLC - 71)) | (1 << (PCREParser.JUC - 71)))) !== 0) || _la === PCREParser.UUC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public look_around(): Look_aroundContext {
		let _localctx: Look_aroundContext = new Look_aroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PCREParser.RULE_look_around);
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 360;
				this.match(PCREParser.OpenParen);
				this.state = 361;
				this.match(PCREParser.QuestionMark);
				this.state = 362;
				this.match(PCREParser.Equals);
				this.state = 363;
				this.alternation();
				this.state = 364;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.match(PCREParser.OpenParen);
				this.state = 367;
				this.match(PCREParser.QuestionMark);
				this.state = 368;
				this.match(PCREParser.Exclamation);
				this.state = 369;
				this.alternation();
				this.state = 370;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 372;
				this.match(PCREParser.OpenParen);
				this.state = 373;
				this.match(PCREParser.QuestionMark);
				this.state = 374;
				this.match(PCREParser.LessThan);
				this.state = 375;
				this.match(PCREParser.Equals);
				this.state = 376;
				this.alternation();
				this.state = 377;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 379;
				this.match(PCREParser.OpenParen);
				this.state = 380;
				this.match(PCREParser.QuestionMark);
				this.state = 381;
				this.match(PCREParser.LessThan);
				this.state = 382;
				this.match(PCREParser.Exclamation);
				this.state = 383;
				this.alternation();
				this.state = 384;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subroutine_reference(): Subroutine_referenceContext {
		let _localctx: Subroutine_referenceContext = new Subroutine_referenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PCREParser.RULE_subroutine_reference);
		try {
			this.state = 466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				this.match(PCREParser.OpenParen);
				this.state = 389;
				this.match(PCREParser.QuestionMark);
				this.state = 390;
				this.match(PCREParser.RUC);
				this.state = 391;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 392;
				this.match(PCREParser.OpenParen);
				this.state = 393;
				this.match(PCREParser.QuestionMark);
				this.state = 394;
				this.number();
				this.state = 395;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 397;
				this.match(PCREParser.OpenParen);
				this.state = 398;
				this.match(PCREParser.QuestionMark);
				this.state = 399;
				this.match(PCREParser.Plus);
				this.state = 400;
				this.number();
				this.state = 401;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 403;
				this.match(PCREParser.OpenParen);
				this.state = 404;
				this.match(PCREParser.QuestionMark);
				this.state = 405;
				this.match(PCREParser.Hyphen);
				this.state = 406;
				this.number();
				this.state = 407;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 409;
				this.match(PCREParser.OpenParen);
				this.state = 410;
				this.match(PCREParser.QuestionMark);
				this.state = 411;
				this.match(PCREParser.Ampersand);
				this.state = 412;
				this.name();
				this.state = 413;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 415;
				this.match(PCREParser.OpenParen);
				this.state = 416;
				this.match(PCREParser.QuestionMark);
				this.state = 417;
				this.match(PCREParser.PUC);
				this.state = 418;
				this.match(PCREParser.GreaterThan);
				this.state = 419;
				this.name();
				this.state = 420;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 422;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 423;
				this.match(PCREParser.LessThan);
				this.state = 424;
				this.name();
				this.state = 425;
				this.match(PCREParser.GreaterThan);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 427;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 428;
				this.match(PCREParser.SingleQuote);
				this.state = 429;
				this.name();
				this.state = 430;
				this.match(PCREParser.SingleQuote);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 432;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 433;
				this.match(PCREParser.LessThan);
				this.state = 434;
				this.number();
				this.state = 435;
				this.match(PCREParser.GreaterThan);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 437;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 438;
				this.match(PCREParser.SingleQuote);
				this.state = 439;
				this.number();
				this.state = 440;
				this.match(PCREParser.SingleQuote);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 442;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 443;
				this.match(PCREParser.LessThan);
				this.state = 444;
				this.match(PCREParser.Plus);
				this.state = 445;
				this.number();
				this.state = 446;
				this.match(PCREParser.GreaterThan);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 448;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 449;
				this.match(PCREParser.SingleQuote);
				this.state = 450;
				this.match(PCREParser.Plus);
				this.state = 451;
				this.number();
				this.state = 452;
				this.match(PCREParser.SingleQuote);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 454;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 455;
				this.match(PCREParser.LessThan);
				this.state = 456;
				this.match(PCREParser.Hyphen);
				this.state = 457;
				this.number();
				this.state = 458;
				this.match(PCREParser.GreaterThan);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 460;
				this.match(PCREParser.SubroutineOrNamedReferenceStartG);
				this.state = 461;
				this.match(PCREParser.SingleQuote);
				this.state = 462;
				this.match(PCREParser.Hyphen);
				this.state = 463;
				this.number();
				this.state = 464;
				this.match(PCREParser.SingleQuote);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PCREParser.RULE_conditional);
		let _la: number;
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 468;
				this.match(PCREParser.OpenParen);
				this.state = 469;
				this.match(PCREParser.QuestionMark);
				this.state = 470;
				this.match(PCREParser.OpenParen);
				this.state = 471;
				this.number();
				this.state = 472;
				this.match(PCREParser.CloseParen);
				this.state = 473;
				this.alternation();
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 474;
					this.match(PCREParser.Pipe);
					this.state = 475;
					this.alternation();
					}
				}

				this.state = 478;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.match(PCREParser.OpenParen);
				this.state = 481;
				this.match(PCREParser.QuestionMark);
				this.state = 482;
				this.match(PCREParser.OpenParen);
				this.state = 483;
				this.match(PCREParser.Plus);
				this.state = 484;
				this.number();
				this.state = 485;
				this.match(PCREParser.CloseParen);
				this.state = 486;
				this.alternation();
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 487;
					this.match(PCREParser.Pipe);
					this.state = 488;
					this.alternation();
					}
				}

				this.state = 491;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 493;
				this.match(PCREParser.OpenParen);
				this.state = 494;
				this.match(PCREParser.QuestionMark);
				this.state = 495;
				this.match(PCREParser.OpenParen);
				this.state = 496;
				this.match(PCREParser.Hyphen);
				this.state = 497;
				this.number();
				this.state = 498;
				this.match(PCREParser.CloseParen);
				this.state = 499;
				this.alternation();
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 500;
					this.match(PCREParser.Pipe);
					this.state = 501;
					this.alternation();
					}
				}

				this.state = 504;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 506;
				this.match(PCREParser.OpenParen);
				this.state = 507;
				this.match(PCREParser.QuestionMark);
				this.state = 508;
				this.match(PCREParser.OpenParen);
				this.state = 509;
				this.match(PCREParser.LessThan);
				this.state = 510;
				this.name();
				this.state = 511;
				this.match(PCREParser.GreaterThan);
				this.state = 512;
				this.match(PCREParser.CloseParen);
				this.state = 513;
				this.alternation();
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 514;
					this.match(PCREParser.Pipe);
					this.state = 515;
					this.alternation();
					}
				}

				this.state = 518;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 520;
				this.match(PCREParser.OpenParen);
				this.state = 521;
				this.match(PCREParser.QuestionMark);
				this.state = 522;
				this.match(PCREParser.OpenParen);
				this.state = 523;
				this.match(PCREParser.SingleQuote);
				this.state = 524;
				this.name();
				this.state = 525;
				this.match(PCREParser.SingleQuote);
				this.state = 526;
				this.match(PCREParser.CloseParen);
				this.state = 527;
				this.alternation();
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 528;
					this.match(PCREParser.Pipe);
					this.state = 529;
					this.alternation();
					}
				}

				this.state = 532;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 534;
				this.match(PCREParser.OpenParen);
				this.state = 535;
				this.match(PCREParser.QuestionMark);
				this.state = 536;
				this.match(PCREParser.OpenParen);
				this.state = 537;
				this.match(PCREParser.RUC);
				this.state = 538;
				this.number();
				this.state = 539;
				this.match(PCREParser.CloseParen);
				this.state = 540;
				this.alternation();
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 541;
					this.match(PCREParser.Pipe);
					this.state = 542;
					this.alternation();
					}
				}

				this.state = 545;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 547;
				this.match(PCREParser.OpenParen);
				this.state = 548;
				this.match(PCREParser.QuestionMark);
				this.state = 549;
				this.match(PCREParser.OpenParen);
				this.state = 550;
				this.match(PCREParser.RUC);
				this.state = 551;
				this.match(PCREParser.CloseParen);
				this.state = 552;
				this.alternation();
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 553;
					this.match(PCREParser.Pipe);
					this.state = 554;
					this.alternation();
					}
				}

				this.state = 557;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 559;
				this.match(PCREParser.OpenParen);
				this.state = 560;
				this.match(PCREParser.QuestionMark);
				this.state = 561;
				this.match(PCREParser.OpenParen);
				this.state = 562;
				this.match(PCREParser.RUC);
				this.state = 563;
				this.match(PCREParser.Ampersand);
				this.state = 564;
				this.name();
				this.state = 565;
				this.match(PCREParser.CloseParen);
				this.state = 566;
				this.alternation();
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 567;
					this.match(PCREParser.Pipe);
					this.state = 568;
					this.alternation();
					}
				}

				this.state = 571;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 573;
				this.match(PCREParser.OpenParen);
				this.state = 574;
				this.match(PCREParser.QuestionMark);
				this.state = 575;
				this.match(PCREParser.OpenParen);
				this.state = 576;
				this.match(PCREParser.DUC);
				this.state = 577;
				this.match(PCREParser.EUC);
				this.state = 578;
				this.match(PCREParser.FUC);
				this.state = 579;
				this.match(PCREParser.IUC);
				this.state = 580;
				this.match(PCREParser.NUC);
				this.state = 581;
				this.match(PCREParser.EUC);
				this.state = 582;
				this.match(PCREParser.CloseParen);
				this.state = 583;
				this.alternation();
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 584;
					this.match(PCREParser.Pipe);
					this.state = 585;
					this.alternation();
					}
				}

				this.state = 588;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 590;
				this.match(PCREParser.OpenParen);
				this.state = 591;
				this.match(PCREParser.QuestionMark);
				this.state = 592;
				this.match(PCREParser.OpenParen);
				this.state = 593;
				this.match(PCREParser.ALC);
				this.state = 594;
				this.match(PCREParser.SLC);
				this.state = 595;
				this.match(PCREParser.SLC);
				this.state = 596;
				this.match(PCREParser.ELC);
				this.state = 597;
				this.match(PCREParser.RLC);
				this.state = 598;
				this.match(PCREParser.TLC);
				this.state = 599;
				this.match(PCREParser.CloseParen);
				this.state = 600;
				this.alternation();
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 601;
					this.match(PCREParser.Pipe);
					this.state = 602;
					this.alternation();
					}
				}

				this.state = 605;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 607;
				this.match(PCREParser.OpenParen);
				this.state = 608;
				this.match(PCREParser.QuestionMark);
				this.state = 609;
				this.match(PCREParser.OpenParen);
				this.state = 610;
				this.name();
				this.state = 611;
				this.match(PCREParser.CloseParen);
				this.state = 612;
				this.alternation();
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.Pipe) {
					{
					this.state = 613;
					this.match(PCREParser.Pipe);
					this.state = 614;
					this.alternation();
					}
				}

				this.state = 617;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public backtrack_control(): Backtrack_controlContext {
		let _localctx: Backtrack_controlContext = new Backtrack_controlContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PCREParser.RULE_backtrack_control);
		let _la: number;
		try {
			this.state = 721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 621;
				this.match(PCREParser.OpenParen);
				this.state = 622;
				this.match(PCREParser.Star);
				this.state = 623;
				this.match(PCREParser.AUC);
				this.state = 624;
				this.match(PCREParser.CUC);
				this.state = 625;
				this.match(PCREParser.CUC);
				this.state = 626;
				this.match(PCREParser.EUC);
				this.state = 627;
				this.match(PCREParser.PUC);
				this.state = 628;
				this.match(PCREParser.TUC);
				this.state = 629;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 630;
				this.match(PCREParser.OpenParen);
				this.state = 631;
				this.match(PCREParser.Star);
				this.state = 632;
				this.match(PCREParser.FUC);
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.AUC) {
					{
					this.state = 633;
					this.match(PCREParser.AUC);
					this.state = 634;
					this.match(PCREParser.IUC);
					this.state = 635;
					this.match(PCREParser.LUC);
					}
				}

				this.state = 638;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 639;
				this.match(PCREParser.OpenParen);
				this.state = 640;
				this.match(PCREParser.Star);
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PCREParser.MUC) {
					{
					this.state = 641;
					this.match(PCREParser.MUC);
					this.state = 642;
					this.match(PCREParser.AUC);
					this.state = 643;
					this.match(PCREParser.RUC);
					this.state = 644;
					this.match(PCREParser.KUC);
					}
				}

				this.state = 647;
				this.match(PCREParser.Colon);
				this.state = 648;
				this.match(PCREParser.NUC);
				this.state = 649;
				this.match(PCREParser.AUC);
				this.state = 650;
				this.match(PCREParser.MUC);
				this.state = 651;
				this.match(PCREParser.EUC);
				this.state = 652;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 653;
				this.match(PCREParser.OpenParen);
				this.state = 654;
				this.match(PCREParser.Star);
				this.state = 655;
				this.match(PCREParser.CUC);
				this.state = 656;
				this.match(PCREParser.OUC);
				this.state = 657;
				this.match(PCREParser.MUC);
				this.state = 658;
				this.match(PCREParser.MUC);
				this.state = 659;
				this.match(PCREParser.IUC);
				this.state = 660;
				this.match(PCREParser.TUC);
				this.state = 661;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 662;
				this.match(PCREParser.OpenParen);
				this.state = 663;
				this.match(PCREParser.Star);
				this.state = 664;
				this.match(PCREParser.PUC);
				this.state = 665;
				this.match(PCREParser.RUC);
				this.state = 666;
				this.match(PCREParser.UUC);
				this.state = 667;
				this.match(PCREParser.NUC);
				this.state = 668;
				this.match(PCREParser.EUC);
				this.state = 669;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 670;
				this.match(PCREParser.OpenParen);
				this.state = 671;
				this.match(PCREParser.Star);
				this.state = 672;
				this.match(PCREParser.PUC);
				this.state = 673;
				this.match(PCREParser.RUC);
				this.state = 674;
				this.match(PCREParser.UUC);
				this.state = 675;
				this.match(PCREParser.NUC);
				this.state = 676;
				this.match(PCREParser.EUC);
				this.state = 677;
				this.match(PCREParser.Colon);
				this.state = 678;
				this.match(PCREParser.NUC);
				this.state = 679;
				this.match(PCREParser.AUC);
				this.state = 680;
				this.match(PCREParser.MUC);
				this.state = 681;
				this.match(PCREParser.EUC);
				this.state = 682;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 683;
				this.match(PCREParser.OpenParen);
				this.state = 684;
				this.match(PCREParser.Star);
				this.state = 685;
				this.match(PCREParser.SUC);
				this.state = 686;
				this.match(PCREParser.KUC);
				this.state = 687;
				this.match(PCREParser.IUC);
				this.state = 688;
				this.match(PCREParser.PUC);
				this.state = 689;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 690;
				this.match(PCREParser.OpenParen);
				this.state = 691;
				this.match(PCREParser.Star);
				this.state = 692;
				this.match(PCREParser.SUC);
				this.state = 693;
				this.match(PCREParser.KUC);
				this.state = 694;
				this.match(PCREParser.IUC);
				this.state = 695;
				this.match(PCREParser.PUC);
				this.state = 696;
				this.match(PCREParser.Colon);
				this.state = 697;
				this.match(PCREParser.NUC);
				this.state = 698;
				this.match(PCREParser.AUC);
				this.state = 699;
				this.match(PCREParser.MUC);
				this.state = 700;
				this.match(PCREParser.EUC);
				this.state = 701;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 702;
				this.match(PCREParser.OpenParen);
				this.state = 703;
				this.match(PCREParser.Star);
				this.state = 704;
				this.match(PCREParser.TUC);
				this.state = 705;
				this.match(PCREParser.HUC);
				this.state = 706;
				this.match(PCREParser.EUC);
				this.state = 707;
				this.match(PCREParser.NUC);
				this.state = 708;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 709;
				this.match(PCREParser.OpenParen);
				this.state = 710;
				this.match(PCREParser.Star);
				this.state = 711;
				this.match(PCREParser.TUC);
				this.state = 712;
				this.match(PCREParser.HUC);
				this.state = 713;
				this.match(PCREParser.EUC);
				this.state = 714;
				this.match(PCREParser.NUC);
				this.state = 715;
				this.match(PCREParser.Colon);
				this.state = 716;
				this.match(PCREParser.NUC);
				this.state = 717;
				this.match(PCREParser.AUC);
				this.state = 718;
				this.match(PCREParser.MUC);
				this.state = 719;
				this.match(PCREParser.EUC);
				this.state = 720;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newline_convention(): Newline_conventionContext {
		let _localctx: Newline_conventionContext = new Newline_conventionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PCREParser.RULE_newline_convention);
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 723;
				this.match(PCREParser.OpenParen);
				this.state = 724;
				this.match(PCREParser.Star);
				this.state = 725;
				this.match(PCREParser.CUC);
				this.state = 726;
				this.match(PCREParser.RUC);
				this.state = 727;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 728;
				this.match(PCREParser.OpenParen);
				this.state = 729;
				this.match(PCREParser.Star);
				this.state = 730;
				this.match(PCREParser.LUC);
				this.state = 731;
				this.match(PCREParser.FUC);
				this.state = 732;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 733;
				this.match(PCREParser.OpenParen);
				this.state = 734;
				this.match(PCREParser.Star);
				this.state = 735;
				this.match(PCREParser.CUC);
				this.state = 736;
				this.match(PCREParser.RUC);
				this.state = 737;
				this.match(PCREParser.LUC);
				this.state = 738;
				this.match(PCREParser.FUC);
				this.state = 739;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 740;
				this.match(PCREParser.OpenParen);
				this.state = 741;
				this.match(PCREParser.Star);
				this.state = 742;
				this.match(PCREParser.AUC);
				this.state = 743;
				this.match(PCREParser.NUC);
				this.state = 744;
				this.match(PCREParser.YUC);
				this.state = 745;
				this.match(PCREParser.CUC);
				this.state = 746;
				this.match(PCREParser.RUC);
				this.state = 747;
				this.match(PCREParser.LUC);
				this.state = 748;
				this.match(PCREParser.FUC);
				this.state = 749;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 750;
				this.match(PCREParser.OpenParen);
				this.state = 751;
				this.match(PCREParser.Star);
				this.state = 752;
				this.match(PCREParser.AUC);
				this.state = 753;
				this.match(PCREParser.NUC);
				this.state = 754;
				this.match(PCREParser.YUC);
				this.state = 755;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 756;
				this.match(PCREParser.OpenParen);
				this.state = 757;
				this.match(PCREParser.Star);
				this.state = 758;
				this.match(PCREParser.BUC);
				this.state = 759;
				this.match(PCREParser.SUC);
				this.state = 760;
				this.match(PCREParser.RUC);
				this.state = 761;
				this.match(PCREParser.Underscore);
				this.state = 762;
				this.match(PCREParser.AUC);
				this.state = 763;
				this.match(PCREParser.NUC);
				this.state = 764;
				this.match(PCREParser.YUC);
				this.state = 765;
				this.match(PCREParser.CUC);
				this.state = 766;
				this.match(PCREParser.RUC);
				this.state = 767;
				this.match(PCREParser.LUC);
				this.state = 768;
				this.match(PCREParser.FUC);
				this.state = 769;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 770;
				this.match(PCREParser.OpenParen);
				this.state = 771;
				this.match(PCREParser.Star);
				this.state = 772;
				this.match(PCREParser.BUC);
				this.state = 773;
				this.match(PCREParser.SUC);
				this.state = 774;
				this.match(PCREParser.RUC);
				this.state = 775;
				this.match(PCREParser.Underscore);
				this.state = 776;
				this.match(PCREParser.UUC);
				this.state = 777;
				this.match(PCREParser.NUC);
				this.state = 778;
				this.match(PCREParser.IUC);
				this.state = 779;
				this.match(PCREParser.CUC);
				this.state = 780;
				this.match(PCREParser.OUC);
				this.state = 781;
				this.match(PCREParser.DUC);
				this.state = 782;
				this.match(PCREParser.EUC);
				this.state = 783;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callout(): CalloutContext {
		let _localctx: CalloutContext = new CalloutContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PCREParser.RULE_callout);
		try {
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 786;
				this.match(PCREParser.OpenParen);
				this.state = 787;
				this.match(PCREParser.QuestionMark);
				this.state = 788;
				this.match(PCREParser.CUC);
				this.state = 789;
				this.match(PCREParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this.match(PCREParser.OpenParen);
				this.state = 791;
				this.match(PCREParser.QuestionMark);
				this.state = 792;
				this.match(PCREParser.CUC);
				this.state = 793;
				this.number();
				this.state = 794;
				this.match(PCREParser.CloseParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PCREParser.RULE_atom);
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 798;
				this.subroutine_reference();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 799;
				this.shared_atom();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 800;
				this.literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 801;
				this.character_class();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 802;
				this.capture();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 803;
				this.non_capture();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 804;
				this.comment();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 805;
				this.option();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 806;
				this.look_around();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 807;
				this.backreference();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 808;
				this.conditional();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 809;
				this.backtrack_control();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 810;
				this.newline_convention();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 811;
				this.callout();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 812;
				this.match(PCREParser.Dot);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 813;
				this.match(PCREParser.Caret);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 814;
				this.match(PCREParser.StartOfSubject);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 815;
				this.match(PCREParser.WordBoundary);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 816;
				this.match(PCREParser.NonWordBoundary);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 817;
				this.match(PCREParser.EndOfSubjectOrLine);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 818;
				this.match(PCREParser.EndOfSubjectOrLineEndOfSubject);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 819;
				this.match(PCREParser.EndOfSubject);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 820;
				this.match(PCREParser.PreviousMatchInSubject);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 821;
				this.match(PCREParser.ResetStartMatch);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 822;
				this.match(PCREParser.OneDataUnit);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 823;
				this.match(PCREParser.ExtendedUnicodeChar);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cc_atom(): Cc_atomContext {
		let _localctx: Cc_atomContext = new Cc_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PCREParser.RULE_cc_atom);
		try {
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 826;
				this.cc_literal();
				this.state = 827;
				this.match(PCREParser.Hyphen);
				this.state = 828;
				this.cc_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 830;
				this.shared_atom();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 831;
				this.cc_literal();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 832;
				this.backreference_or_octal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shared_atom(): Shared_atomContext {
		let _localctx: Shared_atomContext = new Shared_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PCREParser.RULE_shared_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			_la = this._input.LA(1);
			if (!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (PCREParser.ControlChar - 4)) | (1 << (PCREParser.DecimalDigit - 4)) | (1 << (PCREParser.NotDecimalDigit - 4)) | (1 << (PCREParser.HorizontalWhiteSpace - 4)) | (1 << (PCREParser.NotHorizontalWhiteSpace - 4)) | (1 << (PCREParser.NotNewLine - 4)) | (1 << (PCREParser.CharWithProperty - 4)) | (1 << (PCREParser.CharWithoutProperty - 4)) | (1 << (PCREParser.NewLineSequence - 4)) | (1 << (PCREParser.WhiteSpace - 4)) | (1 << (PCREParser.NotWhiteSpace - 4)) | (1 << (PCREParser.VerticalWhiteSpace - 4)) | (1 << (PCREParser.NotVerticalWhiteSpace - 4)) | (1 << (PCREParser.WordChar - 4)) | (1 << (PCREParser.NotWordChar - 4)) | (1 << (PCREParser.POSIXNamedSet - 4)) | (1 << (PCREParser.POSIXNegatedNamedSet - 4)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PCREParser.RULE_literal);
		try {
			this.state = 839;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PCREParser.Quoted:
			case PCREParser.BlockQuoted:
			case PCREParser.BellChar:
			case PCREParser.EscapeChar:
			case PCREParser.FormFeed:
			case PCREParser.NewLine:
			case PCREParser.CarriageReturn:
			case PCREParser.Tab:
			case PCREParser.Backslash:
			case PCREParser.HexChar:
			case PCREParser.Hyphen:
			case PCREParser.OpenBrace:
			case PCREParser.CloseBrace:
			case PCREParser.Comma:
			case PCREParser.LessThan:
			case PCREParser.GreaterThan:
			case PCREParser.SingleQuote:
			case PCREParser.Underscore:
			case PCREParser.Colon:
			case PCREParser.Hash:
			case PCREParser.Equals:
			case PCREParser.Exclamation:
			case PCREParser.Ampersand:
			case PCREParser.ALC:
			case PCREParser.BLC:
			case PCREParser.CLC:
			case PCREParser.DLC:
			case PCREParser.ELC:
			case PCREParser.FLC:
			case PCREParser.GLC:
			case PCREParser.HLC:
			case PCREParser.ILC:
			case PCREParser.JLC:
			case PCREParser.KLC:
			case PCREParser.LLC:
			case PCREParser.MLC:
			case PCREParser.NLC:
			case PCREParser.OLC:
			case PCREParser.PLC:
			case PCREParser.QLC:
			case PCREParser.RLC:
			case PCREParser.SLC:
			case PCREParser.TLC:
			case PCREParser.ULC:
			case PCREParser.VLC:
			case PCREParser.WLC:
			case PCREParser.XLC:
			case PCREParser.YLC:
			case PCREParser.ZLC:
			case PCREParser.AUC:
			case PCREParser.BUC:
			case PCREParser.CUC:
			case PCREParser.DUC:
			case PCREParser.EUC:
			case PCREParser.FUC:
			case PCREParser.GUC:
			case PCREParser.HUC:
			case PCREParser.IUC:
			case PCREParser.JUC:
			case PCREParser.KUC:
			case PCREParser.LUC:
			case PCREParser.MUC:
			case PCREParser.NUC:
			case PCREParser.OUC:
			case PCREParser.PUC:
			case PCREParser.QUC:
			case PCREParser.RUC:
			case PCREParser.SUC:
			case PCREParser.TUC:
			case PCREParser.UUC:
			case PCREParser.VUC:
			case PCREParser.WUC:
			case PCREParser.XUC:
			case PCREParser.YUC:
			case PCREParser.ZUC:
			case PCREParser.D1:
			case PCREParser.D2:
			case PCREParser.D3:
			case PCREParser.D4:
			case PCREParser.D5:
			case PCREParser.D6:
			case PCREParser.D7:
			case PCREParser.D8:
			case PCREParser.D9:
			case PCREParser.D0:
			case PCREParser.OtherChar:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 837;
				this.shared_literal();
				}
				break;
			case PCREParser.CharacterClassEnd:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 838;
				this.match(PCREParser.CharacterClassEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cc_literal(): Cc_literalContext {
		let _localctx: Cc_literalContext = new Cc_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PCREParser.RULE_cc_literal);
		try {
			this.state = 853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PCREParser.Quoted:
			case PCREParser.BlockQuoted:
			case PCREParser.BellChar:
			case PCREParser.EscapeChar:
			case PCREParser.FormFeed:
			case PCREParser.NewLine:
			case PCREParser.CarriageReturn:
			case PCREParser.Tab:
			case PCREParser.Backslash:
			case PCREParser.HexChar:
			case PCREParser.Hyphen:
			case PCREParser.OpenBrace:
			case PCREParser.CloseBrace:
			case PCREParser.Comma:
			case PCREParser.LessThan:
			case PCREParser.GreaterThan:
			case PCREParser.SingleQuote:
			case PCREParser.Underscore:
			case PCREParser.Colon:
			case PCREParser.Hash:
			case PCREParser.Equals:
			case PCREParser.Exclamation:
			case PCREParser.Ampersand:
			case PCREParser.ALC:
			case PCREParser.BLC:
			case PCREParser.CLC:
			case PCREParser.DLC:
			case PCREParser.ELC:
			case PCREParser.FLC:
			case PCREParser.GLC:
			case PCREParser.HLC:
			case PCREParser.ILC:
			case PCREParser.JLC:
			case PCREParser.KLC:
			case PCREParser.LLC:
			case PCREParser.MLC:
			case PCREParser.NLC:
			case PCREParser.OLC:
			case PCREParser.PLC:
			case PCREParser.QLC:
			case PCREParser.RLC:
			case PCREParser.SLC:
			case PCREParser.TLC:
			case PCREParser.ULC:
			case PCREParser.VLC:
			case PCREParser.WLC:
			case PCREParser.XLC:
			case PCREParser.YLC:
			case PCREParser.ZLC:
			case PCREParser.AUC:
			case PCREParser.BUC:
			case PCREParser.CUC:
			case PCREParser.DUC:
			case PCREParser.EUC:
			case PCREParser.FUC:
			case PCREParser.GUC:
			case PCREParser.HUC:
			case PCREParser.IUC:
			case PCREParser.JUC:
			case PCREParser.KUC:
			case PCREParser.LUC:
			case PCREParser.MUC:
			case PCREParser.NUC:
			case PCREParser.OUC:
			case PCREParser.PUC:
			case PCREParser.QUC:
			case PCREParser.RUC:
			case PCREParser.SUC:
			case PCREParser.TUC:
			case PCREParser.UUC:
			case PCREParser.VUC:
			case PCREParser.WUC:
			case PCREParser.XUC:
			case PCREParser.YUC:
			case PCREParser.ZUC:
			case PCREParser.D1:
			case PCREParser.D2:
			case PCREParser.D3:
			case PCREParser.D4:
			case PCREParser.D5:
			case PCREParser.D6:
			case PCREParser.D7:
			case PCREParser.D8:
			case PCREParser.D9:
			case PCREParser.D0:
			case PCREParser.OtherChar:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 841;
				this.shared_literal();
				}
				break;
			case PCREParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 842;
				this.match(PCREParser.Dot);
				}
				break;
			case PCREParser.CharacterClassStart:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 843;
				this.match(PCREParser.CharacterClassStart);
				}
				break;
			case PCREParser.Caret:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 844;
				this.match(PCREParser.Caret);
				}
				break;
			case PCREParser.QuestionMark:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 845;
				this.match(PCREParser.QuestionMark);
				}
				break;
			case PCREParser.Plus:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 846;
				this.match(PCREParser.Plus);
				}
				break;
			case PCREParser.Star:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 847;
				this.match(PCREParser.Star);
				}
				break;
			case PCREParser.WordBoundary:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 848;
				this.match(PCREParser.WordBoundary);
				}
				break;
			case PCREParser.EndOfSubjectOrLine:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 849;
				this.match(PCREParser.EndOfSubjectOrLine);
				}
				break;
			case PCREParser.Pipe:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 850;
				this.match(PCREParser.Pipe);
				}
				break;
			case PCREParser.OpenParen:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 851;
				this.match(PCREParser.OpenParen);
				}
				break;
			case PCREParser.CloseParen:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 852;
				this.match(PCREParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shared_literal(): Shared_literalContext {
		let _localctx: Shared_literalContext = new Shared_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PCREParser.RULE_shared_literal);
		try {
			this.state = 881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PCREParser.Backslash:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 855;
				this.octal_char();
				}
				break;
			case PCREParser.ALC:
			case PCREParser.BLC:
			case PCREParser.CLC:
			case PCREParser.DLC:
			case PCREParser.ELC:
			case PCREParser.FLC:
			case PCREParser.GLC:
			case PCREParser.HLC:
			case PCREParser.ILC:
			case PCREParser.JLC:
			case PCREParser.KLC:
			case PCREParser.LLC:
			case PCREParser.MLC:
			case PCREParser.NLC:
			case PCREParser.OLC:
			case PCREParser.PLC:
			case PCREParser.QLC:
			case PCREParser.RLC:
			case PCREParser.SLC:
			case PCREParser.TLC:
			case PCREParser.ULC:
			case PCREParser.VLC:
			case PCREParser.WLC:
			case PCREParser.XLC:
			case PCREParser.YLC:
			case PCREParser.ZLC:
			case PCREParser.AUC:
			case PCREParser.BUC:
			case PCREParser.CUC:
			case PCREParser.DUC:
			case PCREParser.EUC:
			case PCREParser.FUC:
			case PCREParser.GUC:
			case PCREParser.HUC:
			case PCREParser.IUC:
			case PCREParser.JUC:
			case PCREParser.KUC:
			case PCREParser.LUC:
			case PCREParser.MUC:
			case PCREParser.NUC:
			case PCREParser.OUC:
			case PCREParser.PUC:
			case PCREParser.QUC:
			case PCREParser.RUC:
			case PCREParser.SUC:
			case PCREParser.TUC:
			case PCREParser.UUC:
			case PCREParser.VUC:
			case PCREParser.WUC:
			case PCREParser.XUC:
			case PCREParser.YUC:
			case PCREParser.ZUC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 856;
				this.letter();
				}
				break;
			case PCREParser.D1:
			case PCREParser.D2:
			case PCREParser.D3:
			case PCREParser.D4:
			case PCREParser.D5:
			case PCREParser.D6:
			case PCREParser.D7:
			case PCREParser.D8:
			case PCREParser.D9:
			case PCREParser.D0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 857;
				this.digit();
				}
				break;
			case PCREParser.BellChar:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 858;
				this.match(PCREParser.BellChar);
				}
				break;
			case PCREParser.EscapeChar:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 859;
				this.match(PCREParser.EscapeChar);
				}
				break;
			case PCREParser.FormFeed:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 860;
				this.match(PCREParser.FormFeed);
				}
				break;
			case PCREParser.NewLine:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 861;
				this.match(PCREParser.NewLine);
				}
				break;
			case PCREParser.CarriageReturn:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 862;
				this.match(PCREParser.CarriageReturn);
				}
				break;
			case PCREParser.Tab:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 863;
				this.match(PCREParser.Tab);
				}
				break;
			case PCREParser.HexChar:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 864;
				this.match(PCREParser.HexChar);
				}
				break;
			case PCREParser.Quoted:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 865;
				this.match(PCREParser.Quoted);
				}
				break;
			case PCREParser.BlockQuoted:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 866;
				this.match(PCREParser.BlockQuoted);
				}
				break;
			case PCREParser.OpenBrace:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 867;
				this.match(PCREParser.OpenBrace);
				}
				break;
			case PCREParser.CloseBrace:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 868;
				this.match(PCREParser.CloseBrace);
				}
				break;
			case PCREParser.Comma:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 869;
				this.match(PCREParser.Comma);
				}
				break;
			case PCREParser.Hyphen:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 870;
				this.match(PCREParser.Hyphen);
				}
				break;
			case PCREParser.LessThan:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 871;
				this.match(PCREParser.LessThan);
				}
				break;
			case PCREParser.GreaterThan:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 872;
				this.match(PCREParser.GreaterThan);
				}
				break;
			case PCREParser.SingleQuote:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 873;
				this.match(PCREParser.SingleQuote);
				}
				break;
			case PCREParser.Underscore:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 874;
				this.match(PCREParser.Underscore);
				}
				break;
			case PCREParser.Colon:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 875;
				this.match(PCREParser.Colon);
				}
				break;
			case PCREParser.Hash:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 876;
				this.match(PCREParser.Hash);
				}
				break;
			case PCREParser.Equals:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 877;
				this.match(PCREParser.Equals);
				}
				break;
			case PCREParser.Exclamation:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 878;
				this.match(PCREParser.Exclamation);
				}
				break;
			case PCREParser.Ampersand:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 879;
				this.match(PCREParser.Ampersand);
				}
				break;
			case PCREParser.OtherChar:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 880;
				this.match(PCREParser.OtherChar);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PCREParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this.digits();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octal_char(): Octal_charContext {
		let _localctx: Octal_charContext = new Octal_charContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PCREParser.RULE_octal_char);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 885;
				this.match(PCREParser.Backslash);
				this.state = 886;
				_la = this._input.LA(1);
				if (!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (PCREParser.D1 - 115)) | (1 << (PCREParser.D2 - 115)) | (1 << (PCREParser.D3 - 115)) | (1 << (PCREParser.D0 - 115)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 887;
				this.octal_digit();
				this.state = 888;
				this.octal_digit();
				}
				break;

			case 2:
				{
				this.state = 890;
				this.match(PCREParser.Backslash);
				this.state = 891;
				this.octal_digit();
				this.state = 892;
				this.octal_digit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octal_digit(): Octal_digitContext {
		let _localctx: Octal_digitContext = new Octal_digitContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, PCREParser.RULE_octal_digit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 896;
			_la = this._input.LA(1);
			if (!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (PCREParser.D1 - 115)) | (1 << (PCREParser.D2 - 115)) | (1 << (PCREParser.D3 - 115)) | (1 << (PCREParser.D4 - 115)) | (1 << (PCREParser.D5 - 115)) | (1 << (PCREParser.D6 - 115)) | (1 << (PCREParser.D7 - 115)) | (1 << (PCREParser.D0 - 115)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public digits(): DigitsContext {
		let _localctx: DigitsContext = new DigitsContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, PCREParser.RULE_digits);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 898;
					this.digit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 901;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public digit(): DigitContext {
		let _localctx: DigitContext = new DigitContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PCREParser.RULE_digit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			_la = this._input.LA(1);
			if (!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (PCREParser.D1 - 115)) | (1 << (PCREParser.D2 - 115)) | (1 << (PCREParser.D3 - 115)) | (1 << (PCREParser.D4 - 115)) | (1 << (PCREParser.D5 - 115)) | (1 << (PCREParser.D6 - 115)) | (1 << (PCREParser.D7 - 115)) | (1 << (PCREParser.D8 - 115)) | (1 << (PCREParser.D9 - 115)) | (1 << (PCREParser.D0 - 115)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PCREParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.alpha_nums();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alpha_nums(): Alpha_numsContext {
		let _localctx: Alpha_numsContext = new Alpha_numsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, PCREParser.RULE_alpha_nums);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PCREParser.ALC:
			case PCREParser.BLC:
			case PCREParser.CLC:
			case PCREParser.DLC:
			case PCREParser.ELC:
			case PCREParser.FLC:
			case PCREParser.GLC:
			case PCREParser.HLC:
			case PCREParser.ILC:
			case PCREParser.JLC:
			case PCREParser.KLC:
			case PCREParser.LLC:
			case PCREParser.MLC:
			case PCREParser.NLC:
			case PCREParser.OLC:
			case PCREParser.PLC:
			case PCREParser.QLC:
			case PCREParser.RLC:
			case PCREParser.SLC:
			case PCREParser.TLC:
			case PCREParser.ULC:
			case PCREParser.VLC:
			case PCREParser.WLC:
			case PCREParser.XLC:
			case PCREParser.YLC:
			case PCREParser.ZLC:
			case PCREParser.AUC:
			case PCREParser.BUC:
			case PCREParser.CUC:
			case PCREParser.DUC:
			case PCREParser.EUC:
			case PCREParser.FUC:
			case PCREParser.GUC:
			case PCREParser.HUC:
			case PCREParser.IUC:
			case PCREParser.JUC:
			case PCREParser.KUC:
			case PCREParser.LUC:
			case PCREParser.MUC:
			case PCREParser.NUC:
			case PCREParser.OUC:
			case PCREParser.PUC:
			case PCREParser.QUC:
			case PCREParser.RUC:
			case PCREParser.SUC:
			case PCREParser.TUC:
			case PCREParser.UUC:
			case PCREParser.VUC:
			case PCREParser.WUC:
			case PCREParser.XUC:
			case PCREParser.YUC:
			case PCREParser.ZUC:
				{
				this.state = 907;
				this.letter();
				}
				break;
			case PCREParser.Underscore:
				{
				this.state = 908;
				this.match(PCREParser.Underscore);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (PCREParser.Underscore - 57)) | (1 << (PCREParser.ALC - 57)) | (1 << (PCREParser.BLC - 57)) | (1 << (PCREParser.CLC - 57)) | (1 << (PCREParser.DLC - 57)) | (1 << (PCREParser.ELC - 57)) | (1 << (PCREParser.FLC - 57)) | (1 << (PCREParser.GLC - 57)) | (1 << (PCREParser.HLC - 57)) | (1 << (PCREParser.ILC - 57)) | (1 << (PCREParser.JLC - 57)) | (1 << (PCREParser.KLC - 57)) | (1 << (PCREParser.LLC - 57)) | (1 << (PCREParser.MLC - 57)) | (1 << (PCREParser.NLC - 57)) | (1 << (PCREParser.OLC - 57)) | (1 << (PCREParser.PLC - 57)) | (1 << (PCREParser.QLC - 57)) | (1 << (PCREParser.RLC - 57)) | (1 << (PCREParser.SLC - 57)) | (1 << (PCREParser.TLC - 57)) | (1 << (PCREParser.ULC - 57)) | (1 << (PCREParser.VLC - 57)) | (1 << (PCREParser.WLC - 57)) | (1 << (PCREParser.XLC - 57)) | (1 << (PCREParser.YLC - 57)) | (1 << (PCREParser.ZLC - 57)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (PCREParser.AUC - 89)) | (1 << (PCREParser.BUC - 89)) | (1 << (PCREParser.CUC - 89)) | (1 << (PCREParser.DUC - 89)) | (1 << (PCREParser.EUC - 89)) | (1 << (PCREParser.FUC - 89)) | (1 << (PCREParser.GUC - 89)) | (1 << (PCREParser.HUC - 89)) | (1 << (PCREParser.IUC - 89)) | (1 << (PCREParser.JUC - 89)) | (1 << (PCREParser.KUC - 89)) | (1 << (PCREParser.LUC - 89)) | (1 << (PCREParser.MUC - 89)) | (1 << (PCREParser.NUC - 89)) | (1 << (PCREParser.OUC - 89)) | (1 << (PCREParser.PUC - 89)) | (1 << (PCREParser.QUC - 89)) | (1 << (PCREParser.RUC - 89)) | (1 << (PCREParser.SUC - 89)) | (1 << (PCREParser.TUC - 89)) | (1 << (PCREParser.UUC - 89)) | (1 << (PCREParser.VUC - 89)) | (1 << (PCREParser.WUC - 89)) | (1 << (PCREParser.XUC - 89)) | (1 << (PCREParser.YUC - 89)) | (1 << (PCREParser.ZUC - 89)) | (1 << (PCREParser.D1 - 89)) | (1 << (PCREParser.D2 - 89)) | (1 << (PCREParser.D3 - 89)) | (1 << (PCREParser.D4 - 89)) | (1 << (PCREParser.D5 - 89)) | (1 << (PCREParser.D6 - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (PCREParser.D7 - 121)) | (1 << (PCREParser.D8 - 121)) | (1 << (PCREParser.D9 - 121)) | (1 << (PCREParser.D0 - 121)))) !== 0)) {
				{
				this.state = 914;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PCREParser.ALC:
				case PCREParser.BLC:
				case PCREParser.CLC:
				case PCREParser.DLC:
				case PCREParser.ELC:
				case PCREParser.FLC:
				case PCREParser.GLC:
				case PCREParser.HLC:
				case PCREParser.ILC:
				case PCREParser.JLC:
				case PCREParser.KLC:
				case PCREParser.LLC:
				case PCREParser.MLC:
				case PCREParser.NLC:
				case PCREParser.OLC:
				case PCREParser.PLC:
				case PCREParser.QLC:
				case PCREParser.RLC:
				case PCREParser.SLC:
				case PCREParser.TLC:
				case PCREParser.ULC:
				case PCREParser.VLC:
				case PCREParser.WLC:
				case PCREParser.XLC:
				case PCREParser.YLC:
				case PCREParser.ZLC:
				case PCREParser.AUC:
				case PCREParser.BUC:
				case PCREParser.CUC:
				case PCREParser.DUC:
				case PCREParser.EUC:
				case PCREParser.FUC:
				case PCREParser.GUC:
				case PCREParser.HUC:
				case PCREParser.IUC:
				case PCREParser.JUC:
				case PCREParser.KUC:
				case PCREParser.LUC:
				case PCREParser.MUC:
				case PCREParser.NUC:
				case PCREParser.OUC:
				case PCREParser.PUC:
				case PCREParser.QUC:
				case PCREParser.RUC:
				case PCREParser.SUC:
				case PCREParser.TUC:
				case PCREParser.UUC:
				case PCREParser.VUC:
				case PCREParser.WUC:
				case PCREParser.XUC:
				case PCREParser.YUC:
				case PCREParser.ZUC:
					{
					this.state = 911;
					this.letter();
					}
					break;
				case PCREParser.Underscore:
					{
					this.state = 912;
					this.match(PCREParser.Underscore);
					}
					break;
				case PCREParser.D1:
				case PCREParser.D2:
				case PCREParser.D3:
				case PCREParser.D4:
				case PCREParser.D5:
				case PCREParser.D6:
				case PCREParser.D7:
				case PCREParser.D8:
				case PCREParser.D9:
				case PCREParser.D0:
					{
					this.state = 913;
					this.digit();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public non_close_parens(): Non_close_parensContext {
		let _localctx: Non_close_parensContext = new Non_close_parensContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, PCREParser.RULE_non_close_parens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 919;
				this.non_close_paren();
				}
				}
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PCREParser.Quoted) | (1 << PCREParser.BlockQuoted) | (1 << PCREParser.BellChar) | (1 << PCREParser.ControlChar) | (1 << PCREParser.EscapeChar) | (1 << PCREParser.FormFeed) | (1 << PCREParser.NewLine) | (1 << PCREParser.CarriageReturn) | (1 << PCREParser.Tab) | (1 << PCREParser.Backslash) | (1 << PCREParser.HexChar) | (1 << PCREParser.Dot) | (1 << PCREParser.OneDataUnit) | (1 << PCREParser.DecimalDigit) | (1 << PCREParser.NotDecimalDigit) | (1 << PCREParser.HorizontalWhiteSpace) | (1 << PCREParser.NotHorizontalWhiteSpace) | (1 << PCREParser.NotNewLine) | (1 << PCREParser.CharWithProperty) | (1 << PCREParser.CharWithoutProperty) | (1 << PCREParser.NewLineSequence) | (1 << PCREParser.WhiteSpace) | (1 << PCREParser.NotWhiteSpace) | (1 << PCREParser.VerticalWhiteSpace) | (1 << PCREParser.NotVerticalWhiteSpace) | (1 << PCREParser.WordChar) | (1 << PCREParser.NotWordChar) | (1 << PCREParser.ExtendedUnicodeChar) | (1 << PCREParser.CharacterClassStart) | (1 << PCREParser.CharacterClassEnd) | (1 << PCREParser.Caret))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PCREParser.Hyphen - 32)) | (1 << (PCREParser.POSIXNamedSet - 32)) | (1 << (PCREParser.POSIXNegatedNamedSet - 32)) | (1 << (PCREParser.QuestionMark - 32)) | (1 << (PCREParser.Plus - 32)) | (1 << (PCREParser.Star - 32)) | (1 << (PCREParser.OpenBrace - 32)) | (1 << (PCREParser.CloseBrace - 32)) | (1 << (PCREParser.Comma - 32)) | (1 << (PCREParser.WordBoundary - 32)) | (1 << (PCREParser.NonWordBoundary - 32)) | (1 << (PCREParser.StartOfSubject - 32)) | (1 << (PCREParser.EndOfSubjectOrLine - 32)) | (1 << (PCREParser.EndOfSubjectOrLineEndOfSubject - 32)) | (1 << (PCREParser.EndOfSubject - 32)) | (1 << (PCREParser.PreviousMatchInSubject - 32)) | (1 << (PCREParser.ResetStartMatch - 32)) | (1 << (PCREParser.SubroutineOrNamedReferenceStartG - 32)) | (1 << (PCREParser.NamedReferenceStartK - 32)) | (1 << (PCREParser.Pipe - 32)) | (1 << (PCREParser.OpenParen - 32)) | (1 << (PCREParser.LessThan - 32)) | (1 << (PCREParser.GreaterThan - 32)) | (1 << (PCREParser.SingleQuote - 32)) | (1 << (PCREParser.Underscore - 32)) | (1 << (PCREParser.Colon - 32)) | (1 << (PCREParser.Hash - 32)) | (1 << (PCREParser.Equals - 32)) | (1 << (PCREParser.Exclamation - 32)) | (1 << (PCREParser.Ampersand - 32)) | (1 << (PCREParser.ALC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (PCREParser.BLC - 64)) | (1 << (PCREParser.CLC - 64)) | (1 << (PCREParser.DLC - 64)) | (1 << (PCREParser.ELC - 64)) | (1 << (PCREParser.FLC - 64)) | (1 << (PCREParser.GLC - 64)) | (1 << (PCREParser.HLC - 64)) | (1 << (PCREParser.ILC - 64)) | (1 << (PCREParser.JLC - 64)) | (1 << (PCREParser.KLC - 64)) | (1 << (PCREParser.LLC - 64)) | (1 << (PCREParser.MLC - 64)) | (1 << (PCREParser.NLC - 64)) | (1 << (PCREParser.OLC - 64)) | (1 << (PCREParser.PLC - 64)) | (1 << (PCREParser.QLC - 64)) | (1 << (PCREParser.RLC - 64)) | (1 << (PCREParser.SLC - 64)) | (1 << (PCREParser.TLC - 64)) | (1 << (PCREParser.ULC - 64)) | (1 << (PCREParser.VLC - 64)) | (1 << (PCREParser.WLC - 64)) | (1 << (PCREParser.XLC - 64)) | (1 << (PCREParser.YLC - 64)) | (1 << (PCREParser.ZLC - 64)) | (1 << (PCREParser.AUC - 64)) | (1 << (PCREParser.BUC - 64)) | (1 << (PCREParser.CUC - 64)) | (1 << (PCREParser.DUC - 64)) | (1 << (PCREParser.EUC - 64)) | (1 << (PCREParser.FUC - 64)) | (1 << (PCREParser.GUC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (PCREParser.HUC - 96)) | (1 << (PCREParser.IUC - 96)) | (1 << (PCREParser.JUC - 96)) | (1 << (PCREParser.KUC - 96)) | (1 << (PCREParser.LUC - 96)) | (1 << (PCREParser.MUC - 96)) | (1 << (PCREParser.NUC - 96)) | (1 << (PCREParser.OUC - 96)) | (1 << (PCREParser.PUC - 96)) | (1 << (PCREParser.QUC - 96)) | (1 << (PCREParser.RUC - 96)) | (1 << (PCREParser.SUC - 96)) | (1 << (PCREParser.TUC - 96)) | (1 << (PCREParser.UUC - 96)) | (1 << (PCREParser.VUC - 96)) | (1 << (PCREParser.WUC - 96)) | (1 << (PCREParser.XUC - 96)) | (1 << (PCREParser.YUC - 96)) | (1 << (PCREParser.ZUC - 96)) | (1 << (PCREParser.D1 - 96)) | (1 << (PCREParser.D2 - 96)) | (1 << (PCREParser.D3 - 96)) | (1 << (PCREParser.D4 - 96)) | (1 << (PCREParser.D5 - 96)) | (1 << (PCREParser.D6 - 96)) | (1 << (PCREParser.D7 - 96)) | (1 << (PCREParser.D8 - 96)) | (1 << (PCREParser.D9 - 96)) | (1 << (PCREParser.D0 - 96)) | (1 << (PCREParser.OtherChar - 96)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public non_close_paren(): Non_close_parenContext {
		let _localctx: Non_close_parenContext = new Non_close_parenContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, PCREParser.RULE_non_close_paren);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
			_la = this._input.LA(1);
			if (_la <= 0 || (_la === PCREParser.CloseParen)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letter(): LetterContext {
		let _localctx: LetterContext = new LetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, PCREParser.RULE_letter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (PCREParser.ALC - 63)) | (1 << (PCREParser.BLC - 63)) | (1 << (PCREParser.CLC - 63)) | (1 << (PCREParser.DLC - 63)) | (1 << (PCREParser.ELC - 63)) | (1 << (PCREParser.FLC - 63)) | (1 << (PCREParser.GLC - 63)) | (1 << (PCREParser.HLC - 63)) | (1 << (PCREParser.ILC - 63)) | (1 << (PCREParser.JLC - 63)) | (1 << (PCREParser.KLC - 63)) | (1 << (PCREParser.LLC - 63)) | (1 << (PCREParser.MLC - 63)) | (1 << (PCREParser.NLC - 63)) | (1 << (PCREParser.OLC - 63)) | (1 << (PCREParser.PLC - 63)) | (1 << (PCREParser.QLC - 63)) | (1 << (PCREParser.RLC - 63)) | (1 << (PCREParser.SLC - 63)) | (1 << (PCREParser.TLC - 63)) | (1 << (PCREParser.ULC - 63)) | (1 << (PCREParser.VLC - 63)) | (1 << (PCREParser.WLC - 63)) | (1 << (PCREParser.XLC - 63)) | (1 << (PCREParser.YLC - 63)) | (1 << (PCREParser.ZLC - 63)) | (1 << (PCREParser.AUC - 63)) | (1 << (PCREParser.BUC - 63)) | (1 << (PCREParser.CUC - 63)) | (1 << (PCREParser.DUC - 63)) | (1 << (PCREParser.EUC - 63)) | (1 << (PCREParser.FUC - 63)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (PCREParser.GUC - 95)) | (1 << (PCREParser.HUC - 95)) | (1 << (PCREParser.IUC - 95)) | (1 << (PCREParser.JUC - 95)) | (1 << (PCREParser.KUC - 95)) | (1 << (PCREParser.LUC - 95)) | (1 << (PCREParser.MUC - 95)) | (1 << (PCREParser.NUC - 95)) | (1 << (PCREParser.OUC - 95)) | (1 << (PCREParser.PUC - 95)) | (1 << (PCREParser.QUC - 95)) | (1 << (PCREParser.RUC - 95)) | (1 << (PCREParser.SUC - 95)) | (1 << (PCREParser.TUC - 95)) | (1 << (PCREParser.UUC - 95)) | (1 << (PCREParser.VUC - 95)) | (1 << (PCREParser.WUC - 95)) | (1 << (PCREParser.XUC - 95)) | (1 << (PCREParser.YUC - 95)) | (1 << (PCREParser.ZUC - 95)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x7F\u03A3\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x07\x03S\n\x03\f\x03\x0E\x03V\v\x03\x03\x04\x07\x04Y\n\x04\f\x04" +
		"\x0E\x04\\\v\x04\x03\x05\x03\x05\x05\x05`\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06z\n\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\x7F\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x06\b\x86\n\b\r\b\x0E\b\x87\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x90\n\b\f\b\x0E\b\x93\v\b\x03\b" +
		"\x03\b\x03\b\x03\b\x06\b\x99\n\b\r\b\x0E\b\x9A\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x06\b\xA3\n\b\r\b\x0E\b\xA4\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x07\b\xAC\n\b\f\b\x0E\b\xAF\v\b\x03\b\x03\b\x03\b\x06\b\xB4\n\b\r\b\x0E" +
		"\b\xB5\x03\b\x03\b\x05\b\xBA\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xE5" +
		"\n\t\x03\n\x03\n\x03\n\x05\n\xEA\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u0109\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\u0124\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0162\n\x0E\x03\x0F\x06\x0F\u0165\n\x0F\r\x0F\x0E\x0F\u0166" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u0185\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\u01D5\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u01DF\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01EC\n\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u01F9\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0207" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0215\n\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u0222\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u022E\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u023C\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u024D\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u025E" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u026A\n\x13\x03\x13\x03\x13\x05\x13\u026E\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u027F\n\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0288\n\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u02D4\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0313\n\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u031F\n\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u033B" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u0344\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u034A\n\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0358\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0374\n\x1C\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u0381\n\x1E\x03\x1F\x03\x1F\x03 \x06 \u0386\n \r \x0E \u0387\x03!\x03" +
		"!\x03\"\x03\"\x03#\x03#\x05#\u0390\n#\x03#\x03#\x03#\x07#\u0395\n#\f#" +
		"\x0E#\u0398\v#\x03$\x06$\u039B\n$\r$\x0E$\u039C\x03%\x03%\x03&\x03&\x03" +
		"&\x02\x02\x02\'\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02\x02\t\b\x02IIMMSSXXddoo\x05\x02\x06\x06" +
		"\x10\x1D#$\x04\x02uw~~\x04\x02u{~~\x03\x02u~\x03\x0277\x03\x02At\x02\u0427" +
		"\x02L\x03\x02\x02\x02\x04O\x03\x02\x02\x02\x06Z\x03\x02\x02\x02\b]\x03" +
		"\x02\x02\x02\ny\x03\x02\x02\x02\f~\x03\x02\x02\x02\x0E\xB9\x03\x02\x02" +
		"\x02\x10\xE4\x03\x02\x02\x02\x12\xE9\x03\x02\x02\x02\x14\u0108\x03\x02" +
		"\x02\x02\x16\u0123\x03\x02\x02\x02\x18\u0125\x03\x02\x02\x02\x1A\u0161" +
		"\x03\x02\x02\x02\x1C\u0164\x03\x02\x02\x02\x1E\u0168\x03\x02\x02\x02 " +
		"\u0184\x03\x02\x02\x02\"\u01D4\x03\x02\x02\x02$\u026D\x03\x02\x02\x02" +
		"&\u02D3\x03\x02\x02\x02(\u0312\x03\x02\x02\x02*\u031E\x03\x02\x02\x02" +
		",\u033A\x03\x02\x02\x02.\u0343\x03\x02\x02\x020\u0345\x03\x02\x02\x02" +
		"2\u0349\x03\x02\x02\x024\u0357\x03\x02\x02\x026\u0373\x03\x02\x02\x02" +
		"8\u0375\x03\x02\x02\x02:\u0380\x03\x02\x02\x02<\u0382\x03\x02\x02\x02" +
		">\u0385\x03\x02\x02\x02@\u0389\x03\x02\x02\x02B\u038B\x03\x02\x02\x02" +
		"D\u038F\x03\x02\x02\x02F\u039A\x03\x02\x02\x02H\u039E\x03\x02\x02\x02" +
		"J\u03A0\x03\x02\x02\x02LM\x05\x04\x03\x02MN\x07\x02\x02\x03N\x03\x03\x02" +
		"\x02\x02OT\x05\x06\x04\x02PQ\x075\x02\x02QS\x05\x06\x04\x02RP\x03\x02" +
		"\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x05\x03" +
		"\x02\x02\x02VT\x03\x02\x02\x02WY\x05\b\x05\x02XW\x03\x02\x02\x02Y\\\x03" +
		"\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x07\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02]_\x05,\x17\x02^`\x05\n\x06\x02_^\x03\x02\x02\x02_" +
		"`\x03\x02\x02\x02`\t\x03\x02\x02\x02ab\x07%\x02\x02bz\x05\f\x07\x02cd" +
		"\x07&\x02\x02dz\x05\f\x07\x02ef\x07\'\x02\x02fz\x05\f\x07\x02gh\x07(\x02" +
		"\x02hi\x058\x1D\x02ij\x07)\x02\x02jk\x05\f\x07\x02kz\x03\x02\x02\x02l" +
		"m\x07(\x02\x02mn\x058\x1D\x02no\x07*\x02\x02op\x07)\x02\x02pq\x05\f\x07" +
		"\x02qz\x03\x02\x02\x02rs\x07(\x02\x02st\x058\x1D\x02tu\x07*\x02\x02uv" +
		"\x058\x1D\x02vw\x07)\x02\x02wx\x05\f\x07\x02xz\x03\x02\x02\x02ya\x03\x02" +
		"\x02\x02yc\x03\x02\x02\x02ye\x03\x02\x02\x02yg\x03\x02\x02\x02yl\x03\x02" +
		"\x02\x02yr\x03\x02\x02\x02z\v\x03\x02\x02\x02{\x7F\x07&\x02\x02|\x7F\x07" +
		"%\x02\x02}\x7F\x03\x02\x02\x02~{\x03\x02\x02\x02~|\x03\x02\x02\x02~}\x03" +
		"\x02\x02\x02\x7F\r\x03\x02\x02\x02\x80\x81\x07\x1F\x02\x02\x81\x82\x07" +
		"!\x02\x02\x82\x83\x07 \x02\x02\x83\x85\x07\"\x02\x02\x84\x86\x05.\x18" +
		"\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x85\x03\x02\x02" +
		"\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x07 \x02" +
		"\x02\x8A\xBA\x03\x02\x02\x02\x8B\x8C\x07\x1F\x02\x02\x8C\x8D\x07!\x02" +
		"\x02\x8D\x91\x07 \x02\x02\x8E\x90\x05.\x18\x02\x8F\x8E\x03\x02\x02\x02" +
		"\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
		"\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\xBA\x07 \x02\x02" +
		"\x95\x96\x07\x1F\x02\x02\x96\x98\x07!\x02\x02\x97\x99\x05.\x18\x02\x98" +
		"\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A" +
		"\x9B\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x07 \x02\x02\x9D" +
		"\xBA\x03\x02\x02\x02\x9E\x9F\x07\x1F\x02\x02\x9F\xA0\x07 \x02\x02\xA0" +
		"\xA2\x07\"\x02\x02\xA1\xA3\x05.\x18\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA4" +
		"\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6" +
		"\x03\x02\x02\x02\xA6\xA7\x07 \x02\x02\xA7\xBA\x03\x02\x02\x02\xA8\xA9" +
		"\x07\x1F\x02\x02\xA9\xAD\x07 \x02\x02\xAA\xAC\x05.\x18\x02\xAB\xAA\x03" +
		"\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03" +
		"\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xBA\x07" +
		" \x02\x02\xB1\xB3\x07\x1F\x02\x02\xB2\xB4\x05.\x18\x02\xB3\xB2\x03\x02" +
		"\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02" +
		"\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07 \x02\x02\xB8\xBA\x03\x02" +
		"\x02\x02\xB9\x80\x03\x02\x02\x02\xB9\x8B\x03\x02\x02\x02\xB9\x95\x03\x02" +
		"\x02\x02\xB9\x9E\x03\x02\x02\x02\xB9\xA8\x03\x02\x02\x02\xB9\xB1\x03\x02" +
		"\x02\x02\xBA\x0F\x03\x02\x02\x02\xBB\xE5\x05\x12\n\x02\xBC\xBD\x073\x02" +
		"\x02\xBD\xE5\x058\x1D\x02\xBE\xBF\x073\x02\x02\xBF\xC0\x07(\x02\x02\xC0" +
		"\xC1\x058\x1D\x02\xC1\xC2\x07)\x02\x02\xC2\xE5\x03\x02\x02\x02\xC3\xC4" +
		"\x073\x02\x02\xC4\xC5\x07(\x02\x02\xC5\xC6\x07\"\x02\x02\xC6\xC7\x058" +
		"\x1D\x02\xC7\xC8\x07)\x02\x02\xC8\xE5\x03\x02\x02\x02\xC9\xCA\x074\x02" +
		"\x02\xCA\xCB\x078\x02\x02\xCB\xCC\x05B\"\x02\xCC\xCD\x079\x02\x02\xCD" +
		"\xE5\x03\x02\x02\x02\xCE\xCF\x074\x02\x02\xCF\xD0\x07:\x02\x02\xD0\xD1" +
		"\x05B\"\x02\xD1\xD2\x07:\x02\x02\xD2\xE5\x03\x02\x02\x02\xD3\xD4\x073" +
		"\x02\x02\xD4\xD5\x07(\x02\x02\xD5\xD6\x05B\"\x02\xD6\xD7\x07)\x02\x02" +
		"\xD7\xE5\x03\x02\x02\x02\xD8\xD9\x074\x02\x02\xD9\xDA\x07(\x02\x02\xDA" +
		"\xDB\x05B\"\x02\xDB\xDC\x07)\x02\x02\xDC\xE5\x03\x02\x02\x02\xDD\xDE\x07" +
		"6\x02\x02\xDE\xDF\x07%\x02\x02\xDF\xE0\x07j\x02\x02\xE0\xE1\x07>\x02\x02" +
		"\xE1\xE2\x05B\"\x02\xE2\xE3\x077\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4\xBB" +
		"\x03\x02\x02\x02\xE4\xBC\x03\x02\x02\x02\xE4\xBE\x03\x02\x02\x02\xE4\xC3" +
		"\x03\x02\x02\x02\xE4\xC9\x03\x02\x02\x02\xE4\xCE\x03\x02\x02\x02\xE4\xD3" +
		"\x03\x02\x02\x02\xE4\xD8\x03\x02\x02\x02\xE4\xDD\x03\x02\x02\x02\xE5\x11" +
		"\x03\x02\x02\x02\xE6\xEA\x05:\x1E\x02\xE7\xE8\x07\f\x02\x02\xE8\xEA\x05" +
		"@!\x02\xE9\xE6\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\x13\x03\x02" +
		"\x02\x02\xEB\xEC\x076\x02\x02\xEC\xED\x07%\x02\x02\xED\xEE\x078\x02\x02" +
		"\xEE\xEF\x05B\"\x02\xEF\xF0\x079\x02\x02\xF0\xF1\x05\x04\x03\x02\xF1\xF2" +
		"\x077\x02\x02\xF2\u0109\x03\x02\x02\x02\xF3\xF4\x076\x02\x02\xF4\xF5\x07" +
		"%\x02\x02\xF5\xF6\x07:\x02\x02\xF6\xF7\x05B\"\x02\xF7\xF8\x07:\x02\x02" +
		"\xF8\xF9\x05\x04\x03\x02\xF9\xFA\x077\x02\x02\xFA\u0109\x03\x02\x02\x02" +
		"\xFB\xFC\x076\x02\x02\xFC\xFD\x07%\x02\x02\xFD\xFE\x07j\x02\x02\xFE\xFF" +
		"\x078\x02\x02\xFF\u0100\x05B\"\x02\u0100\u0101\x079\x02\x02\u0101\u0102" +
		"\x05\x04\x03\x02\u0102\u0103\x077\x02\x02\u0103\u0109\x03\x02\x02\x02" +
		"\u0104\u0105\x076\x02\x02\u0105\u0106\x05\x04\x03\x02\u0106\u0107\x07" +
		"7\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\xEB\x03\x02\x02\x02\u0108" +
		"\xF3\x03\x02\x02\x02\u0108\xFB\x03\x02\x02\x02\u0108\u0104\x03\x02\x02" +
		"\x02\u0109\x15\x03\x02\x02\x02\u010A\u010B\x076\x02\x02\u010B\u010C\x07" +
		"%\x02\x02\u010C\u010D\x07<\x02\x02\u010D\u010E\x05\x04\x03\x02\u010E\u010F" +
		"\x077\x02\x02\u010F\u0124\x03\x02\x02\x02\u0110\u0111\x076\x02\x02\u0111" +
		"\u0112\x07%\x02\x02\u0112\u0113\x075\x02\x02\u0113\u0114\x05\x04\x03\x02" +
		"\u0114\u0115\x077\x02\x02\u0115\u0124\x03\x02\x02\x02\u0116\u0117\x07" +
		"6\x02\x02\u0117\u0118\x07%\x02\x02\u0118\u0119\x079\x02\x02\u0119\u011A" +
		"\x05\x04\x03\x02\u011A\u011B\x077\x02\x02\u011B\u0124\x03\x02\x02\x02" +
		"\u011C\u011D\x076\x02\x02\u011D\u011E\x07%\x02\x02\u011E\u011F\x05\x1C" +
		"\x0F\x02\u011F\u0120\x07<\x02\x02\u0120\u0121\x05\x04\x03\x02\u0121\u0122" +
		"\x077\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u010A\x03\x02\x02\x02" +
		"\u0123\u0110\x03\x02\x02\x02\u0123\u0116\x03\x02\x02\x02\u0123\u011C\x03" +
		"\x02\x02\x02\u0124\x17\x03\x02\x02\x02\u0125\u0126\x076\x02\x02\u0126" +
		"\u0127\x07%\x02\x02\u0127\u0128\x07=\x02\x02\u0128\u0129\x05F$\x02\u0129" +
		"\u012A\x077\x02\x02\u012A\x19\x03\x02\x02\x02\u012B\u012C\x076\x02\x02" +
		"\u012C\u012D\x07%\x02\x02\u012D\u012E\x05\x1C\x0F\x02\u012E\u012F\x07" +
		"\"\x02\x02\u012F\u0130\x05\x1C\x0F\x02\u0130\u0131\x077\x02\x02\u0131" +
		"\u0162\x03\x02\x02\x02\u0132\u0133\x076\x02\x02\u0133\u0134\x07%\x02\x02" +
		"\u0134\u0135\x05\x1C\x0F\x02\u0135\u0136\x077\x02\x02\u0136\u0162\x03" +
		"\x02\x02\x02\u0137\u0138\x076\x02\x02\u0138\u0139\x07%\x02\x02\u0139\u013A" +
		"\x07\"\x02\x02\u013A\u013B\x05\x1C\x0F\x02\u013B\u013C\x077\x02\x02\u013C" +
		"\u0162\x03\x02\x02\x02\u013D\u013E\x076\x02\x02\u013E\u013F\x07\'\x02" +
		"\x02\u013F\u0140\x07h\x02\x02\u0140\u0141\x07i\x02\x02\u0141\u0142\x07" +
		";\x02\x02\u0142\u0143\x07m\x02\x02\u0143\u0144\x07n\x02\x02\u0144\u0145" +
		"\x07[\x02\x02\u0145\u0146\x07l\x02\x02\u0146\u0147\x07n\x02\x02\u0147" +
		"\u0148\x07;\x02\x02\u0148\u0149\x07i\x02\x02\u0149\u014A\x07j\x02\x02" +
		"\u014A\u014B\x07n\x02\x02\u014B\u0162\x077\x02\x02\u014C\u014D\x076\x02" +
		"\x02\u014D\u014E\x07\'\x02\x02\u014E\u014F\x07o\x02\x02\u014F\u0150\x07" +
		"n\x02\x02\u0150\u0151\x07`\x02\x02\u0151\u0152\x07|\x02\x02\u0152\u0162" +
		"\x077\x02\x02\u0153\u0154\x076\x02\x02\u0154\u0155\x07\'\x02\x02\u0155" +
		"\u0156\x07o\x02\x02\u0156\u0157\x07n\x02\x02\u0157\u0158\x07`\x02\x02" +
		"\u0158\u0159\x07u\x02\x02\u0159\u015A\x07z\x02\x02\u015A\u0162\x077\x02" +
		"\x02\u015B\u015C\x076\x02\x02\u015C\u015D\x07\'\x02\x02\u015D\u015E\x07" +
		"o\x02\x02\u015E\u015F\x07]\x02\x02\u015F\u0160\x07j\x02\x02\u0160\u0162" +
		"\x077\x02\x02\u0161\u012B\x03\x02\x02\x02\u0161\u0132\x03\x02\x02\x02" +
		"\u0161\u0137\x03\x02\x02\x02\u0161\u013D\x03\x02\x02\x02\u0161\u014C\x03" +
		"\x02\x02\x02\u0161\u0153\x03\x02\x02\x02\u0161\u015B\x03\x02\x02\x02\u0162" +
		"\x1B\x03\x02\x02\x02\u0163\u0165\x05\x1E\x10\x02\u0164\u0163\x03\x02\x02" +
		"\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167" +
		"\x03\x02\x02\x02\u0167\x1D\x03\x02\x02\x02\u0168\u0169\t\x02\x02\x02\u0169" +
		"\x1F\x03\x02\x02\x02\u016A\u016B\x076\x02\x02\u016B\u016C\x07%\x02\x02" +
		"\u016C\u016D\x07>\x02\x02\u016D\u016E\x05\x04\x03\x02\u016E\u016F\x07" +
		"7\x02\x02\u016F\u0185\x03\x02\x02\x02\u0170\u0171\x076\x02\x02\u0171\u0172" +
		"\x07%\x02\x02\u0172\u0173\x07?\x02\x02\u0173\u0174\x05\x04\x03\x02\u0174" +
		"\u0175\x077\x02\x02\u0175\u0185\x03\x02\x02\x02\u0176\u0177\x076\x02\x02" +
		"\u0177\u0178\x07%\x02\x02\u0178\u0179\x078\x02\x02\u0179\u017A\x07>\x02" +
		"\x02\u017A\u017B\x05\x04\x03\x02\u017B\u017C\x077\x02\x02\u017C\u0185" +
		"\x03\x02\x02\x02\u017D\u017E\x076\x02\x02\u017E\u017F\x07%\x02\x02\u017F" +
		"\u0180\x078\x02\x02\u0180\u0181\x07?\x02\x02\u0181\u0182\x05\x04\x03\x02" +
		"\u0182\u0183\x077\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u016A\x03" +
		"\x02\x02\x02\u0184\u0170\x03\x02\x02\x02\u0184\u0176\x03\x02\x02\x02\u0184" +
		"\u017D\x03\x02\x02\x02\u0185!\x03\x02\x02\x02\u0186\u0187\x076\x02\x02" +
		"\u0187\u0188\x07%\x02\x02\u0188\u0189\x07l\x02\x02\u0189\u01D5\x077\x02" +
		"\x02\u018A\u018B\x076\x02\x02\u018B\u018C\x07%\x02\x02\u018C\u018D\x05" +
		"8\x1D\x02\u018D\u018E\x077\x02\x02\u018E\u01D5\x03\x02\x02\x02\u018F\u0190" +
		"\x076\x02\x02\u0190\u0191\x07%\x02\x02\u0191\u0192\x07&\x02\x02\u0192" +
		"\u0193\x058\x1D\x02\u0193\u0194\x077\x02\x02\u0194\u01D5\x03\x02\x02\x02" +
		"\u0195\u0196\x076\x02\x02\u0196\u0197\x07%\x02\x02\u0197\u0198\x07\"\x02" +
		"\x02\u0198\u0199\x058\x1D\x02\u0199\u019A\x077\x02\x02\u019A\u01D5\x03" +
		"\x02\x02\x02\u019B\u019C\x076\x02\x02\u019C\u019D\x07%\x02\x02\u019D\u019E" +
		"\x07@\x02\x02\u019E\u019F\x05B\"\x02\u019F\u01A0\x077\x02\x02\u01A0\u01D5" +
		"\x03\x02\x02\x02\u01A1\u01A2\x076\x02\x02\u01A2\u01A3\x07%\x02\x02\u01A3" +
		"\u01A4\x07j\x02\x02\u01A4\u01A5\x079\x02\x02\u01A5\u01A6\x05B\"\x02\u01A6" +
		"\u01A7\x077\x02\x02\u01A7\u01D5\x03\x02\x02\x02\u01A8\u01A9\x073\x02\x02" +
		"\u01A9\u01AA\x078\x02\x02\u01AA\u01AB\x05B\"\x02\u01AB\u01AC\x079\x02" +
		"\x02\u01AC\u01D5\x03\x02\x02\x02\u01AD\u01AE\x073\x02\x02\u01AE\u01AF" +
		"\x07:\x02\x02\u01AF\u01B0\x05B\"\x02\u01B0\u01B1\x07:\x02\x02\u01B1\u01D5" +
		"\x03\x02\x02\x02\u01B2\u01B3\x073\x02\x02\u01B3\u01B4\x078\x02\x02\u01B4" +
		"\u01B5\x058\x1D\x02\u01B5\u01B6\x079\x02\x02\u01B6\u01D5\x03\x02\x02\x02" +
		"\u01B7\u01B8\x073\x02\x02\u01B8\u01B9\x07:\x02\x02\u01B9\u01BA\x058\x1D" +
		"\x02\u01BA\u01BB\x07:\x02\x02\u01BB\u01D5\x03\x02\x02\x02\u01BC\u01BD" +
		"\x073\x02\x02\u01BD\u01BE\x078\x02\x02\u01BE\u01BF\x07&\x02\x02\u01BF" +
		"\u01C0\x058\x1D\x02\u01C0\u01C1\x079\x02\x02\u01C1\u01D5\x03\x02\x02\x02" +
		"\u01C2\u01C3\x073\x02\x02\u01C3\u01C4\x07:\x02\x02\u01C4\u01C5\x07&\x02" +
		"\x02\u01C5\u01C6\x058\x1D\x02\u01C6\u01C7\x07:\x02\x02\u01C7\u01D5\x03" +
		"\x02\x02\x02\u01C8\u01C9\x073\x02\x02\u01C9\u01CA\x078\x02\x02\u01CA\u01CB" +
		"\x07\"\x02\x02\u01CB\u01CC\x058\x1D\x02\u01CC\u01CD\x079\x02\x02\u01CD" +
		"\u01D5\x03\x02\x02\x02\u01CE\u01CF\x073\x02\x02\u01CF\u01D0\x07:\x02\x02" +
		"\u01D0\u01D1\x07\"\x02\x02\u01D1\u01D2\x058\x1D\x02\u01D2\u01D3\x07:\x02" +
		"\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u0186\x03\x02\x02\x02\u01D4\u018A" +
		"\x03\x02\x02\x02\u01D4\u018F\x03\x02\x02\x02\u01D4\u0195\x03\x02\x02\x02" +
		"\u01D4\u019B\x03\x02\x02\x02\u01D4\u01A1\x03\x02\x02\x02\u01D4\u01A8\x03" +
		"\x02\x02\x02\u01D4\u01AD\x03\x02\x02\x02\u01D4\u01B2\x03\x02\x02\x02\u01D4" +
		"\u01B7\x03\x02\x02\x02\u01D4\u01BC\x03\x02\x02\x02\u01D4\u01C2\x03\x02" +
		"\x02\x02\u01D4\u01C8\x03\x02\x02\x02\u01D4\u01CE\x03\x02\x02\x02\u01D5" +
		"#\x03\x02\x02\x02\u01D6\u01D7\x07";
	private static readonly _serializedATNSegment1: string =
		"6\x02\x02\u01D7\u01D8\x07%\x02\x02\u01D8\u01D9\x076\x02\x02\u01D9\u01DA" +
		"\x058\x1D\x02\u01DA\u01DB\x077\x02\x02\u01DB\u01DE\x05\x04\x03\x02\u01DC" +
		"\u01DD\x075\x02\x02\u01DD\u01DF\x05\x04\x03\x02\u01DE\u01DC\x03\x02\x02" +
		"\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1" +
		"\x077\x02\x02\u01E1\u026E\x03\x02\x02\x02\u01E2\u01E3\x076\x02\x02\u01E3" +
		"\u01E4\x07%\x02\x02\u01E4\u01E5\x076\x02\x02\u01E5\u01E6\x07&\x02\x02" +
		"\u01E6\u01E7\x058\x1D\x02\u01E7\u01E8\x077\x02\x02\u01E8\u01EB\x05\x04" +
		"\x03\x02\u01E9\u01EA\x075\x02\x02\u01EA\u01EC\x05\x04\x03\x02\u01EB\u01E9" +
		"\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
		"\u01ED\u01EE\x077\x02\x02\u01EE\u026E\x03\x02\x02\x02\u01EF\u01F0\x07" +
		"6\x02\x02\u01F0\u01F1\x07%\x02\x02\u01F1\u01F2\x076\x02\x02\u01F2\u01F3" +
		"\x07\"\x02\x02\u01F3\u01F4\x058\x1D\x02\u01F4\u01F5\x077\x02\x02\u01F5" +
		"\u01F8\x05\x04\x03\x02\u01F6\u01F7\x075\x02\x02\u01F7\u01F9\x05\x04\x03" +
		"\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA" +
		"\x03\x02\x02\x02\u01FA\u01FB\x077\x02\x02\u01FB\u026E\x03\x02\x02\x02" +
		"\u01FC\u01FD\x076\x02\x02\u01FD\u01FE\x07%\x02\x02\u01FE\u01FF\x076\x02" +
		"\x02\u01FF\u0200\x078\x02\x02\u0200\u0201\x05B\"\x02\u0201\u0202\x079" +
		"\x02\x02\u0202\u0203\x077\x02\x02\u0203\u0206\x05\x04\x03\x02\u0204\u0205" +
		"\x075\x02\x02\u0205\u0207\x05\x04\x03\x02\u0206\u0204\x03\x02\x02\x02" +
		"\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x07" +
		"7\x02\x02\u0209\u026E\x03\x02\x02\x02\u020A\u020B\x076\x02\x02\u020B\u020C" +
		"\x07%\x02\x02\u020C\u020D\x076\x02\x02\u020D\u020E\x07:\x02\x02\u020E" +
		"\u020F\x05B\"\x02\u020F\u0210\x07:\x02\x02\u0210\u0211\x077\x02\x02\u0211" +
		"\u0214\x05\x04\x03\x02\u0212\u0213\x075\x02\x02\u0213\u0215\x05\x04\x03" +
		"\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216" +
		"\x03\x02\x02\x02\u0216\u0217\x077\x02\x02\u0217\u026E\x03\x02\x02\x02" +
		"\u0218\u0219\x076\x02\x02\u0219\u021A\x07%\x02\x02\u021A\u021B\x076\x02" +
		"\x02\u021B\u021C\x07l\x02\x02\u021C\u021D\x058\x1D\x02\u021D\u021E\x07" +
		"7\x02\x02\u021E\u0221\x05\x04\x03\x02\u021F\u0220\x075\x02\x02\u0220\u0222" +
		"\x05\x04\x03\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02" +
		"\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x077\x02\x02\u0224\u026E\x03" +
		"\x02\x02\x02\u0225\u0226\x076\x02\x02\u0226\u0227\x07%\x02\x02\u0227\u0228" +
		"\x076\x02\x02\u0228\u0229\x07l\x02\x02\u0229\u022A\x077\x02\x02\u022A" +
		"\u022D\x05\x04\x03\x02\u022B\u022C\x075\x02\x02\u022C\u022E\x05\x04\x03" +
		"\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u022F" +
		"\x03\x02\x02\x02\u022F\u0230\x077\x02\x02\u0230\u026E\x03\x02\x02\x02" +
		"\u0231\u0232\x076\x02\x02\u0232\u0233\x07%\x02\x02\u0233\u0234\x076\x02" +
		"\x02\u0234\u0235\x07l\x02\x02\u0235\u0236\x07@\x02\x02\u0236\u0237\x05" +
		"B\"\x02\u0237\u0238\x077\x02\x02\u0238\u023B\x05\x04\x03\x02\u0239\u023A" +
		"\x075\x02\x02\u023A\u023C\x05\x04\x03\x02\u023B\u0239\x03\x02\x02\x02" +
		"\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x07" +
		"7\x02\x02\u023E\u026E\x03\x02\x02\x02\u023F\u0240\x076\x02\x02\u0240\u0241" +
		"\x07%\x02\x02\u0241\u0242\x076\x02\x02\u0242\u0243\x07^\x02\x02\u0243" +
		"\u0244\x07_\x02\x02\u0244\u0245\x07`\x02\x02\u0245\u0246\x07c\x02\x02" +
		"\u0246\u0247\x07h\x02\x02\u0247\u0248\x07_\x02\x02\u0248\u0249\x077\x02" +
		"\x02\u0249\u024C\x05\x04\x03\x02\u024A\u024B\x075\x02\x02\u024B\u024D" +
		"\x05\x04\x03\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02" +
		"\u024D\u024E\x03\x02\x02\x02\u024E\u024F\x077\x02\x02\u024F\u026E\x03" +
		"\x02\x02\x02\u0250\u0251\x076\x02\x02\u0251\u0252\x07%\x02\x02\u0252\u0253" +
		"\x076\x02\x02\u0253\u0254\x07A\x02\x02\u0254\u0255\x07S\x02\x02\u0255" +
		"\u0256\x07S\x02\x02\u0256\u0257\x07E\x02\x02\u0257\u0258\x07R\x02\x02" +
		"\u0258\u0259\x07T\x02\x02\u0259\u025A\x077\x02\x02\u025A\u025D\x05\x04" +
		"\x03\x02\u025B\u025C\x075\x02\x02\u025C\u025E\x05\x04\x03\x02\u025D\u025B" +
		"\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02" +
		"\u025F\u0260\x077\x02\x02\u0260\u026E\x03\x02\x02\x02\u0261\u0262\x07" +
		"6\x02\x02\u0262\u0263\x07%\x02\x02\u0263\u0264\x076\x02\x02\u0264\u0265" +
		"\x05B\"\x02\u0265\u0266\x077\x02\x02\u0266\u0269\x05\x04\x03\x02\u0267" +
		"\u0268\x075\x02\x02\u0268\u026A\x05\x04\x03\x02\u0269\u0267\x03\x02\x02" +
		"\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C" +
		"\x077\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u01D6\x03\x02\x02\x02" +
		"\u026D\u01E2\x03\x02\x02\x02\u026D\u01EF\x03\x02\x02\x02\u026D\u01FC\x03" +
		"\x02\x02\x02\u026D\u020A\x03\x02\x02\x02\u026D\u0218\x03\x02\x02\x02\u026D" +
		"\u0225\x03\x02\x02\x02\u026D\u0231\x03\x02\x02\x02\u026D\u023F\x03\x02" +
		"\x02\x02\u026D\u0250\x03\x02\x02\x02\u026D\u0261\x03\x02\x02\x02\u026E" +
		"%\x03\x02\x02\x02\u026F\u0270\x076\x02\x02\u0270\u0271\x07\'\x02\x02\u0271" +
		"\u0272\x07[\x02\x02\u0272\u0273\x07]\x02\x02\u0273\u0274\x07]\x02\x02" +
		"\u0274\u0275\x07_\x02\x02\u0275\u0276\x07j\x02\x02\u0276\u0277\x07n\x02" +
		"\x02\u0277\u02D4\x077\x02\x02\u0278\u0279\x076\x02\x02\u0279\u027A\x07" +
		"\'\x02\x02\u027A\u027E\x07`\x02\x02\u027B\u027C\x07[\x02\x02\u027C\u027D" +
		"\x07c\x02\x02\u027D\u027F\x07f\x02\x02\u027E\u027B\x03\x02\x02\x02\u027E" +
		"\u027F\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u02D4\x077\x02" +
		"\x02\u0281\u0282\x076\x02\x02\u0282\u0287\x07\'\x02\x02\u0283\u0284\x07" +
		"g\x02\x02\u0284\u0285\x07[\x02\x02\u0285\u0286\x07l\x02\x02\u0286\u0288" +
		"\x07e\x02\x02\u0287\u0283\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02" +
		"\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x07<\x02\x02\u028A\u028B\x07" +
		"h\x02\x02\u028B\u028C\x07[\x02\x02\u028C\u028D\x07g\x02\x02\u028D\u028E" +
		"\x07_\x02\x02\u028E\u02D4\x077\x02\x02\u028F\u0290\x076\x02\x02\u0290" +
		"\u0291\x07\'\x02\x02\u0291\u0292\x07]\x02\x02\u0292\u0293\x07i\x02\x02" +
		"\u0293\u0294\x07g\x02\x02\u0294\u0295\x07g\x02\x02\u0295\u0296\x07c\x02" +
		"\x02\u0296\u0297\x07n\x02\x02\u0297\u02D4\x077\x02\x02\u0298\u0299\x07" +
		"6\x02\x02\u0299\u029A\x07\'\x02\x02\u029A\u029B\x07j\x02\x02\u029B\u029C" +
		"\x07l\x02\x02\u029C\u029D\x07o\x02\x02\u029D\u029E\x07h\x02\x02\u029E" +
		"\u029F\x07_\x02\x02\u029F\u02D4\x077\x02\x02\u02A0\u02A1\x076\x02\x02" +
		"\u02A1\u02A2\x07\'\x02\x02\u02A2\u02A3\x07j\x02\x02\u02A3\u02A4\x07l\x02" +
		"\x02\u02A4\u02A5\x07o\x02\x02\u02A5\u02A6\x07h\x02\x02\u02A6\u02A7\x07" +
		"_\x02\x02\u02A7\u02A8\x07<\x02\x02\u02A8\u02A9\x07h\x02\x02\u02A9\u02AA" +
		"\x07[\x02\x02\u02AA\u02AB\x07g\x02\x02\u02AB\u02AC\x07_\x02\x02\u02AC" +
		"\u02D4\x077\x02\x02\u02AD\u02AE\x076\x02\x02\u02AE\u02AF\x07\'\x02\x02" +
		"\u02AF\u02B0\x07m\x02\x02\u02B0\u02B1\x07e\x02\x02\u02B1\u02B2\x07c\x02" +
		"\x02\u02B2\u02B3\x07j\x02\x02\u02B3\u02D4\x077\x02\x02\u02B4\u02B5\x07" +
		"6\x02\x02\u02B5\u02B6\x07\'\x02\x02\u02B6\u02B7\x07m\x02\x02\u02B7\u02B8" +
		"\x07e\x02\x02\u02B8\u02B9\x07c\x02\x02\u02B9\u02BA\x07j\x02\x02\u02BA" +
		"\u02BB\x07<\x02\x02\u02BB\u02BC\x07h\x02\x02\u02BC\u02BD\x07[\x02\x02" +
		"\u02BD\u02BE\x07g\x02\x02\u02BE\u02BF\x07_\x02\x02\u02BF\u02D4\x077\x02" +
		"\x02\u02C0\u02C1\x076\x02\x02\u02C1\u02C2\x07\'\x02\x02\u02C2\u02C3\x07" +
		"n\x02\x02\u02C3\u02C4\x07b\x02\x02\u02C4\u02C5\x07_\x02\x02\u02C5\u02C6" +
		"\x07h\x02\x02\u02C6\u02D4\x077\x02\x02\u02C7\u02C8\x076\x02\x02\u02C8" +
		"\u02C9\x07\'\x02\x02\u02C9\u02CA\x07n\x02\x02\u02CA\u02CB\x07b\x02\x02" +
		"\u02CB\u02CC\x07_\x02\x02\u02CC\u02CD\x07h\x02\x02\u02CD\u02CE\x07<\x02" +
		"\x02\u02CE\u02CF\x07h\x02\x02\u02CF\u02D0\x07[\x02\x02\u02D0\u02D1\x07" +
		"g\x02\x02\u02D1\u02D2\x07_\x02\x02\u02D2\u02D4\x077\x02\x02\u02D3\u026F" +
		"\x03\x02\x02\x02\u02D3\u0278\x03\x02\x02\x02\u02D3\u0281\x03\x02\x02\x02" +
		"\u02D3\u028F\x03\x02\x02\x02\u02D3\u0298\x03\x02\x02\x02\u02D3\u02A0\x03" +
		"\x02\x02\x02\u02D3\u02AD\x03\x02\x02\x02\u02D3\u02B4\x03\x02\x02\x02\u02D3" +
		"\u02C0\x03\x02\x02\x02\u02D3\u02C7\x03\x02\x02\x02\u02D4\'\x03\x02\x02" +
		"\x02\u02D5\u02D6\x076\x02\x02\u02D6\u02D7\x07\'\x02\x02\u02D7\u02D8\x07" +
		"]\x02\x02\u02D8\u02D9\x07l\x02\x02\u02D9\u0313\x077\x02\x02\u02DA\u02DB" +
		"\x076\x02\x02\u02DB\u02DC\x07\'\x02\x02\u02DC\u02DD\x07f\x02\x02\u02DD" +
		"\u02DE\x07`\x02\x02\u02DE\u0313\x077\x02\x02\u02DF\u02E0\x076\x02\x02" +
		"\u02E0\u02E1\x07\'\x02\x02\u02E1\u02E2\x07]\x02\x02\u02E2\u02E3\x07l\x02" +
		"\x02\u02E3\u02E4\x07f\x02\x02\u02E4\u02E5\x07`\x02\x02\u02E5\u0313\x07" +
		"7\x02\x02\u02E6\u02E7\x076\x02\x02\u02E7\u02E8\x07\'\x02\x02\u02E8\u02E9" +
		"\x07[\x02\x02\u02E9\u02EA\x07h\x02\x02\u02EA\u02EB\x07s\x02\x02\u02EB" +
		"\u02EC\x07]\x02\x02\u02EC\u02ED\x07l\x02\x02\u02ED\u02EE\x07f\x02\x02" +
		"\u02EE\u02EF\x07`\x02\x02\u02EF\u0313\x077\x02\x02\u02F0\u02F1\x076\x02" +
		"\x02\u02F1\u02F2\x07\'\x02\x02\u02F2\u02F3\x07[\x02\x02\u02F3\u02F4\x07" +
		"h\x02\x02\u02F4\u02F5\x07s\x02\x02\u02F5\u0313\x077\x02\x02\u02F6\u02F7" +
		"\x076\x02\x02\u02F7\u02F8\x07\'\x02\x02\u02F8\u02F9\x07\\\x02\x02\u02F9" +
		"\u02FA\x07m\x02\x02\u02FA\u02FB\x07l\x02\x02\u02FB\u02FC\x07;\x02\x02" +
		"\u02FC\u02FD\x07[\x02\x02\u02FD\u02FE\x07h\x02\x02\u02FE\u02FF\x07s\x02" +
		"\x02\u02FF\u0300\x07]\x02\x02\u0300\u0301\x07l\x02\x02\u0301\u0302\x07" +
		"f\x02\x02\u0302\u0303\x07`\x02\x02\u0303\u0313\x077\x02\x02\u0304\u0305" +
		"\x076\x02\x02\u0305\u0306\x07\'\x02\x02\u0306\u0307\x07\\\x02\x02\u0307" +
		"\u0308\x07m\x02\x02\u0308\u0309\x07l\x02\x02\u0309\u030A\x07;\x02\x02" +
		"\u030A\u030B\x07o\x02\x02\u030B\u030C\x07h\x02\x02\u030C\u030D\x07c\x02" +
		"\x02\u030D\u030E\x07]\x02\x02\u030E\u030F\x07i\x02\x02\u030F\u0310\x07" +
		"^\x02\x02\u0310\u0311\x07_\x02\x02\u0311\u0313\x077\x02\x02\u0312\u02D5" +
		"\x03\x02\x02\x02\u0312\u02DA\x03\x02\x02\x02\u0312\u02DF\x03\x02\x02\x02" +
		"\u0312\u02E6\x03\x02\x02\x02\u0312\u02F0\x03\x02\x02\x02\u0312\u02F6\x03" +
		"\x02\x02\x02\u0312\u0304\x03\x02\x02\x02\u0313)\x03\x02\x02\x02\u0314" +
		"\u0315\x076\x02\x02\u0315\u0316\x07%\x02\x02\u0316\u0317\x07]\x02\x02" +
		"\u0317\u031F\x077\x02\x02\u0318\u0319\x076\x02\x02\u0319\u031A\x07%\x02" +
		"\x02\u031A\u031B\x07]\x02\x02\u031B\u031C\x058\x1D\x02\u031C\u031D\x07" +
		"7\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E\u0314\x03\x02\x02\x02\u031E" +
		"\u0318\x03\x02\x02\x02\u031F+\x03\x02\x02\x02\u0320\u033B\x05\"\x12\x02" +
		"\u0321\u033B\x050\x19\x02\u0322\u033B\x052\x1A\x02\u0323\u033B\x05\x0E" +
		"\b\x02\u0324\u033B\x05\x14\v\x02\u0325\u033B\x05\x16\f\x02\u0326\u033B" +
		"\x05\x18\r\x02\u0327\u033B\x05\x1A\x0E\x02\u0328\u033B\x05 \x11\x02\u0329" +
		"\u033B\x05\x10\t\x02\u032A\u033B\x05$\x13\x02\u032B\u033B\x05&\x14\x02" +
		"\u032C\u033B\x05(\x15\x02\u032D\u033B\x05*\x16\x02\u032E\u033B\x07\x0E" +
		"\x02\x02\u032F\u033B\x07!\x02\x02\u0330\u033B\x07-\x02\x02\u0331\u033B" +
		"\x07+\x02\x02\u0332\u033B\x07,\x02\x02\u0333\u033B\x07.\x02\x02\u0334" +
		"\u033B\x07/\x02\x02\u0335\u033B\x070\x02\x02\u0336\u033B\x071\x02\x02" +
		"\u0337\u033B\x072\x02\x02\u0338\u033B\x07\x0F\x02\x02\u0339\u033B\x07" +
		"\x1E\x02\x02\u033A\u0320\x03\x02\x02\x02\u033A\u0321\x03\x02\x02\x02\u033A" +
		"\u0322\x03\x02\x02\x02\u033A\u0323\x03\x02\x02\x02\u033A\u0324\x03\x02" +
		"\x02\x02\u033A\u0325\x03\x02\x02\x02\u033A\u0326\x03\x02\x02\x02\u033A" +
		"\u0327\x03\x02\x02\x02\u033A\u0328\x03\x02\x02\x02\u033A\u0329\x03\x02" +
		"\x02\x02\u033A\u032A\x03\x02\x02\x02\u033A\u032B\x03\x02\x02\x02\u033A" +
		"\u032C\x03\x02\x02\x02\u033A\u032D\x03\x02\x02\x02\u033A\u032E\x03\x02" +
		"\x02\x02\u033A\u032F\x03\x02\x02\x02\u033A\u0330\x03\x02\x02\x02\u033A" +
		"\u0331\x03\x02\x02\x02\u033A\u0332\x03\x02\x02\x02\u033A\u0333\x03\x02" +
		"\x02\x02\u033A\u0334\x03\x02\x02\x02\u033A\u0335\x03\x02\x02\x02\u033A" +
		"\u0336\x03\x02\x02\x02\u033A\u0337\x03\x02\x02\x02\u033A\u0338\x03\x02" +
		"\x02\x02\u033A\u0339\x03\x02\x02\x02\u033B-\x03\x02\x02\x02\u033C\u033D" +
		"\x054\x1B\x02\u033D\u033E\x07\"\x02\x02\u033E\u033F\x054\x1B\x02\u033F" +
		"\u0344\x03\x02\x02\x02\u0340\u0344\x050\x19\x02\u0341\u0344\x054\x1B\x02" +
		"\u0342\u0344\x05\x12\n\x02\u0343\u033C\x03\x02\x02\x02\u0343\u0340\x03" +
		"\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0342\x03\x02\x02\x02\u0344" +
		"/\x03\x02\x02\x02\u0345\u0346\t\x03\x02\x02\u03461\x03\x02\x02\x02\u0347" +
		"\u034A\x056\x1C\x02\u0348\u034A\x07 \x02\x02\u0349\u0347\x03\x02\x02\x02" +
		"\u0349\u0348\x03\x02\x02\x02\u034A3\x03\x02\x02\x02\u034B\u0358\x056\x1C" +
		"\x02\u034C\u0358\x07\x0E\x02\x02\u034D\u0358\x07\x1F\x02\x02\u034E\u0358" +
		"\x07!\x02\x02\u034F\u0358\x07%\x02\x02\u0350\u0358\x07&\x02\x02\u0351" +
		"\u0358\x07\'\x02\x02\u0352\u0358\x07+\x02\x02\u0353\u0358\x07.\x02\x02" +
		"\u0354\u0358\x075\x02\x02\u0355\u0358\x076\x02\x02\u0356\u0358\x077\x02" +
		"\x02\u0357\u034B\x03\x02\x02\x02\u0357\u034C\x03\x02\x02\x02\u0357\u034D" +
		"\x03\x02\x02\x02\u0357\u034E\x03\x02\x02\x02\u0357\u034F\x03\x02\x02\x02" +
		"\u0357\u0350\x03\x02\x02\x02\u0357\u0351\x03\x02\x02\x02\u0357\u0352\x03" +
		"\x02\x02\x02\u0357\u0353\x03\x02\x02\x02\u0357\u0354\x03\x02\x02\x02\u0357" +
		"\u0355\x03\x02\x02\x02\u0357\u0356\x03\x02\x02\x02\u03585\x03\x02\x02" +
		"\x02\u0359\u0374\x05:\x1E\x02\u035A\u0374\x05J&\x02\u035B\u0374\x05@!" +
		"\x02\u035C\u0374\x07\x05\x02\x02\u035D\u0374\x07\x07\x02\x02\u035E\u0374" +
		"\x07\b\x02\x02\u035F\u0374\x07\t\x02\x02\u0360\u0374\x07\n\x02\x02\u0361" +
		"\u0374\x07\v\x02\x02\u0362\u0374\x07\r\x02\x02\u0363\u0374\x07\x03\x02" +
		"\x02\u0364\u0374\x07\x04\x02\x02\u0365\u0374\x07(\x02\x02\u0366\u0374" +
		"\x07)\x02\x02\u0367\u0374\x07*\x02\x02\u0368\u0374\x07\"\x02\x02\u0369" +
		"\u0374\x078\x02\x02\u036A\u0374\x079\x02\x02\u036B\u0374\x07:\x02\x02" +
		"\u036C\u0374\x07;\x02\x02\u036D\u0374\x07<\x02\x02\u036E\u0374\x07=\x02" +
		"\x02\u036F\u0374\x07>\x02\x02\u0370\u0374\x07?\x02\x02\u0371\u0374\x07" +
		"@\x02\x02\u0372\u0374\x07\x7F\x02\x02\u0373\u0359\x03\x02\x02\x02\u0373" +
		"\u035A\x03\x02\x02\x02\u0373\u035B\x03\x02\x02\x02\u0373\u035C\x03\x02" +
		"\x02\x02\u0373\u035D\x03\x02\x02\x02\u0373\u035E\x03\x02\x02\x02\u0373" +
		"\u035F\x03\x02\x02\x02\u0373\u0360\x03\x02\x02\x02\u0373\u0361\x03\x02" +
		"\x02\x02\u0373\u0362\x03\x02\x02\x02\u0373\u0363\x03\x02\x02\x02\u0373" +
		"\u0364\x03\x02\x02\x02\u0373\u0365\x03\x02\x02\x02\u0373\u0366\x03\x02" +
		"\x02\x02\u0373\u0367\x03\x02\x02\x02\u0373\u0368\x03\x02\x02\x02\u0373" +
		"\u0369\x03\x02\x02\x02\u0373\u036A\x03\x02\x02\x02\u0373\u036B\x03\x02" +
		"\x02\x02\u0373\u036C\x03\x02\x02\x02\u0373\u036D\x03\x02\x02\x02\u0373" +
		"\u036E\x03\x02\x02\x02\u0373\u036F\x03\x02\x02\x02\u0373\u0370\x03\x02" +
		"\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0372\x03\x02\x02\x02\u0374" +
		"7\x03\x02\x02\x02\u0375\u0376\x05> \x02\u03769\x03\x02\x02\x02\u0377\u0378" +
		"\x07\f\x02\x02\u0378\u0379\t\x04\x02\x02\u0379\u037A\x05<\x1F\x02\u037A" +
		"\u037B\x05<\x1F\x02\u037B\u0381\x03\x02\x02\x02\u037C\u037D\x07\f\x02" +
		"\x02\u037D\u037E\x05<\x1F\x02\u037E\u037F\x05<\x1F\x02\u037F\u0381\x03" +
		"\x02\x02\x02\u0380\u0377\x03\x02\x02\x02\u0380\u037C\x03\x02\x02\x02\u0381" +
		";\x03\x02\x02\x02\u0382\u0383\t\x05\x02\x02\u0383=\x03\x02\x02\x02\u0384" +
		"\u0386\x05@!\x02\u0385\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02" +
		"\u0387\u0385\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388?\x03\x02" +
		"\x02\x02\u0389\u038A\t\x06\x02\x02\u038AA\x03\x02\x02\x02\u038B\u038C" +
		"\x05D#\x02\u038CC\x03\x02\x02\x02\u038D\u0390\x05J&\x02\u038E\u0390\x07" +
		";\x02\x02\u038F\u038D\x03\x02\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390" +
		"\u0396\x03\x02\x02\x02\u0391\u0395\x05J&\x02\u0392\u0395\x07;\x02\x02" +
		"\u0393\u0395\x05@!\x02\u0394\u0391\x03\x02\x02\x02\u0394\u0392\x03\x02" +
		"\x02\x02\u0394\u0393\x03\x02\x02\x02\u0395\u0398\x03\x02\x02\x02\u0396" +
		"\u0394\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397E\x03\x02\x02" +
		"\x02\u0398\u0396\x03\x02\x02\x02\u0399\u039B\x05H%\x02\u039A\u0399\x03" +
		"\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039C" +
		"\u039D\x03\x02\x02\x02\u039DG\x03\x02\x02\x02\u039E\u039F\n\x07\x02\x02" +
		"\u039FI\x03\x02\x02\x02\u03A0\u03A1\t\b\x02\x02\u03A1K\x03\x02\x02\x02" +
		"2TZ_y~\x87\x91\x9A\xA4\xAD\xB5\xB9\xE4\xE9\u0108\u0123\u0161\u0166\u0184" +
		"\u01D4\u01DE\u01EB\u01F8\u0206\u0214\u0221\u022D\u023B\u024C\u025D\u0269" +
		"\u026D\u027E\u0287\u02D3\u0312\u031E\u033A\u0343\u0349\u0357\u0373\u0380" +
		"\u0387\u038F\u0394\u0396\u039C";
	public static readonly _serializedATN: string = Utils.join(
		[
			PCREParser._serializedATNSegment0,
			PCREParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PCREParser.__ATN) {
			PCREParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PCREParser._serializedATN));
		}

		return PCREParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	public EOF(): TerminalNode { return this.getToken(PCREParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_parse; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
}


export class AlternationContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public Pipe(): TerminalNode[];
	public Pipe(i: number): TerminalNode;
	public Pipe(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.Pipe);
		} else {
			return this.getToken(PCREParser.Pipe, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_alternation; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterAlternation) {
			listener.enterAlternation(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitAlternation) {
			listener.exitAlternation(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_expr; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public quantifier(): QuantifierContext | undefined {
		return this.tryGetRuleContext(0, QuantifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_element; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class QuantifierContext extends ParserRuleContext {
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	public quantifier_type(): Quantifier_typeContext {
		return this.getRuleContext(0, Quantifier_typeContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Plus, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Star, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OpenBrace, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CloseBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_quantifier; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterQuantifier) {
			listener.enterQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitQuantifier) {
			listener.exitQuantifier(this);
		}
	}
}


export class Quantifier_typeContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Plus, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_quantifier_type; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterQuantifier_type) {
			listener.enterQuantifier_type(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitQuantifier_type) {
			listener.exitQuantifier_type(this);
		}
	}
}


export class Character_classContext extends ParserRuleContext {
	public CharacterClassStart(): TerminalNode { return this.getToken(PCREParser.CharacterClassStart, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Caret, 0); }
	public CharacterClassEnd(): TerminalNode[];
	public CharacterClassEnd(i: number): TerminalNode;
	public CharacterClassEnd(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.CharacterClassEnd);
		} else {
			return this.getToken(PCREParser.CharacterClassEnd, i);
		}
	}
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public cc_atom(): Cc_atomContext[];
	public cc_atom(i: number): Cc_atomContext;
	public cc_atom(i?: number): Cc_atomContext | Cc_atomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cc_atomContext);
		} else {
			return this.getRuleContext(i, Cc_atomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_character_class; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterCharacter_class) {
			listener.enterCharacter_class(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitCharacter_class) {
			listener.exitCharacter_class(this);
		}
	}
}


export class BackreferenceContext extends ParserRuleContext {
	public backreference_or_octal(): Backreference_or_octalContext | undefined {
		return this.tryGetRuleContext(0, Backreference_or_octalContext);
	}
	public SubroutineOrNamedReferenceStartG(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SubroutineOrNamedReferenceStartG, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CloseBrace, 0); }
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public NamedReferenceStartK(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NamedReferenceStartK, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LessThan, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GreaterThan, 0); }
	public SingleQuote(): TerminalNode[];
	public SingleQuote(i: number): TerminalNode;
	public SingleQuote(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.SingleQuote);
		} else {
			return this.getToken(PCREParser.SingleQuote, i);
		}
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	public PUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PUC, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Equals, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_backreference; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterBackreference) {
			listener.enterBackreference(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitBackreference) {
			listener.exitBackreference(this);
		}
	}
}


export class Backreference_or_octalContext extends ParserRuleContext {
	public octal_char(): Octal_charContext | undefined {
		return this.tryGetRuleContext(0, Octal_charContext);
	}
	public Backslash(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Backslash, 0); }
	public digit(): DigitContext | undefined {
		return this.tryGetRuleContext(0, DigitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_backreference_or_octal; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterBackreference_or_octal) {
			listener.enterBackreference_or_octal(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitBackreference_or_octal) {
			listener.exitBackreference_or_octal(this);
		}
	}
}


export class CaptureContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LessThan, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GreaterThan, 0); }
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public SingleQuote(): TerminalNode[];
	public SingleQuote(i: number): TerminalNode;
	public SingleQuote(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.SingleQuote);
		} else {
			return this.getToken(PCREParser.SingleQuote, i);
		}
	}
	public PUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PUC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_capture; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterCapture) {
			listener.enterCapture(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitCapture) {
			listener.exitCapture(this);
		}
	}
}


export class Non_captureContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode { return this.getToken(PCREParser.QuestionMark, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Colon, 0); }
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public Pipe(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Pipe, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GreaterThan, 0); }
	public option_flags(): Option_flagsContext | undefined {
		return this.tryGetRuleContext(0, Option_flagsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_non_capture; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterNon_capture) {
			listener.enterNon_capture(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitNon_capture) {
			listener.exitNon_capture(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode { return this.getToken(PCREParser.QuestionMark, 0); }
	public Hash(): TerminalNode { return this.getToken(PCREParser.Hash, 0); }
	public non_close_parens(): Non_close_parensContext {
		return this.getRuleContext(0, Non_close_parensContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_comment; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	public option_flags(): Option_flagsContext[];
	public option_flags(i: number): Option_flagsContext;
	public option_flags(i?: number): Option_flagsContext | Option_flagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Option_flagsContext);
		} else {
			return this.getRuleContext(i, Option_flagsContext);
		}
	}
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Star, 0); }
	public NUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NUC, 0); }
	public OUC(): TerminalNode[];
	public OUC(i: number): TerminalNode;
	public OUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.OUC);
		} else {
			return this.getToken(PCREParser.OUC, i);
		}
	}
	public Underscore(): TerminalNode[];
	public Underscore(i: number): TerminalNode;
	public Underscore(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.Underscore);
		} else {
			return this.getToken(PCREParser.Underscore, i);
		}
	}
	public SUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SUC, 0); }
	public TUC(): TerminalNode[];
	public TUC(i: number): TerminalNode;
	public TUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.TUC);
		} else {
			return this.getToken(PCREParser.TUC, i);
		}
	}
	public AUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.AUC, 0); }
	public RUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RUC, 0); }
	public PUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PUC, 0); }
	public UUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.UUC, 0); }
	public FUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FUC, 0); }
	public D8(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D8, 0); }
	public D1(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D1, 0); }
	public D6(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D6, 0); }
	public CUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CUC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_option; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
}


export class Option_flagsContext extends ParserRuleContext {
	public option_flag(): Option_flagContext[];
	public option_flag(i: number): Option_flagContext;
	public option_flag(i?: number): Option_flagContext | Option_flagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Option_flagContext);
		} else {
			return this.getRuleContext(i, Option_flagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_option_flags; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterOption_flags) {
			listener.enterOption_flags(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitOption_flags) {
			listener.exitOption_flags(this);
		}
	}
}


export class Option_flagContext extends ParserRuleContext {
	public ILC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ILC, 0); }
	public JUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.JUC, 0); }
	public MLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.MLC, 0); }
	public SLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SLC, 0); }
	public UUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.UUC, 0); }
	public XLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.XLC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_option_flag; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterOption_flag) {
			listener.enterOption_flag(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitOption_flag) {
			listener.exitOption_flag(this);
		}
	}
}


export class Look_aroundContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode { return this.getToken(PCREParser.QuestionMark, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Equals, 0); }
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public Exclamation(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Exclamation, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LessThan, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_look_around; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterLook_around) {
			listener.enterLook_around(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitLook_around) {
			listener.exitLook_around(this);
		}
	}
}


export class Subroutine_referenceContext extends ParserRuleContext {
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	public RUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RUC, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CloseParen, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Plus, 0); }
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Ampersand, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public PUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PUC, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GreaterThan, 0); }
	public SubroutineOrNamedReferenceStartG(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SubroutineOrNamedReferenceStartG, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LessThan, 0); }
	public SingleQuote(): TerminalNode[];
	public SingleQuote(i: number): TerminalNode;
	public SingleQuote(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.SingleQuote);
		} else {
			return this.getToken(PCREParser.SingleQuote, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_subroutine_reference; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterSubroutine_reference) {
			listener.enterSubroutine_reference(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitSubroutine_reference) {
			listener.exitSubroutine_reference(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
	public OpenParen(): TerminalNode[];
	public OpenParen(i: number): TerminalNode;
	public OpenParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.OpenParen);
		} else {
			return this.getToken(PCREParser.OpenParen, i);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(PCREParser.QuestionMark, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public CloseParen(): TerminalNode[];
	public CloseParen(i: number): TerminalNode;
	public CloseParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.CloseParen);
		} else {
			return this.getToken(PCREParser.CloseParen, i);
		}
	}
	public alternation(): AlternationContext[];
	public alternation(i: number): AlternationContext;
	public alternation(i?: number): AlternationContext | AlternationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlternationContext);
		} else {
			return this.getRuleContext(i, AlternationContext);
		}
	}
	public Pipe(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Pipe, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Plus, 0); }
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LessThan, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GreaterThan, 0); }
	public SingleQuote(): TerminalNode[];
	public SingleQuote(i: number): TerminalNode;
	public SingleQuote(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.SingleQuote);
		} else {
			return this.getToken(PCREParser.SingleQuote, i);
		}
	}
	public RUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RUC, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Ampersand, 0); }
	public DUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.DUC, 0); }
	public EUC(): TerminalNode[];
	public EUC(i: number): TerminalNode;
	public EUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.EUC);
		} else {
			return this.getToken(PCREParser.EUC, i);
		}
	}
	public FUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FUC, 0); }
	public IUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.IUC, 0); }
	public NUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NUC, 0); }
	public ALC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ALC, 0); }
	public SLC(): TerminalNode[];
	public SLC(i: number): TerminalNode;
	public SLC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.SLC);
		} else {
			return this.getToken(PCREParser.SLC, i);
		}
	}
	public ELC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ELC, 0); }
	public RLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RLC, 0); }
	public TLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.TLC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_conditional; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
}


export class Backtrack_controlContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public Star(): TerminalNode { return this.getToken(PCREParser.Star, 0); }
	public AUC(): TerminalNode[];
	public AUC(i: number): TerminalNode;
	public AUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.AUC);
		} else {
			return this.getToken(PCREParser.AUC, i);
		}
	}
	public CUC(): TerminalNode[];
	public CUC(i: number): TerminalNode;
	public CUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.CUC);
		} else {
			return this.getToken(PCREParser.CUC, i);
		}
	}
	public EUC(): TerminalNode[];
	public EUC(i: number): TerminalNode;
	public EUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.EUC);
		} else {
			return this.getToken(PCREParser.EUC, i);
		}
	}
	public PUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PUC, 0); }
	public TUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.TUC, 0); }
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public FUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FUC, 0); }
	public IUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.IUC, 0); }
	public LUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LUC, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Colon, 0); }
	public NUC(): TerminalNode[];
	public NUC(i: number): TerminalNode;
	public NUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.NUC);
		} else {
			return this.getToken(PCREParser.NUC, i);
		}
	}
	public MUC(): TerminalNode[];
	public MUC(i: number): TerminalNode;
	public MUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.MUC);
		} else {
			return this.getToken(PCREParser.MUC, i);
		}
	}
	public RUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RUC, 0); }
	public KUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.KUC, 0); }
	public OUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OUC, 0); }
	public UUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.UUC, 0); }
	public SUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SUC, 0); }
	public HUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.HUC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_backtrack_control; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterBacktrack_control) {
			listener.enterBacktrack_control(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitBacktrack_control) {
			listener.exitBacktrack_control(this);
		}
	}
}


export class Newline_conventionContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public Star(): TerminalNode { return this.getToken(PCREParser.Star, 0); }
	public CUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CUC, 0); }
	public RUC(): TerminalNode[];
	public RUC(i: number): TerminalNode;
	public RUC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.RUC);
		} else {
			return this.getToken(PCREParser.RUC, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public LUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LUC, 0); }
	public FUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FUC, 0); }
	public AUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.AUC, 0); }
	public NUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NUC, 0); }
	public YUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.YUC, 0); }
	public BUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.BUC, 0); }
	public SUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SUC, 0); }
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Underscore, 0); }
	public UUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.UUC, 0); }
	public IUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.IUC, 0); }
	public OUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OUC, 0); }
	public DUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.DUC, 0); }
	public EUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EUC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_newline_convention; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterNewline_convention) {
			listener.enterNewline_convention(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitNewline_convention) {
			listener.exitNewline_convention(this);
		}
	}
}


export class CalloutContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(PCREParser.OpenParen, 0); }
	public QuestionMark(): TerminalNode { return this.getToken(PCREParser.QuestionMark, 0); }
	public CUC(): TerminalNode { return this.getToken(PCREParser.CUC, 0); }
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_callout; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterCallout) {
			listener.enterCallout(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitCallout) {
			listener.exitCallout(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public subroutine_reference(): Subroutine_referenceContext | undefined {
		return this.tryGetRuleContext(0, Subroutine_referenceContext);
	}
	public shared_atom(): Shared_atomContext | undefined {
		return this.tryGetRuleContext(0, Shared_atomContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public character_class(): Character_classContext | undefined {
		return this.tryGetRuleContext(0, Character_classContext);
	}
	public capture(): CaptureContext | undefined {
		return this.tryGetRuleContext(0, CaptureContext);
	}
	public non_capture(): Non_captureContext | undefined {
		return this.tryGetRuleContext(0, Non_captureContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public option(): OptionContext | undefined {
		return this.tryGetRuleContext(0, OptionContext);
	}
	public look_around(): Look_aroundContext | undefined {
		return this.tryGetRuleContext(0, Look_aroundContext);
	}
	public backreference(): BackreferenceContext | undefined {
		return this.tryGetRuleContext(0, BackreferenceContext);
	}
	public conditional(): ConditionalContext | undefined {
		return this.tryGetRuleContext(0, ConditionalContext);
	}
	public backtrack_control(): Backtrack_controlContext | undefined {
		return this.tryGetRuleContext(0, Backtrack_controlContext);
	}
	public newline_convention(): Newline_conventionContext | undefined {
		return this.tryGetRuleContext(0, Newline_conventionContext);
	}
	public callout(): CalloutContext | undefined {
		return this.tryGetRuleContext(0, CalloutContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Dot, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Caret, 0); }
	public StartOfSubject(): TerminalNode | undefined { return this.tryGetToken(PCREParser.StartOfSubject, 0); }
	public WordBoundary(): TerminalNode | undefined { return this.tryGetToken(PCREParser.WordBoundary, 0); }
	public NonWordBoundary(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NonWordBoundary, 0); }
	public EndOfSubjectOrLine(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EndOfSubjectOrLine, 0); }
	public EndOfSubjectOrLineEndOfSubject(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EndOfSubjectOrLineEndOfSubject, 0); }
	public EndOfSubject(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EndOfSubject, 0); }
	public PreviousMatchInSubject(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PreviousMatchInSubject, 0); }
	public ResetStartMatch(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ResetStartMatch, 0); }
	public OneDataUnit(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OneDataUnit, 0); }
	public ExtendedUnicodeChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ExtendedUnicodeChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_atom; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class Cc_atomContext extends ParserRuleContext {
	public cc_literal(): Cc_literalContext[];
	public cc_literal(i: number): Cc_literalContext;
	public cc_literal(i?: number): Cc_literalContext | Cc_literalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cc_literalContext);
		} else {
			return this.getRuleContext(i, Cc_literalContext);
		}
	}
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public shared_atom(): Shared_atomContext | undefined {
		return this.tryGetRuleContext(0, Shared_atomContext);
	}
	public backreference_or_octal(): Backreference_or_octalContext | undefined {
		return this.tryGetRuleContext(0, Backreference_or_octalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_cc_atom; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterCc_atom) {
			listener.enterCc_atom(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitCc_atom) {
			listener.exitCc_atom(this);
		}
	}
}


export class Shared_atomContext extends ParserRuleContext {
	public POSIXNamedSet(): TerminalNode | undefined { return this.tryGetToken(PCREParser.POSIXNamedSet, 0); }
	public POSIXNegatedNamedSet(): TerminalNode | undefined { return this.tryGetToken(PCREParser.POSIXNegatedNamedSet, 0); }
	public ControlChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ControlChar, 0); }
	public DecimalDigit(): TerminalNode | undefined { return this.tryGetToken(PCREParser.DecimalDigit, 0); }
	public NotDecimalDigit(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NotDecimalDigit, 0); }
	public HorizontalWhiteSpace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.HorizontalWhiteSpace, 0); }
	public NotHorizontalWhiteSpace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NotHorizontalWhiteSpace, 0); }
	public NotNewLine(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NotNewLine, 0); }
	public CharWithProperty(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CharWithProperty, 0); }
	public CharWithoutProperty(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CharWithoutProperty, 0); }
	public NewLineSequence(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NewLineSequence, 0); }
	public WhiteSpace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.WhiteSpace, 0); }
	public NotWhiteSpace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NotWhiteSpace, 0); }
	public VerticalWhiteSpace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.VerticalWhiteSpace, 0); }
	public NotVerticalWhiteSpace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NotVerticalWhiteSpace, 0); }
	public WordChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.WordChar, 0); }
	public NotWordChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NotWordChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_shared_atom; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterShared_atom) {
			listener.enterShared_atom(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitShared_atom) {
			listener.exitShared_atom(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public shared_literal(): Shared_literalContext | undefined {
		return this.tryGetRuleContext(0, Shared_literalContext);
	}
	public CharacterClassEnd(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CharacterClassEnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_literal; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class Cc_literalContext extends ParserRuleContext {
	public shared_literal(): Shared_literalContext | undefined {
		return this.tryGetRuleContext(0, Shared_literalContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Dot, 0); }
	public CharacterClassStart(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CharacterClassStart, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Caret, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QuestionMark, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Plus, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Star, 0); }
	public WordBoundary(): TerminalNode | undefined { return this.tryGetToken(PCREParser.WordBoundary, 0); }
	public EndOfSubjectOrLine(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EndOfSubjectOrLine, 0); }
	public Pipe(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Pipe, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_cc_literal; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterCc_literal) {
			listener.enterCc_literal(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitCc_literal) {
			listener.exitCc_literal(this);
		}
	}
}


export class Shared_literalContext extends ParserRuleContext {
	public octal_char(): Octal_charContext | undefined {
		return this.tryGetRuleContext(0, Octal_charContext);
	}
	public letter(): LetterContext | undefined {
		return this.tryGetRuleContext(0, LetterContext);
	}
	public digit(): DigitContext | undefined {
		return this.tryGetRuleContext(0, DigitContext);
	}
	public BellChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.BellChar, 0); }
	public EscapeChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EscapeChar, 0); }
	public FormFeed(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FormFeed, 0); }
	public NewLine(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NewLine, 0); }
	public CarriageReturn(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CarriageReturn, 0); }
	public Tab(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Tab, 0); }
	public HexChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.HexChar, 0); }
	public Quoted(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Quoted, 0); }
	public BlockQuoted(): TerminalNode | undefined { return this.tryGetToken(PCREParser.BlockQuoted, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CloseBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Comma, 0); }
	public Hyphen(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hyphen, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LessThan, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GreaterThan, 0); }
	public SingleQuote(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SingleQuote, 0); }
	public Underscore(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Underscore, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Colon, 0); }
	public Hash(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Hash, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Equals, 0); }
	public Exclamation(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Exclamation, 0); }
	public Ampersand(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Ampersand, 0); }
	public OtherChar(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OtherChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_shared_literal; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterShared_literal) {
			listener.enterShared_literal(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitShared_literal) {
			listener.exitShared_literal(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public digits(): DigitsContext {
		return this.getRuleContext(0, DigitsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_number; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class Octal_charContext extends ParserRuleContext {
	public Backslash(): TerminalNode | undefined { return this.tryGetToken(PCREParser.Backslash, 0); }
	public octal_digit(): Octal_digitContext[];
	public octal_digit(i: number): Octal_digitContext;
	public octal_digit(i?: number): Octal_digitContext | Octal_digitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Octal_digitContext);
		} else {
			return this.getRuleContext(i, Octal_digitContext);
		}
	}
	public D0(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D0, 0); }
	public D1(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D1, 0); }
	public D2(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D2, 0); }
	public D3(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_octal_char; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterOctal_char) {
			listener.enterOctal_char(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitOctal_char) {
			listener.exitOctal_char(this);
		}
	}
}


export class Octal_digitContext extends ParserRuleContext {
	public D0(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D0, 0); }
	public D1(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D1, 0); }
	public D2(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D2, 0); }
	public D3(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D3, 0); }
	public D4(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D4, 0); }
	public D5(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D5, 0); }
	public D6(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D6, 0); }
	public D7(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D7, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_octal_digit; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterOctal_digit) {
			listener.enterOctal_digit(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitOctal_digit) {
			listener.exitOctal_digit(this);
		}
	}
}


export class DigitsContext extends ParserRuleContext {
	public digit(): DigitContext[];
	public digit(i: number): DigitContext;
	public digit(i?: number): DigitContext | DigitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DigitContext);
		} else {
			return this.getRuleContext(i, DigitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_digits; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterDigits) {
			listener.enterDigits(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitDigits) {
			listener.exitDigits(this);
		}
	}
}


export class DigitContext extends ParserRuleContext {
	public D0(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D0, 0); }
	public D1(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D1, 0); }
	public D2(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D2, 0); }
	public D3(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D3, 0); }
	public D4(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D4, 0); }
	public D5(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D5, 0); }
	public D6(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D6, 0); }
	public D7(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D7, 0); }
	public D8(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D8, 0); }
	public D9(): TerminalNode | undefined { return this.tryGetToken(PCREParser.D9, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_digit; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterDigit) {
			listener.enterDigit(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitDigit) {
			listener.exitDigit(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public alpha_nums(): Alpha_numsContext {
		return this.getRuleContext(0, Alpha_numsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_name; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class Alpha_numsContext extends ParserRuleContext {
	public letter(): LetterContext[];
	public letter(i: number): LetterContext;
	public letter(i?: number): LetterContext | LetterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetterContext);
		} else {
			return this.getRuleContext(i, LetterContext);
		}
	}
	public Underscore(): TerminalNode[];
	public Underscore(i: number): TerminalNode;
	public Underscore(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PCREParser.Underscore);
		} else {
			return this.getToken(PCREParser.Underscore, i);
		}
	}
	public digit(): DigitContext[];
	public digit(i: number): DigitContext;
	public digit(i?: number): DigitContext | DigitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DigitContext);
		} else {
			return this.getRuleContext(i, DigitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_alpha_nums; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterAlpha_nums) {
			listener.enterAlpha_nums(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitAlpha_nums) {
			listener.exitAlpha_nums(this);
		}
	}
}


export class Non_close_parensContext extends ParserRuleContext {
	public non_close_paren(): Non_close_parenContext[];
	public non_close_paren(i: number): Non_close_parenContext;
	public non_close_paren(i?: number): Non_close_parenContext | Non_close_parenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Non_close_parenContext);
		} else {
			return this.getRuleContext(i, Non_close_parenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_non_close_parens; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterNon_close_parens) {
			listener.enterNon_close_parens(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitNon_close_parens) {
			listener.exitNon_close_parens(this);
		}
	}
}


export class Non_close_parenContext extends ParserRuleContext {
	public CloseParen(): TerminalNode { return this.getToken(PCREParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_non_close_paren; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterNon_close_paren) {
			listener.enterNon_close_paren(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitNon_close_paren) {
			listener.exitNon_close_paren(this);
		}
	}
}


export class LetterContext extends ParserRuleContext {
	public ALC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ALC, 0); }
	public BLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.BLC, 0); }
	public CLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CLC, 0); }
	public DLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.DLC, 0); }
	public ELC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ELC, 0); }
	public FLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FLC, 0); }
	public GLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GLC, 0); }
	public HLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.HLC, 0); }
	public ILC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ILC, 0); }
	public JLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.JLC, 0); }
	public KLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.KLC, 0); }
	public LLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LLC, 0); }
	public MLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.MLC, 0); }
	public NLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NLC, 0); }
	public OLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OLC, 0); }
	public PLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PLC, 0); }
	public QLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QLC, 0); }
	public RLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RLC, 0); }
	public SLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SLC, 0); }
	public TLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.TLC, 0); }
	public ULC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ULC, 0); }
	public VLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.VLC, 0); }
	public WLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.WLC, 0); }
	public XLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.XLC, 0); }
	public YLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.YLC, 0); }
	public ZLC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ZLC, 0); }
	public AUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.AUC, 0); }
	public BUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.BUC, 0); }
	public CUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.CUC, 0); }
	public DUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.DUC, 0); }
	public EUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.EUC, 0); }
	public FUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.FUC, 0); }
	public GUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.GUC, 0); }
	public HUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.HUC, 0); }
	public IUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.IUC, 0); }
	public JUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.JUC, 0); }
	public KUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.KUC, 0); }
	public LUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.LUC, 0); }
	public MUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.MUC, 0); }
	public NUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.NUC, 0); }
	public OUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.OUC, 0); }
	public PUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.PUC, 0); }
	public QUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.QUC, 0); }
	public RUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.RUC, 0); }
	public SUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.SUC, 0); }
	public TUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.TUC, 0); }
	public UUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.UUC, 0); }
	public VUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.VUC, 0); }
	public WUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.WUC, 0); }
	public XUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.XUC, 0); }
	public YUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.YUC, 0); }
	public ZUC(): TerminalNode | undefined { return this.tryGetToken(PCREParser.ZUC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PCREParser.RULE_letter; }
	// @Override
	public enterRule(listener: PCREListener): void {
		if (listener.enterLetter) {
			listener.enterLetter(this);
		}
	}
	// @Override
	public exitRule(listener: PCREListener): void {
		if (listener.exitLetter) {
			listener.exitLetter(this);
		}
	}
}


