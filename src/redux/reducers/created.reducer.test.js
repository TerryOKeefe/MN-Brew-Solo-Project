import createdReducer from './created.reducer';

// test 'SET_CREATED'
// test default

describe('CREATED REDUCER TESTS', () => {
    // test SET_CREATED
    test('SET_CREATED', () => {
        const action = {
            type: 'SET_CREATED',
            payload: {
                id : 1
            }
        }
        const state = [];
        expect(createdReducer(state, action)).toEqual({id : 1})
    })

    // test default
    test('Default', () => {
        const action = {
            type: 'default',
        }
        const state = [];
        expect(createdReducer(state, action)).toEqual([])
    })
})