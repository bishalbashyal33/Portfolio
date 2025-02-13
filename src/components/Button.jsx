const Button = ({ primary, children, onClick, className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-md transition-colors ${
          primary
            ? 'bg-[#00A3FF] text-black text-xl hover:bg-[#0081CC]'
            : 'border border-[#00A3FF] text-[#00A3FF] text-xl hover:bg-[#00A3FF] hover:text-white'
        } ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;