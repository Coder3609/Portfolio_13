import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Skills = lazy(() => import('./pages/Skills.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-cyan"></div>
    </div>
  );

  const NotFound = () => (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <a href="/" className="px-6 py-3 bg-accent-cyan text-dark-900 rounded-lg hover:bg-accent-neon transition-colors">Go Home</a>
      </div>
    </div>
  );

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-dark-900 text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
              <p className="mb-8">We're sorry for the inconvenience. Please try reloading the page.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-accent-cyan text-dark-900 rounded-lg hover:bg-accent-neon transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        );
      }

      return this.props.children;
    }
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
