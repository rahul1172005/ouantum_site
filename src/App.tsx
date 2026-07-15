import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Chatbot from './components/common/Chatbot'
import ErrorBoundary from './components/common/ErrorBoundary'
import LoaderOverlay from './components/LoaderOverlay'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SecurityTerms from './pages/SecurityTerms'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import SystemStatus from './pages/SystemStatus'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FAQ from './pages/FAQ'
import NdtAnalysis from './pages/NdtAnalysis'
import IsCompliance from './pages/IsCompliance'
import Consensus from './pages/Consensus'
import ServiceLife from './pages/ServiceLife'
import NotFound from './pages/NotFound'
import FieldDataIn from './pages/FieldDataIn'
import AiAnalysis from './pages/AiAnalysis'
import ReportOut from './pages/ReportOut'
import Capabilities from './pages/Capabilities'
import './styles/global.css'

function GlobalWordHover() {
  const location = useLocation();

  useEffect(() => {
    const handleElement = (el: HTMLElement) => {
      if (el.dataset.wordHovered) return;
      
      const selector = 'p, li span, .side-description, .about-text-block p, .equipment-overlay-description, .service-card-description, .hero-subtext, .subpage-hero-text, .faq-answer, .privacy-text, .careers-description';
      
      if (el.matches(selector) || el.closest(selector)) {
        // If the element closest to the selector has already been processed, skip
        const targetEl = el.matches(selector) ? el : el.closest(selector) as HTMLElement;
        if (targetEl.dataset.wordHovered) return;
        targetEl.dataset.wordHovered = 'true';
        
        // Find all child text nodes
        const walk = document.createTreeWalker(targetEl, NodeFilter.SHOW_TEXT);
        let node: Node | null;
        const textNodes: Node[] = [];
        while ((node = walk.nextNode())) {
          if (node.nodeValue && node.nodeValue.trim()) {
            textNodes.push(node);
          }
        }
        
        textNodes.forEach(textNode => {
          const parent = textNode.parentNode;
          if (!parent) return;
          const parentElement = parent as HTMLElement;
          if (parentElement.tagName === 'SPAN' && parentElement.classList.contains('word-hover-span')) return;
          if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'BUTTON'].includes(parentElement.tagName)) return;
          
          if (!textNode.nodeValue) return;
          const words = textNode.nodeValue.split(/(\s+)/);
          const fragment = document.createDocumentFragment();
          
          words.forEach(word => {
            if (/\s+/.test(word)) {
              fragment.appendChild(document.createTextNode(word));
            } else {
              const span = document.createElement('span');
              span.className = 'word-hover-span';
              span.textContent = word;
              span.style.color = 'inherit';
              span.style.transition = 'color 0.3s ease';
              span.style.cursor = 'default';
              span.style.display = 'inline-block';
              
              span.addEventListener('mouseover', () => {
                span.style.color = '#ffffff';
              });
              span.addEventListener('mouseout', () => {
                span.style.color = 'inherit';
              });
              
              fragment.appendChild(span);
            }
          });
          
          parentElement.replaceChild(fragment, textNode);
        });
      }
    };

    // Run on initial query selector
    const run = () => {
      const elements = document.querySelectorAll(
        'p, li span, .side-description, .about-text-block p, .equipment-overlay-description, .service-card-description, .hero-subtext, .subpage-hero-text, .faq-answer, .privacy-text, .careers-description'
      );
      elements.forEach(el => handleElement(el as HTMLElement));
    };

    // Run once initially after DOM is ready
    const timer = setTimeout(run, 150);

    // Run MutationObserver for dynamically added/revealed components (like Accordions)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            handleElement(el);
            const selector = 'p, li span, .side-description, .about-text-block p, .equipment-overlay-description, .service-card-description, .hero-subtext, .subpage-hero-text, .faq-answer, .privacy-text, .careers-description';
            el.querySelectorAll(selector).forEach(child => handleElement(child as HTMLElement));
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <LoaderOverlay />
      <Router>
        <GlobalWordHover />
        <div className="app-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/system-status" element={<SystemStatus />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/security" element={<SecurityTerms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/capabilities/ndt-analysis-engine" element={<NdtAnalysis />} />
            <Route path="/capabilities/ndt analysis engine" element={<NdtAnalysis />} />
            <Route path="/capabilities/is-code-compliance" element={<IsCompliance />} />
            <Route path="/capabilities/is code compliance" element={<IsCompliance />} />
            <Route path="/capabilities/multi-model-consensus" element={<Consensus />} />
            <Route path="/capabilities/multi model consensus" element={<Consensus />} />
            <Route path="/capabilities/service-life-prediction" element={<ServiceLife />} />
            <Route path="/capabilities/service life prediction" element={<ServiceLife />} />
            <Route path="/how-it-works/field-data-in" element={<FieldDataIn />} />
            <Route path="/how-it-works/ai-analysis" element={<AiAnalysis />} />
            <Route path="/how-it-works/report-out" element={<ReportOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App;
