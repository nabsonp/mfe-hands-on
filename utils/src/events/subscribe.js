import eventTopics from './topics';

const subscribeToTopic = (topic, listener) => {
  document.addEventListener(eventTopics[topic], listener);
  console.log(`New subscriber to topic ${topic}`);
}

export default subscribeToTopic;

