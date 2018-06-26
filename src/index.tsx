import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './Button';
import { GitHubUserList } from './GitHubUserList';

interface IIndexProps {
  reactVersion: string;
}

const Index = ({ reactVersion }: IIndexProps) => (
  <div>
    <h1>ReactJS v{reactVersion}</h1>
    <Button>Click me man!</Button>
    <GitHubUserList />
  </div>
);

ReactDOM.render(<Index reactVersion={React.version} />, document.getElementById('app-root'));
