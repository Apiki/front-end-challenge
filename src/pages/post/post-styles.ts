import styled from "styled-components";

export const StyledPost = styled.div`
    text-align: left;
    padding: 30px 20px;
    margin: 0 auto;
    max-width: 800px;

    figure {
        margin: 24px auto;
        width: 100%;

        img {
            max-width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    h2 {
        margin: 20px 0;
    }

    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

        li {
            display: list-item;
            text-align: -webkit-match-parent;
            margin: 15px 0;

            &::marker {
                unicode-bidi: isolate;
                font-variant-numeric: tabular-nums;
                text-transform: none;
                text-indent: 0px !important;
                text-align: start !important;
                text-align-last: start !important;
            }
        }
    }

    p {
        line-height: 1.6em;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .wp-block-group__inner-container {
        color: rgba(12, 17, 43, 0.8);
        word-break: break-word;
    }

    table {
        display: table;
        border-collapse: separate;
        box-sizing: border-box;
        text-indent: initial;
        border-spacing: 2px;
        border-color: grey;
    }

    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }

    td {
        display: table-cell;
        vertical-align: inherit;
    }

    iframe {
        width: 100%;
        height: 428px;
    }
`;
