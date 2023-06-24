import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { CardGroup, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { getShops1 } from '../../http/shopAPI';
import 'animate.css';

const CoursesAll = observer(() => {
    const [shops1, setShops1] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getShops1();
            setShops1(data);
        };
        fetchData();
    }, []);

    


    return (

        <section>
      <div className="list-group " style={{ marginTop: '80px' }}>
        {
          shops1.map((shop, i) => {
            return (
              <div className="list-group-item" style={{ background: '#121212' }}>
                <Card className="card-list" border="primary" style={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
                  <Card.Header style={{ color: '#fff' }}>{shop.title}</Card.Header>
                  <Card.Body>
                    <Card.Text style={{ color: '#fff' }}>
                      {shop.info}
                    </Card.Text>
                    <Card.Text style={{ color: '#a1722b' }}>
                      Рассрочка: от {shop.price}
                    </Card.Text>
                    <Card.Text style={{ color: '#fff' }}>
                      Длительность курса: {shop.dlit}
                    </Card.Text>
                    <Button href={shop.silka} variant="primary">Перейти на сайт</Button>
                  </Card.Body>
                </Card>


              </div>

            )
          })
        }
      </div>
    </section>





    );
});

export default CoursesAll;