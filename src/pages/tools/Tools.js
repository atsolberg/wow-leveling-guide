import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useImmerReducer } from 'use-immer';

// import client from '../../utils/client';
import reducer, { initialState } from './reducer';
import WowIcon from '../../components/icons/wow-icon/WowIcon';

function getItemData() {
  return import('../../db/items/list.json');
}

function Tools() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const { loading, search, suggestions, results } = state;

  function onSearch({ target: { value } }) {
    dispatch({ type: 'search', payload: value });
  }

  // Fetch database data
  useEffect(() => {
    getItemData().then((module) => {
      dispatch({ type: 'items.list', payload: module.default });
      dispatch({ type: 'loaded' });
    });
  }, [dispatch]);

  return (
    <div>
      <h1>
        Tools{' '}
        <WowIcon src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_gear_03.jpg" />
      </h1>
      TODO
      <div>
        <Form.Group controlId="search-field">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            value={search}
            onInput={onSearch}
            disabled={loading}
          />
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((s) => (
                <div key={s.id} className="suggestion">
                  {s.name}
                </div>
              ))}
            </div>
          )}
          <Form.Text className="text-muted">
            Search for anything - quests, items, npc&apos;s...
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="results-field">
          <Form.Label>Results</Form.Label>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: results }} />
          </pre>
        </Form.Group>
      </div>
    </div>
  );
}

export default Tools;
