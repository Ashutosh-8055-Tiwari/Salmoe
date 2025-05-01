import React, { useState } from 'react';


const HealthConcernFlower = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedPetal, setSelectedPetal] = useState(null);

  const petals = [
    { id: 'hormonal', label: 'HORMONAL IMBALANCE', color: '#7b8b5a', position: 0, desc: 'Hormonal imbalances can affect many bodily functions, including skin health. Fluctuations in hormones like estrogen, progesterone, and testosterone can trigger acne breakouts and other skin conditions.' },
    { id: 'hair', label: 'HAIR FALL', color: '#3e5e36', position: 72, desc: 'Hair loss can be connected to nutritional deficiencies, hormonal changes, stress, and gut health. Addressing the root cause often requires a holistic approach to improve overall health.' },
    { id: 'sleep', label: 'SLEEP', color: '#94a36c', position: 144, desc: 'Poor sleep affects hormone regulation, immune function, and cellular repair. This can manifest as skin issues, weight gain, and other health concerns.' },
    { id: 'bloating', label: 'BLOATING', color: '#e38f7d', position: 216, desc: 'Certain bacteria in our gut play a crucial role in breaking down fiber. When there\'s an imbalance in the microbiome, these fiber-breaking bacteria may decrease in number. As a result, undigested fiber ferments and produces gas, which can lead to bloating.' },
    { id: 'acne', label: 'ACNE', color: '#e27d68', position: 288, desc: 'Acne is often a reflection of internal imbalances rather than just a skin problem. Gut health, hormones, inflammation, and diet all play significant roles in skin appearance.' }
  ];

  const handlePetalClick = (index) => {
    const petalPosition = petals[index].position;
    const newRotation = 216 - petalPosition;
    setRotation(newRotation);
    setSelectedPetal(index);
  };

  const additionalOptions = [
    { id: 'gut', label: 'IMBALANCE IN THE GUT MICROBIOTA' },
    { id: 'food', label: 'FOOD INTOLERANCES' }
  ];

  return (
    <div className="heatflower-container">
      <h2 className="heatflower-title">ADDRESS THE ROOT-CAUSE, NOT JUST THE SYMPTOMS.</h2>
      <p className="heatflower-text">
        When we get acne, we often reach for a new serum or drink more water, hoping for a quick fix. 
        But the truth is, our skin reflects our internal health. Often, the root cause lies deeper, in your liver, gut, or hormones. 
        That's why our formulations are designed with this holistic approach in mind. 
        Explore the feature below to see how interconnected our health truly is!
      </p>

      <div className="heatflower-wrapper">
        <div className="heatflower-graphic" style={{ transition: 'all 0.5s ease-in-out' }}>
          {petals.map((petal, index) => (
            <div
              key={petal.id}
              className="heatflower-petal"
              style={{
                backgroundColor: petal.color,
                transform: `rotate(${petal.position + rotation}deg) translate(0, -120px) rotate(-${petal.position + rotation}deg)`,
              }}
              onClick={() => handlePetalClick(index)}
            >
              {petal.label}
            </div>
          ))}
          <div className="heatflower-center">
            tap on a<br />health concern
          </div>
        </div>
      </div>

      {selectedPetal !== null && (
        <div className="heatflower-description">
          <p>{petals[selectedPetal].desc}</p>
        </div>
      )}

      <div className="heatflower-buttons">
        {additionalOptions.map(option => (
          <button key={option.id} className="heatflower-button">
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HealthConcernFlower;
