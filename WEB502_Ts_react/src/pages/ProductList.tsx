import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
id: number;
title: string;
description: string;
image: string;
}

const ProductList: React.FC = () => {
const [products, setProducts] = useState<Product[]>([]);
const [page, setPage] = useState<number>(1);
const [total, setTotal] = useState<number>(0);
const [search, setSearch] = useState<string>("");

const limit = 8;

const fetchProducts = async () => {
const res = await fetch(
    `http://localhost:3000/products?_page=${page}&_limit=${limit}&title_like=${search}`
);
const data = await res.json();
const totalCount = res.headers.get("X-Total-Count"); // json-server tự sinh
setTotal(totalCount ? parseInt(totalCount) : 0);
setProducts(data);
};

useEffect(() => {
fetchProducts();
}, [page, search]);

const totalPages = Math.ceil(total / limit);

return (
<div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container-fluid">
        <a className="navbar-brand " href="#">List Sản Phẩm</a>
        <form
        className="d-flex"
        onSubmit={(e) => {
            e.preventDefault();
            setPage(1);
            fetchProducts();
        }}
        >
        <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-light" type="submit">Tìm</button>
        </form>
    </div>
    </nav>

    <div className="container mt-4">
    <h3 className="text-center mb-4">Danh sách Products</h3>
    <div className="row">
        {products.map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100">
            <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                {item.description?.slice(0, 50)}...
                </p>
                <Link to={`/${item.id}`} className="btn btn-primary me-2">
                Mua ngay
                </Link>
                <button className="btn btn-outline-success">Add cart</button>
            </div>
            </div>
        </div>
        ))}
    </div>

    {/* Pagination */}
    <nav>
        <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, i) => (
            <li
            key={i + 1}
            className={`page-item ${page === i + 1 ? "active" : ""}`}
            >
            <button
                className="page-link"
                onClick={() => setPage(i + 1)}
            >
                {i + 1}
            </button>
            </li>
        ))}
        </ul>
    </nav>
    </div>
</div>
);
};

export default ProductList;
