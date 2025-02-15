export const propertiesReducer = (state, action) => {

    console.log(action.payload);


    switch (action.type) {
        case 'set_properties':
            return { ...state, properties: action.payload, filteredProperties: action.payload }
        case 'filter_location':
            return { ...state, filteredProperties: action.payload == 'All Stays' ? state.properties : state.properties.filter(item => item.location === action.payload) }
        case 'filter_rooms':
            return { ...state, filteredProperties: action.payload == 'All' ? state.properties : state.filteredProperties.filter(item => item.capacity.bedroom == action.payload) }
        default:
            return state;
    }
}
