export interface Post {
  id: string;
  title: {
    rendered: string;
  };
  slug: string;
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  yoast_head_json: {
    og_image: [
      {
        url: string;
      }
    ];
  };
  _embedded: {
    'wp:featuredmedia': [
      {
        source_url: string;
      }
    ];
  };
}
