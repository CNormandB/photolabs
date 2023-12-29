import React from "react";
import "../styles/TopicListItem.scss";

/*
const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};
*/

const TopicListItem = ({ onSelectTopic, topic }) => {
  return (
    <span className="topic-list__item" onClick={() => onSelectTopic(topic)}>
      {topic}
    </span>
  );
};


export default TopicListItem;