import * as React from 'react';
import { mount } from 'enzyme';
import { EmptyState, Button } from '@shopify/polaris';
import App from '../components/App';
import Form from '../components/Form';
import UserCard from '../components/UserCard';
import ErrorBanner from '../components/Error';

import { users, request } from './request';
jest.mock('./mock.request');

const addUser = (userName: string) => {
  return request(`https://api.github.com/users/${userName}`);
};

describe('using the app for the first time', () => {
  let app;
  beforeEach(() => {
    app = mount(<App />);
  });

  it('renders an EmptyState & a button to get started & does not render the form', () => {
    expect(app.find(EmptyState).length).toEqual(1);
    expect(app.find(Button).length).toEqual(1);
    expect(app.find(Form).length).toEqual(0);
  });

  it('shows the add user form after clicking the empty state button', () => {
    const emptyStateBtn = app.find(Button).at(0);
    expect(app.find(Form).length).toEqual(0);
    emptyStateBtn.simulate('click');
    expect(app.find(Form).length).toEqual(1);
  });
});

describe('adding users', () => {
  let app;
  let form;
  beforeEach(() => {
    app = mount(<App />);
    app.find(Button).at(0).simulate('click');
    expect(app.find(Form).length).toEqual(1);
    form = app.find(Form).at(0);
  });

  test('the mock api returns the correct user', () => {
    return addUser('anveio').then(data => expect(data).toEqual(users.anveio));
  });

  // test('the form works', () => {
  //   form.simulate('keyDown');
  //   expect(app.find(ErrorBanner).length).toEqual(1);
  // });

  test('the mock api returns an axios error for an invalid user', () => {
    return addUser('hfajsnfkasnf')
      .then(data => 
        expect(data)
        .toThrow('Could not find user with name: \'hfajsnfkasnf\''));
  });
});