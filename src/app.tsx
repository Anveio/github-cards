import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";

interface CardInterface { name: string; avatarUrl: string; company: string; }
class Card implements CardInterface {
    constructor(public name: string, public avatarUrl: string, public company: string) { }
}

const CardDisplay = (props: CardInterface) => {
  return (
    <div>
      <img width="75" src={props.avatarUrl} />
      <div style={{display: 'inline-block', marginLeft: '10px'}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

// let data: Card[]  = [
//   { 
//     name: "Shovon Hasan",
//     avatarUrl: "https://avatars0.githubusercontent.com/u/8881711?v=3",
//     company: ""
//   },
//   {
//     name: "Paul O’Shannessy",
//     avatarUrl: "https://avatars2.githubusercontent.com/u/8445?v=3",
//     company: "Facebook"
//   }
// ]

interface CardListProps { cards: Card[]; }
const CardList = (props: CardListProps) => {
  return (
    <div>
      {props.cards.map((card: Card, index: number) => <CardDisplay {...card} key={index}/>)}
    </div>
  )
}

interface FormState { userName: string }
interface FormProps { onSubmit: any }
class Form extends React.Component<FormProps, FormState> {
  state = { userName: '' }
  
  // Event is always an object but it's too complicated to write an interface for
  handleSubmit = (event: any): void => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((res: any) => {
        this.props.onSubmit(res.data);
        this.setState({ userName: '' })
      })
    .catch((err: Error) => {
      console.log('Parsing failed', err)
    })
  }
  
  handleInput = (event: any): void => {
    this.setState({ userName: event.target.value })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: '10px'}}>
        <input 
          type="text"
          value = {this.state.userName}
          onChange={this.handleInput}
          placeholder="Github Username" 
          required
        />
        <button>Add Card</button>
      </form>
    )
  }
}

interface AppState { cards: Card[]; }
class App extends React.Component<undefined, AppState> {
  state = { 
    cards: []
  }
  
  appendCard = (newCard: any) => {
    const extractedCardData: Card = {
      name: newCard.name,
      avatarUrl: newCard.avatar_url,
      company: newCard.company
    }
    
    this.setState(prevState => ({
      cards: prevState.cards.concat(extractedCardData)
    }))
  }
  
  render() {
    return(
      <div>
        <Form onSubmit={this.appendCard}/>
        <CardList cards={this.state.cards} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))