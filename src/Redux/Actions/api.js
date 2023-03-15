import * as TYPE from "../Constants/types"

export const fetchRequested = props => ({
    type: TYPE.API_REQUEST,
    ...props
})

export const fetchSucceeded = data => ({
    type: TYPE.API_SUCCESS,
    payload: { data }
})

export const fetchFailed = err => ({
    type: TYPE.API_ERROR,
    payload: { err }
})