import {DurationFormatterPipe} from './duration-formatter.pipe';

describe('DurationFormatterPipe', () => {
    let pipe;

    beforeEach(() => {
        pipe = new DurationFormatterPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('transform tests', () => {
        expect(pipe.transform(120)).toEqual('2 h ');
        expect(pipe.transform(130)).toEqual('2 h 10 m');
        expect(pipe.transform(50)).toEqual('50 m');
    });
});
