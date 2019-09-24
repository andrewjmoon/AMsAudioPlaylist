import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Pagination from 'react-hooks-paginator';

export default () => {
  const pageLimit = 5;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([{ src: {} }]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://openwhyd.org/styles_of_omega/playlist/0?format=json`
    )
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  // const [items, setItems] = useState([{ src: {} }]);
  /*
  const fetchItems = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://openwhyd.org/styles_of_omega?format=json`
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
*/
  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div className="Body">
      
        <Link to="/">Home</Link>
      
      <div>
        {currentData.map(data => (
          <ul key={data.src.id}>
            <li>{data.name}</li>
            <img src={data.img} alt="" width="50" height="50" />
            <ReactPlayer url={data.src.id} />

          </ul>
        ))}
      </div>
      <Pagination
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};