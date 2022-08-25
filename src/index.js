import './/index.css';
import { createRoot } from 'react-dom/client';
import Home from './component/Home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);
