import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/reducerComment';
import { SAVE_COMMENT } from '../../src/actions/types';


describe('Comment Reducer', () => {
  it('handles action with unknown type', () => {
    const action = {
      type: 'SOMETHING',
      payload: 'yoyo'
    }
    // console.log('type:', typeof commentReducer);
    expect(commentReducer([], action)).to.eql([]);
  })
  
  it('SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'yoyo'
    }
    expect(commentReducer([], action)).to.eql(['yoyo']);
  })
})