import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState'

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext)

  return (
    <ListGroup className="mt-4">
      {console.log('mostrando usuarios: ', users)}
      {users.length > 0 ? (
        users.map(user => (
          <ListGroupItem key={user.id} className="d-flex justify-content-between align-items-center">
            {console.log('mostrando os users: ', users)}
            <strong>{user.name}</strong>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link className="btn btn-warning" to={`/edit/${user.id}`}>Edit </Link>
              <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
            </div>
          </ListGroupItem>
        ))
      ) : (<h4 className="text-center">Sem usuários</h4>)}

    </ListGroup>
  );
}

export default UserList;

