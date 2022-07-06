import './App.css';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';
// import NestingComponents from './components/NestingComponents';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import RenderingLists from './components/RenderingLists';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Louw"/>
      < EventsFunctional />
      <EventsClass /> */}
      {/* <ConditionalRenderingFunctional connected={false} />
      <ConditionalRenderingClass /> */}
      {/* <NestingComponents/> */}
      {/* <MethodsAsPropsParent /> */}
      <RenderingLists />
    </div>
  );
}

export default App;
