export const query = ` 
query {
  arcteryxCollection {
    items {
      title
      slug
      description {
        json
      }
      price
      gender
      category
      imagesCollection {
        items {
          url
          title
          description
        }
        }
      }
    }
  }

`;
