// Fonction Netlify : vérification de l'état du service
// Adresse : /api/sante
export default async (req) => {
  return Response.json({
    application: "EtatNotes Pro v1",
    statut: "ok",
    date: new Date().toISOString()
  });
};

export const config = {
  path: "/api/sante"
};
