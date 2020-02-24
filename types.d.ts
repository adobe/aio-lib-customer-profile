/**
 * Returns a Promise that resolves with a new CustomerProfileAPI object.
 *
 * @param {string} tenantId the tenant id
 * @param {string} apiKey the API key for your integration
 * @param {string} accessToken the access token for your integration
 * @returns {Promise<CustomerProfileAPI>} a Promise with a CustomerProfileAPI object
 */
declare function init(tenantId: string, apiKey: string, accessToken: string): Promise<CustomerProfileAPI>;

/**
 * This class provides methods to call your CustomerProfileAPI APIs.
 * Before calling any method initialize the instance by calling the `init` method on it
 * with valid values for tenantId, apiKey and accessToken
 */
declare class CustomerProfileAPI {
    /**
     * Initializes a CustomerProfileAPI object and returns it.
     *
     * @param {string} tenantId the tenant id
     * @param {string} apiKey the API key for your integration
     * @param {string} accessToken the access token for your integration
     * @returns {Promise<CustomerProfileAPI>} a CustomerProfileAPI object
     */
    init(tenantId: string, apiKey: string, accessToken: string): Promise<CustomerProfileAPI>;
    /**
     * The tenant id
     *
     * @type {string}
     */
    tenantId: string;
    /**
     * The api key from your integration
     *
     * @type {string}
     */
    apiKey: string;
    /**
     * The access token from your integration
     *
     * @type {string}
     */
    accessToken: string;
    /**
     * Get something.
     *
     * @param {MyParameters} [parameters={}] parameters to pass
     * @returns {Promise<Response>} the response
     */
    getSomething(parameters?: MyParameters): Promise<Response>;
}

/**
 * An example of a typed object.
 *
 * @typedef {object} MyParameters
 * @property {string} optionA - some option
 * @property {string} optionB - another option
 */
declare type MyParameters = {
    optionA: string;
    optionB: string;
};

/**
 * Another typed object.
 *
 * @typedef {object} AnotherThing
 * @property {boolean} mayBeSomething - an option
 */
declare type AnotherThing = {
    mayBeSomething: boolean;
};

