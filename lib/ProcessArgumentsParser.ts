import { ProcessArgumentsParseResult } from './ProcessArgumentsParseResult';

export class ProcessArgumentsParser {

  private args: Array<string>;
  private index: number;

  public static parse(args: Array<string>) {
    const p = new this(args);
    return p.parse();
  }

  constructor(args: Array<string>) {
    this.args = args;
    this.index = 2;
  }

  parse() {
    return new ProcessArgumentsParseResult();
  }

  parseServer() {
    console.log('starting server');
  }

  private hasNext(): boolean {
    return this.index < this.args.length;
  }

  private peek(): string {
    return this.args[this.index];
  }

  private seek(): string | null {
    return this.hasNext() ? this.args[++this.index] : null;
  }

}
