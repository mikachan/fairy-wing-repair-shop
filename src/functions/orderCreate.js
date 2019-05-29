const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * Captures payment token and creates order.
 */
module.exports.handler = async (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    const order = requestBody.order;
    const source = requestBody.token.id;

    const response = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: JSON.stringify({
            data: order,
            source: source,
            message: "Order placed successfully!"
        })
    };

    /** Respond with status code 500 and error message */
    function errorResponse(err) {
        const response = {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            statusCode: 500,
            body: JSON.stringify({
                error: err.message
            })
        };
        callback(null, response);
    }

    try {
        const stripeOrder = await stripe.orders.create(order);
        console.log(`Order created: ${stripeOrder.id}`);
        await stripe.orders.pay(stripeOrder.id, { source });
    } catch (err) {
        console.log(`Order error: ${err}`);
        return errorResponse(err);
    }
    return callback(null, response);
};
