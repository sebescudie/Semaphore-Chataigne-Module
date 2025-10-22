function startTask(projectId, templateId) {
    var payload = {};
    payload.template_id = templateId;
    
    var params = {};
    params.extraHeaders = "Authorization: Bearer " + local.parameters.getChild("token").get() + "\rContent-Type: application/json" + "\rAccept: application/json, text/plain, */*";
    params.payload = payload;

    local.sendPOST("project/" + projectId + "/tasks", params);
}