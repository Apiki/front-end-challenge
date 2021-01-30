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
  blogs: [{ title: 'deja la' }],
  errors: [],
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SALES_FETCHING:
      return { ...state, isFetching: payload.status };
    case Types.FIRST_PAGE_FETCHED:
      return { ...state, blogs: [...payload] };
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
      response.data.forEach(function(blog){
        blog.urlImg = blog._embedded['wp:featuredmedia']['0'].source_url;
       });

      if (page === 1) {
        dispatch(firstPageFetched(response.data));
        dispatch(salesFetching(false));
      } else {
        dispatch(additionalPageFetched(response.data));
        dispatch(salesFetching(false));
      }
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default blogReducer;
