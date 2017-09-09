import * as React from 'react';
import { Card, Avatar, DestructableAction, Link } from '@shopify/polaris';

interface Props { user: User; onDelete(user: User): void; }
const UserCard = ({ user, onDelete }: Props) => {
  const handleDelete = () => {
    onDelete(user);
  };

  const userInfoMarkup = (): JSX.Element => {
    return (
      <div>
        This is a test.
      </div>
    );
  };

  return (
    <Card 
      title={user.name || 'N/A'} 
      sectioned
      secondaryFooterAction={({
        content: 'Delete',
        onAction: handleDelete,
        destructive: true,
      }) as DestructableAction}
    >
      <Avatar name={user.name} source={user.avatarUrl} />
      <Link external url={user.url}>GitHub Profile</Link>
      {userInfoMarkup()}
    </Card>
  );
};

export default UserCard;