/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Workspace/devtory_blog/public/2018/11/11/ReactNative(Expo)에 Typescript 적용/index.html","dcdd943268da0ef7333a9080c5b8f4b6"],["D:/Workspace/devtory_blog/public/2018/11/11/ReactNative(Expo)에 Typescript 적용/result.jpg","6ec1b1a419875e2d1d52a85be5f6d515"],["D:/Workspace/devtory_blog/public/2018/11/13/React Typescript 프로젝트에 MobX 적용/index.html","65290d3aad3fb63a6c5fe6bf043cc48b"],["D:/Workspace/devtory_blog/public/2018/11/13/React Typescript 프로젝트에 MobX 적용/result.gif","3cb548361fd8bf4b9b00b6de3697041a"],["D:/Workspace/devtory_blog/public/2018/11/23/Promise와 Observable 차이/index.html","c8a24f067f275b0738d07413bb3cad4e"],["D:/Workspace/devtory_blog/public/2018/11/27/ReactNative(Expo)에 Mobx(ES6) 적용하기/index.html","c68e873917a2a2d5c5cd7a7e04ba787c"],["D:/Workspace/devtory_blog/public/archives/2018/11/index.html","0b7a0d81184738541cd66a03dd80bebb"],["D:/Workspace/devtory_blog/public/archives/2018/index.html","416b9f91a9e0b34bb9b68701b1f7b7d6"],["D:/Workspace/devtory_blog/public/archives/index.html","ef0b9be1eabb9d493f90bd473e56c68a"],["D:/Workspace/devtory_blog/public/categories/Frontend/React/index.html","fc9eee76883291ed8db6efe8f20ad3e9"],["D:/Workspace/devtory_blog/public/categories/Frontend/index.html","c89d4c28b7e6ffbceb5c08a75439fe09"],["D:/Workspace/devtory_blog/public/categories/Javascript/index.html","e5c3d021aef91de32a93a1e0b1a37d73"],["D:/Workspace/devtory_blog/public/categories/Mobile/ReactNative/index.html","57f8a566fd5583c336235f320bc30189"],["D:/Workspace/devtory_blog/public/categories/Mobile/index.html","6c992bd0544066c27b449cd50ce6cf03"],["D:/Workspace/devtory_blog/public/css/images/logo-header.png","3f81ea77dffb79a36b2538e401b7675f"],["D:/Workspace/devtory_blog/public/css/images/opacity-10.png","86e659d06525c84fd7819ad538562652"],["D:/Workspace/devtory_blog/public/css/images/s-left.png","64e4220263a6370864f25b19399397f2"],["D:/Workspace/devtory_blog/public/css/images/thumb-default-small.png","0d3d38c94b750b66de049f80a7772ea7"],["D:/Workspace/devtory_blog/public/css/images/thumb-default.png","ca390f3d20b8ecbc84b807974b656572"],["D:/Workspace/devtory_blog/public/css/style.css","c9bbcab5e0ce5a2aaee230e5a3cdaa2e"],["D:/Workspace/devtory_blog/public/index.html","295f4b6a0443b68246c51eaf2faff749"],["D:/Workspace/devtory_blog/public/js/insight.js","c0ce0c62e8584741021f163f618b2982"],["D:/Workspace/devtory_blog/public/js/main.js","653e969ed0c2a122e4a64088c813db19"],["D:/Workspace/devtory_blog/public/libs/font-awesome/css/font-awesome.css","2fab33f5c6ebbd499d3cc889764f4751"],["D:/Workspace/devtory_blog/public/libs/font-awesome/css/font-awesome.min.css","1e5806ce1b30723204849b47fb0d41c6"],["D:/Workspace/devtory_blog/public/libs/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["D:/Workspace/devtory_blog/public/libs/font-awesome/fonts/fontawesome-webfont.svg","24c601e721ebd8279d38e2cfa0d01bc6"],["D:/Workspace/devtory_blog/public/libs/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["D:/Workspace/devtory_blog/public/libs/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["D:/Workspace/devtory_blog/public/libs/jquery/3.3.1/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["D:/Workspace/devtory_blog/public/libs/justified-gallery/jquery.justifiedGallery.min.js","7b8f9e0d4b845e90381ae044b8b5e657"],["D:/Workspace/devtory_blog/public/libs/justified-gallery/justifiedGallery.min.css","66273e9be00c1c6e461e844818a5b825"],["D:/Workspace/devtory_blog/public/libs/lightgallery/css/lg-fb-comment-box.css","74ec8989cfa962b2b97e7fdd9dcf750d"],["D:/Workspace/devtory_blog/public/libs/lightgallery/css/lg-fb-comment-box.min.css","f216c9f755ca3131d5d8abff3eee5193"],["D:/Workspace/devtory_blog/public/libs/lightgallery/css/lg-transitions.css","ae8049e076fea25a300452b938355bbd"],["D:/Workspace/devtory_blog/public/libs/lightgallery/css/lg-transitions.min.css","8d6ffc7a2e5c65077aaffa690b3e90b2"],["D:/Workspace/devtory_blog/public/libs/lightgallery/css/lightgallery.css","a9126a0ed8ec38fd26c82a58c2cfdae3"],["D:/Workspace/devtory_blog/public/libs/lightgallery/css/lightgallery.min.css","6ef800e2f88ba833dc75b4872ee770f9"],["D:/Workspace/devtory_blog/public/libs/lightgallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["D:/Workspace/devtory_blog/public/libs/lightgallery/fonts/lg.svg","0cb1b8af9950584b5cc8e8250e045508"],["D:/Workspace/devtory_blog/public/libs/lightgallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["D:/Workspace/devtory_blog/public/libs/lightgallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["D:/Workspace/devtory_blog/public/libs/lightgallery/img/loading.gif","0aeca8b09888accfccf11976b34c4e64"],["D:/Workspace/devtory_blog/public/libs/lightgallery/img/video-play.png","4f03bd8dec67211ade8abdab39dcbf4a"],["D:/Workspace/devtory_blog/public/libs/lightgallery/img/vimeo-play.png","699d005153517ee4264615dd1e4e2b64"],["D:/Workspace/devtory_blog/public/libs/lightgallery/img/youtube-play.png","96bc9d7e27d077372cc0bc9524c500e6"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-autoplay.js","eead116e849544337f98e1f909984da6"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-autoplay.min.js","9cc557cce697d947b82db9c63bec1f56"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-fullscreen.js","4f138d53ae7b5f8ebec5917daebe1892"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-fullscreen.min.js","ad666d733183e14359ad2dc3b17ed161"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-hash.js","4de75c991f347a3501fdb2fe0833b1cf"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-hash.min.js","17182adfcf75dccb64391343c90586ad"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-pager.js","2ddc77bc71fdd588e05ee3f27b6e187b"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-pager.min.js","79ae9590a49eece30be5a7318d2836c6"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-share.js","40bb22981ba549bf9086118147608b4e"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-share.min.js","f38dda2f772f0cc5a143e40e0cb96eae"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-thumbnail.js","02e7bfe2e732f524cd3dd6f78dec110b"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-thumbnail.min.js","16d7b8599fddeb7af22cf00684ab2b25"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-video.js","4e1459c4a990ca4f9fe58f385762b31a"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-video.min.js","974a23bceeaada9b60c467129acfc422"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-zoom.js","284a3d8af84caf362eea54eefe89b145"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lg-zoom.min.js","280784d5d0c1cd5f74c758eb44217149"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lightgallery.js","22c34dbc5304139b95331d24c547c5fa"],["D:/Workspace/devtory_blog/public/libs/lightgallery/js/lightgallery.min.js","d8362d715c324c128556fd285143e0af"],["D:/Workspace/devtory_blog/public/libs/source-code-pro/styles.css","fd6b67f05e7415482cf4e038fd39efed"],["D:/Workspace/devtory_blog/public/libs/titillium-web/styles.css","9a621d9a0f9bf19259f840a5c305f5df"],["D:/Workspace/devtory_blog/public/tags/ES6/index.html","7fc7689ef2da2a51c9e65821cf275ea0"],["D:/Workspace/devtory_blog/public/tags/Expo/index.html","8dbd2ca74b598cfe3aa9be9961cdfa17"],["D:/Workspace/devtory_blog/public/tags/Mobx/index.html","4e696448f46056bdf481b777878a1f6a"],["D:/Workspace/devtory_blog/public/tags/React/index.html","2b40e90d85159c50d3362ca831e7562f"],["D:/Workspace/devtory_blog/public/tags/ReactNative/index.html","0819ad060f20bdaf1f100a8e393f00ef"],["D:/Workspace/devtory_blog/public/tags/Typescript/index.html","93d447e7aed686edc6f96546a8658b5c"],["D:/Workspace/devtory_blog/public/tags/javascript/index.html","1187d73d922edab610d7f302650971ac"],["D:/Workspace/devtory_blog/public/tags/observable/index.html","86fbe8c39859ac7c48717b909fc3912f"],["D:/Workspace/devtory_blog/public/tags/promise/index.html","8fb8f68c68444a50384502577bd83690"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







