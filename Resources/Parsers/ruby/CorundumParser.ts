// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ruby/Corundum.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { CorundumListener } from "./CorundumListener";

export class CorundumParser extends Parser {
	public static readonly LITERAL = 1;
	public static readonly COMMA = 2;
	public static readonly SEMICOLON = 3;
	public static readonly CRLF = 4;
	public static readonly REQUIRE = 5;
	public static readonly END = 6;
	public static readonly DEF = 7;
	public static readonly RETURN = 8;
	public static readonly PIR = 9;
	public static readonly IF = 10;
	public static readonly ELSE = 11;
	public static readonly ELSIF = 12;
	public static readonly UNLESS = 13;
	public static readonly WHILE = 14;
	public static readonly RETRY = 15;
	public static readonly BREAK = 16;
	public static readonly FOR = 17;
	public static readonly TRUE = 18;
	public static readonly FALSE = 19;
	public static readonly PLUS = 20;
	public static readonly MINUS = 21;
	public static readonly MUL = 22;
	public static readonly DIV = 23;
	public static readonly MOD = 24;
	public static readonly EXP = 25;
	public static readonly EQUAL = 26;
	public static readonly NOT_EQUAL = 27;
	public static readonly GREATER = 28;
	public static readonly LESS = 29;
	public static readonly LESS_EQUAL = 30;
	public static readonly GREATER_EQUAL = 31;
	public static readonly ASSIGN = 32;
	public static readonly PLUS_ASSIGN = 33;
	public static readonly MINUS_ASSIGN = 34;
	public static readonly MUL_ASSIGN = 35;
	public static readonly DIV_ASSIGN = 36;
	public static readonly MOD_ASSIGN = 37;
	public static readonly EXP_ASSIGN = 38;
	public static readonly BIT_AND = 39;
	public static readonly BIT_OR = 40;
	public static readonly BIT_XOR = 41;
	public static readonly BIT_NOT = 42;
	public static readonly BIT_SHL = 43;
	public static readonly BIT_SHR = 44;
	public static readonly AND = 45;
	public static readonly OR = 46;
	public static readonly NOT = 47;
	public static readonly LEFT_RBRACKET = 48;
	public static readonly RIGHT_RBRACKET = 49;
	public static readonly LEFT_SBRACKET = 50;
	public static readonly RIGHT_SBRACKET = 51;
	public static readonly NIL = 52;
	public static readonly SL_COMMENT = 53;
	public static readonly ML_COMMENT = 54;
	public static readonly WS = 55;
	public static readonly INT = 56;
	public static readonly FLOAT = 57;
	public static readonly ID = 58;
	public static readonly ID_GLOBAL = 59;
	public static readonly ID_FUNCTION = 60;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expression_list = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_global_get = 3;
	public static readonly RULE_global_set = 4;
	public static readonly RULE_global_result = 5;
	public static readonly RULE_function_inline_call = 6;
	public static readonly RULE_require_block = 7;
	public static readonly RULE_pir_inline = 8;
	public static readonly RULE_pir_expression_list = 9;
	public static readonly RULE_function_definition = 10;
	public static readonly RULE_function_definition_body = 11;
	public static readonly RULE_function_definition_header = 12;
	public static readonly RULE_function_name = 13;
	public static readonly RULE_function_definition_params = 14;
	public static readonly RULE_function_definition_params_list = 15;
	public static readonly RULE_function_definition_param_id = 16;
	public static readonly RULE_return_statement = 17;
	public static readonly RULE_function_call = 18;
	public static readonly RULE_function_call_param_list = 19;
	public static readonly RULE_function_call_params = 20;
	public static readonly RULE_function_param = 21;
	public static readonly RULE_function_unnamed_param = 22;
	public static readonly RULE_function_named_param = 23;
	public static readonly RULE_function_call_assignment = 24;
	public static readonly RULE_all_result = 25;
	public static readonly RULE_elsif_statement = 26;
	public static readonly RULE_if_elsif_statement = 27;
	public static readonly RULE_if_statement = 28;
	public static readonly RULE_unless_statement = 29;
	public static readonly RULE_while_statement = 30;
	public static readonly RULE_for_statement = 31;
	public static readonly RULE_init_expression = 32;
	public static readonly RULE_all_assignment = 33;
	public static readonly RULE_for_init_list = 34;
	public static readonly RULE_cond_expression = 35;
	public static readonly RULE_loop_expression = 36;
	public static readonly RULE_for_loop_list = 37;
	public static readonly RULE_statement_body = 38;
	public static readonly RULE_statement_expression_list = 39;
	public static readonly RULE_assignment = 40;
	public static readonly RULE_dynamic_assignment = 41;
	public static readonly RULE_int_assignment = 42;
	public static readonly RULE_float_assignment = 43;
	public static readonly RULE_string_assignment = 44;
	public static readonly RULE_initial_array_assignment = 45;
	public static readonly RULE_array_assignment = 46;
	public static readonly RULE_array_definition = 47;
	public static readonly RULE_array_definition_elements = 48;
	public static readonly RULE_array_selector = 49;
	public static readonly RULE_dynamic_result = 50;
	public static readonly RULE_dynamic = 51;
	public static readonly RULE_int_result = 52;
	public static readonly RULE_float_result = 53;
	public static readonly RULE_string_result = 54;
	public static readonly RULE_comparison_list = 55;
	public static readonly RULE_comparison = 56;
	public static readonly RULE_comp_var = 57;
	public static readonly RULE_lvalue = 58;
	public static readonly RULE_rvalue = 59;
	public static readonly RULE_break_expression = 60;
	public static readonly RULE_literal_t = 61;
	public static readonly RULE_float_t = 62;
	public static readonly RULE_int_t = 63;
	public static readonly RULE_bool_t = 64;
	public static readonly RULE_nil_t = 65;
	public static readonly RULE_id = 66;
	public static readonly RULE_id_global = 67;
	public static readonly RULE_id_function = 68;
	public static readonly RULE_terminator = 69;
	public static readonly RULE_else_token = 70;
	public static readonly RULE_crlf = 71;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expression_list", "expression", "global_get", "global_set", "global_result", 
		"function_inline_call", "require_block", "pir_inline", "pir_expression_list", 
		"function_definition", "function_definition_body", "function_definition_header", 
		"function_name", "function_definition_params", "function_definition_params_list", 
		"function_definition_param_id", "return_statement", "function_call", "function_call_param_list", 
		"function_call_params", "function_param", "function_unnamed_param", "function_named_param", 
		"function_call_assignment", "all_result", "elsif_statement", "if_elsif_statement", 
		"if_statement", "unless_statement", "while_statement", "for_statement", 
		"init_expression", "all_assignment", "for_init_list", "cond_expression", 
		"loop_expression", "for_loop_list", "statement_body", "statement_expression_list", 
		"assignment", "dynamic_assignment", "int_assignment", "float_assignment", 
		"string_assignment", "initial_array_assignment", "array_assignment", "array_definition", 
		"array_definition_elements", "array_selector", "dynamic_result", "dynamic", 
		"int_result", "float_result", "string_result", "comparison_list", "comparison", 
		"comp_var", "lvalue", "rvalue", "break_expression", "literal_t", "float_t", 
		"int_t", "bool_t", "nil_t", "id", "id_global", "id_function", "terminator", 
		"else_token", "crlf",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "','", "';'", undefined, "'require'", "'end'", "'def'", 
		"'return'", "'pir'", "'if'", "'else'", "'elsif'", "'unless'", "'while'", 
		"'retry'", "'break'", "'for'", "'true'", "'false'", "'+'", "'-'", "'*'", 
		"'/'", "'%'", "'**'", "'=='", "'!='", "'>'", "'<'", "'<='", "'>='", "'='", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'**='", "'&'", "'|'", "'^'", 
		"'~'", "'<<'", "'>>'", undefined, undefined, undefined, "'('", "')'", 
		"'['", "']'", "'nil'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LITERAL", "COMMA", "SEMICOLON", "CRLF", "REQUIRE", "END", 
		"DEF", "RETURN", "PIR", "IF", "ELSE", "ELSIF", "UNLESS", "WHILE", "RETRY", 
		"BREAK", "FOR", "TRUE", "FALSE", "PLUS", "MINUS", "MUL", "DIV", "MOD", 
		"EXP", "EQUAL", "NOT_EQUAL", "GREATER", "LESS", "LESS_EQUAL", "GREATER_EQUAL", 
		"ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"EXP_ASSIGN", "BIT_AND", "BIT_OR", "BIT_XOR", "BIT_NOT", "BIT_SHL", "BIT_SHR", 
		"AND", "OR", "NOT", "LEFT_RBRACKET", "RIGHT_RBRACKET", "LEFT_SBRACKET", 
		"RIGHT_SBRACKET", "NIL", "SL_COMMENT", "ML_COMMENT", "WS", "INT", "FLOAT", 
		"ID", "ID_GLOBAL", "ID_FUNCTION",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CorundumParser._LITERAL_NAMES, CorundumParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CorundumParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Corundum.g4"; }

