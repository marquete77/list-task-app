import {createReducer, on} from '@ngrx/store';
import {Todo} from "./models/todo.model";
import * as actions from "./todo.actions";

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('vencer a thanos'),
  new Todo('comprar traje de Ironman'),
  new Todo('robar escucdo de capitan america'),
];

export const todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo
      }
    })
  }),

  on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(actions.toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo
      }
    })
  }),

  on(actions.limpiarTodos, (state,) => state.filter( todo => !todo.completado)),

);
