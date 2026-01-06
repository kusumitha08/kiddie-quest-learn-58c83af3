import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import { AccessibilityProvider } from "./hooks/useAccessibility";
import { AccessibilityToolbar } from "./components/AccessibilityToolbar";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import GradePage from "./pages/GradePage";
import SubjectPage from "./pages/SubjectPage";
import QuizPage from "./pages/QuizPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <AccessibilityProvider>
          <Toaster />
          <Sonner />
          <AccessibilityToolbar />
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
              <Route path="/grade/:gradeNumber" element={<ProtectedRoute><GradePage /></ProtectedRoute>} />
              <Route path="/grade/:gradeNumber/:subject" element={<ProtectedRoute><SubjectPage /></ProtectedRoute>} />
              <Route path="/quiz/:gradeNumber/:subject" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AccessibilityProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
