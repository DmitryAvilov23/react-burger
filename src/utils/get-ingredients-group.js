export const getIngredientsGroup = (ingredients, groupID) => {
    return ingredients.filter(ingredient => ingredient.type === groupID);
}