import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const stories = [
  {
    title: "The Friendly Lion 🦁",
    pages: [
      { text: "Once upon a time, there was a friendly lion named Leo.", emoji: "🦁" },
      { text: "Leo loved to play with all the animals in the jungle.", emoji: "🌳" },
      { text: "One day, a little rabbit was lost and crying.", emoji: "🐰" },
      { text: "Leo helped the rabbit find his way home!", emoji: "🏠" },
      { text: "The rabbit and Leo became best friends forever!", emoji: "❤️" },
    ]
  },
  {
    title: "The Magic Seed 🌱",
    pages: [
      { text: "A little girl found a magic seed in her garden.", emoji: "👧" },
      { text: "She planted it with love and gave it water every day.", emoji: "💧" },
      { text: "The seed grew into a beautiful, colorful flower!", emoji: "🌸" },
      { text: "The flower made everyone who saw it smile.", emoji: "😊" },
      { text: "And they all lived happily with the magic flower!", emoji: "✨" },
    ]
  }
];

export const StoryTellingAnimation = ({ grade }: { grade: number }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  const story = stories[currentStoryIndex];
  const page = story.pages[currentPage];

  const handleNextPage = () => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // Move to next story or loop back
      setCurrentStoryIndex((currentStoryIndex + 1) % stories.length);
      setCurrentPage(0);
    }
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-english to-english/80 border-4 border-white shadow-xl">
      <div className="flex items-center justify-center gap-3 mb-6">
        <BookOpen className="w-10 h-10 text-white" />
        <h3 className="text-3xl font-bold text-white text-center">{story.title}</h3>
      </div>
      
      <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm min-h-[300px] flex flex-col items-center justify-center space-y-6">
        <div className="text-9xl animate-bounce">
          {page.emoji}
        </div>
        
        <p className="text-2xl text-white font-bold text-center leading-relaxed">
          {page.text}
        </p>
        
        <div className="flex gap-2 mt-4">
          {story.pages.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button 
          onClick={handleNextPage}
          size="lg"
          className="text-2xl px-12 py-8 font-bold bg-white text-english hover:bg-white/90"
        >
          {currentPage < story.pages.length - 1 ? (
            <>
              Next Page <ChevronRight className="w-6 h-6 ml-2" />
            </>
          ) : (
            <>
              New Story <ChevronRight className="w-6 h-6 ml-2" />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};
