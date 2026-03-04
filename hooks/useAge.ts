"use client";

import { useState, useEffect } from "react";

/**
 * Calculates age from birthdate
 * @param birthDateString - ISO date string (YYYY-MM-DD)
 * @returns Current age in years
 */
export function useAge(birthDateString: string): number {
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(birthDateString);
      const today = new Date();
      
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      // Adjust if birthday hasn't occurred this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge);
    };

    calculateAge();
  }, [birthDateString]);

  return age;
}

export default useAge;
