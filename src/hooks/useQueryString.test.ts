import { afterEach, describe, expect, it, vi } from 'vitest';
import useQueryString from './useQueryString';

let mockSearchParams = new URLSearchParams();

vi.mock('react-router-dom', async () => ({
  ...((await vi.importActual('react-router-dom')) as object),
  useSearchParams: () => [
    mockSearchParams,
    (newParams: string | URLSearchParams) => {
      if (typeof newParams === 'string') {
        mockSearchParams = new URLSearchParams(newParams);
      }
    },
  ],
}));

describe('useQueryString 훅 통합 테스트', () => {
  afterEach(() => {
    mockSearchParams = new URLSearchParams();
  });

  it('setParams 테스트', () => {
    const { setParams } = useQueryString();

    setParams('setParams테스트', 'change setParams value');
    expect(mockSearchParams.get('setParams테스트')).toBe(
      'change setParams value'
    );
  });

  it('getParams 테스트', () => {
    const { getParams, setParams } = useQueryString();

    setParams('setParams테스트', 'change setParams value');

    expect(getParams('setParams테스트')).toBe('change setParams value');
  });

  it('addParams 테스트', () => {
    const { addParams } = useQueryString();

    addParams('addParams테스트', 'change setParams value');
    addParams('addParams테스트', 'addParams테스트');

    expect(mockSearchParams.getAll('addParams테스트')).toContain(
      'addParams테스트'
    );
  });

  it('deleteAllParams 테스트', () => {
    const { deleteAllParams } = useQueryString();

    mockSearchParams.set('deleteAllParams 테스트', 'deleteAllParams 테스트');

    expect(mockSearchParams.get('deleteAllParams 테스트')).toBe(
      'deleteAllParams 테스트'
    );

    deleteAllParams();

    expect(mockSearchParams.get('deleteAllParams 테스트')).toBe(null);
  });
});
