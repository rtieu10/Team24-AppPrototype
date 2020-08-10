import React from 'react';
import { render, fireEvent, findByTestId } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

let container: HTMLElement;

beforeEach(() => {
    console.log(document);
    container = document.createElement('div');
    console.log(container);
    document.body.appendChild(container);
    act(() => { ReactDOM.render(<App />, container) });
});


afterEach(() => {
  document.body.removeChild(container);
});


// @test: this test will check to see clicking the sign-in button takes you to the Welcome page 
// test('redirect to welcome page when join clicked', () => { 
//     const join_button = container.querySelector('#join-button')  
//     // console.log("join: " + join_button); 
//     // console.log(join?.innerHTML); 
//     if (join_button != null){ 
//       fireEvent.click(join_button); 
//       const selection = container.querySelector('h2') 
//       //console.log(selection?.textContent); 
//       expect(selection?.textContent).toBe('Welcome'); 
//     }


test('redirect to welcome when sign-in clicked', () => { 
  const signin_hyperlink = container.querySelector('signin-hyperlink')
  // console.log("join: " + join_button); 
 // console.log(join?.innerHTML); 
  if(signin_hyperlink != null){ 
    fireEvent.click(signin_hyperlink); 
    const selection = container.querySelector('h2') 
    expect(selection?.textContent).toBe('Welcome'); 
  }
}); 


test('allow user to change username', async () => { 
  
}); 