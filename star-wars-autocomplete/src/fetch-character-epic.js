import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, tap, takeUntil } from 'rxjs/operators';
import { FETCH_CHARACTERS, fetchCharactersFulfilled } from './actions';

const ENDPOINT = 'http://star-wars-characters.glitch.me/api/search/';

const fetchCharactersEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_CHARACTERS), // FETCH_CHARACTERS action come in
    tap(value => console.log('Gonna fetch', value)), // console log
    mergeMap(action => // take the FETCH_CHARACTERS action
      ajax
        .getJSON(ENDPOINT + action.payload.searchTerm) // get json
        .pipe(
          tap(value => console.log(value)), // json come back
          map(response => fetchCharactersFulfilled(response.results)),  // take response and call fetchCharactersFulfilled action creator
          takeUntil(  // keep reading the stream until
            action$.pipe( // cancel previous FETCH_CHARACTERS action
              tap(value => console.log('CANCELLING!', value)),
              ofType(FETCH_CHARACTERS)
            ),
          ),
        ),
    ),
  );
};

export default fetchCharactersEpic; 