import { APIGatewayEvent, Callback, Context, SNSEvent, SNSMessage } from 'aws-lambda';

import {TestClass} from '@demo/layer-demo/libs/test-class'
const testClass: TestClass = new TestClass();
export const helloWorld = ((req: APIGatewayEvent, context: Context, callback: Callback) => {

    const response = {
		statusCode: 200,
		body: JSON.stringify({
			secretValue: context.awsRequestId,
			message: testClass.getGreeting()
		})
	};

	callback(null, response);

});