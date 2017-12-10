import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('Comment List', () => {
  let component;
  const props = { comments: ['comment1', 'comment2'] };
  console.log('props: ', props);
  
  beforeEach(() => {
    component = renderComponent(CommentList, null, props);
  });

  it('shows each comment', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('render correct comment', () => {
    expect(component).to.contain('comment1');
    expect(component).to.contain('comment2');
  })
});
