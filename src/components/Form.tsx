import * as React from 'react';
import { Layout, FormLayout, TextField, Button } from '@shopify/polaris';
import axios from 'axios';

interface Props { onSubmit(newCard: User): void; }
interface State { userName: string;  }
export default class Form extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  readonly fetchData = (): void => {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((res) => {
        const userData = this.userFromApiResponse((res.data as GithubApiData));
        this.props.onSubmit(userData);
        this.setState({ userName: '' });
      })
    .catch((reason) => {
      this.setState({ userName: '' });
    });
  }

  readonly userFromApiResponse = (newCard: GithubApiData): User => {
    return {
      name: newCard.name,
      avatarUrl: newCard.avatar_url,
      company: newCard.company
    };
  }
  
  readonly handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.fetchData();
  }

  readonly handleButtonClick = (): void => {
    this.fetchData();
  }

  readonly handleInput = (text: string): void => {
    this.setState({ userName: text });
  }
  
  public render() {
    return (
      <Layout.Section>
        <form onSubmit={this.handleSubmit}>
          <FormLayout>
            <TextField 
              label="Add user"
              placeholder="e.g. 'samerbuna'"
              helpText="Just the username, not the whole URL (e.g. https://github.com/samerbuna)."
              type="text"
              value={this.state.userName}
              onChange={this.handleInput}
              autoFocus
              max={40}
            />
            <Button
              primary
              icon="add"
              onClick={this.handleButtonClick}
            >
              Add User
            </Button>
          </FormLayout>
        </form>
      </Layout.Section>
    );
  }
}
