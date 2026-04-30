import { useParams } from 'react-router';
import { getEpisode } from '../data/contentData.js';
import PodcastDetail from './PodcastDetail.jsx';
import PodcastCampaign from './PodcastCampaign.jsx';

/**
 * Router shim: if the slug matches a known episode, render the detail page.
 * Otherwise treat it as a campaign invite code and render the podcast landing
 * page with tracking.
 */
export default function PodcastCampaignOrDetail() {
  const { slug } = useParams();
  const episode = getEpisode(slug);

  if (episode) {
    return <PodcastDetail />;
  }

  return <PodcastCampaign code={slug} />;
}
