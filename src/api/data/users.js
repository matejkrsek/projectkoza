export const createUser = (user) => {
  const { avatarUrl, bio, email, firstName, id, initials, lastName, password } =
    user;

  return {
    id,
    avatarUrl,
    bio,
    email,
    firstName,
    lastName,
    initials,
    password,
  };
};
export const users = [
  createUser({
    id: 1,
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    email: 'demo@cosdensolutions.io',
    firstName: 'Demo',
    lastName: 'Account',
    initials: 'DA',
    password: 'cosdensolutions',
  }),
  createUser({
    id: 2,
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    email: 'abc@abc.cz',
    firstName: 'DemoX',
    lastName: 'AccountX',
    initials: 'DAX',
    password: 'abc12346',
  }),
  createUser({
    id: 3,
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    email: 'koza@roza.cz',
    firstName: 'DemoX',
    lastName: 'AccountX',
    initials: 'DAX',
    password: 'nejsemkoza',
  }),
];
