<!--
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![Version](https://img.shields.io/npm/v/@adobe/aio-lib-customer-profile.svg)](https://npmjs.org/package/@adobe/aio-lib-customer-profile)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-lib-customer-profile.svg)](https://npmjs.org/package/@adobe/aio-lib-customer-profile)
[![Build Status](https://travis-ci.com/adobe/aio-lib-customer-profile.svg?branch=master)](https://travis-ci.com/adobe/aio-lib-customer-profile)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/aio-lib-customer-profile.svg)](https://greenkeeper.io/)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-lib-customer-profile/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-lib-customer-profile/)

# Adobe I/O Adobe Experience Platform Realtime Customer Profile SDK Library

### Installing

```bash
$ npm install @adobe/aio-lib-customer-profile
```

### Usage
1) Initialize the SDK

```javascript
const sdk = require('@adobe/aio-lib-customer-profile')

async function sdkTest() {
  //initialize sdk
  const client = await sdk.init('<tenant>', '<iMSOrgId>', 'x-api-key', '<valid auth token>', '[sandbox]')
}
```

2) Call methods using the initialized SDK

```javascript
const sdk = require('@adobe/aio-lib-customer-profile')

async function sdkTest() {
  // initialize sdk
  const client = await sdk.init('<tenant>', '<iMSOrgId>', 'x-api-key', '<valid auth token>', '[sandbox]')

  // call methods
  try {
    // get profiles by custom filters
    const result = await client.getSegmentRoute({
        segmentId: 'abc123'
    })
    console.log(result)

  } catch (e) {
    console.error(e)
  }
}
```

## Classes

<dl>
<dt><a href="#CustomerProfileAPI">CustomerProfileAPI</a></dt>
<dd><p>This class provides methods to call your CustomerProfileAPI APIs.
Before calling any method initialize the instance by calling the <code>init</code> method on it
with valid values for tenantId, apiKey and accessToken</p>
</dd>
<dt><a href="#OpenApi">OpenApi</a></dt>
<dd><p>Create dynamic methods from openApi spec file</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox])</a> ⇒ <code><a href="#CustomerProfileAPI">Promise.&lt;CustomerProfileAPI&gt;</a></code></dt>
<dd><p>Returns a Promise that resolves with a new CustomerProfileAPI object.</p>
</dd>
</dl>

<a name="CustomerProfileAPI"></a>

## CustomerProfileAPI
This class provides methods to call your CustomerProfileAPI APIs.
Before calling any method initialize the instance by calling the `init` method on it
with valid values for tenantId, apiKey and accessToken

**Kind**: global class  

