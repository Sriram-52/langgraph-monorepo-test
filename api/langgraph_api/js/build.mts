import { exec } from "node:child_process";

try {
	console.log("Generating Prisma client...");
	exec("pnpm --filter=db generate");
	console.log("Prisma client generated successfully");
} catch (error) {
	console.error(error);
}
