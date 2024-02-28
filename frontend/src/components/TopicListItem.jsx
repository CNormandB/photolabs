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
  return (
    <span className="topic-list__item" onClick={() => dispatch({type: ACTIONS.SWITCH_TOPIC, payload: topic})}>
      {topic}
    </span>
  );
};


export default TopicListItem;