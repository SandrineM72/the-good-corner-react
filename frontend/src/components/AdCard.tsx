import FavoriteButton from "./FavoriteButton";

interface AdCardProps {
    ad: {
        id: number;
        title: string;
        price: number;
        pictureUrl: string;
    }
}

export default function AdCard({
    ad: {title, price, pictureUrl},
}: AdCardProps) {
return (
    <div className="w-[400px]">
        <div className="relative shadow-md border rounded-lg p-4 bg-white mr-3 mb-3 cursor-pointer transition-all duration-300 hover:shadow-lg group">
            {/* Couche transparente orangée au hover */}
            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
            
            <img
                className="h-[200px] w-full object-cover rounded-md"
                src={pictureUrl}
                alt={title}
            />
            <div className="flex justify-between pt-6">
                <div className="flex items-center gap-2">
                    <FavoriteButton size="sm" />
                    <div className="ad-card-title">{title}</div>
                </div>
                <div className="ad-card-price">{price} €</div>
            </div>
        </div>
    </div>
);;


}