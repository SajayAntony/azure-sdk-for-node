var os = require('os');
var executeCmds = require('./executeCmds.js');

if (os.platform() !== 'win32') {
  throw new Error('The script can only run on windows platform');
}

var cmds = [
  { cmd: 'chcp 850' },//to avoid https://github.com/npm/npm/issues/6438
  { cmd: 'npm install'},
  { cmd: 'npm install grunt-cli -g'},
  { cmd: 'grunt generateCode'},
];

var updatePackageVersion = false;
var removeExistingSpecPackages = false;

process.argv.forEach(function(v){
  if (v.indexOf('updatePackageVersion') === 0){
    updatePackageVersion = true;
  } else if (v.indexOf('removeExistingSpecPackages') === 0) {
    removeExistingSpecPackages = true; 
  } 
});

console.log('***********');
console.log('*Info: Please make sure spec version was updated in <repository-root>\\packages.config');
if (updatePackageVersion) {
  console.log('*Info: Please make sure the version was updated in <repository-root>\\gruntfile.js');
}
console.log('*After you commit changes to remote, you can access tarball using link such as ' +
            'https://github.com/Azure/azure-sdk-for-node/tarball/dev/lib/services/computeManagement/');
console.log('***********');

if (updatePackageVersion) {
  cmds.push({ cmd: 'grunt updateVersions' });
}

if (removeExistingSpecPackages) {
  var packagesFolder = '"' + __dirname + '\\..\\packages' + '"';
  cmds.unshift({ cmd: 'if exist ' + packagesFolder + ' rmdir /s /q ' + packagesFolder });
}

executeCmds.execute(cmds);