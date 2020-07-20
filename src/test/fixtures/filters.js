import moment from 'moment'

const filters = {
    text: '',
    sortBy : 'date',
    startDate:undefined,
    endDate:undefined
}

const altFilters = {
    text: 'Bills',
    sortBy : 'date',
    startDate:moment(0),
    endDate:moment(0).add(3,'days')
}

export {filters,altFilters}