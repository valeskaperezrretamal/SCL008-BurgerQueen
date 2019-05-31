import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<App />,div),
  shallow(div);
  //ReactDOM.render(<App />, div);
  //ReactDOM.unmountComponentAtNode(div);
  });

  it('renders ProductList' , ()=>{
    const wrapper= shallow (<App/>);
    expect(wrapper.find(ProductList).length).ToBe(1);
  });