export interface IPaginationControl {
    page: number;
    totalPages: number;
    changePage: (page: number) => void;
}
