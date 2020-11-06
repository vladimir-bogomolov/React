import citiesData from './city-weather.json';
import './Cities.css';


const CityCard = ({city}) => {
    return (
        <div className='cityCard'>
            <h2>{city.name}, {city.sys.country}</h2>
            <h4>{city.weather[0].main}</h4>
            <p>{city.weather[0].description}</p>
            <div className='temp'>
                <p>min temp: {Math.round((city.main.temp_min - 273.15)*10)/10}</p>
                <p>max temp: {Math.round((city.main.temp_max - 273.15)*10)/10}</p>
            </div>
            <p>Location: {city.coord.lon}, {city.coord.lat}</p>
        </div>
    );
}

const Cities = () => {
    return (
        <div id='citiesWrapper'>
            <h1>Weather</h1>
            {citiesData.map(city => <CityCard city={city}/>)}
        </div>
    );
}
export default Cities;