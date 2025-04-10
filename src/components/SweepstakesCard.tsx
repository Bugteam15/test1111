
import React from 'react';
import { Play, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

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
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 relative hover:shadow-lg transition-shadow duration-300">
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 left-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
          POPULAR CHOICE
        </div>
      )}
      
      <div className="flex flex-col md:flex-row">
        {/* Logo section */}
        <div className="w-full md:w-1/4 bg-gray-50 p-5 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-gray-200">
          <img 
            src={image} 
            alt={title} 
            className="w-auto max-h-20 object-contain" 
          />
        </div>
        
        {/* Description section */}
        <div className="w-full md:w-2/4 p-5 border-b md:border-b-0 md:border-r border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            {disclaimer && (
              <p className="mt-2 text-xs text-gray-500">{disclaimer}</p>
            )}
          </div>
        </div>
        
        {/* Rating section */}
        <div className="w-full md:w-1/6 p-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
          <div className="text-3xl font-bold text-indigo-600">{rating}</div>
          <div className="flex mt-1">
            {rating && renderStars(rating)}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="w-full md:w-1/6 p-5 flex flex-col items-center justify-center">
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 w-full rounded-md transition-all duration-300 mb-2 flex items-center justify-center"
            onClick={() => {
              console.log(`Play Now clicked for ${title}`);
            }}
          >
            <Play className="mr-1 h-4 w-4" /> PLAY NOW
          </button>
          <a 
            href="#" 
            className="text-indigo-600 hover:text-indigo-700 hover:underline text-sm mt-1 flex items-center"
            onClick={(e) => {
              e.preventDefault();
              console.log(`Visit Site clicked for ${title}`);
            }}
          >
            Visit Site <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SweepstakesCard;
