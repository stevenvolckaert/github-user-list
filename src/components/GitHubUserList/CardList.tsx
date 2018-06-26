import * as React from 'react';
import { Card, ICardProps } from './Card';

interface CardListProps {
  cards: ICardProps[];
}

export const CardList = (props: CardListProps) => (
  <div>{props.cards.map(x => <Card key={x.id} {...x} />)}</div>
);
