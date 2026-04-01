# idpay-mcp

MCP server for IDPay payment gateway (Iran). Supports payment creation, verification, inquiry, transaction listing, and payment links. Uses X-API-KEY header with optional X-SANDBOX mode.

## Tools (8)

| Tool | Description |
|------|-------------|
| `create_payment` | Create a payment |
| `verify_payment` | Verify a payment |
| `get_payment` | Get payment details |
| `list_transactions` | List transactions |
| `create_link` | Create a payment link |
| `get_link` | Get payment link details |
| `list_links` | List all payment links |
| `delete_link` | Delete a payment link |

## Quick Start

```json
{
  "mcpServers": {
    "idpay": {
      "command": "npx",
      "args": ["-y", "@theyahia/idpay-mcp"],
      "env": {
        "IDPAY_API_KEY": "<YOUR_API_KEY>",
        "IDPAY_SANDBOX": "0"
      }
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `IDPAY_API_KEY` | Yes | API key from IDPay dashboard |
| `IDPAY_SANDBOX` | No | Set to "1" for sandbox mode |

## Demo Prompts

- "Create a payment for 50000 IRR with order ID ORD-001"
- "Verify payment abc123 for order ORD-001"
- "List my recent transactions"
- "Create a payment link for 100000 IRR"
- "Delete payment link lnk_abc123"

## License

MIT
