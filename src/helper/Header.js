const getHeader = response => {
  const link = response['link']
  let uri = link.substring(link.lastIndexOf('<') + 1, link.lastIndexOf('>'))
  let url = new URL(uri)
  return {
    total: response['x-wp-total'],
    totalpages: response['x-wp-totalpages'],
    nextPage: parseInt(url.searchParams.get('page')),
    currentPage: parseInt(url.searchParams.get('page')) - 1
  }
}

export default {
  getHeader
}
