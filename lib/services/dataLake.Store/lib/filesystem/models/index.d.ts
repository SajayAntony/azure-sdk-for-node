/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the FileOperationResult class.
 * @constructor
 * The result of the request or operation.
 * @member {boolean} [boolean] Gets or sets the result of the operation or
 * request
 * 
 */
export interface FileOperationResult {
    boolean?: boolean;
}

/**
 * @class
 * Initializes a new instance of the AclStatus class.
 * @constructor
 * Data Lake ACL status information
 * @member {array} [entries] Gets or sets the list of ACLSpec entries on a
 * file or folder.
 * 
 * @member {string} [group] Gets or sets the group owner.
 * 
 * @member {string} [owner] Gets or sets the user who is the owner.
 * 
 * @member {boolean} [stickyBit] Gets or sets the indicator of whether the
 * sticky bit is on or off.
 * 
 */
export interface AclStatus {
    entries?: string[];
    group?: string;
    owner?: string;
    stickyBit?: boolean;
}

/**
 * @class
 * Initializes a new instance of the AclStatusResult class.
 * @constructor
 * Data Lake Store filesystem Acl information.
 * @member {object} [aclStatus] Gets or sets the AclStatus object for a given
 * folder or file
 * 
 * @member {array} [aclStatus.entries] Gets or sets the list of ACLSpec
 * entries on a file or folder.
 * 
 * @member {string} [aclStatus.group] Gets or sets the group owner.
 * 
 * @member {string} [aclStatus.owner] Gets or sets the user who is the owner.
 * 
 * @member {boolean} [aclStatus.stickyBit] Gets or sets the indicator of
 * whether the sticky bit is on or off.
 * 
 */
export interface AclStatusResult {
    aclStatus?: AclStatus;
}

/**
 * @class
 * Initializes a new instance of the HomeDirectoryResult class.
 * @constructor
 * Data Lake Store filesystem home path response.
 * @member {string} [path] Gets or sets the file path to the home directory
 * 
 */
export interface HomeDirectoryResult {
    path?: string;
}

/**
 * @class
 * Initializes a new instance of the ContentSummary class.
 * @constructor
 * Data Lake content summary information
 * @member {number} [directoryCount] Gets or sets the number of directories.
 * 
 * @member {number} [fileCount] Gets or sets the number of files.
 * 
 * @member {number} [length] Gets or sets the number of bytes used by the
 * contet.
 * 
 * @member {number} [quota] Gets or sets the namespace quota of this directory.
 * 
 * @member {number} [spaceConsumed] Gets or sets the disk space consumed by
 * the content.
 * 
 * @member {number} [spaceQuota] Gets or sets the disk space quota.
 * 
 */
export interface ContentSummary {
    directoryCount?: number;
    fileCount?: number;
    length?: number;
    quota?: number;
    spaceConsumed?: number;
    spaceQuota?: number;
}

/**
 * @class
 * Initializes a new instance of the ContentSummaryResult class.
 * @constructor
 * Data Lake Store filesystem content summary information response.
 * @member {object} [contentSummary] Gets or sets the content summary for the
 * specified path
 * 
 * @member {number} [contentSummary.directoryCount] Gets or sets the number of
 * directories.
 * 
 * @member {number} [contentSummary.fileCount] Gets or sets the number of
 * files.
 * 
 * @member {number} [contentSummary.length] Gets or sets the number of bytes
 * used by the contet.
 * 
 * @member {number} [contentSummary.quota] Gets or sets the namespace quota of
 * this directory.
 * 
 * @member {number} [contentSummary.spaceConsumed] Gets or sets the disk space
 * consumed by the content.
 * 
 * @member {number} [contentSummary.spaceQuota] Gets or sets the disk space
 * quota.
 * 
 */
export interface ContentSummaryResult {
    contentSummary?: ContentSummary;
}

