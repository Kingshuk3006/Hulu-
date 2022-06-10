import Header from '../components/Header';
import Nav from "../components/Navbar"
import Results from "../components/Results"
import requests from "../utils/request"
export default function Home ({results}) {
  return (
    <div className="m-auto overflow-x-hidden">
      <Header />
      <Nav/>
      <Results results={results} /> 
    </div>
  );
}

export async function getServerSideProps(context){
  const genre  = context.query.genre
  // console.log(context.query)
  // console.log(genre)

  const request = await fetch(`${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}