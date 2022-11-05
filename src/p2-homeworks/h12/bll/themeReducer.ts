const initState = {
    theme: 'some'
};

export type StateType = typeof initState

type ActionThemeType = ReturnType<typeof changeThemeC>

export const themeReducer = (state:StateType = initState, action: ActionThemeType): StateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.themeValue}
        }
        default: return state;
    }
};

export const changeThemeC = (themeValue: string) => ({type: 'CHANGE-THEME', themeValue} as const);
