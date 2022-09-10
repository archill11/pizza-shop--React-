export type Item = {
    imageUrl: string,
    title: string,
    price: number[],
    compound: string,
    id: string,
    types: number[],
    sizes: number[],
    category: number,
    rating: number
}

export enum status {
    LOADING= 'loading',
    SUCCESS= 'success',
    ERROR= 'error',
}

export interface productsSliceState { items: Item[], status: status} 
