import { APIGatewayEvent, Callback, Context, SNSEvent, SNSMessage } from 'aws-lambda';
import slash  from 'slash';

console.log(`The Layer directory is: ${slash(process.env.DEMO_LAYER_ROOT!)}/libs/test-class`)

const TestClass =  require(`${slash(process.env.DEMO_LAYER_ROOT!)}/libs/test-class`);

const testClass = new TestClass();
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