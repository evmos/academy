import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

export default function AlignItemsList(props) {
  return (
    <List sx={{ width: '100%', mt: 1, padding: 0 }}>
      <ListItem alignItems="flex-start" sx={{ padding: '20px 0px' }}>
        <ListItemText
          primary="🚀 Mission"
          secondary={props.mission}
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start" sx={{ padding: '20px 0px' }}>
        <ListItemText
          primary="📡 Vision"
          secondary={props.vision}

        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start" sx={{ padding: '20px 0px' }}>
        <ListItemText
          primary="🚩 Values"
          secondary={props.values}

        />
      </ListItem>
    </List>
  );
}
