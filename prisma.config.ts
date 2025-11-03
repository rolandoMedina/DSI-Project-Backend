/* eslint-disable prettier/prettier */

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url:"sqlserver://dsi_user:Dsi2025@LAPTOP-RALG:1433;database=Tokes;encrypt=true;trustServerCertificate=true",
  },
});
