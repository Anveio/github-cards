import axios from 'axios';

export default function request(url: string) {
  return new Promise(resolve => {
    return axios.get(url)
      .then((res) => {
        const data = res.data;
        return {
          url: data.html_url,
          name: data.name,
          avatarUrl: data.avatar_url,
          company: data.company
        };
      });
  });
}