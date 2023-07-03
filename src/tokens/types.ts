export enum TokenTag {
  EOT = "EOT",
  EOF = "EOF",
  WHITESPACE = "WHITESPACE",
  DEF = "DEF",
  IDENT = "IDENT",
  ASSIGN = "ASSIGN",
  SEMI = "SEMI",
  NUM = "NUM",
  STR = "STR",
  LOGICAL = "LOGICAL",
  PAREN_BEGIN = "PAREN_BEGIN",
  PAREN_END = "PAREN_END",
  BLOCK_BEGIN = "BLOCK_BEGIN",
  BLOCK_END = "BLOCK_END",
  ADD = "ADD",
  SUB = "SUB",
  MULT = "MULT",
  EQUAL = "EQUAL",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
  OPP = "OPP",
  AND = "AND",
  OR = "OR",
  IF = "IF",
  CALL_PRINT = "CALL_PRINT",
  DEF_FUNC = "DEF_FUNC",
  ARITY = "ARITY",
  COMMA = "COMMA",
  TYPING = "TYPING",
}

export const TokenProduct: [RegExp, TokenTag][] = [
  [new RegExp(/^[0-9_]+/), TokenTag.NUM],
  [new RegExp(/^(true|false)/), TokenTag.LOGICAL],
  [new RegExp(/^if/), TokenTag.IF],
  [new RegExp(/^not/), TokenTag.OPP], // opposite
  [new RegExp(/^or/), TokenTag.OR],
  [new RegExp(/^and/), TokenTag.AND],
  [new RegExp(/^var [a-z_]+/), TokenTag.DEF],
  [new RegExp(/^==/), TokenTag.EQUAL],
  [new RegExp(/^>/), TokenTag.GREATER_THAN],
  [new RegExp(/^</), TokenTag.LESS_THAN],
  [new RegExp(/^print/), TokenTag.CALL_PRINT],
  [new RegExp(/^".+"/), TokenTag.STR],
  [new RegExp(/^(func)\s([a-z_]+)\((.*?)\)/), TokenTag.DEF_FUNC],
  [new RegExp(/^:\s([a-z])+/), TokenTag.TYPING],
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
  [new RegExp(/^,/), TokenTag.COMMA],
];