	// @Override
	public get ruleNames(): string[] { return CorundumParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CorundumParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CorundumParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CorundumParser.RULE_prog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.expression_list(0);
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

	public expression_list(): Expression_listContext;
	public expression_list(_p: number): Expression_listContext;
	// @RuleVersion(0)
	public expression_list(_p?: number): Expression_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expression_listContext = new Expression_listContext(this._ctx, _parentState);
		let _prevctx: Expression_listContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CorundumParser.RULE_expression_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.LITERAL:
			case CorundumParser.REQUIRE:
			case CorundumParser.DEF:
			case CorundumParser.RETURN:
			case CorundumParser.PIR:
			case CorundumParser.IF:
			case CorundumParser.UNLESS:
			case CorundumParser.WHILE:
			case CorundumParser.FOR:
			case CorundumParser.TRUE:
			case CorundumParser.FALSE:
			case CorundumParser.BIT_NOT:
			case CorundumParser.NOT:
			case CorundumParser.LEFT_RBRACKET:
			case CorundumParser.NIL:
			case CorundumParser.INT:
			case CorundumParser.FLOAT:
			case CorundumParser.ID:
			case CorundumParser.ID_GLOBAL:
			case CorundumParser.ID_FUNCTION:
				{
				this.state = 147;
				this.expression();
				this.state = 148;
				this.terminator(0);
				}
				break;
			case CorundumParser.SEMICOLON:
			case CorundumParser.CRLF:
				{
				this.state = 150;
				this.terminator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 159;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expression_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_expression_list);
					this.state = 153;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 154;
					this.expression();
					this.state = 155;
					this.terminator(0);
					}
					}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CorundumParser.RULE_expression);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.function_definition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.function_inline_call();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 164;
				this.require_block();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 165;
				this.if_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 166;
				this.unless_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 167;
				this.rvalue(0);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 168;
				this.return_statement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 169;
				this.while_statement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 170;
				this.for_statement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 171;
				this.pir_inline();
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
	public global_get(): Global_getContext {
		let _localctx: Global_getContext = new Global_getContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CorundumParser.RULE_global_get);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			_localctx._var_name = this.lvalue();
			this.state = 175;
			_localctx._op = this.match(CorundumParser.ASSIGN);
			this.state = 176;
			_localctx._global_name = this.id_global();
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
	public global_set(): Global_setContext {
		let _localctx: Global_setContext = new Global_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CorundumParser.RULE_global_set);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			_localctx._global_name = this.id_global();
			this.state = 179;
			_localctx._op = this.match(CorundumParser.ASSIGN);
			this.state = 180;
			_localctx._result = this.all_result();
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
	public global_result(): Global_resultContext {
		let _localctx: Global_resultContext = new Global_resultContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CorundumParser.RULE_global_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.id_global();
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
	public function_inline_call(): Function_inline_callContext {
		let _localctx: Function_inline_callContext = new Function_inline_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CorundumParser.RULE_function_inline_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.function_call();
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
	public require_block(): Require_blockContext {
		let _localctx: Require_blockContext = new Require_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CorundumParser.RULE_require_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(CorundumParser.REQUIRE);
			this.state = 187;
			this.literal_t();
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
	public pir_inline(): Pir_inlineContext {
		let _localctx: Pir_inlineContext = new Pir_inlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CorundumParser.RULE_pir_inline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(CorundumParser.PIR);
			this.state = 190;
			this.crlf();
			this.state = 191;
			this.pir_expression_list();
			this.state = 192;
			this.match(CorundumParser.END);
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
	public pir_expression_list(): Pir_expression_listContext {
		let _localctx: Pir_expression_listContext = new Pir_expression_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CorundumParser.RULE_pir_expression_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.expression_list(0);
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
	public function_definition(): Function_definitionContext {
		let _localctx: Function_definitionContext = new Function_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CorundumParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.function_definition_header();
			this.state = 197;
			this.function_definition_body();
			this.state = 198;
			this.match(CorundumParser.END);
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
	public function_definition_body(): Function_definition_bodyContext {
		let _localctx: Function_definition_bodyContext = new Function_definition_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CorundumParser.RULE_function_definition_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.expression_list(0);
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
	public function_definition_header(): Function_definition_headerContext {
		let _localctx: Function_definition_headerContext = new Function_definition_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CorundumParser.RULE_function_definition_header);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.match(CorundumParser.DEF);
				this.state = 203;
				this.function_name();
				this.state = 204;
				this.crlf();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.match(CorundumParser.DEF);
				this.state = 207;
				this.function_name();
				this.state = 208;
				this.function_definition_params();
				this.state = 209;
				this.crlf();
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
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CorundumParser.RULE_function_name);
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.ID_FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.id_function();
				}
				break;
			case CorundumParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.id();
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
	public function_definition_params(): Function_definition_paramsContext {
		let _localctx: Function_definition_paramsContext = new Function_definition_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CorundumParser.RULE_function_definition_params);
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 217;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 218;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 220;
				this.function_definition_params_list(0);
				this.state = 221;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.function_definition_params_list(0);
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

	public function_definition_params_list(): Function_definition_params_listContext;
	public function_definition_params_list(_p: number): Function_definition_params_listContext;
	// @RuleVersion(0)
	public function_definition_params_list(_p?: number): Function_definition_params_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Function_definition_params_listContext = new Function_definition_params_listContext(this._ctx, _parentState);
		let _prevctx: Function_definition_params_listContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CorundumParser.RULE_function_definition_params_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 227;
			this.function_definition_param_id();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Function_definition_params_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_function_definition_params_list);
					this.state = 229;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 230;
					this.match(CorundumParser.COMMA);
					this.state = 231;
					this.function_definition_param_id();
					}
					}
				}
				this.state = 236;
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
	public function_definition_param_id(): Function_definition_param_idContext {
		let _localctx: Function_definition_param_idContext = new Function_definition_param_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CorundumParser.RULE_function_definition_param_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.id();
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
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CorundumParser.RULE_return_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(CorundumParser.RETURN);
			this.state = 240;
			this.all_result();
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
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CorundumParser.RULE_function_call);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				_localctx._name = this.function_name();
				this.state = 243;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 244;
				_localctx._params = this.function_call_param_list();
				this.state = 245;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 247;
				_localctx._name = this.function_name();
				this.state = 248;
				_localctx._params = this.function_call_param_list();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				_localctx._name = this.function_name();
				this.state = 251;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 252;
				this.match(CorundumParser.RIGHT_RBRACKET);
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
	public function_call_param_list(): Function_call_param_listContext {
		let _localctx: Function_call_param_listContext = new Function_call_param_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CorundumParser.RULE_function_call_param_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.function_call_params(0);
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

	public function_call_params(): Function_call_paramsContext;
	public function_call_params(_p: number): Function_call_paramsContext;
	// @RuleVersion(0)
	public function_call_params(_p?: number): Function_call_paramsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Function_call_paramsContext = new Function_call_paramsContext(this._ctx, _parentState);
		let _prevctx: Function_call_paramsContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, CorundumParser.RULE_function_call_params, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 259;
			this.function_param();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Function_call_paramsContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_function_call_params);
					this.state = 261;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 262;
					this.match(CorundumParser.COMMA);
					this.state = 263;
					this.function_param();
					}
					}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	public function_param(): Function_paramContext {
		let _localctx: Function_paramContext = new Function_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CorundumParser.RULE_function_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 269;
				this.function_unnamed_param();
				}
				break;

			case 2:
				{
				this.state = 270;
				this.function_named_param();
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
	public function_unnamed_param(): Function_unnamed_paramContext {
		let _localctx: Function_unnamed_paramContext = new Function_unnamed_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CorundumParser.RULE_function_unnamed_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.int_result(0);
				}
				break;

			case 2:
				{
				this.state = 274;
				this.float_result(0);
				}
				break;

			case 3:
				{
				this.state = 275;
				this.string_result(0);
				}
				break;

			case 4:
				{
				this.state = 276;
				this.dynamic_result(0);
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
	public function_named_param(): Function_named_paramContext {
		let _localctx: Function_named_paramContext = new Function_named_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CorundumParser.RULE_function_named_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.id();
			this.state = 280;
			_localctx._op = this.match(CorundumParser.ASSIGN);
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.int_result(0);
				}
				break;

			case 2:
				{
				this.state = 282;
				this.float_result(0);
				}
				break;

			case 3:
				{
				this.state = 283;
				this.string_result(0);
				}
				break;

			case 4:
				{
				this.state = 284;
				this.dynamic_result(0);
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
	public function_call_assignment(): Function_call_assignmentContext {
		let _localctx: Function_call_assignmentContext = new Function_call_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CorundumParser.RULE_function_call_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.function_call();
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
	public all_result(): All_resultContext {
		let _localctx: All_resultContext = new All_resultContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CorundumParser.RULE_all_result);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 289;
				this.int_result(0);
				}
				break;

			case 2:
				{
				this.state = 290;
				this.float_result(0);
				}
				break;

			case 3:
				{
				this.state = 291;
				this.string_result(0);
				}
				break;

			case 4:
				{
				this.state = 292;
				this.dynamic_result(0);
				}
				break;

			case 5:
				{
				this.state = 293;
				this.global_result();
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
	public elsif_statement(): Elsif_statementContext {
		let _localctx: Elsif_statementContext = new Elsif_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CorundumParser.RULE_elsif_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.if_elsif_statement();
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
	public if_elsif_statement(): If_elsif_statementContext {
		let _localctx: If_elsif_statementContext = new If_elsif_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CorundumParser.RULE_if_elsif_statement);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.match(CorundumParser.ELSIF);
				this.state = 299;
				this.cond_expression();
				this.state = 300;
				this.crlf();
				this.state = 301;
				this.statement_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 303;
				this.match(CorundumParser.ELSIF);
				this.state = 304;
				this.cond_expression();
				this.state = 305;
				this.crlf();
				this.state = 306;
				this.statement_body();
				this.state = 307;
				this.else_token();
				this.state = 308;
				this.crlf();
				this.state = 309;
				this.statement_body();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 311;
				this.match(CorundumParser.ELSIF);
				this.state = 312;
				this.cond_expression();
				this.state = 313;
				this.crlf();
				this.state = 314;
				this.statement_body();
				this.state = 315;
				this.if_elsif_statement();
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
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CorundumParser.RULE_if_statement);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.match(CorundumParser.IF);
				this.state = 320;
				this.cond_expression();
				this.state = 321;
				this.crlf();
				this.state = 322;
				this.statement_body();
				this.state = 323;
				this.match(CorundumParser.END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 325;
				this.match(CorundumParser.IF);
				this.state = 326;
				this.cond_expression();
				this.state = 327;
				this.crlf();
				this.state = 328;
				this.statement_body();
				this.state = 329;
				this.else_token();
				this.state = 330;
				this.crlf();
				this.state = 331;
				this.statement_body();
				this.state = 332;
				this.match(CorundumParser.END);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 334;
				this.match(CorundumParser.IF);
				this.state = 335;
				this.cond_expression();
				this.state = 336;
				this.crlf();
				this.state = 337;
				this.statement_body();
				this.state = 338;
				this.elsif_statement();
				this.state = 339;
				this.match(CorundumParser.END);
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
	public unless_statement(): Unless_statementContext {
		let _localctx: Unless_statementContext = new Unless_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CorundumParser.RULE_unless_statement);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.match(CorundumParser.UNLESS);
				this.state = 344;
				this.cond_expression();
				this.state = 345;
				this.crlf();
				this.state = 346;
				this.statement_body();
				this.state = 347;
				this.match(CorundumParser.END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 349;
				this.match(CorundumParser.UNLESS);
				this.state = 350;
				this.cond_expression();
				this.state = 351;
				this.crlf();
				this.state = 352;
				this.statement_body();
				this.state = 353;
				this.else_token();
				this.state = 354;
				this.crlf();
				this.state = 355;
				this.statement_body();
				this.state = 356;
				this.match(CorundumParser.END);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 358;
				this.match(CorundumParser.UNLESS);
				this.state = 359;
				this.cond_expression();
				this.state = 360;
				this.crlf();
				this.state = 361;
				this.statement_body();
				this.state = 362;
				this.elsif_statement();
				this.state = 363;
				this.match(CorundumParser.END);
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
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CorundumParser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(CorundumParser.WHILE);
			this.state = 368;
			this.cond_expression();
			this.state = 369;
			this.crlf();
			this.state = 370;
			this.statement_body();
			this.state = 371;
			this.match(CorundumParser.END);
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
	public for_statement(): For_statementContext {
		let _localctx: For_statementContext = new For_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CorundumParser.RULE_for_statement);
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.match(CorundumParser.FOR);
				this.state = 374;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 375;
				this.init_expression();
				this.state = 376;
				this.match(CorundumParser.SEMICOLON);
				this.state = 377;
				this.cond_expression();
				this.state = 378;
				this.match(CorundumParser.SEMICOLON);
				this.state = 379;
				this.loop_expression();
				this.state = 380;
				this.match(CorundumParser.RIGHT_RBRACKET);
				this.state = 381;
				this.crlf();
				this.state = 382;
				this.statement_body();
				this.state = 383;
				this.match(CorundumParser.END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.match(CorundumParser.FOR);
				this.state = 386;
				this.init_expression();
				this.state = 387;
				this.match(CorundumParser.SEMICOLON);
				this.state = 388;
				this.cond_expression();
				this.state = 389;
				this.match(CorundumParser.SEMICOLON);
				this.state = 390;
				this.loop_expression();
				this.state = 391;
				this.crlf();
				this.state = 392;
				this.statement_body();
				this.state = 393;
				this.match(CorundumParser.END);
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
	public init_expression(): Init_expressionContext {
		let _localctx: Init_expressionContext = new Init_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CorundumParser.RULE_init_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.for_init_list(0);
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
	public all_assignment(): All_assignmentContext {
		let _localctx: All_assignmentContext = new All_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CorundumParser.RULE_all_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 399;
				this.int_assignment();
				}
				break;

			case 2:
				{
				this.state = 400;
				this.float_assignment();
				}
				break;

			case 3:
				{
				this.state = 401;
				this.string_assignment();
				}
				break;

			case 4:
				{
				this.state = 402;
				this.dynamic_assignment();
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

	public for_init_list(): For_init_listContext;
	public for_init_list(_p: number): For_init_listContext;
	// @RuleVersion(0)
	public for_init_list(_p?: number): For_init_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: For_init_listContext = new For_init_listContext(this._ctx, _parentState);
		let _prevctx: For_init_listContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, CorundumParser.RULE_for_init_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 406;
			this.all_assignment();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 413;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new For_init_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_for_init_list);
					this.state = 408;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 409;
					this.match(CorundumParser.COMMA);
					this.state = 410;
					this.all_assignment();
					}
					}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public cond_expression(): Cond_expressionContext {
		let _localctx: Cond_expressionContext = new Cond_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CorundumParser.RULE_cond_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.comparison_list();
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
	public loop_expression(): Loop_expressionContext {
		let _localctx: Loop_expressionContext = new Loop_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CorundumParser.RULE_loop_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.for_loop_list(0);
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

	public for_loop_list(): For_loop_listContext;
	public for_loop_list(_p: number): For_loop_listContext;
	// @RuleVersion(0)
	public for_loop_list(_p?: number): For_loop_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: For_loop_listContext = new For_loop_listContext(this._ctx, _parentState);
		let _prevctx: For_loop_listContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, CorundumParser.RULE_for_loop_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 421;
			this.all_assignment();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 428;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new For_loop_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_for_loop_list);
					this.state = 423;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 424;
					this.match(CorundumParser.COMMA);
					this.state = 425;
					this.all_assignment();
					}
					}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
	public statement_body(): Statement_bodyContext {
		let _localctx: Statement_bodyContext = new Statement_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CorundumParser.RULE_statement_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.statement_expression_list(0);
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

	public statement_expression_list(): Statement_expression_listContext;
	public statement_expression_list(_p: number): Statement_expression_listContext;
	// @RuleVersion(0)
	public statement_expression_list(_p?: number): Statement_expression_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Statement_expression_listContext = new Statement_expression_listContext(this._ctx, _parentState);
		let _prevctx: Statement_expression_listContext = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, CorundumParser.RULE_statement_expression_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.LITERAL:
			case CorundumParser.REQUIRE:
			case CorundumParser.DEF:
			case CorundumParser.RETURN:
			case CorundumParser.PIR:
			case CorundumParser.IF:
			case CorundumParser.UNLESS:
			case CorundumParser.WHILE:
			case CorundumParser.FOR:
			case CorundumParser.TRUE:
			case CorundumParser.FALSE:
			case CorundumParser.BIT_NOT:
			case CorundumParser.NOT:
			case CorundumParser.LEFT_RBRACKET:
			case CorundumParser.NIL:
			case CorundumParser.INT:
			case CorundumParser.FLOAT:
			case CorundumParser.ID:
			case CorundumParser.ID_GLOBAL:
			case CorundumParser.ID_FUNCTION:
				{
				this.state = 434;
				this.expression();
				this.state = 435;
				this.terminator(0);
				}
				break;
			case CorundumParser.RETRY:
				{
				this.state = 437;
				this.match(CorundumParser.RETRY);
				this.state = 438;
				this.terminator(0);
				}
				break;
			case CorundumParser.BREAK:
				{
				this.state = 439;
				this.break_expression();
				this.state = 440;
				this.terminator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 455;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new Statement_expression_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_statement_expression_list);
						this.state = 444;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 445;
						this.expression();
						this.state = 446;
						this.terminator(0);
						}
						break;

					case 2:
						{
						_localctx = new Statement_expression_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_statement_expression_list);
						this.state = 448;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 449;
						this.match(CorundumParser.RETRY);
						this.state = 450;
						this.terminator(0);
						}
						break;

					case 3:
						{
						_localctx = new Statement_expression_listContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_statement_expression_list);
						this.state = 451;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 452;
						this.break_expression();
						this.state = 453;
						this.terminator(0);
						}
						break;
					}
					}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CorundumParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				_localctx._var_id = this.lvalue();
				this.state = 461;
				_localctx._op = this.match(CorundumParser.ASSIGN);
				this.state = 462;
				this.rvalue(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				_localctx._var_id = this.lvalue();
				this.state = 465;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 466;
				this.rvalue(0);
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
	public dynamic_assignment(): Dynamic_assignmentContext {
		let _localctx: Dynamic_assignmentContext = new Dynamic_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CorundumParser.RULE_dynamic_assignment);
		let _la: number;
		try {
			this.state = 478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				_localctx._var_id = this.lvalue();
				this.state = 471;
				_localctx._op = this.match(CorundumParser.ASSIGN);
				this.state = 472;
				this.dynamic_result(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
				_localctx._var_id = this.lvalue();
				this.state = 475;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 476;
				this.dynamic_result(0);
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
	public int_assignment(): Int_assignmentContext {
		let _localctx: Int_assignmentContext = new Int_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CorundumParser.RULE_int_assignment);
		let _la: number;
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 480;
				_localctx._var_id = this.lvalue();
				this.state = 481;
				_localctx._op = this.match(CorundumParser.ASSIGN);
				this.state = 482;
				this.int_result(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 484;
				_localctx._var_id = this.lvalue();
				this.state = 485;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 486;
				this.int_result(0);
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
	public float_assignment(): Float_assignmentContext {
		let _localctx: Float_assignmentContext = new Float_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CorundumParser.RULE_float_assignment);
		let _la: number;
		try {
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 490;
				_localctx._var_id = this.lvalue();
				this.state = 491;
				_localctx._op = this.match(CorundumParser.ASSIGN);
				this.state = 492;
				this.float_result(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				_localctx._var_id = this.lvalue();
				this.state = 495;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 496;
				this.float_result(0);
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
	public string_assignment(): String_assignmentContext {
		let _localctx: String_assignmentContext = new String_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CorundumParser.RULE_string_assignment);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				_localctx._var_id = this.lvalue();
				this.state = 501;
				_localctx._op = this.match(CorundumParser.ASSIGN);
				this.state = 502;
				this.string_result(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				_localctx._var_id = this.lvalue();
				this.state = 505;
				_localctx._op = this.match(CorundumParser.PLUS_ASSIGN);
				this.state = 506;
				this.string_result(0);
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
	public initial_array_assignment(): Initial_array_assignmentContext {
		let _localctx: Initial_array_assignmentContext = new Initial_array_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CorundumParser.RULE_initial_array_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			_localctx._var_id = this.lvalue();
			this.state = 511;
			_localctx._op = this.match(CorundumParser.ASSIGN);
			this.state = 512;
			this.match(CorundumParser.LEFT_SBRACKET);
			this.state = 513;
			this.match(CorundumParser.RIGHT_SBRACKET);
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
	public array_assignment(): Array_assignmentContext {
		let _localctx: Array_assignmentContext = new Array_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CorundumParser.RULE_array_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_localctx._arr_def = this.array_selector();
			this.state = 516;
			_localctx._op = this.match(CorundumParser.ASSIGN);
			this.state = 517;
			_localctx._arr_val = this.all_result();
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
	public array_definition(): Array_definitionContext {
		let _localctx: Array_definitionContext = new Array_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CorundumParser.RULE_array_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(CorundumParser.LEFT_SBRACKET);
			this.state = 520;
			this.array_definition_elements(0);
			this.state = 521;
			this.match(CorundumParser.RIGHT_SBRACKET);
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

	public array_definition_elements(): Array_definition_elementsContext;
	public array_definition_elements(_p: number): Array_definition_elementsContext;
	// @RuleVersion(0)
	public array_definition_elements(_p?: number): Array_definition_elementsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Array_definition_elementsContext = new Array_definition_elementsContext(this._ctx, _parentState);
		let _prevctx: Array_definition_elementsContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, CorundumParser.RULE_array_definition_elements, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 524;
				this.int_result(0);
				}
				break;

			case 2:
				{
				this.state = 525;
				this.dynamic_result(0);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 536;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Array_definition_elementsContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_array_definition_elements);
					this.state = 528;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 529;
					this.match(CorundumParser.COMMA);
					this.state = 532;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
					case 1:
						{
						this.state = 530;
						this.int_result(0);
						}
						break;

					case 2:
						{
						this.state = 531;
						this.dynamic_result(0);
						}
						break;
					}
					}
					}
				}
				this.state = 538;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public array_selector(): Array_selectorContext {
		let _localctx: Array_selectorContext = new Array_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CorundumParser.RULE_array_selector);
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.id();
				this.state = 540;
				this.match(CorundumParser.LEFT_SBRACKET);
				this.state = 543;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 541;
					this.int_result(0);
					}
					break;

				case 2:
					{
					this.state = 542;
					this.dynamic_result(0);
					}
					break;
				}
				this.state = 545;
				this.match(CorundumParser.RIGHT_SBRACKET);
				}
				break;
			case CorundumParser.ID_GLOBAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 547;
				this.id_global();
				this.state = 548;
				this.match(CorundumParser.LEFT_SBRACKET);
				this.state = 551;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 549;
					this.int_result(0);
					}
					break;

				case 2:
					{
					this.state = 550;
					this.dynamic_result(0);
					}
					break;
				}
				this.state = 553;
				this.match(CorundumParser.RIGHT_SBRACKET);
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

	public dynamic_result(): Dynamic_resultContext;
	public dynamic_result(_p: number): Dynamic_resultContext;
	// @RuleVersion(0)
	public dynamic_result(_p?: number): Dynamic_resultContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Dynamic_resultContext = new Dynamic_resultContext(this._ctx, _parentState);
		let _prevctx: Dynamic_resultContext = _localctx;
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, CorundumParser.RULE_dynamic_result, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.int_result(0);
				this.state = 559;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 560;
				this.dynamic_result(13);
				}
				break;

			case 2:
				{
				this.state = 562;
				this.float_result(0);
				this.state = 563;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 564;
				this.dynamic_result(11);
				}
				break;

			case 3:
				{
				this.state = 566;
				this.string_result(0);
				this.state = 567;
				_localctx._op = this.match(CorundumParser.MUL);
				this.state = 568;
				this.dynamic_result(8);
				}
				break;

			case 4:
				{
				this.state = 570;
				this.int_result(0);
				this.state = 571;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 572;
				this.dynamic_result(6);
				}
				break;

			case 5:
				{
				this.state = 574;
				this.float_result(0);
				this.state = 575;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 576;
				this.dynamic_result(4);
				}
				break;

			case 6:
				{
				this.state = 578;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 579;
				this.dynamic_result(0);
				this.state = 580;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;

			case 7:
				{
				this.state = 582;
				this.dynamic();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 608;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 606;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 585;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 586;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 587;
						this.dynamic_result(11);
						}
						break;

					case 2:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 588;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 589;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 590;
						this.dynamic_result(4);
						}
						break;

					case 3:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 591;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 592;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 593;
						this.int_result(0);
						}
						break;

					case 4:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 594;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 595;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 596;
						this.float_result(0);
						}
						break;

					case 5:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 597;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 598;
						_localctx._op = this.match(CorundumParser.MUL);
						this.state = 599;
						this.string_result(0);
						}
						break;

					case 6:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 600;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 601;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 602;
						this.int_result(0);
						}
						break;

					case 7:
						{
						_localctx = new Dynamic_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_dynamic_result);
						this.state = 603;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 604;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 605;
						this.float_result(0);
						}
						break;
					}
					}
				}
				this.state = 610;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
	public dynamic(): DynamicContext {
		let _localctx: DynamicContext = new DynamicContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CorundumParser.RULE_dynamic);
		try {
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 611;
				this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 612;
				this.function_call_assignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 613;
				this.array_selector();
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

	public int_result(): Int_resultContext;
	public int_result(_p: number): Int_resultContext;
	// @RuleVersion(0)
	public int_result(_p?: number): Int_resultContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Int_resultContext = new Int_resultContext(this._ctx, _parentState);
		let _prevctx: Int_resultContext = _localctx;
		let _startState: number = 104;
		this.enterRecursionRule(_localctx, 104, CorundumParser.RULE_int_result, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.LEFT_RBRACKET:
				{
				this.state = 617;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 618;
				this.int_result(0);
				this.state = 619;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;
			case CorundumParser.INT:
				{
				this.state = 621;
				this.int_t();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 632;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 630;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						_localctx = new Int_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_int_result);
						this.state = 624;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 625;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 626;
						this.int_result(5);
						}
						break;

					case 2:
						{
						_localctx = new Int_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_int_result);
						this.state = 627;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 628;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 629;
						this.int_result(4);
						}
						break;
					}
					}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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

	public float_result(): Float_resultContext;
	public float_result(_p: number): Float_resultContext;
	// @RuleVersion(0)
	public float_result(_p?: number): Float_resultContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Float_resultContext = new Float_resultContext(this._ctx, _parentState);
		let _prevctx: Float_resultContext = _localctx;
		let _startState: number = 106;
		this.enterRecursionRule(_localctx, 106, CorundumParser.RULE_float_result, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 636;
				this.int_result(0);
				this.state = 637;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 638;
				this.float_result(7);
				}
				break;

			case 2:
				{
				this.state = 640;
				this.int_result(0);
				this.state = 641;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 642;
				this.float_result(4);
				}
				break;

			case 3:
				{
				this.state = 644;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 645;
				this.float_result(0);
				this.state = 646;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;

			case 4:
				{
				this.state = 648;
				this.float_t();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 665;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 663;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new Float_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_float_result);
						this.state = 651;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 652;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 653;
						this.float_result(9);
						}
						break;

					case 2:
						{
						_localctx = new Float_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_float_result);
						this.state = 654;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 655;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 656;
						this.float_result(6);
						}
						break;

					case 3:
						{
						_localctx = new Float_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_float_result);
						this.state = 657;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 658;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 659;
						this.int_result(0);
						}
						break;

					case 4:
						{
						_localctx = new Float_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_float_result);
						this.state = 660;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 661;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 662;
						this.int_result(0);
						}
						break;
					}
					}
				}
				this.state = 667;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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

	public string_result(): String_resultContext;
	public string_result(_p: number): String_resultContext;
	// @RuleVersion(0)
	public string_result(_p?: number): String_resultContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: String_resultContext = new String_resultContext(this._ctx, _parentState);
		let _prevctx: String_resultContext = _localctx;
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, CorundumParser.RULE_string_result, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.LEFT_RBRACKET:
			case CorundumParser.INT:
				{
				this.state = 669;
				this.int_result(0);
				this.state = 670;
				_localctx._op = this.match(CorundumParser.MUL);
				this.state = 671;
				this.string_result(3);
				}
				break;
			case CorundumParser.LITERAL:
				{
				this.state = 673;
				this.literal_t();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 684;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 682;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						_localctx = new String_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_string_result);
						this.state = 676;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 677;
						_localctx._op = this.match(CorundumParser.PLUS);
						this.state = 678;
						this.string_result(3);
						}
						break;

					case 2:
						{
						_localctx = new String_resultContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_string_result);
						this.state = 679;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 680;
						_localctx._op = this.match(CorundumParser.MUL);
						this.state = 681;
						this.int_result(0);
						}
						break;
					}
					}
				}
				this.state = 686;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
	public comparison_list(): Comparison_listContext {
		let _localctx: Comparison_listContext = new Comparison_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CorundumParser.RULE_comparison_list);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 687;
				_localctx._left = this.comparison();
				this.state = 688;
				_localctx._op = this.match(CorundumParser.BIT_AND);
				this.state = 689;
				_localctx._right = this.comparison_list();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 691;
				_localctx._left = this.comparison();
				this.state = 692;
				_localctx._op = this.match(CorundumParser.AND);
				this.state = 693;
				_localctx._right = this.comparison_list();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 695;
				_localctx._left = this.comparison();
				this.state = 696;
				_localctx._op = this.match(CorundumParser.BIT_OR);
				this.state = 697;
				_localctx._right = this.comparison_list();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 699;
				_localctx._left = this.comparison();
				this.state = 700;
				_localctx._op = this.match(CorundumParser.OR);
				this.state = 701;
				_localctx._right = this.comparison_list();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 703;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 704;
				this.comparison_list();
				this.state = 705;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 707;
				this.comparison();
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
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CorundumParser.RULE_comparison);
		let _la: number;
		try {
			this.state = 718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 710;
				_localctx._left = this.comp_var();
				this.state = 711;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.GREATER) | (1 << CorundumParser.LESS) | (1 << CorundumParser.LESS_EQUAL) | (1 << CorundumParser.GREATER_EQUAL))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 712;
				_localctx._right = this.comp_var();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 714;
				_localctx._left = this.comp_var();
				this.state = 715;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CorundumParser.EQUAL || _la === CorundumParser.NOT_EQUAL)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 716;
				_localctx._right = this.comp_var();
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
	public comp_var(): Comp_varContext {
		let _localctx: Comp_varContext = new Comp_varContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CorundumParser.RULE_comp_var);
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
				this.all_result();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				this.array_selector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 722;
				this.id();
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
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CorundumParser.RULE_lvalue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.id();
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

	public rvalue(): RvalueContext;
	public rvalue(_p: number): RvalueContext;
	// @RuleVersion(0)
	public rvalue(_p?: number): RvalueContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RvalueContext = new RvalueContext(this._ctx, _parentState);
		let _prevctx: RvalueContext = _localctx;
		let _startState: number = 118;
		this.enterRecursionRule(_localctx, 118, CorundumParser.RULE_rvalue, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 728;
				this.lvalue();
				}
				break;

			case 2:
				{
				this.state = 729;
				this.initial_array_assignment();
				}
				break;

			case 3:
				{
				this.state = 730;
				this.array_assignment();
				}
				break;

			case 4:
				{
				this.state = 731;
				this.int_result(0);
				}
				break;

			case 5:
				{
				this.state = 732;
				this.float_result(0);
				}
				break;

			case 6:
				{
				this.state = 733;
				this.string_result(0);
				}
				break;

			case 7:
				{
				this.state = 734;
				this.global_set();
				}
				break;

			case 8:
				{
				this.state = 735;
				this.global_get();
				}
				break;

			case 9:
				{
				this.state = 736;
				this.dynamic_assignment();
				}
				break;

			case 10:
				{
				this.state = 737;
				this.string_assignment();
				}
				break;

			case 11:
				{
				this.state = 738;
				this.float_assignment();
				}
				break;

			case 12:
				{
				this.state = 739;
				this.int_assignment();
				}
				break;

			case 13:
				{
				this.state = 740;
				this.assignment();
				}
				break;

			case 14:
				{
				this.state = 741;
				this.function_call();
				}
				break;

			case 15:
				{
				this.state = 742;
				this.literal_t();
				}
				break;

			case 16:
				{
				this.state = 743;
				this.bool_t();
				}
				break;

			case 17:
				{
				this.state = 744;
				this.float_t();
				}
				break;

			case 18:
				{
				this.state = 745;
				this.int_t();
				}
				break;

			case 19:
				{
				this.state = 746;
				this.nil_t();
				}
				break;

			case 20:
				{
				this.state = 747;
				_la = this._input.LA(1);
				if (!(_la === CorundumParser.BIT_NOT || _la === CorundumParser.NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 748;
				this.rvalue(10);
				}
				break;

			case 21:
				{
				this.state = 749;
				this.match(CorundumParser.LEFT_RBRACKET);
				this.state = 750;
				this.rvalue(0);
				this.state = 751;
				this.match(CorundumParser.RIGHT_RBRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 784;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 782;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 755;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 756;
						this.match(CorundumParser.EXP);
						this.state = 757;
						this.rvalue(12);
						}
						break;

					case 2:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 758;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 759;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 760;
						this.rvalue(10);
						}
						break;

					case 3:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 761;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 762;
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.PLUS || _la === CorundumParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 763;
						this.rvalue(9);
						}
						break;

					case 4:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 764;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 765;
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.BIT_SHL || _la === CorundumParser.BIT_SHR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 766;
						this.rvalue(8);
						}
						break;

					case 5:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 767;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 768;
						this.match(CorundumParser.BIT_AND);
						this.state = 769;
						this.rvalue(7);
						}
						break;

					case 6:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 770;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 771;
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.BIT_OR || _la === CorundumParser.BIT_XOR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 772;
						this.rvalue(6);
						}
						break;

					case 7:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 773;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 774;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CorundumParser.GREATER) | (1 << CorundumParser.LESS) | (1 << CorundumParser.LESS_EQUAL) | (1 << CorundumParser.GREATER_EQUAL))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 775;
						this.rvalue(5);
						}
						break;

					case 8:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 776;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 777;
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.EQUAL || _la === CorundumParser.NOT_EQUAL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 778;
						this.rvalue(4);
						}
						break;

					case 9:
						{
						_localctx = new RvalueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_rvalue);
						this.state = 779;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 780;
						_la = this._input.LA(1);
						if (!(_la === CorundumParser.AND || _la === CorundumParser.OR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 781;
						this.rvalue(3);
						}
						break;
					}
					}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
	public break_expression(): Break_expressionContext {
		let _localctx: Break_expressionContext = new Break_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CorundumParser.RULE_break_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.match(CorundumParser.BREAK);
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
	public literal_t(): Literal_tContext {
		let _localctx: Literal_tContext = new Literal_tContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CorundumParser.RULE_literal_t);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(CorundumParser.LITERAL);
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
	public float_t(): Float_tContext {
		let _localctx: Float_tContext = new Float_tContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CorundumParser.RULE_float_t);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.match(CorundumParser.FLOAT);
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
	public int_t(): Int_tContext {
		let _localctx: Int_tContext = new Int_tContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CorundumParser.RULE_int_t);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(CorundumParser.INT);
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
	public bool_t(): Bool_tContext {
		let _localctx: Bool_tContext = new Bool_tContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CorundumParser.RULE_bool_t);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			_la = this._input.LA(1);
			if (!(_la === CorundumParser.TRUE || _la === CorundumParser.FALSE)) {
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
	public nil_t(): Nil_tContext {
		let _localctx: Nil_tContext = new Nil_tContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CorundumParser.RULE_nil_t);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(CorundumParser.NIL);
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
		this.enterRule(_localctx, 132, CorundumParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.match(CorundumParser.ID);
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
	public id_global(): Id_globalContext {
		let _localctx: Id_globalContext = new Id_globalContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CorundumParser.RULE_id_global);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.match(CorundumParser.ID_GLOBAL);
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
	public id_function(): Id_functionContext {
		let _localctx: Id_functionContext = new Id_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CorundumParser.RULE_id_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(CorundumParser.ID_FUNCTION);
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

	public terminator(): TerminatorContext;
	public terminator(_p: number): TerminatorContext;
	// @RuleVersion(0)
	public terminator(_p?: number): TerminatorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TerminatorContext = new TerminatorContext(this._ctx, _parentState);
		let _prevctx: TerminatorContext = _localctx;
		let _startState: number = 138;
		this.enterRecursionRule(_localctx, 138, CorundumParser.RULE_terminator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CorundumParser.SEMICOLON:
				{
				this.state = 806;
				this.match(CorundumParser.SEMICOLON);
				}
				break;
			case CorundumParser.CRLF:
				{
				this.state = 807;
				this.crlf();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 816;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 814;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new TerminatorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_terminator);
						this.state = 810;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 811;
						this.match(CorundumParser.SEMICOLON);
						}
						break;

					case 2:
						{
						_localctx = new TerminatorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CorundumParser.RULE_terminator);
						this.state = 812;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 813;
						this.crlf();
						}
						break;
					}
					}
				}
				this.state = 818;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
	public else_token(): Else_tokenContext {
		let _localctx: Else_tokenContext = new Else_tokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CorundumParser.RULE_else_token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(CorundumParser.ELSE);
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
	public crlf(): CrlfContext {
		let _localctx: CrlfContext = new CrlfContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CorundumParser.RULE_crlf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.match(CorundumParser.CRLF);
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
		case 1:
			return this.expression_list_sempred(_localctx as Expression_listContext, predIndex);

		case 15:
			return this.function_definition_params_list_sempred(_localctx as Function_definition_params_listContext, predIndex);

		case 20:
			return this.function_call_params_sempred(_localctx as Function_call_paramsContext, predIndex);

		case 34:
			return this.for_init_list_sempred(_localctx as For_init_listContext, predIndex);

		case 37:
			return this.for_loop_list_sempred(_localctx as For_loop_listContext, predIndex);

		case 39:
			return this.statement_expression_list_sempred(_localctx as Statement_expression_listContext, predIndex);

		case 48:
			return this.array_definition_elements_sempred(_localctx as Array_definition_elementsContext, predIndex);

		case 50:
			return this.dynamic_result_sempred(_localctx as Dynamic_resultContext, predIndex);

		case 52:
			return this.int_result_sempred(_localctx as Int_resultContext, predIndex);

		case 53:
			return this.float_result_sempred(_localctx as Float_resultContext, predIndex);

		case 54:
			return this.string_result_sempred(_localctx as String_resultContext, predIndex);

		case 59:
			return this.rvalue_sempred(_localctx as RvalueContext, predIndex);

		case 69:
			return this.terminator_sempred(_localctx as TerminatorContext, predIndex);
		}
		return true;
	}
	private expression_list_sempred(_localctx: Expression_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private function_definition_params_list_sempred(_localctx: Function_definition_params_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private function_call_params_sempred(_localctx: Function_call_paramsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private for_init_list_sempred(_localctx: For_init_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private for_loop_list_sempred(_localctx: For_loop_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private statement_expression_list_sempred(_localctx: Statement_expression_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private array_definition_elements_sempred(_localctx: Array_definition_elementsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private dynamic_result_sempred(_localctx: Dynamic_resultContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 14);

		case 12:
			return this.precpred(this._ctx, 12);

		case 13:
			return this.precpred(this._ctx, 9);

		case 14:
			return this.precpred(this._ctx, 7);

		case 15:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private int_result_sempred(_localctx: Int_resultContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 4);

		case 17:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private float_result_sempred(_localctx: Float_resultContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 8);

		case 19:
			return this.precpred(this._ctx, 5);

		case 20:
			return this.precpred(this._ctx, 6);

		case 21:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private string_result_sempred(_localctx: String_resultContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 2);

		case 23:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private rvalue_sempred(_localctx: RvalueContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 11);

		case 25:
			return this.precpred(this._ctx, 9);

		case 26:
			return this.precpred(this._ctx, 8);

		case 27:
			return this.precpred(this._ctx, 7);

		case 28:
			return this.precpred(this._ctx, 6);

		case 29:
			return this.precpred(this._ctx, 5);

		case 30:
			return this.precpred(this._ctx, 4);

		case 31:
			return this.precpred(this._ctx, 3);

		case 32:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private terminator_sempred(_localctx: TerminatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.precpred(this._ctx, 4);

		case 34:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03>\u033A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\x9A\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"\xA0\n\x03\f\x03\x0E\x03\xA3\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAF\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD6\n\x0E\x03\x0F\x03" +
		"\x0F\x05\x0F\xDA\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\xE3\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\xEB\n\x11\f\x11\x0E\x11\xEE\v\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0101\n\x14\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u010B\n\x16" +
		"\f\x16\x0E\x16\u010E\v\x16\x03\x17\x03\x17\x05\x17\u0112\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u0118\n\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x05\x19\u0120\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0129\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u0140\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0158\n\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0170\n\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u018E\n!\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x05#\u0196\n#\x03$\x03$\x03$\x03$\x03$\x03$\x07" +
		"$\u019E\n$\f$\x0E$\u01A1\v$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x07\'\u01AD\n\'\f\'\x0E\'\u01B0\v\'\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u01BD\n)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u01CA\n)\f)\x0E)\u01CD\v)\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u01D7\n*\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x05+\u01E1\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x05,\u01EB\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u01F5" +
		"\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u01FF\n.\x03/\x03/\x03" +
		"/\x03/\x03/\x030\x030\x030\x030\x031\x031\x031\x031\x032\x032\x032\x05" +
		"2\u0211\n2\x032\x032\x032\x032\x052\u0217\n2\x072\u0219\n2\f2\x0E2\u021C" +
		"\v2\x033\x033\x033\x033\x053\u0222\n3\x033\x033\x033\x033\x033\x033\x05" +
		"3\u022A\n3\x033\x033\x053\u022E\n3\x034\x034\x034\x034\x034\x034\x034" +
		"\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x054\u024A\n4\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x074\u0261\n4\f4\x0E4\u0264\v4\x035\x035\x035\x055\u0269\n5\x03" +
		"6\x036\x036\x036\x036\x036\x056\u0271\n6\x036\x036\x036\x036\x036\x03" +
		"6\x076\u0279\n6\f6\x0E6\u027C\v6\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x057\u028C\n7\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x077\u029A\n7\f7\x0E7\u029D\v7\x03" +
		"8\x038\x038\x038\x038\x038\x058\u02A5\n8\x038\x038\x038\x038\x038\x03" +
		"8\x078\u02AD\n8\f8\x0E8\u02B0\v8\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x05" +
		"9\u02C7\n9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u02D1\n:\x03;" +
		"\x03;\x03;\x05;\u02D6\n;\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=" +
		"\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x05=\u02F4\n=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u0311\n=\f=\x0E=\u0314\v=\x03" +
		">\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03" +
		"E\x03E\x03F\x03F\x03G\x03G\x03G\x05G\u032B\nG\x03G\x03G\x03G\x03G\x07" +
		"G\u0331\nG\fG\x0EG\u0334\vG\x03H\x03H\x03I\x03I\x03I\x02\x02\x0F\x04 " +
		"*FLPbfjlnx\x8CJ\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x02\f\x03\x02#(\x03\x02\x18\x1A\x03\x02\x16\x17\x03" +
		"\x02\x1E!\x03\x02\x1C\x1D\x04\x02,,11\x03\x02-.\x03\x02*+\x03\x02/0\x03" +
		"\x02\x14\x15\x02\u036F\x02\x92\x03\x02\x02\x02\x04\x99\x03\x02\x02\x02" +
		"\x06\xAE\x03\x02\x02\x02\b\xB0\x03\x02\x02\x02\n\xB4\x03\x02\x02\x02\f" +
		"\xB8\x03\x02\x02\x02\x0E\xBA\x03\x02\x02\x02\x10\xBC\x03\x02\x02\x02\x12" +
		"\xBF\x03\x02\x02\x02\x14\xC4\x03\x02\x02\x02\x16\xC6\x03\x02\x02\x02\x18" +
		"\xCA\x03\x02\x02\x02\x1A\xD5\x03\x02\x02\x02\x1C\xD9\x03\x02\x02\x02\x1E" +
		"\xE2\x03\x02\x02\x02 \xE4\x03\x02\x02\x02\"\xEF\x03\x02\x02\x02$\xF1\x03" +
		"\x02\x02\x02&\u0100\x03\x02\x02\x02(\u0102\x03\x02\x02\x02*\u0104\x03" +
		"\x02\x02\x02,\u0111\x03\x02\x02\x02.\u0117\x03\x02\x02\x020\u0119\x03" +
		"\x02\x02\x022\u0121\x03\x02\x02\x024\u0128\x03\x02\x02\x026\u012A\x03" +
		"\x02\x02\x028\u013F\x03\x02\x02\x02:\u0157\x03\x02\x02\x02<\u016F\x03" +
		"\x02\x02\x02>\u0171\x03\x02\x02\x02@\u018D\x03\x02\x02\x02B\u018F\x03" +
		"\x02\x02\x02D\u0195\x03\x02\x02\x02F\u0197\x03\x02\x02\x02H\u01A2\x03" +
		"\x02\x02\x02J\u01A4\x03\x02\x02\x02L\u01A6\x03\x02\x02\x02N\u01B1\x03" +
		"\x02\x02\x02P\u01BC\x03\x02\x02\x02R\u01D6\x03\x02\x02\x02T\u01E0\x03" +
		"\x02\x02\x02V\u01EA\x03\x02\x02\x02X\u01F4\x03\x02\x02\x02Z\u01FE\x03" +
		"\x02\x02\x02\\\u0200\x03\x02\x02\x02^\u0205\x03\x02\x02\x02`\u0209\x03" +
		"\x02\x02\x02b\u020D\x03\x02\x02\x02d\u022D\x03\x02\x02\x02f\u0249\x03" +
		"\x02\x02\x02h\u0268\x03\x02\x02\x02j\u0270\x03\x02\x02\x02l\u028B\x03" +
		"\x02\x02\x02n\u02A4\x03\x02\x02\x02p\u02C6\x03\x02\x02\x02r\u02D0\x03" +
		"\x02\x02\x02t\u02D5\x03\x02\x02\x02v\u02D7\x03\x02\x02\x02x\u02F3\x03" +
		"\x02\x02\x02z\u0315\x03\x02\x02\x02|\u0317\x03\x02\x02\x02~\u0319\x03" +
		"\x02\x02\x02\x80\u031B\x03\x02\x02\x02\x82\u031D\x03\x02\x02\x02\x84\u031F" +
		"\x03\x02\x02\x02\x86\u0321\x03\x02\x02\x02\x88\u0323\x03\x02\x02\x02\x8A" +
		"\u0325\x03\x02\x02\x02\x8C\u032A\x03\x02\x02\x02\x8E\u0335\x03\x02\x02" +
		"\x02\x90\u0337\x03\x02\x02\x02\x92\x93\x05\x04\x03\x02\x93\x03\x03\x02" +
		"\x02\x02\x94\x95\b\x03\x01\x02\x95\x96\x05\x06\x04\x02\x96\x97\x05\x8C" +
		"G\x02\x97\x9A\x03\x02\x02\x02\x98\x9A\x05\x8CG\x02\x99\x94\x03\x02\x02" +
		"\x02\x99\x98\x03\x02\x02\x02\x9A\xA1\x03\x02\x02\x02\x9B\x9C\f\x04\x02" +
		"\x02\x9C\x9D\x05\x06\x04\x02\x9D\x9E\x05\x8CG\x02\x9E\xA0\x03\x02\x02" +
		"\x02\x9F\x9B\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\x05\x03\x02\x02\x02\xA3\xA1\x03\x02\x02" +
		"\x02\xA4\xAF\x05\x16\f\x02\xA5\xAF\x05\x0E\b\x02\xA6\xAF\x05\x10\t\x02" +
		"\xA7\xAF\x05:\x1E\x02\xA8\xAF\x05<\x1F\x02\xA9\xAF\x05x=\x02\xAA\xAF\x05" +
		"$\x13\x02\xAB\xAF\x05> \x02\xAC\xAF\x05@!\x02\xAD\xAF\x05\x12\n\x02\xAE" +
		"\xA4\x03\x02\x02\x02\xAE\xA5\x03\x02\x02\x02\xAE\xA6\x03\x02\x02\x02\xAE" +
		"\xA7\x03\x02\x02\x02\xAE\xA8\x03\x02\x02\x02\xAE\xA9\x03\x02\x02\x02\xAE" +
		"\xAA\x03\x02\x02\x02\xAE\xAB\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE" +
		"\xAD\x03\x02\x02\x02\xAF\x07\x03\x02\x02\x02\xB0\xB1\x05v<\x02\xB1\xB2" +
		"\x07\"\x02\x02\xB2\xB3\x05\x88E\x02\xB3\t\x03\x02\x02\x02\xB4\xB5\x05" +
		"\x88E\x02\xB5\xB6\x07\"\x02\x02\xB6\xB7\x054\x1B\x02\xB7\v\x03\x02\x02" +
		"\x02\xB8\xB9\x05\x88E\x02\xB9\r\x03\x02\x02\x02\xBA\xBB\x05&\x14\x02\xBB" +
		"\x0F\x03\x02\x02\x02\xBC\xBD\x07\x07\x02\x02\xBD\xBE\x05|?\x02\xBE\x11" +
		"\x03\x02\x02\x02\xBF\xC0\x07\v\x02\x02\xC0\xC1\x05\x90I\x02\xC1\xC2\x05" +
		"\x14\v\x02\xC2\xC3\x07\b\x02\x02\xC3\x13\x03\x02\x02\x02\xC4\xC5\x05\x04" +
		"\x03\x02\xC5\x15\x03\x02\x02\x02\xC6\xC7\x05\x1A\x0E\x02\xC7\xC8\x05\x18" +
		"\r\x02\xC8\xC9\x07\b\x02\x02\xC9\x17\x03\x02\x02\x02\xCA\xCB\x05\x04\x03" +
		"\x02\xCB\x19\x03\x02\x02\x02\xCC\xCD\x07\t\x02\x02\xCD\xCE\x05\x1C\x0F" +
		"\x02\xCE\xCF\x05\x90I\x02\xCF\xD6\x03\x02\x02\x02\xD0\xD1\x07\t\x02\x02" +
		"\xD1\xD2\x05\x1C\x0F\x02\xD2\xD3\x05\x1E\x10\x02\xD3\xD4\x05\x90I\x02" +
		"\xD4\xD6\x03\x02\x02\x02\xD5\xCC\x03\x02\x02\x02\xD5\xD0\x03\x02\x02\x02" +
		"\xD6\x1B\x03\x02\x02\x02\xD7\xDA\x05\x8AF\x02\xD8\xDA\x05\x86D\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\x1D\x03\x02\x02\x02\xDB" +
		"\xDC\x072\x02\x02\xDC\xE3\x073\x02\x02\xDD\xDE\x072\x02\x02\xDE\xDF\x05" +
		" \x11\x02\xDF\xE0\x073\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xE3\x05 \x11" +
		"\x02\xE2\xDB\x03\x02\x02\x02\xE2\xDD\x03\x02\x02\x02\xE2\xE1\x03\x02\x02" +
		"\x02\xE3\x1F\x03\x02\x02\x02\xE4\xE5\b\x11\x01\x02\xE5\xE6\x05\"\x12\x02" +
		"\xE6\xEC\x03\x02\x02\x02\xE7\xE8\f\x03\x02\x02\xE8\xE9\x07\x04\x02\x02" +
		"\xE9\xEB\x05\"\x12\x02\xEA\xE7\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED!\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x05\x86D\x02\xF0#\x03\x02\x02\x02\xF1" +
		"\xF2\x07\n\x02\x02\xF2\xF3\x054\x1B\x02\xF3%\x03\x02\x02\x02\xF4\xF5\x05" +
		"\x1C\x0F\x02\xF5\xF6\x072\x02\x02\xF6\xF7\x05(\x15\x02\xF7\xF8\x073\x02" +
		"\x02\xF8\u0101\x03\x02\x02\x02\xF9\xFA\x05\x1C\x0F\x02\xFA\xFB\x05(\x15" +
		"\x02\xFB\u0101\x03\x02\x02\x02\xFC\xFD\x05\x1C\x0F\x02\xFD\xFE\x072\x02" +
		"\x02\xFE\xFF\x073\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100\xF4\x03\x02" +
		"\x02\x02\u0100\xF9\x03\x02\x02\x02\u0100\xFC\x03\x02\x02\x02\u0101\'\x03" +
		"\x02\x02\x02\u0102\u0103\x05*\x16\x02\u0103)\x03\x02\x02\x02\u0104\u0105" +
		"\b\x16\x01\x02\u0105\u0106\x05,\x17\x02\u0106\u010C\x03\x02\x02\x02\u0107" +
		"\u0108\f\x03\x02\x02\u0108\u0109\x07\x04\x02\x02\u0109\u010B\x05,\x17" +
		"\x02\u010A\u0107\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A" +
		"\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D+\x03\x02\x02\x02\u010E" +
		"\u010C\x03\x02\x02\x02\u010F\u0112\x05.\x18\x02\u0110\u0112\x050\x19\x02" +
		"\u0111\u010F\x03\x02\x02\x02\u0111\u0110\x03\x02\x02\x02\u0112-\x03\x02" +
		"\x02\x02\u0113\u0118\x05j6\x02\u0114\u0118\x05l7\x02\u0115\u0118\x05n" +
		"8\x02\u0116\u0118\x05f4\x02\u0117\u0113\x03\x02\x02\x02\u0117\u0114\x03" +
		"\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118" +
		"/\x03\x02\x02\x02\u0119\u011A\x05\x86D\x02\u011A\u011F\x07\"\x02\x02\u011B" +
		"\u0120\x05j6\x02\u011C\u0120\x05l7\x02\u011D\u0120\x05n8\x02\u011E\u0120" +
		"\x05f4\x02\u011F\u011B\x03\x02\x02\x02\u011F\u011C\x03\x02\x02\x02\u011F" +
		"\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u01201\x03\x02\x02" +
		"\x02\u0121\u0122\x05&\x14\x02\u01223\x03\x02\x02\x02\u0123\u0129\x05j" +
		"6\x02\u0124\u0129\x05l7\x02\u0125\u0129\x05n8\x02\u0126\u0129\x05f4\x02" +
		"\u0127\u0129\x05\f\x07\x02\u0128\u0123\x03\x02\x02\x02\u0128\u0124\x03" +
		"\x02\x02\x02\u0128\u0125\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
		"\u0127\x03\x02\x02\x02\u01295\x03\x02\x02\x02\u012A\u012B\x058\x1D\x02" +
		"\u012B7\x03\x02\x02\x02\u012C\u012D\x07\x0E\x02\x02\u012D\u012E\x05H%" +
		"\x02\u012E\u012F\x05\x90I\x02\u012F\u0130\x05N(\x02\u0130\u0140\x03\x02" +
		"\x02\x02\u0131\u0132\x07\x0E\x02\x02\u0132\u0133\x05H%\x02\u0133\u0134" +
		"\x05\x90I\x02\u0134\u0135\x05N(\x02\u0135\u0136\x05\x8EH\x02\u0136\u0137" +
		"\x05\x90I\x02\u0137\u0138\x05N(\x02\u0138\u0140\x03\x02\x02\x02\u0139" +
		"\u013A\x07\x0E\x02\x02\u013A\u013B\x05H%\x02\u013B\u013C\x05\x90I\x02" +
		"\u013C\u013D\x05N(\x02\u013D\u013E\x058\x1D\x02\u013E\u0140\x03\x02\x02" +
		"\x02\u013F\u012C\x03\x02\x02\x02\u013F\u0131\x03\x02\x02\x02\u013F\u0139" +
		"\x03\x02\x02\x02\u01409\x03\x02\x02\x02\u0141\u0142\x07\f\x02\x02\u0142" +
		"\u0143\x05H%\x02\u0143\u0144\x05\x90I\x02\u0144\u0145\x05N(\x02\u0145" +
		"\u0146\x07\b\x02\x02\u0146\u0158\x03\x02\x02\x02\u0147\u0148\x07\f\x02" +
		"\x02\u0148\u0149\x05H%\x02\u0149\u014A\x05\x90I\x02\u014A\u014B\x05N(" +
		"\x02\u014B\u014C\x05\x8EH\x02\u014C\u014D\x05\x90I\x02\u014D\u014E\x05" +
		"N(\x02\u014E\u014F\x07\b\x02\x02\u014F\u0158\x03\x02\x02\x02\u0150\u0151" +
		"\x07\f\x02\x02\u0151\u0152\x05H%\x02\u0152\u0153\x05\x90I\x02\u0153\u0154" +
		"\x05N(\x02\u0154\u0155\x056\x1C\x02\u0155\u0156\x07\b\x02\x02\u0156\u0158" +
		"\x03\x02\x02\x02\u0157\u0141\x03\x02\x02\x02\u0157\u0147\x03\x02\x02\x02" +
		"\u0157\u0150\x03\x02\x02\x02\u0158;\x03\x02\x02\x02\u0159\u015A\x07\x0F" +
		"\x02\x02\u015A\u015B\x05H%\x02\u015B\u015C\x05\x90I\x02\u015C\u015D\x05" +
		"N(\x02\u015D\u015E\x07\b\x02\x02\u015E\u0170\x03\x02\x02\x02\u015F\u0160" +
		"\x07\x0F\x02\x02\u0160\u0161\x05H%\x02\u0161\u0162\x05\x90I\x02\u0162" +
		"\u0163\x05N(\x02\u0163\u0164\x05\x8EH\x02\u0164\u0165\x05\x90I\x02\u0165" +
		"\u0166\x05N(\x02\u0166\u0167\x07\b\x02\x02\u0167\u0170\x03\x02\x02\x02" +
		"\u0168\u0169\x07\x0F\x02\x02\u0169\u016A\x05H%\x02\u016A\u016B\x05\x90" +
		"I\x02\u016B\u016C\x05N(\x02\u016C\u016D\x056\x1C\x02\u016D\u016E\x07\b" +
		"\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u0159\x03\x02\x02\x02\u016F" +
		"\u015F\x03\x02\x02\x02\u016F\u0168\x03\x02\x02\x02\u0170=\x03\x02\x02" +
		"\x02\u0171\u0172\x07\x10\x02\x02\u0172\u0173\x05H%\x02\u0173\u0174\x05" +
		"\x90I\x02\u0174\u0175\x05N(\x02\u0175\u0176\x07\b\x02\x02\u0176?\x03\x02" +
		"\x02\x02\u0177\u0178\x07\x13\x02\x02\u0178\u0179\x072\x02\x02\u0179\u017A" +
		"\x05B\"\x02\u017A\u017B\x07\x05\x02\x02\u017B\u017C\x05H%\x02\u017C\u017D" +
		"\x07\x05\x02\x02\u017D\u017E\x05J&\x02\u017E\u017F\x073\x02\x02\u017F" +
		"\u0180\x05\x90I\x02\u0180\u0181\x05N(\x02\u0181\u0182\x07\b\x02\x02\u0182" +
		"\u018E\x03\x02\x02\x02\u0183\u0184\x07\x13\x02\x02\u0184\u0185\x05B\"" +
		"\x02\u0185\u0186\x07\x05\x02\x02\u0186\u0187\x05H%\x02\u0187\u0188\x07" +
		"\x05\x02\x02\u0188\u0189\x05J&\x02\u0189\u018A\x05\x90I\x02\u018A\u018B" +
		"\x05N(\x02\u018B\u018C\x07\b\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D" +
		"\u0177\x03\x02\x02\x02\u018D\u0183\x03\x02\x02\x02\u018EA\x03\x02\x02" +
		"\x02\u018F\u0190\x05F$\x02\u0190C\x03\x02\x02\x02\u0191\u0196\x05V,\x02" +
		"\u0192\u0196\x05X-\x02\u0193\u0196\x05Z.\x02\u0194\u0196\x05T+\x02\u0195" +
		"\u0191\x03\x02\x02\x02\u0195\u0192\x03\x02\x02\x02\u0195\u0193\x03\x02" +
		"\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196E\x03\x02\x02\x02\u0197\u0198" +
		"\b$\x01\x02\u0198\u0199\x05D#\x02\u0199\u019F\x03\x02\x02\x02\u019A\u019B" +
		"\f\x04\x02\x02\u019B\u019C\x07\x04\x02\x02\u019C\u019E\x05D#\x02\u019D" +
		"\u019A\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0G\x03\x02\x02\x02\u01A1\u019F" +
		"\x03\x02\x02\x02\u01A2\u01A3\x05p9\x02\u01A3I\x03\x02\x02\x02\u01A4\u01A5" +
		"\x05L\'\x02\u01A5K\x03\x02\x02\x02\u01A6\u01A7\b\'\x01\x02\u01A7\u01A8" +
		"\x05D#\x02\u01A8\u01AE\x03\x02\x02\x02\u01A9\u01AA\f\x04\x02\x02\u01AA" +
		"\u01AB\x07\x04\x02\x02\u01AB\u01AD\x05D#\x02\u01AC\u01A9\x03\x02\x02\x02" +
		"\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03" +
		"\x02\x02\x02\u01AFM\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1" +
		"\u01B2\x05P)\x02\u01B2O\x03\x02\x02\x02\u01B3\u01B4\b)\x01\x02\u01B4\u01B5" +
		"\x05\x06\x04\x02\u01B5\u01B6\x05\x8CG\x02\u01B6\u01BD\x03\x02\x02\x02" +
		"\u01B7\u01B8\x07\x11\x02\x02\u01B8\u01BD\x05\x8CG\x02\u01B9\u01BA\x05" +
		"z>\x02\u01BA\u01BB\x05\x8CG\x02\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01B3" +
		"\x03\x02\x02\x02\u01BC\u01B7\x03\x02\x02\x02\u01BC\u01B9\x03\x02\x02\x02" +
		"\u01BD\u01CB\x03\x02\x02\x02\u01BE\u01BF\f\x05\x02\x02\u01BF\u01C0\x05" +
		"\x06\x04\x02\u01C0\u01C1\x05\x8CG\x02\u01C1\u01CA\x03\x02\x02\x02\u01C2" +
		"\u01C3\f\x04\x02\x02\u01C3\u01C4\x07\x11\x02\x02\u01C4\u01CA\x05\x8CG" +
		"\x02\u01C5\u01C6\f\x03\x02\x02\u01C6\u01C7\x05z>\x02\u01C7\u01C8\x05\x8C" +
		"G\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01BE\x03\x02\x02\x02\u01C9\u01C2" +
		"\x03\x02\x02\x02\u01C9\u01C5\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02" +
		"\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CCQ\x03\x02" +
		"\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x05v<\x02\u01CF\u01D0" +
		"\x07\"\x02\x02\u01D0\u01D1\x05x=\x02\u01D1\u01D7\x03\x02\x02\x02\u01D2" +
		"\u01D3\x05v<\x02\u01D3\u01D4\t\x02\x02\x02\u01D4\u01D5\x05x=\x02\u01D5" +
		"\u01D7\x03\x02\x02\x02\u01D6\u01CE\x03\x02\x02\x02\u01D6\u01D2\x03\x02" +
		"\x02\x02\u01D7S\x03\x02\x02\x02\u01D8\u01D9\x05v<\x02\u01D9\u01DA\x07" +
		"\"\x02\x02\u01DA\u01DB\x05f4\x02\u01DB\u01E1\x03\x02\x02\x02\u01DC\u01DD" +
		"\x05v<\x02\u01DD\u01DE\t\x02\x02\x02\u01DE\u01DF\x05f4\x02\u01DF\u01E1" +
		"\x03\x02\x02\x02\u01E0\u01D8\x03\x02\x02\x02\u01E0\u01DC\x03\x02\x02\x02" +
		"\u01E1U\x03\x02\x02\x02\u01E2\u01E3\x05v<\x02\u01E3\u01E4\x07\"\x02\x02" +
		"\u01E4\u01E5\x05j6\x02\u01E5\u01EB\x03\x02\x02\x02\u01E6\u01E7\x05v<\x02" +
		"\u01E7\u01E8\t\x02\x02\x02\u01E8\u01E9\x05j6\x02\u01E9\u01EB\x03\x02\x02" +
		"\x02\u01EA\u01E2\x03\x02\x02\x02\u01EA\u01E6\x03\x02\x02\x02\u01EBW\x03" +
		"\x02\x02\x02\u01EC\u01ED\x05v<\x02\u01ED\u01EE\x07\"\x02\x02\u01EE\u01EF" +
		"\x05l7\x02\u01EF\u01F5\x03\x02\x02\x02\u01F0\u01F1\x05v<\x02\u01F1\u01F2" +
		"\t\x02\x02\x02\u01F2\u01F3\x05l7\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4" +
		"\u01EC\x03\x02\x02\x02\u01F4\u01F0\x03\x02\x02\x02\u01F5Y\x03\x02\x02" +
		"\x02\u01F6\u01F7\x05v<\x02\u01F7\u01F8\x07\"\x02\x02\u01F8\u01F9\x05n" +
		"8\x02\u01F9\u01FF\x03\x02\x02\x02\u01FA\u01FB\x05v<\x02\u01FB\u01FC\x07" +
		"#\x02\x02\u01FC\u01FD\x05n8\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01F6" +
		"\x03\x02\x02\x02\u01FE\u01FA\x03\x02\x02\x02\u01FF[\x03\x02\x02\x02\u0200" +
		"\u0201\x05v<\x02\u0201\u0202\x07\"\x02\x02\u0202\u0203\x074\x02\x02\u0203" +
		"\u0204\x075\x02\x02\u0204]\x03\x02\x02\x02\u0205\u0206\x05d3\x02\u0206" +
		"\u0207\x07\"\x02\x02\u0207\u0208\x054\x1B\x02\u0208_\x03\x02\x02\x02\u0209" +
		"\u020A\x074\x02\x02\u020A\u020B\x05b2\x02\u020B\u020C\x075\x02\x02\u020C" +
		"a\x03\x02\x02\x02\u020D\u0210\b2\x01\x02\u020E\u0211\x05j6\x02\u020F\u0211" +
		"\x05f4\x02\u0210\u020E\x03\x02\x02\x02\u0210\u020F\x03\x02\x02\x02\u0211" +
		"\u021A\x03\x02\x02\x02\u0212\u0213\f\x03\x02\x02\u0213\u0216\x07\x04\x02" +
		"\x02\u0214\u0217\x05j6";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0215\u0217\x05f4\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0215\x03" +
		"\x02\x02\x02\u0217\u0219\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0219" +
		"\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02" +
		"\x02\x02\u021Bc\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E" +
		"\x05\x86D\x02\u021E\u0221\x074\x02\x02\u021F\u0222\x05j6\x02\u0220\u0222" +
		"\x05f4\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0220\x03\x02\x02\x02\u0222" +
		"\u0223\x03\x02\x02\x02\u0223\u0224\x075\x02\x02\u0224\u022E\x03\x02\x02" +
		"\x02\u0225\u0226\x05\x88E\x02\u0226\u0229\x074\x02\x02\u0227\u022A\x05" +
		"j6\x02\u0228\u022A\x05f4\x02\u0229\u0227\x03\x02\x02\x02\u0229\u0228\x03" +
		"\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x075\x02\x02\u022C" +
		"\u022E\x03\x02\x02\x02\u022D\u021D\x03\x02\x02\x02\u022D\u0225\x03\x02" +
		"\x02\x02\u022Ee\x03\x02\x02\x02\u022F\u0230\b4\x01\x02\u0230\u0231\x05" +
		"j6\x02\u0231\u0232\t\x03\x02\x02\u0232\u0233\x05f4\x0F\u0233\u024A\x03" +
		"\x02\x02\x02\u0234\u0235\x05l7\x02\u0235\u0236\t\x03\x02\x02\u0236\u0237" +
		"\x05f4\r\u0237\u024A\x03\x02\x02\x02\u0238\u0239\x05n8\x02\u0239\u023A" +
		"\x07\x18\x02\x02\u023A\u023B\x05f4\n\u023B\u024A\x03\x02\x02\x02\u023C" +
		"\u023D\x05j6\x02\u023D\u023E\t\x04\x02\x02\u023E\u023F\x05f4\b\u023F\u024A" +
		"\x03\x02\x02\x02\u0240\u0241\x05l7\x02\u0241\u0242\t\x04\x02\x02\u0242" +
		"\u0243\x05f4\x06\u0243\u024A\x03\x02\x02\x02\u0244\u0245\x072\x02\x02" +
		"\u0245\u0246\x05f4\x02\u0246\u0247\x073\x02\x02\u0247\u024A\x03\x02\x02" +
		"\x02\u0248\u024A\x05h5\x02\u0249\u022F\x03\x02\x02\x02\u0249\u0234\x03" +
		"\x02\x02\x02\u0249\u0238\x03\x02\x02\x02\u0249\u023C\x03\x02\x02\x02\u0249" +
		"\u0240\x03\x02\x02\x02\u0249\u0244\x03\x02\x02\x02\u0249\u0248\x03\x02" +
		"\x02\x02\u024A\u0262\x03\x02\x02\x02\u024B\u024C\f\f\x02\x02\u024C\u024D" +
		"\t\x03\x02\x02\u024D\u0261\x05f4\r\u024E\u024F\f\x05\x02\x02\u024F\u0250" +
		"\t\x04\x02\x02\u0250\u0261\x05f4\x06\u0251\u0252\f\x10\x02\x02\u0252\u0253" +
		"\t\x03\x02\x02\u0253\u0261\x05j6\x02\u0254\u0255\f\x0E\x02\x02\u0255\u0256" +
		"\t\x03\x02\x02\u0256\u0261\x05l7\x02\u0257\u0258\f\v\x02\x02\u0258\u0259" +
		"\x07\x18\x02\x02\u0259\u0261\x05n8\x02\u025A\u025B\f\t\x02\x02\u025B\u025C" +
		"\t\x04\x02\x02\u025C\u0261\x05j6\x02\u025D\u025E\f\x07\x02\x02\u025E\u025F" +
		"\t\x04\x02\x02\u025F\u0261\x05l7\x02\u0260\u024B\x03\x02\x02\x02\u0260" +
		"\u024E\x03\x02\x02\x02\u0260\u0251\x03\x02\x02\x02\u0260\u0254\x03\x02" +
		"\x02\x02\u0260\u0257\x03\x02\x02\x02\u0260\u025A\x03\x02\x02\x02\u0260" +
		"\u025D\x03\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02" +
		"\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263g\x03\x02\x02\x02\u0264\u0262" +
		"\x03\x02\x02\x02\u0265\u0269\x05\x86D\x02\u0266\u0269\x052\x1A\x02\u0267" +
		"\u0269\x05d3\x02\u0268\u0265\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02" +
		"\u0268\u0267\x03\x02\x02\x02\u0269i\x03\x02\x02\x02\u026A\u026B\b6\x01" +
		"\x02\u026B\u026C\x072\x02\x02\u026C\u026D\x05j6\x02\u026D\u026E\x073\x02" +
		"\x02\u026E\u0271\x03\x02\x02\x02\u026F\u0271\x05\x80A\x02\u0270\u026A" +
		"\x03\x02\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271\u027A\x03\x02\x02\x02" +
		"\u0272\u0273\f\x06\x02\x02\u0273\u0274\t\x03\x02\x02\u0274\u0279\x05j" +
		"6\x07\u0275\u0276\f\x05\x02\x02\u0276\u0277\t\x04\x02\x02\u0277\u0279" +
		"\x05j6\x06\u0278\u0272\x03\x02\x02\x02\u0278\u0275\x03\x02\x02\x02\u0279" +
		"\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A\u027B\x03\x02" +
		"\x02\x02\u027Bk\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027D\u027E" +
		"\b7\x01\x02\u027E\u027F\x05j6\x02\u027F\u0280\t\x03\x02\x02\u0280\u0281" +
		"\x05l7\t\u0281\u028C\x03\x02\x02\x02\u0282\u0283\x05j6\x02\u0283\u0284" +
		"\t\x04\x02\x02\u0284\u0285\x05l7\x06\u0285\u028C\x03\x02\x02\x02\u0286" +
		"\u0287\x072\x02\x02\u0287\u0288\x05l7\x02\u0288\u0289\x073\x02\x02\u0289" +
		"\u028C\x03\x02\x02\x02\u028A\u028C\x05~@\x02\u028B\u027D\x03\x02\x02\x02" +
		"\u028B\u0282\x03\x02\x02\x02\u028B\u0286\x03\x02\x02\x02\u028B\u028A\x03" +
		"\x02\x02\x02\u028C\u029B\x03\x02\x02\x02\u028D\u028E\f\n\x02\x02\u028E" +
		"\u028F\t\x03\x02\x02\u028F\u029A\x05l7\v\u0290\u0291\f\x07\x02\x02\u0291" +
		"\u0292\t\x04\x02\x02\u0292\u029A\x05l7\b\u0293\u0294\f\b\x02\x02\u0294" +
		"\u0295\t\x03\x02\x02\u0295\u029A\x05j6\x02\u0296\u0297\f\x05\x02\x02\u0297" +
		"\u0298\t\x04\x02\x02\u0298\u029A\x05j6\x02\u0299\u028D\x03\x02\x02\x02" +
		"\u0299\u0290\x03\x02\x02\x02\u0299\u0293\x03\x02\x02\x02\u0299\u0296\x03" +
		"\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B" +
		"\u029C\x03\x02\x02\x02\u029Cm\x03\x02\x02\x02\u029D\u029B\x03\x02\x02" +
		"\x02\u029E\u029F\b8\x01\x02\u029F\u02A0\x05j6\x02\u02A0\u02A1\x07\x18" +
		"\x02\x02\u02A1\u02A2\x05n8\x05\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A5" +
		"\x05|?\x02\u02A4\u029E\x03\x02\x02\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5" +
		"\u02AE\x03\x02\x02\x02\u02A6\u02A7\f\x04\x02\x02\u02A7\u02A8\x07\x16\x02" +
		"\x02\u02A8\u02AD\x05n8\x05\u02A9\u02AA\f\x06\x02\x02\u02AA\u02AB\x07\x18" +
		"\x02\x02\u02AB\u02AD\x05j6\x02\u02AC\u02A6\x03\x02\x02\x02\u02AC\u02A9" +
		"\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02" +
		"\u02AE\u02AF\x03\x02\x02\x02\u02AFo\x03\x02\x02\x02\u02B0\u02AE\x03\x02" +
		"\x02\x02\u02B1\u02B2\x05r:\x02\u02B2\u02B3\x07)\x02\x02\u02B3\u02B4\x05" +
		"p9\x02\u02B4\u02C7\x03\x02\x02\x02\u02B5\u02B6\x05r:\x02\u02B6\u02B7\x07" +
		"/\x02\x02\u02B7\u02B8\x05p9\x02\u02B8\u02C7\x03\x02\x02\x02\u02B9\u02BA" +
		"\x05r:\x02\u02BA\u02BB\x07*\x02\x02\u02BB\u02BC\x05p9\x02\u02BC\u02C7" +
		"\x03\x02\x02\x02\u02BD\u02BE\x05r:\x02\u02BE\u02BF\x070\x02\x02\u02BF" +
		"\u02C0\x05p9\x02\u02C0\u02C7\x03\x02\x02\x02\u02C1\u02C2\x072\x02\x02" +
		"\u02C2\u02C3\x05p9\x02\u02C3\u02C4\x073\x02\x02\u02C4\u02C7\x03\x02\x02" +
		"\x02\u02C5\u02C7\x05r:\x02\u02C6\u02B1\x03\x02\x02\x02\u02C6\u02B5\x03" +
		"\x02\x02\x02\u02C6\u02B9\x03\x02\x02\x02\u02C6\u02BD\x03\x02\x02\x02\u02C6" +
		"\u02C1\x03\x02\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7q\x03\x02\x02" +
		"\x02\u02C8\u02C9\x05t;\x02\u02C9\u02CA\t\x05\x02\x02\u02CA\u02CB\x05t" +
		";\x02\u02CB\u02D1\x03\x02\x02\x02\u02CC\u02CD\x05t;\x02\u02CD\u02CE\t" +
		"\x06\x02\x02\u02CE\u02CF\x05t;\x02\u02CF\u02D1\x03\x02\x02\x02\u02D0\u02C8" +
		"\x03\x02\x02\x02\u02D0\u02CC\x03\x02\x02\x02\u02D1s\x03\x02\x02\x02\u02D2" +
		"\u02D6\x054\x1B\x02\u02D3\u02D6\x05d3\x02\u02D4\u02D6\x05\x86D\x02\u02D5" +
		"\u02D2\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02" +
		"\x02\x02\u02D6u\x03\x02\x02\x02\u02D7\u02D8\x05\x86D\x02\u02D8w\x03\x02" +
		"\x02\x02\u02D9\u02DA\b=\x01\x02\u02DA\u02F4\x05v<\x02\u02DB\u02F4\x05" +
		"\\/\x02\u02DC\u02F4\x05^0\x02\u02DD\u02F4\x05j6\x02\u02DE\u02F4\x05l7" +
		"\x02\u02DF\u02F4\x05n8\x02\u02E0\u02F4\x05\n\x06\x02\u02E1\u02F4\x05\b" +
		"\x05\x02\u02E2\u02F4\x05T+\x02\u02E3\u02F4\x05Z.\x02\u02E4\u02F4\x05X" +
		"-\x02\u02E5\u02F4\x05V,\x02\u02E6\u02F4\x05R*\x02\u02E7\u02F4\x05&\x14" +
		"\x02\u02E8\u02F4\x05|?\x02\u02E9\u02F4\x05\x82B\x02\u02EA\u02F4\x05~@" +
		"\x02\u02EB\u02F4\x05\x80A\x02\u02EC\u02F4\x05\x84C\x02\u02ED\u02EE\t\x07" +
		"\x02\x02\u02EE\u02F4\x05x=\f\u02EF\u02F0\x072\x02\x02\u02F0\u02F1\x05" +
		"x=\x02\u02F1\u02F2\x073\x02\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3\u02D9" +
		"\x03\x02\x02\x02\u02F3\u02DB\x03\x02\x02\x02\u02F3\u02DC\x03\x02\x02\x02" +
		"\u02F3\u02DD\x03\x02\x02\x02\u02F3\u02DE\x03\x02\x02\x02\u02F3\u02DF\x03" +
		"\x02\x02\x02\u02F3\u02E0\x03\x02\x02\x02\u02F3\u02E1\x03\x02\x02\x02\u02F3" +
		"\u02E2\x03\x02\x02\x02\u02F3\u02E3\x03\x02\x02\x02\u02F3\u02E4\x03\x02" +
		"\x02\x02\u02F3\u02E5\x03\x02\x02\x02\u02F3\u02E6\x03\x02\x02\x02\u02F3" +
		"\u02E7\x03\x02\x02\x02\u02F3\u02E8\x03\x02\x02\x02\u02F3\u02E9\x03\x02" +
		"\x02\x02\u02F3\u02EA\x03\x02\x02\x02\u02F3\u02EB\x03\x02\x02\x02\u02F3" +
		"\u02EC\x03\x02\x02\x02\u02F3\u02ED\x03\x02\x02\x02\u02F3\u02EF\x03\x02" +
		"\x02\x02\u02F4\u0312\x03\x02\x02\x02\u02F5\u02F6\f\r\x02\x02\u02F6\u02F7" +
		"\x07\x1B\x02\x02\u02F7\u0311\x05x=\x0E\u02F8\u02F9\f\v\x02\x02\u02F9\u02FA" +
		"\t\x03\x02\x02\u02FA\u0311\x05x=\f\u02FB\u02FC\f\n\x02\x02\u02FC\u02FD" +
		"\t\x04\x02\x02\u02FD\u0311\x05x=\v\u02FE\u02FF\f\t\x02\x02\u02FF\u0300" +
		"\t\b\x02\x02\u0300\u0311\x05x=\n\u0301\u0302\f\b\x02\x02\u0302\u0303\x07" +
		")\x02\x02\u0303\u0311\x05x=\t\u0304\u0305\f\x07\x02\x02\u0305\u0306\t" +
		"\t\x02\x02\u0306\u0311\x05x=\b\u0307\u0308\f\x06\x02\x02\u0308\u0309\t" +
		"\x05\x02\x02\u0309\u0311\x05x=\x07\u030A\u030B\f\x05\x02\x02\u030B\u030C" +
		"\t\x06\x02\x02\u030C\u0311\x05x=\x06\u030D\u030E\f\x04\x02\x02\u030E\u030F" +
		"\t\n\x02\x02\u030F\u0311\x05x=\x05\u0310\u02F5\x03\x02\x02\x02\u0310\u02F8" +
		"\x03\x02\x02\x02\u0310\u02FB\x03\x02\x02\x02\u0310\u02FE\x03\x02\x02\x02" +
		"\u0310\u0301\x03\x02\x02\x02\u0310\u0304\x03\x02\x02\x02\u0310\u0307\x03" +
		"\x02\x02\x02\u0310\u030A\x03\x02\x02\x02\u0310\u030D\x03\x02\x02\x02\u0311" +
		"\u0314\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02" +
		"\x02\x02\u0313y\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0316" +
		"\x07\x12\x02\x02\u0316{\x03\x02\x02\x02\u0317\u0318\x07\x03\x02\x02\u0318" +
		"}\x03\x02\x02\x02\u0319\u031A\x07;\x02\x02\u031A\x7F\x03\x02\x02\x02\u031B" +
		"\u031C\x07:\x02\x02\u031C\x81\x03\x02\x02\x02\u031D\u031E\t\v\x02\x02" +
		"\u031E\x83\x03\x02\x02\x02\u031F\u0320\x076\x02\x02\u0320\x85\x03\x02" +
		"\x02\x02\u0321\u0322\x07<\x02\x02\u0322\x87\x03\x02\x02\x02\u0323\u0324" +
		"\x07=\x02\x02\u0324\x89\x03\x02\x02\x02\u0325\u0326\x07>\x02\x02\u0326" +
		"\x8B\x03\x02\x02\x02\u0327\u0328\bG\x01\x02\u0328\u032B\x07\x05\x02\x02" +
		"\u0329\u032B\x05\x90I\x02\u032A\u0327\x03\x02\x02\x02\u032A\u0329\x03" +
		"\x02\x02\x02\u032B\u0332\x03\x02\x02\x02\u032C\u032D\f\x06\x02\x02\u032D" +
		"\u0331\x07\x05\x02\x02\u032E\u032F\f\x05\x02\x02\u032F\u0331\x05\x90I" +
		"\x02\u0330\u032C\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0331\u0334" +
		"\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02" +
		"\u0333\x8D\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u0336\x07" +
		"\r\x02\x02\u0336\x8F\x03\x02\x02\x02\u0337\u0338\x07\x06\x02\x02\u0338" +
		"\x91\x03\x02\x02\x02:\x99\xA1\xAE\xD5\xD9\xE2\xEC\u0100\u010C\u0111\u0117" +
		"\u011F\u0128\u013F\u0157\u016F\u018D\u0195\u019F\u01AE\u01BC\u01C9\u01CB" +
		"\u01D6\u01E0\u01EA\u01F4\u01FE\u0210\u0216\u021A\u0221\u0229\u022D\u0249" +
		"\u0260\u0262\u0268\u0270\u0278\u027A\u028B\u0299\u029B\u02A4\u02AC\u02AE" +
		"\u02C6\u02D0\u02D5\u02F3\u0310\u0312\u032A\u0330\u0332";
	public static readonly _serializedATN: string = Utils.join(
		[
			CorundumParser._serializedATNSegment0,
			CorundumParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CorundumParser.__ATN) {
			CorundumParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CorundumParser._serializedATN));
		}

		return CorundumParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public expression_list(): Expression_listContext {
		return this.getRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_prog; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public terminator(): TerminatorContext {
		return this.getRuleContext(0, TerminatorContext);
	}
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_expression_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterExpression_list) {
			listener.enterExpression_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitExpression_list) {
			listener.exitExpression_list(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public function_definition(): Function_definitionContext | undefined {
		return this.tryGetRuleContext(0, Function_definitionContext);
	}
	public function_inline_call(): Function_inline_callContext | undefined {
		return this.tryGetRuleContext(0, Function_inline_callContext);
	}
	public require_block(): Require_blockContext | undefined {
		return this.tryGetRuleContext(0, Require_blockContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public unless_statement(): Unless_statementContext | undefined {
		return this.tryGetRuleContext(0, Unless_statementContext);
	}
	public rvalue(): RvalueContext | undefined {
		return this.tryGetRuleContext(0, RvalueContext);
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
	}
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public for_statement(): For_statementContext | undefined {
		return this.tryGetRuleContext(0, For_statementContext);
	}
	public pir_inline(): Pir_inlineContext | undefined {
		return this.tryGetRuleContext(0, Pir_inlineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_expression; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class Global_getContext extends ParserRuleContext {
	public _var_name: LvalueContext;
	public _op: Token;
	public _global_name: Id_globalContext;
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(CorundumParser.ASSIGN, 0); }
	public id_global(): Id_globalContext {
		return this.getRuleContext(0, Id_globalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_global_get; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterGlobal_get) {
			listener.enterGlobal_get(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitGlobal_get) {
			listener.exitGlobal_get(this);
		}
	}
}


export class Global_setContext extends ParserRuleContext {
	public _global_name: Id_globalContext;
	public _op: Token;
	public _result: All_resultContext;
	public id_global(): Id_globalContext {
		return this.getRuleContext(0, Id_globalContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(CorundumParser.ASSIGN, 0); }
	public all_result(): All_resultContext {
		return this.getRuleContext(0, All_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_global_set; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterGlobal_set) {
			listener.enterGlobal_set(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitGlobal_set) {
			listener.exitGlobal_set(this);
		}
	}
}


export class Global_resultContext extends ParserRuleContext {
	public id_global(): Id_globalContext {
		return this.getRuleContext(0, Id_globalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_global_result; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterGlobal_result) {
			listener.enterGlobal_result(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitGlobal_result) {
			listener.exitGlobal_result(this);
		}
	}
}


export class Function_inline_callContext extends ParserRuleContext {
	public function_call(): Function_callContext {
		return this.getRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_inline_call; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_inline_call) {
			listener.enterFunction_inline_call(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_inline_call) {
			listener.exitFunction_inline_call(this);
		}
	}
}


export class Require_blockContext extends ParserRuleContext {
	public REQUIRE(): TerminalNode { return this.getToken(CorundumParser.REQUIRE, 0); }
	public literal_t(): Literal_tContext {
		return this.getRuleContext(0, Literal_tContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_require_block; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterRequire_block) {
			listener.enterRequire_block(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitRequire_block) {
			listener.exitRequire_block(this);
		}
	}
}


export class Pir_inlineContext extends ParserRuleContext {
	public PIR(): TerminalNode { return this.getToken(CorundumParser.PIR, 0); }
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public pir_expression_list(): Pir_expression_listContext {
		return this.getRuleContext(0, Pir_expression_listContext);
	}
	public END(): TerminalNode { return this.getToken(CorundumParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_pir_inline; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterPir_inline) {
			listener.enterPir_inline(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitPir_inline) {
			listener.exitPir_inline(this);
		}
	}
}


export class Pir_expression_listContext extends ParserRuleContext {
	public expression_list(): Expression_listContext {
		return this.getRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_pir_expression_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterPir_expression_list) {
			listener.enterPir_expression_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitPir_expression_list) {
			listener.exitPir_expression_list(this);
		}
	}
}


export class Function_definitionContext extends ParserRuleContext {
	public function_definition_header(): Function_definition_headerContext {
		return this.getRuleContext(0, Function_definition_headerContext);
	}
	public function_definition_body(): Function_definition_bodyContext {
		return this.getRuleContext(0, Function_definition_bodyContext);
	}
	public END(): TerminalNode { return this.getToken(CorundumParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_definition; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_definition) {
			listener.enterFunction_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_definition) {
			listener.exitFunction_definition(this);
		}
	}
}


export class Function_definition_bodyContext extends ParserRuleContext {
	public expression_list(): Expression_listContext {
		return this.getRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_definition_body; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_definition_body) {
			listener.enterFunction_definition_body(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_definition_body) {
			listener.exitFunction_definition_body(this);
		}
	}
}


export class Function_definition_headerContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(CorundumParser.DEF, 0); }
	public function_name(): Function_nameContext {
		return this.getRuleContext(0, Function_nameContext);
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public function_definition_params(): Function_definition_paramsContext | undefined {
		return this.tryGetRuleContext(0, Function_definition_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_definition_header; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_definition_header) {
			listener.enterFunction_definition_header(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_definition_header) {
			listener.exitFunction_definition_header(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	public id_function(): Id_functionContext | undefined {
		return this.tryGetRuleContext(0, Id_functionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_name; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_name) {
			listener.enterFunction_name(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_name) {
			listener.exitFunction_name(this);
		}
	}
}


export class Function_definition_paramsContext extends ParserRuleContext {
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	public function_definition_params_list(): Function_definition_params_listContext | undefined {
		return this.tryGetRuleContext(0, Function_definition_params_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_definition_params; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_definition_params) {
			listener.enterFunction_definition_params(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_definition_params) {
			listener.exitFunction_definition_params(this);
		}
	}
}


export class Function_definition_params_listContext extends ParserRuleContext {
	public function_definition_param_id(): Function_definition_param_idContext {
		return this.getRuleContext(0, Function_definition_param_idContext);
	}
	public function_definition_params_list(): Function_definition_params_listContext | undefined {
		return this.tryGetRuleContext(0, Function_definition_params_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_definition_params_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_definition_params_list) {
			listener.enterFunction_definition_params_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_definition_params_list) {
			listener.exitFunction_definition_params_list(this);
		}
	}
}


export class Function_definition_param_idContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_definition_param_id; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_definition_param_id) {
			listener.enterFunction_definition_param_id(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_definition_param_id) {
			listener.exitFunction_definition_param_id(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(CorundumParser.RETURN, 0); }
	public all_result(): All_resultContext {
		return this.getRuleContext(0, All_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_return_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	public _name: Function_nameContext;
	public _params: Function_call_param_listContext;
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	public function_name(): Function_nameContext {
		return this.getRuleContext(0, Function_nameContext);
	}
	public function_call_param_list(): Function_call_param_listContext | undefined {
		return this.tryGetRuleContext(0, Function_call_param_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_call; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
}


export class Function_call_param_listContext extends ParserRuleContext {
	public function_call_params(): Function_call_paramsContext {
		return this.getRuleContext(0, Function_call_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_call_param_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_call_param_list) {
			listener.enterFunction_call_param_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_call_param_list) {
			listener.exitFunction_call_param_list(this);
		}
	}
}


export class Function_call_paramsContext extends ParserRuleContext {
	public function_param(): Function_paramContext {
		return this.getRuleContext(0, Function_paramContext);
	}
	public function_call_params(): Function_call_paramsContext | undefined {
		return this.tryGetRuleContext(0, Function_call_paramsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_call_params; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_call_params) {
			listener.enterFunction_call_params(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_call_params) {
			listener.exitFunction_call_params(this);
		}
	}
}


export class Function_paramContext extends ParserRuleContext {
	public function_unnamed_param(): Function_unnamed_paramContext | undefined {
		return this.tryGetRuleContext(0, Function_unnamed_paramContext);
	}
	public function_named_param(): Function_named_paramContext | undefined {
		return this.tryGetRuleContext(0, Function_named_paramContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_param; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_param) {
			listener.enterFunction_param(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_param) {
			listener.exitFunction_param(this);
		}
	}
}


export class Function_unnamed_paramContext extends ParserRuleContext {
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public float_result(): Float_resultContext | undefined {
		return this.tryGetRuleContext(0, Float_resultContext);
	}
	public string_result(): String_resultContext | undefined {
		return this.tryGetRuleContext(0, String_resultContext);
	}
	public dynamic_result(): Dynamic_resultContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_unnamed_param; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_unnamed_param) {
			listener.enterFunction_unnamed_param(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_unnamed_param) {
			listener.exitFunction_unnamed_param(this);
		}
	}
}


export class Function_named_paramContext extends ParserRuleContext {
	public _op: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(CorundumParser.ASSIGN, 0); }
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public float_result(): Float_resultContext | undefined {
		return this.tryGetRuleContext(0, Float_resultContext);
	}
	public string_result(): String_resultContext | undefined {
		return this.tryGetRuleContext(0, String_resultContext);
	}
	public dynamic_result(): Dynamic_resultContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_named_param; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_named_param) {
			listener.enterFunction_named_param(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_named_param) {
			listener.exitFunction_named_param(this);
		}
	}
}


export class Function_call_assignmentContext extends ParserRuleContext {
	public function_call(): Function_callContext {
		return this.getRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_function_call_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFunction_call_assignment) {
			listener.enterFunction_call_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFunction_call_assignment) {
			listener.exitFunction_call_assignment(this);
		}
	}
}


export class All_resultContext extends ParserRuleContext {
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public float_result(): Float_resultContext | undefined {
		return this.tryGetRuleContext(0, Float_resultContext);
	}
	public string_result(): String_resultContext | undefined {
		return this.tryGetRuleContext(0, String_resultContext);
	}
	public dynamic_result(): Dynamic_resultContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_resultContext);
	}
	public global_result(): Global_resultContext | undefined {
		return this.tryGetRuleContext(0, Global_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_all_result; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterAll_result) {
			listener.enterAll_result(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitAll_result) {
			listener.exitAll_result(this);
		}
	}
}


export class Elsif_statementContext extends ParserRuleContext {
	public if_elsif_statement(): If_elsif_statementContext {
		return this.getRuleContext(0, If_elsif_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_elsif_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterElsif_statement) {
			listener.enterElsif_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitElsif_statement) {
			listener.exitElsif_statement(this);
		}
	}
}


export class If_elsif_statementContext extends ParserRuleContext {
	public ELSIF(): TerminalNode { return this.getToken(CorundumParser.ELSIF, 0); }
	public cond_expression(): Cond_expressionContext {
		return this.getRuleContext(0, Cond_expressionContext);
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public statement_body(): Statement_bodyContext[];
	public statement_body(i: number): Statement_bodyContext;
	public statement_body(i?: number): Statement_bodyContext | Statement_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Statement_bodyContext);
		} else {
			return this.getRuleContext(i, Statement_bodyContext);
		}
	}
	public else_token(): Else_tokenContext | undefined {
		return this.tryGetRuleContext(0, Else_tokenContext);
	}
	public if_elsif_statement(): If_elsif_statementContext | undefined {
		return this.tryGetRuleContext(0, If_elsif_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_if_elsif_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterIf_elsif_statement) {
			listener.enterIf_elsif_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitIf_elsif_statement) {
			listener.exitIf_elsif_statement(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(CorundumParser.IF, 0); }
	public cond_expression(): Cond_expressionContext {
		return this.getRuleContext(0, Cond_expressionContext);
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public statement_body(): Statement_bodyContext[];
	public statement_body(i: number): Statement_bodyContext;
	public statement_body(i?: number): Statement_bodyContext | Statement_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Statement_bodyContext);
		} else {
			return this.getRuleContext(i, Statement_bodyContext);
		}
	}
	public END(): TerminalNode { return this.getToken(CorundumParser.END, 0); }
	public else_token(): Else_tokenContext | undefined {
		return this.tryGetRuleContext(0, Else_tokenContext);
	}
	public elsif_statement(): Elsif_statementContext | undefined {
		return this.tryGetRuleContext(0, Elsif_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
}


export class Unless_statementContext extends ParserRuleContext {
	public UNLESS(): TerminalNode { return this.getToken(CorundumParser.UNLESS, 0); }
	public cond_expression(): Cond_expressionContext {
		return this.getRuleContext(0, Cond_expressionContext);
	}
	public crlf(): CrlfContext[];
	public crlf(i: number): CrlfContext;
	public crlf(i?: number): CrlfContext | CrlfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CrlfContext);
		} else {
			return this.getRuleContext(i, CrlfContext);
		}
	}
	public statement_body(): Statement_bodyContext[];
	public statement_body(i: number): Statement_bodyContext;
	public statement_body(i?: number): Statement_bodyContext | Statement_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Statement_bodyContext);
		} else {
			return this.getRuleContext(i, Statement_bodyContext);
		}
	}
	public END(): TerminalNode { return this.getToken(CorundumParser.END, 0); }
	public else_token(): Else_tokenContext | undefined {
		return this.tryGetRuleContext(0, Else_tokenContext);
	}
	public elsif_statement(): Elsif_statementContext | undefined {
		return this.tryGetRuleContext(0, Elsif_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_unless_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterUnless_statement) {
			listener.enterUnless_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitUnless_statement) {
			listener.exitUnless_statement(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(CorundumParser.WHILE, 0); }
	public cond_expression(): Cond_expressionContext {
		return this.getRuleContext(0, Cond_expressionContext);
	}
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public statement_body(): Statement_bodyContext {
		return this.getRuleContext(0, Statement_bodyContext);
	}
	public END(): TerminalNode { return this.getToken(CorundumParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_while_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(CorundumParser.FOR, 0); }
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public init_expression(): Init_expressionContext {
		return this.getRuleContext(0, Init_expressionContext);
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CorundumParser.SEMICOLON);
		} else {
			return this.getToken(CorundumParser.SEMICOLON, i);
		}
	}
	public cond_expression(): Cond_expressionContext {
		return this.getRuleContext(0, Cond_expressionContext);
	}
	public loop_expression(): Loop_expressionContext {
		return this.getRuleContext(0, Loop_expressionContext);
	}
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	public crlf(): CrlfContext {
		return this.getRuleContext(0, CrlfContext);
	}
	public statement_body(): Statement_bodyContext {
		return this.getRuleContext(0, Statement_bodyContext);
	}
	public END(): TerminalNode { return this.getToken(CorundumParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_for_statement; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFor_statement) {
			listener.enterFor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFor_statement) {
			listener.exitFor_statement(this);
		}
	}
}


export class Init_expressionContext extends ParserRuleContext {
	public for_init_list(): For_init_listContext {
		return this.getRuleContext(0, For_init_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_init_expression; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterInit_expression) {
			listener.enterInit_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitInit_expression) {
			listener.exitInit_expression(this);
		}
	}
}


export class All_assignmentContext extends ParserRuleContext {
	public int_assignment(): Int_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Int_assignmentContext);
	}
	public float_assignment(): Float_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Float_assignmentContext);
	}
	public string_assignment(): String_assignmentContext | undefined {
		return this.tryGetRuleContext(0, String_assignmentContext);
	}
	public dynamic_assignment(): Dynamic_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_all_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterAll_assignment) {
			listener.enterAll_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitAll_assignment) {
			listener.exitAll_assignment(this);
		}
	}
}


export class For_init_listContext extends ParserRuleContext {
	public for_init_list(): For_init_listContext | undefined {
		return this.tryGetRuleContext(0, For_init_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.COMMA, 0); }
	public all_assignment(): All_assignmentContext {
		return this.getRuleContext(0, All_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_for_init_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFor_init_list) {
			listener.enterFor_init_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFor_init_list) {
			listener.exitFor_init_list(this);
		}
	}
}


export class Cond_expressionContext extends ParserRuleContext {
	public comparison_list(): Comparison_listContext {
		return this.getRuleContext(0, Comparison_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_cond_expression; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterCond_expression) {
			listener.enterCond_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitCond_expression) {
			listener.exitCond_expression(this);
		}
	}
}


export class Loop_expressionContext extends ParserRuleContext {
	public for_loop_list(): For_loop_listContext {
		return this.getRuleContext(0, For_loop_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_loop_expression; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterLoop_expression) {
			listener.enterLoop_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitLoop_expression) {
			listener.exitLoop_expression(this);
		}
	}
}


export class For_loop_listContext extends ParserRuleContext {
	public for_loop_list(): For_loop_listContext | undefined {
		return this.tryGetRuleContext(0, For_loop_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.COMMA, 0); }
	public all_assignment(): All_assignmentContext {
		return this.getRuleContext(0, All_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_for_loop_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFor_loop_list) {
			listener.enterFor_loop_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFor_loop_list) {
			listener.exitFor_loop_list(this);
		}
	}
}


export class Statement_bodyContext extends ParserRuleContext {
	public statement_expression_list(): Statement_expression_listContext {
		return this.getRuleContext(0, Statement_expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_statement_body; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterStatement_body) {
			listener.enterStatement_body(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitStatement_body) {
			listener.exitStatement_body(this);
		}
	}
}


export class Statement_expression_listContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public terminator(): TerminatorContext {
		return this.getRuleContext(0, TerminatorContext);
	}
	public RETRY(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RETRY, 0); }
	public break_expression(): Break_expressionContext | undefined {
		return this.tryGetRuleContext(0, Break_expressionContext);
	}
	public statement_expression_list(): Statement_expression_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_statement_expression_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterStatement_expression_list) {
			listener.enterStatement_expression_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitStatement_expression_list) {
			listener.exitStatement_expression_list(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public _var_id: LvalueContext;
	public _op: Token;
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS_ASSIGN, 0); }
	public MINUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD_ASSIGN, 0); }
	public EXP_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EXP_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class Dynamic_assignmentContext extends ParserRuleContext {
	public _var_id: LvalueContext;
	public _op: Token;
	public dynamic_result(): Dynamic_resultContext {
		return this.getRuleContext(0, Dynamic_resultContext);
	}
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS_ASSIGN, 0); }
	public MINUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD_ASSIGN, 0); }
	public EXP_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EXP_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_dynamic_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterDynamic_assignment) {
			listener.enterDynamic_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitDynamic_assignment) {
			listener.exitDynamic_assignment(this);
		}
	}
}


export class Int_assignmentContext extends ParserRuleContext {
	public _var_id: LvalueContext;
	public _op: Token;
	public int_result(): Int_resultContext {
		return this.getRuleContext(0, Int_resultContext);
	}
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS_ASSIGN, 0); }
	public MINUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD_ASSIGN, 0); }
	public EXP_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EXP_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_int_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterInt_assignment) {
			listener.enterInt_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitInt_assignment) {
			listener.exitInt_assignment(this);
		}
	}
}


