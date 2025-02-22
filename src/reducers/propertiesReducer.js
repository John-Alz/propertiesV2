export const propertiesReducer = (state, action) => {

    console.log(action.payload);


    switch (action.type) {
        case 'set_properties':
            return { ...state, properties: action.payload, filteredProperties: action.payload }
        case 'filter_location':
            return { ...state, filteredByCountry: action.payload }
        case 'filter_rooms':
            return { ...state, filteredByBedrooms: action.payload }
        case 'filter_host':
            return { ...state, filteredByHost: action.payload }
        default:
            return state;
    }
}
