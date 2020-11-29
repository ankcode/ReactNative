import client from './client';

const getEntriesByTopic = (topic) =>
  client.get(`/headlines/section/topic/${topic}`);

const getEntriesByQuery = (query) => client.get(`/search?q=${query}`);

export default {
  getEntriesByTopic,
  getEntriesByQuery,
};
