const Guarantee = ({service}) => {
    return (<div className='guaranteeWrapper'>
        <img src={service.img} alt='service icon'/>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
    </div>);
  };
export default Guarantee;