export class Float_assignmentContext extends ParserRuleContext {
	public _var_id: LvalueContext;
	public _op: Token;
	public float_result(): Float_resultContext {
		return this.getRuleContext(0, Float_resultContext);
	}
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS_ASSIGN, 0); }
	public MINUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD_ASSIGN, 0); }
	public EXP_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EXP_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_float_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFloat_assignment) {
			listener.enterFloat_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFloat_assignment) {
			listener.exitFloat_assignment(this);
		}
	}
}


export class String_assignmentContext extends ParserRuleContext {
	public _var_id: LvalueContext;
	public _op: Token;
	public string_result(): String_resultContext {
		return this.getRuleContext(0, String_resultContext);
	}
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_string_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterString_assignment) {
			listener.enterString_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitString_assignment) {
			listener.exitString_assignment(this);
		}
	}
}


export class Initial_array_assignmentContext extends ParserRuleContext {
	public _var_id: LvalueContext;
	public _op: Token;
	public LEFT_SBRACKET(): TerminalNode { return this.getToken(CorundumParser.LEFT_SBRACKET, 0); }
	public RIGHT_SBRACKET(): TerminalNode { return this.getToken(CorundumParser.RIGHT_SBRACKET, 0); }
	public lvalue(): LvalueContext {
		return this.getRuleContext(0, LvalueContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(CorundumParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_initial_array_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterInitial_array_assignment) {
			listener.enterInitial_array_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitInitial_array_assignment) {
			listener.exitInitial_array_assignment(this);
		}
	}
}


export class Array_assignmentContext extends ParserRuleContext {
	public _arr_def: Array_selectorContext;
	public _op: Token;
	public _arr_val: All_resultContext;
	public array_selector(): Array_selectorContext {
		return this.getRuleContext(0, Array_selectorContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(CorundumParser.ASSIGN, 0); }
	public all_result(): All_resultContext {
		return this.getRuleContext(0, All_resultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_array_assignment; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterArray_assignment) {
			listener.enterArray_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitArray_assignment) {
			listener.exitArray_assignment(this);
		}
	}
}


export class Array_definitionContext extends ParserRuleContext {
	public LEFT_SBRACKET(): TerminalNode { return this.getToken(CorundumParser.LEFT_SBRACKET, 0); }
	public array_definition_elements(): Array_definition_elementsContext {
		return this.getRuleContext(0, Array_definition_elementsContext);
	}
	public RIGHT_SBRACKET(): TerminalNode { return this.getToken(CorundumParser.RIGHT_SBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_array_definition; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterArray_definition) {
			listener.enterArray_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitArray_definition) {
			listener.exitArray_definition(this);
		}
	}
}


export class Array_definition_elementsContext extends ParserRuleContext {
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public dynamic_result(): Dynamic_resultContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_resultContext);
	}
	public array_definition_elements(): Array_definition_elementsContext | undefined {
		return this.tryGetRuleContext(0, Array_definition_elementsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_array_definition_elements; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterArray_definition_elements) {
			listener.enterArray_definition_elements(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitArray_definition_elements) {
			listener.exitArray_definition_elements(this);
		}
	}
}


export class Array_selectorContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public LEFT_SBRACKET(): TerminalNode { return this.getToken(CorundumParser.LEFT_SBRACKET, 0); }
	public RIGHT_SBRACKET(): TerminalNode { return this.getToken(CorundumParser.RIGHT_SBRACKET, 0); }
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public dynamic_result(): Dynamic_resultContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_resultContext);
	}
	public id_global(): Id_globalContext | undefined {
		return this.tryGetRuleContext(0, Id_globalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_array_selector; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterArray_selector) {
			listener.enterArray_selector(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitArray_selector) {
			listener.exitArray_selector(this);
		}
	}
}


