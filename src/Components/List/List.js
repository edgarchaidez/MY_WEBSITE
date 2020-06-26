import React from 'react';

import ListItem from './ListItem/ListItem';
import classes from './List.module.css';

const List = (props) => {
  let list = null;

  list = props.list.map((item, index) => (
    <ListItem key={index} label={item.name} />
  ));

  return <div className={classes.List}>{list}</div>;
};
    

export default List;