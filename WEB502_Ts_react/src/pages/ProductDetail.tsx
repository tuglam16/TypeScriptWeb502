import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ProductDetail: React.FC = () => {
const { id } = useParams<{ id: string }>();
const [product, setProduct] = useState<Product | null>(null);

useEffect(() => {
fetch(`http://localhost:3000/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
}, [id]);

if (!product) return <div className="container mt-4">Đang tải...</div>;

return (
<div className="container mt-4">
    <Link to="/" className="btn btn-secondary mb-3">← Quay lại</Link>
    <div className="card">
    <div className="row g-0">
        <div className="col-md-4">
        <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.title}
        />
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary me-2">Mua ngay</button>
            <button className="btn btn-outline-success">Add cart</button>
        </div>
        </div>
    </div>
    </div>
</div>
);
};

export default ProductDetail;
