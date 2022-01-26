export type PostRaw = {
  _embedded: {
    'wp:featuredmedia': {
      source_url: string
    }[]
  },
  title: {
    rendered: string
  }
  link: {
    slug: string
  }
  id: number;
}
