import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url:"sqlserver://192.168.0.93:1433;database=Tokes;user=sa;password=Empro.2025;encrypt=true;trustServerCertificate=true;",
  },
});
