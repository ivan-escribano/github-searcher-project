import { NextRouter } from 'next/router';

export const updateQueryParameter = (router: NextRouter, params: Record<string, string>) => {
  const newQuery = { ...router.query, ...params };
  router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
};
