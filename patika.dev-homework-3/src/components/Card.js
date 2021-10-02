import React, { useEffect, useState } from 'react';
import '../sass/Card.scss';
import CardStar from './CardStar';
import { AiFillDelete } from 'react-icons/ai';
import CardModal from './CardModal';



export default function Card(props) {
  const [responseData, setResponseData] = useState([]);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    setResponseData(props.data);
  }, [props.data]);

  //card deleting process
  const handleDelete = (id) => {
    props.deleteCard(id);
  };
  //Open modal and pass data
  const showModal = (data) => {
    const showModal = { show: true, modalData: data };
    setModalData(showModal);
  };
 
  const closeModal = () => {
    const showModal = { show: false, modalData: {} };
    setModalData(showModal);
  };
  
  const handleStar = (id, star) => {
    const moveId = responseData.findIndex((data) => data.id === id);
    const movie = responseData[moveId];
    movie.star = star;
    props.handleEdit(movie);
  };

  return (
    props.data.length > 0 && (
      <div className="card-container">
        {responseData.map((data) => (
          <div className="card" key={data.id}>
            <div className="card-image">
              <button className="delete" onClick={() => handleDelete(data.id)}>
                <AiFillDelete className="delete-icon" size="2rem" color="red" />
              </button>

              <img
                onClick={() => showModal(data)}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
                alt={'album'}
              />
              <div className="card-star">
                <CardStar
                  star={data.star}
                  id={data.id}
                  handleStar={handleStar}
                />
              </div>
            </div>
            <h2 className="card-title">{data.title || data.name }</h2>
          </div>
        ))}
        <CardModal
          handleDelete={handleDelete}
          handleEdit={props.handleEdit}
          modal={modalData}
          alert={props.alert}
          closeModal={closeModal}
          theme={props.theme}
        />
      </div>
    )
  );
}
