import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('Comment Box ', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a className of comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('textarea related', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'some comment');
    });

    it('render what user type', () => {
      expect(component.find('textarea')).to.have.value('some comment');
    })

    it('clear textarea when user submit', () => {
      component.find('textarea').simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    })
  })
})