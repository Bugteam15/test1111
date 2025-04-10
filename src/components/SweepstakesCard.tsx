
import React from 'react';

export interface SweepstakeProps {
  id: number;
  title: string;
  description: string;
  image: string;
  endDate: string;
}

const SweepstakesCard: React.FC<SweepstakeProps> = ({
  title,
  description,
  image,
  endDate
}) => {
  // Calculate remaining time
  const getCountdown = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) {
      return "Ended";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `Ends in ${days}d ${hours}h:${minutes}m:${seconds}s`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full max-w-[300px] h-[400px] flex flex-col border border-rewards-lightBorder">
      <div className="h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-sm text-rewards-gray mt-2 flex-grow">{description}</p>
        <p className="text-sm text-rewards-red font-medium my-2">{getCountdown()}</p>
        <button 
          className="mt-auto bg-rewards-blue hover:bg-rewards-blueDark text-white font-bold py-2 rounded-full w-32 mx-auto transition-all duration-300"
          onClick={() => {
            console.log(`Enter Now clicked for ${title}`);
          }}
        >
          Enter Now
        </button>
      </div>
    </div>
  );
};

export default SweepstakesCard;
