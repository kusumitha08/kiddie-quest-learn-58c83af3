import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const MathGrade3Interactive = () => {
  const [activeActivity, setActiveActivity] = useState<string>('multiplication');

  const activities = [
    { id: 'multiplication', label: '✖️ Array Builder' },
    { id: 'division', label: '➗ Division Groups' },
    { id: 'fractions', label: '🍕 Pizza Fractions' },
    { id: 'time', label: '🕐 Time Reading' },
    { id: 'word', label: '📝 Word Problems' },
    { id: 'graph', label: '📊 Bar Graph' }
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

      {activeActivity === 'multiplication' && <ArrayBuilder />}
      {activeActivity === 'division' && <DivisionGroups />}
      {activeActivity === 'fractions' && <PizzaFractions />}
      {activeActivity === 'time' && <TimeReading />}
      {activeActivity === 'word' && <WordProblems />}
      {activeActivity === 'graph' && <BarGraph />}
    </div>
  );
};

const ArrayBuilder = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(4);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">✖️ Multiplication Array Builder</h3>
      
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Rows × Columns</p>
          <p className="text-3xl font-bold">{rows} × {cols} = {rows * cols}</p>
        </div>

        <div className="flex gap-4 justify-center">
          <div className="space-y-2">
            <p className="font-semibold text-center">Rows: {rows}</p>
            <div className="flex gap-1">
              <Button size="sm" onClick={() => setRows(Math.max(1, rows - 1))}>-</Button>
              <Button size="sm" onClick={() => setRows(Math.min(10, rows + 1))}>+</Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-center">Columns: {cols}</p>
            <div className="flex gap-1">
              <Button size="sm" onClick={() => setCols(Math.max(1, cols - 1))}>-</Button>
              <Button size="sm" onClick={() => setCols(Math.min(10, cols + 1))}>+</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center">
          {[...Array(rows)].map((_, r) => (
            <div key={r} className="flex gap-1">
              {[...Array(cols)].map((_, c) => (
                <div key={c} className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                  •
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          {rows} groups of {cols} = {rows * cols} total items
        </div>
      </div>
    </Card>
  );
};

const DivisionGroups = () => {
  const [total, setTotal] = useState(12);
  const [groups, setGroups] = useState(3);
  const perGroup = Math.floor(total / groups);
  const remainder = total % groups;

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">➗ Division as Equal Groups</h3>
      
      <div className="text-center">
        <p className="text-3xl font-bold">{total} ÷ {groups} = {perGroup}</p>
        {remainder > 0 && (
          <p className="text-sm text-muted-foreground">Remainder: {remainder}</p>
        )}
      </div>

      <div className="flex gap-4 justify-center">
        <div className="space-y-2">
          <p className="font-semibold text-center">Total Items: {total}</p>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setTotal(Math.max(1, total - 1))}>-</Button>
            <Button size="sm" onClick={() => setTotal(Math.min(20, total + 1))}>+</Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-center">Groups: {groups}</p>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setGroups(Math.max(1, groups - 1))}>-</Button>
            <Button size="sm" onClick={() => setGroups(Math.min(10, groups + 1))}>+</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(groups)].map((_, g) => (
          <Card key={g} className="p-3 space-y-2">
            <p className="text-center font-semibold text-sm">Group {g + 1}</p>
            <div className="flex flex-wrap gap-1 justify-center min-h-[60px]">
              {[...Array(perGroup)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-primary rounded-full"></div>
              ))}
            </div>
            <p className="text-center text-xs">{perGroup} items</p>
          </Card>
        ))}
      </div>

      {remainder > 0 && (
        <Card className="p-3 bg-accent/20">
          <p className="text-center font-semibold text-sm">Leftover</p>
          <div className="flex gap-1 justify-center">
            {[...Array(remainder)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-secondary rounded-full"></div>
            ))}
          </div>
        </Card>
      )}
    </Card>
  );
};

