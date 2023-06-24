import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import ListGroup from 'react-bootstrap/ListGroup';
import { getShops } from '../../http/shopAPI';

const TypeBar = observer(() => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops();
      setShops(data);
    };
    fetchData();
  }, []);
  return (
    <div className="list-group " style={{ marginTop: '90px' }}>
      {
        

            <ListGroup >

              <ListGroup.Item >Программирование</ListGroup.Item>
              <ListGroup.Item>Аналитика</ListGroup.Item>
              <ListGroup.Item>Дизайн</ListGroup.Item>
              <ListGroup.Item>Финансы</ListGroup.Item>
              <ListGroup.Item>Программирование</ListGroup.Item>
            </ListGroup>
            

          
      }
    </div>
  );
});

export default TypeBar;