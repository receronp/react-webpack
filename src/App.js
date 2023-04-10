import { useEffect, useState } from "react";
import youtubeApi from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const search = async () => {
      const res = await youtubeApi.get("/search", {
        params: { q: "surfboards" },
      });
      setVideos(res.data.items);
    };
    search();
  }, []);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="App">
      <SearchBar />
      <VideoDetail video={selectedVideo} />
      <VideoList
        videos={videos}
        onVideoSelect={(video) => {
          setSelectedVideo(video);
        }}
      />
    </div>
  );
};

export default App;
