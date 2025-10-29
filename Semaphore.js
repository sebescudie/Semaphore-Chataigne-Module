function startTask(projectId, templateId, limit) {
    var payload = {};
    payload.template_id = templateId;
    payload.limit = limit;
    
    var params = {};
    params.extraHeaders = formatHeaders(local.parameters.getChild("token").get());
    params.payload = payload;

    local.sendPOST("/project/" + projectId + "/tasks", params);
}

function getTask(projectId, taskId){
    var params = {};
    params.extraHeaders = formatHeaders(local.parameters.getChild("token").get());
    
    local.sendGET("/project/" + projectId + "/tasks/" + taskId, params);
}

function formatHeaders(token){
    return "Authorization: Bearer " + token + "\rContent-Type: application/json" + "\rAccept: application/json, text/plain, */*";
}

function dataEvent(data, requestURL){
    var result = JSON.parse(data);
    
    local.values.getChild("taskStatus").getChild("id").set(result.id);
    local.values.getChild("taskStatus").getChild("status").set(result.status);
    local.values.getChild("taskStatus").getChild("template").set(result.template_id);
}