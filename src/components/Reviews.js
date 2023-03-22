import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/service-api';
import Loader from './Skeleton/Skeleton';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);
    getReviews(id)
      .then(data => {
        setReviews(data);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(isLoading => !isLoading));
  }, [id, reviews]);

  return (
    <>
      {isLoading && <Loader />}

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          textAlign: 'start',
          gap: '10px',
        }}
      >
        {reviews && reviews.length > 0
          ? reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>{author}</h4>
                <p style={{ paddingRight: '30px' }}>{content}</p>
              </li>
            ))
          : "We don't have any reviews about this movie yet."}
      </ul>
    </>
  );
};

export default Reviews;
