import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';

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
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-rewards-purple text-rewards-purple" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-600" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="w-full glass-morphism rounded-xl overflow-hidden relative hover:shadow-[0_0_15px_rgba(155,135,245,0.15)] transition-all duration-300 group animate-fade-in">
      {isPopular && (
        <div className="absolute top-0 left-0 purple-gradient text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
          POPULAR CHOICE
        </div>
      )}
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-white/5 p-5 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10">
          <img 
            src={image} 
            alt={title} 
            className="w-auto max-h-20 object-contain filter drop-shadow-[0_0_3px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        <div className="w-full md:w-2/4 p-5 border-b md:border-b-0 md:border-r border-white/10">
          <div>
            <h3 className="text-xl font-bold text-white">Text to Speech - AI Voices</h3>
            <p className="mt-2 text-rewards-textMedium flex justify-between items-center">
              {description}
              <Button 
                className="purple-gradient text-white shadow-[0_0_10px_rgba(155,135,245,0.3)] hover:opacity-90 ml-2" 
                size="sm"
              >
                Try Free <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </p>
            {disclaimer && (
              <p className="mt-2 text-xs text-rewards-textGray">{disclaimer}</p>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/6 p-5 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="text-3xl font-bold purple-gradient-text">{rating}</div>
          <div className="flex mt-1">
            {rating && renderStars(rating)}
          </div>
        </div>
        
        <div className="w-full md:w-1/6 p-5 flex flex-col items-center justify-center">
          <button 
            className="purple-gradient hover:opacity-90 text-white font-bold py-2 px-6 w-full rounded-md transition-all duration-300 mb-2 flex items-center justify-center shadow-[0_0_10px_rgba(155,135,245,0.3)]"
            onClick={() => {
              console.log(`Play Now clicked for ${title}`);
            }}
          >
            <Play className="mr-1 h-4 w-4" /> PLAY NOW
          </button>
          <a 
            href="#" 
            className="text-rewards-purple hover:text-rewards-vibrantPurple hover:underline text-sm mt-1 flex items-center transition-colors duration-200"
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
