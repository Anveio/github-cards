export const users = {
  'anveio': {
    html_url: 'https://api.github.com/users/anveio',
    name: 'Shovon Hasan',
    avatar_url:  'https://avatars0.githubusercontent.com/u/8881711?v=3',
    company: '',
  }
};

export const request = (url: string) => {
  return new Promise((resolve, reject) => {
    const urlSplit = url.split('/');
    const userName = urlSplit[urlSplit.length - 1];
    process.nextTick(() => {
      users[userName] 
      ? resolve(users[userName]) 
      : reject({
          message: `Could not find user with name '${userName}'`,
          code: '404'
        });
    });
  });
};