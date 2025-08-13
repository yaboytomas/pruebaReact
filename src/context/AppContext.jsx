import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  TOGGLE_LOADING: 'TOGGLE_LOADING',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS'
};

// Initial state
const initialState = {
  user: null,
  theme: 'light',
  language: 'es',
  isLoading: false,
  notifications: []
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case ACTIONS.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case ACTIONS.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };
    default:
      return state;
  }
};

// Create contexts
const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// Custom hooks to use the context
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return context;
};

// Action creators
export const appActions = {
  setUser: (user) => ({ type: ACTIONS.SET_USER, payload: user }),
  setTheme: (theme) => ({ type: ACTIONS.SET_THEME, payload: theme }),
  setLanguage: (language) => ({ type: ACTIONS.SET_LANGUAGE, payload: language }),
  toggleLoading: () => ({ type: ACTIONS.TOGGLE_LOADING }),
  setNotifications: (notifications) => ({ type: ACTIONS.SET_NOTIFICATIONS, payload: notifications })
};
