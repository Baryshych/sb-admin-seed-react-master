/**
 * Created by madow_000 on 20.03.2017.
 */
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as Bool,
} from 'graphql';

const QuestType = new ObjectType({
  name: 'Quest',
  fields: {
    id: { type: new NonNull(ID) },
    target: { type: StringType },
    type: { type: StringType },
    completed: { type: StringType },
  },
});

export default QuestType;
