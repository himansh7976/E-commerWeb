import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardSection.css"
import { CartAdd } from '../../Redux/Features/Cartslice';
import { useDispatch, useSelector } from 'react-redux';


function CardSection() {

    const [data, setdata] = useState([]);



    useEffect(() => {
        const api = async () => {
            let res = await fetch('https://fakestoreapi.com/products');
            // console.log(res)
            let jsn = await res.json();
            console.log(jsn);
            setdata(jsn)

        }
        api();

    }, [])
    console.log(data)

    const dispatch = useDispatch();
    const CartItems = useSelector((state) =>
        state.Cart
    )

    const Addtocart = (item) => {
        dispatch(CartAdd(item))
    }

    const generateQty = (productid) => {
        const productItems = CartItems.find((i) =>
            i.id === productid)
        return productItems ? productItems.quantity : 0;

    }



    return (
        <div className='card-main-compo'>

            {

                data.map((item, index) => (
                    <Card key={index} Card style={{ width: '18rem', margin: '5px' }}>

                        <Card.Img variant="top" src={item.image} style={{ height: '16rem' }} />
                        <Card.Body>
                            <Card.Text>
                                Rs
                                {item.price} </Card.Text>


                            <Card.Title> {item.title} </Card.Title> <br /><br />
                            <Card.Text>
                                selected:{generateQty(item.id)}

                            </Card.Text>
                            <Button variant="primary" onClick={() => Addtocart(item)} >Add TO Cart   </Button>
                            <Button variant="danger" style={{ margin: '20px' }} >Remove</Button>{' '}
                        </Card.Body>
                    </Card>

                ))



            }
        </div >





    )
}
export default CardSection;