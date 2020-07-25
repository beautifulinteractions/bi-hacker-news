const fetchJsonFrom = (url) => async () => {
  const res = await fetch(url);
  return await res.json();
};

export const fetchTopStoriesIds = fetchJsonFrom('https://hacker-news.firebaseio.com/v0/topstories.json');
export const fetchBestStoriesIds = fetchJsonFrom('https://hacker-news.firebaseio.com/v0/beststories.json');
export const fetchSingleStory = (id) => fetchJsonFrom(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)();

const fetchFullStoriesFrom = (fn) => async () => {
  const ids = await fn();
  ids.length = 20; // cut to 20 size

  return await Promise.all(ids.map(async (id) => await fetchSingleStory(id)));
};

export const fetchTopStories = fetchFullStoriesFrom(fetchTopStoriesIds);
export const fetchBestStories = fetchFullStoriesFrom(fetchBestStoriesIds);
