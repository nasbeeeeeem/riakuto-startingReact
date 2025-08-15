type eUnit = 'USD' | 'EUR' | 'JPY' | 'GBP';

type TCurrency = {
  unit : eUnit;
  amount: number;
};

interface ICurrency {
  unit: eUnit;
  amount: number;
}

const priceA: TCurrency = { unit: 'JPY', amount: 1000 };
const priceB: ICurrency = { unit: 'USD', amount: 10 };
