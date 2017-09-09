import * as React from 'react';
import { Layout, FormLayout, TextField, Button } from '@shopify/polaris';
import axios, { AxiosError } from 'axios';
import ErrorBanner from './Error';

interface Props { onSubmit(newUser: User): void; }
interface State { userName: string; error: AxiosError | null; }
export default class Form extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: '',
      error: null
    };
  }
  
  readonly fetchData = (): void => {
    this.dismissError();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((res) => {
        const userData = this.userFromApiResponse((res.data as GithubResponse));
        this.props.onSubmit(userData);
        this.setState({ userName: '' });
      })
    .catch((reason: AxiosError) => {
      this.setState({ 
        userName: '',
        error: reason
      });
    });
  }

  readonly userFromApiResponse = (newUser: GithubResponse): User => {
    return {
      url: newUser.html_url,
      name: newUser.name,
      avatarUrl: newUser.avatar_url,
      company: newUser.company
    };
  }

  // readonly generateError = (reason: AxiosError): GithubApiError => {
  //   return {
  //     name: this.state.userName,
  //     code: reason.code
  //   };
  // }

  readonly dismissError = (): void => {
    this.setState({ error: null});
  }
  
  readonly handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.fetchData();
  }

  readonly handleInput = (text: string): void => {
    this.setState({ userName: text });
  }

  readonly errorBanner = () => {
    return (this.state.error)
    ? <ErrorBanner error={this.state.error} dismissError={this.dismissError}/>
    : null;
  }
  
  public render() {
    return (
      <Layout.Section>
        <FormLayout>
          <form onSubmit={this.handleSubmit}>
            {this.errorBanner()}
            <TextField 
              label="Add user"
              placeholder="e.g. 'samerbuna'"
              helpText="Just the username, not the whole URL."
              type="text"
              value={this.state.userName}
              onChange={this.handleInput}
              autoFocus
              max={40}
            />
            <Button
              primary
              icon="add"
              onClick={this.fetchData}
            >
              Add User
            </Button>
          </form>
        </FormLayout>
      </Layout.Section>
    );
  }
}
