import { IBggDto } from "../../dto";
import { IRequest } from "../../request";
import { QueryOptions, ProgressResponseDto } from "../dto";

export interface IProgressCapability<T extends IRequest, R extends IBggDto> {
    progressHandler?: (progress: ProgressResponseDto<R>) => void;
    queryWithProgress(request: T, progressOptions?: QueryOptions, progressHandler?: (progress: ProgressResponseDto<R>) => void): Promise<void>;
  }