import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
// import { Context } from '../../index';
import ListGroup from 'react-bootstrap/ListGroup';
import { getShops } from '../http/shopAPI';
// import { Container, Nav, NavLink } from 'react-bootstrap';
import styles from "../assets/styles/Sidebar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../store/actions/actions";


const TypeBar = observer(({ shops1 }) => {
  const dispatch = useDispatch();
  const storeFilters = useSelector((state) => state.courses.filters);
  const handleCheckboxClick = (filterName, filterProperty) => {

    dispatch(setFilter({
      ...storeFilters,
      [filterName]:{
        ...storeFilters[filterName],
        [filterProperty]: !storeFilters[filterName][filterProperty]
      }
    }))
  };

  const handleProgrammingClick= () =>{

  }
  return (


      <section >
        <section className={styles.sidebar} style={{ marginTop: '90px', backgroundColor: '#370c7e', borderRadius: '20px' }}>
          <div className={styles.title}>Направления обучения</div>
          <nav>
            <ul className={styles.menu}>


              <div class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('typesFilter','programming')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault">

                </input>
                <label
                    class="form-check-label"
                    for="flexCheckDefault"
                >
                  Программирование
                </label>
              </div>
              <div  class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('typesFilter','machineLearning')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault">
                </input>
                <label
                    class="form-check-label"
                    for="flexCheckDefault">
                  Машинное обучение
                </label>
              </div>
              <div  class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('typesFilter','analytics')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Аналитика
                </label>
              </div>
              <div  class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('typesFilter','marketing')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Маркетинг
                </label>
              </div>
              <div  class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('typesFilter','design')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Дизайн
                </label>
              </div>
              <div  class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('typesFilter','management')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Управление
                </label>
              </div>

            </ul>
            {/* <CoursesAll1 showProgrammingCourses={showProgrammingCourses} shops1={shops1} /> */}
          </nav>

        </section>
        <section className={styles.sidebarzn} style={{ marginTop: '15px', backgroundColor: '#370c7e', borderRadius: '20px' }}>
          <div className={styles.title}>Знания на выходе</div>
          <nav>
            <ul className={styles.menu}>

              <div class="form-check"
              >
                <input
                    onClick={()=>handleCheckboxClick('outputKnowledgeFilter','junior')}
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Junior
                </label>
              </div>
              <div  class="form-check">
                <input
                    onClick={()=>handleCheckboxClick('outputKnowledgeFilter','middle')}

                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Middle
                </label>
              </div>
              <div  class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('outputKnowledgeFilter','middlePlus')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Middle+
                </label>
              </div>


            </ul>
          </nav>

        </section>
        <section className={styles.sidebartype} style={{ marginTop: '15px', backgroundColor: '#370c7e', borderRadius: '20px' }}>
          <div className={styles.title}>Тип обучения</div>
          <nav>
            <ul className={styles.menu}>

              <div class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('learningType','Profession')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Профессия
                </label>
              </div>
              <div  class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('learningType','course')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Курс
                </label>
              </div>


            </ul>
          </nav>

        </section>
        <section className={styles.sidebarplatf} style={{ marginTop: '15px', backgroundColor: '#370c7e', borderRadius: '20px' }}>
          <div className={styles.title}>Онлайн-платформа</div>
          <nav>
            <ul className={styles.menu}>

              <div class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('onlinePlatforms','skillBox')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Skillbox
                </label>
              </div>
              <div  class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('onlinePlatforms','geekBrains')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Geekbrains
                </label>
              </div>
              <div  class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('onlinePlatforms','hacklet')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Хекслет
                </label>
              </div>
              <div  class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('onlinePlatforms','stepik')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Stepik
                </label>
              </div>
              <div  class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('onlinePlatforms','udemy')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Udemy
                </label>
              </div>


            </ul>
          </nav>

        </section>
        <section className={styles.sidebartyperasr} style={{ marginTop: '15px', backgroundColor: '#370c7e', borderRadius: '20px' }}>
          <div className={styles.title}>Рассрочка</div>
          <nav>
            <ul className={styles.menu}>
              <div  class="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={()=>handleCheckboxClick('Installment','exist')}
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  отсутствует
                </label>
              </div>


            </ul>
          </nav>

        </section>
      </section>



  );
});

export default TypeBar;

// #300fc2