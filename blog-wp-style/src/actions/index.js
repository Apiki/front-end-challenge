export const RECEIVE_API_BLOG = 'RECEIVE_API_BLOG';
export const REQUEST_API_BLOG = 'REQUEST_API_BLOG';
export const RECEIVE_API_BLOG_ERROR = 'RECEIVE_API_BLOG_ERROR';

// const requestAPI = () => ({
//   type: REQUEST_API_BLOG,
// });
  
// const receiveAPIError = (error) => ({
//   type: RECEIVE_API_BLOG_ERROR,
//   error,
// });

export const receiveAPISuccess = (data) => ({
  type: RECEIVE_API_BLOG,
  content: data,
});

// export function fetchAPI() { // action creator retorna função, possível graças ao redux-thunk
//   return (dispatch) => { // thunk declarado
//     dispatch(requestAPI());
//     return getPrincipal()
//       .then(
//         (dataJson) => dispatch(receiveAPISuccess(dataJson)),
//         (error) => dispatch(receiveAPIError(error)),
//       );
//   };
// }
