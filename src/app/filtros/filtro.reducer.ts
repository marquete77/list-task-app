import {Action, createReducer, on} from "@ngrx/store";
import {filtrosValidos, setFiltro} from "./filtro.actions";


export const initialState: filtrosValidos = 'todos';

export const filtrosReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (_state, {filtro}) => filtro )
)
