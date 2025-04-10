
import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to an auth service
    console.log('Signup attempt with:', { email, password });
    
    toast({
      title: "Account created!",
      description: "You've successfully signed up for WinRewardsHub",
    });
    
    // Close the modal
    onOpenChange(false);
    
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => onOpenChange(false)}>
        <div 
          className="bg-white rounded-lg p-6 w-full max-w-md mx-4" 
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">Join WinRewardsHub</h2>
          <p className="text-rewards-gray mb-6">Create your account to start winning amazing prizes!</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full border-rewards-lightBorder rounded"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border-rewards-lightBorder rounded"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-rewards-orange hover:bg-rewards-orangeDark text-white font-bold py-3 rounded-full transition-colors"
            >
              Submit
            </Button>
          </form>
          
          <button 
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => onOpenChange(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default SignupModal;
