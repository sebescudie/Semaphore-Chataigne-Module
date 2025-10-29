function startTask(projectId, templateId, limit) {
    var payload = {};
    payload.template_id = templateId;
    payload.limit = limit;
    
    var params = {};
    params.extraHeaders = formatHeaders(local.parameters.getChild("token").get());
    params.payload = payload;

    local.sendPOST("/project/" + projectId + "/tasks", params);
}

function getTaskOutput(projectId, taskId){
    var params = {};
    params.extraHeaders = formatHeaders(local.parameters.getChild("token").get());
    
    local.sendGET("project/" + projectId + "/tasks/" + taskId, params);
}

function formatHeaders(token){
    return "Authorization: Bearer " + token + "\rContent-Type: application/json" + "\rAccept: application/json, text/plain, */*";
}