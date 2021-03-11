import axios from 'axios';

const fetchData = async () => await axios.get(`http://www.omdbapi.com/?apikey=fd6b0637&s=resgate`)
  .then(res => ({
    error: false,
    films: res.data,
  }))
  .catch(() => ({
      error: true,
      films: null,
    }),
  );

const Films = ({ films, error }) => {
  if(error) return <div>Filme não encontrado</div>
  return (
    <div>
        { films.Search.map( (m) => <div>{m.Title} --- <br /><img src={m.Poster} alt="POSTER FALTANDO"></img> --- {m.Year}</div>  ) }
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  };
}


export default Films;