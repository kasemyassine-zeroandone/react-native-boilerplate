const awsConfig = {
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'eu-west-1:d941f346-161a-476b-9964-934dcd8b1880',
    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-1',
    // // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: 'eu-west-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-1_3TPQjLLLD',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '3m2jo5h6g5mj3ft40vnhi3ar5a',
  },
  API: {
    endpoints: [
      {
        name: 'Market',
        endpoint: 'https://c3lngazysb.execute-api.eu-west-1.amazonaws.com/dev',
        region: 'eu-west-1',
      },
    ],
  },
  PushNotification: {
    appId: '1:902793611820:android:d3f9ff5bbba04d6c08df89',
  },
  Storage: {
    AWSS3: {
      bucket: 'relife-market-storage-dev', //REQUIRED -  Amazon S3 bucket name
      region: 'eu-west-1', //OPTIONAL -  Amazon service region
    },
  },
};

export default awsConfig;