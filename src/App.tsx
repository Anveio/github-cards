import * as React from 'react';
import { CardList } from './Card';
import { Form } from './Form';

interface State { cards: UserData[]; }
export default class App extends React.PureComponent<never, State> {
  constructor(props: never) {
    super(props);
    this.state = {
      cards: []
    };
  }

  appendCard = (newCard: UserData) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(newCard)
    }));
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>Github Cards</h1>
          <p>This app was written by Shovon Hasan and the source code is available on Github</p>
        </div>
        
        <Form onSubmit={this.appendCard}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}