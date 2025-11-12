'use client';

import { Cart } from '@/lib/types';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface CartSidebarProps {
  cart: Cart;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function CartSidebar({ 
  cart, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}: CartSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="relative bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2.5 transition-all duration-200 hover:scale-105"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          <span className="font-medium">Carrinho</span>
          
          {cart.itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white min-w-[1.5rem] h-6 rounded-full flex items-center justify-center text-xs font-bold">
              {cart.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="border-b border-gray-100 pb-4">
          <SheetTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Seu Carrinho
            {cart.itemCount > 0 && (
              <Badge className="bg-blue-100 text-blue-800">
                {cart.itemCount} {cart.itemCount === 1 ? 'item' : 'itens'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {cart.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Carrinho vazio
              </h3>
              <p className="text-gray-600">
                Adicione alguns produtos para começar suas compras!
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {cart.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-gray-50 rounded-xl p-4 space-y-3"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg bg-white"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {item.product.description}
                        </p>
                        <p className="text-lg font-bold text-gray-900 mt-1">
                          R$ {item.product.price.toFixed(2)}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-white rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 hover:bg-gray-100 rounded-md"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        
                        <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 hover:bg-gray-100 rounded-md"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-600">Subtotal</p>
                        <p className="font-bold text-gray-900">
                          R$ {(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {cart.total.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-105">
                    Finalizar Compra
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={onClearCart}
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl py-2.5"
                  >
                    Limpar Carrinho
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}