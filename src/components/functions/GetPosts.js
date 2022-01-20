import Api from './Api';

function GetPosts(url){
    return Api.get(url);
}
export default GetPosts