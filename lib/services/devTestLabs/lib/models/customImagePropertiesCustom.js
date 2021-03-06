/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the CustomImagePropertiesCustom class.
 * @constructor
 * Properties for creating a custom image from a VHD.
 * @member {string} [imageName] The image name.
 * 
 * @member {boolean} [sysPrep] Indicates whether sysprep has been run on the
 * VHD.
 * 
 */
function CustomImagePropertiesCustom() {
}

/**
 * Defines the metadata of CustomImagePropertiesCustom
 *
 * @returns {object} metadata of CustomImagePropertiesCustom
 *
 */
CustomImagePropertiesCustom.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CustomImagePropertiesCustom',
    type: {
      name: 'Composite',
      className: 'CustomImagePropertiesCustom',
      modelProperties: {
        imageName: {
          required: false,
          serializedName: 'imageName',
          type: {
            name: 'String'
          }
        },
        sysPrep: {
          required: false,
          serializedName: 'sysPrep',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = CustomImagePropertiesCustom;
