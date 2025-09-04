import { PrismaClient } from "db";

export const prisma = new PrismaClient();

export const userFields = () => prisma.user.fields;

export const createUser = async (name: string, email: string) => {
	try {
		const user = await prisma.user.create({
			data: { name, email },
		});

		return user;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getUser = async (id: string) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id },
		});

		return user;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const config = {
	model: "openai:gpt-4o-mini",
};
