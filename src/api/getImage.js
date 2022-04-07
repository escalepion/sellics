import axios from 'axios';

export const getImage = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qBfiF31kDnC0sAxSgDxf47MXHcMdKeRDWANxCQAZ0Jo');
};
