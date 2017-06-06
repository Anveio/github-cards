import * as React from 'react';

const CardDisplay = (card: UserData) => {
  return (
    <div>
      <img width="75" src={card.avatarUrl} />
      <div style={{display: 'inline-block', marginLeft: '10px'}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{card.name}</div>
        <div>{card.company}</div>
      </div>
    </div>
  );
};

export interface Props { cards: UserData[]; }
export const CardList = ({ cards }: Props) => {
  return (
    <div>
      {cards.map((card: UserData, index: number) => <CardDisplay {...card} key={index}/>)}
    </div>
  );
};