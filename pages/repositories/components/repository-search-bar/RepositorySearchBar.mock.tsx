const mockSearchTerm = jest.fn();

jest.mock('../../Repositories.context', () => ({
  useRepositoriesContext: () => ({
    setSearchTerm: mockSearchTerm,
  }),
}));

export { mockSearchTerm };
