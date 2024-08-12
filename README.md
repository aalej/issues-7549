# Repro for issue 7549

## Versions

firebase-tools: v13.15.1<br>
node: v20.16.0<br>
platform: Windows 10

## Steps to reproduce

1. Run `firebase deploy --project PROJECT_ID`. See console logs below
<details>
  <summary>console logs</summary>

```sh
> firebase --version
13.15.1

> firebase deploy --project PROJECT_ID

   Thank you for trying our early preview of Next.js support on Firebase Hosting.
   During the preview, support is best-effort and breaking changes can be expected. Proceed with caution.
   The integration is known to work with Next.js version 12 - 14.0. You may encounter errors.

   Documentation: https://firebase.google.com/docs/hosting/frameworks/nextjs
   File a bug: https://github.com/firebase/firebase-tools/issues/new?template=bug_report.md
   Submit a feature request: https://github.com/firebase/firebase-tools/issues/new?template=feature_request.md
   We'd love to learn from you. Express your interest in helping us shape the future of Firebase Hosting: https://goo.gle/41enW5X

  ▲ Next.js 14.2.5



   Creating an optimized production build ...

 ✓ Compiled successfully

   Linting and checking validity of types ...

   Collecting page data ...

   Generating static pages (0/6) ...

   Generating static pages (1/6)

   Generating static pages (2/6)

   Generating static pages (4/6)

 ✓ Generating static pages (6/6)

   Finalizing page optimization ...

   Collecting build traces ...



Route (app)                              Size     First Load JS
┌ ○ /                                    5.25 kB        92.3 kB
├ ○ /_not-found                          871 B          87.9 kB
└ ƒ /api                                 0 B                0 B
+ First Load JS shared by all            87 kB
  ├ chunks/23-b75664ace61c0abb.js        31.5 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.6 kB
  └ other shared chunks (total)          1.86 kB



○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


Building a Cloud Function to run this application. This is needed due to:
 • non-static component /api/route

'esbuild' is not recognized as an internal or external command,
operable program or batch file.
Failed to get global esbuild version: Error: Command failed: esbuild --version
'esbuild' is not recognized as an internal or external command,
operable program or batch file.


up to date in 16s

32 packages are looking for funding
  run `npm fund` for details

=== Deploying to 'PROJECT_ID'...

i  deploying functions, hosting
i  functions: preparing codebase firebase-frameworks-PROJECT_ID for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
+  functions: required API cloudbuild.googleapis.com is enabled
+  functions: required API cloudfunctions.googleapis.com is enabled
+  artifactregistry: required API artifactregistry.googleapis.com is enabled
!  functions: package.json indicates an outdated version of firebase-functions. Please upgrade using npm install --save firebase-functions@latest in your functions directory.
!  functions: Please note that there will be breaking changes when you upgrade.
i  functions: Loading and analyzing source code for codebase firebase-frameworks-PROJECT_ID to
determine what to deploy
Serving at port 8725

i  functions: Loaded environment variables from .env.
i  functions: preparing .firebase\PROJECT_ID\functions directory for uploading...
i  functions: packaged C:\Users\PATH\my-app\.firebase\PROJECT_ID\functions (20.51 MB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
+  functions: required API eventarc.googleapis.com is enabled
+  functions: required API pubsub.googleapis.com is enabled
+  functions: required API run.googleapis.com is enabled
+  functions: required API storage.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
+  functions: .firebase\PROJECT_ID\functions folder uploaded successfully
i  hosting[PROJECT_ID]: beginning deploy...
i  hosting[PROJECT_ID]: found 28 files in .firebase\PROJECT_ID\hosting
+  hosting[PROJECT_ID]: file upload complete
i  functions: updating Node.js 20 (2nd Gen) function firebase-frameworks-PROJECT_ID:SSR_FUNCTION_NAME(us-central1)...
+  functions[firebase-frameworks-PROJECT_ID:SSR_FUNCTION_NAME(us-central1)] Successful update operation.
Function URL (firebase-frameworks-PROJECT_ID:SSR_FUNCTION_NAME(us-central1)): https://SSR_FUNCTION_NAME-ordbvkvpsa-uc.a.run.app
i  functions: cleaning up build files...
i  hosting[PROJECT_ID]: finalizing version...
+  hosting[PROJECT_ID]: version finalized
i  hosting[PROJECT_ID]: releasing new version...
+  hosting[PROJECT_ID]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/PROJECT_ID/overview
Hosting URL: https://PROJECT_ID.web.app


```

</details>

## Notes

Error is not riased when downgrading to v13.15.0

Application is deployed even if error appears
