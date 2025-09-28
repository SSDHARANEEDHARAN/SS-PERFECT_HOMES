import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Home } from 'lucide-react';

interface SuccessAnimationProps {
  type: 'signup' | 'login';
  userName?: string;
  onContinue: () => void;
}

const SuccessAnimation = ({ type, userName, onContinue }: SuccessAnimationProps) => {
  const [showDoor, setShowDoor] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Trigger door opening animation
    setTimeout(() => setShowDoor(true), 300);
    // Show welcome message
    setTimeout(() => setShowMessage(true), 1000);
    // Show final welcome
    setTimeout(() => setShowWelcome(true), 1500);
  }, []);

  const message = type === 'signup' 
    ? 'Thank you! Welcome to SS Perfect Home\'s/Interiors & Solutions'
    : `Welcome back${userName ? `, ${userName}` : ''}! Welcome to SS Perfect Home\'s/Interiors & Solutions`;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        {/* Door Animation */}
        <div className="relative mx-auto w-64 h-64">
          <div className="absolute inset-0 bg-gradient-primary rounded-lg shadow-elegant">
            {/* Door Frame */}
            <div className="absolute inset-2 border-4 border-primary-foreground rounded-lg">
              {/* Left Door */}
              <div 
                className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-primary border-r-2 border-primary-foreground rounded-l-lg transition-transform duration-1000 origin-left ${
                  showDoor ? '-rotate-y-90' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: showDoor ? 'perspective(400px) rotateY(-90deg)' : 'perspective(400px) rotateY(0deg)'
                }}
              >
                <div className="absolute right-2 top-1/2 w-2 h-2 bg-primary-foreground rounded-full transform -translate-y-1/2"></div>
              </div>
              
              {/* Right Door */}
              <div 
                className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-primary border-l-2 border-primary-foreground rounded-r-lg transition-transform duration-1000 origin-right ${
                  showDoor ? 'rotate-y-90' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: showDoor ? 'perspective(400px) rotateY(90deg)' : 'perspective(400px) rotateY(0deg)'
                }}
              >
                <div className="absolute left-2 top-1/2 w-2 h-2 bg-primary-foreground rounded-full transform -translate-y-1/2"></div>
              </div>

              {/* Interior View */}
              <div className={`absolute inset-0 bg-gradient-hero opacity-0 transition-opacity duration-1000 ${showDoor ? 'opacity-100' : ''}`}>
                <div className="flex items-center justify-center h-full">
                  <Home className="w-16 h-16 text-primary-foreground animate-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Check */}
        <div className={`transition-all duration-500 ${showMessage ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
            <Check className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Welcome Message */}
        <div className={`transition-all duration-500 ${showWelcome ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            {type === 'signup' ? 'Thank You!' : 'Welcome Back!'}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            {message}
          </p>

          {/* Company Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SS</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Perfect Home's</h2>
              <p className="text-sm text-muted-foreground">Interiors & Solutions</p>
            </div>
          </div>

          <Button 
            onClick={onContinue}
            variant="cta"
            size="lg"
            className="animate-glow"
          >
            Continue to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessAnimation;