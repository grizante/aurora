export enum TokenTag {
  EOT = "EOT", EOF = "EOF", WHITESPACE = "WHITESPACE",
  DEF = "DEF", IDENT = "IDENT", ASSIGN = "ASSIGN",
  SEMI = "SEMI", NUM = "NUM", STR = "STR", LOGICAL = "LOGICAL",
  PAREN_BEGIN = "PAREN_BEGIN", PAREN_END = "PAREN_END",
  BLOCK_BEGIN = "BLOCK_BEGIN", BLOCK_END = "BLOCK_END",
  ADD = "ADD", SUB = "SUB", MULT = "MULT", 
  EQUAL = "EQUAL", GREATER_THAN = "GREATER_THAN", LESS_THAN = "LESS_THAN",
  OPP = "OPP", AND = "AND", OR = "OR",
  IF = "IF", CALL_PRINT = "CALL_PRINT"
}

export const TokenProduct: [RegExp, TokenTag][] = [
  [new RegExp(/^\d+/), TokenTag.NUM],
  [new RegExp(/^(true|false)/), TokenTag.LOGICAL],
  [new RegExp(/^if/), TokenTag.IF],
  [new RegExp(/^not/), TokenTag.OPP], // opposite
  [new RegExp(/^or/), TokenTag.OR],
  [new RegExp(/^and/), TokenTag.AND],
  [new RegExp(/^var/), TokenTag.DEF],
  [new RegExp(/^==/), TokenTag.EQUAL],
  [new RegExp(/^>/), TokenTag.GREATER_THAN],
  [new RegExp(/^</), TokenTag.LESS_THAN],
  [new RegExp(/^print/), TokenTag.CALL_PRINT],
  [new RegExp(/^".+"/), TokenTag.STR],
  [new RegExp(/^[a-z_]+/), TokenTag.IDENT],
  [new RegExp(/^\s+/), TokenTag.WHITESPACE],
  [new RegExp(/^=/), TokenTag.ASSIGN],
  [new RegExp(/^\(/), TokenTag.PAREN_BEGIN],
  [new RegExp(/^\)/), TokenTag.PAREN_END],
  [new RegExp(/^{/), TokenTag.BLOCK_BEGIN],
  [new RegExp(/^}/), TokenTag.BLOCK_END],
  [new RegExp(/^\+/), TokenTag.ADD],
  [new RegExp(/^\-/), TokenTag.SUB],
  [new RegExp(/^\*/), TokenTag.MULT],
  [new RegExp(/^;/), TokenTag.SEMI],
];
