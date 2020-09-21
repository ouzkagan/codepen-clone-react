import React from 'react';

function App() {
  return (
    <>
      <div className="pane top-pane"></div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
        />
      </div>
    </>
  );
}

export default App;
