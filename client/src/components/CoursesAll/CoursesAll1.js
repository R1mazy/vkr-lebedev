import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { CardGroup, Col, Container, Form, InputGroup, Nav, Row, Tab } from 'react-bootstrap';
import { getShops1 } from '../../http/shopAPI';
import { getShops2 } from '../../http/shopAPI';
import { getShops3 } from '../../http/shopAPI';
import { getShops4 } from '../../http/shopAPI';

import { createFavr } from '../../http/favouriteAPI';
import { getFavrs } from '../../http/favouriteAPI';
import styles from "../../assets/styles/Sidebar.module.css";
import 'animate.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import TypeBar1 from "../../components/CoursesAll/TypeBar1"

const CoursesAll1 = observer(({ showProgrammingCourses, show, onHide }) => {
  const [shops1, setShops1] = useState([]);
  const [shops2, setShops2] = useState([]);
  const [shops3, setShops3] = useState([]);
  const [shops4, setShops4] = useState([]);

  // const { id } = useParams();
  // const [favr, setFavr] = useState({ // useState - стандартный метод для определения начального состояния
  //   id: id, // идентификатор из параметров
  //   name: "", // имя в начальном состоянии не заполняется
  //   kr_info: "",
  //   prod: "",
  //   price:"",
  //   favrId:""
  // });



  const [price, setPrice] = useState(0)

  const addFavr = () => {
    const formData = new FormData()
    formData.append('name', shops1.title)
    formData.append('kr_info', shops1.info)
    formData.append('prod', shops1.dlit)
    formData.append('price', shops1.price)
    // formData.append('favrId', shops1.info)
    createFavr(formData).then(data => onHide())
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops1();
      setShops1(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops2();
      setShops2(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops3();
      setShops3(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops4();
      setShops4(data);
    };
    fetchData();
  }, []);



  const [contacts, setContacts] = useState(shops1, shops2, shops3, shops4);
  const [search, setSearch] = useState('');




  return (


    <section show={show}

      onHide={onHide}
      centered>
      <div className="list-group " style={{ marginTop: '80px' }}>

        <div class="container">
          <div class="row">
            <Form style={{ marginLeft: '20px', width: '300px', borderRadius: '20px' }}>
              <InputGroup className='my-3'>

                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Найти по названию'
                />
              </InputGroup>
            </Form>
            <div style={{ marginTop: '20px', marginLeft: '20px' }} class="col col-lg-2">
              Платные
            </div>
            <div style={{ marginTop: '20px', marginLeft: '-20px' }} class="col col-lg-2">
              Бесплатные
            </div>
          </div>
        </div>

        {showProgrammingCourses === 'true' && (
          shops1.filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.title.toLowerCase().includes(search);
          }).map((shop1, i) => {
            return (
              <div key={shop1.info} className="list-group-item" style={{ background: '#201e1e' }}>
                <Card className="card-list" border="primary" style={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
                  <Card.Header style={{ color: '#fff' }}>{shop1.title}    <Card.Header style={{ color: '#fff', marginLeft: '200px' }}>{shop1.title}    </Card.Header></Card.Header>
                  <Card.Body>
                    <Card.Text style={{ color: '#fff' }}>
                      {shop1.info}
                    </Card.Text>
                    <Card.Text style={{ color: '#a1722b' }}>
                      Рассрочка: {shop1.price}
                    </Card.Text>
                    <Card.Text style={{ color: '#fff' }}>
                      {shop1.dlit}
                    </Card.Text>
                    <Button href={shop1.silka} variant="primary">Перейти на сайт</Button>
                    <Button style={{ marginLeft: '20px' }} variant="outline-success" onClick={addFavr}>Добавить в избранное</Button>
                  </Card.Body>
                </Card>


              </div>



            )
          }))}

        {shops2.filter((item) => {
          return search.toLowerCase() === ''
            ? item
            : item.title.toLowerCase().includes(search);
        }).map((shop2, i) => {
          return (
            <div className="list-group-item" style={{ background: '#201e1e' }}>
              <Card className="card-list" border="primary" style={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
                <Card.Header style={{ color: '#fff' }}>
                  <div class="row">
                    <div class="col">
                      {shop2.title}
                    </div>
                    <div class="col-2">
                    Geekbrains
                    </div>
                  </div>
                      </Card.Header>
              <Card.Body>
                <Card.Text style={{ color: '#fff' }}>
                  {shop2.info}
                </Card.Text>
                <Card.Text style={{ color: '#a1722b' }}>
                  Рассрочка: {shop2.price}
                </Card.Text>
                <Card.Text style={{ color: '#fff' }}>
                  {shop2.dlit}
                </Card.Text>
                <Button href={shop2.silka} variant="primary">Перейти на сайт</Button>
                <Button style={{ marginLeft: '20px' }} variant="outline-success" onClick={addFavr}>Добавить в избранное</Button>
              </Card.Body>
            </Card>


            </div>

      )
        })
        }

      {shops3.filter((item) => {
        return search.toLowerCase() === ''
          ? item
          : item.title.toLowerCase().includes(search);
      }).map((shop3, i) => {
        return (
          <div className="list-group-item" style={{ background: '#201e1e' }}>
            <Card className="card-list" border="primary" style={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
              <Card.Header style={{ color: '#fff' }}>{shop3.title}</Card.Header>
              <Card.Body>
                <Card.Text style={{ color: '#fff' }}>
                  {shop3.info}
                </Card.Text>
                <Card.Text style={{ color: '#a1722b' }}>
                  Рассрочка: {shop3.price}
                </Card.Text>
                <Card.Text style={{ color: '#fff' }}>
                  {shop3.dlit}
                </Card.Text>
                <Button href={shop3.silka} variant="primary">Перейти на сайт</Button>
                <Button style={{ marginLeft: '20px' }} variant="outline-success" onClick={addFavr}>Добавить в избранное</Button>
              </Card.Body>
            </Card>


          </div>

        )
      })

      }

      {shops4.filter((item) => {
        return search.toLowerCase() === ''
          ? item
          : item.title.toLowerCase().includes(search);
      }).map((shop4, i) => {
        return (
          <div className="list-group-item" style={{ background: '#201e1e' }}>
            <Card className="card-list" border="primary" style={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)' }}>
              <Card.Header style={{ color: '#fff' }}>{shop4.title}</Card.Header>
              <Card.Body>
                <Card.Text style={{ color: '#fff' }}>
                  {shop4.info}
                </Card.Text>
                <Card.Text style={{ color: '#a1722b' }}>
                  Рассрочка: {shop4.price}
                </Card.Text>
                <Card.Text style={{ color: '#fff' }}>
                  {shop4.dlit}
                </Card.Text>
                <Button href={shop4.silka} variant="primary">Перейти на сайт</Button>
                <Button style={{ marginLeft: '20px' }} variant="outline-success" onClick={addFavr}>Добавить в избранное</Button>
              </Card.Body>
            </Card>


          </div>

        )
      })

      }
    </div>
    </section >





  );
});

export default CoursesAll1;