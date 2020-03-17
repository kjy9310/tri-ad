import * as React from "react";
import { Card, CardProps } from './Card';

interface ProductsProps {
    products: CardProps[] | []
}

export const reducer = (state: CardProps[], id:number|null): CardProps[] => {
    return state ? state.map((product)=>{
        if (product.id === id){
            product.votes++
        }
        return product
    }).sort((a, b)=>b.votes-a.votes) : []
}

export const Products: React.FC<ProductsProps> =
    ({ products:seedProducts }) => {
        const [products, setProducts] = React.useReducer(reducer,seedProducts);
        
        React.useEffect(() => {
            setProducts(null);
        }, []);
        
        const vote = (id:number) => {
            setProducts(id)
        }
        
        return <>
            <div className="title">
                <h1>Popular Products</h1>
            </div>
            <hr/>
            {products && products.map((product:CardProps, index:number)=>{
                return <Card key={index} {...product} onClickCallback={vote}/>
            })}
        </>
    }