import { 
  IDENTITY_POOL_ID, 
  USER_POOL_ID, 
  USER_POOL_WEB_CLIENT_ID,
  NAME,
  ENDPOINT,
  APP_ID,
  BUCKET,
  REGION
} from '../env.json';

const awsConfig = {
  Auth: {
    identityPoolId: IDENTITY_POOL_ID,
    region: REGION,
    userPoolId: USER_POOL_ID,
    userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: NAME,
        endpoint: ENDPOINT,
        region: REGION,
      },
    ],
  },
  PushNotification: {
    appId: APP_ID,
  },
  Storage: {
    AWSS3: {
      bucket: BUCKET,
      region: REGION,
    },
  },
};

export default awsConfig;