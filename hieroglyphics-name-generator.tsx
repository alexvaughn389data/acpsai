import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Hieroglyphic mapping (approximation of sounds/letters)
const HIEROGLYPHIC_MAP = {
  'a': '𓄿',
  'b': '𓃀',
  'c': '𓏲',
  'd': '𓆓',
  'e': '𓏺',
  'f': '𓏯',
  'g': '𓎼',
  'h': '𓈖',
  'i': '𓇳',
  'j': '𓏺',
  'k': '𓏲',
  'l': '𓃭',
  'm': '𓅓',
  'n': '𓈖',
  'o': '𓏺',
  'p': '𓊪',
  'q': '𓏲',
  'r': '𓂋',
  's': '𓋴',
  't': '𓏏',
  'u': '𓏺',
  'v': '𓏯',
  'w': '𓏲',
  'x': '𓏲',
  'y': '𓏺',
  'z': '𓊃'
};

const HieroglyphicNameGenerator = () => {
  const [name, setName] = useState('');
  const [hieroglyphicName, setHieroglyphicName] = useState('');

  const translateToHieroglyphics = (inputName) => {
    return inputName
      .toLowerCase()
      .split('')
      .map(char => HIEROGLYPHIC_MAP[char] || char)
      .join(' ');
  };

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    setHieroglyphicName(translateToHieroglyphics(inputName));
  };

  return (
    <div className="relative w-full h-[500px] bg-cover bg-center" style={{
      backgroundImage: `url("/api/placeholder/1200/500?text=Ancient+Egypt")`
    }}>
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Hieroglyphic Name Translator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
            />
            <div className="text-2xl font-serif text-center min-h-[60px]">
              {hieroglyphicName || 'Your name in hieroglyphics'}
            </div>
            <p className="text-sm text-gray-600">
              Note: This is a simplified translation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HieroglyphicNameGenerator;
