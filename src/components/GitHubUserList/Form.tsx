import * as React from 'react';
import axios from 'axios';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

// See Axios cheat sheet @ https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

// TODO: Learn flexbox; how can we achieve to have TextField use all available horizontal space?
// -Steven Volckaert. June 8, 2018.
// TODO Delegate data retrieval to a service / service proxy class. See Redux?
// -Steven Volckaert. June 8, 2018.

interface IFormProps {
  OnClearButtonClicked: any;
  onDataLoaded: any;
}

export class Form extends React.PureComponent<IFormProps> {
  state = { userName: '' };

  onSubmit = (event: any) => {
    event.preventDefault();

    console.log(`HTTP GET GitHub user '${this.state.userName}'...`);
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(response => {
        this.setState({ userName: '' });
        this.props.onDataLoaded(response.data);
      })
      .catch(error => {
        // console.log(error);
        // TODO Show an appropriate error message below TextField. See Office UI Fabric docs on
        // TextField on how to do this. -Steven Volckaert. June 8, 2018
      });
  };

  render() {
    return (
      <form className="singleLineForm" onSubmit={this.onSubmit}>
        <TextField
          placeholder="GitHub user name"
          value={this.state.userName}
          ariaLabel="Please enter text here"
          onChanged={newValue => this.setState({ userName: newValue })}
        />
        <PrimaryButton type="submit" text="Add card" style={{ marginLeft: 8 }} />
        <DefaultButton
          text="Clear list"
          onClick={this.props.OnClearButtonClicked}
          style={{ marginLeft: 8 }}
        />
      </form>
    );
  }
}
