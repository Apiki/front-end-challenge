import { useCallback, useMemo } from "react";
import { INITIAL_PAGE, PAGE_ONE } from "./constants";
import type { IPaginationControl } from "./types";

export const useController = ({ page, totalPages, changePage }: IPaginationControl) => {
    const isFirstPage = page === INITIAL_PAGE;
    const isLastPage = page === totalPages;
    const handleClickToFirstPage = useCallback(() => changePage(INITIAL_PAGE), [changePage]);
    const handleClickToPrevPage = useCallback(() => changePage(page - PAGE_ONE), [changePage, page]);
    const handleClickToNextPage = useCallback(() => changePage(page + PAGE_ONE), [changePage, page]);
    const handleClickToLastPage = useCallback(() => changePage(totalPages), [changePage, totalPages]);
    const isPageDisabled = useCallback(
        (currentPage: number) => {
            return (
                currentPage === page ||
                (isFirstPage && currentPage === INITIAL_PAGE) ||
                (isLastPage && currentPage === totalPages)
            );
        },
        [page, isFirstPage, isLastPage, totalPages]
    );

    const pages = useMemo(() => {
        const maxVisible = 5;
        let start = Math.max(INITIAL_PAGE, page - 2);
        const end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start < maxVisible - 1) {
            start = Math.max(INITIAL_PAGE, end - maxVisible + 1);
        }

        const visiblePages: number[] = [];
        for (let i = start; i <= end; i++) {
            visiblePages.push(i);
        }

        return visiblePages;
    }, [page, totalPages]);

    return {
        isFirstPage,
        isLastPage,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage,
        isPageDisabled,
        pages
    };
};
