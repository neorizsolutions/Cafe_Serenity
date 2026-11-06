import assert from 'node:assert/strict';
import test from 'node:test';
import { getMenuCollection } from './collections.ts';

test('separates sweets from savouries without changing the existing snack category', () => {
  for (const id of ['kesari', 'sukhiyan', 'kozhukatta', 'ela-ada']) {
    assert.equal(getMenuCollection({ id, category: 'snacks' }), 'sweets');
  }
  for (const id of ['vada', 'egg-puffs', 'samosa', 'pazham-pori']) {
    assert.equal(getMenuCollection({ id, category: 'snacks' }), 'savouries');
  }
});

test('all biriyani varieties use the meal collection', () => {
  assert.equal(getMenuCollection({ id: 'malabar-biriyani', category: 'biriyani' }), 'biriyani');
  assert.equal(getMenuCollection({ id: 'hyderabadi-biriyani', category: 'biriyani' }), 'biriyani');
});
