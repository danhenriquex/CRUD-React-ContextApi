import React, { useState, useContext } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid';

export const AddUser = () => {
  const [name, setName] = useState()
  const { addUser } = useContext(GlobalContext)

  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    history.push('/')
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label style={{ paddingBottom: '5px' }}>Name</Label>
        <Input type="text" name="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
      </FormGroup>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-10">Cancel</Link>
      </div>
    </Form >
  );
}

export default AddUser;
