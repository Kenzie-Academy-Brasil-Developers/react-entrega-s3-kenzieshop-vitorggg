//açao: funcao adicionar carrinho,
// que recebe o produto selecionado no carrinho,
// receebe o prod selecionado no carrinho
import { ADD_CART, SUB_CART } from "./actionsType";

export const addCart = (prod) => ({
  type: ADD_CART,
  prod,
});

export const subCart = (item) => ({
  type: SUB_CART,
  item,
});
