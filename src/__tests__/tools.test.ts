import { describe, it, expect, vi, beforeEach } from "vitest";
import { createPaymentSchema } from "../tools/create-payment.js";
import { verifyPaymentSchema } from "../tools/verify-payment.js";
import { getPaymentSchema } from "../tools/get-payment.js";
import { listTransactionsSchema } from "../tools/list-transactions.js";
import { createLinkSchema } from "../tools/create-link.js";
import { getLinkSchema } from "../tools/get-link.js";
import { listLinksSchema } from "../tools/list-links.js";
import { deleteLinkSchema } from "../tools/delete-link.js";

describe("idpay-mcp schemas", () => {
  it("validates create_payment params", () => {
    const valid = createPaymentSchema.safeParse({
      order_id: "ORD-001",
      amount: 50000,
      callback: "https://example.com/callback",
      description: "Test payment",
    });
    expect(valid.success).toBe(true);
  });

  it("rejects create_payment with negative amount", () => {
    const invalid = createPaymentSchema.safeParse({
      order_id: "ORD-001",
      amount: -100,
      callback: "https://example.com/callback",
    });
    expect(invalid.success).toBe(false);
  });

  it("rejects create_payment with invalid callback URL", () => {
    const invalid = createPaymentSchema.safeParse({
      order_id: "ORD-001",
      amount: 50000,
      callback: "not-a-url",
    });
    expect(invalid.success).toBe(false);
  });

  it("validates verify_payment params", () => {
    const valid = verifyPaymentSchema.safeParse({
      id: "abc123",
      order_id: "ORD-001",
    });
    expect(valid.success).toBe(true);
  });

  it("validates get_payment params", () => {
    const valid = getPaymentSchema.safeParse({
      id: "abc123",
      order_id: "ORD-001",
    });
    expect(valid.success).toBe(true);
  });

  it("validates list_transactions params", () => {
    const valid = listTransactionsSchema.safeParse({
      page: 0,
      page_size: 25,
    });
    expect(valid.success).toBe(true);
  });

  it("rejects list_transactions with page_size > 100", () => {
    const invalid = listTransactionsSchema.safeParse({
      page: 0,
      page_size: 200,
    });
    expect(invalid.success).toBe(false);
  });

  it("validates create_link params", () => {
    const valid = createLinkSchema.safeParse({
      amount: 100000,
      description: "Donation link",
    });
    expect(valid.success).toBe(true);
  });

  it("validates get_link params", () => {
    const valid = getLinkSchema.safeParse({ link_id: "lnk_abc123" });
    expect(valid.success).toBe(true);
  });

  it("validates list_links params (empty)", () => {
    const valid = listLinksSchema.safeParse({});
    expect(valid.success).toBe(true);
  });

  it("validates delete_link params", () => {
    const valid = deleteLinkSchema.safeParse({ link_id: "lnk_abc123" });
    expect(valid.success).toBe(true);
  });

  it("accepts optional fields in create_payment", () => {
    const valid = createPaymentSchema.safeParse({
      order_id: "ORD-002",
      amount: 75000,
      callback: "https://example.com/cb",
      name: "Ali",
      phone: "09121234567",
      mail: "ali@example.com",
    });
    expect(valid.success).toBe(true);
  });
});

describe("IdpayClient", () => {
  beforeEach(() => {
    vi.stubEnv("IDPAY_API_KEY", "");
  });

  it("throws when credentials are missing", async () => {
    const { IdpayClient } = await import("../client.js");
    expect(() => new IdpayClient()).toThrow("IDPAY_API_KEY");
  });
});
