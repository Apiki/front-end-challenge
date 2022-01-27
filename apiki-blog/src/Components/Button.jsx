export default function Button(props) {
  
  return <button type="button" 
  onClick={ () => props.setPage(props.page + 1) }
  disabled={ props.page >= props.headers ? true : false }
> 
Mais notícias 
</button>
}
