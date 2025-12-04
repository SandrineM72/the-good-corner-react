import { useState } from 'react';

interface FavoriteButtonProps {
  initialFavorite?: boolean;
  onToggle?: (isFavorite: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Composant bouton favori en forme de cœur
 * @param initialFavorite - État initial du favori (par défaut: false)
 * @param onToggle - Callback appelé lors du changement d'état (optionnel)
 * @param size - Taille du bouton: 'sm', 'md', 'lg' (par défaut: 'md')
 * @param className - Classes CSS additionnelles (optionnel)
 */
const FavoriteButton = ({ 
  initialFavorite = false, 
  onToggle, 
  size = 'md',
  className = ''
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const newState = !isFavorite;
  e.preventDefault();
  setIsFavorite(newState);
  if (onToggle) {
    onToggle(newState);
  }
};

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full p-1 ${className}`}
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      <svg
        className={`${sizeClasses[size]} transition-all duration-300`}
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          className={isFavorite ? "text-orange-500" : "text-gray-400 hover:text-red-400"}
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;