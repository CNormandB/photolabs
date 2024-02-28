import React from 'react';
import TopicListItem from './TopicListItem';
import topics from 'mocks/topics';
import '../styles/TopicList.scss';
import {ACTIONS} from "../hooks/useApplicationData"


const TopicList = ({ state, dispatch }) => {
  if(!state.topics){
    return
  }

  return (
    <div className="topic-list__item">
      {state.topics.map((topic) => (
        <button className="topic-list__button" key={topic.id}>
          <TopicListItem state={state} dispatch={dispatch} topic={topic} />
        </button>
      ))}
    </div>
  );
};

export default TopicList;