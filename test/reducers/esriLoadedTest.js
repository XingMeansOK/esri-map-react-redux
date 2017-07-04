var reducer = require('../../src/reducers/esriLoaded');

describe('esriLoaded', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
