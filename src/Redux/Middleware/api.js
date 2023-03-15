import axios from 'axios'
import { API_BASE } from '../Constants/api'
import { fetchFailed, fetchRequested, fetchSucceeded } from "../Actions/api";
import * as TYPE from "../Constants/types";

const apiMiddleware = store => next => action => {
    if (next) next(action);

    const { type, payload } = action;

    const token = JSON.parse(localStorage.getItem("user"))

    if (type === TYPE.API) {
        const {
            url,
            data,
            request = fetchRequested,
            success = fetchSucceeded,
            error = fetchFailed,
            method = 'get',
            hideLoader,
        } = payload;
        if (!hideLoader)
            store.dispatch(request({ payload }));

        return axios({
            baseURL: API_BASE, method, url, data, headers: { "Authorization": `Bearer ${token}` }
        }).then(res => {
            store.dispatch(success(res.data));
            store.dispatch(fetchSucceeded())
            return Promise.resolve(res.data);
        }).catch(err => {
            store.dispatch(error(err.response.data));
            store.dispatch(fetchFailed())
            return Promise.reject(err.response.data);
        });
    }
}
export default apiMiddleware;