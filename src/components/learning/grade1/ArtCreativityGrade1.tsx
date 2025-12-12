import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const ArtCreativityGrade1 = () => {
  const [activeActivity, setActiveActivity] = useState<string>('coloring');

  const activities = [
    { id: 'coloring', label: '🎨 Coloring' },
    { id: 'stickers', label: '✨ Sticker Scene' },
    { id: 'tracing', label: '✏️ Draw Shapes' }
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

      {activeActivity === 'coloring' && <ColoringPage />}
      {activeActivity === 'stickers' && <StickerScene />}
      {activeActivity === 'tracing' && <DrawShapes />}
    </div>
  );
};

const ColoringPage = () => {
  const [selectedColor, setSelectedColor] = useState('#FF6B6B');
  const [colored, setColored] = useState<Record<string, string>>({});

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
    '#FF69B4', '#90EE90', '#FFD700', '#FF8C00'
  ];
  
  const shapes = [
    { emoji: '🌸', name: 'Flower' },
    { emoji: '🦋', name: 'Butterfly' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '⭐', name: 'Star' },
    { emoji: '🌻', name: 'Sunflower' },
    { emoji: '🎈', name: 'Balloon' },
    { emoji: '🐠', name: 'Fish' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🐶', name: 'Dog' }
  ];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🎨 Paint with Colors!</h3>
      
      <div className="space-y-2">
        <p className="text-center font-semibold">Pick a Color:</p>
        <div className="flex gap-2 justify-center flex-wrap">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                setSelectedColor(color);
                toast.success('Color selected! 🎨');
              }}
              className={`w-12 h-12 rounded-full border-4 transition-transform hover:scale-110 ${
                selectedColor === color ? 'border-foreground scale-110 ring-4 ring-primary' : 'border-border'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Click on any picture to color it!
      </p>

      <div className="grid grid-cols-3 gap-4">
        {shapes.map((shape, idx) => (
          <div
            key={idx}
            onClick={() => {
              setColored({ ...colored, [idx]: selectedColor });
              toast.success(`Colored the ${shape.name}! 🎨`);
            }}
            className="text-6xl text-center p-4 border-4 border-dashed rounded-lg cursor-pointer hover:scale-105 transition-transform bg-background"
            style={{ 
              filter: colored[idx] ? 'none' : 'grayscale(100%)',
              color: colored[idx] || 'inherit',
              borderColor: colored[idx] || 'hsl(var(--border))'
            }}
          >
            {shape.emoji}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setColored({})} variant="outline" className="flex-1">
          🔄 Start Over
        </Button>
        <Button 
          onClick={() => toast.success('Great job! Your art is beautiful! 🎨✨')} 
          className="flex-1"
        >
          ✅ Done!
        </Button>
      </div>
    </Card>
  );
};

const StickerScene = () => {
  const [placedStickers, setPlacedStickers] = useState<Array<{ sticker: string; x: number; y: number }>>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const stickers = [
    '🌟', '🌈', '🦋', '🌸', '🎈', '☀️', '🌙', '⭐', '💫', '🎨',
    '🐶', '🐱', '🐰', '🦊', '🐻', '🌻', '🌺', '🌷', '🍎', '🍓'
  ];

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    setPlacedStickers([...placedStickers, { sticker: randomSticker, x, y }]);
    toast.success('Sticker placed! ✨');
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">✨ Create Your Scene!</h3>
      
      <p className="text-center text-sm text-muted-foreground">
        Click on stickers below, then click on the canvas to place them!
      </p>

      <div className="flex gap-2 flex-wrap justify-center p-2 bg-accent/20 rounded-lg">
        {stickers.map((sticker, idx) => (
          <button
            key={idx}
            onClick={() => {
              const x = Math.random() * 80 + 10;
              const y = Math.random() * 60 + 10;
              setPlacedStickers([...placedStickers, { sticker, x, y }]);
              toast.success('Sticker added! ✨');
            }}
            className="text-4xl p-2 hover:scale-125 transition-transform bg-background rounded-lg"
          >
            {sticker}
          </button>
        ))}
      </div>

      <div 
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="relative w-full h-80 bg-gradient-to-b from-sky-200 via-sky-100 to-green-200 dark:from-sky-900 dark:via-sky-800 dark:to-green-900 rounded-lg overflow-hidden border-4 border-primary cursor-crosshair"
      >
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-300 to-transparent dark:from-green-800"></div>
        
        {placedStickers.map((item, idx) => (
          <div
            key={idx}
            className="absolute text-4xl cursor-pointer hover:scale-125 transition-transform"
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
            onClick={(e) => {
              e.stopPropagation();
              setPlacedStickers(placedStickers.filter((_, i) => i !== idx));
              toast.success('Sticker removed!');
            }}
          >
            {item.sticker}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setPlacedStickers([])} variant="outline" className="flex-1">
          🗑️ Clear Scene
        </Button>
        <Button 
          onClick={() => toast.success('Beautiful scene! Great job! 🎨✨')} 
          className="flex-1"
        >
          ✅ Done!
        </Button>
      </div>
    </Card>
  );
};

const DrawShapes = () => {
  const [currentShape, setCurrentShape] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const shapes = [
    { name: 'Circle', emoji: '🔵', path: 'M 150 50 A 50 50 0 1 1 149.99 50' },
    { name: 'Square', emoji: '🟦', path: 'M 100 50 L 200 50 L 200 150 L 100 150 Z' },
    { name: 'Triangle', emoji: '🔺', path: 'M 150 50 L 200 150 L 100 150 Z' },
    { name: 'Star', emoji: '⭐', path: 'M 150 50 L 165 100 L 220 100 L 175 135 L 195 185 L 150 150 L 105 185 L 125 135 L 80 100 L 135 100 Z' },
    { name: 'Heart', emoji: '❤️', path: 'M 150 180 C 150 180, 100 150, 100 110 C 100 80, 120 60, 150 90 C 180 60, 200 80, 200 110 C 200 150, 150 180, 150 180' }
  ];

  const startDrawing = () => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'hsl(var(--primary))';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
      }
    }
    toast.success('Great tracing! 🎨');
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">✏️ Trace the Shapes!</h3>
      
      <div className="flex gap-2 justify-center flex-wrap">
        {shapes.map((shape, idx) => (
          <Button
            key={idx}
            onClick={() => {
              setCurrentShape(idx);
              const canvas = canvasRef.current;
              if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
              }
            }}
            variant={currentShape === idx ? "default" : "outline"}
            className="text-xl"
          >
            {shape.emoji} {shape.name}
          </Button>
        ))}
      </div>

      <div className="relative">
        <svg 
          className="absolute inset-0 pointer-events-none" 
          width="100%" 
          height="300"
          viewBox="0 0 300 200"
        >
          <path 
            d={shapes[currentShape].path} 
            fill="none" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth="3" 
            strokeDasharray="10,5"
            opacity="0.5"
          />
        </svg>
        
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="w-full h-[300px] border-4 border-dashed rounded-lg cursor-crosshair bg-background"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas) {
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
              }
            }
          }} 
          variant="outline" 
          className="flex-1"
        >
          🔄 Clear
        </Button>
        <Button 
          onClick={() => toast.success('Excellent tracing! You\'re doing great! 🌟')} 
          className="flex-1"
        >
          ✅ Done!
        </Button>
      </div>
    </Card>
  );
};
