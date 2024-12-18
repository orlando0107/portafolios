import type { NextConfig } from "next";
import { setupDatabase} from "./src/config/db";

const nextConfig: NextConfig = {
  output: "standalone",

  // Agregar la configuración de Webpack para ejecutar la inicialización de la base de datos en el servidor
  webpack(config, { isServer }) {
    if (isServer) {
      // Solo ejecutar en el lado del servidor
      setupDatabase()
        .then(() => console.log("Database initialized successfully"))
        .catch((error) => console.error("Error initializing database", error));
    }

    return config;
  },
};

export default nextConfig;
