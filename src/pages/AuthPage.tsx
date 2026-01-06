import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

const AuthPage = () => {
  const navigate = useNavigate();
  const { login, signup, isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    grade: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const success = login(formData.username, formData.password);
      if (success) {
        toast.success('Welcome back to LearnQuest! 🎉');
        navigate('/');
      } else {
        toast.error('Invalid username or password');
      }
    } else {
      if (!formData.name || !formData.username || !formData.password || !formData.grade) {
        toast.error('Please fill in all fields');
        return;
      }
      const success = signup(formData.name, formData.username, formData.password, formData.grade);
      if (success) {
        toast.success(`Welcome to LearnQuest, ${formData.name}! 🌟`);
        navigate('/');
      } else {
        toast.error('Username already exists');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white border-4 border-white shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Star className="w-16 h-16 text-primary fill-primary animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isLogin ? 'Welcome Back!' : 'Join LearnQuest!'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {isLogin ? 'Continue your learning adventure' : 'Start your learning journey today'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <Label htmlFor="name" className="text-lg font-semibold">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 h-12 text-lg"
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="username" className="text-lg font-semibold">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="mt-2 h-12 text-lg"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-lg font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-2 h-12 text-lg"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <Label htmlFor="grade" className="text-lg font-semibold">Select Your Grade</Label>
              <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                <SelectTrigger className="mt-2 h-12 text-lg">
                  <SelectValue placeholder="Choose your grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Grade 1</SelectItem>
                  <SelectItem value="2">Grade 2</SelectItem>
                  <SelectItem value="3">Grade 3</SelectItem>
                  <SelectItem value="4">Grade 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-14 text-xl font-bold bg-primary hover:bg-primary/90"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-semibold hover:underline text-lg"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default AuthPage;
