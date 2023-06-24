import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import ListGroup from 'react-bootstrap/ListGroup';
import { getShops } from '../../http/shopAPI';
import { Container, Nav, NavLink } from 'react-bootstrap';
import styles from "../../assets/styles/Sidebar.module.css";
import CoursesAll1 from './CoursesAll1';

const TypeBar1 = observer(({ shops1 }) => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getShops();
            setShops(data);
        };
        fetchData();
    }, []);

    const [showProgrammingCourses, setShowProgrammingCourses] = useState(false);
    const handleProgrammingClick = () => {
        setShowProgrammingCourses(true);
    };



    return (


        <section >
            <section className={styles.sidebar} style={{ marginTop: '155px', backgroundColor: '#181616', borderRadius: '20px' }}>
                <div className={styles.title}>Направления обучения</div>
                <nav>
                    <ul className={styles.menu}>
                        

                            <div  onClick={handleProgrammingClick} class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Программирование
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Машинное обучение
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Аналитика
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Маркетинг
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Дизайн
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Управление
                                </label>
                            </div>
                        
                    </ul>
                    {/* <CoursesAll1 showProgrammingCourses={showProgrammingCourses} shops1={shops1} /> */}
                </nav>

            </section>
            <section className={styles.sidebarzn} style={{ marginTop: '15px', backgroundColor: '#181616', borderRadius: '20px' }}>
                <div className={styles.title}>Знания на выходе</div>
                <nav>
                    <ul className={styles.menu}>
                        
                            <div  onClick={handleProgrammingClick} class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Junior
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Middle
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Middle+
                                </label>
                            </div>

                        
                    </ul>
                </nav>

            </section>
            <section className={styles.sidebartype} style={{ marginTop: '15px', backgroundColor: '#181616', borderRadius: '20px' }}>
                <div className={styles.title}>Тип обучения</div>
                <nav>
                    <ul className={styles.menu}>
                        
                            <div  onClick={handleProgrammingClick} class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Профессия
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Курс
                                </label>
                            </div>

                        
                    </ul>
                </nav>

            </section>
            <section className={styles.sidebarplatf} style={{ marginTop: '15px', backgroundColor: '#181616', borderRadius: '20px' }}>
                <div className={styles.title}>Онлайн-платформа</div>
                <nav>
                    <ul className={styles.menu}>
                        
                            <div  onClick={handleProgrammingClick} class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Skillbox
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Geekbrains
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Хекслет
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Stepik
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Udemy
                                </label>
                            </div>

                        
                    </ul>
                </nav>

            </section>
            <section className={styles.sidebartype} style={{ marginTop: '15px', backgroundColor: '#181616', borderRadius: '20px' }}>
                <div className={styles.title}>Рассрочка</div>
                <nav>
                    <ul className={styles.menu}>
                        
                            <div  onClick={handleProgrammingClick} class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    есть
                                </label>
                            </div>
                            <div  class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    нет
                                </label>
                            </div>

                        
                    </ul>
                </nav>

            </section>
        </section>



    );
});

export default TypeBar1;