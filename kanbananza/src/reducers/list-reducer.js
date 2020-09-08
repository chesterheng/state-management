import { lists as defaultLists } from '../normalized-state';
import { CARD_CREATE, LIST_CREATE } from '../actions/card-actions';
import { addIdToChildren, addEntity } from './_utilities';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CARD_CREATE) {
    const { cardId, listId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === LIST_CREATE) {
    const { list, listId } = action.payload;
    return addEntity(lists, list, listId);
  }

  return lists;
};

export default listsReducer;