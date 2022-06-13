const getCode = function () => {
    let code;
    const telerivet = require("telerivet");
    try {
        const tr = new telerivet.API("urMa__eM1fqAXXLmJj9HTXcb2meU6CvM9BSX");
        const project = tr.initProjectById("PJ7115ea5398add731");
        const msg = project.queryMessages({
            "direction": "incoming",
            "message_type": "sms",
            "time_created[min]": tsmin.toString(),
            "time_created[max]": tsmax.toString(),
            "status": "received",
        });
        msg.limit(1).each(async function (err, message) {
            if (err) {
                console.log("Message"+" "+":"+err.message);
            }
            if (message) {
                const smscode = await message.data.content;
                code = smscode.replace("Votre code de vérification Rakuten France Integ est: ", "");
            }
            return code;
        });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getCode
};