import * as React from 'react';

// TODO Experiment with a separate LESS / SASS file per component. -Steven Volckaert. June 8, 2018.

export interface ICardProps {
  id: number;
  login: string;
  avatar_url: string;
  company: string;
  name: string;
}

export const Card = (props: ICardProps) => (
  <div style={{ margin: '1em' }}>
    <img width="75" src={props.avatar_url} />
    <div style={{ display: 'inline-block', marginLeft: 16, verticalAlign: 'top' }}>
      <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
        {props.name != null ? props.name : <i>No name set</i>}
      </div>
      <div>
        <span>User name: </span>
        <i>'{props.login}'</i>
      </div>
      <div>
        <span>Works for: </span>
        {props.company != null ? props.company : <i>No company set</i>}
      </div>
    </div>
  </div>
);
