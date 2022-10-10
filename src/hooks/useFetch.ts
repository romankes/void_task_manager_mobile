import {Ui, uiSelectors} from '@/bus/ui';
import {RootState} from '@/store/rootReducer';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

type TBaseParams = {
  page: number;
  per_page: number;
};

type TSelectors = {
  getCurrentPage: (state: RootState) => number;
  getHasMore: (state: RootState) => boolean;
};

type TArgs<P> = {
  loader: Ui.FormName;

  fetcher: (params: (P & TBaseParams) | P) => any;
  selectors: TSelectors;
  params: P;

  per_page?: number;

  hasPagination?: boolean;
};

export const useFetch = <P>({
  fetcher,
  loader,
  params,
  selectors,
  per_page = 20,
  hasPagination = false,
}: TArgs<P>) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(uiSelectors.getLoading(loader));

  const [refreshing, setRefreshing] = useState(false);

  const currentPage = useSelector(selectors.getCurrentPage);
  const hasMore = useSelector(selectors.getHasMore);

  const onBootstrap = useCallback(
    (page: number) => {
      dispatch(
        fetcher(
          hasPagination
            ? {
                ...params,
                page,
                per_page,
              }
            : params,
        ),
      );
    },
    [params, per_page, hasPagination],
  );

  useEffect(() => {
    onBootstrap(1);
  }, [onBootstrap]);

  const onLoad = useCallback(() => {
    if (hasMore) {
      onBootstrap(currentPage + 1);
    }
  }, [onBootstrap, currentPage, hasMore]);

  const onRefresh = useCallback(() => {
    onBootstrap(1);
    setRefreshing(true);
  }, [onBootstrap]);

  useEffect(() => {
    if (!isLoading && refreshing) {
      setRefreshing(false);
    }
  }, [isLoading, refreshing]);

  return {onLoad, onRefresh, refreshing, isLoading};
};
