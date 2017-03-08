
/** dispatch */
export interface IDispatch {
    ( obj: IReduxActionOnlyType | IReduxAction ): void
}

/** app全状态 */
export interface IReducerAll extends IReducerCounter { }

/** 状态 - Counter  */
export interface IReducerCounter {
    CountState: number
}

/** action - 只包含type */
export interface IReduxActionOnlyType {
    type: symbol
}

/** action - 包含type和data */
export interface IReduxAction extends IReduxActionOnlyType {
    data: any
}

