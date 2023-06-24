import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
// import { Context } from '../../index';
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';
import {CardGroup, Col, Container, Form, InputGroup, Nav, Row, Tab} from 'react-bootstrap';
import {getShops1, getShops10, getShops5, getShops6, getShops7, getShops8, getShops9} from '../http/shopAPI';
import {getShops2} from '../http/shopAPI';
import {getShops3} from '../http/shopAPI';
import {getShops4} from '../http/shopAPI';

import {createFavr} from '../http/favouriteAPI';
// import { getFavrs } from '../../http/favouriteAPI';
// import styles from "../../assets/styles/Sidebar.module.css";
import 'animate.css';
import {useSelector} from "react-redux";
import {Context} from "../index";
import {addCourseToHistory} from "../http/historyAPI";
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import TypeBar1 from "../../components/CoursesAll/TypeBar1"

const CoursesList = observer(() => {
    const { user } = useContext(Context)
    const [shops, setShops] = useState([]);
    // const [filteredShops, setFilteredShops] = useState([]);
    const storeFilters = useSelector((state) => state.courses.filters);

    // const { id } = useParams();

    const [price, setPrice] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const data1 = await getShops1();
            const data2 = await getShops2();
            const data3 = await getShops3();
            const data4 = await getShops4();
            const data5 = await getShops5();
            const data6 = await getShops6();
            const data7 = await getShops7();
            const data8 = await getShops8();
            const data9 = await getShops9();
            const data10 = await getShops10();
            let data = [...data1,...data2,...data3,...data4,...data5,...data6,...data7,...data8,...data9,...data10]
            data= data.map((el, i) =>({
                ...el,
                id:i
            }))
            setShops(data);
            // setFilteredShops(data);
        };
        fetchData();
    }, []);

    // const [contacts, setContacts] = useState(shops1, shops2, shops3, shops4);
    const [search, setSearch] = useState('');

    const addToFavorite = (data) => {

        createFavr(data).then(data => {
            console.log('data')
            console.log(data)
        })

    }

    const getFilteredData = () => {
        const filteredShopWithSearch = shops.filter((shop) => {
            const lowerSearch  = search.toLowerCase();
            if(lowerSearch === '') return  true
            const pattern = new RegExp(lowerSearch, "i");
            const match = shop.title.toLowerCase().match(pattern);
            return  !!match
        })

        const useFilter = filteredShopWithSearch.filter((shop)=> {
            let isMatch = true;
            Object.entries(storeFilters).map(([filterName,filterProperty])=> {
                if(filterName === 'typesFilter'){
                    const filterPropertyWithTrue1 = Object.entries(filterProperty).filter(([key,value])=>value === true ).map(el => el[0])
                    const obj1 = {
                        'Программирование': 'programming',
                        'Машинное обучение': 'machineLearning',
                        'Аналитика': 'analytics',
                        'Маркетинг': 'marketing',
                        'Дизайн': 'design',
                        'Управление': 'management',
                    }
                    if(filterPropertyWithTrue1.length) {
                        const include = filterPropertyWithTrue1.includes(obj1[shop.tema])
                        isMatch = include
                    }
                }
            })
            return isMatch
        }).filter((shop)=> {
            let isMatch = true;
            Object.entries(storeFilters).map(([filterName,filterProperty])=> {
                if(filterName === 'outputKnowledgeFilter') {
                    const filterPropertyWithTrue = Object.entries(filterProperty).filter(([key,value])=>value === true ).map(el => el[0])
                    const obj = {
                        'Junior': 'junior',
                        'Middle': 'middle',
                        'Middle+': 'middlePlus',
                    }
                    if(filterPropertyWithTrue.length) {
                        const include = filterPropertyWithTrue.includes(obj[shop.zn_vix])
                        isMatch = include
                    }
                }

            })
            return isMatch
        }).filter((shop)=> {
            let isMatch = true;
            Object.entries(storeFilters).map(([filterName,filterProperty])=> {
                if(filterName === 'learningType') {
                    const filterPropertyWithTrue = Object.entries(filterProperty).filter(([key,value])=>value === true ).map(el => el[0])
                    const obj = {
                        'Профессия': 'Profession',
                        'Курс': 'course',
                    }
                    if(filterPropertyWithTrue.length) {
                        const include = filterPropertyWithTrue.includes(obj[shop.types])
                        isMatch = include
                    }
                }

            })
            return isMatch
        }).filter((shop)=> {
            let isMatch = true;
            Object.entries(storeFilters).map(([filterName,filterProperty])=> {
                if(filterName === 'onlinePlatforms') {
                    const filterPropertyWithTrue = Object.entries(filterProperty).filter(([key,value])=>value === true ).map(el => el[0])
                    const obj = {
                        'Skillbox': 'skillBox',
                        'GeekBrains': 'geekBrains',
                        'Хекслет': 'hacklet',
                        'Stepik': 'stepik',
                        'Udemy': 'udemy',
                    }
                    if(filterPropertyWithTrue.length) {
                        const include = filterPropertyWithTrue.includes(obj[shop.platform])
                        isMatch = include
                    }
                }

            })
            return isMatch
        }).filter((shop)=> {
            let isMatch = true;
            Object.entries(storeFilters).map(([filterName,filterProperty])=> {
                if(filterName === 'Installment') {
                    const filterPropertyWithTrue = Object.entries(filterProperty).filter(([key,value])=>value === true ).map(el => el[0])
                    const obj = {
                        'нет': 'exist',
                    }
                    if(filterPropertyWithTrue.length) {
                        const include = filterPropertyWithTrue.includes(obj[shop.rasr])
                        isMatch = include
                    }
                }

            })
            return isMatch
        })

        return useFilter
    }

    const addToHistory = (data) => {
        console.log('4545445')
        if(user.isAuth){
            console.log('67567567567567')
            addCourseToHistory(data)
        }

    }


    return (
        <section centered>
            <div className="list-group " style={{marginTop: '80px'}}>

                <div class="container">
                    <div class="row">
                        <Form style={{marginLeft: '20px', width: '300px', borderRadius: '20px', borderColor: '#742d91'}}>
                            <InputGroup className='my-3' >

                                <Form.Control 
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Найти по названию'
                                />
                            </InputGroup>
                        </Form>
                        <div style={{ marginTop: '23px', marginLeft: '20px' }} class="col col-lg-3">
                            <div style={{ color: '#000000' }}>НАЙДЕНО КУРСОВ: {getFilteredData().length}</div>
                        </div>

                        
                        {/* style={{border: '#742d91'}} */}
                    </div>
                </div>

                

                {/* <div>{getFilteredData().length} TOTAL</div> */}
                {
                    getFilteredData()
                        .map((shop, i) => {
                        return (
                            <div key={shop.id} className="list-group-item" style={{background: '#e2e2e2', border: '0px'}}>
                                <Card className="card-list" border="primary" 
                                      style={{background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -55.91%, rgba(74, 47, 189, 1) 111.58%)', borderRadius: '20px'}}>
                                    <Card.Header style={{color: '#fff'}}>  <h5>{shop.title}   </h5>      <div className="d-flex justify-content-end" style={{display: 'inline-block',  right:'0', marginTop: '-30px'}}>{shop.platform}</div>    </Card.Header>
                                    {/* <p className="d-flex justify-content-end" style={{display: 'inline-block',  right:'0'}}>{shop.platform}</p>   */}
                                    <Card.Body>
                                        <Card.Text style={{color: '#fff'}}>
                                            {shop.info}
                                        </Card.Text>
                                        <Card.Text style={{color: '#82aa4d'}}>
                                            Рассрочка: {shop.price}
                                        </Card.Text>
                                        <Card.Text style={{color: '#fff'}}>
                                            {shop.dlit}
                                        </Card.Text>
                                        <Button
                                            onClick={()=> addToHistory(shop)}
                                            href={shop.silka}
                                            variant="primary">Перейти на сайт</Button>
                                        <Button style={{marginLeft: '20px'}} variant="btn btn-success"
                                                onClick={()=>addToFavorite(shop)}
                                        >
                                            Добавить в избранное</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
            </div>
        </section>


    );
});

export default CoursesList;