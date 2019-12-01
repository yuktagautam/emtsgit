const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: 'e802dea8',
    apiSecret: 'XySCf2gSsuJeB05a',
});

module.exports = (to, smsBoolean, visitorHostInformation, otp) => {
    var text;
    if (smsBoolean) {
         text = ` Hello ${visitorHostInformation.hostName}!
                       You have a Visitor.Below are the details of the visitor-
                       Name - ${visitorHostInformation.visitorName}
                       Email - ${visitorHostInformation.visitorEmail}
                       Phone - ${visitorHostInformation.visitorPhone}
                       Checkin Time - ${visitorHostInformation.checkInTime}
        `
    } else {
         text = `Your 6 digit OTP is ${otp}`
    }
    const from = 919711545082;
    nexmo.message.sendSms(from, to, text)
}