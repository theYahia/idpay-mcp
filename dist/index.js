#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createPaymentSchema, handleCreatePayment } from "./tools/create-payment.js";
import { verifyPaymentSchema, handleVerifyPayment } from "./tools/verify-payment.js";
import { getPaymentSchema, handleGetPayment } from "./tools/get-payment.js";
import { listTransactionsSchema, handleListTransactions } from "./tools/list-transactions.js";
import { createLinkSchema, handleCreateLink } from "./tools/create-link.js";
import { getLinkSchema, handleGetLink } from "./tools/get-link.js";
import { listLinksSchema, handleListLinks } from "./tools/list-links.js";
import { deleteLinkSchema, handleDeleteLink } from "./tools/delete-link.js";
const server = new McpServer({ name: "idpay-mcp", version: "1.0.0" });
server.tool("create_payment", "Create an IDPay payment.", createPaymentSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleCreatePayment(params) }] }));
server.tool("verify_payment", "Verify an IDPay payment.", verifyPaymentSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleVerifyPayment(params) }] }));
server.tool("get_payment", "Get payment details by ID.", getPaymentSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetPayment(params) }] }));
server.tool("list_transactions", "List payment transactions.", listTransactionsSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleListTransactions(params) }] }));
server.tool("create_link", "Create a payment link.", createLinkSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleCreateLink(params) }] }));
server.tool("get_link", "Get payment link details.", getLinkSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetLink(params) }] }));
server.tool("list_links", "List all payment links.", listLinksSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleListLinks(params) }] }));
server.tool("delete_link", "Delete a payment link.", deleteLinkSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleDeleteLink(params) }] }));
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("[idpay-mcp] Server started. 8 tools registered.");
}
main().catch((error) => { console.error("[idpay-mcp] Error:", error); process.exit(1); });
//# sourceMappingURL=index.js.map