/**
 * Created by madow_000 on 20.03.2017.
 */
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';

const UserType = new ObjectType({
  name: 'Event',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: StringType },
    quests: { type: new List },
  },
});

export default UserType;
