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

# Adobe I/O Customer Profile Lib

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

{{>main-index~}}
{{>all-docs~}}


### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
