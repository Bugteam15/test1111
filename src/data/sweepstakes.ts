
export interface Sweepstake {
  id: number;
  title: string;
  description: string;
  image: string;
  endDate: string;
  rating?: number;
  isPopular?: boolean;
  disclaimer?: string;
}

const sweepstakesData: Sweepstake[] = [
  {
    id: 1,
    title: "Text to Speech - AI Voices",
    description: "Sign up to start for free",
    image: "https://play-lh.googleusercontent.com/UfW9tMBtZOY3qzvdv9DCRpU-64sLtzDsTzxl87iQI7TQI3zpIRREi7gq21J1-cv_Fvg=w240-h480-rw",
    endDate: "2025-04-30T23:59:59",
    rating: 9.8,
    isPopular: true,
    disclaimer: "Used by millions worldwide, especially popular among content creators on platforms like TikTok, YouTube, and more."
  },
  {
    id: 2,
    title: "Text To Speech OpenAI",
    description: "Try it cheap and easy",
    image: "https://play-lh.googleusercontent.com/Im726gXJYWu6Lw0M6BcPNV1BdlO7QVB1wQfMtEnsn1-J4e80WI7AEivVXDrK1ypsm0o=w240-h480-rw",
    endDate: "2025-05-15T23:59:59",
    rating: 9.7,
    isPopular: true,
    disclaimer: "Trusted by millions, our platform is constantly updated with a user-friendly interface to make your experience seamless and enjoyable."
  },
  {
    id: 3,
    title: "AI Voice: Text to Speech TTS",
    description: "Join free, get extra uses",
    image: "https://play-lh.googleusercontent.com/ojgvYfwLDoqXnD_H8Uj1TL5dk0y7EXlsBNOowSpcFZGg9bdya_yl23SHIDRK_HaKsw=w240-h480-rw",
    endDate: "2025-06-01T23:59:59",
    rating: 9.5,
    disclaimer: "Sign up for free and get bonus usage credits to kickstart your journey."
  },
  {
    id: 4,
    title: "150% Extra, GC 60,000 + Free SC 30 for $9.99",
    description: "",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    endDate: "2025-05-20T23:59:59",
    rating: 9.2,
    disclaimer: "No purchase necessary. Not available in WA, ID, KY, GA, AL, MI, NV, MT, LA, DE. Void where prohibited by law. Must be 21+. Full T&Cs apply."
  },
  {
    id: 5,
    title: "200% Extra on 1st Purchase – GC 60K + FREE SC 40",
    description: "+ Infinity Wheel",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop",
    endDate: "2025-04-25T23:59:59",
    rating: 9.0,
    disclaimer: "No purchase necessary. Not available in WA, ID, KY, GA, AL, MI, NV, MT, LA, DE. Void where prohibited by law. Must be 21+. Full T&Cs apply."
  }
];

export default sweepstakesData;
