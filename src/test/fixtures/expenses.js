import moment from 'moment'

export default [{
    id:'1',
    description:'Chew',
    note:'',
    amount:50,
    createdAt:0
},
{
    id:'2',
    description:'Gum',
    note:'',
    amount:100,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'3',
    description:'Gumistan',
    note:'',
    amount:150,
    createdAt:moment(0).add(4,'days').valueOf()
}]