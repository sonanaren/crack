import { gql } from '@apollo/client';

const getBikesQuery = gql`
  query GetBikesList {
    bikes {
      _id
      model_code
      model_name
      engine {
        cc
      }
      images {
        image
      }
      fuel_consumptions {
        mileage
      }
    }
  }
`;

export { getBikesQuery };
