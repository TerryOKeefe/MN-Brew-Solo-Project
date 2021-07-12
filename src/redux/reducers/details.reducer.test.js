import detailsReducer from './details.reducer';

// test SET_DETAILS
// test default

describe('DETAILS REDUCER TESTS', () => {
    // test SET_DETAILS
    test('SET_DETAILS', () => {
        const action = {
            type: 'SET_DETAILS',
            payload: {
                brew_id: 1
            }
        }
        const state = [];
        expect(detailsReducer(state, action)).toEqual({brew_id: 1});
    })

    // test default
    test('Default', () => {
        const action = {
            type: 'default',
        }
        const state = [];
        expect(detailsReducer(state, action)).toEqual([])
    })
})