const PizzaFractions = () => {
  const [slices, setSlices] = useState(4);
  const [eaten, setEaten] = useState(1);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🍕 Pizza Fraction Maker</h3>
      
      <div className="text-center">
        <p className="text-4xl font-bold text-primary">
          {eaten}/{slices}
        </p>
        <p className="text-sm text-muted-foreground">
          {eaten} out of {slices} slices
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <div className="space-y-2">
          <p className="font-semibold text-center">Total Slices: {slices}</p>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setSlices(Math.max(2, slices - 1))}>-</Button>
            <Button size="sm" onClick={() => setSlices(Math.min(12, slices + 1))}>+</Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-center">Eaten: {eaten}</p>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setEaten(Math.max(0, eaten - 1))}>-</Button>
            <Button size="sm" onClick={() => setEaten(Math.min(slices, eaten + 1))}>+</Button>
          </div>
        </div>
      </div>

      <div className="relative w-64 h-64 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-orange-600">
          {[...Array(slices)].map((_, i) => {
            const angle = (360 / slices) * i;
            const isEaten = i < eaten;
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: 'center',
                }}
              >
                <div 
                  className={`absolute top-0 left-1/2 w-1 h-1/2 origin-bottom ${
                    isEaten ? 'bg-gray-300' : ''
                  }`}
                  style={{ borderLeft: '2px solid #c2410c' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

const TimeReading = () => {
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(30);

  const formatTime = () => {
    const h = hour % 12 || 12;
    const m = minute.toString().padStart(2, '0');
    const period = hour >= 12 ? 'PM' : 'AM';
    return `${h}:${m} ${period}`;
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🕐 Time Reading Practice</h3>
      
      <div className="text-center text-4xl font-bold text-primary">
        {formatTime()}
      </div>

      <div className="relative w-64 h-64 mx-auto">
        <div className="absolute inset-0 rounded-full border-8 border-foreground bg-background">
          {[...Array(12)].map((_, i) => {
            const angle = (i + 1) * 30 - 90;
            const x = Math.cos(angle * Math.PI / 180) * 100;
            const y = Math.sin(angle * Math.PI / 180) * 100;
            return (
              <div
                key={i}
                className="absolute text-xl font-bold"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {i + 1}
              </div>
            );
          })}
          
          {/* Hour hand */}
          <div
            className="absolute left-1/2 bottom-1/2 w-2 h-16 bg-foreground origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${(hour % 12) * 30 + minute * 0.5}deg)` }}
          />
          
          {/* Minute hand */}
          <div
            className="absolute left-1/2 bottom-1/2 w-1 h-24 bg-primary origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${minute * 6}deg)` }}
          />
          
          <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <div className="space-y-2">
          <p className="font-semibold text-center">Hour: {hour}</p>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setHour((hour - 1 + 24) % 24)}>-</Button>
            <Button size="sm" onClick={() => setHour((hour + 1) % 24)}>+</Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-center">Minute: {minute}</p>
          <div className="flex gap-1">
            <Button size="sm" onClick={() => setMinute((minute - 5 + 60) % 60)}>-5</Button>
            <Button size="sm" onClick={() => setMinute((minute + 5) % 60)}>+5</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const WordProblems = () => {
  const problems = [
    { 
      problem: "Sarah has 3 boxes of crayons. Each box has 8 crayons. How many crayons does she have?",
      answer: 24,
      hint: "Multiply: 3 × 8"
    },
    { 
      problem: "Tom had 15 cookies. He gave 7 to his friend. How many does he have left?",
      answer: 8,
      hint: "Subtract: 15 - 7"
    },
    { 
      problem: "There are 20 students. They form 4 equal groups. How many students in each group?",
      answer: 5,
      hint: "Divide: 20 ÷ 4"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">📝 Word Problem Solver</h3>
      
      <Card className="p-4 bg-accent/20">
        <p className="text-sm leading-relaxed">{problems[current].problem}</p>
      </Card>

      <div className="flex gap-2">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer"
          className="flex-1 px-4 py-2 border rounded-lg text-center text-xl font-bold"
        />
        <Button onClick={() => {
          if (parseInt(userAnswer) === problems[current].answer) {
            toast.success('🎉 Correct!');
            setUserAnswer('');
            setShowHint(false);
            setTimeout(() => setCurrent((current + 1) % problems.length), 1000);
          } else {
            toast.error('Try again!');
          }
        }}>
          Check
        </Button>
      </div>

      <Button 
        onClick={() => setShowHint(!showHint)} 
        variant="outline"
        className="w-full"
      >
        💡 {showHint ? 'Hide' : 'Show'} Hint
      </Button>

      {showHint && (
        <Card className="p-3 bg-yellow-50 dark:bg-yellow-950">
          <p className="text-center text-sm">{problems[current].hint}</p>
        </Card>
      )}
    </Card>
  );
};

const BarGraph = () => {
  const [data, setData] = useState([3, 5, 2, 7]);
  const labels = ['🍎', '🍌', '🍊', '🍇'];
  const max = Math.max(...data, 10);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">📊 Create a Bar Graph</h3>
      
      <div className="flex items-end gap-2 h-64 justify-center">
        {data.map((value, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div className="text-sm font-bold">{value}</div>
            <div 
              className="w-16 bg-primary rounded-t transition-all duration-300"
              style={{ height: `${(value / max) * 200}px` }}
            />
            <div className="text-2xl">{labels[idx]}</div>
            <div className="flex gap-1">
              <Button size="sm" onClick={() => {
                const newData = [...data];
                newData[idx] = Math.max(0, newData[idx] - 1);
                setData(newData);
              }}>-</Button>
              <Button size="sm" onClick={() => {
                const newData = [...data];
                newData[idx] = Math.min(10, newData[idx] + 1);
                setData(newData);
              }}>+</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
