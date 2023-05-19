const Pill = ({ text }) => {
  return (
    <span className='rounded-full bg-orange-200 text-orange-400 text-xs py-2 px-4 uppercase'>
      {text}
    </span>
  );
};

export default Pill;
