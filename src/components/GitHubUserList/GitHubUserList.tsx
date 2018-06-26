import * as React from 'react';
import { List } from 'linqts';
import { Form } from './Form';
import { CardList } from './CardList';
import { ICardProps } from './Card';

// TODO Consider linq-collections instead of linqts.
// https://www.npmjs.com/package/linq-collections -Steven Volckaert. June 8, 2018.

interface IGitHubUserListProps {}

interface IGitHubUserListState {
  cards: ICardProps[];
}

export class GitHubUserList extends React.PureComponent<
  IGitHubUserListProps,
  IGitHubUserListState
> {
  state = {
    cards: [
      {
        id: 9107183,
        login: 'stevenvolckaert',
        name: 'Steven Volckaert',
        avatar_url: 'https://avatars0.githubusercontent.com/u/9107183?v=4',
        company: ''
      },
      {
        id: 8445,
        login: 'zpao',
        name: "Paul O'Shannessy",
        avatar_url: 'https://avatars0.githubusercontent.com/u/8445?v=4',
        company: 'Facebook'
      }
    ]
  };

  addCard = (cardData: any) => {
    var cardList = new List<ICardProps>(this.state.cards);

    if (cardList.Any(x => x != null && x.id == cardData.id)) return;

    this.setState(prevState => ({
      cards: [...prevState.cards, cardData]
    }));
  };

  clearCards = () => {
    this.setState({ cards: [] });
  };

  render() {
    return (
      <div>
        <h2>GitHubUserList</h2>
        <Form onDataLoaded={this.addCard} OnClearButtonClicked={this.clearCards} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
