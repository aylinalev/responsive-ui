import './App.css';
import Accordion from './components/AccordionGrid/Accordion';

import { AccordionItemList } from './utils/const';
function App() {
  return <Accordion list={AccordionItemList} />;
}

export default App;
