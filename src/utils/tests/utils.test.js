import * as utils from '../';

/**
 * action
 */
describe('Test utils', () => {
  it('Utils action returns action object', () => {
    expect(utils.action('TEST_ACTION', { foo: 'bar' })).toEqual({
      type: 'TEST_ACTION',
      data: {
        foo: 'bar',
      },
    });
  });
});
