// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake11362.azuredatalakestore.net\",\"accountId\":\"10fb07d1-7353-443f-b529-ceb233756312\",\"creationTime\":\"2016-04-28T01:04:09.0392712Z\",\"lastModifiedTime\":\"2016-04-28T01:04:09.0392712Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake11362\",\"name\":\"testdatalake11362\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake23104.azuredatalakestore.net\",\"accountId\":\"1c8b511a-6150-4485-b1b5-4f57febd18b5\",\"creationTime\":\"2016-04-28T01:04:46.0154923Z\",\"lastModifiedTime\":\"2016-04-28T01:04:46.0154923Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake23104\",\"name\":\"testdatalake23104\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6675.azuredatalakestore.net\",\"accountId\":\"81f5b56e-eac6-424a-96c7-3e63e473b9f4\",\"creationTime\":\"2016-05-25T00:26:22.2405732Z\",\"lastModifiedTime\":\"2016-05-25T00:26:22.2405732Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls6675\",\"name\":\"xplattestadls6675\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9761.azuredatalakestore.net\",\"accountId\":\"9b63572f-74a8-4cd3-81fd-1ca88519d0d2\",\"creationTime\":\"2016-05-25T00:25:49.5379278Z\",\"lastModifiedTime\":\"2016-05-25T00:25:49.5379278Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761\",\"name\":\"xplattestadls9761\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2134',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '409023fa-e742-4960-9a78-d66fd6e50336',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'dcbc5ded-6bfa-427c-8a4d-da8b8000432b',
  'x-ms-routing-request-id': 'WESTUS:20160525T002655Z:dcbc5ded-6bfa-427c-8a4d-da8b8000432b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake11362.azuredatalakestore.net\",\"accountId\":\"10fb07d1-7353-443f-b529-ceb233756312\",\"creationTime\":\"2016-04-28T01:04:09.0392712Z\",\"lastModifiedTime\":\"2016-04-28T01:04:09.0392712Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake11362\",\"name\":\"testdatalake11362\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake23104.azuredatalakestore.net\",\"accountId\":\"1c8b511a-6150-4485-b1b5-4f57febd18b5\",\"creationTime\":\"2016-04-28T01:04:46.0154923Z\",\"lastModifiedTime\":\"2016-04-28T01:04:46.0154923Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake23104\",\"name\":\"testdatalake23104\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6675.azuredatalakestore.net\",\"accountId\":\"81f5b56e-eac6-424a-96c7-3e63e473b9f4\",\"creationTime\":\"2016-05-25T00:26:22.2405732Z\",\"lastModifiedTime\":\"2016-05-25T00:26:22.2405732Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls6675\",\"name\":\"xplattestadls6675\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9761.azuredatalakestore.net\",\"accountId\":\"9b63572f-74a8-4cd3-81fd-1ca88519d0d2\",\"creationTime\":\"2016-05-25T00:25:49.5379278Z\",\"lastModifiedTime\":\"2016-05-25T00:25:49.5379278Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761\",\"name\":\"xplattestadls9761\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2134',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '409023fa-e742-4960-9a78-d66fd6e50336',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'dcbc5ded-6bfa-427c-8a4d-da8b8000432b',
  'x-ms-routing-request-id': 'WESTUS:20160525T002655Z:dcbc5ded-6bfa-427c-8a4d-da8b8000432b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6675.azuredatalakestore.net\",\"accountId\":\"81f5b56e-eac6-424a-96c7-3e63e473b9f4\",\"creationTime\":\"2016-05-25T00:26:22.2405732Z\",\"lastModifiedTime\":\"2016-05-25T00:26:22.2405732Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls6675\",\"name\":\"xplattestadls6675\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9761.azuredatalakestore.net\",\"accountId\":\"9b63572f-74a8-4cd3-81fd-1ca88519d0d2\",\"creationTime\":\"2016-05-25T00:25:49.5379278Z\",\"lastModifiedTime\":\"2016-05-25T00:25:49.5379278Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761\",\"name\":\"xplattestadls9761\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1100',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bd708b45-aa21-40a5-b47b-7e0eb0bfa7bc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a76df2fe-158c-4c94-83ba-ad2667292dba',
  'x-ms-routing-request-id': 'WESTUS:20160525T002656Z:a76df2fe-158c-4c94-83ba-ad2667292dba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6675.azuredatalakestore.net\",\"accountId\":\"81f5b56e-eac6-424a-96c7-3e63e473b9f4\",\"creationTime\":\"2016-05-25T00:26:22.2405732Z\",\"lastModifiedTime\":\"2016-05-25T00:26:22.2405732Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls6675\",\"name\":\"xplattestadls6675\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9761.azuredatalakestore.net\",\"accountId\":\"9b63572f-74a8-4cd3-81fd-1ca88519d0d2\",\"creationTime\":\"2016-05-25T00:25:49.5379278Z\",\"lastModifiedTime\":\"2016-05-25T00:25:49.5379278Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls9761\",\"name\":\"xplattestadls9761\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1100',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bd708b45-aa21-40a5-b47b-7e0eb0bfa7bc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a76df2fe-158c-4c94-83ba-ad2667292dba',
  'x-ms-routing-request-id': 'WESTUS:20160525T002656Z:a76df2fe-158c-4c94-83ba-ad2667292dba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:55 GMT',
  connection: 'close' });
 return result; }]];