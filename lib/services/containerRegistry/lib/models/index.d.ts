/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the RegistryParameters class.
 * @constructor
 * @member {string} [id]
 * 
 * @member {string} [name]
 * 
 * @member {string} [location]
 * 
 * @member {object} [tags]
 * 
 * @member {string} [type]
 * 
 * @member {object} [properties]
 * 
 * @member {string} [properties.loginServer]
 * 
 * @member {string} [properties.username]
 * 
 * @member {string} [properties.key]
 * 
 * @member {date} [properties.creationDate]
 * 
 */
export interface RegistryParameters {
    id?: string;
    name?: string;
    location?: string;
    tags?: { [propertyName: string]: string };
    type?: string;
    properties?: RegistryProperties;
}

/**
 * @class
 * Initializes a new instance of the RegistryProperties class.
 * @constructor
 * @member {string} [loginServer]
 * 
 * @member {string} [username]
 * 
 * @member {string} [key]
 * 
 * @member {date} [creationDate]
 * 
 */
export interface RegistryProperties {
    loginServer?: string;
    username?: string;
    key?: string;
    creationDate?: Date;
}

/**
 * @class
 * Initializes a new instance of the ResourceListRegistryParameters class.
 * @constructor
 * @member {array} [value]
 * 
 */
export interface ResourceListRegistryParameters {
    value?: RegistryParameters[];
}