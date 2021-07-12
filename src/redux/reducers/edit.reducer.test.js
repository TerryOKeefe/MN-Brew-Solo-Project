

import editReducer from './edit.reducer';

// test EDIT_RECIPE
// test EDIT_ONCHANGE
// test default

describe('EDIT REDUCER TESTS', () => {
    // test EDIT_RECIPE
    test('EDIT_RECIPE', () => {
        const action = {
            type: 'EDIT_RECIPE',
            payload: {
                recipe_id: 1
            }
        }
        const state = {};
        expect(editReducer(state, action)).toEqual({recipe_id: 1})
    })

    // test EDIT_ONCHANGE
    test('EDIT_ONCHANGE', () => {
        const action = {
            type: 'EDIT_ONCHANGE',
            payload: {
                ...state,
                recipe_id: 2
            }
        }
        const state = {};
        expect(editReducer(state, action)).toEqual({state, recipe_id: 2})
    })
})