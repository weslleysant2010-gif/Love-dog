'use client';

import { Category, CATEGORIES } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CategoryFiltersProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  productCounts: Record<Category, number>;
}

export function CategoryFilters({ 
  selectedCategory, 
  onCategoryChange, 
  productCounts 
}: CategoryFiltersProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Categorias
      </h2>
      
      <div className="space-y-2">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.value;
          const count = productCounts[category.value] || 0;
          
          return (
            <Button
              key={category.value}
              variant={isSelected ? "default" : "ghost"}
              onClick={() => onCategoryChange(category.value)}
              className={`w-full justify-between text-left h-auto p-3 rounded-xl transition-all duration-200 ${
                isSelected 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                  : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
              }`}
            >
              <span className="font-medium">
                {category.label}
              </span>
              
              <Badge 
                variant={isSelected ? "secondary" : "outline"}
                className={`ml-2 ${
                  isSelected 
                    ? 'bg-white/20 text-white border-white/30' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {count}
              </Badge>
            </Button>
          );
        })}
      </div>
    </div>
  );
}