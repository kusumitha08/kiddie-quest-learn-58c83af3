import { GradeCard } from '@/components/GradeCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-learning.jpg';

const HomePage = () => {
  const grades = [
    { grade: 1, color: 'from-primary to-primary-glow' },
    { grade: 2, color: 'from-math to-orange-400' },
    { grade: 3, color: 'from-english to-purple-400' },
    { grade: 4, color: 'from-success to-green-400' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="w-8 h-8 text-accent fill-accent animate-pulse" />
            <h1 className="text-3xl font-bold text-primary-foreground">LearnQuest</h1>
          </div>
          <Link to="/auth">
            <Button variant="secondary" size="lg" className="font-bold">
              Login / Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Kids learning together" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-white animate-float" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to LearnQuest!
            </h2>
            
            <p className="text-2xl md:text-3xl text-white/95 mb-8 font-medium">
              Your Magical Learning Adventure Starts Here! 🚀
            </p>
            
            <p className="text-xl text-white/90 mb-8">
              Explore exciting videos, play fun quizzes, and become a learning superstar!
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full animate-float"></div>
      </section>

      {/* Grade Selection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Grade
            </h3>
            <p className="text-xl text-muted-foreground">
              Click on your grade to start your learning journey!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {grades.map((item) => (
              <GradeCard key={item.grade} grade={item.grade} color={item.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              What You'll Discover
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">📺</div>
              <h4 className="text-2xl font-bold text-foreground mb-3">Fun Videos</h4>
              <p className="text-muted-foreground">Watch exciting educational videos that make learning fun!</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🎮</div>
              <h4 className="text-2xl font-bold text-foreground mb-3">Cool Quizzes</h4>
              <p className="text-muted-foreground">Test your knowledge with interactive quizzes and games!</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold text-foreground mb-3">Earn Rewards</h4>
              <p className="text-muted-foreground">Collect stars and badges as you learn and grow!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2025 LearnQuest - Making Learning Fun for Everyone! 🌟
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
