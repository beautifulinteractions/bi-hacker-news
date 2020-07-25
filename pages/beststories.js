import Layout from '../components/Layout';
import StoryBox from '../components/StoryBox';
import { fetchBestStories } from '../API';

/**
 * BestStories page
 */
const BestStories = ({ stories }) => (
  <Layout title="Best stories" className="app">
    {stories.map((story) => <StoryBox {...story} key={story.id} />)}
  </Layout>
);


BestStories.getInitialProps = async () => {
  const stories = await fetchBestStories();

  return { stories };
};

export default BestStories;
