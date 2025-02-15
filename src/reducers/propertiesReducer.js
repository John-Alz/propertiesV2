export const propertiesReducer = (state, action) => {

    switch (action.type) {
        case 'set_properties':
            return { ...state, properties: action.payload }
        case 'filter_location':
            return { ...state, filteredProperties: state.properties.filter(item => item.location === action.payload) }
        case 'reset_filters':
            return { ...state, filteredProperties: state.properties }
        default:
            return state;
    }
}
