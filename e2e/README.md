# E2E Tests

## Requirements

To run the e2e test you'll need these env variables set:
  1. `CUSTOMER_PROFILE_API_TENANT_ID`
  3. `CUSTOMER_PROFILE_API_IMS_ORG_ID`
  4. `CUSTOMER_PROFILE_API_API_KEY`
  5. `CUSTOMER_PROFILE_API_ACCESS_TOKEN`

## Run

`npm run e2e`

## Test overview

The tests cover:

1. Malformed tenant id, api key or access token
2. `read` APIs
