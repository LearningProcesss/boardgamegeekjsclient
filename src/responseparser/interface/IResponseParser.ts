export interface IResponseParser<Q, D> {
    options: any;
  
    parseResponse(response: Q): Promise<D>;
}