export class Dynamic_resultContext extends ParserRuleContext {
	public _op: Token;
	public dynamic_result(): Dynamic_resultContext[];
	public dynamic_result(i: number): Dynamic_resultContext;
	public dynamic_result(i?: number): Dynamic_resultContext | Dynamic_resultContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dynamic_resultContext);
		} else {
			return this.getRuleContext(i, Dynamic_resultContext);
		}
	}
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD, 0); }
	public float_result(): Float_resultContext | undefined {
		return this.tryGetRuleContext(0, Float_resultContext);
	}
	public string_result(): String_resultContext | undefined {
		return this.tryGetRuleContext(0, String_resultContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS, 0); }
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	public dynamic(): DynamicContext | undefined {
		return this.tryGetRuleContext(0, DynamicContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_dynamic_result; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterDynamic_result) {
			listener.enterDynamic_result(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitDynamic_result) {
			listener.exitDynamic_result(this);
		}
	}
}


export class DynamicContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public function_call_assignment(): Function_call_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Function_call_assignmentContext);
	}
	public array_selector(): Array_selectorContext | undefined {
		return this.tryGetRuleContext(0, Array_selectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_dynamic; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterDynamic) {
			listener.enterDynamic(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitDynamic) {
			listener.exitDynamic(this);
		}
	}
}


