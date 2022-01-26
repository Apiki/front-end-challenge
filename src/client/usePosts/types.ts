export type PostRaw = {
  _embedded: {
    'wp:featuredmedia': {
      source_url: string
    }[]
  },
  title: {
    rendered: string
  }
  slug: string
  link: string
  id: number;
}
