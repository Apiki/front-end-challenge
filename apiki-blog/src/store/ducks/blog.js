import BlogService from '../../services/blogService';

/** Actions Types */

export const Types = {
  FIRST_PAGE_FETCHED: 'FIRST_PAGE_FETCHED',
  FETCHING: 'FETCHING',
  ERROR: 'ERROR',
  ADDITIONAL_PAGE_FETCHED: 'ADDITIONAL_PAGE_FETCHED',
};

/** Reducers */

const initialState = {
  isFetching: false,
  blogs: [],
  totalPages: 0,
  errors: [],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SALES_FETCHING:
      return { ...state, isFetching: payload.status };
    case Types.FIRST_PAGE_FETCHED:
      return {
        ...state,
        blogs: [...payload.data],
        totalPages: payload.headers['x-wp-totalpages'],
      };
    case Types.ADDITIONAL_PAGE_FETCHED:
      return { ...state, blogs: [...state.blogs, ...payload] };
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

export const hasErrored = (error = []) => ({
  type: Types.ERROR,
  payload: error,
});

/** Actions Creators */

export const getAllBlogs = (page) => (dispatch) => {
  dispatch(salesFetching(true));

  BlogService.getBlogsByPage(page)
    .then((response) => {
      console.log(response.headers['x-wp-totalpages']);
      response.data.forEach(function (blog) {
        // store the image url in new field to avoid problems access to _embedded['wp:featuredmedia']
        blog.urlImg = blog._embedded['wp:featuredmedia']['0'].source_url;
      });

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

export default blogReducer;
