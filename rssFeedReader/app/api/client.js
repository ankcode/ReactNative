import {create} from 'apisauce';

import settings from '@app/config/settings';

const apiClient = create({
  baseURL: settings.baseUrl,
});

export default apiClient;
