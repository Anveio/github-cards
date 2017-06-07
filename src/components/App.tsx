import * as React from 'react';
import { Page, Layout, EmptyState } from '@shopify/polaris';
import UserList from './UserList';
import Form from './Form';

const emptyImage = require('../empty-state.svg');

export interface State { users: User[]; active: boolean; }
export default class App extends React.PureComponent<never, State> {
  constructor(props: never) {
    super(props);
    this.state = {
      active: false,
      users: []
    };
  }

  readonly setActive = (): void => {
    this.setState({active: true});
  }

  readonly appendCard = (newUser: User): void => {
    this.setState(prevState => ({
      users: prevState.users.concat(newUser)
    }));
  }

  readonly deleteUserCards = (userToDelete: User): void => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.name !== userToDelete.name)
    }));
  }

  readonly inactiveMarkup = (): JSX.Element => {
    return (
      <Page title="Github Cards">
        <Layout>
          <EmptyState
            heading="You haven't added any users yet."
            action={{ content: 'Add user', onAction: this.setActive}}
            image={emptyImage}
          >
            <p>Get started by adding a user.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }

  readonly activeMarkup = (): JSX.Element => {
    return (
      <Page title="Github Cards">
        <Layout>
          <Form onSubmit={this.appendCard}/>
          <UserList users={this.state.users} onDelete={this.deleteUserCards} />
        </Layout>
      </Page>
    );
  }
  
  public render() {
    return (this.state.active || this.state.users.length > 0)
    ? this.activeMarkup()
    : this.inactiveMarkup();
  }
}