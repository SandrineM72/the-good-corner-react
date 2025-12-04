import Layout from "@/components/Layout";

export default function NewAd() {
    return (
        <Layout pageTitle="Création d'une annonce">
            <div className="p-4">
                <h2 className="text-xl font-bold">Nouvelle annonce</h2>
                    <form>
                    <div className="my-2">
                        <label htmlFor="name">Titre</label>
                        <input 
                        type="text" 
                        name="title"
                        id="name"
                        className="m-2 p-2 border"
                        required />
                    </div>

                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                        type="submit">
                        Sauvegarder
                    </button>
                </form>
            </div>
        </Layout>
);

}



 