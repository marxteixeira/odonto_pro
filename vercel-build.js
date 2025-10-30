
import { execSync } from "child_process";

console.log("🔄 Executando Prisma Generate antes do build...");
execSync("npx prisma generate", { stdio: "inherit" });

console.log("🚀 Aplicando migrations (deploy)...");
execSync("npx prisma migrate deploy", { stdio: "inherit" });

console.log("🧱 Iniciando build do Next...");
execSync("next build", { stdio: "inherit" });
