/**
 *
 * Created by alexmahabir on 12/23/14.
 * Test script bundled example
 */


function main() {
    var mail = actions.create("mail");
    mail.parameters.to = "alex.mahabir@alfresco.com";
    mail.parameters.subject = "Hello from JavaScript";
    mail.parameters.from = "alex.mahabir@alfresco.com";
    mail.parameters.template = root.childByNamePath
    ("Company Home/Data Dictionary/Email Templates/notify_user_email.ftl");
    mail.parameters.text = "some text, in case template is not found";
    mail.execute(doc);
}


main();