/**
 * This file defines the tools available to the ReAct agent.
 * Tools are functions that the agent can use to interact with external systems or perform specific tasks.
 */
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { tool } from "@langchain/core/tools";
import { createUser, getUser } from "shared";
import { z } from "zod";

/**
 * Tavily search tool configuration
 * This tool allows the agent to perform web searches using the Tavily API.
 */
const searchTavily = new TavilySearchResults({
	maxResults: 3,
});

const createUserTool = tool(
	(input) => {
		return createUser(input.name, input.email);
	},
	{
		name: "createUser",
		description: "Create a user",
		schema: z.object({ name: z.string(), email: z.string() }),
	}
);

const getUserTool = tool(
	(input) => {
		return getUser(input.id);
	},
	{
		name: "getUser",
		description: "Get a user",
		schema: z.object({ id: z.string() }),
	}
);

/**
 * Export an array of all available tools
 * Add new tools to this array to make them available to the agent
 *
 * Note: You can create custom tools by implementing the Tool interface from @langchain/core/tools
 * and add them to this array.
 * See https://js.langchain.com/docs/how_to/custom_tools/#tool-function for more information.
 */
export const TOOLS = [searchTavily, createUserTool, getUserTool];
