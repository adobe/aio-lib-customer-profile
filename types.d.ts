/**
 * Returns a Promise that resolves with a new CustomerProfileAPI object.
 *
 * @param {string} tenantId the tenant id
 * @param {string} iMSOrgId the iMSOrgId for your integration
 * @param {string} apiKey the API key for your integration
 * @param {string} accessToken the access token for your integration
 * @param {string} [sandbox] sandbox name
 * @returns {Promise<CustomerProfileAPI>} a Promise with a CustomerProfileAPI object
 */
declare function init(tenantId: string, iMSOrgId: string, apiKey: string, accessToken: string, sandbox?: string): Promise<CustomerProfileAPI>;

declare class CustomerProfileAPI {
    /**
     * Initializes a CustomerProfileAPI object and returns it.
     *
     * @param {string} tenantId the tenant id
     * @param {string} iMSOrgId the iMSOrgId for your integration
     * @param {string} apiKey the API key for your integration
     * @param {string} accessToken the access token for your integration
     * @param {string} [sandbox] sandbox name
     * @returns {Promise<CustomerProfileAPI>} a CustomerProfileAPI object
     */
    init(tenantId: string, iMSOrgId: string, apiKey: string, accessToken: string, sandbox?: string): Promise<CustomerProfileAPI>;
    /**
     * The tenant id
     *
     * @type {string}
     */
    tenantId: string;
    /**
     * The iMSOrgId
     *
     * @type {string}
     */
    iMSOrgId: string;
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
     * The sandbox name
     *
     * @type {string}
     */
    sandbox: string;
    /**
     * Get Profile by ID.
     *
     * @param {object} [parameters={}] parameters to pass
     * @returns {Promise<Response>} the response
     */
    getProfile(parameters?: any): Promise<Response>;
    /**
     * Get ExperienceEvents.
     *
     * @param {object} [parameters={}] parameters to pass
     * @returns {Promise<Response>} the response
     */
    getExperienceEvents(parameters?: any): Promise<Response>;
}

/**
 * Create dynamic methods from openApi spec file
 *
 */
declare class OpenApi {
}

