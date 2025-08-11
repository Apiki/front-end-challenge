export type Card = {
  id: number;
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
      alt_text: string;
      media_details: {
        height: number;
        width: number;
      };
    }[];
  };
  title: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  excerpt? : {
    rendered : string;
  }
  date? : Date;
  link: string;
};