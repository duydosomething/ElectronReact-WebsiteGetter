import { ADD_SITE, FETCH_SITES, DELETE_SITE } from './types';
import electron from 'electron';

const { ipcRenderer } = 'electron';

export const insertSite = site => dispatch => {
  ipcRenderer.send('insert', site);
  ipcRenderer.on('site:added', (event, siteId) => {
    dispatch({
      type: ADD_SITE,
      payload: siteId
    })
  })
}

export const deleteSite = siteId => {
  return dispatch => {
    ipcRenderer.send('delete', siteId);
    ipcRenderer.on('site:deleted', (event, sites) =>{
      dispatch({
        type: DELETE_SITE,
        payload: sites
      })
    })
  }

}

export const fetchSites = () => {
  return dispatch =>{
    ipcRenderer.send('fetchSites');
    ipcRenderer.on('fetched:sites', (event, sites) =>{
      dispatch({
        type: FETCH_SITES,
        payload: sites
      })
    })
  }

}
