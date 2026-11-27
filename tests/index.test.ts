import { brzycki } from 'brzycki';
import { describe, expect, it } from 'vitest';

describe('brzycki', () => {
  it('should be a function', () => {
    expect(brzycki).toBeTypeOf('function');
  });

  it('should estimate 100 for 10', () => {
    expect(brzycki(100, 10)).toBeCloseTo(133, 0);
  });

  it('should estimate 100 for 6', () => {
    expect(brzycki(100, 6)).toBeCloseTo(116, 0);
  });
});
