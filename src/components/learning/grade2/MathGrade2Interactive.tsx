import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export const MathGrade2Interactive = () => {
  const [activeActivity, setActiveActivity] = useState<string>('numberline');

  const activities = [
    { id: 'numberline', label: '📏 Number Line' },
    { id: 'blocks', label: '🧱 Add/Subtract Blocks' },
    { id: 'placevalue', label: '🏠 Place Value House' },
    { id: 'shapes', label: '🔷 Shapes Sorter' },
    { id: 'missing', label: '❓ Missing Numbers' },
    { id: 'patterns', label: '🎨 Patterns' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {activities.map(activity => (
          <Button
            key={activity.id}
            onClick={() => setActiveActivity(activity.id)}
            variant={activeActivity === activity.id ? "default" : "outline"}
          >
            {activity.label}
          </Button>
        ))}
      </div>

      {activeActivity === 'numberline' && <NumberLine />}
      {activeActivity === 'blocks' && <BlocksActivity />}
      {activeActivity === 'placevalue' && <PlaceValueHouse />}
      {activeActivity === 'shapes' && <ShapesSorter />}
      {activeActivity === 'missing' && <MissingNumbers />}
      {activeActivity === 'patterns' && <Patterns />}
    </div>
  );
};

const NumberLine = () => {
  const [position, setPosition] = useState(5);
  const [question, setQuestion] = useState({ num1: 3, num2: 2, op: '+' });

  const checkAnswer = () => {
    const correct = question.op === '+' ? question.num1 + question.num2 : question.num1 - question.num2;
    if (position === correct) {
      toast.success(`🎉 Correct! ${question.num1} ${question.op} ${question.num2} = ${correct}`);
    } else {
      toast.error(`Try again! Answer is ${correct}`);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-bold text-center">📏 Interactive Number Line</h3>
      
      <div className="text-center text-2xl font-bold">
        {question.num1} {question.op} {question.num2} = ?
      </div>

      <div className="relative h-24">
        <div className="flex justify-between items-center">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-1 h-4 bg-border"></div>
              <span className="text-sm mt-1">{i}</span>
            </div>
          ))}
        </div>
        <div 
          className="absolute top-0 w-8 h-8 bg-primary rounded-full transition-all duration-300 cursor-pointer"
          style={{ left: `${position * 9.09}%`, transform: 'translateX(-50%)' }}
          onClick={() => {}}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl">👆</div>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="10"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex gap-2">
        <Button onClick={checkAnswer} className="flex-1">
          <Check className="w-4 h-4 mr-2" />
          Check Answer
        </Button>
        <Button 
          onClick={() => setQuestion({
            num1: Math.floor(Math.random() * 5) + 1,
            num2: Math.floor(Math.random() * 5) + 1,
            op: Math.random() > 0.5 ? '+' : '-'
          })}
          variant="outline"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

const BlocksActivity = () => {
  const [blocks1, setBlocks1] = useState(5);
  const [blocks2, setBlocks2] = useState(3);
  const [operation, setOperation] = useState<'+' | '-'>('+');

  const result = operation === '+' ? blocks1 + blocks2 : Math.max(0, blocks1 - blocks2);

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-bold text-center">🧱 Visual Blocks</h3>
      
      <div className="flex gap-2 justify-center">
        <Button onClick={() => setOperation('+')} variant={operation === '+' ? 'default' : 'outline'}>
          ➕ Add
        </Button>
        <Button onClick={() => setOperation('-')} variant={operation === '-' ? 'default' : 'outline'}>
          ➖ Subtract
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="text-center space-y-2">
          <p className="font-semibold">First Group</p>
          <div className="flex flex-wrap gap-1 justify-center min-h-[80px]">
            {[...Array(blocks1)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-primary rounded"></div>
            ))}
          </div>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setBlocks1(Math.max(0, blocks1 - 1))}>-</Button>
            <Button size="sm" onClick={() => setBlocks1(Math.min(10, blocks1 + 1))}>+</Button>
          </div>
        </div>

        <div className="text-4xl text-center">{operation}</div>

        <div className="text-center space-y-2">
          <p className="font-semibold">Second Group</p>
          <div className="flex flex-wrap gap-1 justify-center min-h-[80px]">
            {[...Array(blocks2)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-secondary rounded"></div>
            ))}
          </div>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setBlocks2(Math.max(0, blocks2 - 1))}>-</Button>
            <Button size="sm" onClick={() => setBlocks2(Math.min(10, blocks2 + 1))}>+</Button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl font-bold">
          {blocks1} {operation} {blocks2} = {result}
        </p>
        <div className="flex flex-wrap gap-1 justify-center mt-4 min-h-[80px]">
          {[...Array(result)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-accent rounded"></div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const PlaceValueHouse = () => {
  const [hundreds, setHundreds] = useState(2);
  const [tens, setTens] = useState(3);
  const [ones, setOnes] = useState(5);

  const total = hundreds * 100 + tens * 10 + ones;

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🏠 Place Value House</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center space-y-2">
          <div className="text-4xl">🏠</div>
          <p className="font-bold">Hundreds</p>
          <div className="text-3xl font-bold text-primary">{hundreds}</div>
          <div className="flex gap-1 justify-center">
            <Button size="sm" onClick={() => setHundreds(Math.max(0, hundreds - 1))}>-</Button>
            <Button size="sm" onClick={() => setHundreds(Math.min(9, hundreds + 1))}>+</Button>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="text-4xl">🏡</div>
          <p className="font-bold">Tens</p>
          <div className="text-3xl font-bold text-secondary">{tens}</div>
          <div className="flex gap-1 justify-center">
            <Button size="sm" onClick={() => setTens(Math.max(0, tens - 1))}>-</Button>
            <Button size="sm" onClick={() => setTens(Math.min(9, tens + 1))}>+</Button>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="text-4xl">🏘️</div>
          <p className="font-bold">Ones</p>
          <div className="text-3xl font-bold text-accent">{ones}</div>
          <div className="flex gap-1 justify-center">
            <Button size="sm" onClick={() => setOnes(Math.max(0, ones - 1))}>-</Button>
            <Button size="sm" onClick={() => setOnes(Math.min(9, ones + 1))}>+</Button>
          </div>
        </div>
      </div>

      <div className="text-center p-4 bg-accent/20 rounded-lg">
        <p className="text-sm text-muted-foreground">Total Number</p>
        <p className="text-4xl font-bold">{total}</p>
      </div>
    </Card>
  );
};

