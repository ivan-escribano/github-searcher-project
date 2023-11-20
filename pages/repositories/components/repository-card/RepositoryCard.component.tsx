import React from 'react';

import Image from 'next/image';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import ActionButton from '@/components/action-button/ActionButton.component';
import { PROGRAMMING_LANGUAGE_COLORS, REPO_CARD_DATE_FORMAT } from './RepositoryCard.config';
import { RepositoryCardProps } from './RepositoryCard.interface';
import styles from './RepositoryCard.module.scss';
import { formatDateCard } from './RepositoryCard.utils';
import RepositoryTopic from './sub-components/repositoryTopic/RepositoryTopic.component';

type LanguageKey = keyof typeof PROGRAMMING_LANGUAGE_COLORS;

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const { owner, full_name, description, topics, language, stargazers_count, updated_at, created_at, html_url } = repository;

  const updatedAtDateFormatted = formatDateCard(updated_at, REPO_CARD_DATE_FORMAT);
  const createdAtDateFormatted = formatDateCard(created_at, REPO_CARD_DATE_FORMAT);

  const languageColor =
    language && PROGRAMMING_LANGUAGE_COLORS[language as LanguageKey]
      ? PROGRAMMING_LANGUAGE_COLORS[language as LanguageKey]
      : PROGRAMMING_LANGUAGE_COLORS.Default;

  const handleRedirectionGithubRepo = () => {
    window.open(html_url, '_blank');
  };
  return (
    <section className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageBox}>
          <Image
            src={owner.avatar_url}
            alt="Owner Avatar"
            width={250}
            height={250}
            className={styles.imageBox__image}
            onClick={handleRedirectionGithubRepo}
          />
        </div>

        <div className={styles.cardBody}>
          <h2 className={styles.cardBody__fullName} onClick={handleRedirectionGithubRepo}>
            @ {full_name}
          </h2>
          <p className={styles.cardBody__description}>{description}</p>

          <div className={styles.topics}>
            {topics.map((topic, index) => (
              <RepositoryTopic key={`${index}-${topic}`} topic={topic} />
            ))}
          </div>

          <div className={styles.info}>
            <div className={styles.language}>
              <span style={{ backgroundColor: languageColor }} className={styles.language__color}></span>
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
      </div>

      <div className={styles.actions}>
        <ActionButton onClick={handleRedirectionGithubRepo}>
          <RemoveRedEyeIcon />
          <p>View Repo</p>
        </ActionButton>
      </div>
    </section>
  );
};

export default RepositoryCard;
