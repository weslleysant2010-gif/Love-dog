'use client';

import { Product } from '@/lib/types';
import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  cartQuantity: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  cartQuantity, 
  onUpdateQuantity 
}: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <Badge className="bg-red-500 text-white font-semibold">
              -{discountPercent}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="bg-gray-500 text-white">
              Esgotado
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews} avaliações)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            R$ {product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice!.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <div className="pt-2">
          {cartQuantity === 0 ? (
            <Button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onUpdateQuantity(product.id, cartQuantity - 1)}
                className="h-8 w-8 p-0 hover:bg-gray-200 rounded-lg"
              >
                <Minus className="w-4 h-4" />
              </Button>
              
              <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                {cartQuantity}
              </span>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onUpdateQuantity(product.id, cartQuantity + 1)}
                className="h-8 w-8 p-0 hover:bg-gray-200 rounded-lg"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}