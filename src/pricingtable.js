import React from 'react';
import './pricingtable.css'; // Assume you have some CSS file for styling

const plans = [
  {
    title: 'Free',
    price: '₹ 0',
    features: [
      'No. of Private Strategies: 10',
      'No. of Public Strategies: ✗',
      'No. of algo strategies you can deploy: 1',
      'No. of stockbag you can deploy: 1',
      'Paper Trading Executions: ✓',
    ],
  },
  {
    title: 'Starter',
    price: '₹ 300',
    features: [
      'No. of Private Strategies: Unlimited',
      'No. of Public Strategies: Unlimited (0 on marketplace)',
      'No. of algo strategies you can deploy: 1',
      'No. of stockbag you can deploy: 1',
      'Paper Trading Executions: ✓',
    ],
  },
  {
    title: 'Retail',
    price: '₹ 1200',
    features: [
      'No. of Private Strategies: Unlimited',
      'No. of Public Strategies: Unlimited (0 on marketplace)',
      'No. of algo strategies you can deploy: 5',
      'No. of stockbag you can deploy: 2',
      'Paper Trading Executions: ✓',
    ],
  },
  {
    title: 'Retail+',
    price: '₹ 2500',
    bestValue: true,
    features: [
      'No. of Private Strategies: Unlimited',
      'No. of Public Strategies: Unlimited (0 on marketplace)',
      'No. of algo strategies you can deploy: 12',
      'No. of stockbag you can deploy: 4',
      'Paper Trading Executions: ✓',
    ],
  },
  {
    title: 'Creator',
    price: '₹ 5000',
    features: [
      'No. of Private Strategies: Unlimited',
      'No. of Public Strategies: Unlimited (5 on marketplace)',
      'No. of algo strategies you can deploy: 25',
      'No. of stockbag you can deploy: 8',
      'Paper Trading Executions: ✓',
    ],
  },
];

const PricingTable = () => {
  return (
    <div className="pricing-table">
      {plans.map((plan, index) => (
        <div key={index} className={`plan ${plan.bestValue ? 'best-value' : ''}`}>
          <h2>{plan.title}</h2>
          <h3>{plan.price}</h3>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
