import * as React from 'react';
//import './Button.styles.scss'

export class Button extends React.PureComponent {
  doThing(val: any): void {
    console.log('click event:', val);
  }

  public render(): JSX.Element {
    const props = this.props;

    return (
      <button
        // styleName="root"
        onClick={this.doThing}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
