import React from 'react';

import { RepositoryTopicProps } from './RepositoryTopic.interface';
import styles from './RepositoryTopic.module.scss';

const RepositoryTopic = ({ topic }: RepositoryTopicProps) => {
  return <div className={styles.topic}>{topic}</div>;
};

export default RepositoryTopic;
