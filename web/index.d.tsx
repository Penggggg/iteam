/**global environment  */
declare var ENV: string

/**webpack2 import */
declare var System: {
    import: ( filename: string ) => Promise<any>
}
