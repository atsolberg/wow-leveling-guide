import React from 'react';
import { Form } from 'react-bootstrap';
import { useImmerReducer } from 'use-immer';

import client from '../../utils/client';
import reducer, { initialState } from './reducer';
import WowIcon from '../../components/icons/wow-icon/WowIcon';

function Tools() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const { search, results } = state;

  function onSearch({ target: { value } }) {
    dispatch({ type: 'search', payload: value });
    if (value?.length > 2) {
      client({
        endpoint: `https://classicdb.com/opensearch.php?search=${value}`,
      });
    }
  }

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
          <Form.Control type="text" value={search} onInput={onSearch} />
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
