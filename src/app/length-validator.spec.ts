import { LengthValidator } from './length-validator';

describe('LengthValidator', () => {
  it('should create an instance', () => {
    const directive = new LengthValidator();
    expect(directive).toBeTruthy();
  });
});
