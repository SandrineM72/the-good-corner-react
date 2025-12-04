import Link from "next/link";

export default function Header(){
    return (
        <header className="p-4 border-b border-gray-400 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img 
                    src="/images/voiture_orange.png" 
                    alt="Voiture orange" 
                    className="w-10 h-10"
                />
                <h1 className="text-black text-2xl font-bold">The Good Corner</h1>
                <img 
                    src="/images/voiture_orange.png" 
                    alt="Voiture orange" 
                    className="w-10 h-10"
                />
            </div>
            <Link href="/ads/NewAd">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors cursor-pointer">
                    créer annonce
                </button>
            </Link>
            <Link href="/">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors cursor-pointer">
                    retour accueil
                </button>
            </Link>
        </header>
    );
}