/**
 * @class
 * Initializes a new instance of the FileStatusProperties class.
 * @constructor
 * Data Lake file status properties information
 * @member {number} [accessTime] Gets or sets the last access time.
 * 
 * @member {number} [blockSize] Gets or sets the block size for the file.
 * 
 * @member {number} [childrenNum] Gets or sets the number of children in the
 * directory.
 * 
 * @member {number} [fileId] Gets or sets the file identifier.
 * 
 * @member {string} [group] Gets or sets the group owner.
 * 
 * @member {number} [length] Gets or sets the number of bytes in a file.
 * 
 * @member {number} [modificationTime] Gets or sets the modification time.
 * 
 * @member {string} [owner] Gets or sets the user who is the owner.
 * 
 * @member {string} [pathSuffix] Gets or sets the path suffix.
 * 
 * @member {string} [permission] Gets or sets the permission represented as an
 * octal string.
 * 
 * @member {number} [replication] Gets or sets the number of replications of a
 * file.
 * 
 * @member {string} [type] Gets or sets the type of the path object. Possible
 * values for this property include: 'File', 'Directory'.
 * 
 */
export interface FileStatusProperties {
    accessTime?: number;
    blockSize?: number;
    childrenNum?: number;
    fileId?: number;
    group?: string;
    length?: number;
    modificationTime?: number;
    owner?: string;
    pathSuffix?: string;
    permission?: string;
    replication?: number;
    type?: string;
}

/**
 * @class
 * Initializes a new instance of the FileStatuses class.
 * @constructor
 * Data Lake file status list information
 * @member {array} [fileStatus] Gets or sets the object containing the list of
 * properties of the files.
 * 
 */
export interface FileStatuses {
    fileStatus?: FileStatusProperties[];
}

/**
 * @class
 * Initializes a new instance of the FileStatusesResult class.
 * @constructor
 * Data Lake Store filesystem file status list information response.
 * @member {object} [fileStatuses] Gets or sets the object representing the
 * list of file statuses
 * 
 * @member {array} [fileStatuses.fileStatus] Gets or sets the object
 * containing the list of properties of the files.
 * 
 */
export interface FileStatusesResult {
    fileStatuses?: FileStatuses;
}

/**
 * @class
 * Initializes a new instance of the FileStatusResult class.
 * @constructor
 * Data Lake Store filesystem file status information response.
 * @member {object} [fileStatus] Gets or sets the file status object
 * associated with the specified file path
 * 
 * @member {number} [fileStatus.accessTime] Gets or sets the last access time.
 * 
 * @member {number} [fileStatus.blockSize] Gets or sets the block size for the
 * file.
 * 
 * @member {number} [fileStatus.childrenNum] Gets or sets the number of
 * children in the directory.
 * 
 * @member {number} [fileStatus.fileId] Gets or sets the file identifier.
 * 
 * @member {string} [fileStatus.group] Gets or sets the group owner.
 * 
 * @member {number} [fileStatus.length] Gets or sets the number of bytes in a
 * file.
 * 
 * @member {number} [fileStatus.modificationTime] Gets or sets the
 * modification time.
 * 
 * @member {string} [fileStatus.owner] Gets or sets the user who is the owner.
 * 
 * @member {string} [fileStatus.pathSuffix] Gets or sets the path suffix.
 * 
 * @member {string} [fileStatus.permission] Gets or sets the permission
 * represented as an octal string.
 * 
 * @member {number} [fileStatus.replication] Gets or sets the number of
 * replications of a file.
 * 
 * @member {string} [fileStatus.type] Gets or sets the type of the path
 * object. Possible values for this property include: 'File', 'Directory'.
 * 
 */
export interface FileStatusResult {
    fileStatus?: FileStatusProperties;
}

/**
 * @class
 * Initializes a new instance of the FileCreateOpenAndAppendResult class.
 * @constructor
 * The response recieved after the BeginOpen, BeginCreate and BeginAppend
 * requests.
 * @member {string} [location] Gets or sets the redirect URI location with any
 * necessary parameters
 * 
 */
export interface FileCreateOpenAndAppendResult {
    location?: string;
}
