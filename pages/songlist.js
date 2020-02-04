import React, { useReducer } from 'react';
import { ViewMajorMonotone, SortMinor } from '@shopify/polaris-icons';
import styles from './songlist.module.css';
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
  { value: 'grid', label: 'Grid' },
  { value: 'list', label: 'List' },
];

// initial state needs to be the same as the first option provided
const initialState = {
  viewMode: viewModeOptions[0].value,
  sortBy: sortByOptions[0].value,
  sortOrder: 'desc',
};

const ListTypes = {
  changeView: 'VIEW_CHANGED',
  changeSortBy: 'SORT_BY_CHANGED',
  changeSortOrder: 'SORT_ORDER_CHANGED',
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
  const shortList = songs.slice(0, 21);

  // eslint-disable-next-line no-console
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
      <div className={styles.songs}>
        <div className={`${styles.controls}`}>
          <Select
            options={sortByOptions}
            label="Sort by"
            onChangeSelect={changeSortBy}
            Icon={SortMinor}
          />
          <Select
            options={viewModeOptions}
            label="View mode"
            onChangeSelect={changeView}
            Icon={ViewMajorMonotone}
          />
        </div>
        <div
          className={`${styles.content}  ${state.viewMode === 'list' ? styles.list : styles.grid}`}
        >
          {shortList.map(song => (
            <div className={styles['content-item']} key={song.id}>
              <Song artist={song.artist.first} album={song.album} title={song.title} id={song.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
