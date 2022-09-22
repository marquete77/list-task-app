import {ActionReducerMap} from "@ngrx/store";
import {Todo} from "./todos/models/todo.model";
import {todoReducer} from "./todos/todo.reducer";
import {filtrosReducer} from "./filtros/filtro.reducer";
import {filtrosValidos} from "./filtros/filtro.actions";


export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos,
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtrosReducer,
}
