import type Ad from "@/types";
import AdCard from "./AdCard";

export default function RecentAds(){
    const ads: Ad[] = [
        {
            id: 1,
            pictureUrl: "https://thumbs.dreamstime.com/b/bordeaux-aquitaine-france-peugeot-gti-old-timer-retro-ancient-vintage-car-french-street-245077343.jpg",
            price: 5000,
            title: "Peugeot 205"
        },
        {
            id: 2,
            pictureUrl: "https://www.largus.fr/images/styles/max_1300x1300/public/2024-01/Renault-Clio-2-phase-1-casse-yvelines.jpg?itok=Rk_S8PZE",
            price: 2000,
            title: "Renault Clio"
        },
        {
            id: 3,
            pictureUrl: "https://thumbs.dreamstime.com/b/l-ancienne-petite-berline-fiesta-ford-s-est-gar%C3%A9e-gris-argent%C3%A9-gar%C3%A9-sur-paver-des-pierres-dans-le-quartier-historique-de-la-167958917.jpg?w=768",
            price: 1500,
            title: "Ford Fiesta"
        },
        {
            id: 4,
            pictureUrl: "https://www.largus.fr/images/styles/max_1300x1300/public/images/bx-break-19d.jpg?itok=Tofuw98Z",
            price: 1500,
            title: "Citroen BX"
        },

        {    id: 5,
            pictureUrl: "https://www.super-hobby.fr/zdjecia/2/3/3/48314_07072_i_vw_golf_1_gti.jpg",
            price: 500,
            title: "VW Golf 1"
        },

        {
            id: 6,
            pictureUrl: "  https://images.caradisiac.com/images/2/8/6/6/202866/S1-fiat-panda-1980-2003-un-monument-de-design-pour-tous-des-900-eur-759319.jpg",
            price: 1500,
            title: "Fiat Panda"
        },

    ];


return (
    <div className="p-4">
        <div className="inline-block">
            <h2 className="text-xl font-bold bg-orange-500 text-white rounded-lg p-4 mb-4">
                Annonces récentes
            </h2>
            <div className="flex flex-wrap">
                {ads.map((a) => (
                    <AdCard ad={a} key={a.id} />
                ))}
            </div>
        </div>
    </div>
);

}

