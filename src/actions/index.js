import axios from 'axios';

import {URL} from '../config/urls';
const {providersApiUrl} = URL;
export const FETCH_PROVIDERS = 'FETCH_PROVIDERS';

export function fetchProviders() {
  const url = `${providersApiUrl}`;
  const request = axios.get(url);

  return {
    type: FETCH_PROVIDERS,
    payload: request,
  };
}
