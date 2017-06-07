import * as React from 'react';
import { mount } from 'enzyme';
import { EmptyState, Button } from '@shopify/polaris';
import App from '../components/App';
import Form from '../components/Form';

const setup = () => {
  return mount(<App />);
};

describe('Using the app for the first time', () => {
  it('renders an EmptyState & a button to get started & does not render the form', () => {
    const app = setup();
    expect(app.find(EmptyState).length).toEqual(1);
    expect(app.find(Button).length).toEqual(1);
    expect(app.find(Form).length).toEqual(0);
  });

  it('shows the add user form after clicking the empty state button', () => {
    const app = setup();
    const emptyStateBtn = app.find(Button).at(0);
    expect(app.find(Form).length).toEqual(0);
    emptyStateBtn.simulate('click');
    expect(app.find(Form).length).toEqual(1);
  });
});