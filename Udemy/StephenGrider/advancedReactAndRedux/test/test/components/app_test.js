import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


// describe -> group together similar task


// it -> should check one thing
// will have string inside and string show what we are testing


// expect to make statement about target ?

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('render comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  })

  it('shows comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })
})
