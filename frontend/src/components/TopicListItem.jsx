import React from "react";
import "../styles/TopicListItem.scss";
import { ACTIONS } from "hooks/useApplicationData";



const TopicListItem = ({ state, dispatch, topic }) => {

  return (
    <span
      className="topic-list__item"
      onClick={() => {dispatch({type: ACTIONS.SWITCH_TOPIC, payload: topic})}}
    >
      {topic.title}
    </span>
  );
};

export default TopicListItem;
