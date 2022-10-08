import './App.css';
import CardList from './components/CardList';
import items from './data.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Top of week">
        <CardList items={items} />
      </Section>
    </div>
  );
}
