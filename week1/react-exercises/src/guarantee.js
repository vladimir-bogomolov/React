const Guarantee = ({service}) => {
    const { title, img, description } = service;
    return (<div className='guaranteeWrapper'>
        <img src={img} alt='service icon'/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>);
  };
export default Guarantee;