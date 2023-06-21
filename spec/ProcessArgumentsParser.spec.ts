import { describe, expect, it } from '@jest/globals';
import { ProcessArgumentsParser } from '../lib/ProcessArgumentsParser';
import { ProcessArgumentsParseResult } from '../lib/ProcessArgumentsParseResult';

describe(ProcessArgumentsParser, () => {
  it('success', () => {
    const argv = [
      'a',
      'b',
      'c',
      'd',
      'e',
    ];

    expect(ProcessArgumentsParser.parse(argv)).toBeInstanceOf(ProcessArgumentsParseResult);
  });
});
