import React, { useReducer, Fragment, useState, useEffect } from 'react';
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
  query: '',
  users: [],
  searchData: [],
  filters: {},
};

const reducer = (state, action) => {
  // state : { users, searchData, filters }
  // action : { type : string , payload : Object }

  switch (action.type) {
    case 'init': {
      // action.payload - { users목록 }
      const { users } = action.payload;
      return { ...state, users, searchData: users };
    }
    case 'search': {
      // action.payload { query }
      // state - { users, searchData, filters }
      const { query } = action.payload;
      const { searchData, filters } = state;

      if (!query) {
        return { ...state, users: searchData };
      }

      //search action, item : user, city, address
      const pathFn = item => {
        return Object.values(filters).reduce((acc, fn) => {
          acc.push(fn(item));
          return acc;
        }, []);
      };

      const filteredUsers = searchData.filter(user => {
        return (
          pathFn(user)
            .map(str => str.toLowerCase())
            .join()
            .search(query) !== -1
        );
      });

      return { ...state, users: filteredUsers };
    }
    case 'add.filter': {
      const { name, pathFn } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: pathFn } };
    }
    case 'remove.filter': {
      const { name } = action.payload;
      const { [name]: _, ...rest } = state.filters;
      return { ...state, filters: rest };
    }
    default:
      return state;
  }
};

export default function App() {
  const [query, setQuery] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch({ type: 'init', payload: res.data }));
  }, []);

  const handleChange = e => {
    const query = e.target.value;
    setQuery(query.trim().toLowerCase());
  };

  useEffect(() => {
    //dispatch로 reducer로 넘겨주는 거임, search reducer로 type을 정하고 query를 넘겨주는 거임! 그럼 query 상태가 변할 때 마다 useEffect 실행
    dispatch({ type: 'search', payload: { query } });
  }, [query]);

  const handleReset = () => setQuery('');

  const handleCheckboxChange = pathFn => e => {
    const name = e.target.name;

    if (e.target.checked) {
      // add.filter action
      //setFilters(filterObj => ({ ...filterObj, [name]: pathFn }));
      dispatch({ type: 'add.filter', payload: { name, pathFn } });
      return;
    }
    //remove filter action
    //setFilters(({ [name]: identifier, ...rest }) => rest);
    else dispatch({ type: 'remove.filter', payload: { name } });
  };

  const { users } = state;

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
