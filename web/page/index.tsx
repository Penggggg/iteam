

export default {
    path: '/',
    getComponent: ( nextstate, cb ) => {
         System.import('./home.page').then( module => { 
             cb( null, module.default )}
         ).catch( err => showMessage( err, './home.page' ))
    },
}

function showMessage( err, pageName: string ): void {
    return console.error(`Error in download ${pageName}: ${err}`)
}

