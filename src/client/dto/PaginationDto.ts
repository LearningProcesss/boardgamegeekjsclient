export type PaginationRequestDto<T> = {
    current: number;
    total: number;
    request: T;
}

export type ProgressResponseDto<T> = {
    current: number;
    total: number;
    data: T[];
}