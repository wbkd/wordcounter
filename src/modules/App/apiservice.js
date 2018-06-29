import unfetch from 'unfetch';
import config from './config';

export default ({ text, lang }) =>
  unfetch(`${config.serverurl}${lang}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  }).then(r => r.json());
