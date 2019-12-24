import authReducer from '../../reducers/auth'

test('should set default state', () => {
   const state = authReducer(undefined, { type: '@@INIT' })
   expect(state).toEqual({})
})

test('should set uid for LOGIN', () => {
   const action = {
      type: 'LOGIN',
      uid: 'abc123'
   }
   const state = authReducer({}, action)
   expect(state.uid).toBe('abc123')
})

test('should clear uid for LOGOUT', () => {
   const action = {
      type: 'LOGOUT'
   }
   const state = authReducer({ uid: 'anything' }, action)
   expect(state
      ).toEqual({})
})