export class Int_resultContext extends ParserRuleContext {
	public _op: Token;
	public int_result(): Int_resultContext[];
	public int_result(i: number): Int_resultContext;
	public int_result(i?: number): Int_resultContext | Int_resultContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Int_resultContext);
		} else {
			return this.getRuleContext(i, Int_resultContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS, 0); }
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	public int_t(): Int_tContext | undefined {
		return this.tryGetRuleContext(0, Int_tContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_int_result; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterInt_result) {
			listener.enterInt_result(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitInt_result) {
			listener.exitInt_result(this);
		}
	}
}


export class Float_resultContext extends ParserRuleContext {
	public _op: Token;
	public float_result(): Float_resultContext[];
	public float_result(i: number): Float_resultContext;
	public float_result(i?: number): Float_resultContext | Float_resultContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Float_resultContext);
		} else {
			return this.getRuleContext(i, Float_resultContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD, 0); }
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS, 0); }
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	public float_t(): Float_tContext | undefined {
		return this.tryGetRuleContext(0, Float_tContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_float_result; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFloat_result) {
			listener.enterFloat_result(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFloat_result) {
			listener.exitFloat_result(this);
		}
	}
}


export class String_resultContext extends ParserRuleContext {
	public _op: Token;
	public string_result(): String_resultContext[];
	public string_result(i: number): String_resultContext;
	public string_result(i?: number): String_resultContext | String_resultContext[] {
		if (i === undefined) {
			return this.getRuleContexts(String_resultContext);
		} else {
			return this.getRuleContext(i, String_resultContext);
		}
	}
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS, 0); }
	public literal_t(): Literal_tContext | undefined {
		return this.tryGetRuleContext(0, Literal_tContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_string_result; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterString_result) {
			listener.enterString_result(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitString_result) {
			listener.exitString_result(this);
		}
	}
}


