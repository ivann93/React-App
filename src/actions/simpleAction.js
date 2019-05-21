//Ova e action file-ot i tuka vo type pisuvame eden vid ime na akcijata koja ke ja upotrebime vo simpleReducer
//Vo payload go pisuvame rezultatot na akcijata koj go vrakame preku simpleReducer i mozeme da go vidime na UI

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}