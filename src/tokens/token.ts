import {TokenTag} from "./types";

interface IToken {
  toString(): string
}

export class Token implements IToken {
  public readonly tag: TokenTag;

  constructor(tag: TokenTag) {
    this.tag = tag;
  }

  public toString(): string {
    return `<${this.tag}>`;
  }
}

export class TokenIdentifier extends Token {
  public readonly name: string;

  constructor(name: string) {
    super(TokenTag.IDENT);
    
    this.name = name;
  }

  public toString(): string {
    return `<${this.tag}, ${this.name}>`
  }
}

export class TokenNumber extends Token {
  public readonly value: number;

  constructor(value: number) {
    super(TokenTag.NUM);
    
    this.value = value;
  }

  public toString(): string {
    return `<${this.tag}, ${this.value}>`
  }
}

export class TokenLogical extends Token {
  public readonly value: boolean;

  constructor(value: boolean) {
    super(TokenTag.LOGICAL);
    
    this.value = value;
  }

  public toString(): string {
    return `<${this.tag}, ${this.value}>`
  }
}

export class TokenString extends Token {
  public readonly value: string;

  constructor(value: string) {
    super(TokenTag.STR);
    
    this.value = value;
  }

  public toString(): string {
    return `<${this.tag}, ${this.value}>`
  }
}

export function isRelativeOperatorToken(token: Token) {
  return [
    TokenTag.EQUAL,
    TokenTag.GREATER_THAN,
    TokenTag.LESS_THAN,
  ].includes(token.tag);
}

export function isLogicalOperatorToken(token: Token) {
  return [
    TokenTag.OR,
    TokenTag.AND
  ].includes(token.tag);
}

export function isAdditiveOperatorToken(token: Token) {
  return [
    TokenTag.ADD,
    TokenTag.SUB,
  ].includes(token.tag);
}

export function isMultiplicativeOperatorToken(token: Token) {
  return [
    TokenTag.MULT
  ].includes(token.tag);
}
