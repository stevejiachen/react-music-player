import { database } from '../firebase/firebase';

export const SET_PLAYING = 'SET_PLAYING';
export const setPlaying = (playing) => ({
  type: SET_PLAYING,
  playing
});

export const startSetPlaying = (nodeId) => {
  console.log('fetching new song success');
  return (dispatch) => {
    return database.ref(`${nodeId}/now_playing`).once('value').then((snapshot) => {
      const playing = {
        ...snapshot.val()
      }
      dispatch(setPlaying(playing));
    })
  };
};
