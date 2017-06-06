import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

interface Props { onSubmit(newCard: UserData): void; }
interface State { userName: string; }
export class Form extends React.PureComponent<Props, State> {
  state = { userName: '' };

  fetchData = (userName: string): Promise<AxiosResponse> => {
    return axios.get(`https://api.github.com/users/${userName}`)
      .then((res: AxiosResponse) => {
        return res.data;
      })
      .catch((err: Error) => {
        process.exit(1);
      });
    // try {
    //   const res = await axios.get(`https://api.github.com/users/${userName}`)
    //   return Promise.resolve(res.data)
    // } catch (error) {
    //   process.exit(1)
    // }
  }
  
  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // this.fetchData(this.state.userName)
    // .then((data: GithubData) => {
    //   this.props.onSubmit(data)
    //   this.setState({ userName: '' })
    // })
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((res: AxiosResponse) => {
      this.props.onSubmit(this.extractedCardData((res.data as GithubApiResponse)));
      this.setState({ userName: '' });
      })
    .catch((reason) => {
      process.exit(1);
    });
  }
  
  handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ userName: (event.target as HTMLTextAreaElement).value });
  }
  
  public render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: '10px'}}>
        <input 
          type="text"
          value = {this.state.userName}
          onChange={this.handleInput}
          placeholder="Github Username" 
          required
        />
        <button value="Add Card" />
      </form>
    );
  }

  private extractedCardData = (newCard: GithubApiResponse) => {
    return {
      name: newCard.name,
      avatarUrl: newCard.avatar_url,
      company: newCard.company
    };
  }
}
