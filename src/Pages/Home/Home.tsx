import React from 'react';
import '../Home/HomeStyles.css';
import { useGetCountriesQuery } from '../../Api/countries';
import LogoutButton from '../../components/LogoutButton';
import AppButton from '../../components/AppButton';
import { DataItem } from '../../Api/types'; // Импорт DataItem из types.ts

const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { data = [], isFetching } = useGetCountriesQuery();

  return (
    <div className='contener'>
      <header className="header">
        <button className="button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close menu' : 'Open menu'}
        </button>
        {menuOpen && (
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <LogoutButton  buttonLabel="Logout" />
              <AppButton path="/profile" buttonLabel="Profile" />
            </ul>
          </nav>
        )}
      </header>
      <main>
        {isFetching ? (
          "Loading..."
        ) : (
          data.map((item: DataItem) => (
            <div key={item.id} className="card">
              <h2>{item.name}</h2>
              <p>{item.info}</p>
              <img src={item.image} alt={item.name} /> 
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Home;