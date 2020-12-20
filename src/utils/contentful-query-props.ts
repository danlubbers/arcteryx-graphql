export interface queryProps {
  title: string;
  slug: string;
  price: number;
  description: {
    json: {
      content: {
        value: string;
      }[];
    };
  };
  imagesCollection: {
    items: {
      url: string;
      title: string;
      description: string;
    }[];
  };
}