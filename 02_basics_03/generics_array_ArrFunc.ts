function getSearchProduct<T>(products: T[]):T{
   return  products[3]
}

// coverting above func into arrow function

const getMoreProducts = <T>(products : T[]):T => {
    return products[3]
}
export {}