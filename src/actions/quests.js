
/**
 * Created by madow_000 on 20.03.2017.
 */
export function getQuestsList() {
  return (dispatch, getState, {graphqlRequest}) => {
    graphqlRequest('{quests{id,name}}')
      .then(data => data.data)
      .then(data => {
        dispatch({
          type: GET_QUESTS_LIST,
          data: data.quests ? data.quests : []
        })
      })
  };
}
