// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javascript/javascript/JavaScriptParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { JavaScriptParserListener } from "./JavaScriptParserListener";
import { JavaScriptParserVisitor } from "./JavaScriptParserVisitor";


export class JavaScriptParser extends JavaScriptBaseParser {
	public static readonly HashBangLine = 1;
	public static readonly MultiLineComment = 2;
	public static readonly SingleLineComment = 3;
	public static readonly RegularExpressionLiteral = 4;
	public static readonly OpenBracket = 5;
	public static readonly CloseBracket = 6;
	public static readonly OpenParen = 7;
	public static readonly CloseParen = 8;
	public static readonly OpenBrace = 9;
	public static readonly CloseBrace = 10;
	public static readonly SemiColon = 11;
	public static readonly Comma = 12;
	public static readonly Assign = 13;
	public static readonly QuestionMark = 14;
	public static readonly Colon = 15;
	public static readonly Ellipsis = 16;
	public static readonly Dot = 17;
	public static readonly PlusPlus = 18;
	public static readonly MinusMinus = 19;
	public static readonly Plus = 20;
	public static readonly Minus = 21;
	public static readonly BitNot = 22;
	public static readonly Not = 23;
	public static readonly Multiply = 24;
	public static readonly Divide = 25;
	public static readonly Modulus = 26;
	public static readonly Power = 27;
	public static readonly NullCoalesce = 28;
	public static readonly Hashtag = 29;
	public static readonly RightShiftArithmetic = 30;
	public static readonly LeftShiftArithmetic = 31;
	public static readonly RightShiftLogical = 32;
	public static readonly LessThan = 33;
	public static readonly MoreThan = 34;
	public static readonly LessThanEquals = 35;
	public static readonly GreaterThanEquals = 36;
	public static readonly Equals_ = 37;
	public static readonly NotEquals = 38;
	public static readonly IdentityEquals = 39;
	public static readonly IdentityNotEquals = 40;
	public static readonly BitAnd = 41;
	public static readonly BitXOr = 42;
	public static readonly BitOr = 43;
	public static readonly And = 44;
	public static readonly Or = 45;
	public static readonly MultiplyAssign = 46;
	public static readonly DivideAssign = 47;
	public static readonly ModulusAssign = 48;
	public static readonly PlusAssign = 49;
	public static readonly MinusAssign = 50;
	public static readonly LeftShiftArithmeticAssign = 51;
	public static readonly RightShiftArithmeticAssign = 52;
	public static readonly RightShiftLogicalAssign = 53;
	public static readonly BitAndAssign = 54;
	public static readonly BitXorAssign = 55;
	public static readonly BitOrAssign = 56;
	public static readonly PowerAssign = 57;
	public static readonly ARROW = 58;
	public static readonly NullLiteral = 59;
	public static readonly BooleanLiteral = 60;
	public static readonly DecimalLiteral = 61;
	public static readonly HexIntegerLiteral = 62;
	public static readonly OctalIntegerLiteral = 63;
	public static readonly OctalIntegerLiteral2 = 64;
	public static readonly BinaryIntegerLiteral = 65;
	public static readonly BigHexIntegerLiteral = 66;
	public static readonly BigOctalIntegerLiteral = 67;
	public static readonly BigBinaryIntegerLiteral = 68;
	public static readonly BigDecimalIntegerLiteral = 69;
	public static readonly Break = 70;
	public static readonly Do = 71;
	public static readonly Instanceof = 72;
	public static readonly Typeof = 73;
	public static readonly Case = 74;
	public static readonly Else = 75;
	public static readonly New = 76;
	public static readonly Var = 77;
	public static readonly Catch = 78;
	public static readonly Finally = 79;
	public static readonly Return = 80;
	public static readonly Void = 81;
	public static readonly Continue = 82;
	public static readonly For = 83;
	public static readonly Switch = 84;
	public static readonly While = 85;
	public static readonly Debugger = 86;
	public static readonly Function = 87;
	public static readonly This = 88;
	public static readonly With = 89;
	public static readonly Default = 90;
	public static readonly If = 91;
	public static readonly Throw = 92;
	public static readonly Delete = 93;
	public static readonly In = 94;
	public static readonly Try = 95;
	public static readonly As = 96;
	public static readonly From = 97;
	public static readonly Class = 98;
	public static readonly Enum = 99;
	public static readonly Extends = 100;
	public static readonly Super = 101;
	public static readonly Const = 102;
	public static readonly Export = 103;
	public static readonly Import = 104;
	public static readonly Async = 105;
	public static readonly Await = 106;
	public static readonly Implements = 107;
	public static readonly Let = 108;
	public static readonly Private = 109;
	public static readonly Public = 110;
	public static readonly Interface = 111;
	public static readonly Package = 112;
	public static readonly Protected = 113;
	public static readonly Static = 114;
	public static readonly Yield = 115;
	public static readonly Identifier = 116;
	public static readonly StringLiteral = 117;
	public static readonly TemplateStringLiteral = 118;
	public static readonly WhiteSpaces = 119;
	public static readonly LineTerminator = 120;
	public static readonly HtmlComment = 121;
	public static readonly CDataComment = 122;
	public static readonly UnexpectedCharacter = 123;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_importStatement = 5;
	public static readonly RULE_importFromBlock = 6;
	public static readonly RULE_moduleItems = 7;
	public static readonly RULE_importDefault = 8;
	public static readonly RULE_importNamespace = 9;
	public static readonly RULE_importFrom = 10;
	public static readonly RULE_aliasName = 11;
	public static readonly RULE_exportStatement = 12;
	public static readonly RULE_exportFromBlock = 13;
	public static readonly RULE_declaration = 14;
	public static readonly RULE_variableStatement = 15;
	public static readonly RULE_variableDeclarationList = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_emptyStatement = 18;
	public static readonly RULE_expressionStatement = 19;
	public static readonly RULE_ifStatement = 20;
	public static readonly RULE_iterationStatement = 21;
	public static readonly RULE_varModifier = 22;
	public static readonly RULE_continueStatement = 23;
	public static readonly RULE_breakStatement = 24;
	public static readonly RULE_returnStatement = 25;
	public static readonly RULE_yieldStatement = 26;
	public static readonly RULE_withStatement = 27;
	public static readonly RULE_switchStatement = 28;
	public static readonly RULE_caseBlock = 29;
	public static readonly RULE_caseClauses = 30;
	public static readonly RULE_caseClause = 31;
	public static readonly RULE_defaultClause = 32;
	public static readonly RULE_labelledStatement = 33;
	public static readonly RULE_throwStatement = 34;
	public static readonly RULE_tryStatement = 35;
	public static readonly RULE_catchProduction = 36;
	public static readonly RULE_finallyProduction = 37;
	public static readonly RULE_debuggerStatement = 38;
	public static readonly RULE_functionDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_classTail = 41;
	public static readonly RULE_classElement = 42;
	public static readonly RULE_methodDefinition = 43;
	public static readonly RULE_formalParameterList = 44;
	public static readonly RULE_formalParameterArg = 45;
	public static readonly RULE_lastFormalParameterArg = 46;
	public static readonly RULE_functionBody = 47;
	public static readonly RULE_sourceElements = 48;
	public static readonly RULE_arrayLiteral = 49;
	public static readonly RULE_elementList = 50;
	public static readonly RULE_arrayElement = 51;
	public static readonly RULE_objectLiteral = 52;
	public static readonly RULE_propertyAssignment = 53;
	public static readonly RULE_propertyName = 54;
	public static readonly RULE_arguments = 55;
	public static readonly RULE_argument = 56;
	public static readonly RULE_expressionSequence = 57;
	public static readonly RULE_singleExpression = 58;
	public static readonly RULE_assignable = 59;
	public static readonly RULE_anoymousFunction = 60;
	public static readonly RULE_arrowFunctionParameters = 61;
	public static readonly RULE_arrowFunctionBody = 62;
	public static readonly RULE_assignmentOperator = 63;
	public static readonly RULE_literal = 64;
	public static readonly RULE_numericLiteral = 65;
	public static readonly RULE_bigintLiteral = 66;
	public static readonly RULE_identifierName = 67;
	public static readonly RULE_reservedWord = 68;
	public static readonly RULE_keyword = 69;
	public static readonly RULE_getter = 70;
	public static readonly RULE_setter = 71;
	public static readonly RULE_eos = 72;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
		"importFromBlock", "moduleItems", "importDefault", "importNamespace", 
		"importFrom", "aliasName", "exportStatement", "exportFromBlock", "declaration", 
		"variableStatement", "variableDeclarationList", "variableDeclaration", 
		"emptyStatement", "expressionStatement", "ifStatement", "iterationStatement", 
		"varModifier", "continueStatement", "breakStatement", "returnStatement", 
		"yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses", 
		"caseClause", "defaultClause", "labelledStatement", "throwStatement", 
		"tryStatement", "catchProduction", "finallyProduction", "debuggerStatement", 
		"functionDeclaration", "classDeclaration", "classTail", "classElement", 
		"methodDefinition", "formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
		"functionBody", "sourceElements", "arrayLiteral", "elementList", "arrayElement", 
		"objectLiteral", "propertyAssignment", "propertyName", "arguments", "argument", 
		"expressionSequence", "singleExpression", "assignable", "anoymousFunction", 
		"arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
		"literal", "numericLiteral", "bigintLiteral", "identifierName", "reservedWord", 
		"keyword", "getter", "setter", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'['", "']'", "'('", 
		"')'", "'{'", "'}'", "';'", "','", "'='", "'?'", "':'", "'...'", "'.'", 
		"'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'**'", 
		"'??'", "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='", 
		"'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", "'&&'", "'||'", 
		"'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", 
		"'^='", "'|='", "'**='", "'=>'", "'null'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'break'", "'do'", "'instanceof'", "'typeof'", "'case'", "'else'", "'new'", 
		"'var'", "'catch'", "'finally'", "'return'", "'void'", "'continue'", "'for'", 
		"'switch'", "'while'", "'debugger'", "'function'", "'this'", "'with'", 
		"'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'", 
		"'class'", "'enum'", "'extends'", "'super'", "'const'", "'export'", "'import'", 
		"'async'", "'await'", "'implements'", "'let'", "'private'", "'public'", 
		"'interface'", "'package'", "'protected'", "'static'", "'yield'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HashBangLine", "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", "Colon", 
		"Ellipsis", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot", 
		"Not", "Multiply", "Divide", "Modulus", "Power", "NullCoalesce", "Hashtag", 
		"RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", "LessThan", 
		"MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", "NotEquals", 
		"IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", "BitOr", "And", 
		"Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign", 
		"MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"PowerAssign", "ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
		"HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
		"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
		"BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Typeof", "Case", 
		"Else", "New", "Var", "Catch", "Finally", "Return", "Void", "Continue", 
		"For", "Switch", "While", "Debugger", "Function", "This", "With", "Default", 
		"If", "Throw", "Delete", "In", "Try", "As", "From", "Class", "Enum", "Extends", 
		"Super", "Const", "Export", "Import", "Async", "Await", "Implements", 
		"Let", "Private", "Public", "Interface", "Package", "Protected", "Static", 
		"Yield", "Identifier", "StringLiteral", "TemplateStringLiteral", "WhiteSpaces", 
		"LineTerminator", "HtmlComment", "CDataComment", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaScriptParser._LITERAL_NAMES, JavaScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaScriptParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 146;
				this.match(JavaScriptParser.HashBangLine);
				}
				break;
			}
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 149;
				this.sourceElements();
				}
				break;
			}
			this.state = 152;
			this.match(JavaScriptParser.EOF);
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
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.statement();
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
		this.enterRule(_localctx, 4, JavaScriptParser.RULE_statement);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.variableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.importStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 159;
				this.exportStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 160;
				this.emptyStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 161;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 162;
				this.expressionStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 163;
				this.ifStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 164;
				this.iterationStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 165;
				this.continueStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 166;
				this.breakStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 167;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 168;
				this.yieldStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 169;
				this.withStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 170;
				this.labelledStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 171;
				this.switchStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 172;
				this.throwStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 173;
				this.tryStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 174;
				this.debuggerStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 175;
				this.functionDeclaration();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaScriptParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 179;
				this.statementList();
				}
				break;
			}
			this.state = 182;
			this.match(JavaScriptParser.CloseBrace);
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
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 184;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 187;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaScriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(JavaScriptParser.Import);
			this.state = 190;
			this.importFromBlock();
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
	public importFromBlock(): ImportFromBlockContext {
		let _localctx: ImportFromBlockContext = new ImportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaScriptParser.RULE_importFromBlock);
		let _la: number;
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.Multiply:
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.Break - 59)) | (1 << (JavaScriptParser.Do - 59)) | (1 << (JavaScriptParser.Instanceof - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.Case - 59)) | (1 << (JavaScriptParser.Else - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Var - 59)) | (1 << (JavaScriptParser.Catch - 59)) | (1 << (JavaScriptParser.Finally - 59)) | (1 << (JavaScriptParser.Return - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Continue - 59)) | (1 << (JavaScriptParser.For - 59)) | (1 << (JavaScriptParser.Switch - 59)) | (1 << (JavaScriptParser.While - 59)) | (1 << (JavaScriptParser.Debugger - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)) | (1 << (JavaScriptParser.With - 59)) | (1 << (JavaScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.If - 91)) | (1 << (JavaScriptParser.Throw - 91)) | (1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.In - 91)) | (1 << (JavaScriptParser.Try - 91)) | (1 << (JavaScriptParser.As - 91)) | (1 << (JavaScriptParser.From - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Enum - 91)) | (1 << (JavaScriptParser.Extends - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Const - 91)) | (1 << (JavaScriptParser.Export - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.Implements - 91)) | (1 << (JavaScriptParser.Let - 91)) | (1 << (JavaScriptParser.Private - 91)) | (1 << (JavaScriptParser.Public - 91)) | (1 << (JavaScriptParser.Interface - 91)) | (1 << (JavaScriptParser.Package - 91)) | (1 << (JavaScriptParser.Protected - 91)) | (1 << (JavaScriptParser.Static - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)))) !== 0)) {
					{
					this.state = 192;
					this.importDefault();
					}
				}

				this.state = 197;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.Multiply:
					{
					this.state = 195;
					this.importNamespace();
					}
					break;
				case JavaScriptParser.OpenBrace:
					{
					this.state = 196;
					this.moduleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 199;
				this.importFrom();
				this.state = 200;
				this.eos();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.match(JavaScriptParser.StringLiteral);
				this.state = 203;
				this.eos();
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
	public moduleItems(): ModuleItemsContext {
		let _localctx: ModuleItemsContext = new ModuleItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaScriptParser.RULE_moduleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 207;
					this.aliasName();
					this.state = 208;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.Break - 59)) | (1 << (JavaScriptParser.Do - 59)) | (1 << (JavaScriptParser.Instanceof - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.Case - 59)) | (1 << (JavaScriptParser.Else - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Var - 59)) | (1 << (JavaScriptParser.Catch - 59)) | (1 << (JavaScriptParser.Finally - 59)) | (1 << (JavaScriptParser.Return - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Continue - 59)) | (1 << (JavaScriptParser.For - 59)) | (1 << (JavaScriptParser.Switch - 59)) | (1 << (JavaScriptParser.While - 59)) | (1 << (JavaScriptParser.Debugger - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)) | (1 << (JavaScriptParser.With - 59)) | (1 << (JavaScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.If - 91)) | (1 << (JavaScriptParser.Throw - 91)) | (1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.In - 91)) | (1 << (JavaScriptParser.Try - 91)) | (1 << (JavaScriptParser.As - 91)) | (1 << (JavaScriptParser.From - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Enum - 91)) | (1 << (JavaScriptParser.Extends - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Const - 91)) | (1 << (JavaScriptParser.Export - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.Implements - 91)) | (1 << (JavaScriptParser.Let - 91)) | (1 << (JavaScriptParser.Private - 91)) | (1 << (JavaScriptParser.Public - 91)) | (1 << (JavaScriptParser.Interface - 91)) | (1 << (JavaScriptParser.Package - 91)) | (1 << (JavaScriptParser.Protected - 91)) | (1 << (JavaScriptParser.Static - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)))) !== 0)) {
				{
				this.state = 215;
				this.aliasName();
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 216;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 221;
			this.match(JavaScriptParser.CloseBrace);
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
	public importDefault(): ImportDefaultContext {
		let _localctx: ImportDefaultContext = new ImportDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaScriptParser.RULE_importDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.aliasName();
			this.state = 224;
			this.match(JavaScriptParser.Comma);
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
	public importNamespace(): ImportNamespaceContext {
		let _localctx: ImportNamespaceContext = new ImportNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaScriptParser.RULE_importNamespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(JavaScriptParser.Multiply);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.As) {
				{
				this.state = 227;
				this.match(JavaScriptParser.As);
				this.state = 228;
				this.identifierName();
				}
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
	public importFrom(): ImportFromContext {
		let _localctx: ImportFromContext = new ImportFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaScriptParser.RULE_importFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(JavaScriptParser.From);
			this.state = 232;
			this.match(JavaScriptParser.StringLiteral);
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
	public aliasName(): AliasNameContext {
		let _localctx: AliasNameContext = new AliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaScriptParser.RULE_aliasName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.identifierName();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.As) {
				{
				this.state = 235;
				this.match(JavaScriptParser.As);
				this.state = 236;
				this.identifierName();
				}
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
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaScriptParser.RULE_exportStatement);
		try {
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new ExportDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 239;
				this.match(JavaScriptParser.Export);
				this.state = 242;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.OpenBrace:
				case JavaScriptParser.Multiply:
					{
					this.state = 240;
					this.exportFromBlock();
					}
					break;
				case JavaScriptParser.Var:
				case JavaScriptParser.Function:
				case JavaScriptParser.Class:
				case JavaScriptParser.Const:
				case JavaScriptParser.Async:
				case JavaScriptParser.Let:
					{
					this.state = 241;
					this.declaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 244;
				this.eos();
				}
				break;

			case 2:
				_localctx = new ExportDefaultDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.match(JavaScriptParser.Export);
				this.state = 247;
				this.match(JavaScriptParser.Default);
				this.state = 248;
				this.singleExpression(0);
				this.state = 249;
				this.eos();
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
	public exportFromBlock(): ExportFromBlockContext {
		let _localctx: ExportFromBlockContext = new ExportFromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaScriptParser.RULE_exportFromBlock);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Multiply:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this.importNamespace();
				this.state = 254;
				this.importFrom();
				this.state = 255;
				this.eos();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.moduleItems();
				this.state = 259;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 258;
					this.importFrom();
					}
					break;
				}
				this.state = 261;
				this.eos();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaScriptParser.RULE_declaration);
		try {
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Var:
			case JavaScriptParser.Const:
			case JavaScriptParser.Let:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				this.variableStatement();
				}
				break;
			case JavaScriptParser.Class:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this.classDeclaration();
				}
				break;
			case JavaScriptParser.Function:
			case JavaScriptParser.Async:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 267;
				this.functionDeclaration();
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
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.varModifier();
			this.state = 271;
			this.variableDeclarationList();
			this.state = 272;
			this.eos();
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
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.variableDeclaration();
			this.state = 279;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 275;
					this.match(JavaScriptParser.Comma);
					this.state = 276;
					this.variableDeclaration();
					}
					}
				}
				this.state = 281;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.assignable();
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 283;
				this.match(JavaScriptParser.Assign);
				this.state = 284;
				this.singleExpression(0);
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
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaScriptParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(JavaScriptParser.SemiColon);
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			if (!(this.notOpenBraceAndNotFunction())) {
				throw new FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
			}
			this.state = 290;
			this.expressionSequence();
			this.state = 291;
			this.eos();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(JavaScriptParser.If);
			this.state = 294;
			this.match(JavaScriptParser.OpenParen);
			this.state = 295;
			this.expressionSequence();
			this.state = 296;
			this.match(JavaScriptParser.CloseParen);
			this.state = 297;
			this.statement();
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 298;
				this.match(JavaScriptParser.Else);
				this.state = 299;
				this.statement();
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
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.match(JavaScriptParser.Do);
				this.state = 303;
				this.statement();
				this.state = 304;
				this.match(JavaScriptParser.While);
				this.state = 305;
				this.match(JavaScriptParser.OpenParen);
				this.state = 306;
				this.expressionSequence();
				this.state = 307;
				this.match(JavaScriptParser.CloseParen);
				this.state = 308;
				this.eos();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.match(JavaScriptParser.While);
				this.state = 311;
				this.match(JavaScriptParser.OpenParen);
				this.state = 312;
				this.expressionSequence();
				this.state = 313;
				this.match(JavaScriptParser.CloseParen);
				this.state = 314;
				this.statement();
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 316;
				this.match(JavaScriptParser.For);
				this.state = 317;
				this.match(JavaScriptParser.OpenParen);
				this.state = 320;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.RegularExpressionLiteral:
				case JavaScriptParser.OpenBracket:
				case JavaScriptParser.OpenParen:
				case JavaScriptParser.OpenBrace:
				case JavaScriptParser.PlusPlus:
				case JavaScriptParser.MinusMinus:
				case JavaScriptParser.Plus:
				case JavaScriptParser.Minus:
				case JavaScriptParser.BitNot:
				case JavaScriptParser.Not:
				case JavaScriptParser.NullLiteral:
				case JavaScriptParser.BooleanLiteral:
				case JavaScriptParser.DecimalLiteral:
				case JavaScriptParser.HexIntegerLiteral:
				case JavaScriptParser.OctalIntegerLiteral:
				case JavaScriptParser.OctalIntegerLiteral2:
				case JavaScriptParser.BinaryIntegerLiteral:
				case JavaScriptParser.BigHexIntegerLiteral:
				case JavaScriptParser.BigOctalIntegerLiteral:
				case JavaScriptParser.BigBinaryIntegerLiteral:
				case JavaScriptParser.BigDecimalIntegerLiteral:
				case JavaScriptParser.Typeof:
				case JavaScriptParser.New:
				case JavaScriptParser.Void:
				case JavaScriptParser.Function:
				case JavaScriptParser.This:
				case JavaScriptParser.Delete:
				case JavaScriptParser.Class:
				case JavaScriptParser.Super:
				case JavaScriptParser.Import:
				case JavaScriptParser.Async:
				case JavaScriptParser.Await:
				case JavaScriptParser.Yield:
				case JavaScriptParser.Identifier:
				case JavaScriptParser.StringLiteral:
				case JavaScriptParser.TemplateStringLiteral:
					{
					this.state = 318;
					this.expressionSequence();
					}
					break;
				case JavaScriptParser.Var:
				case JavaScriptParser.Const:
				case JavaScriptParser.Let:
					{
					this.state = 319;
					this.variableStatement();
					}
					break;
				case JavaScriptParser.SemiColon:
					break;
				default:
					break;
				}
				this.state = 322;
				this.match(JavaScriptParser.SemiColon);
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
					{
					this.state = 323;
					this.expressionSequence();
					}
				}

				this.state = 326;
				this.match(JavaScriptParser.SemiColon);
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
					{
					this.state = 327;
					this.expressionSequence();
					}
				}

				this.state = 330;
				this.match(JavaScriptParser.CloseParen);
				this.state = 331;
				this.statement();
				}
				break;

			case 4:
				_localctx = new ForInStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 332;
				this.match(JavaScriptParser.For);
				this.state = 333;
				this.match(JavaScriptParser.OpenParen);
				this.state = 336;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.RegularExpressionLiteral:
				case JavaScriptParser.OpenBracket:
				case JavaScriptParser.OpenParen:
				case JavaScriptParser.OpenBrace:
				case JavaScriptParser.PlusPlus:
				case JavaScriptParser.MinusMinus:
				case JavaScriptParser.Plus:
				case JavaScriptParser.Minus:
				case JavaScriptParser.BitNot:
				case JavaScriptParser.Not:
				case JavaScriptParser.NullLiteral:
				case JavaScriptParser.BooleanLiteral:
				case JavaScriptParser.DecimalLiteral:
				case JavaScriptParser.HexIntegerLiteral:
				case JavaScriptParser.OctalIntegerLiteral:
				case JavaScriptParser.OctalIntegerLiteral2:
				case JavaScriptParser.BinaryIntegerLiteral:
				case JavaScriptParser.BigHexIntegerLiteral:
				case JavaScriptParser.BigOctalIntegerLiteral:
				case JavaScriptParser.BigBinaryIntegerLiteral:
				case JavaScriptParser.BigDecimalIntegerLiteral:
				case JavaScriptParser.Typeof:
				case JavaScriptParser.New:
				case JavaScriptParser.Void:
				case JavaScriptParser.Function:
				case JavaScriptParser.This:
				case JavaScriptParser.Delete:
				case JavaScriptParser.Class:
				case JavaScriptParser.Super:
				case JavaScriptParser.Import:
				case JavaScriptParser.Async:
				case JavaScriptParser.Await:
				case JavaScriptParser.Yield:
				case JavaScriptParser.Identifier:
				case JavaScriptParser.StringLiteral:
				case JavaScriptParser.TemplateStringLiteral:
					{
					this.state = 334;
					this.singleExpression(0);
					}
					break;
				case JavaScriptParser.Var:
				case JavaScriptParser.Const:
				case JavaScriptParser.Let:
					{
					this.state = 335;
					this.variableStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 338;
				this.match(JavaScriptParser.In);
				this.state = 339;
				this.expressionSequence();
				this.state = 340;
				this.match(JavaScriptParser.CloseParen);
				this.state = 341;
				this.statement();
				}
				break;

			case 5:
				_localctx = new ForOfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 343;
				this.match(JavaScriptParser.For);
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Await) {
					{
					this.state = 344;
					this.match(JavaScriptParser.Await);
					}
				}

				this.state = 347;
				this.match(JavaScriptParser.OpenParen);
				this.state = 350;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaScriptParser.RegularExpressionLiteral:
				case JavaScriptParser.OpenBracket:
				case JavaScriptParser.OpenParen:
				case JavaScriptParser.OpenBrace:
				case JavaScriptParser.PlusPlus:
				case JavaScriptParser.MinusMinus:
				case JavaScriptParser.Plus:
				case JavaScriptParser.Minus:
				case JavaScriptParser.BitNot:
				case JavaScriptParser.Not:
				case JavaScriptParser.NullLiteral:
				case JavaScriptParser.BooleanLiteral:
				case JavaScriptParser.DecimalLiteral:
				case JavaScriptParser.HexIntegerLiteral:
				case JavaScriptParser.OctalIntegerLiteral:
				case JavaScriptParser.OctalIntegerLiteral2:
				case JavaScriptParser.BinaryIntegerLiteral:
				case JavaScriptParser.BigHexIntegerLiteral:
				case JavaScriptParser.BigOctalIntegerLiteral:
				case JavaScriptParser.BigBinaryIntegerLiteral:
				case JavaScriptParser.BigDecimalIntegerLiteral:
				case JavaScriptParser.Typeof:
				case JavaScriptParser.New:
				case JavaScriptParser.Void:
				case JavaScriptParser.Function:
				case JavaScriptParser.This:
				case JavaScriptParser.Delete:
				case JavaScriptParser.Class:
				case JavaScriptParser.Super:
				case JavaScriptParser.Import:
				case JavaScriptParser.Async:
				case JavaScriptParser.Await:
				case JavaScriptParser.Yield:
				case JavaScriptParser.Identifier:
				case JavaScriptParser.StringLiteral:
				case JavaScriptParser.TemplateStringLiteral:
					{
					this.state = 348;
					this.singleExpression(0);
					}
					break;
				case JavaScriptParser.Var:
				case JavaScriptParser.Const:
				case JavaScriptParser.Let:
					{
					this.state = 349;
					this.variableStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 352;
				this.match(JavaScriptParser.Identifier);
				this.state = 353;
				if (!(this.p("of"))) {
					throw new FailedPredicateException(this, "this.p(\"of\")");
				}
				this.state = 354;
				this.expressionSequence();
				this.state = 355;
				this.match(JavaScriptParser.CloseParen);
				this.state = 356;
				this.statement();
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
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaScriptParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (JavaScriptParser.Var - 77)) | (1 << (JavaScriptParser.Const - 77)) | (1 << (JavaScriptParser.Let - 77)))) !== 0))) {
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
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(JavaScriptParser.Continue);
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 363;
				if (!(this.notLineTerminator())) {
					throw new FailedPredicateException(this, "this.notLineTerminator()");
				}
				this.state = 364;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			}
			this.state = 367;
			this.eos();
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
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(JavaScriptParser.Break);
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 370;
				if (!(this.notLineTerminator())) {
					throw new FailedPredicateException(this, "this.notLineTerminator()");
				}
				this.state = 371;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			}
			this.state = 374;
			this.eos();
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(JavaScriptParser.Return);
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 377;
				if (!(this.notLineTerminator())) {
					throw new FailedPredicateException(this, "this.notLineTerminator()");
				}
				this.state = 378;
				this.expressionSequence();
				}
				break;
			}
			this.state = 381;
			this.eos();
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
	public yieldStatement(): YieldStatementContext {
		let _localctx: YieldStatementContext = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaScriptParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(JavaScriptParser.Yield);
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				if (!(this.notLineTerminator())) {
					throw new FailedPredicateException(this, "this.notLineTerminator()");
				}
				this.state = 385;
				this.expressionSequence();
				}
				break;
			}
			this.state = 388;
			this.eos();
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
	public withStatement(): WithStatementContext {
		let _localctx: WithStatementContext = new WithStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(JavaScriptParser.With);
			this.state = 391;
			this.match(JavaScriptParser.OpenParen);
			this.state = 392;
			this.expressionSequence();
			this.state = 393;
			this.match(JavaScriptParser.CloseParen);
			this.state = 394;
			this.statement();
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
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(JavaScriptParser.Switch);
			this.state = 397;
			this.match(JavaScriptParser.OpenParen);
			this.state = 398;
			this.expressionSequence();
			this.state = 399;
			this.match(JavaScriptParser.CloseParen);
			this.state = 400;
			this.caseBlock();
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
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Case) {
				{
				this.state = 403;
				this.caseClauses();
				}
			}

			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Default) {
				{
				this.state = 406;
				this.defaultClause();
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Case) {
					{
					this.state = 407;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 412;
			this.match(JavaScriptParser.CloseBrace);
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
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 414;
				this.caseClause();
				}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaScriptParser.Case);
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
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(JavaScriptParser.Case);
			this.state = 420;
			this.expressionSequence();
			this.state = 421;
			this.match(JavaScriptParser.Colon);
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 422;
				this.statementList();
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
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(JavaScriptParser.Default);
			this.state = 426;
			this.match(JavaScriptParser.Colon);
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 427;
				this.statementList();
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
	public labelledStatement(): LabelledStatementContext {
		let _localctx: LabelledStatementContext = new LabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(JavaScriptParser.Identifier);
			this.state = 431;
			this.match(JavaScriptParser.Colon);
			this.state = 432;
			this.statement();
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
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(JavaScriptParser.Throw);
			this.state = 435;
			if (!(this.notLineTerminator())) {
				throw new FailedPredicateException(this, "this.notLineTerminator()");
			}
			this.state = 436;
			this.expressionSequence();
			this.state = 437;
			this.eos();
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
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(JavaScriptParser.Try);
			this.state = 440;
			this.block();
			this.state = 446;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Catch:
				{
				this.state = 441;
				this.catchProduction();
				this.state = 443;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 442;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case JavaScriptParser.Finally:
				{
				this.state = 445;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaScriptParser.RULE_catchProduction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(JavaScriptParser.Catch);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.OpenParen) {
				{
				this.state = 449;
				this.match(JavaScriptParser.OpenParen);
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.OpenBracket || _la === JavaScriptParser.OpenBrace || _la === JavaScriptParser.Identifier) {
					{
					this.state = 450;
					this.assignable();
					}
				}

				this.state = 453;
				this.match(JavaScriptParser.CloseParen);
				}
			}

			this.state = 456;
			this.block();
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
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(JavaScriptParser.Finally);
			this.state = 459;
			this.block();
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
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(JavaScriptParser.Debugger);
			this.state = 462;
			this.eos();
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Async) {
				{
				this.state = 464;
				this.match(JavaScriptParser.Async);
				}
			}

			this.state = 467;
			this.match(JavaScriptParser.Function);
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Multiply) {
				{
				this.state = 468;
				this.match(JavaScriptParser.Multiply);
				}
			}

			this.state = 471;
			this.match(JavaScriptParser.Identifier);
			this.state = 472;
			this.match(JavaScriptParser.OpenParen);
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
				{
				this.state = 473;
				this.formalParameterList();
				}
			}

			this.state = 476;
			this.match(JavaScriptParser.CloseParen);
			this.state = 477;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 478;
			this.functionBody();
			this.state = 479;
			this.match(JavaScriptParser.CloseBrace);
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(JavaScriptParser.Class);
			this.state = 482;
			this.match(JavaScriptParser.Identifier);
			this.state = 483;
			this.classTail();
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
	public classTail(): ClassTailContext {
		let _localctx: ClassTailContext = new ClassTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaScriptParser.RULE_classTail);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Extends) {
				{
				this.state = 485;
				this.match(JavaScriptParser.Extends);
				this.state = 486;
				this.singleExpression(0);
				}
			}

			this.state = 489;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 493;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 490;
					this.classElement();
					}
					}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 496;
			this.match(JavaScriptParser.CloseBrace);
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
	public classElement(): ClassElementContext {
		let _localctx: ClassElementContext = new ClassElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaScriptParser.RULE_classElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 502;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
						case 1:
							{
							this.state = 498;
							this.match(JavaScriptParser.Static);
							}
							break;

						case 2:
							{
							this.state = 499;
							if (!(this.n("static"))) {
								throw new FailedPredicateException(this, "this.n(\"static\")");
							}
							this.state = 500;
							this.match(JavaScriptParser.Identifier);
							}
							break;

						case 3:
							{
							this.state = 501;
							this.match(JavaScriptParser.Async);
							}
							break;
						}
						}
					}
					this.state = 506;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 507;
				this.methodDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.emptyStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 509;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 512;
				this.propertyName();
				this.state = 513;
				this.match(JavaScriptParser.Assign);
				this.state = 514;
				this.singleExpression(0);
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
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaScriptParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 518;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 521;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 524;
				this.propertyName();
				this.state = 525;
				this.match(JavaScriptParser.OpenParen);
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
					{
					this.state = 526;
					this.formalParameterList();
					}
				}

				this.state = 529;
				this.match(JavaScriptParser.CloseParen);
				this.state = 530;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 531;
				this.functionBody();
				this.state = 532;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 534;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 537;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 540;
				this.getter();
				this.state = 541;
				this.match(JavaScriptParser.OpenParen);
				this.state = 542;
				this.match(JavaScriptParser.CloseParen);
				this.state = 543;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 544;
				this.functionBody();
				this.state = 545;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 547;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Hashtag) {
					{
					this.state = 550;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 553;
				this.setter();
				this.state = 554;
				this.match(JavaScriptParser.OpenParen);
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
					{
					this.state = 555;
					this.formalParameterList();
					}
				}

				this.state = 558;
				this.match(JavaScriptParser.CloseParen);
				this.state = 559;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 560;
				this.functionBody();
				this.state = 561;
				this.match(JavaScriptParser.CloseBrace);
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
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.OpenBracket:
			case JavaScriptParser.OpenBrace:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				this.formalParameterArg();
				this.state = 570;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 566;
						this.match(JavaScriptParser.Comma);
						this.state = 567;
						this.formalParameterArg();
						}
						}
					}
					this.state = 572;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 573;
					this.match(JavaScriptParser.Comma);
					this.state = 574;
					this.lastFormalParameterArg();
					}
				}

				}
				break;
			case JavaScriptParser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.lastFormalParameterArg();
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
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.assignable();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Assign) {
				{
				this.state = 581;
				this.match(JavaScriptParser.Assign);
				this.state = 582;
				this.singleExpression(0);
				}
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
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let _localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaScriptParser.RULE_lastFormalParameterArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 586;
			this.singleExpression(0);
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 588;
				this.sourceElements();
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
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 591;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 594;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 596;
			this.match(JavaScriptParser.OpenBracket);
			this.state = 597;
			this.elementList();
			this.state = 598;
			this.match(JavaScriptParser.CloseBracket);
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
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 600;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
				{
				this.state = 606;
				this.arrayElement();
				}
			}

			this.state = 617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 610;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 609;
						this.match(JavaScriptParser.Comma);
						}
						}
						this.state = 612;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavaScriptParser.Comma);
					this.state = 614;
					this.arrayElement();
					}
					}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaScriptParser.Comma) {
				{
				{
				this.state = 620;
				this.match(JavaScriptParser.Comma);
				}
				}
				this.state = 625;
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
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaScriptParser.RULE_arrayElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 626;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 629;
			this.singleExpression(0);
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
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not) | (1 << JavaScriptParser.Multiply))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Break - 59)) | (1 << (JavaScriptParser.Do - 59)) | (1 << (JavaScriptParser.Instanceof - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.Case - 59)) | (1 << (JavaScriptParser.Else - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Var - 59)) | (1 << (JavaScriptParser.Catch - 59)) | (1 << (JavaScriptParser.Finally - 59)) | (1 << (JavaScriptParser.Return - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Continue - 59)) | (1 << (JavaScriptParser.For - 59)) | (1 << (JavaScriptParser.Switch - 59)) | (1 << (JavaScriptParser.While - 59)) | (1 << (JavaScriptParser.Debugger - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)) | (1 << (JavaScriptParser.With - 59)) | (1 << (JavaScriptParser.Default - 59)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (JavaScriptParser.If - 91)) | (1 << (JavaScriptParser.Throw - 91)) | (1 << (JavaScriptParser.Delete - 91)) | (1 << (JavaScriptParser.In - 91)) | (1 << (JavaScriptParser.Try - 91)) | (1 << (JavaScriptParser.As - 91)) | (1 << (JavaScriptParser.From - 91)) | (1 << (JavaScriptParser.Class - 91)) | (1 << (JavaScriptParser.Enum - 91)) | (1 << (JavaScriptParser.Extends - 91)) | (1 << (JavaScriptParser.Super - 91)) | (1 << (JavaScriptParser.Const - 91)) | (1 << (JavaScriptParser.Export - 91)) | (1 << (JavaScriptParser.Import - 91)) | (1 << (JavaScriptParser.Async - 91)) | (1 << (JavaScriptParser.Await - 91)) | (1 << (JavaScriptParser.Implements - 91)) | (1 << (JavaScriptParser.Let - 91)) | (1 << (JavaScriptParser.Private - 91)) | (1 << (JavaScriptParser.Public - 91)) | (1 << (JavaScriptParser.Interface - 91)) | (1 << (JavaScriptParser.Package - 91)) | (1 << (JavaScriptParser.Protected - 91)) | (1 << (JavaScriptParser.Static - 91)) | (1 << (JavaScriptParser.Yield - 91)) | (1 << (JavaScriptParser.Identifier - 91)) | (1 << (JavaScriptParser.StringLiteral - 91)) | (1 << (JavaScriptParser.TemplateStringLiteral - 91)))) !== 0)) {
				{
				this.state = 632;
				this.propertyAssignment();
				this.state = 637;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 633;
						this.match(JavaScriptParser.Comma);
						this.state = 634;
						this.propertyAssignment();
						}
						}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				}
			}

			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Comma) {
				{
				this.state = 642;
				this.match(JavaScriptParser.Comma);
				}
			}

			this.state = 645;
			this.match(JavaScriptParser.CloseBrace);
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
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 647;
				this.propertyName();
				this.state = 648;
				this.match(JavaScriptParser.Colon);
				this.state = 649;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 651;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 652;
				this.singleExpression(0);
				this.state = 653;
				this.match(JavaScriptParser.CloseBracket);
				this.state = 654;
				this.match(JavaScriptParser.Colon);
				this.state = 655;
				this.singleExpression(0);
				}
				break;

			case 3:
				_localctx = new FunctionPropertyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 658;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 657;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 660;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 663;
				this.propertyName();
				this.state = 664;
				this.match(JavaScriptParser.OpenParen);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
					{
					this.state = 665;
					this.formalParameterList();
					}
				}

				this.state = 668;
				this.match(JavaScriptParser.CloseParen);
				this.state = 669;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 670;
				this.functionBody();
				this.state = 671;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 4:
				_localctx = new PropertyGetterContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 673;
				this.getter();
				this.state = 674;
				this.match(JavaScriptParser.OpenParen);
				this.state = 675;
				this.match(JavaScriptParser.CloseParen);
				this.state = 676;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 677;
				this.functionBody();
				this.state = 678;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 5:
				_localctx = new PropertySetterContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 680;
				this.setter();
				this.state = 681;
				this.match(JavaScriptParser.OpenParen);
				this.state = 682;
				this.formalParameterArg();
				this.state = 683;
				this.match(JavaScriptParser.CloseParen);
				this.state = 684;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 685;
				this.functionBody();
				this.state = 686;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 6:
				_localctx = new PropertyShorthandContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 689;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Ellipsis) {
					{
					this.state = 688;
					this.match(JavaScriptParser.Ellipsis);
					}
				}

				this.state = 691;
				this.singleExpression(0);
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
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaScriptParser.RULE_propertyName);
		try {
			this.state = 701;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.identifierName();
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 696;
				this.numericLiteral();
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 697;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 698;
				this.singleExpression(0);
				this.state = 699;
				this.match(JavaScriptParser.CloseBracket);
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaScriptParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(JavaScriptParser.OpenParen);
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.RegularExpressionLiteral) | (1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenParen) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis) | (1 << JavaScriptParser.PlusPlus) | (1 << JavaScriptParser.MinusMinus) | (1 << JavaScriptParser.Plus) | (1 << JavaScriptParser.Minus) | (1 << JavaScriptParser.BitNot) | (1 << JavaScriptParser.Not))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (JavaScriptParser.NullLiteral - 59)) | (1 << (JavaScriptParser.BooleanLiteral - 59)) | (1 << (JavaScriptParser.DecimalLiteral - 59)) | (1 << (JavaScriptParser.HexIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 59)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigHexIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 59)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 59)) | (1 << (JavaScriptParser.Typeof - 59)) | (1 << (JavaScriptParser.New - 59)) | (1 << (JavaScriptParser.Void - 59)) | (1 << (JavaScriptParser.Function - 59)) | (1 << (JavaScriptParser.This - 59)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (JavaScriptParser.Delete - 93)) | (1 << (JavaScriptParser.Class - 93)) | (1 << (JavaScriptParser.Super - 93)) | (1 << (JavaScriptParser.Import - 93)) | (1 << (JavaScriptParser.Async - 93)) | (1 << (JavaScriptParser.Await - 93)) | (1 << (JavaScriptParser.Yield - 93)) | (1 << (JavaScriptParser.Identifier - 93)) | (1 << (JavaScriptParser.StringLiteral - 93)) | (1 << (JavaScriptParser.TemplateStringLiteral - 93)))) !== 0)) {
				{
				this.state = 704;
				this.argument();
				this.state = 709;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 705;
						this.match(JavaScriptParser.Comma);
						this.state = 706;
						this.argument();
						}
						}
					}
					this.state = 711;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Comma) {
					{
					this.state = 712;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 717;
			this.match(JavaScriptParser.CloseParen);
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaScriptParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaScriptParser.Ellipsis) {
				{
				this.state = 719;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 722;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 723;
				this.match(JavaScriptParser.Identifier);
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
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JavaScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.singleExpression(0);
			this.state = 731;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 727;
					this.match(JavaScriptParser.Comma);
					this.state = 728;
					this.singleExpression(0);
					}
					}
				}
				this.state = 733;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
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

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, JavaScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 735;
				this.anoymousFunction();
				}
				break;

			case 2:
				{
				_localctx = new ClassExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 736;
				this.match(JavaScriptParser.Class);
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Identifier) {
					{
					this.state = 737;
					this.match(JavaScriptParser.Identifier);
					}
				}

				this.state = 740;
				this.classTail();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 741;
				this.match(JavaScriptParser.New);
				this.state = 742;
				this.singleExpression(0);
				this.state = 744;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 743;
					this.arguments();
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new MetaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 746;
				this.match(JavaScriptParser.New);
				this.state = 747;
				this.match(JavaScriptParser.Dot);
				this.state = 748;
				this.match(JavaScriptParser.Identifier);
				}
				break;

			case 5:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 749;
				this.match(JavaScriptParser.Delete);
				this.state = 750;
				this.singleExpression(37);
				}
				break;

			case 6:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 751;
				this.match(JavaScriptParser.Void);
				this.state = 752;
				this.singleExpression(36);
				}
				break;

			case 7:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 753;
				this.match(JavaScriptParser.Typeof);
				this.state = 754;
				this.singleExpression(35);
				}
				break;

			case 8:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 755;
				this.match(JavaScriptParser.PlusPlus);
				this.state = 756;
				this.singleExpression(34);
				}
				break;

			case 9:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 757;
				this.match(JavaScriptParser.MinusMinus);
				this.state = 758;
				this.singleExpression(33);
				}
				break;

			case 10:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 759;
				this.match(JavaScriptParser.Plus);
				this.state = 760;
				this.singleExpression(32);
				}
				break;

			case 11:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 761;
				this.match(JavaScriptParser.Minus);
				this.state = 762;
				this.singleExpression(31);
				}
				break;

			case 12:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 763;
				this.match(JavaScriptParser.BitNot);
				this.state = 764;
				this.singleExpression(30);
				}
				break;

			case 13:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 765;
				this.match(JavaScriptParser.Not);
				this.state = 766;
				this.singleExpression(29);
				}
				break;

			case 14:
				{
				_localctx = new AwaitExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 767;
				this.match(JavaScriptParser.Await);
				this.state = 768;
				this.singleExpression(28);
				}
				break;

			case 15:
				{
				_localctx = new ImportExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 769;
				this.match(JavaScriptParser.Import);
				this.state = 770;
				this.match(JavaScriptParser.OpenParen);
				this.state = 771;
				this.singleExpression(0);
				this.state = 772;
				this.match(JavaScriptParser.CloseParen);
				}
				break;

			case 16:
				{
				_localctx = new YieldExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 774;
				this.yieldStatement();
				}
				break;

			case 17:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 775;
				this.match(JavaScriptParser.This);
				}
				break;

			case 18:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 776;
				this.match(JavaScriptParser.Identifier);
				}
				break;

			case 19:
				{
				_localctx = new SuperExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 777;
				this.match(JavaScriptParser.Super);
				}
				break;

			case 20:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 778;
				this.literal();
				}
				break;

			case 21:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 779;
				this.arrayLiteral();
				}
				break;

			case 22:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 780;
				this.objectLiteral();
				}
				break;

			case 23:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 781;
				this.match(JavaScriptParser.OpenParen);
				this.state = 782;
				this.expressionSequence();
				this.state = 783;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 868;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 866;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 787;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 788;
						this.match(JavaScriptParser.Power);
						this.state = 789;
						this.singleExpression(27);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 790;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 791;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.Multiply) | (1 << JavaScriptParser.Divide) | (1 << JavaScriptParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 792;
						this.singleExpression(27);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 793;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 794;
						_la = this._input.LA(1);
						if (!(_la === JavaScriptParser.Plus || _la === JavaScriptParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 795;
						this.singleExpression(26);
						}
						break;

					case 4:
						{
						_localctx = new CoalesceExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 796;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 797;
						this.match(JavaScriptParser.NullCoalesce);
						this.state = 798;
						this.singleExpression(25);
						}
						break;

					case 5:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 799;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 800;
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (JavaScriptParser.RightShiftArithmetic - 30)) | (1 << (JavaScriptParser.LeftShiftArithmetic - 30)) | (1 << (JavaScriptParser.RightShiftLogical - 30)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 801;
						this.singleExpression(24);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 802;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 803;
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaScriptParser.LessThan - 33)) | (1 << (JavaScriptParser.MoreThan - 33)) | (1 << (JavaScriptParser.LessThanEquals - 33)) | (1 << (JavaScriptParser.GreaterThanEquals - 33)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 804;
						this.singleExpression(23);
						}
						break;

					case 7:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 805;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 806;
						this.match(JavaScriptParser.Instanceof);
						this.state = 807;
						this.singleExpression(22);
						}
						break;

					case 8:
						{
						_localctx = new InExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 808;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 809;
						this.match(JavaScriptParser.In);
						this.state = 810;
						this.singleExpression(21);
						}
						break;

					case 9:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 811;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 812;
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaScriptParser.Equals_ - 37)) | (1 << (JavaScriptParser.NotEquals - 37)) | (1 << (JavaScriptParser.IdentityEquals - 37)) | (1 << (JavaScriptParser.IdentityNotEquals - 37)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 813;
						this.singleExpression(20);
						}
						break;

					case 10:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 814;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 815;
						this.match(JavaScriptParser.BitAnd);
						this.state = 816;
						this.singleExpression(19);
						}
						break;

					case 11:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 817;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 818;
						this.match(JavaScriptParser.BitXOr);
						this.state = 819;
						this.singleExpression(18);
						}
						break;

					case 12:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 820;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 821;
						this.match(JavaScriptParser.BitOr);
						this.state = 822;
						this.singleExpression(17);
						}
						break;

					case 13:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 823;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 824;
						this.match(JavaScriptParser.And);
						this.state = 825;
						this.singleExpression(16);
						}
						break;

					case 14:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 826;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 827;
						this.match(JavaScriptParser.Or);
						this.state = 828;
						this.singleExpression(15);
						}
						break;

					case 15:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 829;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 830;
						this.match(JavaScriptParser.QuestionMark);
						this.state = 831;
						this.singleExpression(0);
						this.state = 832;
						this.match(JavaScriptParser.Colon);
						this.state = 833;
						this.singleExpression(14);
						}
						break;

					case 16:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 835;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 836;
						this.match(JavaScriptParser.Assign);
						this.state = 837;
						this.singleExpression(12);
						}
						break;

					case 17:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 838;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 839;
						this.assignmentOperator();
						this.state = 840;
						this.singleExpression(11);
						}
						break;

					case 18:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 842;
						if (!(this.precpred(this._ctx, 44))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 44)");
						}
						this.state = 843;
						this.match(JavaScriptParser.OpenBracket);
						this.state = 844;
						this.expressionSequence();
						this.state = 845;
						this.match(JavaScriptParser.CloseBracket);
						}
						break;

					case 19:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 847;
						if (!(this.precpred(this._ctx, 43))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 43)");
						}
						this.state = 849;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaScriptParser.QuestionMark) {
							{
							this.state = 848;
							this.match(JavaScriptParser.QuestionMark);
							}
						}

						this.state = 851;
						this.match(JavaScriptParser.Dot);
						this.state = 853;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === JavaScriptParser.Hashtag) {
							{
							this.state = 852;
							this.match(JavaScriptParser.Hashtag);
							}
						}

						this.state = 855;
						this.identifierName();
						}
						break;

					case 20:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 856;
						if (!(this.precpred(this._ctx, 42))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 42)");
						}
						this.state = 857;
						this.arguments();
						}
						break;

					case 21:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 858;
						if (!(this.precpred(this._ctx, 39))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 39)");
						}
						this.state = 859;
						if (!(this.notLineTerminator())) {
							throw new FailedPredicateException(this, "this.notLineTerminator()");
						}
						this.state = 860;
						this.match(JavaScriptParser.PlusPlus);
						}
						break;

					case 22:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 861;
						if (!(this.precpred(this._ctx, 38))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 38)");
						}
						this.state = 862;
						if (!(this.notLineTerminator())) {
							throw new FailedPredicateException(this, "this.notLineTerminator()");
						}
						this.state = 863;
						this.match(JavaScriptParser.MinusMinus);
						}
						break;

					case 23:
						{
						_localctx = new TemplateStringExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 864;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 865;
						this.match(JavaScriptParser.TemplateStringLiteral);
						}
						break;
					}
					}
				}
				this.state = 870;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
	public assignable(): AssignableContext {
		let _localctx: AssignableContext = new AssignableContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaScriptParser.RULE_assignable);
		try {
			this.state = 874;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 871;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			case JavaScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 872;
				this.arrayLiteral();
				}
				break;
			case JavaScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 873;
				this.objectLiteral();
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
	public anoymousFunction(): AnoymousFunctionContext {
		let _localctx: AnoymousFunctionContext = new AnoymousFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaScriptParser.RULE_anoymousFunction);
		let _la: number;
		try {
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				_localctx = new FunctionDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 876;
				this.functionDeclaration();
				}
				break;

			case 2:
				_localctx = new AnoymousFunctionDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Async) {
					{
					this.state = 877;
					this.match(JavaScriptParser.Async);
					}
				}

				this.state = 880;
				this.match(JavaScriptParser.Function);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Multiply) {
					{
					this.state = 881;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 884;
				this.match(JavaScriptParser.OpenParen);
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
					{
					this.state = 885;
					this.formalParameterList();
					}
				}

				this.state = 888;
				this.match(JavaScriptParser.CloseParen);
				this.state = 889;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 890;
				this.functionBody();
				this.state = 891;
				this.match(JavaScriptParser.CloseBrace);
				}
				break;

			case 3:
				_localctx = new ArrowFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaScriptParser.Async) {
					{
					this.state = 893;
					this.match(JavaScriptParser.Async);
					}
				}

				this.state = 896;
				this.arrowFunctionParameters();
				this.state = 897;
				this.match(JavaScriptParser.ARROW);
				this.state = 898;
				this.arrowFunctionBody();
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
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let _localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 908;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 902;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			case JavaScriptParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 903;
				this.match(JavaScriptParser.OpenParen);
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaScriptParser.OpenBracket) | (1 << JavaScriptParser.OpenBrace) | (1 << JavaScriptParser.Ellipsis))) !== 0) || _la === JavaScriptParser.Identifier) {
					{
					this.state = 904;
					this.formalParameterList();
					}
				}

				this.state = 907;
				this.match(JavaScriptParser.CloseParen);
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
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let _localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 910;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 911;
				this.match(JavaScriptParser.OpenBrace);
				this.state = 912;
				this.functionBody();
				this.state = 913;
				this.match(JavaScriptParser.CloseBrace);
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
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (JavaScriptParser.MultiplyAssign - 46)) | (1 << (JavaScriptParser.DivideAssign - 46)) | (1 << (JavaScriptParser.ModulusAssign - 46)) | (1 << (JavaScriptParser.PlusAssign - 46)) | (1 << (JavaScriptParser.MinusAssign - 46)) | (1 << (JavaScriptParser.LeftShiftArithmeticAssign - 46)) | (1 << (JavaScriptParser.RightShiftArithmeticAssign - 46)) | (1 << (JavaScriptParser.RightShiftLogicalAssign - 46)) | (1 << (JavaScriptParser.BitAndAssign - 46)) | (1 << (JavaScriptParser.BitXorAssign - 46)) | (1 << (JavaScriptParser.BitOrAssign - 46)) | (1 << (JavaScriptParser.PowerAssign - 46)))) !== 0))) {
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
		this.enterRule(_localctx, 128, JavaScriptParser.RULE_literal);
		try {
			this.state = 926;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 919;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 920;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			case JavaScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 921;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case JavaScriptParser.TemplateStringLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 922;
				this.match(JavaScriptParser.TemplateStringLiteral);
				}
				break;
			case JavaScriptParser.RegularExpressionLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 923;
				this.match(JavaScriptParser.RegularExpressionLiteral);
				}
				break;
			case JavaScriptParser.DecimalLiteral:
			case JavaScriptParser.HexIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral:
			case JavaScriptParser.OctalIntegerLiteral2:
			case JavaScriptParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 924;
				this.numericLiteral();
				}
				break;
			case JavaScriptParser.BigHexIntegerLiteral:
			case JavaScriptParser.BigOctalIntegerLiteral:
			case JavaScriptParser.BigBinaryIntegerLiteral:
			case JavaScriptParser.BigDecimalIntegerLiteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 925;
				this.bigintLiteral();
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
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			_la = this._input.LA(1);
			if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (JavaScriptParser.DecimalLiteral - 61)) | (1 << (JavaScriptParser.HexIntegerLiteral - 61)) | (1 << (JavaScriptParser.OctalIntegerLiteral - 61)) | (1 << (JavaScriptParser.OctalIntegerLiteral2 - 61)) | (1 << (JavaScriptParser.BinaryIntegerLiteral - 61)))) !== 0))) {
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
	public bigintLiteral(): BigintLiteralContext {
		let _localctx: BigintLiteralContext = new BigintLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaScriptParser.RULE_bigintLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			_la = this._input.LA(1);
			if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaScriptParser.BigHexIntegerLiteral - 66)) | (1 << (JavaScriptParser.BigOctalIntegerLiteral - 66)) | (1 << (JavaScriptParser.BigBinaryIntegerLiteral - 66)) | (1 << (JavaScriptParser.BigDecimalIntegerLiteral - 66)))) !== 0))) {
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
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaScriptParser.RULE_identifierName);
		try {
			this.state = 934;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 932;
				this.match(JavaScriptParser.Identifier);
				}
				break;
			case JavaScriptParser.NullLiteral:
			case JavaScriptParser.BooleanLiteral:
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 933;
				this.reservedWord();
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
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaScriptParser.RULE_reservedWord);
		try {
			this.state = 939;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaScriptParser.Break:
			case JavaScriptParser.Do:
			case JavaScriptParser.Instanceof:
			case JavaScriptParser.Typeof:
			case JavaScriptParser.Case:
			case JavaScriptParser.Else:
			case JavaScriptParser.New:
			case JavaScriptParser.Var:
			case JavaScriptParser.Catch:
			case JavaScriptParser.Finally:
			case JavaScriptParser.Return:
			case JavaScriptParser.Void:
			case JavaScriptParser.Continue:
			case JavaScriptParser.For:
			case JavaScriptParser.Switch:
			case JavaScriptParser.While:
			case JavaScriptParser.Debugger:
			case JavaScriptParser.Function:
			case JavaScriptParser.This:
			case JavaScriptParser.With:
			case JavaScriptParser.Default:
			case JavaScriptParser.If:
			case JavaScriptParser.Throw:
			case JavaScriptParser.Delete:
			case JavaScriptParser.In:
			case JavaScriptParser.Try:
			case JavaScriptParser.As:
			case JavaScriptParser.From:
			case JavaScriptParser.Class:
			case JavaScriptParser.Enum:
			case JavaScriptParser.Extends:
			case JavaScriptParser.Super:
			case JavaScriptParser.Const:
			case JavaScriptParser.Export:
			case JavaScriptParser.Import:
			case JavaScriptParser.Async:
			case JavaScriptParser.Await:
			case JavaScriptParser.Implements:
			case JavaScriptParser.Let:
			case JavaScriptParser.Private:
			case JavaScriptParser.Public:
			case JavaScriptParser.Interface:
			case JavaScriptParser.Package:
			case JavaScriptParser.Protected:
			case JavaScriptParser.Static:
			case JavaScriptParser.Yield:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 936;
				this.keyword();
				}
				break;
			case JavaScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 937;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case JavaScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 938;
				this.match(JavaScriptParser.BooleanLiteral);
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
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (JavaScriptParser.Break - 70)) | (1 << (JavaScriptParser.Do - 70)) | (1 << (JavaScriptParser.Instanceof - 70)) | (1 << (JavaScriptParser.Typeof - 70)) | (1 << (JavaScriptParser.Case - 70)) | (1 << (JavaScriptParser.Else - 70)) | (1 << (JavaScriptParser.New - 70)) | (1 << (JavaScriptParser.Var - 70)) | (1 << (JavaScriptParser.Catch - 70)) | (1 << (JavaScriptParser.Finally - 70)) | (1 << (JavaScriptParser.Return - 70)) | (1 << (JavaScriptParser.Void - 70)) | (1 << (JavaScriptParser.Continue - 70)) | (1 << (JavaScriptParser.For - 70)) | (1 << (JavaScriptParser.Switch - 70)) | (1 << (JavaScriptParser.While - 70)) | (1 << (JavaScriptParser.Debugger - 70)) | (1 << (JavaScriptParser.Function - 70)) | (1 << (JavaScriptParser.This - 70)) | (1 << (JavaScriptParser.With - 70)) | (1 << (JavaScriptParser.Default - 70)) | (1 << (JavaScriptParser.If - 70)) | (1 << (JavaScriptParser.Throw - 70)) | (1 << (JavaScriptParser.Delete - 70)) | (1 << (JavaScriptParser.In - 70)) | (1 << (JavaScriptParser.Try - 70)) | (1 << (JavaScriptParser.As - 70)) | (1 << (JavaScriptParser.From - 70)) | (1 << (JavaScriptParser.Class - 70)) | (1 << (JavaScriptParser.Enum - 70)) | (1 << (JavaScriptParser.Extends - 70)) | (1 << (JavaScriptParser.Super - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (JavaScriptParser.Const - 102)) | (1 << (JavaScriptParser.Export - 102)) | (1 << (JavaScriptParser.Import - 102)) | (1 << (JavaScriptParser.Async - 102)) | (1 << (JavaScriptParser.Await - 102)) | (1 << (JavaScriptParser.Implements - 102)) | (1 << (JavaScriptParser.Let - 102)) | (1 << (JavaScriptParser.Private - 102)) | (1 << (JavaScriptParser.Public - 102)) | (1 << (JavaScriptParser.Interface - 102)) | (1 << (JavaScriptParser.Package - 102)) | (1 << (JavaScriptParser.Protected - 102)) | (1 << (JavaScriptParser.Static - 102)) | (1 << (JavaScriptParser.Yield - 102)))) !== 0))) {
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
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 943;
			this.match(JavaScriptParser.Identifier);
			this.state = 944;
			if (!(this.p("get"))) {
				throw new FailedPredicateException(this, "this.p(\"get\")");
			}
			this.state = 945;
			this.propertyName();
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
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(JavaScriptParser.Identifier);
			this.state = 948;
			if (!(this.p("set"))) {
				throw new FailedPredicateException(this, "this.p(\"set\")");
			}
			this.state = 949;
			this.propertyName();
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
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaScriptParser.RULE_eos);
		try {
			this.state = 955;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 951;
				this.match(JavaScriptParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 952;
				this.match(JavaScriptParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 953;
				if (!(this.lineTerminatorAhead())) {
					throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 954;
				if (!(this.closeBrace())) {
					throw new FailedPredicateException(this, "this.closeBrace()");
				}
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.expressionStatement_sempred(_localctx as ExpressionStatementContext, predIndex);

		case 21:
			return this.iterationStatement_sempred(_localctx as IterationStatementContext, predIndex);

		case 23:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 24:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 25:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 26:
			return this.yieldStatement_sempred(_localctx as YieldStatementContext, predIndex);

		case 34:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 42:
			return this.classElement_sempred(_localctx as ClassElementContext, predIndex);

		case 58:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 70:
			return this.getter_sempred(_localctx as GetterContext, predIndex);

		case 71:
			return this.setter_sempred(_localctx as SetterContext, predIndex);

		case 72:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private expressionStatement_sempred(_localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(_localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.p("of");
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private yieldStatement_sempred(_localctx: YieldStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private classElement_sempred(_localctx: ClassElementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.n("static");
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 27);

		case 9:
			return this.precpred(this._ctx, 26);

		case 10:
			return this.precpred(this._ctx, 25);

		case 11:
			return this.precpred(this._ctx, 24);

		case 12:
			return this.precpred(this._ctx, 23);

		case 13:
			return this.precpred(this._ctx, 22);

		case 14:
			return this.precpred(this._ctx, 21);

		case 15:
			return this.precpred(this._ctx, 20);

		case 16:
			return this.precpred(this._ctx, 19);

		case 17:
			return this.precpred(this._ctx, 18);

		case 18:
			return this.precpred(this._ctx, 17);

		case 19:
			return this.precpred(this._ctx, 16);

		case 20:
			return this.precpred(this._ctx, 15);

		case 21:
			return this.precpred(this._ctx, 14);

		case 22:
			return this.precpred(this._ctx, 13);

		case 23:
			return this.precpred(this._ctx, 12);

		case 24:
			return this.precpred(this._ctx, 11);

		case 25:
			return this.precpred(this._ctx, 44);

		case 26:
			return this.precpred(this._ctx, 43);

		case 27:
			return this.precpred(this._ctx, 42);

		case 28:
			return this.precpred(this._ctx, 39);

		case 29:
			return this.notLineTerminator();

		case 30:
			return this.precpred(this._ctx, 38);

		case 31:
			return this.notLineTerminator();

		case 32:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private getter_sempred(_localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.p("get");
		}
		return true;
	}
	private setter_sempred(_localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.p("set");
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.lineTerminatorAhead();

		case 36:
			return this.closeBrace();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03}\u03C0\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x03\x02\x05\x02\x96\n\x02\x03\x02" +
		"\x05\x02\x99\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\xB3\n\x04\x03\x05\x03\x05\x05\x05\xB7\n\x05\x03\x05\x03\x05\x03\x06" +
		"\x06\x06\xBC\n\x06\r\x06\x0E\x06\xBD\x03\x07\x03\x07\x03\x07\x03\b\x05" +
		"\b\xC4\n\b\x03\b\x03\b\x05\b\xC8\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\xCF\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\xD5\n\t\f\t\x0E\t\xD8\v\t\x03" +
		"\t\x03\t\x05\t\xDC\n\t\x05\t\xDE\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x05\v\xE8\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r" +
		"\xF0\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF5\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFE\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0106\n\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u010A\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u010F\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u0118\n\x12\f\x12" +
		"\x0E\x12\u011B\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0120\n\x13\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x05\x16\u012F\n\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0143\n\x17\x03\x17" +
		"\x03\x17\x05\x17\u0147\n\x17\x03\x17\x03\x17\x05\x17\u014B\n\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0153\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u015C\n\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u0161\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u0169\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0170\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0177" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u017E\n\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0185\n\x1C\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0197\n\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u019B\n\x1F\x05\x1F\u019D\n\x1F\x03\x1F\x03\x1F\x03 \x06" +
		" \u01A2\n \r \x0E \u01A3\x03!\x03!\x03!\x03!\x05!\u01AA\n!\x03\"\x03\"" +
		"\x03\"\x05\"\u01AF\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03" +
		"%\x03%\x03%\x03%\x05%\u01BE\n%\x03%\x05%\u01C1\n%\x03&\x03&\x03&\x05&" +
		"\u01C6\n&\x03&\x05&\u01C9\n&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03)\x05)\u01D4\n)\x03)\x03)\x05)\u01D8\n)\x03)\x03)\x03)\x05)\u01DD" +
		"\n)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x05+\u01EA" +
		"\n+\x03+\x03+\x07+\u01EE\n+\f+\x0E+\u01F1\v+\x03+\x03+\x03,\x03,\x03," +
		"\x03,\x07,\u01F9\n,\f,\x0E,\u01FC\v,\x03,\x03,\x03,\x05,\u0201\n,\x03" +
		",\x03,\x03,\x03,\x05,\u0207\n,\x03-\x05-\u020A\n-\x03-\x05-\u020D\n-\x03" +
		"-\x03-\x03-\x05-\u0212\n-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u021A\n-" +
		"\x03-\x05-\u021D\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0227" +
		"\n-\x03-\x05-\u022A\n-\x03-\x03-\x03-\x05-\u022F\n-\x03-\x03-\x03-\x03" +
		"-\x03-\x05-\u0236\n-\x03.\x03.\x03.\x07.\u023B\n.\f.\x0E.\u023E\v.\x03" +
		".\x03.\x05.\u0242\n.\x03.\x05.\u0245\n.\x03/\x03/\x03/\x05/\u024A\n/\x03" +
		"0\x030\x030\x031\x051\u0250\n1\x032\x062\u0253\n2\r2\x0E2\u0254\x033\x03" +
		"3\x033\x033\x034\x074\u025C\n4\f4\x0E4\u025F\v4\x034\x054\u0262\n4\x03" +
		"4\x064\u0265\n4\r4\x0E4\u0266\x034\x074\u026A\n4\f4\x0E4\u026D\v4\x03" +
		"4\x074\u0270\n4\f4\x0E4\u0273\v4\x035\x055\u0276\n5\x035\x035\x036\x03" +
		"6\x036\x036\x076\u027E\n6\f6\x0E6\u0281\v6\x056\u0283\n6\x036\x056\u0286" +
		"\n6\x036\x036\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x05" +
		"7\u0295\n7\x037\x057\u0298\n7\x037\x037\x037\x057\u029D\n7\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x057\u02B4\n7\x037\x057\u02B7\n7\x038\x038\x038" +
		"\x038\x038\x038\x038\x058\u02C0\n8\x039\x039\x039\x039\x079\u02C6\n9\f" +
		"9\x0E9\u02C9\v9\x039\x059\u02CC\n9\x059\u02CE\n9\x039\x039\x03:\x05:\u02D3" +
		"\n:\x03:\x03:\x05:\u02D7\n:\x03;\x03;\x03;\x07;\u02DC\n;\f;\x0E;\u02DF" +
		"\v;\x03<\x03<\x03<\x03<\x05<\u02E5\n<\x03<\x03<\x03<\x03<\x05<\u02EB\n" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0314\n" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0354\n<\x03<\x03<\x05<\u0358\n<" +
		"\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0365\n<" +
		"\f<\x0E<\u0368\v<\x03=\x03=\x03=\x05=\u036D\n=\x03>\x03>\x05>\u0371\n" +
		">\x03>\x03>\x05>\u0375\n>\x03>\x03>\x05>\u0379\n>\x03>\x03>\x03>\x03>" +
		"\x03>\x03>\x05>\u0381\n>\x03>\x03>\x03>\x03>\x05>\u0387\n>\x03?\x03?\x03" +
		"?\x05?\u038C\n?\x03?\x05?\u038F\n?\x03@\x03@\x03@\x03@\x03@\x05@\u0396" +
		"\n@\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u03A1\nB\x03C\x03" +
		"C\x03D\x03D\x03E\x03E\x05E\u03A9\nE\x03F\x03F\x03F\x05F\u03AE\nF\x03G" +
		"\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x05" +
		"J\u03BE\nJ\x03J\x02\x02\x03vK\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x02\f\x05\x02OOhhnn\x03\x02\x1A" +
		"\x1C\x03\x02\x16\x17\x03\x02 \"\x03\x02#&\x03\x02\'*\x03\x020;\x03\x02" +
		"?C\x03\x02DG\x03\x02Hu\x02\u0435\x02\x95\x03\x02\x02\x02\x04\x9C\x03\x02" +
		"\x02\x02\x06\xB2\x03\x02\x02\x02\b\xB4\x03\x02\x02\x02\n\xBB\x03\x02\x02" +
		"\x02\f\xBF\x03\x02\x02\x02\x0E\xCE\x03\x02\x02\x02\x10\xD0\x03\x02\x02" +
		"\x02\x12\xE1\x03\x02\x02\x02\x14\xE4\x03\x02\x02\x02\x16\xE9\x03\x02\x02" +
		"\x02\x18\xEC\x03\x02\x02\x02\x1A\xFD\x03\x02\x02\x02\x1C\u0109\x03\x02" +
		"\x02\x02\x1E\u010E\x03\x02\x02\x02 \u0110\x03\x02\x02\x02\"\u0114\x03" +
		"\x02\x02\x02$\u011C\x03\x02\x02\x02&\u0121\x03\x02\x02\x02(\u0123\x03" +
		"\x02\x02\x02*\u0127\x03\x02\x02\x02,\u0168\x03\x02\x02\x02.\u016A\x03" +
		"\x02\x02\x020\u016C\x03\x02\x02\x022\u0173\x03\x02\x02\x024\u017A\x03" +
		"\x02\x02\x026\u0181\x03\x02\x02\x028\u0188\x03\x02\x02\x02:\u018E\x03" +
		"\x02\x02\x02<\u0194\x03\x02\x02\x02>\u01A1\x03\x02\x02\x02@\u01A5\x03" +
		"\x02\x02\x02B\u01AB\x03\x02\x02\x02D\u01B0\x03\x02\x02\x02F\u01B4\x03" +
		"\x02\x02\x02H\u01B9\x03\x02\x02\x02J\u01C2\x03\x02\x02\x02L\u01CC\x03" +
		"\x02\x02\x02N\u01CF\x03\x02\x02\x02P\u01D3\x03\x02\x02\x02R\u01E3\x03" +
		"\x02\x02\x02T\u01E9\x03\x02\x02\x02V\u0206\x03\x02\x02\x02X\u0235\x03" +
		"\x02\x02\x02Z\u0244\x03\x02\x02\x02\\\u0246\x03\x02\x02\x02^\u024B\x03" +
		"\x02\x02\x02`\u024F\x03\x02\x02\x02b\u0252\x03\x02\x02\x02d\u0256\x03" +
		"\x02\x02\x02f\u025D\x03\x02\x02\x02h\u0275\x03\x02\x02\x02j\u0279\x03" +
		"\x02\x02\x02l\u02B6\x03\x02\x02\x02n\u02BF\x03\x02\x02\x02p\u02C1\x03" +
		"\x02\x02\x02r\u02D2\x03\x02\x02\x02t\u02D8\x03\x02\x02\x02v\u0313\x03" +
		"\x02\x02\x02x\u036C\x03\x02\x02\x02z\u0386\x03\x02\x02\x02|\u038E\x03" +
		"\x02\x02\x02~\u0395\x03\x02\x02\x02\x80\u0397\x03\x02\x02\x02\x82\u03A0" +
		"\x03\x02\x02\x02\x84\u03A2\x03\x02\x02\x02\x86\u03A4\x03\x02\x02\x02\x88" +
		"\u03A8\x03\x02\x02\x02\x8A\u03AD\x03\x02\x02\x02\x8C\u03AF\x03\x02\x02" +
		"\x02\x8E\u03B1\x03\x02\x02\x02\x90\u03B5\x03\x02\x02\x02\x92\u03BD\x03" +
		"\x02\x02\x02\x94\x96\x07\x03\x02\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03" +
		"\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99\x05b2\x02\x98\x97\x03\x02" +
		"\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07\x02" +
		"\x02\x03\x9B\x03\x03\x02\x02\x02\x9C\x9D\x05\x06\x04\x02\x9D\x05\x03\x02" +
		"\x02\x02\x9E\xB3\x05\b\x05\x02\x9F\xB3\x05 \x11\x02\xA0\xB3\x05\f\x07" +
		"\x02\xA1\xB3\x05\x1A\x0E\x02\xA2\xB3\x05&\x14\x02\xA3\xB3\x05R*\x02\xA4" +
		"\xB3\x05(\x15\x02\xA5\xB3\x05*\x16\x02\xA6\xB3\x05,\x17\x02\xA7\xB3\x05" +
		"0\x19\x02\xA8\xB3\x052\x1A\x02\xA9\xB3\x054\x1B\x02\xAA\xB3\x056\x1C\x02" +
		"\xAB\xB3\x058\x1D\x02\xAC\xB3\x05D#\x02\xAD\xB3\x05:\x1E\x02\xAE\xB3\x05" +
		"F$\x02\xAF\xB3\x05H%\x02\xB0\xB3\x05N(\x02\xB1\xB3\x05P)\x02\xB2\x9E\x03" +
		"\x02\x02\x02\xB2\x9F\x03\x02\x02\x02\xB2\xA0\x03\x02\x02\x02\xB2\xA1\x03" +
		"\x02\x02\x02\xB2\xA2\x03\x02\x02\x02\xB2\xA3\x03\x02\x02\x02\xB2\xA4\x03" +
		"\x02\x02\x02\xB2\xA5\x03\x02\x02\x02\xB2\xA6\x03\x02\x02\x02\xB2\xA7\x03" +
		"\x02\x02\x02\xB2\xA8\x03\x02\x02\x02\xB2\xA9\x03\x02\x02\x02\xB2\xAA\x03" +
		"\x02\x02\x02\xB2\xAB\x03\x02\x02\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAD\x03" +
		"\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03" +
		"\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x07\x03\x02\x02\x02\xB4\xB6\x07" +
		"\v\x02\x02\xB5\xB7\x05\n\x06\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02" +
		"\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\f\x02\x02\xB9\t\x03\x02\x02" +
		"\x02\xBA\xBC\x05\x06\x04\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02" +
		"\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\v\x03\x02\x02" +
		"\x02\xBF\xC0\x07j\x02\x02\xC0\xC1\x05\x0E\b\x02\xC1\r\x03\x02\x02\x02" +
		"\xC2\xC4\x05\x12\n\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
		"\xC4\xC7\x03\x02\x02\x02\xC5\xC8\x05\x14\v\x02\xC6\xC8\x05\x10\t\x02\xC7" +
		"\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9" +
		"\xCA\x05\x16\f\x02\xCA\xCB\x05\x92J\x02\xCB\xCF\x03\x02\x02\x02\xCC\xCD" +
		"\x07w\x02\x02\xCD\xCF\x05\x92J\x02\xCE\xC3\x03\x02\x02\x02\xCE\xCC\x03" +
		"\x02\x02\x02\xCF\x0F\x03\x02\x02\x02\xD0\xD6\x07\v\x02\x02\xD1\xD2\x05" +
		"\x18\r\x02\xD2\xD3\x07\x0E\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD1\x03" +
		"\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03" +
		"\x02\x02\x02\xD7\xDD\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDB\x05" +
		"\x18\r\x02\xDA\xDC\x07\x0E\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03" +
		"\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02\xDD\xDE\x03" +
		"\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07\f\x02\x02\xE0\x11\x03" +
		"\x02\x02\x02\xE1\xE2\x05\x18\r\x02\xE2\xE3\x07\x0E\x02\x02\xE3\x13\x03" +
		"\x02\x02\x02\xE4\xE7\x07\x1A\x02\x02\xE5\xE6\x07b\x02\x02\xE6\xE8\x05" +
		"\x88E\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\x15\x03" +
		"\x02\x02\x02\xE9\xEA\x07c\x02\x02\xEA\xEB\x07w\x02\x02\xEB\x17\x03\x02" +
		"\x02\x02\xEC\xEF\x05\x88E\x02\xED\xEE\x07b\x02\x02\xEE\xF0\x05\x88E\x02" +
		"\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\x19\x03\x02\x02\x02" +
		"\xF1\xF4\x07i\x02\x02\xF2\xF5\x05\x1C\x0F\x02\xF3\xF5\x05\x1E\x10\x02" +
		"\xF4\xF2\x03\x02\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF6\xF7\x05\x92J\x02\xF7\xFE\x03\x02\x02\x02\xF8\xF9\x07i\x02\x02\xF9" +
		"\xFA\x07\\\x02\x02\xFA\xFB\x05v<\x02\xFB\xFC\x05\x92J\x02\xFC\xFE\x03" +
		"\x02\x02\x02\xFD\xF1\x03\x02\x02\x02\xFD\xF8\x03\x02\x02\x02\xFE\x1B\x03" +
		"\x02\x02\x02\xFF\u0100\x05\x14\v\x02\u0100\u0101\x05\x16\f\x02\u0101\u0102" +
		"\x05\x92J\x02\u0102\u010A\x03\x02\x02\x02\u0103\u0105\x05\x10\t\x02\u0104" +
		"\u0106\x05\x16\f\x02\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02" +
		"\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x05\x92J\x02\u0108\u010A" +
		"\x03\x02\x02\x02\u0109\xFF\x03\x02\x02\x02\u0109\u0103\x03\x02\x02\x02" +
		"\u010A\x1D\x03\x02\x02\x02\u010B\u010F\x05 \x11\x02\u010C\u010F\x05R*" +
		"\x02\u010D\u010F\x05P)\x02\u010E\u010B\x03\x02\x02\x02\u010E\u010C\x03" +
		"\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F\x1F\x03\x02\x02\x02\u0110" +
		"\u0111\x05.\x18\x02\u0111\u0112\x05\"\x12\x02\u0112\u0113\x05\x92J\x02" +
		"\u0113!\x03\x02\x02\x02\u0114\u0119\x05$\x13\x02\u0115\u0116\x07\x0E\x02" +
		"\x02\u0116\u0118\x05$\x13\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B" +
		"\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A#\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011F\x05x=" +
		"\x02\u011D\u011E\x07\x0F\x02\x02\u011E\u0120\x05v<\x02\u011F\u011D\x03" +
		"\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120%\x03\x02\x02\x02\u0121" +
		"\u0122\x07\r\x02\x02\u0122\'\x03\x02\x02\x02\u0123\u0124\x06\x15\x02\x02" +
		"\u0124\u0125\x05t;\x02\u0125\u0126\x05\x92J\x02\u0126)\x03\x02\x02\x02" +
		"\u0127\u0128\x07]\x02\x02\u0128\u0129\x07\t\x02\x02\u0129\u012A\x05t;" +
		"\x02\u012A\u012B\x07\n\x02\x02\u012B\u012E\x05\x06\x04\x02\u012C\u012D" +
		"\x07M\x02\x02\u012D\u012F\x05\x06\x04\x02\u012E\u012C\x03\x02\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F+\x03\x02\x02\x02\u0130\u0131\x07I\x02" +
		"\x02\u0131\u0132\x05\x06\x04\x02\u0132\u0133\x07W\x02\x02\u0133\u0134" +
		"\x07\t\x02\x02\u0134\u0135\x05t;\x02\u0135\u0136\x07\n\x02\x02\u0136\u0137" +
		"\x05\x92J\x02\u0137\u0169\x03\x02\x02\x02\u0138\u0139\x07W\x02\x02\u0139" +
		"\u013A\x07\t\x02\x02\u013A\u013B\x05t;\x02\u013B\u013C\x07\n\x02\x02\u013C" +
		"\u013D\x05\x06\x04\x02\u013D\u0169\x03\x02\x02\x02\u013E\u013F\x07U\x02" +
		"\x02\u013F\u0142\x07\t\x02\x02\u0140\u0143\x05t;\x02\u0141\u0143\x05 " +
		"\x11\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0142" +
		"\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0146\x07\r\x02" +
		"\x02\u0145\u0147\x05t;\x02\u0146\u0145\x03\x02\x02\x02\u0146\u0147\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x07\r\x02\x02\u0149" +
		"\u014B\x05t;\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x07\n\x02\x02\u014D\u0169\x05" +
		"\x06\x04\x02\u014E\u014F\x07U\x02\x02\u014F\u0152\x07\t\x02\x02\u0150" +
		"\u0153\x05v<\x02\u0151\u0153\x05 \x11\x02\u0152\u0150\x03\x02\x02\x02" +
		"\u0152\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x07" +
		"`\x02\x02\u0155\u0156\x05t;\x02\u0156\u0157\x07\n\x02\x02\u0157\u0158" +
		"\x05\x06\x04\x02\u0158\u0169\x03\x02\x02\x02\u0159\u015B\x07U\x02\x02" +
		"\u015A\u015C\x07l\x02\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03" +
		"\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x07\t\x02\x02\u015E" +
		"\u0161\x05v<\x02\u015F\u0161\x05 \x11\x02\u0160\u015E\x03\x02\x02\x02" +
		"\u0160\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x07" +
		"v\x02\x02\u0163\u0164\x06\x17\x03\x02\u0164\u0165\x05t;\x02\u0165\u0166" +
		"\x07\n\x02\x02\u0166\u0167\x05\x06\x04\x02\u0167\u0169\x03\x02\x02\x02" +
		"\u0168\u0130\x03\x02\x02\x02\u0168\u0138\x03\x02\x02\x02\u0168\u013E\x03" +
		"\x02\x02\x02\u0168\u014E\x03\x02\x02\x02\u0168\u0159\x03\x02\x02\x02\u0169" +
		"-\x03\x02\x02\x02\u016A\u016B\t\x02\x02\x02\u016B/\x03\x02\x02\x02\u016C" +
		"\u016F\x07T\x02\x02\u016D\u016E\x06\x19\x04\x02\u016E\u0170\x07v\x02\x02" +
		"\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03" +
		"\x02\x02\x02\u0171\u0172\x05\x92J\x02\u01721\x03\x02\x02\x02\u0173\u0176" +
		"\x07H\x02\x02\u0174\u0175\x06\x1A\x05\x02\u0175\u0177\x07v\x02\x02\u0176" +
		"\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02" +
		"\x02\x02\u0178\u0179\x05\x92J\x02\u01793\x03\x02\x02\x02\u017A\u017D\x07" +
		"R\x02\x02\u017B\u017C\x06\x1B\x06\x02\u017C\u017E\x05t;\x02\u017D\u017B" +
		"\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
		"\u017F\u0180\x05\x92J\x02\u01805\x03\x02\x02\x02\u0181\u0184\x07u\x02" +
		"\x02\u0182\u0183\x06\x1C\x07\x02\u0183\u0185\x05t;\x02\u0184\u0182\x03" +
		"\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0187\x05\x92J\x02\u01877\x03\x02\x02\x02\u0188\u0189\x07[\x02\x02\u0189" +
		"\u018A\x07\t\x02\x02\u018A\u018B\x05t;\x02\u018B\u018C\x07\n\x02\x02\u018C" +
		"\u018D\x05\x06\x04\x02\u018D9\x03\x02\x02\x02\u018E\u018F\x07V\x02\x02" +
		"\u018F\u0190\x07\t\x02\x02\u0190\u0191\x05t;\x02\u0191\u0192\x07\n\x02" +
		"\x02\u0192\u0193\x05<\x1F\x02\u0193;\x03\x02\x02\x02\u0194\u0196\x07\v" +
		"\x02\x02\u0195\u0197\x05> \x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197" +
		"\x03\x02\x02\x02\u0197\u019C\x03\x02\x02\x02\u0198\u019A\x05B\"\x02\u0199" +
		"\u019B\x05> \x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
		"\u019B\u019D\x03\x02\x02\x02\u019C\u0198\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x07\f\x02\x02\u019F" +
		"=\x03\x02\x02\x02\u01A0\u01A2\x05@!\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4?\x03\x02\x02\x02\u01A5\u01A6\x07L\x02\x02\u01A6\u01A7\x05" +
		"t;\x02\u01A7\u01A9\x07\x11\x02\x02\u01A8\u01AA\x05\n\x06\x02\u01A9\u01A8" +
		"\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AAA\x03\x02\x02\x02\u01AB" +
		"\u01AC\x07\\\x02\x02\u01AC\u01AE\x07\x11\x02\x02\u01AD\u01AF\x05\n\x06" +
		"\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AFC\x03" +
		"\x02\x02\x02\u01B0\u01B1\x07v\x02\x02\u01B1\u01B2\x07\x11\x02\x02\u01B2" +
		"\u01B3\x05\x06\x04\x02\u01B3E\x03\x02\x02\x02\u01B4\u01B5\x07^\x02\x02" +
		"\u01B5\u01B6\x06$\b\x02\u01B6\u01B7\x05t;\x02\u01B7\u01B8\x05\x92J\x02" +
		"\u01B8G\x03\x02\x02\x02\u01B9\u01BA\x07a\x02\x02\u01BA\u01C0\x05\b\x05" +
		"\x02\u01BB\u01BD\x05J&\x02\u01BC\u01BE\x05L\'\x02\u01BD\u01BC\x03\x02" +
		"\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF" +
		"\u01C1\x05L\'\x02\u01C0\u01BB\x03\x02\x02\x02\u01C0\u01BF\x03\x02\x02" +
		"\x02\u01C1I\x03\x02\x02\x02\u01C2\u01C8\x07P\x02\x02\u01C3\u01C5\x07\t" +
		"\x02\x02\u01C4\u01C6\x05x=\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6" +
		"\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x07\n\x02\x02" +
		"\u01C8\u01C3\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03" +
		"\x02\x02\x02\u01CA\u01CB\x05\b\x05\x02\u01CBK\x03\x02\x02\x02\u01CC\u01CD" +
		"\x07Q\x02\x02\u01CD\u01CE\x05\b\x05\x02\u01CEM\x03\x02\x02\x02\u01CF\u01D0" +
		"\x07X\x02\x02\u01D0\u01D1\x05\x92J\x02\u01D1O\x03\x02\x02\x02\u01D2\u01D4" +
		"\x07k\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x07Y\x02\x02\u01D6\u01D8" +
		"\x07\x1A\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x07v\x02\x02\u01DA\u01DC\x07" +
		"\t\x02\x02\u01DB\u01DD\x05Z.\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD" +
		"\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x07\n\x02\x02" +
		"\u01DF\u01E0\x07\v\x02\x02\u01E0\u01E1\x05`1\x02\u01E1\u01E2\x07\f\x02" +
		"\x02\u01E2Q\x03\x02\x02\x02\u01E3\u01E4\x07d\x02\x02\u01E4\u01E5\x07v" +
		"\x02\x02\u01E5\u01E6\x05T+\x02\u01E6S\x03\x02\x02\x02\u01E7\u01E8\x07" +
		"f\x02\x02\u01E8\u01EA\x05v<\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA" +
		"\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EF\x07\v\x02\x02" +
		"\u01EC\u01EE\x05V,\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02" +
		"\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0" +
		"\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07\f\x02" +
		"\x02\u01F3U\x03\x02\x02\x02\u01F4\u01F9\x07t\x02\x02\u01F5\u01F6\x06," +
		"\t\x02\u01F6\u01F9\x07v\x02\x02\u01F7\u01F9\x07k\x02\x02\u01F8\u01F4\x03" +
		"\x02\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9" +
		"\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02" +
		"\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD" +
		"\u0207\x05X-\x02\u01FE\u0207\x05&\x14\x02\u01FF\u0201\x07\x1F\x02\x02" +
		"\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03" +
		"\x02\x02\x02\u0202\u0203\x05n8\x02\u0203\u0204\x07\x0F\x02\x02\u0204\u0205" +
		"\x05v<\x02\u0205\u0207\x03\x02\x02\x02\u0206\u01FA\x03\x02\x02\x02\u0206" +
		"\u01FE\x03\x02\x02\x02\u0206\u0200\x03\x02\x02\x02\u0207W\x03\x02\x02" +
		"\x02\u0208\u020A\x07\x1A\x02\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A" +
		"\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u020D\x07\x1F\x02\x02" +
		"\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x03" +
		"\x02\x02\x02\u020E\u020F\x05n8\x02\u020F\u0211\x07\t\x02\x02\u0210\u0212" +
		"\x05Z.\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0213\x03\x02\x02\x02\u0213\u0214\x07\n\x02\x02\u0214\u0215\x07\v\x02" +
		"\x02\u0215\u0216\x05`1\x02\u0216\u0217\x07\f\x02\x02\u0217\u0236\x03\x02" +
		"\x02\x02\u0218\u021A\x07\x1A\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219" +
		"\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u021D\x07\x1F" +
		"\x02\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
		"\u021E\x03\x02\x02\x02\u021E\u021F\x05\x8EH\x02\u021F\u0220\x07\t\x02" +
		"\x02\u0220\u0221\x07\n\x02\x02\u0221\u0222\x07\v\x02\x02\u0222\u0223\x05" +
		"`1\x02\u0223\u0224\x07\f\x02\x02\u0224\u0236\x03\x02\x02\x02\u0225\u0227" +
		"\x07\x1A\x02\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02" +
		"\u0227\u0229\x03\x02\x02\x02\u0228\u022A\x07\x1F\x02\x02\u0229\u0228\x03" +
		"\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B" +
		"\u022C\x05\x90I\x02\u022C\u022E\x07\t\x02\x02\u022D\u022F\x05Z.\x02\u022E" +
		"\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02" +
		"\x02\x02\u0230\u0231\x07\n\x02\x02\u0231\u0232\x07\v\x02\x02\u0232\u0233" +
		"\x05`1\x02\u0233\u0234\x07\f\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235" +
		"\u0209\x03\x02\x02\x02\u0235\u0219\x03\x02\x02\x02\u0235\u0226\x03\x02" +
		"\x02\x02\u0236Y\x03\x02\x02\x02\u0237\u023C\x05\\/\x02\u0238\u0239\x07" +
		"\x0E\x02\x02\u0239\u023B\x05\\/\x02\u023A\u0238\x03\x02\x02\x02\u023B" +
		"\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02" +
		"\x02\x02\u023D\u0241\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F" +
		"\u0240\x07\x0E\x02\x02\u0240\u0242\x05^0\x02\u0241\u023F\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0245\x05" +
		"^0\x02\u0244\u0237\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245[" +
		"\x03\x02\x02\x02\u0246\u0249\x05x=\x02\u0247\u0248\x07\x0F\x02\x02\u0248" +
		"\u024A\x05v<\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02" +
		"\u024A]\x03\x02\x02\x02\u024B\u024C\x07\x12\x02\x02\u024C\u024D\x05v<" +
		"\x02\u024D_\x03\x02\x02\x02\u024E\u0250\x05b2\x02\u024F\u024E\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250a\x03\x02\x02\x02\u0251\u0253" +
		"\x05\x04\x03\x02\u0252\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02" +
		"\u0254\u0252\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255c\x03\x02" +
		"\x02\x02\u0256\u0257\x07\x07\x02\x02\u0257\u0258\x05f4\x02\u0258\u0259" +
		"\x07\b\x02\x02\u0259e\x03\x02\x02\x02\u025A\u025C\x07\x0E\x02\x02\u025B" +
		"\u025A\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02" +
		"\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u0260\u0262\x05h5\x02\u0261\u0260\x03\x02\x02\x02" +
		"\u0261\u0262\x03\x02\x02\x02\u0262\u026B\x03\x02\x02\x02\u0263\u0265\x07" +
		"\x0E\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266" +
		"\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x03\x02" +
		"\x02\x02\u0268\u026A\x05h5\x02\u0269\u0264\x03\x02\x02\x02\u026A\u026D" +
		"\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02" +
		"\u026C\u0271\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u0270\x07" +
		"\x0E\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271" +
		"\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272g\x03\x02\x02" +
		"\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0276\x07\x12\x02\x02\u0275\u0274" +
		"\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02" +
		"\u0277\u0278\x05v<\x02\u0278i\x03\x02\x02\x02\u0279\u0282\x07\v\x02\x02" +
		"\u027A\u027F\x05l7\x02\u027B\u027C\x07\x0E\x02\x02\u027C\u027E\x05l7\x02" +
		"\u027D\u027B\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03" +
		"\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281" +
		"\u027F\x03\x02\x02\x02\u0282\u027A\x03\x02\x02\x02\u0282\u0283\x03\x02" +
		"\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0286\x07\x0E\x02\x02\u0285" +
		"\u0284\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02" +
		"\x02\x02\u0287\u0288\x07\f\x02\x02\u0288k\x03\x02\x02\x02\u0289\u028A" +
		"\x05n8\x02\u028A\u028B\x07\x11\x02\x02\u028B\u028C\x05v<\x02\u028C\u02B7" +
		"\x03\x02\x02\x02\u028D\u028E\x07\x07\x02\x02\u028E\u028F\x05v<\x02\u028F" +
		"\u0290\x07\b\x02\x02\u0290\u0291\x07\x11\x02\x02\u0291\u0292\x05v<\x02" +
		"\u0292\u02B7\x03\x02\x02\x02\u0293\u0295\x07k\x02\x02\u0294\u0293\x03" +
		"\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296" +
		"\u0298\x07\x1A\x02\x02\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02" +
		"\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x05n8\x02\u029A\u029C" +
		"\x07\t\x02\x02\u029B\u029D\x05Z.\x02\u029C\u029B\x03\x02\x02\x02\u029C" +
		"\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x07\n\x02" +
		"\x02\u029F\u02A0\x07\v\x02\x02\u02A0\u02A1\x05`1\x02\u02A1\u02A2\x07\f" +
		"\x02\x02\u02A2\u02B7\x03\x02\x02\x02\u02A3\u02A4\x05\x8EH\x02\u02A4\u02A5" +
		"\x07\t\x02\x02\u02A5\u02A6\x07\n\x02\x02\u02A6\u02A7\x07\v\x02\x02\u02A7" +
		"\u02A8\x05`1\x02\u02A8\u02A9\x07\f\x02\x02\u02A9\u02B7\x03\x02\x02\x02" +
		"\u02AA\u02AB\x05\x90I\x02\u02AB\u02AC\x07\t\x02\x02\u02AC\u02AD\x05\\" +
		"/\x02\u02AD\u02AE\x07\n\x02\x02\u02AE\u02AF\x07\v\x02\x02\u02AF\u02B0" +
		"\x05`1\x02\u02B0\u02B1\x07\f\x02\x02\u02B1\u02B7\x03\x02\x02\x02\u02B2" +
		"\u02B4\x07\x12\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
		"\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x05v<\x02\u02B6\u0289" +
		"\x03\x02\x02\x02\u02B6\u028D\x03\x02\x02\x02\u02B6\u0294\x03\x02\x02\x02" +
		"\u02B6\u02A3\x03\x02\x02\x02\u02B6\u02AA\x03\x02\x02\x02\u02B6\u02B3\x03" +
		"\x02\x02\x02\u02B7m\x03\x02\x02\x02\u02B8\u02C0\x05\x88E\x02\u02B9\u02C0" +
		"\x07w\x02\x02\u02BA\u02C0\x05\x84C\x02\u02BB\u02BC\x07\x07\x02\x02\u02BC" +
		"\u02BD\x05v<\x02\u02BD\u02BE\x07\b\x02\x02\u02BE\u02C0\x03\x02\x02\x02" +
		"\u02BF\u02B8\x03\x02\x02\x02\u02BF\u02B9\x03\x02\x02\x02\u02BF\u02BA\x03" +
		"\x02\x02\x02\u02BF\u02BB\x03\x02\x02\x02\u02C0o\x03\x02\x02\x02\u02C1" +
		"\u02CD\x07\t\x02\x02\u02C2\u02C7\x05r:\x02\u02C3\u02C4\x07\x0E\x02\x02" +
		"\u02C4\u02C6\x05r:\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6\u02C9\x03\x02" +
		"\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8" +
		"\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CC\x07\x0E" +
		"\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
		"\u02CE\x03\x02\x02\x02\u02CD\u02C2\x03\x02\x02\x02\u02CD\u02CE\x03\x02" +
		"\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\x07\n\x02\x02\u02D0q" +
		"\x03\x02\x02\x02\u02D1\u02D3\x07\x12\x02\x02\u02D2\u02D1\x03\x02\x02\x02" +
		"\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4\u02D7\x05" +
		"v<\x02\u02D5\u02D7\x07v\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D5" +
		"\x03\x02\x02\x02\u02D7s\x03\x02\x02\x02\u02D8\u02DD\x05v<\x02\u02D9\u02DA" +
		"\x07\x0E\x02\x02\u02DA\u02DC\x05v<\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC" +
		"\u02DF\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02" +
		"\x02\x02\u02DEu\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1" +
		"\b<\x01\x02\u02E1\u0314\x05z>\x02\u02E2\u02E4\x07d\x02\x02\u02E3\u02E5" +
		"\x07v\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02" +
		"\u02E5\u02E6\x03\x02\x02\x02\u02E6\u0314\x05T+\x02\u02E7\u02E8\x07N\x02" +
		"\x02\u02E8\u02EA\x05v<\x02\u02E9\u02EB\x05p9\x02\u02EA\u02E9\x03\x02\x02" +
		"\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u0314\x03\x02\x02\x02\u02EC\u02ED" +
		"\x07N\x02\x02\u02ED\u02EE\x07\x13\x02\x02\u02EE\u0314\x07v\x02\x02\u02EF" +
		"\u02F0\x07_\x02\x02\u02F0\u0314\x05v<\'\u02F1\u02F2\x07S\x02\x02\u02F2" +
		"\u0314\x05v<&\u02F3\u02F4\x07K\x02\x02\u02F4\u0314\x05v<%\u02F5\u02F6" +
		"\x07\x14\x02\x02\u02F6\u0314\x05v<$\u02F7\u02F8\x07\x15\x02\x02\u02F8" +
		"\u0314\x05v<#\u02F9\u02FA\x07\x16\x02\x02\u02FA\u0314\x05v<\"\u02FB\u02FC" +
		"\x07\x17\x02\x02\u02FC\u0314\x05v<!\u02FD\u02FE\x07\x18\x02\x02\u02FE" +
		"\u0314\x05v< \u02FF\u0300\x07\x19\x02\x02\u0300\u0314\x05v<\x1F\u0301" +
		"\u0302\x07l\x02\x02\u0302\u0314\x05v<\x1E\u0303\u0304\x07j\x02\x02\u0304" +
		"\u0305\x07\t\x02\x02\u0305\u0306\x05v<\x02\u0306\u0307\x07\n\x02\x02\u0307" +
		"\u0314\x03\x02\x02\x02\u0308\u0314\x056\x1C\x02\u0309\u0314\x07Z\x02\x02" +
		"\u030A\u0314\x07v\x02\x02\u030B\u0314\x07g\x02\x02\u030C\u0314\x05\x82" +
		"B\x02\u030D\u0314\x05d3\x02\u030E\u0314\x05j6\x02\u030F\u0310\x07\t\x02" +
		"\x02\u0310\u0311\x05t;\x02\u0311\u0312\x07\n\x02\x02\u0312\u0314\x03\x02" +
		"\x02\x02\u0313\u02E0\x03\x02\x02\x02\u0313\u02E2\x03\x02\x02\x02\u0313" +
		"\u02E7\x03\x02\x02\x02\u0313\u02EC\x03\x02\x02\x02\u0313\u02EF\x03\x02" +
		"\x02\x02\u0313\u02F1\x03\x02\x02\x02\u0313\u02F3\x03\x02\x02\x02\u0313" +
		"\u02F5\x03\x02\x02\x02\u0313\u02F7\x03\x02\x02\x02\u0313\u02F9\x03\x02" +
		"\x02\x02\u0313\u02FB\x03\x02\x02\x02\u0313\u02FD\x03\x02\x02\x02\u0313" +
		"\u02FF\x03\x02\x02\x02\u0313\u0301\x03\x02\x02\x02\u0313\u0303\x03\x02" +
		"\x02\x02\u0313\u0308\x03\x02\x02\x02\u0313\u0309\x03\x02\x02\x02\u0313" +
		"\u030A\x03\x02\x02\x02\u0313\u030B\x03\x02\x02\x02\u0313\u030C\x03\x02" +
		"\x02\x02\u0313\u030D\x03\x02\x02\x02\u0313\u030E\x03\x02\x02\x02\u0313" +
		"\u030F\x03\x02\x02\x02\u0314\u0366\x03\x02\x02\x02\u0315\u0316\f\x1D\x02" +
		"\x02\u0316\u0317\x07\x1D\x02\x02\u0317\u0365\x05v<\x1D\u0318\u0319\f\x1C" +
		"\x02\x02\u0319\u031A\t\x03\x02\x02\u031A\u0365\x05v<\x1D\u031B\u031C\f" +
		"\x1B\x02\x02\u031C\u031D\t\x04\x02\x02\u031D\u0365\x05v<\x1C\u031E\u031F" +
		"\f\x1A\x02\x02\u031F\u0320\x07\x1E\x02\x02\u0320\u0365\x05v<\x1B\u0321" +
		"\u0322\f\x19\x02\x02\u0322\u0323\t\x05\x02\x02\u0323\u0365\x05v<\x1A\u0324" +
		"\u0325\f\x18\x02\x02\u0325\u0326\t\x06\x02\x02\u0326\u0365\x05v<\x19\u0327" +
		"\u0328\f\x17\x02\x02\u0328\u0329\x07J\x02\x02\u0329\u0365\x05v<\x18\u032A" +
		"\u032B\f\x16\x02\x02\u032B\u032C\x07`\x02\x02\u032C\u0365\x05v<\x17\u032D" +
		"\u032E\f\x15\x02\x02\u032E\u032F\t\x07\x02\x02\u032F\u0365\x05v<\x16\u0330" +
		"\u0331\f\x14\x02\x02\u0331\u0332\x07+\x02\x02\u0332\u0365\x05v<\x15\u0333" +
		"\u0334\f\x13\x02\x02\u0334\u0335\x07,\x02\x02\u0335\u0365\x05v<\x14\u0336" +
		"\u0337\f\x12\x02\x02\u0337\u0338\x07-\x02\x02\u0338\u0365\x05v<\x13\u0339" +
		"\u033A\f\x11\x02\x02\u033A\u033B\x07.\x02\x02\u033B\u0365\x05v<\x12\u033C" +
		"\u033D\f\x10\x02\x02\u033D\u033E\x07/\x02\x02\u033E\u0365\x05v<\x11\u033F" +
		"\u0340\f\x0F\x02\x02\u0340\u0341\x07\x10\x02\x02\u0341\u0342\x05v<\x02" +
		"\u0342\u0343\x07\x11\x02\x02\u0343\u0344\x05v<\x10\u0344\u0365\x03\x02" +
		"\x02\x02\u0345\u0346\f\x0E\x02\x02\u0346\u0347\x07\x0F\x02\x02\u0347\u0365" +
		"\x05v<\x0E\u0348\u0349\f\r\x02\x02\u0349\u034A\x05\x80A\x02\u034A\u034B" +
		"\x05v<\r\u034B\u0365\x03\x02\x02\x02\u034C\u034D\f.\x02\x02\u034D\u034E" +
		"\x07\x07\x02\x02\u034E\u034F\x05t;\x02\u034F\u0350\x07\b\x02\x02\u0350" +
		"\u0365\x03\x02\x02\x02\u0351\u0353\f-\x02\x02\u0352\u0354\x07\x10\x02" +
		"\x02\u0353\u0352\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0355" +
		"\x03\x02\x02\x02\u0355\u0357\x07\x13\x02\x02\u0356\u0358\x07\x1F\x02\x02" +
		"\u0357\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u0359\x03" +
		"\x02\x02\x02\u0359\u0365\x05\x88E\x02\u035A\u035B\f,\x02\x02\u035B\u0365" +
		"\x05p9\x02\u035C\u035D\f)\x02\x02\u035D\u035E\x06<\x1F\x02\u035E\u0365" +
		"\x07\x14\x02\x02\u035F\u0360\f(\x02\x02\u0360\u0361\x06<!\x02\u0361\u0365" +
		"\x07\x15\x02\x02\u0362\u0363\f\v\x02\x02\u0363\u0365\x07x\x02\x02\u0364" +
		"\u0315\x03\x02\x02\x02\u0364\u0318\x03\x02\x02\x02\u0364\u031B\x03\x02" +
		"\x02\x02\u0364\u031E\x03\x02\x02\x02\u0364\u0321\x03\x02\x02\x02\u0364" +
		"\u0324\x03\x02\x02\x02\u0364\u0327\x03\x02\x02\x02\u0364\u032A\x03\x02" +
		"\x02\x02\u0364\u032D\x03\x02\x02\x02\u0364\u0330\x03\x02\x02\x02\u0364" +
		"\u0333\x03\x02\x02\x02\u0364\u0336\x03\x02\x02\x02\u0364\u0339\x03\x02" +
		"\x02\x02\u0364\u033C\x03\x02\x02\x02\u0364\u033F\x03\x02\x02\x02\u0364" +
		"\u0345\x03\x02\x02\x02\u0364\u0348\x03\x02\x02\x02\u0364\u034C\x03\x02" +
		"\x02\x02\u0364\u0351\x03\x02\x02\x02\u0364\u035A\x03\x02\x02\x02\u0364" +
		"\u035C\x03\x02\x02\x02\u0364\u035F\x03\x02\x02\x02\u0364\u0362\x03\x02" +
		"\x02\x02\u0365\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366" +
		"\u0367\x03\x02\x02\x02\u0367w\x03\x02\x02\x02\u0368\u0366\x03\x02\x02" +
		"\x02\u0369\u036D\x07v\x02\x02\u036A\u036D\x05d3\x02\u036B\u036D\x05j6" +
		"\x02\u036C\u0369\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036C\u036B" +
		"\x03\x02\x02\x02\u036Dy\x03\x02\x02\x02\u036E\u0387\x05P)\x02\u036F\u0371" +
		"\x07k\x02\x02\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02" +
		"\u0371\u0372\x03\x02\x02\x02\u0372\u0374\x07Y\x02\x02\u0373\u0375\x07" +
		"\x1A\x02\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375" +
		"\u0376\x03\x02\x02\x02\u0376\u0378\x07\t\x02\x02\u0377\u0379\x05Z.\x02" +
		"\u0378\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x03" +
		"\x02\x02\x02\u037A\u037B\x07\n\x02\x02\u037B\u037C\x07\v\x02\x02\u037C" +
		"\u037D\x05`1\x02\u037D\u037E\x07\f\x02\x02\u037E\u0387\x03\x02\x02\x02" +
		"\u037F\u0381\x07k\x02\x02\u0380\u037F\x03\x02\x02\x02\u0380\u0381\x03" +
		"\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0383\x05|?\x02\u0383\u0384" +
		"\x07<\x02\x02\u0384\u0385\x05~@\x02\u0385\u0387\x03\x02\x02\x02\u0386" +
		"\u036E\x03\x02\x02\x02\u0386\u0370\x03\x02\x02\x02\u0386\u0380\x03\x02" +
		"\x02\x02\u0387{\x03\x02\x02\x02\u0388\u038F\x07v\x02\x02\u0389\u038B\x07" +
		"\t\x02\x02\u038A\u038C\x05Z.\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C" +
		"\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u038F\x07\n\x02\x02" +
		"\u038E\u0388\x03\x02\x02\x02\u038E\u0389\x03\x02\x02\x02\u038F}\x03\x02" +
		"\x02\x02\u0390\u0396\x05v<\x02\u0391\u0392\x07\v\x02\x02\u0392\u0393\x05" +
		"`1\x02\u0393\u0394\x07\f\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395\u0390" +
		"\x03\x02\x02\x02\u0395\u0391\x03\x02\x02\x02\u0396\x7F\x03\x02\x02\x02" +
		"\u0397\u0398\t\b\x02\x02\u0398\x81\x03\x02\x02\x02\u0399\u03A1\x07=\x02" +
		"\x02\u039A\u03A1\x07>\x02\x02\u039B\u03A1\x07w\x02\x02\u039C\u03A1\x07" +
		"x\x02\x02\u039D\u03A1\x07\x06\x02\x02\u039E\u03A1\x05\x84C\x02\u039F\u03A1" +
		"\x05\x86D\x02\u03A0\u0399\x03\x02\x02\x02\u03A0\u039A\x03\x02\x02\x02" +
		"\u03A0\u039B\x03\x02\x02\x02\u03A0\u039C\x03\x02\x02\x02\u03A0\u039D\x03" +
		"\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
		"\x83\x03\x02\x02\x02\u03A2\u03A3\t\t\x02\x02\u03A3\x85\x03\x02\x02\x02" +
		"\u03A4\u03A5\t\n\x02\x02\u03A5\x87\x03\x02\x02\x02\u03A6\u03A9\x07v\x02" +
		"\x02\u03A7\u03A9\x05\x8AF\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A7" +
		"\x03\x02\x02\x02\u03A9\x89\x03\x02\x02\x02\u03AA\u03AE\x05\x8CG\x02\u03AB" +
		"\u03AE\x07=\x02\x02\u03AC\u03AE\x07>\x02\x02\u03AD\u03AA\x03\x02\x02\x02" +
		"\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AC\x03\x02\x02\x02\u03AE\x8B\x03" +
		"\x02\x02\x02\u03AF\u03B0\t\v\x02\x02\u03B0\x8D\x03\x02\x02\x02\u03B1\u03B2" +
		"\x07v\x02\x02\u03B2\u03B3\x06H#\x02\u03B3\u03B4\x05n8\x02\u03B4\x8F\x03" +
		"\x02\x02\x02\u03B5\u03B6\x07v\x02\x02\u03B6\u03B7\x06I$\x02\u03B7\u03B8" +
		"\x05n8\x02\u03B8\x91\x03\x02\x02\x02\u03B9\u03BE\x07\r\x02\x02\u03BA\u03BE" +
		"\x07\x02\x02\x03\u03BB\u03BE\x06J%\x02\u03BC\u03BE\x06J&\x02\u03BD\u03B9" +
		"\x03\x02\x02\x02\u03BD\u03BA\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02" +
		"\u03BD\u03BC\x03\x02\x02\x02\u03BE\x93\x03\x02\x02\x02m\x95\x98\xB2\xB6" +
		"\xBD\xC3\xC7\xCE\xD6\xDB\xDD\xE7\xEF\xF4\xFD\u0105\u0109\u010E\u0119\u011F" +
		"\u012E\u0142\u0146\u014A\u0152\u015B\u0160\u0168\u016F\u0176\u017D\u0184" +
		"\u0196\u019A\u019C\u01A3\u01A9\u01AE\u01BD\u01C0\u01C5\u01C8\u01D3\u01D7" +
		"\u01DC\u01E9\u01EF\u01F8\u01FA\u0200\u0206\u0209\u020C\u0211\u0219\u021C" +
		"\u0226\u0229\u022E\u0235\u023C\u0241\u0244\u0249\u024F\u0254\u025D\u0261" +
		"\u0266\u026B\u0271\u0275\u027F\u0282\u0285\u0294\u0297\u029C\u02B3\u02B6" +
		"\u02BF\u02C7\u02CB\u02CD\u02D2\u02D6\u02DD\u02E4\u02EA\u0313\u0353\u0357" +
		"\u0364\u0366\u036C\u0370\u0374\u0378\u0380\u0386\u038B\u038E\u0395\u03A0" +
		"\u03A8\u03AD\u03BD";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaScriptParser._serializedATNSegment0,
			JavaScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptParser.__ATN) {
			JavaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaScriptParser._serializedATN));
		}

		return JavaScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaScriptParser.EOF, 0); }
	public HashBangLine(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HashBangLine, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public exportStatement(): ExportStatementContext | undefined {
		return this.tryGetRuleContext(0, ExportStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public yieldStatement(): YieldStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldStatementContext);
	}
	public withStatement(): WithStatementContext | undefined {
		return this.tryGetRuleContext(0, WithStatementContext);
	}
	public labelledStatement(): LabelledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabelledStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return JavaScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public Import(): TerminalNode { return this.getToken(JavaScriptParser.Import, 0); }
	public importFromBlock(): ImportFromBlockContext {
		return this.getRuleContext(0, ImportFromBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromBlockContext extends ParserRuleContext {
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public moduleItems(): ModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ModuleItemsContext);
	}
	public importDefault(): ImportDefaultContext | undefined {
		return this.tryGetRuleContext(0, ImportDefaultContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importFromBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportFromBlock) {
			listener.enterImportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportFromBlock) {
			listener.exitImportFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFromBlock) {
			return visitor.visitImportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleItemsContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public aliasName(): AliasNameContext[];
	public aliasName(i: number): AliasNameContext;
	public aliasName(i?: number): AliasNameContext | AliasNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasNameContext);
		} else {
			return this.getRuleContext(i, AliasNameContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_moduleItems; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterModuleItems) {
			listener.enterModuleItems(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitModuleItems) {
			listener.exitModuleItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitModuleItems) {
			return visitor.visitModuleItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDefaultContext extends ParserRuleContext {
	public aliasName(): AliasNameContext {
		return this.getRuleContext(0, AliasNameContext);
	}
	public Comma(): TerminalNode { return this.getToken(JavaScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importDefault; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportDefault) {
			listener.enterImportDefault(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportDefault) {
			listener.exitImportDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportDefault) {
			return visitor.visitImportDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	public Multiply(): TerminalNode { return this.getToken(JavaScriptParser.Multiply, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importNamespace; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportNamespace) {
			listener.enterImportNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportNamespace) {
			listener.exitImportNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportNamespace) {
			return visitor.visitImportNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromContext extends ParserRuleContext {
	public From(): TerminalNode { return this.getToken(JavaScriptParser.From, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(JavaScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_importFrom; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportFrom) {
			listener.enterImportFrom(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportFrom) {
			listener.exitImportFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFrom) {
			return visitor.visitImportFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_aliasName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAliasName) {
			listener.enterAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAliasName) {
			listener.exitAliasName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAliasName) {
			return visitor.visitAliasName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_exportStatement; }
	public copyFrom(ctx: ExportStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExportDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(JavaScriptParser.Export, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public exportFromBlock(): ExportFromBlockContext | undefined {
		return this.tryGetRuleContext(0, ExportFromBlockContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportDeclaration) {
			listener.enterExportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportDeclaration) {
			listener.exitExportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDeclaration) {
			return visitor.visitExportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExportDefaultDeclarationContext extends ExportStatementContext {
	public Export(): TerminalNode { return this.getToken(JavaScriptParser.Export, 0); }
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: ExportStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportDefaultDeclaration) {
			listener.enterExportDefaultDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportDefaultDeclaration) {
			listener.exitExportDefaultDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDefaultDeclaration) {
			return visitor.visitExportDefaultDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportFromBlockContext extends ParserRuleContext {
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	public importFrom(): ImportFromContext | undefined {
		return this.tryGetRuleContext(0, ImportFromContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public moduleItems(): ModuleItemsContext | undefined {
		return this.tryGetRuleContext(0, ModuleItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_exportFromBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExportFromBlock) {
			listener.enterExportFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExportFromBlock) {
			listener.exitExportFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportFromBlock) {
			return visitor.visitExportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_declaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(JavaScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(JavaScriptParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(JavaScriptParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(JavaScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.SemiColon);
		} else {
			return this.getToken(JavaScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForInStatement) {
			listener.enterForInStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForInStatement) {
			listener.exitForInStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForInStatement) {
			return visitor.visitForInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForOfStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(JavaScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public Await(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Await, 0); }
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterForOfStatement) {
			listener.enterForOfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitForOfStatement) {
			listener.exitForOfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForOfStatement) {
			return visitor.visitForOfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Let, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(JavaScriptParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(JavaScriptParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(JavaScriptParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	public Yield(): TerminalNode { return this.getToken(JavaScriptParser.Yield, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_yieldStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(JavaScriptParser.With, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_withStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterWithStatement) {
			listener.enterWithStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitWithStatement) {
			listener.exitWithStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWithStatement) {
			return visitor.visitWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(JavaScriptParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(JavaScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(JavaScriptParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_labelledStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLabelledStatement) {
			listener.enterLabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLabelledStatement) {
			listener.exitLabelledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLabelledStatement) {
			return visitor.visitLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(JavaScriptParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(JavaScriptParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(JavaScriptParser.Catch, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	public assignable(): AssignableContext | undefined {
		return this.tryGetRuleContext(0, AssignableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_catchProduction; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCatchProduction) {
			listener.enterCatchProduction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCatchProduction) {
			listener.exitCatchProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchProduction) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(JavaScriptParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_finallyProduction; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFinallyProduction) {
			listener.enterFinallyProduction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFinallyProduction) {
			listener.exitFinallyProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFinallyProduction) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(JavaScriptParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_debuggerStatement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDebuggerStatement) {
			listener.enterDebuggerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDebuggerStatement) {
			listener.exitDebuggerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDebuggerStatement) {
			return visitor.visitDebuggerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(JavaScriptParser.Function, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTailContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public classElement(): ClassElementContext[];
	public classElement(i: number): ClassElementContext;
	public classElement(i?: number): ClassElementContext | ClassElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassElementContext);
		} else {
			return this.getRuleContext(i, ClassElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classTail; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassTail) {
			listener.enterClassTail(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassTail) {
			listener.exitClassTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassTail) {
			return visitor.visitClassTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassElementContext extends ParserRuleContext {
	public methodDefinition(): MethodDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MethodDefinitionContext);
	}
	public Static(): TerminalNode[];
	public Static(i: number): TerminalNode;
	public Static(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Static);
		} else {
			return this.getToken(JavaScriptParser.Static, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Identifier);
		} else {
			return this.getToken(JavaScriptParser.Identifier, i);
		}
	}
	public Async(): TerminalNode[];
	public Async(i: number): TerminalNode;
	public Async(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Async);
		} else {
			return this.getToken(JavaScriptParser.Async, i);
		}
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_classElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassElement) {
			listener.enterClassElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassElement) {
			listener.exitClassElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassElement) {
			return visitor.visitClassElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_methodDefinition; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMethodDefinition) {
			listener.enterMethodDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMethodDefinition) {
			listener.exitMethodDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) {
			return visitor.visitMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterArg) {
			return visitor.visitFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	public Ellipsis(): TerminalNode { return this.getToken(JavaScriptParser.Ellipsis, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_lastFormalParameterArg; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLastFormalParameterArg) {
			listener.enterLastFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLastFormalParameterArg) {
			listener.exitLastFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameterArg) {
			return visitor.visitLastFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	public arrayElement(): ArrayElementContext[];
	public arrayElement(i: number): ArrayElementContext;
	public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayElementContext);
		} else {
			return this.getRuleContext(i, ArrayElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_elementList; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_propertyAssignment; }
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyExpressionAssignment) {
			listener.enterPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyExpressionAssignment) {
			listener.exitPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyExpressionAssignment) {
			return visitor.visitPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public OpenBracket(): TerminalNode { return this.getToken(JavaScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(JavaScriptParser.CloseBracket, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterComputedPropertyExpressionAssignment) {
			listener.enterComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitComputedPropertyExpressionAssignment) {
			listener.exitComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitComputedPropertyExpressionAssignment) {
			return visitor.visitComputedPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionPropertyContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionProperty) {
			listener.enterFunctionProperty(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionProperty) {
			listener.exitFunctionProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionProperty) {
			return visitor.visitFunctionProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	public getter(): GetterContext {
		return this.getRuleContext(0, GetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyGetter) {
			listener.enterPropertyGetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyGetter) {
			listener.exitPropertyGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyGetter) {
			return visitor.visitPropertyGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	public setter(): SetterContext {
		return this.getRuleContext(0, SetterContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public formalParameterArg(): FormalParameterArgContext {
		return this.getRuleContext(0, FormalParameterArgContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertySetter) {
			listener.enterPropertySetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertySetter) {
			listener.exitPropertySetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertySetter) {
			return visitor.visitPropertySetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyShorthand) {
			listener.enterPropertyShorthand(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyShorthand) {
			listener.exitPropertyShorthand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyShorthand) {
			return visitor.visitPropertyShorthand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_argument; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaScriptParser.Comma);
		} else {
			return this.getToken(JavaScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	public anoymousFunction(): AnoymousFunctionContext {
		return this.getRuleContext(0, AnoymousFunctionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	public Class(): TerminalNode { return this.getToken(JavaScriptParser.Class, 0); }
	public classTail(): ClassTailContext {
		return this.getRuleContext(0, ClassTailContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterClassExpression) {
			listener.enterClassExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitClassExpression) {
			listener.exitClassExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassExpression) {
			return visitor.visitClassExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(JavaScriptParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(JavaScriptParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(JavaScriptParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.QuestionMark, 0); }
	public Hashtag(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Hashtag, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MetaExpressionContext extends SingleExpressionContext {
	public New(): TerminalNode { return this.getToken(JavaScriptParser.New, 0); }
	public Dot(): TerminalNode { return this.getToken(JavaScriptParser.Dot, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMetaExpression) {
			listener.enterMetaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMetaExpression) {
			listener.exitMetaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMetaExpression) {
			return visitor.visitMetaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(JavaScriptParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(JavaScriptParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(JavaScriptParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(JavaScriptParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterVoidExpression) {
			listener.enterVoidExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitVoidExpression) {
			listener.exitVoidExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVoidExpression) {
			return visitor.visitVoidExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(JavaScriptParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(JavaScriptParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(JavaScriptParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(JavaScriptParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(JavaScriptParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(JavaScriptParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(JavaScriptParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AwaitExpressionContext extends SingleExpressionContext {
	public Await(): TerminalNode { return this.getToken(JavaScriptParser.Await, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAwaitExpression) {
			listener.enterAwaitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAwaitExpression) {
			listener.exitAwaitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(JavaScriptParser.Power, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public NullCoalesce(): TerminalNode { return this.getToken(JavaScriptParser.NullCoalesce, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterCoalesceExpression) {
			listener.enterCoalesceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitCoalesceExpression) {
			listener.exitCoalesceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCoalesceExpression) {
			return visitor.visitCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftLogical, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Instanceof(): TerminalNode { return this.getToken(JavaScriptParser.Instanceof, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInstanceofExpression) {
			return visitor.visitInstanceofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(JavaScriptParser.In, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(JavaScriptParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(JavaScriptParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(JavaScriptParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(JavaScriptParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(JavaScriptParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(JavaScriptParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(JavaScriptParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(JavaScriptParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportExpressionContext extends SingleExpressionContext {
	public Import(): TerminalNode { return this.getToken(JavaScriptParser.Import, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterImportExpression) {
			listener.enterImportExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitImportExpression) {
			listener.exitImportExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportExpression) {
			return visitor.visitImportExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public TemplateStringLiteral(): TerminalNode { return this.getToken(JavaScriptParser.TemplateStringLiteral, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterTemplateStringExpression) {
			listener.enterTemplateStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitTemplateStringExpression) {
			listener.exitTemplateStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringExpression) {
			return visitor.visitTemplateStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YieldExpressionContext extends SingleExpressionContext {
	public yieldStatement(): YieldStatementContext {
		return this.getRuleContext(0, YieldStatementContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterYieldExpression) {
			listener.enterYieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitYieldExpression) {
			listener.exitYieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldExpression) {
			return visitor.visitYieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(JavaScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	public Super(): TerminalNode { return this.getToken(JavaScriptParser.Super, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSuperExpression) {
			listener.enterSuperExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSuperExpression) {
			listener.exitSuperExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSuperExpression) {
			return visitor.visitSuperExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpression) {
			return visitor.visitObjectLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_assignable; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignable) {
			listener.enterAssignable(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignable) {
			listener.exitAssignable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignable) {
			return visitor.visitAssignable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnoymousFunctionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_anoymousFunction; }
	public copyFrom(ctx: AnoymousFunctionContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionDeclContext extends AnoymousFunctionContext {
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getRuleContext(0, FunctionDeclarationContext);
	}
	constructor(ctx: AnoymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnoymousFunctionDeclContext extends AnoymousFunctionContext {
	public Function(): TerminalNode { return this.getToken(JavaScriptParser.Function, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JavaScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JavaScriptParser.CloseBrace, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Multiply, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(ctx: AnoymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAnoymousFunctionDecl) {
			listener.enterAnoymousFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAnoymousFunctionDecl) {
			listener.exitAnoymousFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAnoymousFunctionDecl) {
			return visitor.visitAnoymousFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrowFunctionContext extends AnoymousFunctionContext {
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getRuleContext(0, ArrowFunctionParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(JavaScriptParser.ARROW, 0); }
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getRuleContext(0, ArrowFunctionBodyContext);
	}
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	constructor(ctx: AnoymousFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunction) {
			listener.enterArrowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunction) {
			listener.exitArrowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunction) {
			return visitor.visitArrowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseParen, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionParameters; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionParameters) {
			listener.enterArrowFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionParameters) {
			listener.exitArrowFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionParameters) {
			return visitor.visitArrowFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_arrowFunctionBody; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterArrowFunctionBody) {
			listener.enterArrowFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitArrowFunctionBody) {
			listener.exitArrowFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionBody) {
			return visitor.visitArrowFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.MinusAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftArithmeticAssign, 0); }
	public RightShiftLogicalAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RightShiftLogicalAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitXorAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BitOrAssign, 0); }
	public PowerAssign(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.PowerAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.StringLiteral, 0); }
	public TemplateStringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.TemplateStringLiteral, 0); }
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public bigintLiteral(): BigintLiteralContext | undefined {
		return this.tryGetRuleContext(0, BigintLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BigintLiteralContext extends ParserRuleContext {
	public BigDecimalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigDecimalIntegerLiteral, 0); }
	public BigHexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigHexIntegerLiteral, 0); }
	public BigOctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigOctalIntegerLiteral, 0); }
	public BigBinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BigBinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_bigintLiteral; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterBigintLiteral) {
			listener.enterBigintLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitBigintLiteral) {
			listener.exitBigintLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBigintLiteral) {
			return visitor.visitBigintLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Identifier, 0); }
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Break, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Do, 0); }
	public Instanceof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Instanceof, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Else, 0); }
	public New(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.New, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Var, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Debugger, 0); }
	public Function(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Function, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.This, 0); }
	public With(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.With, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Try, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Class, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Extends, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Super, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Implements, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Let, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Public, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Interface, 0); }
	public Package(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Package, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Protected, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Static, 0); }
	public Yield(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Yield, 0); }
	public Async(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Async, 0); }
	public Await(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.Await, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.From, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_keyword; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_getter; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaScriptParser.Identifier, 0); }
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_setter; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(JavaScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaScriptParser.RULE_eos; }
	// @Override
	public enterRule(listener: JavaScriptParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: JavaScriptParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


