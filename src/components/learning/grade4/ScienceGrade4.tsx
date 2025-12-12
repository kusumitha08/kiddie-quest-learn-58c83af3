import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Heart, Zap, Droplets, ThermometerSun, Hand } from 'lucide-react';

// Human Body Drag and Label
const HumanBodySystem = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
  const [labeled, setLabeled] = useState<string[]>([]);

  const organs = [
    { id: 'brain', name: 'Brain', emoji: '🧠', position: 'top-4 left-1/2 -translate-x-1/2', desc: 'Controls thinking and movement' },
    { id: 'heart', name: 'Heart', emoji: '❤️', position: 'top-20 left-1/2 -translate-x-1/2', desc: 'Pumps blood through body' },
    { id: 'lungs', name: 'Lungs', emoji: '🫁', position: 'top-24 left-1/3', desc: 'Help you breathe oxygen' },
    { id: 'stomach', name: 'Stomach', emoji: '🫃', position: 'top-36 left-1/2 -translate-x-1/2', desc: 'Digests food you eat' },
    { id: 'liver', name: 'Liver', emoji: '🫀', position: 'top-32 right-1/3', desc: 'Cleans blood and makes bile' },
  ];

  const labelOrgan = (id: string) => {
    if (!labeled.includes(id)) {
      setLabeled([...labeled, id]);
    }
    setSelectedOrgan(id);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-red-500 to-pink-500">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Human Body Systems</h3>
        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">
          {labeled.length}/{organs.length} labeled
        </span>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="flex gap-4">
          <div className="relative w-40 h-64 bg-gradient-to-b from-blue-100 to-blue-200 rounded-3xl mx-auto">
            {/* Simple body outline */}
            <div className="absolute w-16 h-16 bg-blue-300 rounded-full top-2 left-1/2 -translate-x-1/2" /> {/* Head */}
            <div className="absolute w-24 h-32 bg-blue-300 rounded-lg top-16 left-1/2 -translate-x-1/2" /> {/* Body */}
            
            {organs.map((organ) => (
              <button
                key={organ.id}
                onClick={() => labelOrgan(organ.id)}
                className={`absolute ${organ.position} text-2xl cursor-pointer hover:scale-125 transition-transform
                  ${labeled.includes(organ.id) ? 'ring-2 ring-green-500 rounded-full' : ''}`}
              >
                {organ.emoji}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <p className="font-bold mb-2">Click organs to label them!</p>
            <div className="space-y-2">
              {organs.map((organ) => (
                <div 
                  key={organ.id}
                  className={`p-2 rounded-lg text-sm ${
                    selectedOrgan === organ.id 
                      ? 'bg-blue-100 border-2 border-blue-500' 
                      : labeled.includes(organ.id)
                      ? 'bg-green-100'
                      : 'bg-gray-100'
                  }`}
                >
                  <span className="font-bold">{organ.emoji} {organ.name}:</span>
                  <span className="ml-1 text-gray-600">{organ.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Circuit Simulator
const CircuitSimulator = () => {
  const [connected, setConnected] = useState({ battery: false, wire1: false, wire2: false, bulb: false });
  const isComplete = connected.battery && connected.wire1 && connected.wire2 && connected.bulb;

  const togglePart = (part: keyof typeof connected) => {
    setConnected({ ...connected, [part]: !connected[part] });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-yellow-500 to-orange-500">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Circuit Builder</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">Connect all parts to light the bulb!</p>
        
        <div className="relative h-48 bg-gray-100 rounded-xl">
          {/* Circuit visualization */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => togglePart('battery')}
              className={`p-4 rounded-lg border-4 transition-all ${connected.battery ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-white'}`}
            >
              🔋
              <p className="text-xs">Battery</p>
            </button>
            
            <button
              onClick={() => togglePart('wire1')}
              className={`w-12 h-2 rounded transition-all ${connected.wire1 ? 'bg-green-500' : 'bg-gray-300'}`}
            />
            
            <button
              onClick={() => togglePart('bulb')}
              className={`p-4 rounded-lg border-4 transition-all ${connected.bulb ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-white'}`}
            >
              <span className={`text-3xl ${isComplete ? 'animate-pulse' : ''}`}>{isComplete ? '💡' : '⚫'}</span>
              <p className="text-xs">Bulb</p>
            </button>
            
            <button
              onClick={() => togglePart('wire2')}
              className={`w-12 h-2 rounded transition-all ${connected.wire2 ? 'bg-green-500' : 'bg-gray-300'}`}
            />
          </div>
        </div>

        {isComplete ? (
          <p className="text-center mt-4 text-green-600 font-bold text-lg">🎉 Circuit complete! The bulb lights up!</p>
        ) : (
          <p className="text-center mt-4 text-gray-500">Click each part to connect the circuit</p>
        )}
      </div>
    </Card>
  );
};

// Food Chain Builder
const FoodChainBuilder = () => {
  const [chain, setChain] = useState<string[]>([]);
  const correctChain = ['🌱', '🐛', '🐸', '🐍', '🦅'];
  const options = ['🐸', '🐍', '🌱', '🦅', '🐛'];

  const addToChain = (item: string) => {
    if (chain.length < 5 && !chain.includes(item)) {
      setChain([...chain, item]);
    }
  };

  const isCorrect = JSON.stringify(chain) === JSON.stringify(correctChain);
  const reset = () => setChain([]);

  return (
    <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🦁</span>
        <h3 className="text-xl font-bold text-white">Food Chain Builder</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4">Build the food chain from producer to top predator!</p>
        
        <div className="flex justify-center gap-2 mb-4 min-h-16 p-4 bg-gray-100 rounded-xl">
          {chain.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-4xl">{item}</span>
              {index < chain.length - 1 && <span className="mx-2">→</span>}
            </div>
          ))}
          {chain.length === 0 && <p className="text-gray-400">Click items below to build the chain</p>}
        </div>

        <div className="flex justify-center gap-3 mb-4">
          {options.map((item) => (
            <Button
              key={item}
              onClick={() => addToChain(item)}
              disabled={chain.includes(item)}
              className={`text-3xl p-6 ${chain.includes(item) ? 'opacity-50' : 'hover:scale-110'}`}
              variant="outline"
            >
              {item}
            </Button>
          ))}
        </div>

        {chain.length === 5 && (
          <div className={`p-3 rounded-lg text-center ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {isCorrect ? '🎉 Perfect! Energy flows from plants to top predators!' : 'Try again! Think about who eats whom.'}
          </div>
        )}

        <Button onClick={reset} variant="outline" className="w-full mt-4">
          Reset Chain
        </Button>
      </div>
    </Card>
  );
};

// States of Matter
const StatesOfMatter = () => {
  const [items, setItems] = useState([
    { name: 'Ice', emoji: '🧊', category: null },
    { name: 'Water', emoji: '💧', category: null },
    { name: 'Steam', emoji: '♨️', category: null },
    { name: 'Rock', emoji: '🪨', category: null },
    { name: 'Air', emoji: '💨', category: null },
    { name: 'Juice', emoji: '🧃', category: null },
  ]);

  const categories = [
    { name: 'Solid', color: 'bg-blue-200', desc: 'Fixed shape' },
    { name: 'Liquid', color: 'bg-green-200', desc: 'Takes container shape' },
    { name: 'Gas', color: 'bg-purple-200', desc: 'Spreads everywhere' },
  ];

  const correctAnswers: Record<string, string> = {
    'Ice': 'Solid', 'Rock': 'Solid',
    'Water': 'Liquid', 'Juice': 'Liquid',
    'Steam': 'Gas', 'Air': 'Gas'
  };

  const sortItem = (itemName: string, category: string) => {
    setItems(items.map(item => 
      item.name === itemName ? { ...item, category } : item
    ));
  };

  const unsorted = items.filter(i => !i.category);
  const allSorted = unsorted.length === 0;
  const allCorrect = items.every(item => !item.category || item.category === correctAnswers[item.name]);

  return (
    <Card className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="flex items-center gap-2 mb-4">
        <ThermometerSun className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">States of Matter</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">Sort items into Solid, Liquid, or Gas!</p>

        {/* Unsorted items */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-12">
          {unsorted.map((item) => (
            <span key={item.name} className="text-3xl cursor-move p-2 bg-gray-100 rounded-lg">
              {item.emoji}
            </span>
          ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-3 gap-2">
          {categories.map((cat) => (
            <div key={cat.name} className={`${cat.color} p-3 rounded-xl min-h-24`}>
              <p className="font-bold text-center">{cat.name}</p>
              <p className="text-xs text-center text-gray-600">{cat.desc}</p>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {items.filter(i => i.category === cat.name).map((item) => (
                  <span key={item.name} className={`text-2xl ${
                    correctAnswers[item.name] === cat.name ? '' : 'opacity-50'
                  }`}>
                    {item.emoji}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {unsorted.map((item) => (
                  <Button 
                    key={item.name}
                    size="sm" 
                    variant="ghost"
                    onClick={() => sortItem(item.name, cat.name)}
                    className="text-xs"
                  >
                    Add {item.emoji}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {allSorted && (
          <div className={`mt-4 p-3 rounded-lg text-center ${allCorrect ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
            {allCorrect ? '🎉 All correct!' : 'Some items are in the wrong category. Try again!'}
          </div>
        )}
      </div>
    </Card>
  );
};

// Force and Motion
const ForceAndMotion = () => {
  const [position, setPosition] = useState(50);
  const [force, setForce] = useState(0);

  const push = () => {
    setForce(20);
    setTimeout(() => {
      setPosition(Math.min(90, position + 20));
      setForce(0);
    }, 300);
  };

  const pull = () => {
    setForce(-20);
    setTimeout(() => {
      setPosition(Math.max(10, position - 20));
      setForce(0);
    }, 300);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="flex items-center gap-2 mb-4">
        <Hand className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Force & Motion Lab</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">Push or Pull the box!</p>

        <div className="relative h-24 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 rounded-xl overflow-hidden">
          <div 
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-300"
            style={{ left: `${position}%`, transform: `translateY(-50%) translateX(-50%)` }}
          >
            <span className="text-5xl">📦</span>
            {force !== 0 && (
              <span className={`absolute top-1/2 -translate-y-1/2 text-2xl ${force > 0 ? 'left-full' : 'right-full'}`}>
                {force > 0 ? '👉' : '👈'}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-4">
          <Button onClick={pull} className="bg-blue-500 hover:bg-blue-600">
            ← Pull
          </Button>
          <Button onClick={push} className="bg-red-500 hover:bg-red-600">
            Push →
          </Button>
        </div>

        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <p className="text-sm text-center">
            <strong>Push</strong> moves objects away. <strong>Pull</strong> brings them closer.
            Objects need <strong>force</strong> to change their motion!
          </p>
        </div>
      </div>
    </Card>
  );
};

export const ScienceGrade4 = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HumanBodySystem />
        <CircuitSimulator />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FoodChainBuilder />
        <StatesOfMatter />
      </div>
      <ForceAndMotion />
    </div>
  );
};
