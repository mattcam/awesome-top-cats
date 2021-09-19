# awesome-top-cats

> Example application exploring how to use AWS serverless computing for showing top 5 best of breed cats.

Example application showing an approach for deploying a simple [Express](https://expressjs.com/) website use [AWS serverless](https://aws.amazon.com/serverless/) computing. Feedback, suggestions and comments are all welcome on [issues](https://github.com/mattcam/awesome-top-cats/issues).

## Install

Following install notes are for use with Mac/Linux.


1. Clone this repository locally and install modules.

```
git clone https://github.com/mattcam/awesome-top-cats.git
cd aawesome-top-cats
npm install

```

2. Organise a (The Cat API)[https://thecatapi.com/] API Key.

3. Start the application locally to ensure that the API Key is correct.

```
THECATAPI_KEY=[replace-with-The-Cat-API-key] npm start
```

4. To be completed. At this stage there are no automated tests setup for the app. Test the app locally by making sure that the app is displaying the top results for the criteria. Use the endpoint documented here https://docs.thecatapi.com/api-reference/breeds/breeds-list to get a list of all cats on the API.

5. Follow the steps documented here https://github.com/vendia/serverless-express/tree/mainline/examples/basic-starter-api-gateway-v1#readme for configuring the app for your AWS environment.

   1. The app uses https://github.com/vendia/serverless-express for deployment to the AWS serverless platform.  In summary, the following config in package.json will need to be changed to appropriate values.

   ```
   "s3BucketName": "sls-xpress-edge1",
   "region": "us-east-1",
   "cloudFormationStackName": "ServerlessExpressStack",
   ```

   2. Ensure that `cross-var` is available, if not then use the following command.

   ```
   npm install -g cross-var
   ```

   3. Run `npm run setup`.

   4. To be completed. Additional steps required because application on AWS is throwing an error.

6.  To be completed. Setup CDN (for example [Amazon Cloud Front](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) so that request to app are cached.

## Release notes

* v0.9.1 - Code name **Kitten** released Sept 19, 2021 - the offical initial release of awesome-top-cats.
