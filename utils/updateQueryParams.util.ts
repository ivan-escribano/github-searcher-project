import { NextRouter } from 'next/router';

export const updateQueryParameter = (router: NextRouter, paramName: string, paramValue: string) => {
  const newQuery = { ...router.query, [paramName]: paramValue };
  router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
};
