import React from 'react';
import { Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import { FullProductInformation } from '../pages/ProductDetailsPage';
import { useAppDispatch } from '../redux/hooks';
import { addProductToCart } from '../redux/cart-products-slice';

export const PRODUCT_ITEMS = [
    {
        item: 'Naruto Figurine',
        id: 'naruto-figurine',
        series: 'Konohagakure',
        price: 20.99,
        description:
            "A figurine of Naruto Uzumaki. The anime's main character.",
    },
    {
        item: 'Sasuke Figurine',
        id: 'sasuke-figurine',
        series: 'Konohagakure',
        price: 15.99,
        description:
            "A figurine of Sasuke Uchiha. The anime's main antagonist.",
    },
    {
        item: 'Sakura Figurine',
        id: 'sakura-figurine',
        series: 'Konohagakure',
        price: 11.99,
        description: "A figurine of Sakura Haruno. She's really strong.",
    },
    {
        item: 'Gaara Figurine',
        id: 'gaara-figurine',
        series: 'Sunagakure',
        price: 20.99,
        description: 'A figurine of Gaara. He is the Kazekage.',
    },
    {
        item: 'Temari Figurine',
        id: 'temari-figurine',
        series: 'Sunagakure',
        price: 15.99,
        description: 'A figurine of Temari, sister of Gaara.',
    },
];

const AllProducts = () => {
    const dispatch = useAppDispatch();

    function handleAddToCart(item: FullProductInformation) {
        dispatch(addProductToCart(item));
    }

    const productDataRows = PRODUCT_ITEMS.map(
        (product: FullProductInformation, index) => {
            return (
                <tr key={product.id}>
                    <td>{product.item}</td>
                    <td>{product.series}</td>
                    <td>${product.price}</td>
                    <td>
                        <a
                            className="btn btn-primary"
                            href={`/products/${product.id}`}
                        >
                            Details
                        </a>
                    </td>
                    <td>
                        <Button
                            className="btn btn-primary"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to cart
                        </Button>
                    </td>
                </tr>
            );
        }
    );

    const table = (
        <Table responsive className="table-striped">
            <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Series</th>
                    <th scope="col">Price</th>
                    <th scope="col">View Details</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>{productDataRows}</tbody>
        </Table>
    );
    return (
        <div>
            <Card className="card align-items-center">
                <CardHeader className="d-flex">
                    <h3 className="card-title mb-0 flex-grow-1 text-uppercase text-primary">
                        All Products
                    </h3>
                </CardHeader>
                <CardBody className="p-0">{table}</CardBody>
            </Card>
        </div>
    );
};

export default AllProducts;
