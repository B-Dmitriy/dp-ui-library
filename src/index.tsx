import './07-shared/assets/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { AppRouter } from "./01-app/providers/router";

const root = createRoot(document.getElementById("root"));

root.render(<AppRouter />);
