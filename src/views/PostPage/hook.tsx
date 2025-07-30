import { usePostService } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function usePostPageHook(){
     const { slug } = useParams();
  const postService = usePostService();

  const { data, isLoading } = useQuery({
    queryKey: ['get-post-by-slug', slug],
    queryFn: () => postService.getPostBySlug(slug!),
    enabled: !!slug,
  });

  
  const extractTextFromHTML = (html:any) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };


  return{
    data,
    isLoading,
    extractTextFromHTML
  }
}