const ShapesSorter = () => {
  const shapes = [
    { name: 'Circle', emoji: '🔵', sides: 0 },
    { name: 'Triangle', emoji: '🔺', sides: 3 },
    { name: 'Square', emoji: '🟦', sides: 4 },
    { name: 'Pentagon', emoji: '⬟', sides: 5 },
  ];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🔷 Shapes Sorter</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {shapes.map((shape, idx) => (
          <Card key={idx} className="p-4 text-center space-y-2 hover:bg-accent cursor-pointer transition-colors">
            <div className="text-5xl">{shape.emoji}</div>
            <p className="font-bold">{shape.name}</p>
            <p className="text-sm text-muted-foreground">
              {shape.sides === 0 ? 'No corners' : `${shape.sides} sides`}
            </p>
          </Card>
        ))}
      </div>
    </Card>
  );
};

const MissingNumbers = () => {
  const [sequence, setSequence] = useState([2, 4, null, 8, 10]);
  const [answer, setAnswer] = useState('');

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">❓ Find the Missing Number</h3>
      
      <div className="flex gap-2 justify-center items-center">
        {sequence.map((num, idx) => (
          <div key={idx} className="w-16 h-16 border-2 border-primary rounded-lg flex items-center justify-center text-2xl font-bold">
            {num === null ? '?' : num}
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center">
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-24 px-4 py-2 border rounded-lg text-center text-xl font-bold"
          placeholder="?"
        />
        <Button onClick={() => {
          if (answer === '6') {
            toast.success('🎉 Correct!');
          } else {
            toast.error('Try again!');
          }
        }}>
          Check
        </Button>
      </div>
    </Card>
  );
};

const Patterns = () => {
  const patterns = [
    { pattern: ['🔵', '🔴', '🔵', '🔴'], answer: '🔵', name: 'AB Pattern' },
    { pattern: ['⭐', '⭐', '🌙', '⭐', '⭐'], answer: '🌙', name: 'AAB Pattern' },
    { pattern: ['🟥', '🟦', '🟩', '🟥', '🟦'], answer: '🟩', name: 'ABC Pattern' }
  ];

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-bold text-center">🎨 Complete the Pattern</h3>
      
      {patterns.map((item, idx) => (
        <div key={idx} className="space-y-2">
          <p className="font-semibold text-center">{item.name}</p>
          <div className="flex gap-2 justify-center items-center">
            {item.pattern.map((shape, i) => (
              <div key={i} className="w-12 h-12 border rounded-lg flex items-center justify-center text-2xl">
                {shape}
              </div>
            ))}
            <span className="text-2xl">→</span>
            <div className="w-12 h-12 border-2 border-dashed border-primary rounded-lg flex items-center justify-center text-2xl">
              ?
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};
