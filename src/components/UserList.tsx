import * as React from 'react';
import { Layout } from '@shopify/polaris';
import UserCard from './UserCard';

interface Props { users: User[]; onDelete(user: User): void; }
const UserList = ({ users, onDelete }: Props) => {
  return (
    <Layout.Section >
      {users.map((user: User, index: number) => <UserCard user={user} onDelete={onDelete} key={index}/>)}
    </Layout.Section>
  );
};

export default UserList;

/*<ResourceList 
  items={users}
  renderItem={(user: User, index: number) => <UserCard user={user} onDelete={onDelete} key={index}/>}
/>*/