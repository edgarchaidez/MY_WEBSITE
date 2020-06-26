import React from 'react';

import CardUI from '../../../shared/Card/CardUI';
import GitHubIcon from '../../../shared/GithubIcon/GithubIcon';
import List from '../../List/List';

const Website = () => {

  const tools = [
    {"name": "React"},
    {"name": "CSS"},
    {"name": "HTML"},
    {"name": "Google Firebase"},
    {"name": "Material-UI"},
  ];

  const title = " This Website :)";

    return (
      <CardUI title={title}>
        <List list={tools} />
        <GitHubIcon url="https://github.com/edgarchaidez/MY-WEBSITE" />
      </CardUI>
    );
};

export default Website;