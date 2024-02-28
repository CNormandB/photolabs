import React from "react";
import "../styles/TopicListItem.scss";
import { ACTIONS } from "hooks/useApplicationData";

/*
const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};
*/

const TopicListItem = ({ state, dispatch, topic }) => {
  const getTopicImages = () => {
    fetch(`/api/topics/photos/${topic.id}`)
      .then((res) => res.json())
      .then((data) =>{
        console.log({ type: ACTIONS.SWITCH_TOPIC, payload: { data, topic } })
        dispatch({ type: ACTIONS.SWITCH_TOPIC, payload: { data, topic } })
      
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
