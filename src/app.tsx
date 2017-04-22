import * as React from "react";
import * as ReactDOM from "react-dom";

interface CardInterface { name: string; avatarUrl: string; company: string; }
class Card implements CardInterface {
    constructor(public name: string, public avatarUrl: string, public company: string) { }
}

const CardDisplay = (props: CardInterface) => {
  return (
    <div>
      <img width="75" src={props.avatarUrl} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}


let data: Card[]  = [
  { 
    name: "Shovon Hasan",
    avatarUrl: "https://avatars0.githubusercontent.com/u/8881711?v=3",
    company: ""
  },
  {
    name: "Paul O’Shannessy",
    avatarUrl: "https://avatars2.githubusercontent.com/u/8445?v=3",
    company: "Facebook"
  }
]

interface CardListProps { cards: Card[]; }
const CardList = (props: CardListProps) => {
  return (
    <div>
      {props.cards.map(card => <CardDisplay {...card}/>)}
    </div>
  )
}

ReactDOM.render(<CardList cards={data}/>, document.getElementById('app'))