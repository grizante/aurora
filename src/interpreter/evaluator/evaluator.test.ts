import {Lexer} from "@/lexer";
import {Parser} from "@/parser";

import Evaluator from "./evaluator";

describe('Evaluator test suite', () => {
  test('Program that sum two numbers', () => {
    const program = `
    1 + 1;
    `;

    const expected = ["2"];

    const lexer = new Lexer(Buffer.from(program));
    const parser = new Parser(lexer);
    const got = Evaluator.evaluate(parser.parse());

    expect(got).toStrictEqual(expected);
  });

  test('Program that calc precedence expression', () => {
    const program = `
    10 + 20 - 3 * 20;
    `;

    const expected = ["-30"];

    const lexer = new Lexer(Buffer.from(program));
    const parser = new Parser(lexer);
    const got = Evaluator.evaluate(parser.parse());

    expect(got).toStrictEqual(expected);
  });

  test('Program that set a vairbale then sum it with another number', () => {
    const program = `
    var value = 10;
    value + 20;
    `;

    const expected = ["30"];

    const lexer = new Lexer(Buffer.from(program));
    const parser = new Parser(lexer);
    const got = Evaluator.evaluate(parser.parse());

    expect(got).toStrictEqual(expected);
  });

  test('Program that set an "if" then it has condition with "false" value', () => {
    const program = `
    var compare = false;

    if (compare) {
      print("Testing");
      20;
    }

    10;
    `

    const expected = ["10"];

    const lexer = new Lexer(Buffer.from(program));
    const parser = new Parser(lexer);
    const got = Evaluator.evaluate(parser.parse());

    expect(got).toStrictEqual(expected);
  });

  test('Program that set an "if" then it has condition with "true" value', () => {
    const program = `
    var compare = true;

    if (compare) {
      print("Testing");
      20;
    }

    10;
    `

    const expected = ["20", "10"];

    const lexer = new Lexer(Buffer.from(program));
    const parser = new Parser(lexer);
    const got = Evaluator.evaluate(parser.parse());

    expect(got).toStrictEqual(expected);
  });
});