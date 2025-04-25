const FeedBack = ({ feed }) => {
    const { name, userImg, review } = feed || {};
  
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto transition-transform hover:scale-[1.02] duration-300">
    
        <div className="flex items-center mb-4">
          <img
            src={userImg}
            alt={name}
            className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">Verified Patient</p>
          </div>
        </div>
  

        <p className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-blue-400 pl-4">
          “{review}”
        </p>
      </div>
    );
  };
  
  export default FeedBack;
  