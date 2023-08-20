import './07-shared/assets/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './01-app/providers/router';
import { ThemeProvider } from './07-shared/providers/themeProvider/ui/ThemeProvider';

const root = createRoot(document.getElementById('root'));

root.render(<ThemeProvider><AppRouter /></ThemeProvider>);
