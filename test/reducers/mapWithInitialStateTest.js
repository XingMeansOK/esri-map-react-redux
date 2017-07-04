var reducer = require('../../src/reducers/mapWithInitialState');

describe('mapWithInitialState', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
