import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

// Mock de los objetos req y res
const mockReq = () => ({
  headers: {},
});

const mockRes = () => ({
  writeHead: jest.fn(),
  end: jest.fn(),
});

export const createMockContext = (query: ParsedUrlQuery) => {
  return {
    req: mockReq(),
    res: mockRes(),
    query,
    resolvedUrl: '/',
  } as unknown as GetServerSidePropsContext;
};
