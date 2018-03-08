import httpClient from './httpClient';

const url = 'users/furixturi/events';

export default {
  getUserEvents: () => {
    return httpClient.get(url)
  } 
}