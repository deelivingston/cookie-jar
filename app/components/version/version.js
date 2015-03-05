'use strict';

angular.module('cookieJar.version', [
  'cookieJar.version.interpolate-filter',
  'cookieJar.version.version-directive'
])

.value('version', '0.1');
