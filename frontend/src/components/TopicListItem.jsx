import React from "react";
import "../styles/TopicListItem.scss";
import { ACTIONS } from "hooks/useApplicationData";


const TopicListItem = ({ state, dispatch, topic }) => {
  const getTopicImages = () => {
    fetch(`/api/topics/photos/${topic.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SWITCH_TOPIC, payload: { data, topic } });
      })
      .catch((error) => {
        console.error('Error fetching topic images:', error);
      });
  };

  return (
    <span
      className="topic-list__item"
      onClick={getTopicImages}
    >
      {topic.title}
    </span>
  );
};

export default TopicListItem;
