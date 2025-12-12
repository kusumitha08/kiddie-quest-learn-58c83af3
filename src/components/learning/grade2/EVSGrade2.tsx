import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const EVSGrade2 = () => {
  const [activeActivity, setActiveActivity] = useState<string>('plant');

  const activities = [
    { id: 'plant', label: '🌱 Plant Growth' },
    { id: 'food', label: '🍎 Food Groups' },
    { id: 'weather', label: '☀️ Weather Match' },
    { id: 'habitat', label: '🏠 Animal Homes' },
    { id: 'lifecycle', label: '🦋 Life Cycles' }
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

      {activeActivity === 'plant' && <PlantGrowth />}
      {activeActivity === 'food' && <FoodGroups />}
      {activeActivity === 'weather' && <WeatherMatch />}
      {activeActivity === 'habitat' && <AnimalHabitat />}
      {activeActivity === 'lifecycle' && <LifeCycles />}
    </div>
  );
};

const PlantGrowth = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    { emoji: '🌰', name: 'Seed', description: 'A tiny seed in the soil' },
    { emoji: '🌱', name: 'Sprout', description: 'The seed starts to grow' },
    { emoji: '🪴', name: 'Seedling', description: 'Small plant with leaves' },
    { emoji: '🌿', name: 'Young Plant', description: 'Growing bigger!' },
    { emoji: '🌻', name: 'Flower', description: 'Beautiful flower blooms!' }
  ];

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-bold text-center">🌱 Watch a Plant Grow!</h3>
      
      <div className="text-center space-y-4">
        <div className="text-8xl animate-scale-in">{stages[stage].emoji}</div>
        <div className="space-y-2">
          <p className="text-2xl font-bold">{stages[stage].name}</p>
          <p className="text-muted-foreground">{stages[stage].description}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={() => setStage(Math.max(0, stage - 1))} 
          disabled={stage === 0}
          variant="outline"
          className="flex-1"
        >
          ⬅️ Previous
        </Button>
        <Button 
          onClick={() => setStage(Math.min(stages.length - 1, stage + 1))} 
          disabled={stage === stages.length - 1}
          className="flex-1"
        >
          Next ➡️
        </Button>
      </div>

      <div className="flex justify-center gap-2">
        {stages.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === stage ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>
    </Card>
  );
};

