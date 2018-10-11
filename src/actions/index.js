import { ADD_SITE, GET_SITES, DELETE_SITE } from './types';
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

export const deleteSite = site => dispatch => {
  ipcRenderer.send('delete', site);
  ipcRenderer.on('site:deleted', (event, siteId) =>{
    dispatch({
      type: DELETE_SITE,
      payload: siteId
    })
  })
}
