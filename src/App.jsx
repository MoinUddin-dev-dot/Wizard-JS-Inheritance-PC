import React, { useState } from "react";

class Wizard {
  constructor() {
    this.magicNumber = 2;
    this.spell = this.spell.bind(this);
  }

  spell() {
    return `wizard spell: ${this.magicNumber}`;
  }

  castSpell = () => {
    return `wizard castspell: ${this.magicNumber}`;
  };
}

class DarkWizard extends Wizard {
  constructor() {
    super();
    this.magicNumber = 3;
  }

  spell() {
    return `Dark Wizard Spell: ${this.magicNumber}`;
  }
}

function App() {
  const [spellResult, setSpellResult] = useState("");  // State to hold the result

  const wizard = new DarkWizard();

  const handleSpellClick = () => {
    const result = wizard.spell();
    setSpellResult(result);  // Set the result in the state
  };

  const handleCastSpellClick = () => {
    const result = wizard.castSpell();
    setSpellResult(result);  // Set the result in the state
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100 text-center">
      <h1 className="text-2xl font-bold text-black">🧙 Dark Wizard</h1>
      <div className="flex  items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 space-x-4">
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700 w-full sm:w-auto"
          onClick={handleSpellClick}
        >
          Regular Spell
        </button>

        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 w-full sm:w-auto"
          onClick={handleCastSpellClick}
        >
          Arrow Spell
        </button>
      </div>

      {/* Displaying the spell result */}
      <div className="mt-4">
        {spellResult && <p className="text-lg font-semibold text-gray-700">{spellResult}</p>}
      </div>
    </div>
  );
}

export default App;
