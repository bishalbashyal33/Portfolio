const Button = ({ primary, children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg transition-all font-medium ${
        primary
          ? 'bg-black text-white hover:bg-[#333] shadow-md'
          : 'border border-[#E1E1E1] text-black hover:bg-[#F7F7F7] hover:shadow'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
