const getFromURL = (url) => async () => {
  const res = await fetch(url);
  return await res.json();
};

export const fetchTopStoriesIds = getFromURL('https://hacker-news.firebaseio.com/v0/topstories.json');
export const fetchBestStoriesIds = getFromURL('https://hacker-news.firebaseio.com/v0/beststories.json');
export const fetchStory = (id) => getFromURL(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)();

const fetchStoryWith = (fn) => async () => {
  const ids = await fn();
  ids.length = 20; // cut to 20 size

  return await Promise.all(ids.map(async (id) => await fetchStory(id)));
};

export const fetchTopStories = fetchStoryWith(fetchTopStoriesIds);
export const fetchBestStories = fetchStoryWith(fetchBestStoriesIds);
