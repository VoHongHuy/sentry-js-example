import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://934ff8c9005c49aa932af831fef18fd3@sentry.io/1330280',
  blacklistUrls: ['external-blacklist-url-for-sentry.s3-ap-northeast-1.amazonaws.com'],
});
