import { APIGatewayEvent, Callback, Context, SNSEvent, SNSMessage } from 'aws-lambda';

export const helloWorld = ((req: APIGatewayEvent, context: Context, callback: Callback) => {

    const response = {
		statusCode: 200,
		body: JSON.stringify({
			secretValue: context.awsRequestId,
			message: 'Hello world!!!'
		})
	};

	callback(null, response);

});