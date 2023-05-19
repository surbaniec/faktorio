const Button = ({ text }) => {
  return (
    <button className='bg-transparent border-2 border-orange-500 hover:bg-orange-600 hover:text-white text-orange-500 font-bold py-2 px-4 rounded-full mt-5 self-center lg:self-start duration-300'>
      {text}
    </button>
  );
};

export default Button;
