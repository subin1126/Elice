import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = props => {
  //3. <VideoList>의 display 속성값을 정의하고 css를 다르게 설정하여  videoItems (영상 컴포넌트)를 정렬하세요. videoItems가 렌더링되는 `<ul> 태그`에 클래스 명을 설정합니다.

  const displayType = props.display === 'list' ? styles.list : styles.grid;
  return (
    <ul className={`${styles.videos} ${displayType}`}>
      {props.videos &&
        props.videos.map(video => {
          //props(videos) 배열을 돌면서 video 에 있는 items(배열 원소)를 VideoItem컴포넌트로 만들어줌.
          return (
            <VideoItem
              key={video.id}
              video={video}
              onVideoClick={props.onVideoClick}
              display={props.display}
            />
          );
        })}
    </ul>
  );
};

export default VideoList;
