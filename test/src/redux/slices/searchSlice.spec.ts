import store from '../../../../src/redux/store';

describe('Search redux state tests', () => {
  it('Should initially set state to an empty object', () => {
    const state = store.getState().search;
    expect(state.criteria).toEqual('');
  });
});
