const Title = (props) => {
  return (
    <div className='flex__row'>
      <img src={'/logo192.png'} width={36} height={36} />
      <h2>{props.title}</h2>
    </div>
  )
};
export default Title;