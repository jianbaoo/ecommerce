import React from 'react'
import products from '../products';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';

export default function Homescreen() {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(products => (
                    <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={products}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}
