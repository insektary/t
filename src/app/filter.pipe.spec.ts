import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
	let pipe;

	beforeEach(() => {
		pipe = new FilterPipe();
	})

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('tests filter', () => {
		expect(pipe.transform([{title: 'test'}, {title: 'another'}], 'te')).toEqual([{title: 'test'}]);
	});
});