export class Comparison_listContext extends ParserRuleContext {
	public _left: ComparisonContext;
	public _op: Token;
	public _right: Comparison_listContext;
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	public BIT_AND(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_AND, 0); }
	public comparison_list(): Comparison_listContext | undefined {
		return this.tryGetRuleContext(0, Comparison_listContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.AND, 0); }
	public BIT_OR(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_OR, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.OR, 0); }
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_comparison_list; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterComparison_list) {
			listener.enterComparison_list(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitComparison_list) {
			listener.exitComparison_list(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public _left: Comp_varContext;
	public _op: Token;
	public _right: Comp_varContext;
	public comp_var(): Comp_varContext[];
	public comp_var(i: number): Comp_varContext;
	public comp_var(i?: number): Comp_varContext | Comp_varContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_varContext);
		} else {
			return this.getRuleContext(i, Comp_varContext);
		}
	}
	public LESS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LESS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.GREATER, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LESS_EQUAL, 0); }
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.GREATER_EQUAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.NOT_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_comparison; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class Comp_varContext extends ParserRuleContext {
	public all_result(): All_resultContext | undefined {
		return this.tryGetRuleContext(0, All_resultContext);
	}
	public array_selector(): Array_selectorContext | undefined {
		return this.tryGetRuleContext(0, Array_selectorContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_comp_var; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterComp_var) {
			listener.enterComp_var(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitComp_var) {
			listener.exitComp_var(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_lvalue; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterLvalue) {
			listener.enterLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitLvalue) {
			listener.exitLvalue(this);
		}
	}
}


export class RvalueContext extends ParserRuleContext {
	public lvalue(): LvalueContext | undefined {
		return this.tryGetRuleContext(0, LvalueContext);
	}
	public initial_array_assignment(): Initial_array_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Initial_array_assignmentContext);
	}
	public array_assignment(): Array_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Array_assignmentContext);
	}
	public int_result(): Int_resultContext | undefined {
		return this.tryGetRuleContext(0, Int_resultContext);
	}
	public float_result(): Float_resultContext | undefined {
		return this.tryGetRuleContext(0, Float_resultContext);
	}
	public string_result(): String_resultContext | undefined {
		return this.tryGetRuleContext(0, String_resultContext);
	}
	public global_set(): Global_setContext | undefined {
		return this.tryGetRuleContext(0, Global_setContext);
	}
	public global_get(): Global_getContext | undefined {
		return this.tryGetRuleContext(0, Global_getContext);
	}
	public dynamic_assignment(): Dynamic_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Dynamic_assignmentContext);
	}
	public string_assignment(): String_assignmentContext | undefined {
		return this.tryGetRuleContext(0, String_assignmentContext);
	}
	public float_assignment(): Float_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Float_assignmentContext);
	}
	public int_assignment(): Int_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Int_assignmentContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public literal_t(): Literal_tContext | undefined {
		return this.tryGetRuleContext(0, Literal_tContext);
	}
	public bool_t(): Bool_tContext | undefined {
		return this.tryGetRuleContext(0, Bool_tContext);
	}
	public float_t(): Float_tContext | undefined {
		return this.tryGetRuleContext(0, Float_tContext);
	}
	public int_t(): Int_tContext | undefined {
		return this.tryGetRuleContext(0, Int_tContext);
	}
	public nil_t(): Nil_tContext | undefined {
		return this.tryGetRuleContext(0, Nil_tContext);
	}
	public rvalue(): RvalueContext[];
	public rvalue(i: number): RvalueContext;
	public rvalue(i?: number): RvalueContext | RvalueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalueContext);
		} else {
			return this.getRuleContext(i, RvalueContext);
		}
	}
	public EXP(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EXP, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.NOT, 0); }
	public BIT_NOT(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_NOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MOD, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.MINUS, 0); }
	public BIT_SHL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_SHL, 0); }
	public BIT_SHR(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_SHR, 0); }
	public BIT_AND(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_AND, 0); }
	public BIT_OR(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_OR, 0); }
	public BIT_XOR(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.BIT_XOR, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LESS, 0); }
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.GREATER, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LESS_EQUAL, 0); }
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.GREATER_EQUAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.NOT_EQUAL, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.AND, 0); }
	public LEFT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.LEFT_RBRACKET, 0); }
	public RIGHT_RBRACKET(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.RIGHT_RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_rvalue; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterRvalue) {
			listener.enterRvalue(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitRvalue) {
			listener.exitRvalue(this);
		}
	}
}


