import React, { useState, useEffect } from "react";
import { Vortex } from 'react-loader-spinner';
import './ProductStyles.css';
import ProductCard from '../components/ProductCard';

const ProductGallery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            const formattedData = data.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                isLike: false  // Use isLike for the like functionality
            }));

            setProducts(formattedData);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFavoriteToggle = (id) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === id ? { ...product, isLike: !product.isLike } : product
            )
        );
    };

    return (
        <>
            {loading ? (
                <div className="loading-container">
                    <Vortex color="#8b1f99" height={70} width={70} />
                </div>
            ) : (
                <div className="product-gallery">
                    <ul className="product-list">
                        {products.map(product => (
                            <ProductCard 
                                key={product.id} 
                                productItems={product}  // Pass the 'product' object
                                onClickLike={handleFavoriteToggle}  // Pass the like toggle handler
                            />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ProductGallery;
