# Migration Guide

## Transition from QR Code System to Digital Wallet-Based Ticketing

This guide provides a brief walkthrough for developers to transition from the QR code system to the new digital wallet-based ticketing system using our updated API.

### Step 1: Update to API v2

- **Upgrade to v2**: Ensure your application uses version `v2` of our Museum API. You should use new server URL `https://api.fake-museum-example.com/v2.0`

### Step 2: Remove QR Code Endpoints

- **Discontinue QR Codes**: Remove any usage of the old QR code generation endpoint from your integration.

### Step 3: Implement New Digital Ticket Endpoint

- **New Endpoint**: Integrate `GET /tickets/{ticketId}/pkpass` to generate digital tickets.

#### Example Request
```http
GET /v2/tickets/{ticketId}/pkpass
```


### Step 4: Process Digital Tickets

- **Extract Information**: Extract event name, visit date, and unique ticket ID from the response.
- **Add to Wallet**: Decode the `pkpassFile` and integrate it with Apple Wallet or Google Pay.

### Step 5: Test and Deploy

- **Test**: Verify that digital tickets are generated and added to digital wallets correctly.
- **Deploy**: Roll out the updated application and monitor for issues.

By following this guide, you can seamlessly transition to the new digital wallet-based ticketing system.
