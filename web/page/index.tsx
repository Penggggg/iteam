
import { RouterState } from 'react-router';

export default {
    path: '/',
    getComponent: ( nextstate: RouterState , cb: Function ) => {
         System.import('./home.page').then( module => { 
             cb( null, module.default )}
         ).catch(( err: Error ) => showMessage( err, './home.page' ))
    },
}

function showMessage( err: Error, pageName: string ): void {
    return console.error(`Error in download ${pageName}: ${err}`)
}

