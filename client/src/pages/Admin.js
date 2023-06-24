import React, { useEffect, useState } from 'react';
import {getFavrs, removeFavrs} from '../http/favouriteAPI';
import {getCourseHistory} from '../http/historyAPI';
import { observer } from 'mobx-react-lite';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Admin = observer(() => {
  const [favr, setFavr] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favrs = await getFavrs();
      setFavr(favrs);

      const courseHistory = await getCourseHistory();
      setHistory(courseHistory);

    };
    fetchData();
  }, []);


  const removeFavorite = (id) => {
    removeFavrs(id).then(()=> {
      const fetchData = async () => {
        const data = await getFavrs();
        setFavr(data);
      };
      fetchData();
    })
  }

  return (
<>
<Container>
    <div style={{ marginTop: '100px', color: '#000000'  }}>
      <h2 style={{marginLeft: '50px'}}>Избранное:</h2>
    </div>
<div style={{width: '1000'}} >
  {/* {
    favr.map(fav => {
      return (
          <div key={fav.id} className="list-group-item" style={{background: '#e2e2e2', marginLeft: '300px', width: '800px'}}>
              <Card className="col" border="primary"
                    style={{background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', marginTop: '20px', borderRadius: '20px'}}>
                  <Card.Header style={{color: '#fff'}}>{fav.favourite && fav.favourite.name}   </Card.Header>
                  <Card.Body>
                      <Card.Text style={{color: '#82aa4d'}}>
                          Рассрочка: {fav.favourite && fav.favourite.price}
                      </Card.Text>
                      <Card.Text style={{color: '#fff'}}>
                          {fav.favourite && fav.favourite.prod}
                      </Card.Text>
                      <Button style={{marginLeft: '20px'}} variant="btn btn-danger"
                              onClick={()=>removeFavorite(fav.id)}
                      >
                          Убрать из избранного</Button>
                  </Card.Body>
              </Card>
          </div>
      )
  })
  } */}


<Row xs={1} md={3} my={2} className="g-4">
{
    favr.map(fav => {
      return (
        <Col>
          <div key={fav.id} className="list-group-item" style={{background: '#e2e2e2',marginRight: '5px', width: '400px', height: '130'}}>
              <Card className="col"  border="primary"
                    style={{background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', marginTop: '20px', borderRadius: '20px'}}>
                  <Card.Header style={{color: '#fff'}}>{fav.favourite && fav.favourite.name}   </Card.Header>
                  <Card.Body>
                      <Card.Text style={{color: '#82aa4d'}}>
                          Рассрочка: {fav.favourite && fav.favourite.price}
                      </Card.Text>
                      <Card.Text style={{color: '#fff'}}>
                          {fav.favourite && fav.favourite.prod}
                      </Card.Text>
                      <Button style={{marginLeft: '70px'}} variant="btn btn-danger"
                              onClick={()=>removeFavorite(fav.id)}
                      >
                          Убрать из избранного</Button>
                  </Card.Body>
              </Card>
          </div>
          </Col>
      )
  })
  }
</Row>


  {/* {



    favr.map(fav => {
      return(
          <div key={fav.id} style={{display:"flex", justifyContent:'center'}}
          ><div>
            <p>{fav.favourite && fav.favourite.name}</p>
            <p
                onClick={()=>removeFavorite(fav.id)}

            >{fav.id}</p>
          </div>
          </div>
      )
    })
  } */}

<br/>
  <br/>
  <br/>


  <div style={{  color: '#000000' }}>
  <h2 style={{marginLeft: '50px'}}>История посещения курсов:</h2>
  </div>



  <Row xs={1} md={2} my={2} className="g-4">
{
    history.map(history => {
      return (
        <Col>
          <div key={history.id} className="list-group-item" style={{background: '#e2e2e2',marginRight: '5px', width: '550px', height: '130'}}>
              <Card className="col"  border="primary"
                    style={{background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', marginTop: '20px', borderRadius: '20px'}}>
                  <Card.Header style={{color: '#fff'}}>{history.history && history.history.name}   </Card.Header>
                  <Card.Body>
                      <Card.Text style={{color: '#fff'}}>
                          Рассрочка: {history.history && history.history.price}
                      </Card.Text>
                      <Card.Text style={{color: '#82aa4d'}}>
                          Время посещения: {history.history && history.history_date}
                      </Card.Text>
                      <Button style={{marginLeft: '10px'}} variant="btn btn-primary"
                        href={history.history && history.history.kr_info}
                              
                      >
                          Страница курса</Button>
                  </Card.Body>
              </Card>
          </div>
          </Col>
      )
  })
  }
</Row>



  {/* {
    history.map(history => {
      return (
        <Row xs={1} md={2}>
          
          <div  key={history.id} className="list-group-item" style={{background: '#e2e2e2', marginLeft: '300px', width: '800px'}}>
            
          <Col >
              <Card   className="card-list" border="primary"
                    style={{background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', marginTop: '20px', borderRadius: '20px'}}>
                  <Card.Header style={{color: '#fff'}}>{history.history && history.history.name}   </Card.Header>
                  <Card.Body>
                      <Card.Text style={{color: '#82aa4d'}}>
                          Время посещения: {history.history && history.history_date}
                      </Card.Text>
                      <Button style={{marginLeft: '20px'}} variant="btn btn-primary"
                              
                      >
                          Страница курса</Button>
                  </Card.Body>
              </Card>
              
              </Col>
          </div>
          
          </Row>
      )
  })
  } */}

{/* 




  {
    history.map(history => {
      return(
          <div key={history.id} style={{display:"flex", justifyContent:'center'}}
          ><div>
            <p>{history.history && history.history.name}</p>
            <p>{history.history && history.history_date}</p>
            <p>{history.id}</p>
          </div>
          </div>
      )
    })
  } */}
</div>
</Container>
</>
  )
});

export default Admin;