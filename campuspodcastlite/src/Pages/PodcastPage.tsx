import { useParams } from "react-router-dom";
import { podcasts } from "../data/podcasts";
import { usePlayer } from "../providers/PlayerProvider";

export default function PodcastPage() {
  const { podId } = useParams();
  const { play } = usePlayer();

  const pod = podcasts.find((p) => p.id === podId);

  if (!pod) return <div>Podcast not found</div>;

  return (
    <div>
        podcastPage
    </div>
  );
}
