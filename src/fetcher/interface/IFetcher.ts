export interface IFetcher<Q, D> {
    doFetch(query: Q): Promise<D>;
}

