import * as React from 'react';
import { Card, Avatar, DestructableAction } from '@shopify/polaris';

interface Props { user: User; onDelete(user: User): void; }
const UserCard = ({ user, onDelete }: Props) => {
  const handleDelete = () => {
    onDelete(user);
  };

  return (
    <Card 
      sectioned 
      title={user.name} 
      secondaryFooterAction={({
        content: 'Delete',
        onAction: handleDelete,
        destructive: true,
      }) as DestructableAction}
    >
      <Avatar name={user.name} source={user.avatarUrl} size="large"/>
      <h3><a href={user.url}>User Name: {user.name} </a></h3>
    </Card>
  );
};

export default UserCard;