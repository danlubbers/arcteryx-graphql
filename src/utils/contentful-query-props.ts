export interface queryProps {
  title: string;
  slug: string;
  price: number;
  gender: string;
  category: string;
  description: {
    json: {
      content: {
        value: string;
      }[];
    };
  };
  imagesCollection: {
    items: imagesCollectionProps[];
  };
}

export interface imagesCollectionProps {
  url: string;
  title: string;
  description: string;
}