# Microsoft Azure SDK for Node.js - Storage Management

This project provides a Node.js package that makes it easy to manage Microsoft Azure Container Registry Resources.Right now it supports:
- **Node.js version: 4.x.x or higher**

## How to Install

```bash
npm install azure-arm-containerregistry
```
## How to Use

### Authentication, client creation and listing container registries as an example

 ```javascript
 var msRestAzure = require('ms-rest-azure');
 var registryManagementClient = require('azure-arm-containerregistry');
 
 // Interactive Login
 msRestAzure.interactiveLogin(function(err, credentials) {
  var client = new registryManagementClient(credentials, 'your-subscription-id');
  client.registries.list(function(err, result) {
    if (err) console.log(err);
    console.log(result);
  });
 });
 ```

### Create the RegistryManagementClient

```javascript
var registryManagementClient = require('azure-arm-containerregistry');
var client = new registryManagementClient(credentials, 'your-subscription-id');
```

## Create a Container Registry

```javascript
var createParameters = {
  location: 'West US',
};
client.registries.create(groupName, accountName, createParameters, function (err, result, request, response) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
```

## Get properties of a Container Registry

```javascript
client.registries.getProperties(groupName, accountName, function (err, result, request, response) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
```

## List all the registries in a specific resource group

```javascript
client.registries.listByResourceGroup(groupName, function (err, result, request, response) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
```

## List all the registries in the current subscription

```javascript
client.registries.list(function (err, result, request, response) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
```

## Delete a Container Registry

```javascript
client.registries.deleteMethod(groupName, accountName, function (err, result, request, response) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
```

## Related projects

- [Microsoft Azure SDK for Node.js - All-up](https://github.com/WindowsAzure/azure-sdk-for-node)
