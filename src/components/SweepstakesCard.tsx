
import React from 'react';
import { Play } from 'lucide-react';

export interface SweepstakeProps {
  id: number;
  title: string;
  description: string;
  image: string;
  endDate: string;
  rating?: number;
  isPopular?: boolean;
  disclaimer?: string;
}

const SweepstakesCard: React.FC<SweepstakeProps> = ({
  title,
  description,
  image,
  rating,
  isPopular,
  disclaimer
}) => {
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-rewards-orange">★</span>);
      } else {
        stars.push(<span key={i} className="text-rewards-orange/30">★</span>);
      }
    }
    
    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-[#222639] rounded-xl overflow-hidden shadow-lg mb-4">
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
          POPULAR CHOICE
        </div>
      )}
      
      {/* Logo section */}
      <div className="w-full md:w-1/4 bg-[#1a1e2e] p-5 flex items-center justify-center relative">
        <img 
          src={image} 
          alt={title} 
          className="w-auto max-h-20 object-contain" 
        />
        {isPopular && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-md">
            POPULAR CHOICE
          </div>
        )}
      </div>
      
      {/* Description section */}
      <div className="w-full md:w-2/4 p-5 border-r border-gray-700 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-white">{description}</p>
          {disclaimer && (
            <p className="mt-2 text-xs text-gray-400 text-center">{disclaimer}</p>
          )}
        </div>
      </div>
      
      {/* Rating section */}
      <div className="w-full md:w-1/6 p-5 flex flex-col items-center justify-center border-r border-gray-700">
        <div className="text-4xl font-bold text-white">{rating}</div>
        <div className="flex mt-1 text-xl">
          {rating && renderStars(rating)}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="w-full md:w-1/6 p-5 flex flex-col items-center justify-center">
        <button 
          className="bg-rewards-green hover:opacity-90 text-white font-bold py-3 px-6 w-full rounded-md transition-all duration-300 mb-2 flex items-center justify-center"
          onClick={() => {
            console.log(`Play Now clicked for ${title}`);
          }}
        >
          <Play className="mr-1 h-4 w-4" /> PLAY NOW
        </button>
        <a 
          href="#" 
          className="text-blue-400 hover:underline text-sm mt-1"
          onClick={(e) => {
            e.preventDefault();
            console.log(`Visit Site clicked for ${title}`);
          }}
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default SweepstakesCard;