const FoodGroups = () => {
  const [selectedGroup, setSelectedGroup] = useState<'healthy' | 'junk' | null>(null);
  
  const foods = [
    { name: 'Apple', emoji: '🍎', group: 'healthy' },
    { name: 'Carrot', emoji: '🥕', group: 'healthy' },
    { name: 'Milk', emoji: '🥛', group: 'healthy' },
    { name: 'Burger', emoji: '🍔', group: 'junk' },
    { name: 'Pizza', emoji: '🍕', group: 'junk' },
    { name: 'Candy', emoji: '🍬', group: 'junk' },
    { name: 'Broccoli', emoji: '🥦', group: 'healthy' },
    { name: 'Chips', emoji: '🍟', group: 'junk' }
  ];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🍎 Sort Healthy vs Junk Food</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-green-50 dark:bg-green-950">
          <h4 className="font-bold text-center mb-3 text-green-700 dark:text-green-300">
            ✅ Healthy Food
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {foods.filter(f => f.group === 'healthy').map((food, idx) => (
              <div key={idx} className="text-center p-2 bg-background rounded-lg">
                <div className="text-3xl">{food.emoji}</div>
                <p className="text-xs mt-1">{food.name}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-red-50 dark:bg-red-950">
          <h4 className="font-bold text-center mb-3 text-red-700 dark:text-red-300">
            ⚠️ Junk Food
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {foods.filter(f => f.group === 'junk').map((food, idx) => (
              <div key={idx} className="text-center p-2 bg-background rounded-lg">
                <div className="text-3xl">{food.emoji}</div>
                <p className="text-xs mt-1">{food.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
};

const WeatherMatch = () => {
  const weather = [
    { type: 'Sunny', emoji: '☀️', activity: '🏖️ Go to beach', color: 'bg-yellow-100 dark:bg-yellow-900' },
    { type: 'Rainy', emoji: '🌧️', activity: '☔ Use umbrella', color: 'bg-blue-100 dark:bg-blue-900' },
    { type: 'Cloudy', emoji: '☁️', activity: '🎨 Stay indoors', color: 'bg-gray-100 dark:bg-gray-800' },
    { type: 'Snowy', emoji: '❄️', activity: '⛄ Build snowman', color: 'bg-cyan-100 dark:bg-cyan-900' }
  ];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">☀️ Match Weather & Activity</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {weather.map((item, idx) => (
          <Card key={idx} className={`p-4 text-center space-y-2 ${item.color} cursor-pointer hover:scale-105 transition-transform`}>
            <div className="text-5xl">{item.emoji}</div>
            <p className="font-bold">{item.type}</p>
            <p className="text-sm">{item.activity}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
};

const AnimalHabitat = () => {
  const [selected, setSelected] = useState<{ animal?: string; habitat?: string }>({});
  
  const matches = [
    { animal: '🐠', habitat: '🌊 Ocean', name: 'Fish' },
    { animal: '🐪', habitat: '🏜️ Desert', name: 'Camel' },
    { animal: '🐧', habitat: '🧊 Ice', name: 'Penguin' },
    { animal: '🐒', habitat: '🌳 Forest', name: 'Monkey' }
  ];

  const checkMatch = () => {
    const match = matches.find(m => m.animal === selected.animal);
    if (match && match.habitat === selected.habitat) {
      toast.success(`🎉 Correct! ${match.name} lives in ${match.habitat}`);
      setSelected({});
    } else {
      toast.error('Try again!');
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🏠 Match Animals to Their Homes</h3>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <p className="font-semibold text-center">Animals</p>
          <div className="grid grid-cols-2 gap-2">
            {matches.map((match) => (
              <Button
                key={match.animal}
                onClick={() => setSelected({ ...selected, animal: match.animal })}
                variant={selected.animal === match.animal ? "default" : "outline"}
                className="h-20 text-4xl"
              >
                {match.animal}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-center">Habitats</p>
          <div className="grid grid-cols-2 gap-2">
            {matches.map((match) => (
              <Button
                key={match.habitat}
                onClick={() => setSelected({ ...selected, habitat: match.habitat })}
                variant={selected.habitat === match.habitat ? "default" : "outline"}
                className="h-20 text-lg"
              >
                {match.habitat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {selected.animal && selected.habitat && (
        <Button onClick={checkMatch} className="w-full">
          Check Match
        </Button>
      )}
    </Card>
  );
};

const LifeCycles = () => {
  const [cycle, setCycle] = useState<'frog' | 'butterfly'>('butterfly');
  
  const cycles = {
    butterfly: [
      { stage: '🥚 Egg', desc: 'Tiny egg on a leaf' },
      { stage: '🐛 Caterpillar', desc: 'Eats lots of leaves' },
      { stage: '🥜 Chrysalis', desc: 'Rests in a cocoon' },
      { stage: '🦋 Butterfly', desc: 'Beautiful butterfly!' }
    ],
    frog: [
      { stage: '🥚 Eggs', desc: 'Jelly-like eggs in water' },
      { stage: '🐟 Tadpole', desc: 'Swims like a fish' },
      { stage: '🦎 Froglet', desc: 'Growing legs' },
      { stage: '🐸 Frog', desc: 'Adult frog!' }
    ]
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🦋 Life Cycles</h3>
      
      <div className="flex gap-2 justify-center">
        <Button
          onClick={() => setCycle('butterfly')}
          variant={cycle === 'butterfly' ? 'default' : 'outline'}
        >
          🦋 Butterfly
        </Button>
        <Button
          onClick={() => setCycle('frog')}
          variant={cycle === 'frog' ? 'default' : 'outline'}
        >
          🐸 Frog
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {cycles[cycle].map((item, idx) => (
          <Card key={idx} className="p-4 text-center space-y-2">
            <div className="text-4xl">{item.stage.split(' ')[0]}</div>
            <p className="font-bold text-sm">{item.stage}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
};
