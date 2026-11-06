import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	certifications: defineTable({
		name: v.string(),
		isActive: v.boolean(),
		createdAt: v.number(),
	}).index("by_active", ["isActive"]),

	contactResponses: defineTable({
		firstName: v.string(),
		lastName: v.string(),
		email: v.string(),
		phone: v.optional(v.string()),
		subject: v.string(),
		selectedCerts: v.array(v.string()),
		message: v.string(),
		createdAt: v.number(),
	}).index("by_createdAt", ["createdAt"]),
});
