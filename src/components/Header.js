import { useEffect, useContext } from "react";
import { AppContext } from "../App";

import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";

import { FETCH_VIDEOS_URL } from "../constants";

import "./Header.css";

const Header = () => {
  const { query, setQuery, setVideosData } = useContext(AppContext);

  const fetchVideosByQuery = async (query) => {
    try {
      const url = new URL(FETCH_VIDEOS_URL);
      url.searchParams.append("q", query);
      url.searchParams.append("numResults", 10);

      const response = await fetch(url);
      const data = await response.json();
      setVideosData(data.results);
    } catch (error) {
      console.error("Error while fetching videos - ", error);
    }
  };

  useEffect(() => {
    if (!!query.trim()) {
      fetchVideosByQuery(query);
    }
  }, [query]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <p>Fitness App</p>
      </div>
      <input
        type="text"
        placeholder="Search.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="avatar">
        <img src={Avatar} alt="avatar" />
        <p>Harshal Gangurde</p>
      </div>
    </header>
  );
};

export default Header;
