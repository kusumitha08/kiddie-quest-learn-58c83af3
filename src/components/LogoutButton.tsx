import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/auth');
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant="outline" 
      size="lg" 
      className="font-bold"
    >
      <LogOut className="w-5 h-5 mr-2" />
      Logout
    </Button>
  );
};
