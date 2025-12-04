import { useRouter } from "next/router";
import Layout from "@/components/Layout";


export default function AdDetail() {
    const router = useRouter();
    return (
        <Layout pageTitle="Détails d'une annonce">
            <div className="p-4">Détails de l'annonce n° {router.query.id}</div>
            <div className="p-4">insertion photo {router.query.pictureUrl}</div>
            <div className="p-4">insertion prix {router.query.price}</div>
            <div className="p-4">insertion description {router.query.title}</div>


            
        </Layout>
    );
}