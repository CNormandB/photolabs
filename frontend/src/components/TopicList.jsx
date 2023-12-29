import React from 'react';
import TopicListItem from './TopicListItem';
import topics from 'mocks/topics';
import '../styles/TopicList.scss';

const TopicList = ({ onSelectTopic, selectedTopic }) => {
  return (
    <div className="topic-list__item">
      {topics.map((topic) => (
        <button className="topic-list__button" key={topic.id} onClick={() => onSelectTopic(topic.title)}>
          <TopicListItem onSelectTopic={onSelectTopic} topic={topic.title} />
        </button>
      ))}
    </div>
  );
};

export default TopicList;