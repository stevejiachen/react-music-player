// Expenses Reducer
import { SET_PLAYING } from '../actions/playingActions';

const playingReducerDefaultState = {
  // name:'steve',
  // email:'steveguojiachen@gmail.com',
  // birthday:'1992-10-20',
  // address: '43 farnham street'
};

export default (state = playingReducerDefaultState, action) => {
    switch(action.type) {
      case SET_PLAYING:
        return {
          ...action.playing
        }
      default:
        return state

    }
};
