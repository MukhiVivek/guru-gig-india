import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building2, UserCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function Auth() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleRoleSelect = (role: 'professional' | 'client') => {
    if (role === 'professional') {
      navigate('/professional-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold">Retire<span className="text-primary">Freelancer</span></span>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join RetireFreelancer</h1>
          <p className="text-muted-foreground">Choose your path to get started</p>
        </div>

        <div className="grid gap-6">
          <Card 
            className="shadow-xl border-border/50 hover:border-primary/50 transition-all cursor-pointer hover:shadow-2xl group"
            onClick={() => handleRoleSelect('professional')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <UserCircle className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Retirement Professional</CardTitle>
              <CardDescription className="text-base">
                Join as a freelancer and share your expertise
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>✓ Flexible work opportunities</p>
                <p>✓ Set your own rates</p>
                <p>✓ Work on your terms</p>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="shadow-xl border-border/50 hover:border-secondary/50 transition-all cursor-pointer hover:shadow-2xl group"
            onClick={() => handleRoleSelect('client')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Building2 className="w-12 h-12 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Company / Client</CardTitle>
              <CardDescription className="text-base">
                Hire experienced professionals for your projects
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>✓ Access verified experts</p>
                <p>✓ AI-powered matching</p>
                <p>✓ Flexible engagement models</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
