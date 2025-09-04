import { User, PrismaClient } from "db";

export const prisma = new PrismaClient();

export const userFields = () => prisma.user.fields;

export const createUser = async (name: string, email: string) => {
	const user: User = {
		id: crypto.randomUUID(),
		name,
		email,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	return user;
};

export const getUser = async (id: string) => {
	const user: User | null = {
		id,
		name: "test",
		email: "test@test.com",
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	return user;
};

export const config = {
	model: "openai:gpt-4o-mini",
};
