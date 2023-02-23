import React from 'react';
//import SplashScreen from 'react-native-splash-screen';
import {TasksProvider} from './src/context/useTasks';
import {Home} from './src/home';

const App = () => {
  // React.useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
