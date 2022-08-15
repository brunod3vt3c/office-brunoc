export interface Repos {
  _id: string;
  _createdAt: string;
  name: string;
  title: string;
  type: string;
  description: string;
  message: string;
  link: string;
  image: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

