import { memo } from "react";
import { PageButton } from "~components/molecules";
import type { IPaginationControl } from "./types";
import { useController } from "./useController";
import "./styles.scss";

export const PaginationControl = memo(function PaginationControl({ page, totalPages, changePage }: IPaginationControl) {
    const {
        isFirstPage,
        isLastPage,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage,
        isPageDisabled,
        pages
    } = useController({ page, totalPages, changePage });

    return (
        <section className="pagination-control">
            <section className="pagination-control__box">
                <PageButton
                    disabled={isFirstPage}
                    onClick={handleClickToFirstPage}
                    icon="CaretDoubleLeftIcon"
                />
                <PageButton
                    disabled={isFirstPage}
                    onClick={handleClickToPrevPage}
                    icon="CaretLeftIcon"
                />
            </section>
            <section className="pagination-control__box pagination-control__box--main">
                {pages.map((item) => (
                    <PageButton
                        key={item}
                        disabled={isPageDisabled(item)}
                        onClick={() => changePage(item)}
                        label={item}
                    />
                ))}
            </section>
            <section className="pagination-control__box">
                <PageButton
                    disabled={isLastPage}
                    onClick={handleClickToNextPage}
                    icon="CaretRightIcon"
                />
                <PageButton
                    disabled={isLastPage}
                    onClick={handleClickToLastPage}
                    icon="CaretDoubleRightIcon"
                />
            </section>
        </section>
    );
});
