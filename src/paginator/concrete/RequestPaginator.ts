import { PaginationRequestDto } from "../../client/dto";
import { IRequest } from "../../request";
import { IRequestPaginator } from "../interface";

export class RequestPaginator implements IRequestPaginator {

  constructor(private limit: number = 30) {

  }

  paginate<T extends IRequest>(request: T, limit?: number): PaginationRequestDto<T>[] {

    const limitOverride = !limit ? this.limit : limit;

    const idArray: number[] = Array.from(typeof (request.id!) === 'number' ? [request.id!] : request.id!);

    let totalPages = Math.ceil(idArray.length / limitOverride);

    const pages: number[] = Array.from({ length: totalPages }, (_, i) => i);

    return pages.map((page, index) => {

      let startIndex = index * limitOverride;

      let endIndex = startIndex + limitOverride

      const spliced = idArray.slice(startIndex, endIndex)

      const requestSpliced = { ...request };

      requestSpliced.id = spliced;

      return <PaginationRequestDto<T>>{
        current: page + 1,
        total: pages.length,
        request: requestSpliced
      }
    });
  }
}