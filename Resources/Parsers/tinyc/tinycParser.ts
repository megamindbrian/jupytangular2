// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tinycListener } from "./tinycListener";

export class tinycParser extends Parser {
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
	public static readonly STRING = 14;
	public static readonly INT = 15;
	public static readonly WS = 16;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_paren_expr = 2;
	public static readonly RULE_expr = 3;
	public static readonly RULE_test = 4;
	public static readonly RULE_sum = 5;
	public static readonly RULE_term = 6;
	public static readonly RULE_id = 7;
	public static readonly RULE_integer = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "paren_expr", "expr", "test", "sum", "term", "id", 
		"integer",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'if'", "'else'", "'while'", "'do'", "';'", "'{'", "'}'", "'('", 
		"')'", "'='", "'<'", "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"STRING", "INT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tinycParser._LITERAL_NAMES, tinycParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tinycParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tinyc.g4"; }

	// @Override
	public get ruleNames(): string[] { return tinycParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tinycParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tinycParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tinycParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.statement();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinycParser.T__0) | (1 << tinycParser.T__2) | (1 << tinycParser.T__3) | (1 << tinycParser.T__4) | (1 << tinycParser.T__5) | (1 << tinycParser.T__7) | (1 << tinycParser.STRING) | (1 << tinycParser.INT))) !== 0));
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tinycParser.RULE_statement);
		let _la: number;
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 23;
				this.match(tinycParser.T__0);
				this.state = 24;
				this.paren_expr();
				this.state = 25;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.match(tinycParser.T__0);
				this.state = 28;
				this.paren_expr();
				this.state = 29;
				this.statement();
				this.state = 30;
				this.match(tinycParser.T__1);
				this.state = 31;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 33;
				this.match(tinycParser.T__2);
				this.state = 34;
				this.paren_expr();
				this.state = 35;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.match(tinycParser.T__3);
				this.state = 38;
				this.statement();
				this.state = 39;
				this.match(tinycParser.T__2);
				this.state = 40;
				this.paren_expr();
				this.state = 41;
				this.match(tinycParser.T__4);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 43;
				this.match(tinycParser.T__5);
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinycParser.T__0) | (1 << tinycParser.T__2) | (1 << tinycParser.T__3) | (1 << tinycParser.T__4) | (1 << tinycParser.T__5) | (1 << tinycParser.T__7) | (1 << tinycParser.STRING) | (1 << tinycParser.INT))) !== 0)) {
					{
					{
					this.state = 44;
					this.statement();
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 50;
				this.match(tinycParser.T__6);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.expr();
				this.state = 52;
				this.match(tinycParser.T__4);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 54;
				this.match(tinycParser.T__4);
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
	public paren_expr(): Paren_exprContext {
		let _localctx: Paren_exprContext = new Paren_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tinycParser.RULE_paren_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(tinycParser.T__7);
			this.state = 58;
			this.expr();
			this.state = 59;
			this.match(tinycParser.T__8);
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
		this.enterRule(_localctx, 6, tinycParser.RULE_expr);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.id();
				this.state = 63;
				this.match(tinycParser.T__9);
				this.state = 64;
				this.expr();
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, tinycParser.RULE_test);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.sum(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.sum(0);
				this.state = 70;
				this.match(tinycParser.T__10);
				this.state = 71;
				this.sum(0);
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

	public sum(): SumContext;
	public sum(_p: number): SumContext;
	// @RuleVersion(0)
	public sum(_p?: number): SumContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SumContext = new SumContext(this._ctx, _parentState);
		let _prevctx: SumContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, tinycParser.RULE_sum, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 76;
			this.term();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 86;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 84;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						_localctx = new SumContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, tinycParser.RULE_sum);
						this.state = 78;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 79;
						this.match(tinycParser.T__11);
						this.state = 80;
						this.term();
						}
						break;

					case 2:
						{
						_localctx = new SumContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, tinycParser.RULE_sum);
						this.state = 81;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 82;
						this.match(tinycParser.T__12);
						this.state = 83;
						this.term();
						}
						break;
					}
					}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, tinycParser.RULE_term);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinycParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 89;
				this.id();
				}
				break;
			case tinycParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.integer();
				}
				break;
			case tinycParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.paren_expr();
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, tinycParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(tinycParser.STRING);
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, tinycParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(tinycParser.INT);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.sum_sempred(_localctx as SumContext, predIndex);
		}
		return true;
	}
	private sum_sempred(_localctx: SumContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12e\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
		"\x02\x17\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x030\n\x03\f\x03\x0E\x03" +
		"3\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"E\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06L\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"W\n\x07\f\x07\x0E\x07Z\v\x07\x03\b\x03\b\x03\b\x05\b_\n\b\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x02\x02\x03\f\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02\x02i\x02\x15\x03\x02\x02\x02\x04" +
		"9\x03\x02\x02\x02\x06;\x03\x02\x02\x02\bD\x03\x02\x02\x02\nK\x03\x02\x02" +
		"\x02\fM\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10`\x03\x02\x02\x02\x12" +
		"b\x03\x02\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16" +
		"\x17\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18" +
		"\x03\x03\x02\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B" +
		"\x1C\x05\x04\x03\x02\x1C:\x03\x02\x02\x02\x1D\x1E\x07\x03\x02\x02\x1E" +
		"\x1F\x05\x06\x04\x02\x1F \x05\x04\x03\x02 !\x07\x04\x02\x02!\"\x05\x04" +
		"\x03\x02\":\x03\x02\x02\x02#$\x07\x05\x02\x02$%\x05\x06\x04\x02%&\x05" +
		"\x04\x03\x02&:\x03\x02\x02\x02\'(\x07\x06\x02\x02()\x05\x04\x03\x02)*" +
		"\x07\x05\x02\x02*+\x05\x06\x04\x02+,\x07\x07\x02\x02,:\x03\x02\x02\x02" +
		"-1\x07\b\x02\x02.0\x05\x04\x03\x02/.\x03\x02\x02\x0203\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x02" +
		"4:\x07\t\x02\x0256\x05\b\x05\x0267\x07\x07\x02\x027:\x03\x02\x02\x028" +
		":\x07\x07\x02\x029\x19\x03\x02\x02\x029\x1D\x03\x02\x02\x029#\x03\x02" +
		"\x02\x029\'\x03\x02\x02\x029-\x03\x02\x02\x0295\x03\x02\x02\x0298\x03" +
		"\x02\x02\x02:\x05\x03\x02\x02\x02;<\x07\n\x02\x02<=\x05\b\x05\x02=>\x07" +
		"\v\x02\x02>\x07\x03\x02\x02\x02?E\x05\n\x06\x02@A\x05\x10\t\x02AB\x07" +
		"\f\x02\x02BC\x05\b\x05\x02CE\x03\x02\x02\x02D?\x03\x02\x02\x02D@\x03\x02" +
		"\x02\x02E\t\x03\x02\x02\x02FL\x05\f\x07\x02GH\x05\f\x07\x02HI\x07\r\x02" +
		"\x02IJ\x05\f\x07\x02JL\x03\x02\x02\x02KF\x03\x02\x02\x02KG\x03\x02\x02" +
		"\x02L\v\x03\x02\x02\x02MN\b\x07\x01\x02NO\x05\x0E\b\x02OX\x03\x02\x02" +
		"\x02PQ\f\x04\x02\x02QR\x07\x0E\x02\x02RW\x05\x0E\b\x02ST\f\x03\x02\x02" +
		"TU\x07\x0F\x02\x02UW\x05\x0E\b\x02VP\x03\x02\x02\x02VS\x03\x02\x02\x02" +
		"WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\r\x03\x02\x02" +
		"\x02ZX\x03\x02\x02\x02[_\x05\x10\t\x02\\_\x05\x12\n\x02]_\x05\x06\x04" +
		"\x02^[\x03\x02\x02\x02^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_\x0F\x03\x02" +
		"\x02\x02`a\x07\x10\x02\x02a\x11\x03\x02\x02\x02bc\x07\x11\x02\x02c\x13" +
		"\x03\x02\x02\x02\n\x1719DKVX^";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tinycParser.__ATN) {
			tinycParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tinycParser._serializedATN));
		}

		return tinycParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_program; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public paren_expr(): Paren_exprContext | undefined {
		return this.tryGetRuleContext(0, Paren_exprContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_statement; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class Paren_exprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_paren_expr; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterParen_expr) {
			listener.enterParen_expr(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitParen_expr) {
			listener.exitParen_expr(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_expr; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	public sum(): SumContext[];
	public sum(i: number): SumContext;
	public sum(i?: number): SumContext | SumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SumContext);
		} else {
			return this.getRuleContext(i, SumContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_test; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterTest) {
			listener.enterTest(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitTest) {
			listener.exitTest(this);
		}
	}
}


export class SumContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public sum(): SumContext | undefined {
		return this.tryGetRuleContext(0, SumContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_sum; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterSum) {
			listener.enterSum(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitSum) {
			listener.exitSum(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public paren_expr(): Paren_exprContext | undefined {
		return this.tryGetRuleContext(0, Paren_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_term; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinycParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_id; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(tinycParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinycParser.RULE_integer; }
	// @Override
	public enterRule(listener: tinycListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: tinycListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


