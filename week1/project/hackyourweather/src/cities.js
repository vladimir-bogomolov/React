import citiesData from './city-weather.json';
import './Cities.css';


const CityCard = ({city}) => {
    const { name, sys, weather, main, coord } = city;
    return (
        <div className='cityCard'>
            <h1>{name}, {sys.country}</h1>
            <h4>{weather[0].main}</h4>
            <p>{weather[0].description}</p>
            <div className='temp'>
                <p>min temp: {Math.round((main.temp_min - 273.15)*10)/10}</p>
                <p>max temp: {Math.round((main.temp_max - 273.15)*10)/10}</p>
            </div>
            <p>Location: {coord.lon}, {coord.lat}</p>
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