export const propertiesReducer = (state, action) => {
    switch (action.type) {
        case 'set_properties':
            return { ...state, properties: action.payload }
        case 'Norway':
            return { ...state, properties: state.properties.filter(item => item.location === action.payload) }
        default:
            return state;
    }
}
