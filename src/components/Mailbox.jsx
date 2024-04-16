import { useState, useMemo } from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Paper, Button, IconButton, Tooltip } from '@mui/material';
import { Delete, Note, ContentCopy } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import  {getClients} from '../redux/clientSlice';;

// Mailbox component
const Mailbox = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
 

  useMemo(() => {
    // Dispatch the async thunk to fetch clients when the component mounts
    dispatch(getClients());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleAddNote = () => {
    console.log("Note added to the message");
  };

  const handleDeleteMessage = () => {
    console.log("Message deleted");
    setSelectedUser(null);
  };

  const handleCopyEmail = () => {
    // Implement logic to copy the email address to the clipboard
    const email = selectedUser.email;
    navigator.clipboard.writeText(email).then(() => {
      console.log("Email copied to clipboard:", email);
    });
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Mailbox
      </Typography>
      <Paper elevation={3}>
        <List>
          {clients.map((client) => (
            <div key={client.id}>
              <ListItem onClick={() => handleUserSelect(client)}>
                <ListItemText primary={`${client.firstName} ${client.lastName}`} secondary={client.email} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
      <div style={{ marginTop: '20px' }}>
        {selectedUser && (
          <Paper elevation={3}>
            <Typography variant="h5" align="center" gutterBottom>
              {selectedUser.firstName} {selectedUser.lastName}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Email: ${selectedUser.email}`} />
                <Tooltip title="Copy Email">
                  <IconButton onClick={handleCopyEmail}>
                    <ContentCopy />
                  </IconButton>
                </Tooltip>
              </ListItem>
              <ListItem>
                <ListItemText primary={`Phone: ${selectedUser.phone}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Postal Code: ${selectedUser.postalCode}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`State: ${selectedUser.state}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Subject: ${selectedUser.subject}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Message: ${selectedUser.message}`} />
                <Tooltip title="Add Note">
                  <IconButton onClick={handleAddNote}>
                    <Note />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Message">
                  <IconButton onClick={handleDeleteMessage}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </ListItem>
              <ListItem>
                <ListItemText primary={`Timestamp: ${selectedUser.timestamp}`} />
              </ListItem>
            </List>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default Mailbox;
