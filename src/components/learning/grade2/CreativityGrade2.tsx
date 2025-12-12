import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const CreativityGrade2 = () => {
  const [activeActivity, setActiveActivity] = useState<string>('color');

  const activities = [
    { id: 'color', label: '🎨 Coloring' },
    { id: 'memory', label: '🃏 Memory Game' },
    { id: 'puzzle', label: '🧩 Puzzle' },
    { id: 'stickers', label: '✨ Sticker Scene' }
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

      {activeActivity === 'color' && <ColoringPage />}
      {activeActivity === 'memory' && <MemoryGame />}
      {activeActivity === 'puzzle' && <PuzzleGame />}
      {activeActivity === 'stickers' && <StickerScene />}
    </div>
  );
};

const ColoringPage = () => {
  const [selectedColor, setSelectedColor] = useState('#FF6B6B');
  const [colored, setColored] = useState<Record<string, string>>({});

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  const shapes = ['🌸', '🦋', '🌈', '⭐', '🌻', '🎈'];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🎨 Color the Pictures!</h3>
      
      <div className="flex gap-2 justify-center flex-wrap">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-10 h-10 rounded-full border-4 transition-transform hover:scale-110 ${
              selectedColor === color ? 'border-foreground scale-110' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {shapes.map((shape, idx) => (
          <div
            key={idx}
            onClick={() => setColored({ ...colored, [idx]: selectedColor })}
            className="text-6xl text-center p-4 border-2 border-dashed rounded-lg cursor-pointer hover:scale-105 transition-transform"
            style={{ 
              filter: colored[idx] ? 'none' : 'grayscale(100%)',
              color: colored[idx] || 'inherit'
            }}
          >
            {shape}
          </div>
        ))}
      </div>

      <Button onClick={() => setColored({})} variant="outline" className="w-full">
        🔄 Start Over
      </Button>
    </Card>
  );
};

const MemoryGame = () => {
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [cards] = useState(() => {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];
    const pairs = [...emojis, ...emojis];
    return pairs.sort(() => Math.random() - 0.5);
  });

  const handleClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        toast.success('🎉 Match found!');
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🃏 Memory Match Game</h3>
      <p className="text-center text-sm text-muted-foreground">Find matching pairs!</p>
      
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`h-20 rounded-lg text-3xl font-bold transition-all ${
              flipped.includes(idx) || matched.includes(idx)
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            {flipped.includes(idx) || matched.includes(idx) ? card : '❓'}
          </button>
        ))}
      </div>

      {matched.length === cards.length && (
        <div className="text-center text-xl font-bold text-primary animate-bounce">
          🎉 You Won! 🎉
        </div>
      )}
    </Card>
  );
};

const PuzzleGame = () => {
  const [pieces, setPieces] = useState([3, 1, 4, 2, 0]);
  const correctOrder = [0, 1, 2, 3, 4];

  const shuffle = () => {
    setPieces([...pieces].sort(() => Math.random() - 0.5));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newPieces = [...pieces];
    [newPieces[index], newPieces[index - 1]] = [newPieces[index - 1], newPieces[index]];
    setPieces(newPieces);
  };

  const moveDown = (index: number) => {
    if (index === pieces.length - 1) return;
    const newPieces = [...pieces];
    [newPieces[index], newPieces[index + 1]] = [newPieces[index + 1], newPieces[index]];
    setPieces(newPieces);
  };

  const isSolved = pieces.every((piece, idx) => piece === correctOrder[idx]);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🧩 Picture Puzzle</h3>
      <p className="text-center text-sm text-muted-foreground">Arrange in order!</p>
      
      <div className="space-y-2">
        {pieces.map((piece, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="flex-1 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-2xl font-bold">
              🎨 Part {piece + 1}
            </div>
            <div className="flex flex-col gap-1">
              <Button size="sm" onClick={() => moveUp(idx)} disabled={idx === 0}>
                ⬆️
              </Button>
              <Button size="sm" onClick={() => moveDown(idx)} disabled={idx === pieces.length - 1}>
                ⬇️
              </Button>
            </div>
          </div>
        ))}
      </div>

      {isSolved && (
        <div className="text-center text-xl font-bold text-primary animate-bounce">
          🎉 Puzzle Solved! 🎉
        </div>
      )}

      <Button onClick={shuffle} variant="outline" className="w-full">
        🔀 Shuffle
      </Button>
    </Card>
  );
};

const StickerScene = () => {
  const [placedStickers, setPlacedStickers] = useState<Array<{ sticker: string; x: number; y: number }>>([]);
  const stickers = ['🌟', '🌈', '🦋', '🌸', '🎈', '☀️', '🌙', '⭐', '💫', '🎨'];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">✨ Create Your Scene!</h3>
      
      <div className="flex gap-2 flex-wrap justify-center">
        {stickers.map((sticker, idx) => (
          <button
            key={idx}
            onClick={() => {
              const x = Math.random() * 80;
              const y = Math.random() * 60;
              setPlacedStickers([...placedStickers, { sticker, x, y }]);
              toast.success('Sticker placed!');
            }}
            className="text-3xl p-2 hover:scale-125 transition-transform"
          >
            {sticker}
          </button>
        ))}
      </div>

      <div className="relative w-full h-64 bg-gradient-to-b from-sky-100 to-green-100 dark:from-sky-900 dark:to-green-900 rounded-lg overflow-hidden border-2">
        {placedStickers.map((item, idx) => (
          <div
            key={idx}
            className="absolute text-3xl cursor-move"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            {item.sticker}
          </div>
        ))}
      </div>

      <Button onClick={() => setPlacedStickers([])} variant="outline" className="w-full">
        🔄 Clear Scene
      </Button>
    </Card>
  );
};
