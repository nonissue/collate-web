import React, { useReducer } from 'react';
import styles from './songs.module.css';
import Song from '../components/Song';
import Select from '../components/Select';
import { songs } from '../mocks/songs';

/* for select:
select with inline label
https://polaris.shopify.com/components/forms/select#navigation
https://codesandbox.io/s/polaris-inline-select-ze3ho
*/

/*
Select:

- Div: Select Wrapper
  - Select: Select with options (hidden)
  - Div: Select Display Content
    - Span: Label
    - Span: Selected Option
    - Span: Icon


*/

const sortByOptions = [
  { value: 'date', label: 'Date' },
  { value: 'popular', label: 'Popular' },
];

const viewModeOptions = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];

// initial state needs to be the same as the first option provided
const initialState = {
  viewMode: viewModeOptions[0].value,
  sortBy: sortByOptions[0].value,
  sortOrder: 'desc',
};

const ListTypes = {
  changeView: 'CHANGE_VIEW',
  changeSortBy: 'CHANGE_SORT_BY',
  changeSortOrder: 'CHANGE_SORT_ORDER',
};

// types would really help here
function listReducer(state, action) {
  // use action.payload to actually get the result from the select
  switch (action.type) {
    case ListTypes.changeView:
      return { ...state, viewMode: action.payload };
    case ListTypes.changeSortBy:
      return { ...state, sortBy: action.payload };
    case ListTypes.changeSortOrder:
      return { ...state, sortBy: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

const Songs = () => {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const shortList = songs.slice(0, 11);

  console.log(state);

  // gotta be a better pattern for this
  const changeView = viewMode => {
    dispatch({ type: ListTypes.changeView, payload: viewMode });
  };

  const changeSortBy = sortBy => {
    dispatch({ type: ListTypes.changeSortBy, payload: sortBy });
  };

  return (
    <div>
      {/* {state.viewMode} */}
      <div className={styles.songs}>
        <div className={`${styles.controls}`}>
          <Select options={sortByOptions} label="Sort by" onChangeSelect={changeSortBy} />
          <Select options={viewModeOptions} label="View mode" onChangeSelect={changeView} />
        </div>
        {/* <div className={`${styles.grid} ${styles.stack} `}> */}
        <div
          className={`${styles.stack}  ${state.viewMode === 'list' ? styles.list : styles.grid}`}
        >
          {/* <div className={styles.stackException}>Exception but not applied</div>
          <div>No Exception</div>
          <div className={styles.stackException}>Exception</div> */}
          {shortList.map(song => (
            <Song
              key={song.id}
              artist={song.artist.first}
              album={song.album}
              title={song.title}
              id={song.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
