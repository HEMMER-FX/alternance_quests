import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_LAUNCHES = gql(`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`);
function App() {
  const listred = { color: "red", margin: "0 auto" };
  const nopoint = { listStyle: "none", width: "75%" };
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.launches.map((lunch) => (
          <ul style={nopoint}>
            <li style={listred}>{lunch.launch_date_utc}</li>
            <li>{lunch.details}</li>
          </ul>
        ))}
      </header>
    </div>
  );
}

export default App;
