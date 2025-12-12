import { useParams, Link } from 'react-router-dom';
import { VideoCard } from '@/components/VideoCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Play, Sparkles, Trophy } from 'lucide-react';
import { subjects, sampleVideos } from '@/lib/data';
import { MathAddition } from '@/components/learning/MathAddition';
import { MathSubtraction } from '@/components/learning/MathSubtraction';
import { MathTwoDigitAddition } from '@/components/learning/MathTwoDigitAddition';
import { MathTwoDigitSubtraction } from '@/components/learning/MathTwoDigitSubtraction';
import { MathSingleDigitMultiplication } from '@/components/learning/MathSingleDigitMultiplication';
import { MathMultiplicationAdvanced } from '@/components/learning/MathMultiplicationAdvanced';
import { MathDivision } from '@/components/learning/MathDivision';
import { ScienceAnimation } from '@/components/learning/ScienceAnimation';
import { EnglishAnimation } from '@/components/learning/EnglishAnimation';
import { SocialAnimation } from '@/components/learning/SocialAnimation';
import { EVSAnimation } from '@/components/learning/EVSAnimation';
import { StoryTellingAnimation } from '@/components/learning/StoryTellingAnimation';
import { EnglishGrade2 } from '@/components/learning/grade2/EnglishGrade2';
import { MathGrade2Interactive } from '@/components/learning/grade2/MathGrade2Interactive';
import { EVSGrade2 } from '@/components/learning/grade2/EVSGrade2';
import { CreativityGrade2 } from '@/components/learning/grade2/CreativityGrade2';
import { EnglishGrade3 } from '@/components/learning/grade3/EnglishGrade3';
import { MathGrade3Interactive } from '@/components/learning/grade3/MathGrade3Interactive';
import { ArtCreativityGrade1 } from '@/components/learning/grade1/ArtCreativityGrade1';
import { EnglishGrade4 } from '@/components/learning/grade4/EnglishGrade4';
import { MathGrade4Interactive } from '@/components/learning/grade4/MathGrade4Interactive';
import { ScienceGrade4 } from '@/components/learning/grade4/ScienceGrade4';
import { SocialGrade4 } from '@/components/learning/grade4/SocialGrade4';
import { BrainGamesGrade4 } from '@/components/learning/grade4/BrainGamesGrade4';

