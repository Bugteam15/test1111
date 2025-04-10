
export interface Sweepstake {
  id: number;
  title: string;
  description: string;
  image: string;
  endDate: string;
  rating?: number;
  isPopular?: boolean;
  disclaimer?: string;
  siteUrl?: string;
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
    disclaimer: "Used by millions worldwide, especially popular among content creators on platforms like TikTok, YouTube, and more.",
    siteUrl: "https://example.com/ai-voices"
  },
  {
    id: 2,
    title: "Text To Speech OpenAI",
    description: "Try it cheap and easy",
    image: "https://play-lh.googleusercontent.com/Im726gXJYWu6Lw0M6BcPNV1BdlO7QVB1wQfMtEnsn1-J4e80WI7AEivVXDrK1ypsm0o=w240-h480-rw",
    endDate: "2025-05-15T23:59:59",
    rating: 9.7,
    isPopular: true,
    disclaimer: "Trusted by millions, our platform is constantly updated with a user-friendly interface to make your experience seamless and enjoyable.",
    siteUrl: "https://example.com/openai-tts"
  },
  {
    id: 3,
    title: "AI Voice: Text to Speech TTS",
    description: "Join free, get extra uses",
    image: "https://play-lh.googleusercontent.com/ojgvYfwLDoqXnD_H8Uj1TL5dk0y7EXlsBNOowSpcFZGg9bdya_yl23SHIDRK_HaKsw=w240-h480-rw",
    endDate: "2025-06-01T23:59:59",
    rating: 9.5,
    disclaimer: "Sign up for free and get bonus usage credits to kickstart your journey.",
    siteUrl: "https://example.com/ai-voice-tts"
  },
  {
    id: 4,
    title: "AI Voice Changer & Dubbing",
    description: "Limited-character trial version",
    image: "https://play-lh.googleusercontent.com/31rgFTQOFNYRTrYr-gyWLEgCCgC3FB3SDNYi-DhYYDX2K2dbTt34hObT_4OWHjidKK8=w240-h480-rw",
    endDate: "2025-05-20T23:59:59",
    rating: 9.2,
    disclaimer: "Restricted language and voice gender options.",
    siteUrl: "https://example.com/voice-changer"
  },
  {
    id: 5,
    title: "Music AI: Clone & Generator",
    description: "Music AI",
    image: "https://play-lh.googleusercontent.com/dUlbE5-1xrcw3KB-MyG4AEOauLbhIasQKsNamhnotF8O-Ko3BJWNN7KwBOh-5c5YKsk=w240-h480-rw",
    endDate: "2025-04-25T23:59:59",
    rating: 9.0,
    disclaimer: "Enjoy exciting conversions and multi-meaning translations, though limited by text submission methods.",
    siteUrl: "https://example.com/music-ai"
  }
];

export default sweepstakesData;
