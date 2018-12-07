/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Facebook.e5632e35.png",
    "revision": "08ea4a75d700770080503e587939d554"
  },
  {
    "url": "index.html",
    "revision": "3ac9537bc55735d3d19fc13cbf996350"
  },
  {
    "url": "logo.de01bb0e.png",
    "revision": "1ccfe27ec2f4c471d3e5092791895a68"
  },
  {
    "url": "new1.27f80ebc.jpg",
    "revision": "d70bcb3be25954c61b7b51f99459fd86"
  },
  {
    "url": "new2.003f6e38.jpg",
    "revision": "5b4de8746474ccb6c8192ae0d3eed9af"
  },
  {
    "url": "new3.50840ba3.jpg",
    "revision": "c7a4f815163c7504b232ffec5bce4f4f"
  },
  {
    "url": "qwe.1d6292ad.jpg",
    "revision": "1162f473c3fda59fedcc7df1851be937"
  },
  {
    "url": "style.e308ff8e.css",
    "revision": "807bc6e582186017c136f1f5b07f4a64"
  },
  {
    "url": "style.e308ff8e.js",
    "revision": "6aac13645b72123ca87c23fbf04901b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
