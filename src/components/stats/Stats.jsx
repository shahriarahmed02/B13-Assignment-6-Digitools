const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: "50K+",
      label: "Active Users",
     
    },
    {
      id: 2,
      value: "200+",
      label: "Premium Tools",

    },
    {
      id: 3,
      value: "4.9",
      label: "Rating",

    },
  ];

  return (
    <div className="bg-indigo-600  ">
      <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-4 md:p-8  flex flex-col md:flex-row justify-around items-center gap-5 text-center md:text-left">
        
        {statsData.map((stat, index) => (
          <div 
            key={stat.id} 
            className={`flex flex-col items-center md:items-center gap-1 ${
              index !== statsData.length - 1 ? "md:border-r md:border-blue-400 md:pr-16" : ""
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {stat.value}
            </h2>
            <p className="text-xl font-bold text-blue-100">
              {stat.label}
            </p>
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default Stats;