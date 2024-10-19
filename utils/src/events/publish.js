import eventTopics from './topics';

const publishEvent = (topic, data) => {
  const event = new CustomEvent(eventTopics[topic], {detail: data});
  document.dispatchEvent(event);
  console.log(`New event published on topic ${topic}:`, data);
};

export default publishEvent;
