import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { StyledSkeleton } from './Skeleton.styled';
import { useParams } from 'react-router-dom';

const Loader = ({ page }) => {
  const { id } = useParams();
  switch (page) {
    case '/':
      return (
        <div style={{ marginTop: '18px' }}>
          <Skeleton count={1} width={300} height={30} />
          <BoxTrending>
            <StyledSkeleton count={20} width={302} height={527} inline={true} />
          </BoxTrending>
        </div>
      );
      break;

    case '/movies':
      return <Skeleton count={1} width={300} height={40} />;
      break;

    case `/movies/${id}`:
      return (
        <div style={{ margin: 0, padding: 0 }}>
          <Skeleton
            circle="true"
            width={25}
            height={25}
            style={{
              margin: '0 auto 0 15px',
              display: 'block',
              lineHeight: 1,
            }}
          />
          <BoxDetails>
            <Skeleton count={1} width={300} height={450} inline={true} />
            <div style={{ textAlign: 'start', padding: '0px 15px' }}>
              <Skeleton
                count={1}
                width={300}
                height={27.6}
                inline={false}
                style={{ margin: '19.92px 0' }}
              />
              <Skeleton
                count={2}
                width={139}
                height={21.53}
                inline={false}
                style={{ marginBottom: '18.72px' }}
              />
              <Skeleton count={1} width={990} height={58} inline={false} />
              <Skeleton
                count={1}
                width={272}
                height={21.53}
                inline={false}
                style={{ marginTop: '18.72px' }}
              />
            </div>
          </BoxDetails>
        </div>
      );
      break;

    case `/movies/${id}/reviews`:
      return (
        <div style={{ marginTop: '40px' }}>
          <Skeleton
            count={1}
            width={100}
            height={19}
            style={{
              display: 'block',
              marginLeft: '40px',
            }}
          />
          <Skeleton
            count={1}
            width={1290}
            height={90}
            style={{ margin: '0 30px 0 40px' }}
          />
        </div>
      );
      break;

    case `/movies/${id}/cast`:
      return (
        <BoxTrending>
          <StyledSkeleton count={20} width={302} height={527} inline={true} />
        </BoxTrending>
      );
      break;

    default:
      return (
        <>
          <Skeleton
            width={548}
            height={372}
            count={1}
            style={{ marginBottom: 15 }}
          />
          <Skeleton count={1} width={130} height={42} />
        </>
      );
  }
};

const BoxTrending = ({ children }) => {
  return (
    <div
      style={{
        margin: '16px auto 16px 40px',
        inline: 'true',
        flexWrap: 'wrap',
        display: 'flex',
        padding: 0,
        maxWidth: 'calc(100vw - 45px)',
        textAlign: 'start',
      }}
    >
      {children}
    </div>
  );
};

const BoxDetails = ({ children }) => {
  return (
    <div
      style={{
        borderBottom: '1px solid gray',
        display: 'flex',
        padding: '0 16px 16px 16px',
      }}
    >
      {children}
    </div>
  );
};

export default Loader;
