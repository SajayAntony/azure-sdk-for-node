// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '28adf6bf-ce46-4eb0-ba29-b6d1a69ab859';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-01-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b3bc8d2a-4731-42d8-9430-c79765e57cda',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b3bc8d2a-4731-42d8-9430-c79765e57cda',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160412T192145Z:b3bc8d2a-4731-42d8-9430-c79765e57cda',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-01-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b3bc8d2a-4731-42d8-9430-c79765e57cda',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b3bc8d2a-4731-42d8-9430-c79765e57cda',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160412T192145Z:b3bc8d2a-4731-42d8-9430-c79765e57cda',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:21:45 GMT',
  connection: 'close' });
 return result; }]];