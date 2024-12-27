import React from 'react';
import { Droplet, Leaf, Star, Sun, Heart, Shield, Flower, Sparkles } from 'lucide-react';

const ingredients = [
  {
    name: 'Ceramides',
    description: 'Strengthen the skin\'s barrier and retain moisture.',
    icon: Shield,
  },
  {
    name: 'Niacinamide',
    description: 'Reduces inflammation and brightens skin.',
    icon: Sun,
  },
  {
    name: 'Hyaluronic Acid',
    description: 'Deeply hydrates and plumps the skin.',
    icon: Droplet,
  },
  {
    name: 'Argan Oil',
    description: 'Rich in antioxidants, protects and nourishes.',
    icon: Leaf,
  },
  {
    name: 'Mandelic Acid',
    description: 'Gentle exfoliation and skin renewal.',
    icon: Star,
  },
  {
    name: 'Salicylic Acid',
    description: 'Deep cleanses pores and fights acne.',
    icon: Sparkles,
  },
  {
    name: 'Oat Proteins',
    description: 'Soothes and protects sensitive skin.',
    icon: Heart,
  },
  {
    name: 'Peptides',
    description: 'Stimulate collagen production for a youthful glow.',
    icon: Flower,
  },
];

const Ingredients = () => {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Ingredients We Use for Your Skin's Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient) => (
            <div key={ingredient.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <ingredient.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{ingredient.name}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;