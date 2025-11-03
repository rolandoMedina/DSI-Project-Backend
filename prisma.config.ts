import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url:"sqlserver://89.117.72.48:1433;database=Tokes;user=dsi;password=dsi2025;encrypt=true;trustServerCertificate=true;",
  },
});
