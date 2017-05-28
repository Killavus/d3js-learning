import { curry } from 'ramda'

export default curry((label, value) => ({ [label]: value }))