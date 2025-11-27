import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url:"sqlserver://127.0.0.1:1433;database=DSI_PROYECT;user=sa;password=123abc;encrypt=true;trustServerCertificate=true;",
  },
});