* [CustomerProfileAPI](#CustomerProfileAPI)
    * [.tenantId](#CustomerProfileAPI+tenantId) : <code>string</code>
    * [.iMSOrgId](#CustomerProfileAPI+iMSOrgId) : <code>string</code>
    * [.apiKey](#CustomerProfileAPI+apiKey) : <code>string</code>
    * [.accessToken](#CustomerProfileAPI+accessToken) : <code>string</code>
    * [.sandbox](#CustomerProfileAPI+sandbox) : <code>string</code>
    * [.init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox])](#CustomerProfileAPI+init) ⇒ [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI)
    * [.getProfile([parameters])](#CustomerProfileAPI+getProfile) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getExperienceEvents([parameters])](#CustomerProfileAPI+getExperienceEvents) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.listComputedAttributes([parameters])](#CustomerProfileAPI+listComputedAttributes) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.createComputedAttribute([parameters])](#CustomerProfileAPI+createComputedAttribute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.lookupComputedAttribute([parameters])](#CustomerProfileAPI+lookupComputedAttribute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.updateComputedAttribute([parameters])](#CustomerProfileAPI+updateComputedAttribute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteComputedAttribute([parameters])](#CustomerProfileAPI+deleteComputedAttribute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getConfigMergePolicies([parameters])](#CustomerProfileAPI+getConfigMergePolicies) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postConfigMergePolicies([parameters])](#CustomerProfileAPI+postConfigMergePolicies) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getConfigMergePoliciesMergePolicyId([parameters])](#CustomerProfileAPI+getConfigMergePoliciesMergePolicyId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.putConfigMergePoliciesMergePolicyId([parameters])](#CustomerProfileAPI+putConfigMergePoliciesMergePolicyId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.patchConfigMergePoliciesMergePolicyId([parameters])](#CustomerProfileAPI+patchConfigMergePoliciesMergePolicyId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteConfigMergePoliciesMergePolicyId([parameters])](#CustomerProfileAPI+deleteConfigMergePoliciesMergePolicyId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getAccessEntities([parameters])](#CustomerProfileAPI+getAccessEntities) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postAccessEntities([parameters])](#CustomerProfileAPI+postAccessEntities) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteAccessEntities([parameters])](#CustomerProfileAPI+deleteAccessEntities) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getScanJobsRoute([parameters])](#CustomerProfileAPI+getScanJobsRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postScanJobRoute([parameters])](#CustomerProfileAPI+postScanJobRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getScanJobRoute([parameters])](#CustomerProfileAPI+getScanJobRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.cancelScanJobRoute([parameters])](#CustomerProfileAPI+cancelScanJobRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getSegmentsRoute([parameters])](#CustomerProfileAPI+getSegmentsRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postSegmentRoute([parameters])](#CustomerProfileAPI+postSegmentRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getSegmentRoute([parameters])](#CustomerProfileAPI+getSegmentRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteSegmentRoute([parameters])](#CustomerProfileAPI+deleteSegmentRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.patchSegmentRoute([parameters])](#CustomerProfileAPI+patchSegmentRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postSegmentConversionRoute([parameters])](#CustomerProfileAPI+postSegmentConversionRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getSegmentJobs([parameters])](#CustomerProfileAPI+getSegmentJobs) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postSJRRoute([parameters])](#CustomerProfileAPI+postSJRRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getSegmentJobsSegmentJobId([parameters])](#CustomerProfileAPI+getSegmentJobsSegmentJobId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteSegmentJobsSegmentJobId([parameters])](#CustomerProfileAPI+deleteSegmentJobsSegmentJobId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postSessionlessPreviewRoute([parameters])](#CustomerProfileAPI+postSessionlessPreviewRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getSessionlessPreviewStatusRoute([parameters])](#CustomerProfileAPI+getSessionlessPreviewStatusRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteSessionLessPreviewStatusRoute([parameters])](#CustomerProfileAPI+deleteSessionLessPreviewStatusRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getEstimateStatusRoute([parameters])](#CustomerProfileAPI+getEstimateStatusRoute) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.listProjectionConfigurations([parameters])](#CustomerProfileAPI+listProjectionConfigurations) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.createProjectionConfiguration([parameters])](#CustomerProfileAPI+createProjectionConfiguration) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getProjectionConfiguration([parameters])](#CustomerProfileAPI+getProjectionConfiguration) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.updateProjectionConfiguration([parameters])](#CustomerProfileAPI+updateProjectionConfiguration) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteProjectionConfiguration([parameters])](#CustomerProfileAPI+deleteProjectionConfiguration) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.listProjectionDestinations([parameters])](#CustomerProfileAPI+listProjectionDestinations) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.createProjectionDestination([parameters])](#CustomerProfileAPI+createProjectionDestination) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getProjectionDestination([parameters])](#CustomerProfileAPI+getProjectionDestination) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.putProjectionDestination([parameters])](#CustomerProfileAPI+putProjectionDestination) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteProjectionDestination([parameters])](#CustomerProfileAPI+deleteProjectionDestination) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getConfigEventTypes([parameters])](#CustomerProfileAPI+getConfigEventTypes) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postConfigEventTypes([parameters])](#CustomerProfileAPI+postConfigEventTypes) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getConfigEventTypesEventTypeId([parameters])](#CustomerProfileAPI+getConfigEventTypesEventTypeId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.putConfigEventTypesEventTypeId([parameters])](#CustomerProfileAPI+putConfigEventTypesEventTypeId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.patchConfigEventTypesEventTypeId([parameters])](#CustomerProfileAPI+patchConfigEventTypesEventTypeId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteConfigEventTypesEventTypeId([parameters])](#CustomerProfileAPI+deleteConfigEventTypesEventTypeId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getConfigMacros([parameters])](#CustomerProfileAPI+getConfigMacros) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.postConfigMacros([parameters])](#CustomerProfileAPI+postConfigMacros) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getConfigMacrosMacroId([parameters])](#CustomerProfileAPI+getConfigMacrosMacroId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.putConfigMacrosMacroId([parameters])](#CustomerProfileAPI+putConfigMacrosMacroId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.patchConfigMacrosMacroId([parameters])](#CustomerProfileAPI+patchConfigMacrosMacroId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteConfigMacrosMacroId([parameters])](#CustomerProfileAPI+deleteConfigMacrosMacroId) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getSchedules([parameters])](#CustomerProfileAPI+getSchedules) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.createSchedule([parameters])](#CustomerProfileAPI+createSchedule) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.getScheduleById([parameters])](#CustomerProfileAPI+getScheduleById) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.updateSchedule([parameters])](#CustomerProfileAPI+updateSchedule) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteSchedule([parameters])](#CustomerProfileAPI+deleteSchedule) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.listDeleteRequests([parameters])](#CustomerProfileAPI+listDeleteRequests) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.createDeleteRequest([parameters])](#CustomerProfileAPI+createDeleteRequest) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.viewDeleteRequest([parameters])](#CustomerProfileAPI+viewDeleteRequest) ⇒ <code>Promise.&lt;Response&gt;</code>
    * [.deleteDeleteRequest([parameters])](#CustomerProfileAPI+deleteDeleteRequest) ⇒ <code>Promise.&lt;Response&gt;</code>

<a name="CustomerProfileAPI+tenantId"></a>

### customerProfileAPI.tenantId : <code>string</code>
The tenant id

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+iMSOrgId"></a>

### customerProfileAPI.iMSOrgId : <code>string</code>
The iMSOrgId

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+apiKey"></a>

### customerProfileAPI.apiKey : <code>string</code>
The api key from your integration

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+accessToken"></a>

### customerProfileAPI.accessToken : <code>string</code>
The access token from your integration

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+sandbox"></a>

### customerProfileAPI.sandbox : <code>string</code>
The sandbox name

**Kind**: instance property of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
<a name="CustomerProfileAPI+init"></a>

### customerProfileAPI.init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox]) ⇒ [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI)
Initializes a CustomerProfileAPI object and returns it.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI) - a CustomerProfileAPI object  

| Param | Type | Description |
| --- | --- | --- |
| tenantId | <code>string</code> | the tenant id |
| iMSOrgId | <code>string</code> | the iMSOrgId for your integration |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |
| [sandbox] | <code>string</code> | sandbox name |

<a name="CustomerProfileAPI+getProfile"></a>

### customerProfileAPI.getProfile([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Get Profile by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |

<a name="CustomerProfileAPI+getExperienceEvents"></a>

### customerProfileAPI.getExperienceEvents([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Get ExperienceEvents.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |

<a name="CustomerProfileAPI+listComputedAttributes"></a>

### customerProfileAPI.listComputedAttributes([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of computed attributes.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |

<a name="CustomerProfileAPI+createComputedAttribute"></a>

### customerProfileAPI.createComputedAttribute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a computed attribute.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |

<a name="CustomerProfileAPI+lookupComputedAttribute"></a>

### customerProfileAPI.lookupComputedAttribute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a specific computed attribute by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.ATTRIBUTE_ID | <code>string</code> |  | The unique, read-only ID of the computed attribute that is generated by the system when the attribute is created. |

<a name="CustomerProfileAPI+updateComputedAttribute"></a>

### customerProfileAPI.updateComputedAttribute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Update a computed attribute by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.ATTRIBUTE_ID | <code>string</code> |  | The unique, read-only ID of the computed attribute that is generated by the system when the attribute is created. |

<a name="CustomerProfileAPI+deleteComputedAttribute"></a>

### customerProfileAPI.deleteComputedAttribute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete a computed attribute by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.ATTRIBUTE_ID | <code>string</code> |  | The unique, read-only ID of the computed attribute that is generated by the system when the attribute is created. |

<a name="CustomerProfileAPI+getConfigMergePolicies"></a>

### customerProfileAPI.getConfigMergePolicies([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of merge policies.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |
| [parameters.start] | <code>string</code> |  | Page offset - As per created time of resource |
| [parameters.limit] | <code>number</code> |  | Page Size |
| [parameters.orderBy] | <code>string</code> |  | Model attribute which will be using for ordering |
| [parameters.'schema.name'] | <code>string</code> |  | Schema class ID |
| [parameters.default] | <code>boolean</code> |  | default flag |

<a name="CustomerProfileAPI+postConfigMergePolicies"></a>

### customerProfileAPI.postConfigMergePolicies([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new merge policy.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |

<a name="CustomerProfileAPI+getConfigMergePoliciesMergePolicyId"></a>

### customerProfileAPI.getConfigMergePoliciesMergePolicyId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup a merge policy by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.mergePolicyId | <code>string</code> |  | Merge policy ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |

<a name="CustomerProfileAPI+putConfigMergePoliciesMergePolicyId"></a>

### customerProfileAPI.putConfigMergePoliciesMergePolicyId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Update a merge policy by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.mergePolicyId | <code>string</code> |  | Merge policy ID. |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |

<a name="CustomerProfileAPI+patchConfigMergePoliciesMergePolicyId"></a>

### customerProfileAPI.patchConfigMergePoliciesMergePolicyId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Update one or more attributes of a merge policy specified by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.mergePolicyId | <code>string</code> |  | Merge policy ID. |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |

<a name="CustomerProfileAPI+deleteConfigMergePoliciesMergePolicyId"></a>

### customerProfileAPI.deleteConfigMergePoliciesMergePolicyId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete a merge policy by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.mergePolicyId | <code>string</code> |  | Merge policy ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |

<a name="CustomerProfileAPI+getAccessEntities"></a>

### customerProfileAPI.getAccessEntities([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup an entity by ID or namespace.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'schema.name' | <code>string</code> |  | XED schema class name. |
| [parameters.'relatedSchema.name'] | <code>string</code> |  | XDM schema class name that the ExperienceEvent is associated with. Used when looking up ExperienceEvents. |
| [parameters.entityId] | <code>string</code> |  | ID of the entity. For Native XID lookup, use `entityId=<XID>` and leave `entityIdNS` absent; For ID:NS lookup, use both `entityId` and `entityIdNS` fields. |
| [parameters.entityIdNS] | <code>string</code> |  | Identity Namespace code. Used for ID:NS lookup. If this field is used, `entityId` cannot be empty. |
| [parameters.relatedEntityId] | <code>string</code> |  | ID of the entity that the ExperienceEvents are associated with. Used when looking up ExperienceEvents. For Native XID lookup, use `relatedEntityId=<XID>` and leave `relatedEntityIdNS` absent; For ID:NS lookup, use both `relatedEntityId` and `relatedEntityIdNS` fields. |
| [parameters.relatedEntityIdNS] | <code>string</code> |  | Identity Namespace code of the related entity ID of ExperienceEvent. Used when looking up ExperienceEvents. If this field is used, `entityId` cannot be empty. |
| [parameters.fields] | <code>string</code> |  | Fields for the model object. By default, all fields will be fetched. Separated by comma. |
| [parameters.mergePolicyId] | <code>string</code> |  | ID of the merge policy. A merge policy includes information for Identity stitching and key-value XDM object merging. If not present, the default merge policy will be used. |
| [parameters.startTime] | <code>number</code> |  | Start time of Time range filter for ExperienceEvents. Should be at millisecond granularity. Included. Default: From beginning. |
| [parameters.endTime] | <code>number</code> |  | End time of Time range filter for ExperienceEvents. Should be at millisecond granularity. Excluded. Default: To the end. |
| [parameters.limit] | <code>number</code> |  | Number of records to return from the result. Only for time-series objects. Default: 1000 |
| [parameters.orderby] | <code>string</code> |  | The sort order of retrieved ExperienceEvents by timestamp. Syntax: (+/-)timestamp. Default: +timestamp |

<a name="CustomerProfileAPI+postAccessEntities"></a>

### customerProfileAPI.postAccessEntities([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup multiple entities by IDs or namespaces.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |

<a name="CustomerProfileAPI+deleteAccessEntities"></a>

### customerProfileAPI.deleteAccessEntities([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete an entity by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'schema.name' | <code>string</code> |  | Name of the associated XDM schema. |
| [parameters.entityId] | <code>string</code> |  | ID of the entity. For Native XID, use `entityId=<XID>` and leave `entityIdNS` absent; For ID:NS, use both `entityId` and `entityIdNS` fields. |
| [parameters.entityIdNS] | <code>string</code> |  | Identity Namespace code. Used for ID:NS. If this field is used, `entityId` cannot be empty. |
| [parameters.mergePolicyId] | <code>string</code> |  | ID of the merge policy. A merge policy includes information for Identity stitching and key-value XDM object merging. If not present, the default merge policy will be used. |

<a name="CustomerProfileAPI+getScanJobsRoute"></a>

### customerProfileAPI.getScanJobsRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of all export jobs.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.limit] | <code>number</code> |  | Limit the number of export jobs returned in the list. |
| [parameters.offset] | <code>string</code> |  | Offset the page of results returned (ordered by created time of resource) |
| [parameters.status] | <code>string</code> |  | Filter the export jobs returned by job status. Possible values are "NEW", "SUCCEEDED", and "FAILED". |

<a name="CustomerProfileAPI+postScanJobRoute"></a>

### customerProfileAPI.postScanJobRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new export job.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| [parameters.'x-profile-instance-id'] | <code>string</code> |  | Profile Instance ID |

<a name="CustomerProfileAPI+getScanJobRoute"></a>

### customerProfileAPI.getScanJobRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup an export job by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.exportJobId | <code>string</code> |  | Export job ID |

<a name="CustomerProfileAPI+cancelScanJobRoute"></a>

### customerProfileAPI.cancelScanJobRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Cancel or delete an export job by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.exportJobId | <code>string</code> |  | Export job ID |

<a name="CustomerProfileAPI+getSegmentsRoute"></a>

### customerProfileAPI.getSegmentsRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of segment definitions.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'x-request-id' | <code>string</code> |  | Unique ID per request |
| [parameters.start] | <code>number</code> |  | Page offset - As per created time of resource |
| [parameters.limit] | <code>number</code> |  | Page size |
| [parameters.page] | <code>number</code> |  | Page number |
| [parameters.sort] | <code>string</code> |  | Sort parameters |

<a name="CustomerProfileAPI+postSegmentRoute"></a>

### customerProfileAPI.postSegmentRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new segment definition.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| parameters.'x-request-id' | <code>string</code> |  | Unique ID per request |

<a name="CustomerProfileAPI+getSegmentRoute"></a>

### customerProfileAPI.getSegmentRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup a segment definition by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.segmentId | <code>string</code> |  | Segment Definition ID. |
| parameters.'x-request-id' | <code>string</code> |  | Unique ID per request |

<a name="CustomerProfileAPI+deleteSegmentRoute"></a>

### customerProfileAPI.deleteSegmentRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete a segment definition by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.segmentId | <code>string</code> |  | Segment Definition ID. |
| parameters.'x-request-id' | <code>string</code> |  | Unique ID per request |

<a name="CustomerProfileAPI+patchSegmentRoute"></a>

### customerProfileAPI.patchSegmentRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Overwrite a segment definition.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.segmentId | <code>string</code> |  | Segment Definition ID. |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| parameters.'x-request-id' | <code>string</code> |  | Unique ID per request |

<a name="CustomerProfileAPI+postSegmentConversionRoute"></a>

### customerProfileAPI.postSegmentConversionRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Convert PQL formatting between pql/text and pql/json.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| parameters.'x-request-id' | <code>string</code> |  | Unique ID per request |

<a name="CustomerProfileAPI+getSegmentJobs"></a>

### customerProfileAPI.getSegmentJobs([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of all segment job requests.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |
| [parameters.start] | <code>number</code> |  | Page Offset - As per created Time of resource |
| [parameters.limit] | <code>number</code> |  | Page Size |
| [parameters.status] | <code>string</code> |  | The job status |

<a name="CustomerProfileAPI+postSJRRoute"></a>

### customerProfileAPI.postSJRRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new segment job request.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |

<a name="CustomerProfileAPI+getSegmentJobsSegmentJobId"></a>

### customerProfileAPI.getSegmentJobsSegmentJobId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup a segment job request by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.segmentJobId | <code>string</code> |  | Segment job request ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |

<a name="CustomerProfileAPI+deleteSegmentJobsSegmentJobId"></a>

### customerProfileAPI.deleteSegmentJobsSegmentJobId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Cancel or delete a segment job request by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.segmentJobId | <code>string</code> |  | Segment job request ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |

<a name="CustomerProfileAPI+postSessionlessPreviewRoute"></a>

### customerProfileAPI.postSessionlessPreviewRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new preview job.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |

<a name="CustomerProfileAPI+getSessionlessPreviewStatusRoute"></a>

### customerProfileAPI.getSessionlessPreviewStatusRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup the results of a preview job by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.previewId | <code>string</code> |  | ID of the preview job. |
| [parameters.offset] | <code>string</code> |  | Page offset |
| [parameters.limit] | <code>number</code> |  | How many entries should be present in a page. 1000 if not specified. |

<a name="CustomerProfileAPI+deleteSessionLessPreviewStatusRoute"></a>

### customerProfileAPI.deleteSessionLessPreviewStatusRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Cancel or delete a preview job by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.previewId | <code>string</code> |  | ID of the preview job. |

<a name="CustomerProfileAPI+getEstimateStatusRoute"></a>

### customerProfileAPI.getEstimateStatusRoute([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup the results of an estimate job by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.previewId | <code>string</code> |  | ID of the preview job. |

<a name="CustomerProfileAPI+listProjectionConfigurations"></a>

### customerProfileAPI.listProjectionConfigurations([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of edge projection configurations. The latest definitions are returned.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.schemaName] | <code>string</code> |  | XDM schema name |
| [parameters.name] | <code>string</code> |  | projection name |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+createProjectionConfiguration"></a>

### customerProfileAPI.createProjectionConfiguration([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new edge projection configuration.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.schemaName | <code>string</code> |  | XDM schema name |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+getProjectionConfiguration"></a>

### customerProfileAPI.getProjectionConfiguration([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup an edge projection configuration by ID. The latest definition is returned.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.projectionid | <code>string</code> |  | undefined |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+updateProjectionConfiguration"></a>

### customerProfileAPI.updateProjectionConfiguration([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create or update an edge projection configuration by ID. Overwrites the entire configuration.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.projectionid | <code>string</code> |  | undefined |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+deleteProjectionConfiguration"></a>

### customerProfileAPI.deleteProjectionConfiguration([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete an edge projection configuration by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.projectionid | <code>string</code> |  | undefined |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+listProjectionDestinations"></a>

### customerProfileAPI.listProjectionDestinations([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of edge projection destinations. The latest definitions are returned.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+createProjectionDestination"></a>

### customerProfileAPI.createProjectionDestination([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new edge projection destination.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+getProjectionDestination"></a>

### customerProfileAPI.getProjectionDestination([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup an edge projection destination by ID. The latest definition is returned.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.destinationId | <code>string</code> |  | undefined |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+putProjectionDestination"></a>

### customerProfileAPI.putProjectionDestination([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create or update an edge projection destination by ID. Overwrites the entire configuration.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.destinationId | <code>string</code> |  | undefined |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+deleteProjectionDestination"></a>

### customerProfileAPI.deleteProjectionDestination([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete an edge projection destination by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.destinationId | <code>string</code> |  | undefined |
| parameters.'x-gw-ims-authorization' | <code>string</code> |  | Gateway IMS service token. |
| [parameters.'x-user-token'] | <code>string</code> |  | User access token. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a client flow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+getConfigEventTypes"></a>

### customerProfileAPI.getConfigEventTypes([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of event types.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |
| [parameters.start] | <code>number</code> |  | Page offset for the response. Default is 0. |
| [parameters.limit] | <code>number</code> |  | Page size |
| [parameters.orderBy] | <code>string</code> |  | The model attribute to be used for ordering. |

<a name="CustomerProfileAPI+postConfigEventTypes"></a>

### customerProfileAPI.postConfigEventTypes([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new event type.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile instance ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+getConfigEventTypesEventTypeId"></a>

### customerProfileAPI.getConfigEventTypesEventTypeId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup an event type by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.eventTypeId | <code>string</code> |  | Event type ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+putConfigEventTypesEventTypeId"></a>

### customerProfileAPI.putConfigEventTypesEventTypeId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Overwrite an event type by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.eventTypeId | <code>string</code> |  | Event type ID. |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile instance ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+patchConfigEventTypesEventTypeId"></a>

### customerProfileAPI.patchConfigEventTypesEventTypeId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Update one or more attributes of an event type by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.eventTypeId | <code>string</code> |  | Event type ID. |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile instance ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+deleteConfigEventTypesEventTypeId"></a>

### customerProfileAPI.deleteConfigEventTypesEventTypeId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete an event type by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.eventTypeId | <code>string</code> |  | Event type ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+getConfigMacros"></a>

### customerProfileAPI.getConfigMacros([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of all macros for your organization.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |
| [parameters.start] | <code>string</code> |  | Page offset (at the created time of resource) |
| [parameters.limit] | <code>number</code> |  | Maximum number of objects to display on each page. |
| [parameters.orderBy] | <code>string</code> |  | Model attribute which will be using for ordering. |
| [parameters.dataSetId] | <code>string</code> |  | Dataset ID. |
| [parameters.schemaClassId] | <code>string</code> |  | Schema class ID. |
| [parameters.value] | <code>string</code> |  | Event type value. |

<a name="CustomerProfileAPI+postConfigMacros"></a>

### customerProfileAPI.postConfigMacros([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a new macro.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |

<a name="CustomerProfileAPI+getConfigMacrosMacroId"></a>

### customerProfileAPI.getConfigMacrosMacroId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup a macro by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.macroId | <code>string</code> |  | Macro ID. For example, `ca8fe8a8-0f38-478a-9905-fd515d1d2988` |
| [parameters.'x-request-id'] | <code>string</code> |  | Request Id |

<a name="CustomerProfileAPI+putConfigMacrosMacroId"></a>

### customerProfileAPI.putConfigMacrosMacroId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Overwrite a macro by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.macroId | <code>string</code> |  | Macro ID. For example, `ca8fe8a8-0f38-478a-9905-fd515d1d2988` |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID |

<a name="CustomerProfileAPI+patchConfigMacrosMacroId"></a>

### customerProfileAPI.patchConfigMacrosMacroId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Update a macro by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.macroId | <code>string</code> |  | Macro ID. For example, `ca8fe8a8-0f38-478a-9905-fd515d1d2988` |
| parameters.'x-profile-instance-id' | <code>string</code> |  | Profile Instance ID. |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID. |

<a name="CustomerProfileAPI+deleteConfigMacrosMacroId"></a>

### customerProfileAPI.deleteConfigMacrosMacroId([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete a macro by ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.macroId | <code>string</code> |  | Macro ID. For example, `ca8fe8a8-0f38-478a-9905-fd515d1d2988` |
| [parameters.'x-request-id'] | <code>string</code> |  | Request ID. |

<a name="CustomerProfileAPI+getSchedules"></a>

### customerProfileAPI.getSchedules([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of schedules for your IMS Org

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |
| [parameters.start] | <code>number</code> |  | Return results from a specific page offset. For example, `start=3` |
| [parameters.limit] | <code>number</code> |  | Limit response to a specific number of objects. Must be a positive number. For example, `limit=10` |

<a name="CustomerProfileAPI+createSchedule"></a>

### customerProfileAPI.createSchedule([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a schedule, including specifying the time when the schedule should be triggered.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+getScheduleById"></a>

### customerProfileAPI.getScheduleById([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Lookup a schedule by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.SCHEDULE_ID | <code>string</code> |  | The ID of the schedule against which the operation is being performed. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+updateSchedule"></a>

### customerProfileAPI.updateSchedule([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Update a schedule, including changing the trigger time or enabling/disabling the schedule.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.SCHEDULE_ID | <code>string</code> |  | The ID of the schedule against which the operation is being performed. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+deleteSchedule"></a>

### customerProfileAPI.deleteSchedule([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Delete a schedule by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.SCHEDULE_ID | <code>string</code> |  | The ID of the schedule against which the operation is being performed. |
| [parameters.'x-request-id'] | <code>string</code> |  | Optional header that may be used for debugging purposes when investigating issues with a workflow. The same ID can be used to identify a single request to the service from a flow. A new ID should be created for each request. |

<a name="CustomerProfileAPI+listDeleteRequests"></a>

### customerProfileAPI.listDeleteRequests([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Retrieve a list of all delete requests (Profile System Jobs) created by your organization.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| [parameters.start] | <code>number</code> |  | Return results from a specific page offset. For example, `start=3` |
| [parameters.limit] | <code>number</code> |  | Limit response to a specific number of objects. Must be a positive number. For example, `limit=10` |
| [parameters.page] | <code>number</code> |  | Return a specific page of results, as per the create time of the request. For example, `page=0` |
| [parameters.sort] | <code>string</code> |  | Sort results by a specific field in ascending (`asc`) or descending (`desc`) order. The sort parameter does not work when returning multiple pages of results. For example, `sort=batchId:asc` |

<a name="CustomerProfileAPI+createDeleteRequest"></a>

### customerProfileAPI.createDeleteRequest([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Create a delete request (Profile System Job)

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.'Content-Type' | <code>string</code> |  | Type of content being sent in the body of the request. Should be 'application/json'. |

<a name="CustomerProfileAPI+viewDeleteRequest"></a>

### customerProfileAPI.viewDeleteRequest([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
View a specific delete request (Profile System Job) by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.ID | <code>string</code> |  | ID of the delete request (Profile System Job) that you wish to view. For example, '3e64ad31-5e6b-4399-80ad-ccfab54254ae'. |

<a name="CustomerProfileAPI+deleteDeleteRequest"></a>

### customerProfileAPI.deleteDeleteRequest([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Remove a specific delete request (Profile System Job) by its ID.

**Kind**: instance method of [<code>CustomerProfileAPI</code>](#CustomerProfileAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | <code>object</code> | <code>{}</code> | parameters to pass |
| parameters.ID | <code>string</code> |  | ID of the delete request (Profile System Job) that you wish to view. For example, '3e64ad31-5e6b-4399-80ad-ccfab54254ae'. |

<a name="OpenApi"></a>

## OpenApi
Create dynamic methods from openApi spec file

**Kind**: global class  
<a name="init"></a>

## init(tenantId, iMSOrgId, apiKey, accessToken, [sandbox]) ⇒ [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI)
Returns a Promise that resolves with a new CustomerProfileAPI object.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;CustomerProfileAPI&gt;</code>](#CustomerProfileAPI) - a Promise with a CustomerProfileAPI object  

| Param | Type | Description |
| --- | --- | --- |
| tenantId | <code>string</code> | the tenant id |
| iMSOrgId | <code>string</code> | the iMSOrgId for your integration |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |
| [sandbox] | <code>string</code> | sandbox name |

### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
