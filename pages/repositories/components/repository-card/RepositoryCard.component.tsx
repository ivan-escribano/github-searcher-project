import React from 'react';

import { format, parseISO } from 'date-fns';
import Image from 'next/image';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import ActionButton from '@/components/action-button/ActionButton.component';
import { RepositoryCardProps } from './RepositoryCard.interface';
import styles from './RepositoryCard.module.scss';

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const { owner, full_name, description, topics, language, stargazers_count, updated_at, created_at, html_url } = repository;

  const updateISO = parseISO(updated_at);
  const createISO = parseISO(created_at);

  const updatedAtDateFormatted = format(updateISO, 'MMM dd, yyyy');
  const createdAtDateFormatted = format(createISO, 'MMM dd, yyyy');

  return (
    <section className={styles.card}>
      <div className={styles.imageBox}>
        <Image src={owner.avatar_url} alt="Owner Avatar" width={300} height={300} className={styles.imageBox__image} />
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.cardBody__fullName}>@ {full_name}</h2>
        <p className={styles.cardBody__description}>{description}</p>

        <div className={styles.topics}>
          {topics.map((topic, index) => (
            <span key={index} className={styles.topics__item}>
              {topic}
            </span>
          ))}
        </div>

        <div className={styles.info}>
          <div className={styles.language}>
            <span>🟡</span>
            <p>{language}</p>
          </div>

          <div className={styles.stars}>
            <StarBorderOutlinedIcon />
            <p> {stargazers_count}</p>
          </div>
        </div>

        <div className={styles.dates}>
          <p className={styles.dates__updated}>Updated: {updatedAtDateFormatted}</p>
          <p className={styles.dates__created}>Created: {createdAtDateFormatted}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <ActionButton onClick={() => console.log(html_url)}>
          <RemoveRedEyeIcon />
          <p>View Repo</p>
        </ActionButton>
      </div>
    </section>
  );
};

export default RepositoryCard;
