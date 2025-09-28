import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import SuccessAnimation from '@/components/SuccessAnimation';
import { Loader2, Eye, EyeOff, Mail, Lock, User, Home, Sparkles } from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();
  const { signUp, signIn } = useAuth();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successType, setSuccessType] = useState<'signup' | 'login'>('signup');
  const [userName, setUserName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(loginData.email, loginData.password);
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: error.message
        });
        return;
      }

      setSuccessType('login');
      setUserName(loginData.email.split('@')[0]);
      setShowSuccess(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "An unexpected error occurred"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Password Mismatch",
        description: "Passwords do not match"
      });
      return;
    }

    if (signupData.password.length < 6) {
      toast({
        variant: "destructive",
        title: "Password Too Short",
        description: "Password must be at least 6 characters long"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(
        signupData.email, 
        signupData.password, 
        signupData.firstName, 
        signupData.lastName
      );
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Signup Failed",
          description: error.message
        });
        return;
      }

      setSuccessType('signup');
      setUserName(`${signupData.firstName} ${signupData.lastName}`);
      setShowSuccess(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "An unexpected error occurred"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <SuccessAnimation 
        type={successType}
        userName={userName}
        onContinue={() => navigate('/')}
      />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-auth">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent/30 rotate-45 floating-animation"></div>
        <div className="absolute top-3/4 right-20 w-6 h-6 bg-tech/30 rotate-12 floating-animation delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-craft/30 rounded-full floating-animation delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="absolute top-0 left-0 text-primary-foreground hover:bg-white/10 mb-6"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-6 mt-12">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
                <span className="text-primary-foreground font-bold text-2xl">PH</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse">
                <Sparkles className="w-4 h-4 text-background m-1" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground glow-text">Perfect Home's</h1>
              <p className="text-lg text-primary-foreground/80">Interiors & Solutions</p>
            </div>
          </div>
          <p className="text-xl text-primary-foreground/90 font-light">
            Welcome to your premium experience
          </p>
        </div>

        {/* Main Auth Card */}
        <Card className="glass-card border-white/20 shadow-2xl backdrop-blur-xl animate-scale-in">
          <CardHeader className="space-y-2 text-center pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join Our Community
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Sign in to access exclusive features and projects
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-background/50 backdrop-blur-sm p-1 rounded-xl">
                <TabsTrigger 
                  value="login" 
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="signup"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Create Account
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-6 animate-fade-in">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-base font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={loginData.email}
                      onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-base font-medium flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300 pr-12"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-primary/10 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 button-glow transition-all duration-300" 
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    {isLoading ? 'Signing In...' : 'Sign In to Your Account'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-6 animate-fade-in">
                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-base font-medium flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-base font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        value={signupData.lastName}
                        onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-base font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={signupData.email}
                      onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                      className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-base font-medium flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a secure password"
                        value={signupData.password}
                        onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                        className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300 pr-12"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-primary/10 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-base font-medium flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        className="h-12 text-lg bg-background/50 border-border/50 focus:border-primary focus:ring-primary input-glow transition-all duration-300 pr-12"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-primary/10 transition-colors"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 button-glow transition-all duration-300" 
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    {isLoading ? 'Creating Account...' : 'Create Your Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Additional Features */}
            <div className="pt-6 border-t border-border/20">
              <p className="text-center text-sm text-muted-foreground mb-4">
                By continuing, you agree to our terms of service
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Secure & Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Premium Experience
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;