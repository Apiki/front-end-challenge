import BlogService from '../../services/blogService';

/** Actions Types */

export const Types = {
  FIRST_PAGE_FETCHED: 'FIRST_PAGE_FETCHED',
  POST_FETCHED: 'POST_FETCHED',
  FETCHING: 'FETCHING',
  ERROR: 'ERROR',
  ADDITIONAL_PAGE_FETCHED: 'ADDITIONAL_PAGE_FETCHED',
};

/** Reducers */

const initialState = {
  isFetching: true,
  blogs: [],
  totalPages: 0,
  post: [],
  errors: [],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.FETCHING:
      return { ...state, isFetching: payload.status };
    case Types.FIRST_PAGE_FETCHED:
      return {
        ...state,
        blogs: [...payload.data],
        totalPages: payload.headers['x-wp-totalpages'],
      };
    case Types.ADDITIONAL_PAGE_FETCHED:
      return { ...state, blogs: [...state.blogs, ...payload] };
    case Types.POST_FETCHED:
      return { ...state, post: [...payload] };
    case Types.ERROR:
      return {
        ...state,
        errors: [...state.errors, payload],
      };
    default:
      return state;
  }
};

/** Actions */

export const salesFetching = (status) => ({
  type: Types.FETCHING,
  payload: {
    status,
  },
});

export const firstPageFetched = (payload) => ({
  type: Types.FIRST_PAGE_FETCHED,
  payload,
});

export const additionalPageFetched = (payload) => ({
  type: Types.ADDITIONAL_PAGE_FETCHED,
  payload,
});

export const postFetched = (payload) => ({
  type: Types.POST_FETCHED,
  payload,
});

export const hasErrored = (error = []) => ({
  type: Types.ERROR,
  payload: error,
});

/** Actions Creators */

export const getAllBlogs = (page) => (dispatch) => {
  dispatch(salesFetching(true));

  BlogService.getBlogsByPage(page)
    .then((response) => {
      console.log(response);
      if (page === 1) {
        // first page will overwrite the blog object in reducer
        dispatch(firstPageFetched(response));
        dispatch(salesFetching(false));
      } else {
        // others page will add news pages to the blog object in reducer
        dispatch(additionalPageFetched(response.data));
        dispatch(salesFetching(false));
      }
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export const getOnePost = (slug) => (dispatch) => {
  dispatch(salesFetching(true));
  BlogService.getPostBySlug(slug).then((response) => {
    dispatch(postFetched(response.data));
    dispatch(salesFetching(false));
  });
};

export default blogReducer;
