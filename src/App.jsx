import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold">Zanoza Shop</h1>
      </header>
      <main className="flex-grow p-4">
        <p>Добро пожаловать в Zanoza Shop!</p>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm">
        &copy; 2025 Zanoza Shop. Все права защищены.
      </footer>
    </div>
  );
}

export default App;
