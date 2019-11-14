import {OrderByPipe} from './order-by.pipe';

describe('OrderByPipe', () => {
	let pipe;

	beforeEach(() => {
		pipe = new OrderByPipe();
	})

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('test order', () => {
		expect(pipe.transform([
			{
				creationDate: 'Mon Nov 18 2019 12:32:41 GMT+0300'
			},
			{
				creationDate: 'Fri Nov 29 2019 12:32:41 GMT+0300'
			}])).toEqual([
			{
				creationDate: 'Fri Nov 29 2019 12:32:41 GMT+0300'
			},
			{
				creationDate: 'Mon Nov 18 2019 12:32:41 GMT+0300'
			}]);
	});
});
