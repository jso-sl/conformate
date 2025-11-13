import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenue sur la Plateforme d’Évaluation Automatique
        </h1>
        <p className="mb-8 max-w-md">
          Vérifiez la conformité de vos devis de rénovation énergétique selon
          les
          <br />
          checklists CEE.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="inline-block bg-gray-200 px-6 py-3 rounded underline"
          >
            Se connecter
          </Link>
          <Link
            to="/signup"
            className="inline-block bg-gray-200 px-6 py-3 rounded underline"
          >
            S’inscrire
          </Link>
        </div>
      </main>
      {/* Footer supprimé, présent dans PublicLayout */}
    </div>
  );
};

export default HomePage;