const SubjectPage = () => {
  const { gradeNumber, subject } = useParams();
  const currentSubject = subjects.find(s => s.id === subject);
  
  // Filter videos by subject AND grade
  const subjectVideos = sampleVideos.filter(v => v.subject === subject && v.grade === parseInt(gradeNumber || '1'));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`bg-${currentSubject?.color} shadow-lg sticky top-0 z-50`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={`/grade/${gradeNumber}`}>
            <Button variant="secondary" size="lg" className="font-bold">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Subjects
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{currentSubject?.icon}</span>
            <span className={`text-2xl font-bold text-${currentSubject?.color}-foreground`}>
              {currentSubject?.name}
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`bg-${currentSubject?.color} py-16 px-4`}>
        <div className="container mx-auto text-center">
          <div className="text-8xl mb-6 animate-bounce">
            {currentSubject?.icon}
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold text-${currentSubject?.color}-foreground mb-4 drop-shadow-lg`}>
            {currentSubject?.name} - Grade {gradeNumber}
          </h1>
          <p className={`text-2xl text-${currentSubject?.color}-foreground/95 font-medium mb-8`}>
            {currentSubject?.description}
          </p>
          
          <Link to={`/quiz/${gradeNumber}/${subject}`}>
            <Button size="lg" variant="secondary" className="font-bold text-xl px-8 py-6">
              <Play className="w-6 h-6 mr-2" />
              Take a Quiz!
            </Button>
          </Link>
        </div>
      </section>

      {/* Learning Content - Tabbed Interface */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="watch" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-2 bg-muted">
              <TabsTrigger value="watch" className="text-lg font-bold py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Play className="w-5 h-5 mr-2" />
                Watch & Learn
              </TabsTrigger>
              <TabsTrigger value="animations" className="text-lg font-bold py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Sparkles className="w-5 h-5 mr-2" />
                Interactive Learning
              </TabsTrigger>
              <TabsTrigger value="quiz" className="text-lg font-bold py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Trophy className="w-5 h-5 mr-2" />
                Take Quiz
              </TabsTrigger>
            </TabsList>

            {/* Watch & Learn Tab */}
            <TabsContent value="watch" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjectVideos.length > 0 ? (
                  subjectVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-muted/30 rounded-3xl">
                    <p className="text-xl text-muted-foreground">
                      More exciting videos coming soon! 🎬
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Interactive Learning Tab */}
            <TabsContent value="animations" className="mt-8">
              <div className="space-y-6">
                {/* Grade 1 Activities */}
                {parseInt(gradeNumber || '1') === 1 && subject === 'math' && (
                  <div className="space-y-6">
                    <MathAddition />
                    <MathSubtraction />
                    <ArtCreativityGrade1 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 1 && subject === 'english' && (
                  <EnglishAnimation grade={1} />
                )}
                {parseInt(gradeNumber || '1') === 1 && subject === 'evs' && (
                  <EVSAnimation grade={1} />
                )}
                {parseInt(gradeNumber || '1') === 1 && subject === 'storytelling' && (
                  <StoryTellingAnimation grade={1} />
                )}

                {/* Grade 2 Activities */}
                {parseInt(gradeNumber || '1') === 2 && subject === 'math' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🔢 Math Activities for Grade 2</h3>
                      <p className="text-muted-foreground">Practice addition, subtraction & multiplication!</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <MathTwoDigitAddition />
                      <MathTwoDigitSubtraction />
                    </div>
                    <MathSingleDigitMultiplication />
                    <MathGrade2Interactive />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 2 && subject === 'english' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">📚 English Activities for Grade 2</h3>
                      <p className="text-muted-foreground">Build words, match sounds, and make sentences!</p>
                    </div>
                    <EnglishGrade2 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 2 && subject === 'evs' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🌱 EVS Activities for Grade 2</h3>
                      <p className="text-muted-foreground">Explore plants, animals, and nature!</p>
                    </div>
                    <EVSGrade2 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 2 && subject === 'science' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🔬 Science Activities for Grade 2</h3>
                      <p className="text-muted-foreground">Learn about science with fun activities!</p>
                    </div>
                    <ScienceAnimation grade={2} />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 2 && !['math', 'english', 'evs', 'science'].includes(subject || '') && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🎨 Fun Activities for Grade 2</h3>
                      <p className="text-muted-foreground">Play games and be creative!</p>
                    </div>
                    <CreativityGrade2 />
                  </div>
                )}

                {/* Grade 3 Activities */}
                {parseInt(gradeNumber || '1') === 3 && subject === 'math' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🔢 Math Activities for Grade 3</h3>
                      <p className="text-muted-foreground">Master multiplication, division & fractions!</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <MathMultiplicationAdvanced />
                      <MathDivision />
                    </div>
                    <MathGrade3Interactive />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 3 && subject === 'english' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">📚 English Activities for Grade 3</h3>
                      <p className="text-muted-foreground">Learn grammar, reading & vocabulary!</p>
                    </div>
                    <EnglishGrade3 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 3 && subject === 'science' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🔬 Science Activities for Grade 3</h3>
                      <p className="text-muted-foreground">Explore science concepts with interactive activities!</p>
                    </div>
                    <ScienceAnimation grade={3} />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 3 && subject === 'social' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🌍 Social Studies for Grade 3</h3>
                      <p className="text-muted-foreground">Learn about people, places & communities!</p>
                    </div>
                    <SocialAnimation grade={3} />
                  </div>
                )}

                {/* Grade 4 Activities */}
                {parseInt(gradeNumber || '1') === 4 && subject === 'math' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🔢 Math Activities for Grade 4</h3>
                      <p className="text-muted-foreground">Master multiplication, division, fractions & geometry!</p>
                    </div>
                    <MathGrade4Interactive />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 4 && subject === 'english' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">📚 English Activities for Grade 4</h3>
                      <p className="text-muted-foreground">Reading comprehension, vocabulary & story building!</p>
                    </div>
                    <EnglishGrade4 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 4 && subject === 'science' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🔬 Science Activities for Grade 4</h3>
                      <p className="text-muted-foreground">Human body, circuits, food chains & more!</p>
                    </div>
                    <ScienceGrade4 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 4 && subject === 'social' && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🌍 Social Studies for Grade 4</h3>
                      <p className="text-muted-foreground">Timelines, maps, heritage & government!</p>
                    </div>
                    <SocialGrade4 />
                  </div>
                )}
                {parseInt(gradeNumber || '1') === 4 && !['math', 'english', 'science', 'social'].includes(subject || '') && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">🧩 Brain Games for Grade 4</h3>
                      <p className="text-muted-foreground">Puzzles, Sudoku, memory & pattern games!</p>
                    </div>
                    <BrainGamesGrade4 />
                  </div>
                )}

                {/* Default/Coming Soon for subjects without custom activities */}
                {!subject && (
                  <div className="text-center py-12 bg-muted/30 rounded-3xl">
                    <p className="text-xl text-muted-foreground">
                      More interactive activities coming soon! ✨
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Quiz Tab */}
            <TabsContent value="quiz" className="mt-8">
              <div className="bg-gradient-to-br from-accent to-primary p-12 rounded-3xl shadow-lg text-center">
                <Trophy className="w-24 h-24 text-white mx-auto mb-6 animate-bounce" />
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ready to Test Your Knowledge? 🧠
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Take the quiz and earn stars! Show what you've learned!
                </p>
                <Link to={`/quiz/${gradeNumber}/${subject}`}>
                  <Button size="lg" variant="secondary" className="font-bold text-2xl px-12 py-8">
                    Start Quiz Now!
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SubjectPage;
