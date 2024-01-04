import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Guide from './components/guide/guide';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtubeService }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  //1.  `app.jsx`에서 특정 비디오를 클릭할때 그 비디오의 상태를 업데이트 해주도록 useState를 사용하세요.

  //3. `<VideoList>` 내 영상 컴포넌트 클릭하면 video_item.jsx의 onVideoClick이벤트 발생한 후 selectVideo 함수를 실행해서 state를 바꾸세요.

  const selectVideo = useCallback(video => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback(
    query => {
      youtubeService.searchVideos(query).then(videos => setVideos(videos));
    },
    [youtubeService]
  );

  const backHome = () => {
    youtubeService.mostPopular().then(videos => setVideos(videos));
  };

  //2. `<VideoList>` 의 props의 매개변수로 onVideoClick 함수와 display를 설정하세요.
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onLogoClick={backHome} />
      <section className={styles.content}>
        {selectedVideo ? (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        ) : (
          <aside className={styles.Guide}>
            <Guide />
          </aside>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
