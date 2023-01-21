import { PaginationRequestDto } from "../../client/dto";
import { IRequest } from "../../request";

export interface IRequestPaginator {
    paginate<T extends IRequest>(request: T, limit?: number): PaginationRequestDto<T>[];
}