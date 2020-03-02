const fs = require('fs')
const path = require('path')
const converter = require('swagger2openapi')
const SwaggerParser = require('swagger-parser')

const swaggerSource = 'https://raw.githubusercontent.com/AdobeAtAdobe/kirby_docs/master/acpdr/swagger-specs/real-time-customer-profile.yaml'
const openApiTarget = path.join(__dirname, '../spec/api-latest.json');

/**
 * Generate spec file from `swaggerSource`
 * used in API documentation https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml
 * Get swagger file and convert it to openApi
 *
 */
(async () => {
  let swaggerJson

  try {
    swaggerJson = await SwaggerParser.parse(swaggerSource)
  } catch (e) {
    console.log('TOOLS: Error parsing Swagger Yaml')
  }

  if (swaggerJson) {
    converter.convertObj(swaggerJson, {}, (err, data) => {
      if (err) {
        console.log('TOOLS: Error converting Swagger to OpenApi')
        return
      }

      if (data.openapi) {
        const openApiData = JSON.stringify(data.openapi, null, 2)

        fs.writeFile(openApiTarget, openApiData, 'utf8', function (err) {
          if (err) {
            console.log('TOOLS: An error occured while writing JSON Object to File.')
            return console.log(err)
          }

          console.log('TOOLS: JSON file has been saved.')
        })
      }
    })
  }
})()
