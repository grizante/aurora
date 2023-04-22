import {TokenTag} from "./tokens";
import {
  BinaryOperationNode,
  BlockStatmentNode,
  IdentifierNode,
  IntegerNode,
  ParserNode,
  RelativeOperationNode,
} from "../v3/parser/node";

export default class Evaluator {
  static compose(block: ParserNode[]): string[] {
    const out = [];

    for (const stmt of block) {
      if (stmt instanceof IdentifierNode) {
        continue;
      }

      if (stmt instanceof RelativeOperationNode) {
        out.push(`${Evaluator.relative(stmt)}`);
        continue;
      }

      if (stmt instanceof BlockStatmentNode) {
        out.push(Evaluator.compose(stmt.block).join(','));
        continue;
      }

      out.push(`${Evaluator.evaluate(stmt)}`);
    }

    return out;
  }

  static relative(tree: RelativeOperationNode): boolean {
    const {comparator, left, right} = tree;

    switch (comparator.tag) {
      case TokenTag.EQUAL:
        return this.evaluate(left) == this.evaluate(right);

      case TokenTag.GREATER_THAN:
        return this.evaluate(left) > this.evaluate(right);

      case TokenTag.LESS_THAN:
        return this.evaluate(left) < this.evaluate(right);
    }

    throw new SyntaxError(
      `It was possible evaluate relative op:
            Comparator: ${comparator}
            Left: ${left}
            Right: ${right}
        `
    );
  }

  static evaluate(tree: ParserNode): number {
    if (tree instanceof IntegerNode) {
      return tree.value;
    }

    if (tree instanceof BinaryOperationNode) {
      const {operator, left, right} = tree;

      switch (operator.tag) {
        case TokenTag.ADD:
          return this.evaluate(left) + this.evaluate(right);

        case TokenTag.SUB:
          return this.evaluate(left) - this.evaluate(right);

        case TokenTag.MULT:
          return this.evaluate(left) * this.evaluate(right);
      }
    }

    return NaN;
  }
}
