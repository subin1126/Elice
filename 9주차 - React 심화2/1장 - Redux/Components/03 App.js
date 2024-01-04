import React, { Fragment, useState, useEffect } from 'react';
import { createStore } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import UserTable from './UserTable';

const checkboxes = [
  {
    id: 'filter-username',
    name: 'filter-username',
    pathFn: user => user.username,
    label: 'Filter by Username',
  },

  {
    id: 'filter-city',
    name: 'filter-city',
    pathFn: user => user.address.city,
    label: 'Filter by City',
  },

  {
    id: 'filter-company',
    name: 'filter-company',
    pathFn: user => user.company.name,
    label: 'Filter by Company',
  },
];

const initialState = {
  filters: {},
  searchData: [],
  users: [],
};

const filterFn = (filters, query) => item => {
  const filterItem = (filterObj, data) =>
    Object.values(filterObj).reduce((acc, fn) => {
      acc.push(fn(data));
      return acc;
    }, []);

  return (
    filterItem(filters, item)
      .map(str => str.toLowerCase())
      .join()
      .search(query) !== -1
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      return {
        ...state,
        searchData: action.payload.initData, //payload에 어떤 데이터를 넘길지에 따라 payload.~~할 필요가 있음
        users: action.payload.initData,
      };
    }

    case 'search': {
      const { searchData, filters } = state;
      // query = action.payload 니까 query를 객체로 받아주자 왜?
      const { query } = action.payload;

      if (!query) {
        return { ...state, users: searchData };
      }

      const filteredUsers = searchData.filter(filterFn(filters, query));
      return { ...state, users: filteredUsers };
    }

    case 'add.filter': {
      const { name, pathFn } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: pathFn } };
    }

    case 'remove.filter': {
      const { [action.payload.name]: _, ...rest } = state.filters;
      return { ...state, filters: rest };
    }

    default:
      return state;
  }
};

// action creator를 생성하세요. reducer를 보고 정하자
const initializeSearchData = initData => ({
  type: 'init',
  payload: { initData },
});

const search = query => ({
  type: 'search',
  payload: { query },
});

const addFilter = (name, pathFn) => ({
  type: 'add.filter',
  payload: { name, pathFn },
});

const removeFilter = name => ({
  type: 'remove.filter',
  payload: { name },
});

// redux store를 생성합니다.
const store = createStore(reducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <UserTableApp />
    </Provider>
  );
}

// function usersSelector(state) {
//   return state.users;
// }

function UserTableApp() {
  const dispatch = useDispatch();
  // useDispatch 를 사용해 dispatch를 가져오세요.
  // useSelector를 사용해 users 정보를 가져오세요.
  const [query, setQuery] = useState('');
  //const [state, dispatch] = useReducer(reducer, initialState);

  //const users = useSelector(state => state.users)
  const users = useSelector(state => state.users);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
      // action creator를 활용하도록 리팩토링하세요.
      .then(data => dispatch(initializeSearchData(data)));
    //.then((data) => dispatch({ type: "init", payload: data })); //dispatch에 바로 action object를 넘기면 재사용성이 떨어지고 가독성이 떨어짐 그래서 action Creator로 빼서 만들자!
  }, []);

  const handleReset = () => setQuery('');

  const handleChange = e => {
    const query = e.target.value;
    setQuery(query);
  };

  useEffect(() => {
    // action creator를 활용하도록 리팩토링하세요.
    dispatch(search(query));
    //dispatch({ type: "search", payload: query });
  }, [query]);

  const handleCheckboxChange = pathFn => e => {
    const name = e.target.name;
    if (e.target.checked)
      // action creator를 활용하도록 리팩토링하세요.
      //dispatch({ type: "add.filter", payload: { name, pathFn } });
      dispatch(addFilter(name, pathFn));
    // action creator를 활용하도록 리팩토링하세요.
    else dispatch(removeFilter(name)); //dispatch({ type: "remove.filter", payload: name });
    dispatch(search(query)); //dispatch({ type: "search" payload: query })
  };

  //const { users } = state;

  return (
    <Container>
      <div>
        <label htmlFor="search-query">Search</label>
        <input
          value={query}
          onChange={handleChange}
          id="search-query"
          type="text"
          name="search-query"
        />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <CheckboxController>
        {checkboxes.map(({ id, name, pathFn, label }) => (
          <Fragment key={id}>
            <input
              type="checkbox"
              onChange={handleCheckboxChange(pathFn)}
              id={id}
              name={name}
            />
            <label htmlFor={id}>{label}</label>
          </Fragment>
        ))}
      </CheckboxController>

      <UserTable users={users} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
`;

const CheckboxController = styled.div`
  padding: 8px 0;

  input:not(:first-of-type) {
    margin-left: 20px;
  }
`;
