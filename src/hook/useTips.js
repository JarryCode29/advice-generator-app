// hooks/useTips.js

import { useState } from 'react';

export const useTips = () => {
  const [tips, setTips] = useState('');
  const [tipsId, setTipId] = useState('');

  const getTips = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Respuesta de red incorrecta');
      }
      const data = await response.json();
      const { id, advice } = data.slip;
      setTipId(`ADVICE #${id}`);
      setTips(advice);
    } catch (error) {
      console.error('Error al obtener el consejo:', error.message);
    }
  };

  return { tips, tipsId, getTips };
};
