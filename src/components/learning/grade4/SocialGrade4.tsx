import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Clock, Map, Compass, Users, Building } from 'lucide-react';

// Timeline Creator
const TimelineCreator = () => {
  const [placedEvents, setPlacedEvents] = useState<{event: string, year: number}[]>([]);
  
  const events = [
    { event: '🇮🇳 India Independence', year: 1947 },
    { event: '🚀 First Moon Landing', year: 1969 },
    { event: '💻 First Computer', year: 1946 },
    { event: '📱 First iPhone', year: 2007 },
  ];

  const unplaced = events.filter(e => !placedEvents.find(p => p.event === e.event));

  const placeEvent = (event: typeof events[0]) => {
    const sorted = [...placedEvents, event].sort((a, b) => a.year - b.year);
    setPlacedEvents(sorted);
  };

  const isCorrectOrder = placedEvents.length === events.length && 
    placedEvents.every((e, i) => i === 0 || placedEvents[i-1].year <= e.year);

  return (
    <Card className="p-6 bg-gradient-to-br from-amber-500 to-orange-600">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Timeline Creator</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">Place events in chronological order!</p>

        {/* Timeline */}
        <div className="relative h-32 bg-gray-100 rounded-xl mb-4 overflow-hidden">
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-300 -translate-y-1/2" />
          
          {placedEvents.map((event, index) => (
            <div 
              key={event.event}
              className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: `${10 + (index * 22)}%` }}
            >
              <div className="w-4 h-4 bg-amber-500 rounded-full mb-1" />
              <div className="text-center text-xs bg-white p-1 rounded shadow max-w-20">
                <p className="font-bold">{event.year}</p>
                <p className="text-[10px] truncate">{event.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Events to place */}
        <div className="flex flex-wrap justify-center gap-2">
          {unplaced.map((event) => (
            <Button
              key={event.event}
              onClick={() => placeEvent(event)}
              variant="outline"
              className="text-sm"
            >
              {event.event} ({event.year})
            </Button>
          ))}
        </div>

        {placedEvents.length === events.length && (
          <div className={`mt-4 p-3 rounded-lg text-center ${isCorrectOrder ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
            {isCorrectOrder ? '🎉 Perfect timeline!' : 'Events are in order!'}
          </div>
        )}

        <Button 
          onClick={() => setPlacedEvents([])} 
          variant="outline" 
          className="w-full mt-4"
        >
          Reset
        </Button>
      </div>
    </Card>
  );
};

// Map Puzzle
const MapPuzzle = () => {
  const [matched, setMatched] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const states = [
    { name: 'Delhi', capital: 'New Delhi', region: 'north' },
    { name: 'Maharashtra', capital: 'Mumbai', region: 'west' },
    { name: 'Tamil Nadu', capital: 'Chennai', region: 'south' },
    { name: 'West Bengal', capital: 'Kolkata', region: 'east' },
  ];

  const handleStateClick = (state: string) => {
    setSelected(state);
  };

  const handleCapitalClick = (capital: string) => {
    if (selected) {
      const state = states.find(s => s.name === selected);
      if (state && state.capital === capital) {
        setMatched([...matched, selected]);
      }
      setSelected(null);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-green-500 to-teal-600">
      <div className="flex items-center gap-2 mb-4">
        <Map className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">States & Capitals Match</h3>
        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">
          {matched.length}/{states.length}
        </span>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">Match states with their capitals!</p>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="font-bold text-center">States</p>
            {states.map((state) => (
              <Button
                key={state.name}
                onClick={() => handleStateClick(state.name)}
                disabled={matched.includes(state.name)}
                className={`w-full ${
                  matched.includes(state.name) 
                    ? 'bg-green-500' 
                    : selected === state.name 
                    ? 'bg-blue-500' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                🗺️ {state.name}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <p className="font-bold text-center">Capitals</p>
            {states.map((state) => (
              <Button
                key={state.capital}
                onClick={() => handleCapitalClick(state.capital)}
                disabled={matched.includes(state.name)}
                className={`w-full ${
                  matched.includes(state.name)
                    ? 'bg-green-500'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                🏛️ {state.capital}
              </Button>
            ))}
          </div>
        </div>

        {matched.length === states.length && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            🎉 All matched correctly!
          </div>
        )}
      </div>
    </Card>
  );
};

// Direction Finder
const DirectionFinder = () => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [question, setQuestion] = useState({
    prompt: 'Which direction is at the top of a map?',
    correct: 'N',
    options: ['N', 'S', 'E', 'W']
  });

  const questions = [
    { prompt: 'Which direction is at the top of a map?', correct: 'N', options: ['N', 'S', 'E', 'W'] },
    { prompt: 'The sun rises in the ___', correct: 'E', options: ['N', 'S', 'E', 'W'] },
    { prompt: 'The sun sets in the ___', correct: 'W', options: ['N', 'S', 'E', 'W'] },
    { prompt: 'Opposite of North is ___', correct: 'S', options: ['N', 'S', 'E', 'W'] },
  ];

  const handleAnswer = (dir: string) => {
    setAnswer(dir);
  };

  const nextQuestion = () => {
    const next = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(next);
    setAnswer(null);
  };

  const directionNames: Record<string, string> = {
    'N': 'North',
    'S': 'South',
    'E': 'East',
    'W': 'West'
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="flex items-center gap-2 mb-4">
        <Compass className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Direction Finder</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">{question.prompt}</p>

        {/* Compass */}
        <div className="relative w-48 h-48 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-300 rounded-full" />
          
          {/* Directions */}
          {question.options.map((dir, i) => {
            const positions: Record<string, string> = {
              'N': 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'S': 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
              'E': 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
              'W': 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2'
            };
            
            return (
              <button
                key={dir}
                onClick={() => handleAnswer(dir)}
                disabled={answer !== null}
                className={`absolute ${positions[dir]} w-12 h-12 rounded-full font-bold text-lg transition-all
                  ${answer !== null
                    ? dir === question.correct
                      ? 'bg-green-500 text-white'
                      : answer === dir
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200'
                    : 'bg-blue-100 hover:bg-blue-200'
                  }`}
              >
                {dir}
              </button>
            );
          })}

          {/* Center compass */}
          <div className="absolute inset-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
            <span className="text-3xl">🧭</span>
          </div>
        </div>

        {answer && (
          <div className={`p-3 rounded-lg text-center ${answer === question.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {answer === question.correct 
              ? `🎉 Correct! ${directionNames[question.correct]}!` 
              : `The answer is ${directionNames[question.correct]}`}
          </div>
        )}

        {answer && (
          <Button onClick={nextQuestion} className="w-full mt-4">
            Next Question →
          </Button>
        )}
      </div>
    </Card>
  );
};

// Government Roles Match
const GovernmentRoles = () => {
  const [matched, setMatched] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { title: 'Prime Minister', job: 'Leads the country', emoji: '👔' },
    { title: 'Police Officer', job: 'Keeps people safe', emoji: '👮' },
    { title: 'Teacher', job: 'Educates children', emoji: '👩‍🏫' },
    { title: 'Doctor', job: 'Heals sick people', emoji: '👨‍⚕️' },
  ];

  const handleRoleClick = (title: string) => {
    setSelectedRole(title);
  };

  const handleJobClick = (job: string) => {
    if (selectedRole) {
      const role = roles.find(r => r.title === selectedRole);
      if (role && role.job === job) {
        setMatched([...matched, selectedRole]);
      }
      setSelectedRole(null);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Community Roles</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">Match roles with their responsibilities!</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="font-bold text-center">Roles</p>
            {roles.map((role) => (
              <Button
                key={role.title}
                onClick={() => handleRoleClick(role.title)}
                disabled={matched.includes(role.title)}
                className={`w-full justify-start ${
                  matched.includes(role.title)
                    ? 'bg-green-500'
                    : selectedRole === role.title
                    ? 'bg-purple-500'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {role.emoji} {role.title}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <p className="font-bold text-center">Responsibilities</p>
            {roles.map((role) => (
              <Button
                key={role.job}
                onClick={() => handleJobClick(role.job)}
                disabled={matched.includes(role.title)}
                className={`w-full text-sm ${
                  matched.includes(role.title)
                    ? 'bg-green-500'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {role.job}
              </Button>
            ))}
          </div>
        </div>

        {matched.length === roles.length && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            🎉 All roles matched!
          </div>
        )}
      </div>
    </Card>
  );
};

// Heritage Tour
const HeritageTour = () => {
  const [currentPlace, setCurrentPlace] = useState(0);

  const places = [
    { name: 'Taj Mahal', emoji: '🏛️', location: 'Agra', fact: 'Built by Shah Jahan in memory of his wife Mumtaz Mahal' },
    { name: 'Red Fort', emoji: '🏰', location: 'Delhi', fact: 'Was the main residence of Mughal emperors for nearly 200 years' },
    { name: 'Gateway of India', emoji: '🌉', location: 'Mumbai', fact: 'Built to commemorate the visit of King George V in 1911' },
    { name: 'Qutub Minar', emoji: '🗼', location: 'Delhi', fact: 'Tallest brick minaret in the world at 73 meters' },
  ];

  const place = places[currentPlace];

  return (
    <Card className="p-6 bg-gradient-to-br from-rose-500 to-red-600">
      <div className="flex items-center gap-2 mb-4">
        <Building className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Heritage Tour</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="text-center">
          <span className="text-8xl block mb-4">{place.emoji}</span>
          <h4 className="text-2xl font-bold">{place.name}</h4>
          <p className="text-gray-600">📍 {place.location}</p>
          <div className="mt-4 p-4 bg-amber-50 rounded-xl">
            <p className="text-sm">💡 <strong>Fun Fact:</strong> {place.fact}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button 
            onClick={() => setCurrentPlace((currentPlace - 1 + places.length) % places.length)}
            variant="outline"
            className="flex-1"
          >
            ← Previous
          </Button>
          <Button 
            onClick={() => setCurrentPlace((currentPlace + 1) % places.length)}
            className="flex-1 bg-rose-500 hover:bg-rose-600"
          >
            Next →
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {places.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPlace(i)}
              className={`w-3 h-3 rounded-full ${i === currentPlace ? 'bg-rose-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export const SocialGrade4 = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimelineCreator />
        <MapPuzzle />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DirectionFinder />
        <GovernmentRoles />
      </div>
      <HeritageTour />
    </div>
  );
};