export class Break_expressionContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(CorundumParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_break_expression; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterBreak_expression) {
			listener.enterBreak_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitBreak_expression) {
			listener.exitBreak_expression(this);
		}
	}
}


export class Literal_tContext extends ParserRuleContext {
	public LITERAL(): TerminalNode { return this.getToken(CorundumParser.LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_literal_t; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterLiteral_t) {
			listener.enterLiteral_t(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitLiteral_t) {
			listener.exitLiteral_t(this);
		}
	}
}


export class Float_tContext extends ParserRuleContext {
	public FLOAT(): TerminalNode { return this.getToken(CorundumParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_float_t; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterFloat_t) {
			listener.enterFloat_t(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitFloat_t) {
			listener.exitFloat_t(this);
		}
	}
}


export class Int_tContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(CorundumParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_int_t; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterInt_t) {
			listener.enterInt_t(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitInt_t) {
			listener.exitInt_t(this);
		}
	}
}


export class Bool_tContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_bool_t; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterBool_t) {
			listener.enterBool_t(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitBool_t) {
			listener.exitBool_t(this);
		}
	}
}


export class Nil_tContext extends ParserRuleContext {
	public NIL(): TerminalNode { return this.getToken(CorundumParser.NIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_nil_t; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterNil_t) {
			listener.enterNil_t(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitNil_t) {
			listener.exitNil_t(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CorundumParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_id; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class Id_globalContext extends ParserRuleContext {
	public ID_GLOBAL(): TerminalNode { return this.getToken(CorundumParser.ID_GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_id_global; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterId_global) {
			listener.enterId_global(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitId_global) {
			listener.exitId_global(this);
		}
	}
}


export class Id_functionContext extends ParserRuleContext {
	public ID_FUNCTION(): TerminalNode { return this.getToken(CorundumParser.ID_FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_id_function; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterId_function) {
			listener.enterId_function(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitId_function) {
			listener.exitId_function(this);
		}
	}
}


export class TerminatorContext extends ParserRuleContext {
	public terminator(): TerminatorContext | undefined {
		return this.tryGetRuleContext(0, TerminatorContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CorundumParser.SEMICOLON, 0); }
	public crlf(): CrlfContext | undefined {
		return this.tryGetRuleContext(0, CrlfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_terminator; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterTerminator) {
			listener.enterTerminator(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitTerminator) {
			listener.exitTerminator(this);
		}
	}
}


export class Else_tokenContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(CorundumParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_else_token; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterElse_token) {
			listener.enterElse_token(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitElse_token) {
			listener.exitElse_token(this);
		}
	}
}


export class CrlfContext extends ParserRuleContext {
	public CRLF(): TerminalNode { return this.getToken(CorundumParser.CRLF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CorundumParser.RULE_crlf; }
	// @Override
	public enterRule(listener: CorundumListener): void {
		if (listener.enterCrlf) {
			listener.enterCrlf(this);
		}
	}
	// @Override
	public exitRule(listener: CorundumListener): void {
		if (listener.exitCrlf) {
			listener.exitCrlf(this);
		}
	}
}


