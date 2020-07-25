import Layout from '../components/Layout';
import StoryBox from '../components/StoryBox';
import { fetchTopStories } from '../API';

/**
 * TopStories page
 */
const TopStories = ({ stories }) => (
  <Layout title="Top stories" className="app">
    {stories.map((story) => <StoryBox {...story} key={story.id} />)}
  </Layout>
);


TopStories.getInitialProps = async () => {
  const stories = await fetchTopStories();

  return { stories };
};

export default TopStories;
