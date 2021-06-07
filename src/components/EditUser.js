import React, { useState, useContext, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })

  const { users, editUser } = useContext(GlobalContext)
  const history = useHistory();
  const currentUserId = props.match.params.id;
  console.log('currentUser: ', currentUserId)

  useEffect(() => {
    const userId = currentUserId

    const selectedUser = users.find(user => user.id === userId)
    setSelectedUser(selectedUser)
  }, [currentUserId, users])

  const onSubmit = () => {
    console.log('##mostrando o usuario editado: ', selectedUser)
    editUser(selectedUser);

    history.push('/')
  }

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Edit Name</Label>
        <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter name" />
      </FormGroup>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-10">Cancel</Link>
      </div>
    </Form>
  );
}

export default EditUser;
